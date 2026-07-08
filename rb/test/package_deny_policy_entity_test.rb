# PackageDenyPolicy entity test

require "minitest/autorun"
require "json"
require_relative "../Cloudsmith_sdk"
require_relative "runner"

class PackageDenyPolicyEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudsmithSDK.test(nil, nil)
    ent = testsdk.PackageDenyPolicy(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = package_deny_policy_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "package_deny_policy." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_PACKAGE_DENY_POLICY_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    package_deny_policy_ref01_ent = client.PackageDenyPolicy(nil)
    package_deny_policy_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.package_deny_policy"), "package_deny_policy_ref01"))
    package_deny_policy_ref01_data["org_id"] = setup[:idmap]["org01"]

    package_deny_policy_ref01_data_result = package_deny_policy_ref01_ent.create(package_deny_policy_ref01_data, nil)
    package_deny_policy_ref01_data = Helpers.to_map(package_deny_policy_ref01_data_result)
    assert !package_deny_policy_ref01_data.nil?

    # LIST
    package_deny_policy_ref01_match = {
      "org_id" => setup[:idmap]["org01"],
    }

    package_deny_policy_ref01_list_result = package_deny_policy_ref01_ent.list(package_deny_policy_ref01_match, nil)
    assert package_deny_policy_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(package_deny_policy_ref01_list_result),
      { "id" => package_deny_policy_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    package_deny_policy_ref01_data_up0_up = {
      "org_id" => setup[:idmap]["org_id"],
    }

    package_deny_policy_ref01_markdef_up0_name = "action"
    package_deny_policy_ref01_markdef_up0_value = "Mark01-package_deny_policy_ref01_#{setup[:now]}"
    package_deny_policy_ref01_data_up0_up[package_deny_policy_ref01_markdef_up0_name] = package_deny_policy_ref01_markdef_up0_value

    package_deny_policy_ref01_resdata_up0_result = package_deny_policy_ref01_ent.update(package_deny_policy_ref01_data_up0_up, nil)
    package_deny_policy_ref01_resdata_up0 = Helpers.to_map(package_deny_policy_ref01_resdata_up0_result)
    assert !package_deny_policy_ref01_resdata_up0.nil?
    assert_equal package_deny_policy_ref01_resdata_up0[package_deny_policy_ref01_markdef_up0_name], package_deny_policy_ref01_markdef_up0_value

    # LOAD
    package_deny_policy_ref01_match_dt0 = {}
    package_deny_policy_ref01_data_dt0_loaded = package_deny_policy_ref01_ent.load(package_deny_policy_ref01_match_dt0, nil)
    assert !package_deny_policy_ref01_data_dt0_loaded.nil?

  end
end

def package_deny_policy_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "package_deny_policy", "PackageDenyPolicyTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudsmithSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["package_deny_policy01", "package_deny_policy02", "package_deny_policy03", "org01", "org02", "org03"],
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
  entid_env_raw = ENV["CLOUDSMITH_TEST_PACKAGE_DENY_POLICY_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDSMITH_TEST_PACKAGE_DENY_POLICY_ENTID" => idmap,
    "CLOUDSMITH_TEST_LIVE" => "FALSE",
    "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
    "CLOUDSMITH_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDSMITH_TEST_PACKAGE_DENY_POLICY_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["org_id"].nil?
    idmap_resolved["org_id"] = idmap_resolved["org01"]
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
