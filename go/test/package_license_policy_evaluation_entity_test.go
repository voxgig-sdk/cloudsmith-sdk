package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudsmith-sdk/go"
	"github.com/voxgig-sdk/cloudsmith-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudsmith-sdk/go/utility/struct"
)

func TestPackageLicensePolicyEvaluationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PackageLicensePolicyEvaluation(nil)
		if ent == nil {
			t.Fatal("expected non-nil PackageLicensePolicyEvaluationEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := package_license_policy_evaluationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "package_license_policy_evaluation." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_PACKAGE_LICENSE_POLICY_EVALUATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		packageLicensePolicyEvaluationRef01Ent := client.PackageLicensePolicyEvaluation(nil)
		packageLicensePolicyEvaluationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "package_license_policy_evaluation"}, setup.data), "package_license_policy_evaluation_ref01"))
		packageLicensePolicyEvaluationRef01Data["license_policy_id"] = setup.idmap["license_policy01"]
		packageLicensePolicyEvaluationRef01Data["org_id"] = setup.idmap["org01"]
		packageLicensePolicyEvaluationRef01Data["policy_slug_perm"] = setup.idmap["policy_slug_perm01"]

		packageLicensePolicyEvaluationRef01DataResult, err := packageLicensePolicyEvaluationRef01Ent.Create(packageLicensePolicyEvaluationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		packageLicensePolicyEvaluationRef01Data = core.ToMapAny(packageLicensePolicyEvaluationRef01DataResult)
		if packageLicensePolicyEvaluationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		packageLicensePolicyEvaluationRef01Match := map[string]any{
			"org_id": setup.idmap["org01"],
			"policy_slug_perm": setup.idmap["policy_slug_perm01"],
		}

		packageLicensePolicyEvaluationRef01ListResult, err := packageLicensePolicyEvaluationRef01Ent.List(packageLicensePolicyEvaluationRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		packageLicensePolicyEvaluationRef01List, packageLicensePolicyEvaluationRef01ListOk := packageLicensePolicyEvaluationRef01ListResult.([]any)
		if !packageLicensePolicyEvaluationRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", packageLicensePolicyEvaluationRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(packageLicensePolicyEvaluationRef01List), map[string]any{"id": packageLicensePolicyEvaluationRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		packageLicensePolicyEvaluationRef01MatchDt0 := map[string]any{}
		packageLicensePolicyEvaluationRef01DataDt0Loaded, err := packageLicensePolicyEvaluationRef01Ent.Load(packageLicensePolicyEvaluationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if packageLicensePolicyEvaluationRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func package_license_policy_evaluationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "package_license_policy_evaluation", "PackageLicensePolicyEvaluationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read package_license_policy_evaluation test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse package_license_policy_evaluation test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"package_license_policy_evaluation01", "package_license_policy_evaluation02", "package_license_policy_evaluation03", "org01", "org02", "org03", "license_policy01", "license_policy02", "license_policy03", "policy_slug_perm01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_PACKAGE_LICENSE_POLICY_EVALUATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_PACKAGE_LICENSE_POLICY_EVALUATION_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_PACKAGE_LICENSE_POLICY_EVALUATION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CLOUDSMITH_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["CLOUDSMITH_APIKEY"],
			},
			extra,
		})
		client = sdk.NewCloudsmithSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDSMITH_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDSMITH_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
