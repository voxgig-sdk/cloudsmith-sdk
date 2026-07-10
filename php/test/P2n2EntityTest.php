<?php
declare(strict_types=1);

// P2n2 entity test

require_once __DIR__ . '/../cloudsmith_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class P2n2EntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudsmithSDK::test(null, null);
        $ent = $testsdk->P2n2(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = p2n2_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach ([] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "p2n2." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_P_N__ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $p2n2_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.p2n2")));
        $p2n2_ref01_data = null;
        if (count($p2n2_ref01_data_raw) > 0) {
            $p2n2_ref01_data = Helpers::to_map($p2n2_ref01_data_raw[0][1]);
        }

    }
}

function p2n2_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/p2n2/P2n2TestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudsmithSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["p2n201", "p2n202", "p2n203", "package01", "package02", "package03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDSMITH_TEST_P_N__ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDSMITH_TEST_P_N__ENTID" => $idmap,
        "CLOUDSMITH_TEST_LIVE" => "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
        "CLOUDSMITH_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDSMITH_TEST_P_N__ENTID"]);
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
