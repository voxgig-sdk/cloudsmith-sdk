-- Org entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudsmith_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("OrgEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Org(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["org"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:Org(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:Org(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = org_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "org." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_ORG_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local org_ref01_ent = client:Org(nil)
    local org_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.org"), "org_ref01"))
    org_ref01_data["org"] = setup.idmap["org01"]

    local org_ref01_data_result, err = org_ref01_ent:create(org_ref01_data, nil)
    assert.is_nil(err)
    org_ref01_data = helpers.to_map(org_ref01_data_result)
    assert.is_not_nil(org_ref01_data)

    -- LIST
    local org_ref01_match = {}

    local org_ref01_list_result, err = org_ref01_ent:list(org_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(org_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(org_ref01_list_result),
      { id = org_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local org_ref01_data_up0_up = {
    }

    local org_ref01_markdef_up0_name = "country"
    local org_ref01_markdef_up0_value = "Mark01-org_ref01_" .. tostring(setup.now)
    org_ref01_data_up0_up[org_ref01_markdef_up0_name] = org_ref01_markdef_up0_value

    local org_ref01_resdata_up0_result, err = org_ref01_ent:update(org_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local org_ref01_resdata_up0 = helpers.to_map(org_ref01_resdata_up0_result)
    assert.is_not_nil(org_ref01_resdata_up0)
    assert.are.equal(org_ref01_resdata_up0[org_ref01_markdef_up0_name], org_ref01_markdef_up0_value)

    -- LOAD
    local org_ref01_match_dt0 = {}
    local org_ref01_data_dt0_loaded, err = org_ref01_ent:load(org_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(org_ref01_data_dt0_loaded)

    -- REMOVE
    local org_ref01_match_rm0 = {
      id = org_ref01_data["id"],
    }
    local _, err = org_ref01_ent:remove(org_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local org_ref01_match_rt0 = {}

    local org_ref01_list_rt0_result, err = org_ref01_ent:list(org_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(org_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(org_ref01_list_rt0_result),
      { id = org_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function org_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/org/OrgTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read org test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "org01", "org02", "org03", "deny_policy01", "deny_policy02", "deny_policy03", "invite01", "invite02", "invite03", "license_policy01", "license_policy02", "license_policy03", "member01", "member02", "member03", "openid_connect01", "openid_connect02", "openid_connect03", "saml_group_sync01", "saml_group_sync02", "saml_group_sync03", "service01", "service02", "service03", "team01", "team02", "team03", "vulnerability_policy01", "vulnerability_policy02", "vulnerability_policy03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("CLOUDSMITH_TEST_ORG_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDSMITH_TEST_ORG_ENTID"] = idmap,
    ["CLOUDSMITH_TEST_LIVE"] = "FALSE",
    ["CLOUDSMITH_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDSMITH_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDSMITH_TEST_ORG_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["CLOUDSMITH_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      {
        apikey = env["CLOUDSMITH_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["CLOUDSMITH_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["CLOUDSMITH_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
