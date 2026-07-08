# OrganizationMembership entity test

require "minitest/autorun"
require "json"
require_relative "../Cloudsmith_sdk"
require_relative "runner"

class OrganizationMembershipEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudsmithSDK.test(nil, nil)
    ent = testsdk.OrganizationMembership(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = organization_membership_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "organization_membership." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    organization_membership_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.organization_membership")))
    organization_membership_ref01_data = nil
    if organization_membership_ref01_data_raw.length > 0
      organization_membership_ref01_data = Helpers.to_map(organization_membership_ref01_data_raw[0][1])
    end

    # LIST
    organization_membership_ref01_ent = client.OrganizationMembership(nil)
    organization_membership_ref01_match = {
      "org_id" => setup[:idmap]["org01"],
    }

    organization_membership_ref01_list_result = organization_membership_ref01_ent.list(organization_membership_ref01_match, nil)
    assert organization_membership_ref01_list_result.is_a?(Array)

    # UPDATE
    organization_membership_ref01_data_up0_up = {
      "org_id" => setup[:idmap]["org_id"],
    }

    organization_membership_ref01_markdef_up0_name = "email"
    organization_membership_ref01_markdef_up0_value = "Mark01-organization_membership_ref01_#{setup[:now]}"
    organization_membership_ref01_data_up0_up[organization_membership_ref01_markdef_up0_name] = organization_membership_ref01_markdef_up0_value

    organization_membership_ref01_resdata_up0_result = organization_membership_ref01_ent.update(organization_membership_ref01_data_up0_up, nil)
    organization_membership_ref01_resdata_up0 = Helpers.to_map(organization_membership_ref01_resdata_up0_result)
    assert !organization_membership_ref01_resdata_up0.nil?
    assert_equal organization_membership_ref01_resdata_up0[organization_membership_ref01_markdef_up0_name], organization_membership_ref01_markdef_up0_value

    # LOAD
    organization_membership_ref01_match_dt0 = {}
    organization_membership_ref01_data_dt0_loaded = organization_membership_ref01_ent.load(organization_membership_ref01_match_dt0, nil)
    assert !organization_membership_ref01_data_dt0_loaded.nil?

  end
end

def organization_membership_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "organization_membership", "OrganizationMembershipTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudsmithSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["organization_membership01", "organization_membership02", "organization_membership03", "org01", "org02", "org03", "member01", "member02", "member03"],
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
  entid_env_raw = ENV["CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ENTID" => idmap,
    "CLOUDSMITH_TEST_LIVE" => "FALSE",
    "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
    "CLOUDSMITH_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ENTID"])
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
