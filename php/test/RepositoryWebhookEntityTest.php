<?php
declare(strict_types=1);

// RepositoryWebhook entity test

require_once __DIR__ . '/../cloudsmith_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class RepositoryWebhookEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudsmithSDK::test(null, null);
        $ent = $testsdk->RepositoryWebhook(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = repository_webhook_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "repository_webhook." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $repository_webhook_ref01_ent = $client->RepositoryWebhook(null);
        $repository_webhook_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.repository_webhook"), "repository_webhook_ref01"));
        $repository_webhook_ref01_data["identifier"] = $setup["idmap"]["identifier01"];
        $repository_webhook_ref01_data["owner"] = $setup["idmap"]["owner01"];
        $repository_webhook_ref01_data["repo"] = $setup["idmap"]["repo01"];

        $repository_webhook_ref01_data_result = $repository_webhook_ref01_ent->create($repository_webhook_ref01_data, null);
        $repository_webhook_ref01_data = Helpers::to_map($repository_webhook_ref01_data_result);
        $this->assertNotNull($repository_webhook_ref01_data);

        // LIST
        $repository_webhook_ref01_match = [
            "identifier" => $setup["idmap"]["identifier01"],
            "owner" => $setup["idmap"]["owner01"],
            "repo" => $setup["idmap"]["repo01"],
        ];

        $repository_webhook_ref01_list_result = $repository_webhook_ref01_ent->list($repository_webhook_ref01_match, null);
        $this->assertIsArray($repository_webhook_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($repository_webhook_ref01_list_result),
            ["id" => $repository_webhook_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $repository_webhook_ref01_data_up0_up = [
            "owner" => $setup["idmap"]["owner"],
            "repo" => $setup["idmap"]["repo"],
        ];

        $repository_webhook_ref01_markdef_up0_name = "created_at";
        $repository_webhook_ref01_markdef_up0_value = "Mark01-repository_webhook_ref01_" . $setup["now"];
        $repository_webhook_ref01_data_up0_up[$repository_webhook_ref01_markdef_up0_name] = $repository_webhook_ref01_markdef_up0_value;

        $repository_webhook_ref01_resdata_up0_result = $repository_webhook_ref01_ent->update($repository_webhook_ref01_data_up0_up, null);
        $repository_webhook_ref01_resdata_up0 = Helpers::to_map($repository_webhook_ref01_resdata_up0_result);
        $this->assertNotNull($repository_webhook_ref01_resdata_up0);
        $this->assertEquals($repository_webhook_ref01_resdata_up0[$repository_webhook_ref01_markdef_up0_name], $repository_webhook_ref01_markdef_up0_value);

    }
}

function repository_webhook_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/repository_webhook/RepositoryWebhookTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudsmithSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["repository_webhook01", "repository_webhook02", "repository_webhook03", "webhook01", "webhook02", "webhook03", "identifier01", "owner01", "repo01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID" => $idmap,
        "CLOUDSMITH_TEST_LIVE" => "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
        "CLOUDSMITH_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["owner"])) {
        $idmap_resolved["owner"] = $idmap_resolved["owner01"];
    }
    if (!isset($idmap_resolved["repo"])) {
        $idmap_resolved["repo"] = $idmap_resolved["repo01"];
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
