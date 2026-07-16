# Org entity test

require "minitest/autorun"
require "json"
require_relative "../Cloudsmith_sdk"
require_relative "runner"

class OrgEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudsmithSDK.test(nil, nil)
    ent = testsdk.Org(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "org" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudsmithSDK.test(seed, nil)
    seen = base.Org(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudsmithConfig.make_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudsmithSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Org(nil).stream("list", nil, nil).each do |item|
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
    setup = org_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "org." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_ORG_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    org_ref01_ent = client.Org(nil)
    org_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.org"), "org_ref01"))
    org_ref01_data["org"] = setup[:idmap]["org01"]

    org_ref01_data_result = org_ref01_ent.create(org_ref01_data, nil)
    org_ref01_data = Helpers.to_map(org_ref01_data_result)
    assert !org_ref01_data.nil?

    # LIST
    org_ref01_match = {}

    org_ref01_list_result = org_ref01_ent.list(org_ref01_match, nil)
    assert org_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(org_ref01_list_result),
      { "id" => org_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    org_ref01_data_up0_up = {
    }

    org_ref01_markdef_up0_name = "country"
    org_ref01_markdef_up0_value = "Mark01-org_ref01_#{setup[:now]}"
    org_ref01_data_up0_up[org_ref01_markdef_up0_name] = org_ref01_markdef_up0_value

    org_ref01_resdata_up0_result = org_ref01_ent.update(org_ref01_data_up0_up, nil)
    org_ref01_resdata_up0 = Helpers.to_map(org_ref01_resdata_up0_result)
    assert !org_ref01_resdata_up0.nil?
    assert_equal org_ref01_resdata_up0[org_ref01_markdef_up0_name], org_ref01_markdef_up0_value

    # LOAD
    org_ref01_match_dt0 = {}
    org_ref01_data_dt0_loaded = org_ref01_ent.load(org_ref01_match_dt0, nil)
    assert !org_ref01_data_dt0_loaded.nil?

    # REMOVE
    org_ref01_match_rm0 = {
      "id" => org_ref01_data["id"],
    }
    org_ref01_ent.remove(org_ref01_match_rm0, nil)

    # LIST
    org_ref01_match_rt0 = {}

    org_ref01_list_rt0_result = org_ref01_ent.list(org_ref01_match_rt0, nil)
    assert org_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(org_ref01_list_rt0_result),
      { "id" => org_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def org_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "org", "OrgTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudsmithSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["org01", "org02", "org03", "deny_policy01", "deny_policy02", "deny_policy03", "invite01", "invite02", "invite03", "license_policy01", "license_policy02", "license_policy03", "member01", "member02", "member03", "openid_connect01", "openid_connect02", "openid_connect03", "saml_group_sync01", "saml_group_sync02", "saml_group_sync03", "service01", "service02", "service03", "team01", "team02", "team03", "vulnerability_policy01", "vulnerability_policy02", "vulnerability_policy03"],
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
  entid_env_raw = ENV["CLOUDSMITH_TEST_ORG_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDSMITH_TEST_ORG_ENTID" => idmap,
    "CLOUDSMITH_TEST_LIVE" => "FALSE",
    "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
    "CLOUDSMITH_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDSMITH_TEST_ORG_ENTID"])
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
