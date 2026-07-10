<?php
declare(strict_types=1);

// Ruby entity test

require_once __DIR__ . '/../cloudsmith_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class RubyEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudsmithSDK::test(null, null);
        $ent = $testsdk->Ruby(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = ruby_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "ruby." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_RUBY_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $ruby_ref01_ent = $client->Ruby(null);
        $ruby_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.ruby"), "ruby_ref01"));
        $ruby_ref01_data["identifier"] = $setup["idmap"]["identifier01"];
        $ruby_ref01_data["owner"] = $setup["idmap"]["owner01"];

        $ruby_ref01_data_result = $ruby_ref01_ent->create($ruby_ref01_data, null);
        $ruby_ref01_data = Helpers::to_map($ruby_ref01_data_result);
        $this->assertNotNull($ruby_ref01_data);

        // LIST
        $ruby_ref01_match = [
            "identifier" => $setup["idmap"]["identifier01"],
            "owner" => $setup["idmap"]["owner01"],
        ];

        $ruby_ref01_list_result = $ruby_ref01_ent->list($ruby_ref01_match, null);
        $this->assertIsArray($ruby_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($ruby_ref01_list_result),
            ["id" => $ruby_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $ruby_ref01_data_up0_up = [
            "identifier" => $setup["idmap"]["identifier"],
            "owner" => $setup["idmap"]["owner"],
        ];

        $ruby_ref01_markdef_up0_name = "auth_mode";
        $ruby_ref01_markdef_up0_value = "Mark01-ruby_ref01_" . $setup["now"];
        $ruby_ref01_data_up0_up[$ruby_ref01_markdef_up0_name] = $ruby_ref01_markdef_up0_value;

        $ruby_ref01_resdata_up0_result = $ruby_ref01_ent->update($ruby_ref01_data_up0_up, null);
        $ruby_ref01_resdata_up0 = Helpers::to_map($ruby_ref01_resdata_up0_result);
        $this->assertNotNull($ruby_ref01_resdata_up0);
        $this->assertEquals($ruby_ref01_resdata_up0[$ruby_ref01_markdef_up0_name], $ruby_ref01_markdef_up0_value);

        // LOAD
        $ruby_ref01_match_dt0 = [];
        $ruby_ref01_data_dt0_loaded = $ruby_ref01_ent->load($ruby_ref01_match_dt0, null);
        $this->assertNotNull($ruby_ref01_data_dt0_loaded);

    }
}

function ruby_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/ruby/RubyTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudsmithSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["ruby01", "ruby02", "ruby03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDSMITH_TEST_RUBY_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDSMITH_TEST_RUBY_ENTID" => $idmap,
        "CLOUDSMITH_TEST_LIVE" => "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
        "CLOUDSMITH_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDSMITH_TEST_RUBY_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["identifier"])) {
        $idmap_resolved["identifier"] = $idmap_resolved["identifier01"];
    }
    if (!isset($idmap_resolved["owner"])) {
        $idmap_resolved["owner"] = $idmap_resolved["owner01"];
    }

    if ($env["CLOUDSMITH_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["CLOUDSMITH_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new CloudsmithSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["CLOUDSMITH_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CLOUDSMITH_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
