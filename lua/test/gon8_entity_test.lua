-- Gon8 entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudsmith_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("Gon8Entity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Gon8(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = gon8_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "gon8." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_GON__ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local gon8_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.gon8")))
    local gon8_ref01_data = nil
    if #gon8_ref01_data_raw > 0 then
      gon8_ref01_data = helpers.to_map(gon8_ref01_data_raw[1][2])
    end

    -- UPDATE
    local gon8_ref01_ent = client:Gon8(nil)
    local gon8_ref01_data_up0_up = {
      ["identifier"] = setup.idmap["identifier"],
      ["owner"] = setup.idmap["owner"],
    }

    local gon8_ref01_markdef_up0_name = "auth_mode"
    local gon8_ref01_markdef_up0_value = "Mark01-gon8_ref01_" .. tostring(setup.now)
    gon8_ref01_data_up0_up[gon8_ref01_markdef_up0_name] = gon8_ref01_markdef_up0_value

    local gon8_ref01_resdata_up0_result, err = gon8_ref01_ent:update(gon8_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local gon8_ref01_resdata_up0 = helpers.to_map(gon8_ref01_resdata_up0_result)
    assert.is_not_nil(gon8_ref01_resdata_up0)
    assert.are.equal(gon8_ref01_resdata_up0[gon8_ref01_markdef_up0_name], gon8_ref01_markdef_up0_value)

  end)
end)

function gon8_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/gon8/Gon8TestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read gon8 test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "gon801", "gon802", "gon803", "repo01", "repo02", "repo03", "go01", "go02", "go03", "identifier01", "owner01" },
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
  local entid_env_raw = os.getenv("CLOUDSMITH_TEST_GON__ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDSMITH_TEST_GON__ENTID"] = idmap,
    ["CLOUDSMITH_TEST_LIVE"] = "FALSE",
    ["CLOUDSMITH_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDSMITH_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDSMITH_TEST_GON__ENTID"])
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
