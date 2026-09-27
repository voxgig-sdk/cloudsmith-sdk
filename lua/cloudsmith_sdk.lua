-- Cloudsmith SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("cloudsmith_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local CloudsmithSDK = {}
CloudsmithSDK.__index = CloudsmithSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

CloudsmithSDK._make_feature = _make_feature


function CloudsmithSDK.new(options)
  local self = setmetatable({}, CloudsmithSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function CloudsmithSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function CloudsmithSDK:get_utility()
  return Utility.copy(self._utility)
end


function CloudsmithSDK:get_root_ctx()
  return self._rootctx
end


function CloudsmithSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function CloudsmithSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function CloudsmithSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function CloudsmithSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "CloudsmithSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function CloudsmithSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function CloudsmithSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "CloudsmithSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Cargo():list() / client:Cargo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Cargo(data)
  local EntityMod = require("entity.cargo_entity")
  if data == nil then
    if self._cargo == nil then
      self._cargo = EntityMod.new(self, nil)
    end
    return self._cargo
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Composer():list() / client:Composer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Composer(data)
  local EntityMod = require("entity.composer_entity")
  if data == nil then
    if self._composer == nil then
      self._composer = EntityMod.new(self, nil)
    end
    return self._composer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Conda():list() / client:Conda():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Conda(data)
  local EntityMod = require("entity.conda_entity")
  if data == nil then
    if self._conda == nil then
      self._conda = EntityMod.new(self, nil)
    end
    return self._conda
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Cran():list() / client:Cran():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Cran(data)
  local EntityMod = require("entity.cran_entity")
  if data == nil then
    if self._cran == nil then
      self._cran = EntityMod.new(self, nil)
    end
    return self._cran
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Dart():list() / client:Dart():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Dart(data)
  local EntityMod = require("entity.dart_entity")
  if data == nil then
    if self._dart == nil then
      self._dart = EntityMod.new(self, nil)
    end
    return self._dart
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Deb():list() / client:Deb():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Deb(data)
  local EntityMod = require("entity.deb_entity")
  if data == nil then
    if self._deb == nil then
      self._deb = EntityMod.new(self, nil)
    end
    return self._deb
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DistributionFull():list() / client:DistributionFull():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:DistributionFull(data)
  local EntityMod = require("entity.distribution_full_entity")
  if data == nil then
    if self._distribution_full == nil then
      self._distribution_full = EntityMod.new(self, nil)
    end
    return self._distribution_full
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Docker():list() / client:Docker():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Docker(data)
  local EntityMod = require("entity.docker_entity")
  if data == nil then
    if self._docker == nil then
      self._docker = EntityMod.new(self, nil)
    end
    return self._docker
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DynamicMapping():list() / client:DynamicMapping():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:DynamicMapping(data)
  local EntityMod = require("entity.dynamic_mapping_entity")
  if data == nil then
    if self._dynamic_mapping == nil then
      self._dynamic_mapping = EntityMod.new(self, nil)
    end
    return self._dynamic_mapping
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Entitlement():list() / client:Entitlement():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Entitlement(data)
  local EntityMod = require("entity.entitlement_entity")
  if data == nil then
    if self._entitlement == nil then
      self._entitlement = EntityMod.new(self, nil)
    end
    return self._entitlement
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:File():list() / client:File():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:File(data)
  local EntityMod = require("entity.file_entity")
  if data == nil then
    if self._file == nil then
      self._file = EntityMod.new(self, nil)
    end
    return self._file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Format():list() / client:Format():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Format(data)
  local EntityMod = require("entity.format_entity")
  if data == nil then
    if self._format == nil then
      self._format = EntityMod.new(self, nil)
    end
    return self._format
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Gon():list() / client:Gon():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Gon(data)
  local EntityMod = require("entity.gon_entity")
  if data == nil then
    if self._gon == nil then
      self._gon = EntityMod.new(self, nil)
    end
    return self._gon
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Helm():list() / client:Helm():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Helm(data)
  local EntityMod = require("entity.helm_entity")
  if data == nil then
    if self._helm == nil then
      self._helm = EntityMod.new(self, nil)
    end
    return self._helm
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Hex():list() / client:Hex():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Hex(data)
  local EntityMod = require("entity.hex_entity")
  if data == nil then
    if self._hex == nil then
      self._hex = EntityMod.new(self, nil)
    end
    return self._hex
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Huggingface():list() / client:Huggingface():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Huggingface(data)
  local EntityMod = require("entity.huggingface_entity")
  if data == nil then
    if self._huggingface == nil then
      self._huggingface = EntityMod.new(self, nil)
    end
    return self._huggingface
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Maven():list() / client:Maven():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Maven(data)
  local EntityMod = require("entity.maven_entity")
  if data == nil then
    if self._maven == nil then
      self._maven = EntityMod.new(self, nil)
    end
    return self._maven
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Namespace():list() / client:Namespace():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Namespace(data)
  local EntityMod = require("entity.namespace_entity")
  if data == nil then
    if self._namespace == nil then
      self._namespace = EntityMod.new(self, nil)
    end
    return self._namespace
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NamespaceAuditLog():list() / client:NamespaceAuditLog():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:NamespaceAuditLog(data)
  local EntityMod = require("entity.namespace_audit_log_entity")
  if data == nil then
    if self._namespace_audit_log == nil then
      self._namespace_audit_log = EntityMod.new(self, nil)
    end
    return self._namespace_audit_log
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Npm():list() / client:Npm():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Npm(data)
  local EntityMod = require("entity.npm_entity")
  if data == nil then
    if self._npm == nil then
      self._npm = EntityMod.new(self, nil)
    end
    return self._npm
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Nuget():list() / client:Nuget():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Nuget(data)
  local EntityMod = require("entity.nuget_entity")
  if data == nil then
    if self._nuget == nil then
      self._nuget = EntityMod.new(self, nil)
    end
    return self._nuget
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Org():list() / client:Org():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Org(data)
  local EntityMod = require("entity.org_entity")
  if data == nil then
    if self._org == nil then
      self._org = EntityMod.new(self, nil)
    end
    return self._org
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationGroupSync():list() / client:OrganizationGroupSync():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:OrganizationGroupSync(data)
  local EntityMod = require("entity.organization_group_sync_entity")
  if data == nil then
    if self._organization_group_sync == nil then
      self._organization_group_sync = EntityMod.new(self, nil)
    end
    return self._organization_group_sync
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationGroupSyncStatus():list() / client:OrganizationGroupSyncStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:OrganizationGroupSyncStatus(data)
  local EntityMod = require("entity.organization_group_sync_status_entity")
  if data == nil then
    if self._organization_group_sync_status == nil then
      self._organization_group_sync_status = EntityMod.new(self, nil)
    end
    return self._organization_group_sync_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationInvite():list() / client:OrganizationInvite():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:OrganizationInvite(data)
  local EntityMod = require("entity.organization_invite_entity")
  if data == nil then
    if self._organization_invite == nil then
      self._organization_invite = EntityMod.new(self, nil)
    end
    return self._organization_invite
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationInviteExtend():list() / client:OrganizationInviteExtend():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:OrganizationInviteExtend(data)
  local EntityMod = require("entity.organization_invite_extend_entity")
  if data == nil then
    if self._organization_invite_extend == nil then
      self._organization_invite_extend = EntityMod.new(self, nil)
    end
    return self._organization_invite_extend
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationMembership():list() / client:OrganizationMembership():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:OrganizationMembership(data)
  local EntityMod = require("entity.organization_membership_entity")
  if data == nil then
    if self._organization_membership == nil then
      self._organization_membership = EntityMod.new(self, nil)
    end
    return self._organization_membership
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationMembershipRoleUpdate():list() / client:OrganizationMembershipRoleUpdate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:OrganizationMembershipRoleUpdate(data)
  local EntityMod = require("entity.organization_membership_role_update_entity")
  if data == nil then
    if self._organization_membership_role_update == nil then
      self._organization_membership_role_update = EntityMod.new(self, nil)
    end
    return self._organization_membership_role_update
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationMembershipVisibilityUpdate():list() / client:OrganizationMembershipVisibilityUpdate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:OrganizationMembershipVisibilityUpdate(data)
  local EntityMod = require("entity.organization_membership_visibility_update_entity")
  if data == nil then
    if self._organization_membership_visibility_update == nil then
      self._organization_membership_visibility_update = EntityMod.new(self, nil)
    end
    return self._organization_membership_visibility_update
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationPackageLicensePolicy():list() / client:OrganizationPackageLicensePolicy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:OrganizationPackageLicensePolicy(data)
  local EntityMod = require("entity.organization_package_license_policy_entity")
  if data == nil then
    if self._organization_package_license_policy == nil then
      self._organization_package_license_policy = EntityMod.new(self, nil)
    end
    return self._organization_package_license_policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationPackageVulnerabilityPolicy():list() / client:OrganizationPackageVulnerabilityPolicy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:OrganizationPackageVulnerabilityPolicy(data)
  local EntityMod = require("entity.organization_package_vulnerability_policy_entity")
  if data == nil then
    if self._organization_package_vulnerability_policy == nil then
      self._organization_package_vulnerability_policy = EntityMod.new(self, nil)
    end
    return self._organization_package_vulnerability_policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationSamlAuth():list() / client:OrganizationSamlAuth():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:OrganizationSamlAuth(data)
  local EntityMod = require("entity.organization_saml_auth_entity")
  if data == nil then
    if self._organization_saml_auth == nil then
      self._organization_saml_auth = EntityMod.new(self, nil)
    end
    return self._organization_saml_auth
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationTeam():list() / client:OrganizationTeam():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:OrganizationTeam(data)
  local EntityMod = require("entity.organization_team_entity")
  if data == nil then
    if self._organization_team == nil then
      self._organization_team = EntityMod.new(self, nil)
    end
    return self._organization_team
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationTeamMember():list() / client:OrganizationTeamMember():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:OrganizationTeamMember(data)
  local EntityMod = require("entity.organization_team_member_entity")
  if data == nil then
    if self._organization_team_member == nil then
      self._organization_team_member = EntityMod.new(self, nil)
    end
    return self._organization_team_member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Package():list() / client:Package():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Package(data)
  local EntityMod = require("entity.package_entity")
  if data == nil then
    if self._package == nil then
      self._package = EntityMod.new(self, nil)
    end
    return self._package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PackageDenyPolicy():list() / client:PackageDenyPolicy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:PackageDenyPolicy(data)
  local EntityMod = require("entity.package_deny_policy_entity")
  if data == nil then
    if self._package_deny_policy == nil then
      self._package_deny_policy = EntityMod.new(self, nil)
    end
    return self._package_deny_policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PackageFilePartsUpload():list() / client:PackageFilePartsUpload():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:PackageFilePartsUpload(data)
  local EntityMod = require("entity.package_file_parts_upload_entity")
  if data == nil then
    if self._package_file_parts_upload == nil then
      self._package_file_parts_upload = EntityMod.new(self, nil)
    end
    return self._package_file_parts_upload
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PackageFileUpload():list() / client:PackageFileUpload():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:PackageFileUpload(data)
  local EntityMod = require("entity.package_file_upload_entity")
  if data == nil then
    if self._package_file_upload == nil then
      self._package_file_upload = EntityMod.new(self, nil)
    end
    return self._package_file_upload
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PackageLicensePolicyEvaluation():list() / client:PackageLicensePolicyEvaluation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:PackageLicensePolicyEvaluation(data)
  local EntityMod = require("entity.package_license_policy_evaluation_entity")
  if data == nil then
    if self._package_license_policy_evaluation == nil then
      self._package_license_policy_evaluation = EntityMod.new(self, nil)
    end
    return self._package_license_policy_evaluation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PackageVersionBadge():list() / client:PackageVersionBadge():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:PackageVersionBadge(data)
  local EntityMod = require("entity.package_version_badge_entity")
  if data == nil then
    if self._package_version_badge == nil then
      self._package_version_badge = EntityMod.new(self, nil)
    end
    return self._package_version_badge
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PackageVulnerabilityPolicyEvaluation():list() / client:PackageVulnerabilityPolicyEvaluation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:PackageVulnerabilityPolicyEvaluation(data)
  local EntityMod = require("entity.package_vulnerability_policy_evaluation_entity")
  if data == nil then
    if self._package_vulnerability_policy_evaluation == nil then
      self._package_vulnerability_policy_evaluation = EntityMod.new(self, nil)
    end
    return self._package_vulnerability_policy_evaluation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProviderSetting():list() / client:ProviderSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:ProviderSetting(data)
  local EntityMod = require("entity.provider_setting_entity")
  if data == nil then
    if self._provider_setting == nil then
      self._provider_setting = EntityMod.new(self, nil)
    end
    return self._provider_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProviderSettingsWrite():list() / client:ProviderSettingsWrite():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:ProviderSettingsWrite(data)
  local EntityMod = require("entity.provider_settings_write_entity")
  if data == nil then
    if self._provider_settings_write == nil then
      self._provider_settings_write = EntityMod.new(self, nil)
    end
    return self._provider_settings_write
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Python():list() / client:Python():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Python(data)
  local EntityMod = require("entity.python_entity")
  if data == nil then
    if self._python == nil then
      self._python = EntityMod.new(self, nil)
    end
    return self._python
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Quota():list() / client:Quota():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Quota(data)
  local EntityMod = require("entity.quota_entity")
  if data == nil then
    if self._quota == nil then
      self._quota = EntityMod.new(self, nil)
    end
    return self._quota
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Repo():list() / client:Repo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Repo(data)
  local EntityMod = require("entity.repo_entity")
  if data == nil then
    if self._repo == nil then
      self._repo = EntityMod.new(self, nil)
    end
    return self._repo
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryAuditLog():list() / client:RepositoryAuditLog():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryAuditLog(data)
  local EntityMod = require("entity.repository_audit_log_entity")
  if data == nil then
    if self._repository_audit_log == nil then
      self._repository_audit_log = EntityMod.new(self, nil)
    end
    return self._repository_audit_log
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryEcdsaKey():list() / client:RepositoryEcdsaKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryEcdsaKey(data)
  local EntityMod = require("entity.repository_ecdsa_key_entity")
  if data == nil then
    if self._repository_ecdsa_key == nil then
      self._repository_ecdsa_key = EntityMod.new(self, nil)
    end
    return self._repository_ecdsa_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryGeoIpRule():list() / client:RepositoryGeoIpRule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryGeoIpRule(data)
  local EntityMod = require("entity.repository_geo_ip_rule_entity")
  if data == nil then
    if self._repository_geo_ip_rule == nil then
      self._repository_geo_ip_rule = EntityMod.new(self, nil)
    end
    return self._repository_geo_ip_rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryGeoIpStatus():list() / client:RepositoryGeoIpStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryGeoIpStatus(data)
  local EntityMod = require("entity.repository_geo_ip_status_entity")
  if data == nil then
    if self._repository_geo_ip_status == nil then
      self._repository_geo_ip_status = EntityMod.new(self, nil)
    end
    return self._repository_geo_ip_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryGeoIpTestAddress():list() / client:RepositoryGeoIpTestAddress():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryGeoIpTestAddress(data)
  local EntityMod = require("entity.repository_geo_ip_test_address_entity")
  if data == nil then
    if self._repository_geo_ip_test_address == nil then
      self._repository_geo_ip_test_address = EntityMod.new(self, nil)
    end
    return self._repository_geo_ip_test_address
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryGpgKey():list() / client:RepositoryGpgKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryGpgKey(data)
  local EntityMod = require("entity.repository_gpg_key_entity")
  if data == nil then
    if self._repository_gpg_key == nil then
      self._repository_gpg_key = EntityMod.new(self, nil)
    end
    return self._repository_gpg_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryPrivilegeDict():list() / client:RepositoryPrivilegeDict():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryPrivilegeDict(data)
  local EntityMod = require("entity.repository_privilege_dict_entity")
  if data == nil then
    if self._repository_privilege_dict == nil then
      self._repository_privilege_dict = EntityMod.new(self, nil)
    end
    return self._repository_privilege_dict
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryRetentionRule():list() / client:RepositoryRetentionRule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryRetentionRule(data)
  local EntityMod = require("entity.repository_retention_rule_entity")
  if data == nil then
    if self._repository_retention_rule == nil then
      self._repository_retention_rule = EntityMod.new(self, nil)
    end
    return self._repository_retention_rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryRsaKey():list() / client:RepositoryRsaKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryRsaKey(data)
  local EntityMod = require("entity.repository_rsa_key_entity")
  if data == nil then
    if self._repository_rsa_key == nil then
      self._repository_rsa_key = EntityMod.new(self, nil)
    end
    return self._repository_rsa_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryToken():list() / client:RepositoryToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryToken(data)
  local EntityMod = require("entity.repository_token_entity")
  if data == nil then
    if self._repository_token == nil then
      self._repository_token = EntityMod.new(self, nil)
    end
    return self._repository_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryTokenRefresh():list() / client:RepositoryTokenRefresh():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryTokenRefresh(data)
  local EntityMod = require("entity.repository_token_refresh_entity")
  if data == nil then
    if self._repository_token_refresh == nil then
      self._repository_token_refresh = EntityMod.new(self, nil)
    end
    return self._repository_token_refresh
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryTokenSync():list() / client:RepositoryTokenSync():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryTokenSync(data)
  local EntityMod = require("entity.repository_token_sync_entity")
  if data == nil then
    if self._repository_token_sync == nil then
      self._repository_token_sync = EntityMod.new(self, nil)
    end
    return self._repository_token_sync
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryWebhook():list() / client:RepositoryWebhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryWebhook(data)
  local EntityMod = require("entity.repository_webhook_entity")
  if data == nil then
    if self._repository_webhook == nil then
      self._repository_webhook = EntityMod.new(self, nil)
    end
    return self._repository_webhook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryX509EcdsaCertificate():list() / client:RepositoryX509EcdsaCertificate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryX509EcdsaCertificate(data)
  local EntityMod = require("entity.repository_x509_ecdsa_certificate_entity")
  if data == nil then
    if self._repository_x509_ecdsa_certificate == nil then
      self._repository_x509_ecdsa_certificate = EntityMod.new(self, nil)
    end
    return self._repository_x509_ecdsa_certificate
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryX509RsaCertificate():list() / client:RepositoryX509RsaCertificate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:RepositoryX509RsaCertificate(data)
  local EntityMod = require("entity.repository_x509_rsa_certificate_entity")
  if data == nil then
    if self._repository_x509_rsa_certificate == nil then
      self._repository_x509_rsa_certificate = EntityMod.new(self, nil)
    end
    return self._repository_x509_rsa_certificate
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ResourcesRateCheck():list() / client:ResourcesRateCheck():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:ResourcesRateCheck(data)
  local EntityMod = require("entity.resources_rate_check_entity")
  if data == nil then
    if self._resources_rate_check == nil then
      self._resources_rate_check = EntityMod.new(self, nil)
    end
    return self._resources_rate_check
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Rpm():list() / client:Rpm():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Rpm(data)
  local EntityMod = require("entity.rpm_entity")
  if data == nil then
    if self._rpm == nil then
      self._rpm = EntityMod.new(self, nil)
    end
    return self._rpm
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Ruby():list() / client:Ruby():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Ruby(data)
  local EntityMod = require("entity.ruby_entity")
  if data == nil then
    if self._ruby == nil then
      self._ruby = EntityMod.new(self, nil)
    end
    return self._ruby
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Service():list() / client:Service():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Service(data)
  local EntityMod = require("entity.service_entity")
  if data == nil then
    if self._service == nil then
      self._service = EntityMod.new(self, nil)
    end
    return self._service
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StatusBasic():list() / client:StatusBasic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:StatusBasic(data)
  local EntityMod = require("entity.status_basic_entity")
  if data == nil then
    if self._status_basic == nil then
      self._status_basic = EntityMod.new(self, nil)
    end
    return self._status_basic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StorageRegion():list() / client:StorageRegion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:StorageRegion(data)
  local EntityMod = require("entity.storage_region_entity")
  if data == nil then
    if self._storage_region == nil then
      self._storage_region = EntityMod.new(self, nil)
    end
    return self._storage_region
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Swift():list() / client:Swift():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Swift(data)
  local EntityMod = require("entity.swift_entity")
  if data == nil then
    if self._swift == nil then
      self._swift = EntityMod.new(self, nil)
    end
    return self._swift
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:User():list() / client:User():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:User(data)
  local EntityMod = require("entity.user_entity")
  if data == nil then
    if self._user == nil then
      self._user = EntityMod.new(self, nil)
    end
    return self._user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UserAuthToken():list() / client:UserAuthToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:UserAuthToken(data)
  local EntityMod = require("entity.user_auth_token_entity")
  if data == nil then
    if self._user_auth_token == nil then
      self._user_auth_token = EntityMod.new(self, nil)
    end
    return self._user_auth_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UserAuthenticationToken():list() / client:UserAuthenticationToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:UserAuthenticationToken(data)
  local EntityMod = require("entity.user_authentication_token_entity")
  if data == nil then
    if self._user_authentication_token == nil then
      self._user_authentication_token = EntityMod.new(self, nil)
    end
    return self._user_authentication_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UserBrief():list() / client:UserBrief():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:UserBrief(data)
  local EntityMod = require("entity.user_brief_entity")
  if data == nil then
    if self._user_brief == nil then
      self._user_brief = EntityMod.new(self, nil)
    end
    return self._user_brief
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UserProfile():list() / client:UserProfile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:UserProfile(data)
  local EntityMod = require("entity.user_profile_entity")
  if data == nil then
    if self._user_profile == nil then
      self._user_profile = EntityMod.new(self, nil)
    end
    return self._user_profile
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Vulnerability():list() / client:Vulnerability():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Vulnerability(data)
  local EntityMod = require("entity.vulnerability_entity")
  if data == nil then
    if self._vulnerability == nil then
      self._vulnerability = EntityMod.new(self, nil)
    end
    return self._vulnerability
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Webhook():list() / client:Webhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudsmithSDK:Webhook(data)
  local EntityMod = require("entity.webhook_entity")
  if data == nil then
    if self._webhook == nil then
      self._webhook = EntityMod.new(self, nil)
    end
    return self._webhook
  end
  return EntityMod.new(self, data)
end




function CloudsmithSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = CloudsmithSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return CloudsmithSDK
