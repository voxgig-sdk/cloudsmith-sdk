<?php
declare(strict_types=1);

// Service entity test

require_once __DIR__ . '/../cloudsmith_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ServiceEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudsmithSDK::test(null, null);
        $ent = $testsdk->Service(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = service_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "service." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_SERVICE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $service_ref01_ent = $client->Service(null);
        $service_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.service"), "service_ref01"));
        $service_ref01_data["org_id"] = $setup["idmap"]["org01"];
        $service_ref01_data["service"] = $setup["idmap"]["service01"];

        $service_ref01_data_result = $service_ref01_ent->create($service_ref01_data, null);
        $service_ref01_data = Helpers::to_map($service_ref01_data_result);
        $this->assertNotNull($service_ref01_data);

        // LIST
        $service_ref01_match = [
            "org_id" => $setup["idmap"]["org01"],
        ];

        $service_ref01_list_result = $service_ref01_ent->list($service_ref01_match, null);
        $this->assertIsArray($service_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($service_ref01_list_result),
            ["id" => $service_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $service_ref01_data_up0_up = [
            "org_id" => $setup["idmap"]["org_id"],
        ];

        $service_ref01_markdef_up0_name = "created_at";
        $service_ref01_markdef_up0_value = "Mark01-service_ref01_" . $setup["now"];
        $service_ref01_data_up0_up[$service_ref01_markdef_up0_name] = $service_ref01_markdef_up0_value;

        $service_ref01_resdata_up0_result = $service_ref01_ent->update($service_ref01_data_up0_up, null);
        $service_ref01_resdata_up0 = Helpers::to_map($service_ref01_resdata_up0_result);
        $this->assertNotNull($service_ref01_resdata_up0);
        $this->assertEquals($service_ref01_resdata_up0[$service_ref01_markdef_up0_name], $service_ref01_markdef_up0_value);

        // LOAD
        $service_ref01_match_dt0 = [];
        $service_ref01_data_dt0_loaded = $service_ref01_ent->load($service_ref01_match_dt0, null);
        $this->assertNotNull($service_ref01_data_dt0_loaded);

    }
}

function service_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/service/ServiceTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudsmithSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["service01", "service02", "service03", "org01", "org02", "org03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDSMITH_TEST_SERVICE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDSMITH_TEST_SERVICE_ENTID" => $idmap,
        "CLOUDSMITH_TEST_LIVE" => "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
        "CLOUDSMITH_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDSMITH_TEST_SERVICE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["org_id"])) {
        $idmap_resolved["org_id"] = $idmap_resolved["org01"];
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
