-- ProviderSettingsWrite entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudsmith_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ProviderSettingsWriteEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ProviderSettingsWrite(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = provider_settings_write_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "provider_settings_write." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local provider_settings_write_ref01_ent = client:ProviderSettingsWrite(nil)
    local provider_settings_write_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.provider_settings_write"), "provider_settings_write_ref01"))
    provider_settings_write_ref01_data["org_id"] = setup.idmap["org01"]

    local provider_settings_write_ref01_data_result, err = provider_settings_write_ref01_ent:create(provider_settings_write_ref01_data, nil)
    assert.is_nil(err)
    provider_settings_write_ref01_data = helpers.to_map(provider_settings_write_ref01_data_result)
    assert.is_not_nil(provider_settings_write_ref01_data)

    -- UPDATE
    local provider_settings_write_ref01_data_up0_up = {
      ["org_id"] = setup.idmap["org_id"],
    }

    local provider_settings_write_ref01_markdef_up0_name = "mapping_claim"
    local provider_settings_write_ref01_markdef_up0_value = "Mark01-provider_settings_write_ref01_" .. tostring(setup.now)
    provider_settings_write_ref01_data_up0_up[provider_settings_write_ref01_markdef_up0_name] = provider_settings_write_ref01_markdef_up0_value

    local provider_settings_write_ref01_resdata_up0_result, err = provider_settings_write_ref01_ent:update(provider_settings_write_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local provider_settings_write_ref01_resdata_up0 = helpers.to_map(provider_settings_write_ref01_resdata_up0_result)
    assert.is_not_nil(provider_settings_write_ref01_resdata_up0)
    assert.are.equal(provider_settings_write_ref01_resdata_up0[provider_settings_write_ref01_markdef_up0_name], provider_settings_write_ref01_markdef_up0_value)

  end)
end)

function provider_settings_write_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/provider_settings_write/ProviderSettingsWriteTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read provider_settings_write test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "provider_settings_write01", "provider_settings_write02", "provider_settings_write03", "org01", "org02", "org03", "openid_connect01", "openid_connect02", "openid_connect03" },
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
  local entid_env_raw = os.getenv("CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID"] = idmap,
    ["CLOUDSMITH_TEST_LIVE"] = "FALSE",
    ["CLOUDSMITH_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDSMITH_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["org_id"] == nil then
    idmap_resolved["org_id"] = idmap_resolved["org01"]
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
