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

func TestCargoEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Cargo(nil)
		if ent == nil {
			t.Fatal("expected non-nil CargoEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := cargoBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "cargo." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_CARGO_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		cargoRef01Ent := client.Cargo(nil)
		cargoRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "cargo"}, setup.data), "cargo_ref01"))
		cargoRef01Data["identifier"] = setup.idmap["identifier01"]
		cargoRef01Data["owner"] = setup.idmap["owner01"]

		cargoRef01DataResult, err := cargoRef01Ent.Create(cargoRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		cargoRef01Data = core.ToMapAny(cargoRef01DataResult)
		if cargoRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		cargoRef01Match := map[string]any{
			"identifier": setup.idmap["identifier01"],
			"owner": setup.idmap["owner01"],
		}

		cargoRef01ListResult, err := cargoRef01Ent.List(cargoRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		cargoRef01List, cargoRef01ListOk := cargoRef01ListResult.([]any)
		if !cargoRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", cargoRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(cargoRef01List), map[string]any{"id": cargoRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		cargoRef01DataUp0Up := map[string]any{
			"identifier": setup.idmap["identifier"],
			"owner": setup.idmap["owner"],
		}

		cargoRef01MarkdefUp0Name := "auth_mode"
		cargoRef01MarkdefUp0Value := fmt.Sprintf("Mark01-cargo_ref01_%d", setup.now)
		cargoRef01DataUp0Up[cargoRef01MarkdefUp0Name] = cargoRef01MarkdefUp0Value

		cargoRef01ResdataUp0Result, err := cargoRef01Ent.Update(cargoRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		cargoRef01ResdataUp0 := core.ToMapAny(cargoRef01ResdataUp0Result)
		if cargoRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if cargoRef01ResdataUp0[cargoRef01MarkdefUp0Name] != cargoRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", cargoRef01MarkdefUp0Name, cargoRef01ResdataUp0[cargoRef01MarkdefUp0Name])
		}

		// LOAD
		cargoRef01MatchDt0 := map[string]any{}
		cargoRef01DataDt0Loaded, err := cargoRef01Ent.Load(cargoRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if cargoRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func cargoBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "cargo", "CargoTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read cargo test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse cargo test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"cargo01", "cargo02", "cargo03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_CARGO_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_CARGO_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_CARGO_ENTID"])
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
