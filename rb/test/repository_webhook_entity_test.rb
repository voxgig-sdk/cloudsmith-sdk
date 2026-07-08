# RepositoryWebhook entity test

require "minitest/autorun"
require "json"
require_relative "../Cloudsmith_sdk"
require_relative "runner"

class RepositoryWebhookEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudsmithSDK.test(nil, nil)
    ent = testsdk.RepositoryWebhook(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = repository_webhook_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "repository_webhook." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    repository_webhook_ref01_ent = client.RepositoryWebhook(nil)
    repository_webhook_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.repository_webhook"), "repository_webhook_ref01"))
    repository_webhook_ref01_data["identifier"] = setup[:idmap]["identifier01"]
    repository_webhook_ref01_data["owner"] = setup[:idmap]["owner01"]
    repository_webhook_ref01_data["repo"] = setup[:idmap]["repo01"]

    repository_webhook_ref01_data_result = repository_webhook_ref01_ent.create(repository_webhook_ref01_data, nil)
    repository_webhook_ref01_data = Helpers.to_map(repository_webhook_ref01_data_result)
    assert !repository_webhook_ref01_data.nil?

    # LIST
    repository_webhook_ref01_match = {
      "identifier" => setup[:idmap]["identifier01"],
      "owner" => setup[:idmap]["owner01"],
      "repo" => setup[:idmap]["repo01"],
    }

    repository_webhook_ref01_list_result = repository_webhook_ref01_ent.list(repository_webhook_ref01_match, nil)
    assert repository_webhook_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(repository_webhook_ref01_list_result),
      { "id" => repository_webhook_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    repository_webhook_ref01_data_up0_up = {
      "owner" => setup[:idmap]["owner"],
      "repo" => setup[:idmap]["repo"],
    }

    repository_webhook_ref01_markdef_up0_name = "created_at"
    repository_webhook_ref01_markdef_up0_value = "Mark01-repository_webhook_ref01_#{setup[:now]}"
    repository_webhook_ref01_data_up0_up[repository_webhook_ref01_markdef_up0_name] = repository_webhook_ref01_markdef_up0_value

    repository_webhook_ref01_resdata_up0_result = repository_webhook_ref01_ent.update(repository_webhook_ref01_data_up0_up, nil)
    repository_webhook_ref01_resdata_up0 = Helpers.to_map(repository_webhook_ref01_resdata_up0_result)
    assert !repository_webhook_ref01_resdata_up0.nil?
    assert_equal repository_webhook_ref01_resdata_up0[repository_webhook_ref01_markdef_up0_name], repository_webhook_ref01_markdef_up0_value

  end
end

def repository_webhook_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "repository_webhook", "RepositoryWebhookTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudsmithSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["repository_webhook01", "repository_webhook02", "repository_webhook03", "webhook01", "webhook02", "webhook03", "identifier01", "owner01", "repo01"],
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
  entid_env_raw = ENV["CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID" => idmap,
    "CLOUDSMITH_TEST_LIVE" => "FALSE",
    "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
    "CLOUDSMITH_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["owner"].nil?
    idmap_resolved["owner"] = idmap_resolved["owner01"]
  end
  if idmap_resolved["repo"].nil?
    idmap_resolved["repo"] = idmap_resolved["repo01"]
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
