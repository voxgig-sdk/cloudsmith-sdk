package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestCondaEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Conda(nil)
		if ent == nil {
			t.Fatal("expected non-nil CondaEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := condaBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "conda." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_CONDA_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		condaRef01Ent := client.Conda(nil)
		condaRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "conda"}, setup.data), "conda_ref01"))
		condaRef01Data["identifier"] = setup.idmap["identifier01"]
		condaRef01Data["owner"] = setup.idmap["owner01"]

		condaRef01DataResult, err := condaRef01Ent.Create(condaRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		condaRef01Data = core.ToMapAny(condaRef01DataResult)
		if condaRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		condaRef01Match := map[string]any{
			"identifier": setup.idmap["identifier01"],
			"owner": setup.idmap["owner01"],
		}

		condaRef01ListResult, err := condaRef01Ent.List(condaRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		condaRef01List, condaRef01ListOk := condaRef01ListResult.([]any)
		if !condaRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", condaRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(condaRef01List), map[string]any{"id": condaRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		condaRef01DataUp0Up := map[string]any{
			"identifier": setup.idmap["identifier"],
			"owner": setup.idmap["owner"],
		}

		condaRef01MarkdefUp0Name := "auth_mode"
		condaRef01MarkdefUp0Value := fmt.Sprintf("Mark01-conda_ref01_%d", setup.now)
		condaRef01DataUp0Up[condaRef01MarkdefUp0Name] = condaRef01MarkdefUp0Value

		condaRef01ResdataUp0Result, err := condaRef01Ent.Update(condaRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		condaRef01ResdataUp0 := core.ToMapAny(condaRef01ResdataUp0Result)
		if condaRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if condaRef01ResdataUp0[condaRef01MarkdefUp0Name] != condaRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", condaRef01MarkdefUp0Name, condaRef01ResdataUp0[condaRef01MarkdefUp0Name])
		}

		// LOAD
		condaRef01MatchDt0 := map[string]any{}
		condaRef01DataDt0Loaded, err := condaRef01Ent.Load(condaRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if condaRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func condaBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "conda", "CondaTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read conda test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse conda test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"conda01", "conda02", "conda03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_CONDA_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_CONDA_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_CONDA_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add identifier alias for update test.
	if idmapResolved["identifier"] == nil {
		idmapResolved["identifier"] = idmapResolved["identifier01"]
	}
	// Add owner alias for update test.
	if idmapResolved["owner"] == nil {
		idmapResolved["owner"] = idmapResolved["owner01"]
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
