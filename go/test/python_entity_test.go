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

func TestPythonEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Python(nil)
		if ent == nil {
			t.Fatal("expected non-nil PythonEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := pythonBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "python." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_PYTHON_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		pythonRef01Ent := client.Python(nil)
		pythonRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "python"}, setup.data), "python_ref01"))
		pythonRef01Data["identifier"] = setup.idmap["identifier01"]
		pythonRef01Data["owner"] = setup.idmap["owner01"]

		pythonRef01DataResult, err := pythonRef01Ent.Create(pythonRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		pythonRef01Data = core.ToMapAny(pythonRef01DataResult)
		if pythonRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		pythonRef01Match := map[string]any{
			"identifier": setup.idmap["identifier01"],
			"owner": setup.idmap["owner01"],
		}

		pythonRef01ListResult, err := pythonRef01Ent.List(pythonRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		pythonRef01List, pythonRef01ListOk := pythonRef01ListResult.([]any)
		if !pythonRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", pythonRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(pythonRef01List), map[string]any{"id": pythonRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		pythonRef01DataUp0Up := map[string]any{
			"identifier": setup.idmap["identifier"],
			"owner": setup.idmap["owner"],
		}

		pythonRef01MarkdefUp0Name := "auth_mode"
		pythonRef01MarkdefUp0Value := fmt.Sprintf("Mark01-python_ref01_%d", setup.now)
		pythonRef01DataUp0Up[pythonRef01MarkdefUp0Name] = pythonRef01MarkdefUp0Value

		pythonRef01ResdataUp0Result, err := pythonRef01Ent.Update(pythonRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		pythonRef01ResdataUp0 := core.ToMapAny(pythonRef01ResdataUp0Result)
		if pythonRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if pythonRef01ResdataUp0[pythonRef01MarkdefUp0Name] != pythonRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", pythonRef01MarkdefUp0Name, pythonRef01ResdataUp0[pythonRef01MarkdefUp0Name])
		}

		// LOAD
		pythonRef01MatchDt0 := map[string]any{}
		pythonRef01DataDt0Loaded, err := pythonRef01Ent.Load(pythonRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if pythonRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func pythonBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "python", "PythonTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read python test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse python test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"python01", "python02", "python03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_PYTHON_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_PYTHON_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_PYTHON_ENTID"])
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
