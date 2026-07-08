# OrganizationInviteExtend entity test

require "minitest/autorun"
require "json"
require_relative "../Cloudsmith_sdk"
require_relative "runner"

class OrganizationInviteExtendEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudsmithSDK.test(nil, nil)
    ent = testsdk.OrganizationInviteExtend(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = organization_invite_extend_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "organization_invite_extend." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_ORGANIZATION_INVITE_EXTEND_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    organization_invite_extend_ref01_ent = client.OrganizationInviteExtend(nil)
    organization_invite_extend_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.organization_invite_extend"), "organization_invite_extend_ref01"))
    organization_invite_extend_ref01_data["org_id"] = setup[:idmap]["org01"]
    organization_invite_extend_ref01_data["slug_perm"] = setup[:idmap]["slug_perm01"]

    organization_invite_extend_ref01_data_result = organization_invite_extend_ref01_ent.create(organization_invite_extend_ref01_data, nil)
    organization_invite_extend_ref01_data = Helpers.to_map(organization_invite_extend_ref01_data_result)
    assert !organization_invite_extend_ref01_data.nil?

  end
end

def organization_invite_extend_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "organization_invite_extend", "OrganizationInviteExtendTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudsmithSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["organization_invite_extend01", "organization_invite_extend02", "organization_invite_extend03", "org01", "org02", "org03", "invite01", "invite02", "invite03", "slug_perm01"],
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
  entid_env_raw = ENV["CLOUDSMITH_TEST_ORGANIZATION_INVITE_EXTEND_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDSMITH_TEST_ORGANIZATION_INVITE_EXTEND_ENTID" => idmap,
    "CLOUDSMITH_TEST_LIVE" => "FALSE",
    "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
    "CLOUDSMITH_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDSMITH_TEST_ORGANIZATION_INVITE_EXTEND_ENTID"])
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
