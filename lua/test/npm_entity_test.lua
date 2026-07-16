-- Npm entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudsmith_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("NpmEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Npm(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["npm"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:Npm(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:Npm(nil):stream("list", nil, nil) do
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
    local setup = npm_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "npm." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_NPM_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local npm_ref01_ent = client:Npm(nil)
    local npm_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.npm"), "npm_ref01"))
    npm_ref01_data["identifier"] = setup.idmap["identifier01"]
    npm_ref01_data["owner"] = setup.idmap["owner01"]

    local npm_ref01_data_result, err = npm_ref01_ent:create(npm_ref01_data, nil)
    assert.is_nil(err)
    npm_ref01_data = helpers.to_map(npm_ref01_data_result)
    assert.is_not_nil(npm_ref01_data)

    -- LIST
    local npm_ref01_match = {
      ["identifier"] = setup.idmap["identifier01"],
      ["owner"] = setup.idmap["owner01"],
    }

    local npm_ref01_list_result, err = npm_ref01_ent:list(npm_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(npm_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(npm_ref01_list_result),
      { id = npm_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local npm_ref01_data_up0_up = {
      ["identifier"] = setup.idmap["identifier"],
      ["owner"] = setup.idmap["owner"],
    }

    local npm_ref01_markdef_up0_name = "auth_mode"
    local npm_ref01_markdef_up0_value = "Mark01-npm_ref01_" .. tostring(setup.now)
    npm_ref01_data_up0_up[npm_ref01_markdef_up0_name] = npm_ref01_markdef_up0_value

    local npm_ref01_resdata_up0_result, err = npm_ref01_ent:update(npm_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local npm_ref01_resdata_up0 = helpers.to_map(npm_ref01_resdata_up0_result)
    assert.is_not_nil(npm_ref01_resdata_up0)
    assert.are.equal(npm_ref01_resdata_up0[npm_ref01_markdef_up0_name], npm_ref01_markdef_up0_value)

    -- LOAD
    local npm_ref01_match_dt0 = {}
    local npm_ref01_data_dt0_loaded, err = npm_ref01_ent:load(npm_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(npm_ref01_data_dt0_loaded)

  end)
end)

function npm_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/npm/NpmTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read npm test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "npm01", "npm02", "npm03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01" },
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
  local entid_env_raw = os.getenv("CLOUDSMITH_TEST_NPM_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDSMITH_TEST_NPM_ENTID"] = idmap,
    ["CLOUDSMITH_TEST_LIVE"] = "FALSE",
    ["CLOUDSMITH_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDSMITH_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDSMITH_TEST_NPM_ENTID"])
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
