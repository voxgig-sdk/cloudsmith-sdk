# RepositoryEcdsaKey entity test

require "minitest/autorun"
require "json"
require_relative "../Cloudsmith_sdk"
require_relative "runner"

class RepositoryEcdsaKeyEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudsmithSDK.test(nil, nil)
    ent = testsdk.RepositoryEcdsaKey(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = repository_ecdsa_key_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "repository_ecdsa_key." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_REPOSITORY_ECDSA_KEY_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    repository_ecdsa_key_ref01_ent = client.RepositoryEcdsaKey(nil)
    repository_ecdsa_key_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.repository_ecdsa_key"), "repository_ecdsa_key_ref01"))
    repository_ecdsa_key_ref01_data["identifier"] = setup[:idmap]["identifier01"]
    repository_ecdsa_key_ref01_data["owner"] = setup[:idmap]["owner01"]

    repository_ecdsa_key_ref01_data_result = repository_ecdsa_key_ref01_ent.create(repository_ecdsa_key_ref01_data, nil)
    repository_ecdsa_key_ref01_data = Helpers.to_map(repository_ecdsa_key_ref01_data_result)
    assert !repository_ecdsa_key_ref01_data.nil?

    # LOAD
    repository_ecdsa_key_ref01_match_dt0 = {}
    repository_ecdsa_key_ref01_data_dt0_loaded = repository_ecdsa_key_ref01_ent.load(repository_ecdsa_key_ref01_match_dt0, nil)
    assert !repository_ecdsa_key_ref01_data_dt0_loaded.nil?

  end
end

def repository_ecdsa_key_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "repository_ecdsa_key", "RepositoryEcdsaKeyTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudsmithSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["repository_ecdsa_key01", "repository_ecdsa_key02", "repository_ecdsa_key03", "repo01", "repo02", "repo03", "identifier01", "owner01"],
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
  entid_env_raw = ENV["CLOUDSMITH_TEST_REPOSITORY_ECDSA_KEY_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDSMITH_TEST_REPOSITORY_ECDSA_KEY_ENTID" => idmap,
    "CLOUDSMITH_TEST_LIVE" => "FALSE",
    "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
    "CLOUDSMITH_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDSMITH_TEST_REPOSITORY_ECDSA_KEY_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
