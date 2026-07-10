<?php
declare(strict_types=1);

// Gon9 entity test

require_once __DIR__ . '/../cloudsmith_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class Gon9EntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudsmithSDK::test(null, null);
        $ent = $testsdk->Gon9(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = gon9_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "gon9." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_GON__ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $gon9_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.gon9")));
        $gon9_ref01_data = null;
        if (count($gon9_ref01_data_raw) > 0) {
            $gon9_ref01_data = Helpers::to_map($gon9_ref01_data_raw[0][1]);
        }

        // UPDATE
        $gon9_ref01_ent = $client->Gon9(null);
        $gon9_ref01_data_up0_up = [
            "identifier" => $setup["idmap"]["identifier"],
            "owner" => $setup["idmap"]["owner"],
        ];

        $gon9_ref01_markdef_up0_name = "auth_mode";
        $gon9_ref01_markdef_up0_value = "Mark01-gon9_ref01_" . $setup["now"];
        $gon9_ref01_data_up0_up[$gon9_ref01_markdef_up0_name] = $gon9_ref01_markdef_up0_value;

        $gon9_ref01_resdata_up0_result = $gon9_ref01_ent->update($gon9_ref01_data_up0_up, null);
        $gon9_ref01_resdata_up0 = Helpers::to_map($gon9_ref01_resdata_up0_result);
        $this->assertNotNull($gon9_ref01_resdata_up0);
        $this->assertEquals($gon9_ref01_resdata_up0[$gon9_ref01_markdef_up0_name], $gon9_ref01_markdef_up0_value);

    }
}

function gon9_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/gon9/Gon9TestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudsmithSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["gon901", "gon902", "gon903", "repo01", "repo02", "repo03", "go01", "go02", "go03", "identifier01", "owner01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDSMITH_TEST_GON__ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDSMITH_TEST_GON__ENTID" => $idmap,
        "CLOUDSMITH_TEST_LIVE" => "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
        "CLOUDSMITH_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDSMITH_TEST_GON__ENTID"]);
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
