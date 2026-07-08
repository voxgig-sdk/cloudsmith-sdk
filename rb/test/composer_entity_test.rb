# Composer entity test

require "minitest/autorun"
require "json"
require_relative "../Cloudsmith_sdk"
require_relative "runner"

class ComposerEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudsmithSDK.test(nil, nil)
    ent = testsdk.Composer(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = composer_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "composer." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_COMPOSER_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    composer_ref01_ent = client.Composer(nil)
    composer_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.composer"), "composer_ref01"))
    composer_ref01_data["identifier"] = setup[:idmap]["identifier01"]
    composer_ref01_data["owner"] = setup[:idmap]["owner01"]

    composer_ref01_data_result = composer_ref01_ent.create(composer_ref01_data, nil)
    composer_ref01_data = Helpers.to_map(composer_ref01_data_result)
    assert !composer_ref01_data.nil?

    # LIST
    composer_ref01_match = {
      "identifier" => setup[:idmap]["identifier01"],
      "owner" => setup[:idmap]["owner01"],
    }

    composer_ref01_list_result = composer_ref01_ent.list(composer_ref01_match, nil)
    assert composer_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(composer_ref01_list_result),
      { "id" => composer_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    composer_ref01_data_up0_up = {
      "identifier" => setup[:idmap]["identifier"],
      "owner" => setup[:idmap]["owner"],
    }

    composer_ref01_markdef_up0_name = "auth_mode"
    composer_ref01_markdef_up0_value = "Mark01-composer_ref01_#{setup[:now]}"
    composer_ref01_data_up0_up[composer_ref01_markdef_up0_name] = composer_ref01_markdef_up0_value

    composer_ref01_resdata_up0_result = composer_ref01_ent.update(composer_ref01_data_up0_up, nil)
    composer_ref01_resdata_up0 = Helpers.to_map(composer_ref01_resdata_up0_result)
    assert !composer_ref01_resdata_up0.nil?
    assert_equal composer_ref01_resdata_up0[composer_ref01_markdef_up0_name], composer_ref01_markdef_up0_value

    # LOAD
    composer_ref01_match_dt0 = {}
    composer_ref01_data_dt0_loaded = composer_ref01_ent.load(composer_ref01_match_dt0, nil)
    assert !composer_ref01_data_dt0_loaded.nil?

  end
end

def composer_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "composer", "ComposerTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudsmithSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["composer01", "composer02", "composer03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CLOUDSMITH_TEST_COMPOSER_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDSMITH_TEST_COMPOSER_ENTID" => idmap,
    "CLOUDSMITH_TEST_LIVE" => "FALSE",
    "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
    "CLOUDSMITH_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDSMITH_TEST_COMPOSER_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["identifier"].nil?
    idmap_resolved["identifier"] = idmap_resolved["identifier01"]
  end
  if idmap_resolved["owner"].nil?
    idmap_resolved["owner"] = idmap_resolved["owner01"]
  end

  if env["CLOUDSMITH_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["CLOUDSMITH_APIKEY"],
      },
      extra || {},
    ])
    client = CloudsmithSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CLOUDSMITH_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CLOUDSMITH_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
