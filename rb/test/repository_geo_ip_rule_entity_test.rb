# RepositoryGeoIpRule entity test

require "minitest/autorun"
require "json"
require_relative "../Cloudsmith_sdk"
require_relative "runner"

class RepositoryGeoIpRuleEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudsmithSDK.test(nil, nil)
    ent = testsdk.RepositoryGeoIpRule(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = repository_geo_ip_rule_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "repository_geo_ip_rule." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_REPOSITORY_GEO_IP_RULE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    repository_geo_ip_rule_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.repository_geo_ip_rule")))
    repository_geo_ip_rule_ref01_data = nil
    if repository_geo_ip_rule_ref01_data_raw.length > 0
      repository_geo_ip_rule_ref01_data = Helpers.to_map(repository_geo_ip_rule_ref01_data_raw[0][1])
    end

    # UPDATE
    repository_geo_ip_rule_ref01_ent = client.RepositoryGeoIpRule(nil)
    repository_geo_ip_rule_ref01_data_up0_up = {
      "owner" => setup[:idmap]["owner"],
    }

    repository_geo_ip_rule_ref01_resdata_up0_result = repository_geo_ip_rule_ref01_ent.update(repository_geo_ip_rule_ref01_data_up0_up, nil)
    repository_geo_ip_rule_ref01_resdata_up0 = Helpers.to_map(repository_geo_ip_rule_ref01_resdata_up0_result)
    assert !repository_geo_ip_rule_ref01_resdata_up0.nil?

    # LOAD
    repository_geo_ip_rule_ref01_match_dt0 = {}
    repository_geo_ip_rule_ref01_data_dt0_loaded = repository_geo_ip_rule_ref01_ent.load(repository_geo_ip_rule_ref01_match_dt0, nil)
    assert !repository_geo_ip_rule_ref01_data_dt0_loaded.nil?

  end
end

def repository_geo_ip_rule_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "repository_geo_ip_rule", "RepositoryGeoIpRuleTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudsmithSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["repository_geo_ip_rule01", "repository_geo_ip_rule02", "repository_geo_ip_rule03", "repo01", "repo02", "repo03", "owner01"],
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
  entid_env_raw = ENV["CLOUDSMITH_TEST_REPOSITORY_GEO_IP_RULE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDSMITH_TEST_REPOSITORY_GEO_IP_RULE_ENTID" => idmap,
    "CLOUDSMITH_TEST_LIVE" => "FALSE",
    "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
    "CLOUDSMITH_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDSMITH_TEST_REPOSITORY_GEO_IP_RULE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
