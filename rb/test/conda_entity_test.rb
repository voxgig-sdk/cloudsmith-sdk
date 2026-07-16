# Conda entity test

require "minitest/autorun"
require "json"
require_relative "../Cloudsmith_sdk"
require_relative "runner"

class CondaEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudsmithSDK.test(nil, nil)
    ent = testsdk.Conda(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "conda" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudsmithSDK.test(seed, nil)
    seen = base.Conda(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudsmithConfig.make_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudsmithSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Conda(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = conda_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "conda." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_CONDA_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    conda_ref01_ent = client.Conda(nil)
    conda_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.conda"), "conda_ref01"))
    conda_ref01_data["identifier"] = setup[:idmap]["identifier01"]
    conda_ref01_data["owner"] = setup[:idmap]["owner01"]

    conda_ref01_data_result = conda_ref01_ent.create(conda_ref01_data, nil)
    conda_ref01_data = Helpers.to_map(conda_ref01_data_result)
    assert !conda_ref01_data.nil?

    # LIST
    conda_ref01_match = {
      "identifier" => setup[:idmap]["identifier01"],
      "owner" => setup[:idmap]["owner01"],
    }

    conda_ref01_list_result = conda_ref01_ent.list(conda_ref01_match, nil)
    assert conda_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(conda_ref01_list_result),
      { "id" => conda_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    conda_ref01_data_up0_up = {
      "identifier" => setup[:idmap]["identifier"],
      "owner" => setup[:idmap]["owner"],
    }

    conda_ref01_markdef_up0_name = "auth_mode"
    conda_ref01_markdef_up0_value = "Mark01-conda_ref01_#{setup[:now]}"
    conda_ref01_data_up0_up[conda_ref01_markdef_up0_name] = conda_ref01_markdef_up0_value

    conda_ref01_resdata_up0_result = conda_ref01_ent.update(conda_ref01_data_up0_up, nil)
    conda_ref01_resdata_up0 = Helpers.to_map(conda_ref01_resdata_up0_result)
    assert !conda_ref01_resdata_up0.nil?
    assert_equal conda_ref01_resdata_up0[conda_ref01_markdef_up0_name], conda_ref01_markdef_up0_value

    # LOAD
    conda_ref01_match_dt0 = {}
    conda_ref01_data_dt0_loaded = conda_ref01_ent.load(conda_ref01_match_dt0, nil)
    assert !conda_ref01_data_dt0_loaded.nil?

  end
end

def conda_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "conda", "CondaTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudsmithSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["conda01", "conda02", "conda03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01"],
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
  entid_env_raw = ENV["CLOUDSMITH_TEST_CONDA_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDSMITH_TEST_CONDA_ENTID" => idmap,
    "CLOUDSMITH_TEST_LIVE" => "FALSE",
    "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
    "CLOUDSMITH_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDSMITH_TEST_CONDA_ENTID"])
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
