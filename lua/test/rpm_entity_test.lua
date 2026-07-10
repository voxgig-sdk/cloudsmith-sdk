-- Rpm entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudsmith_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("RpmEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Rpm(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = rpm_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "rpm." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_RPM_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local rpm_ref01_ent = client:Rpm(nil)
    local rpm_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.rpm"), "rpm_ref01"))
    rpm_ref01_data["identifier"] = setup.idmap["identifier01"]
    rpm_ref01_data["owner"] = setup.idmap["owner01"]

    local rpm_ref01_data_result, err = rpm_ref01_ent:create(rpm_ref01_data, nil)
    assert.is_nil(err)
    rpm_ref01_data = helpers.to_map(rpm_ref01_data_result)
    assert.is_not_nil(rpm_ref01_data)

    -- LIST
    local rpm_ref01_match = {
      ["identifier"] = setup.idmap["identifier01"],
      ["owner"] = setup.idmap["owner01"],
    }

    local rpm_ref01_list_result, err = rpm_ref01_ent:list(rpm_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(rpm_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(rpm_ref01_list_result),
      { id = rpm_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local rpm_ref01_data_up0_up = {
      ["identifier"] = setup.idmap["identifier"],
      ["owner"] = setup.idmap["owner"],
    }

    local rpm_ref01_markdef_up0_name = "auth_mode"
    local rpm_ref01_markdef_up0_value = "Mark01-rpm_ref01_" .. tostring(setup.now)
    rpm_ref01_data_up0_up[rpm_ref01_markdef_up0_name] = rpm_ref01_markdef_up0_value

    local rpm_ref01_resdata_up0_result, err = rpm_ref01_ent:update(rpm_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local rpm_ref01_resdata_up0 = helpers.to_map(rpm_ref01_resdata_up0_result)
    assert.is_not_nil(rpm_ref01_resdata_up0)
    assert.are.equal(rpm_ref01_resdata_up0[rpm_ref01_markdef_up0_name], rpm_ref01_markdef_up0_value)

    -- LOAD
    local rpm_ref01_match_dt0 = {}
    local rpm_ref01_data_dt0_loaded, err = rpm_ref01_ent:load(rpm_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(rpm_ref01_data_dt0_loaded)

  end)
end)

function rpm_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/rpm/RpmTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read rpm test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "rpm01", "rpm02", "rpm03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01" },
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
  local entid_env_raw = os.getenv("CLOUDSMITH_TEST_RPM_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDSMITH_TEST_RPM_ENTID"] = idmap,
    ["CLOUDSMITH_TEST_LIVE"] = "FALSE",
    ["CLOUDSMITH_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDSMITH_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDSMITH_TEST_RPM_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["identifier"] == nil then
    idmap_resolved["identifier"] = idmap_resolved["identifier01"]
  end
  if idmap_resolved["owner"] == nil then
    idmap_resolved["owner"] = idmap_resolved["owner01"]
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
