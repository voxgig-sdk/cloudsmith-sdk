-- Repo entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudsmith_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("RepoEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Repo(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = repo_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "repo." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_REPO_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local repo_ref01_ent = client:Repo(nil)
    local repo_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.repo"), "repo_ref01"))
    repo_ref01_data["identifier"] = setup.idmap["identifier01"]
    repo_ref01_data["owner"] = setup.idmap["owner01"]

    local repo_ref01_data_result, err = repo_ref01_ent:create(repo_ref01_data, nil)
    assert.is_nil(err)
    repo_ref01_data = helpers.to_map(repo_ref01_data_result)
    assert.is_not_nil(repo_ref01_data)

    -- LIST
    local repo_ref01_match = {}

    local repo_ref01_list_result, err = repo_ref01_ent:list(repo_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(repo_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(repo_ref01_list_result),
      { id = repo_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local repo_ref01_data_up0_up = {
      ["owner"] = setup.idmap["owner"],
    }

    local repo_ref01_markdef_up0_name = "cdn_url"
    local repo_ref01_markdef_up0_value = "Mark01-repo_ref01_" .. tostring(setup.now)
    repo_ref01_data_up0_up[repo_ref01_markdef_up0_name] = repo_ref01_markdef_up0_value

    local repo_ref01_resdata_up0_result, err = repo_ref01_ent:update(repo_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local repo_ref01_resdata_up0 = helpers.to_map(repo_ref01_resdata_up0_result)
    assert.is_not_nil(repo_ref01_resdata_up0)
    assert.are.equal(repo_ref01_resdata_up0[repo_ref01_markdef_up0_name], repo_ref01_markdef_up0_value)

    -- LOAD
    local repo_ref01_match_dt0 = {}
    local repo_ref01_data_dt0_loaded, err = repo_ref01_ent:load(repo_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(repo_ref01_data_dt0_loaded)

    -- REMOVE
    local repo_ref01_match_rm0 = {
      id = repo_ref01_data["id"],
    }
    local _, err = repo_ref01_ent:remove(repo_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local repo_ref01_match_rt0 = {}

    local repo_ref01_list_rt0_result, err = repo_ref01_ent:list(repo_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(repo_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(repo_ref01_list_rt0_result),
      { id = repo_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function repo_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/repo/RepoTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read repo test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "repo01", "repo02", "repo03", "cargo01", "cargo02", "cargo03", "composer01", "composer02", "composer03", "conda01", "conda02", "conda03", "cran01", "cran02", "cran03", "dart01", "dart02", "dart03", "deb01", "deb02", "deb03", "docker01", "docker02", "docker03", "go01", "go02", "go03", "helm01", "helm02", "helm03", "hex01", "hex02", "hex03", "huggingface01", "huggingface02", "huggingface03", "maven01", "maven02", "maven03", "npm01", "npm02", "npm03", "nuget01", "nuget02", "nuget03", "python01", "python02", "python03", "rpm01", "rpm02", "rpm03", "ruby01", "ruby02", "ruby03", "swift01", "swift02", "swift03", "identifier01", "owner01" },
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
  local entid_env_raw = os.getenv("CLOUDSMITH_TEST_REPO_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDSMITH_TEST_REPO_ENTID"] = idmap,
    ["CLOUDSMITH_TEST_LIVE"] = "FALSE",
    ["CLOUDSMITH_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDSMITH_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDSMITH_TEST_REPO_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
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
