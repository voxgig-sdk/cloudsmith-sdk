<?php
declare(strict_types=1);

// Package entity test

require_once __DIR__ . '/../cloudsmith_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class PackageEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudsmithSDK::test(null, null);
        $ent = $testsdk->Package(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = package_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "package." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_PACKAGE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $package_ref01_ent = $client->Package(null);
        $package_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.package"), "package_ref01"));
        $package_ref01_data["identifier"] = $setup["idmap"]["identifier01"];
        $package_ref01_data["owner"] = $setup["idmap"]["owner01"];
        $package_ref01_data["repo"] = $setup["idmap"]["repo01"];

        $package_ref01_data_result = $package_ref01_ent->create($package_ref01_data, null);
        $package_ref01_data = Helpers::to_map($package_ref01_data_result);
        $this->assertNotNull($package_ref01_data);

        // LIST
        $package_ref01_match = [
            "identifier" => $setup["idmap"]["identifier01"],
            "owner" => $setup["idmap"]["owner01"],
            "repo" => $setup["idmap"]["repo01"],
        ];

        $package_ref01_list_result = $package_ref01_ent->list($package_ref01_match, null);
        $this->assertIsArray($package_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($package_ref01_list_result),
            ["id" => $package_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // LOAD
        $package_ref01_match_dt0 = [];
        $package_ref01_data_dt0_loaded = $package_ref01_ent->load($package_ref01_match_dt0, null);
        $this->assertNotNull($package_ref01_data_dt0_loaded);

        // REMOVE
        $package_ref01_match_rm0 = [
            "id" => $package_ref01_data["id"],
        ];
        $package_ref01_ent->remove($package_ref01_match_rm0, null);

        // LIST
        $package_ref01_match_rt0 = [
            "identifier" => $setup["idmap"]["identifier01"],
            "owner" => $setup["idmap"]["owner01"],
            "repo" => $setup["idmap"]["repo01"],
        ];

        $package_ref01_list_rt0_result = $package_ref01_ent->list($package_ref01_match_rt0, null);
        $this->assertIsArray($package_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($package_ref01_list_rt0_result),
            ["id" => $package_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function package_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/package/PackageTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudsmithSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["package01", "package02", "package03", "identifier01", "owner01", "repo01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDSMITH_TEST_PACKAGE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDSMITH_TEST_PACKAGE_ENTID" => $idmap,
        "CLOUDSMITH_TEST_LIVE" => "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
        "CLOUDSMITH_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDSMITH_TEST_PACKAGE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
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
