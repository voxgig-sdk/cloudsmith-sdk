-- Cloudsmith SDK RepositoryX509EcdsaCertificate entity

local vs = require("utility.struct.struct")
local helpers = require("core.helpers")

local RepositoryX509EcdsaCertificateEntity = {}
RepositoryX509EcdsaCertificateEntity.__index = RepositoryX509EcdsaCertificateEntity


function RepositoryX509EcdsaCertificateEntity.new(client, entopts)
  entopts = entopts or {}
  if entopts["active"] == nil then
    entopts["active"] = true
  elseif entopts["active"] == false then
    -- keep false
  else
    entopts["active"] = true
  end

  local self = setmetatable({}, RepositoryX509EcdsaCertificateEntity)
  self._name = "repository_x509_ecdsa_certificate"
  self._client = client
  self._utility = client:get_utility()
  self._entopts = entopts
  self._data = {}
  self._match = {}

  self._entctx = self._utility.make_context({
    entity = self,
    entopts = entopts,
  }, client:get_root_ctx())

  self._utility.feature_hook(self._entctx, "PostConstructEntity")

  return self
end


function RepositoryX509EcdsaCertificateEntity:get_name()
  return self._name
end


function RepositoryX509EcdsaCertificateEntity:make()
  local opts = {}
  for k, v in pairs(self._entopts) do
    opts[k] = v
  end
  return RepositoryX509EcdsaCertificateEntity.new(self._client, opts)
end


function RepositoryX509EcdsaCertificateEntity:data_set(args)
  if args ~= nil then
    self._data = helpers.to_map(vs.clone(args)) or {}
    self._utility.feature_hook(self._entctx, "SetData")
  end
end


function RepositoryX509EcdsaCertificateEntity:data_get()
  self._utility.feature_hook(self._entctx, "GetData")
  return vs.clone(self._data)
end


function RepositoryX509EcdsaCertificateEntity:match_set(args)
  if args ~= nil then
    self._match = helpers.to_map(vs.clone(args)) or {}
    self._utility.feature_hook(self._entctx, "SetMatch")
  end
end


function RepositoryX509EcdsaCertificateEntity:match_get()
  self._utility.feature_hook(self._entctx, "GetMatch")
  return vs.clone(self._match)
end



---@param reqmatch RepositoryX509EcdsaCertificateLoadMatch
---@param ctrl? table
---@return RepositoryX509EcdsaCertificate
---@return string? err
function RepositoryX509EcdsaCertificateEntity:load(reqmatch, ctrl)
  local utility = self._utility
  local ctx = utility.make_context({
    opname = "load",
    ctrl = ctrl,
    match = self._match,
    data = self._data,
    reqmatch = reqmatch,
  }, self._entctx)

  return self:_run_op(ctx, function()
    if ctx.result ~= nil then
      if ctx.result.resmatch ~= nil then
        self._match = ctx.result.resmatch
      end
      if ctx.result.resdata ~= nil then
        self._data = helpers.to_map(vs.clone(ctx.result.resdata)) or {}
      end
    end
  end)
end












function RepositoryX509EcdsaCertificateEntity:_run_op(ctx, post_done)
  local utility = self._utility

  -- #PrePoint-Hook

  local point, err = utility.make_point(ctx)
  ctx.out["point"] = point
  if err ~= nil then
    return utility.make_error(ctx, err)
  end

  -- #PreSpec-Hook

  local spec
  spec, err = utility.make_spec(ctx)
  ctx.out["spec"] = spec
  if err ~= nil then
    return utility.make_error(ctx, err)
  end

  -- #PreRequest-Hook

  local resp
  resp, err = utility.make_request(ctx)
  ctx.out["request"] = resp
  if err ~= nil then
    return utility.make_error(ctx, err)
  end

  -- #PreResponse-Hook

  local resp2
  resp2, err = utility.make_response(ctx)
  ctx.out["response"] = resp2
  if err ~= nil then
    return utility.make_error(ctx, err)
  end

  -- #PreResult-Hook

  local result
  result, err = utility.make_result(ctx)
  ctx.out["result"] = result
  if err ~= nil then
    return utility.make_error(ctx, err)
  end

  -- #PreDone-Hook

  post_done()

  return utility.done(ctx)
end


return RepositoryX509EcdsaCertificateEntity
