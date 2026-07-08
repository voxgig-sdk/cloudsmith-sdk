# ProviderSettingsWrite entity test

require "minitest/autorun"
require "json"
require_relative "../Cloudsmith_sdk"
require_relative "runner"

class ProviderSettingsWriteEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudsmithSDK.test(nil, nil)
    ent = testsdk.ProviderSettingsWrite(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = provider_settings_write_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "provider_settings_write." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    provider_settings_write_ref01_ent = client.ProviderSettingsWrite(nil)
    provider_settings_write_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.provider_settings_write"), "provider_settings_write_ref01"))
    provider_settings_write_ref01_data["org_id"] = setup[:idmap]["org01"]

    provider_settings_write_ref01_data_result = provider_settings_write_ref01_ent.create(provider_settings_write_ref01_data, nil)
    provider_settings_write_ref01_data = Helpers.to_map(provider_settings_write_ref01_data_result)
    assert !provider_settings_write_ref01_data.nil?

    # UPDATE
    provider_settings_write_ref01_data_up0_up = {
      "org_id" => setup[:idmap]["org_id"],
    }

    provider_settings_write_ref01_markdef_up0_name = "mapping_claim"
    provider_settings_write_ref01_markdef_up0_value = "Mark01-provider_settings_write_ref01_#{setup[:now]}"
    provider_settings_write_ref01_data_up0_up[provider_settings_write_ref01_markdef_up0_name] = provider_settings_write_ref01_markdef_up0_value

    provider_settings_write_ref01_resdata_up0_result = provider_settings_write_ref01_ent.update(provider_settings_write_ref01_data_up0_up, nil)
    provider_settings_write_ref01_resdata_up0 = Helpers.to_map(provider_settings_write_ref01_resdata_up0_result)
    assert !provider_settings_write_ref01_resdata_up0.nil?
    assert_equal provider_settings_write_ref01_resdata_up0[provider_settings_write_ref01_markdef_up0_name], provider_settings_write_ref01_markdef_up0_value

  end
end

def provider_settings_write_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "provider_settings_write", "ProviderSettingsWriteTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudsmithSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["provider_settings_write01", "provider_settings_write02", "provider_settings_write03", "org01", "org02", "org03", "openid_connect01", "openid_connect02", "openid_connect03"],
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
  entid_env_raw = ENV["CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID" => idmap,
    "CLOUDSMITH_TEST_LIVE" => "FALSE",
    "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
    "CLOUDSMITH_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID"])
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
