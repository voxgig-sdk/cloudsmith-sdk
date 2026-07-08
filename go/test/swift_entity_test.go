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

func TestSwiftEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Swift(nil)
		if ent == nil {
			t.Fatal("expected non-nil SwiftEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := swiftBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "swift." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_SWIFT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		swiftRef01Ent := client.Swift(nil)
		swiftRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "swift"}, setup.data), "swift_ref01"))
		swiftRef01Data["identifier"] = setup.idmap["identifier01"]
		swiftRef01Data["owner"] = setup.idmap["owner01"]

		swiftRef01DataResult, err := swiftRef01Ent.Create(swiftRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		swiftRef01Data = core.ToMapAny(swiftRef01DataResult)
		if swiftRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		swiftRef01Match := map[string]any{
			"identifier": setup.idmap["identifier01"],
			"owner": setup.idmap["owner01"],
		}

		swiftRef01ListResult, err := swiftRef01Ent.List(swiftRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		swiftRef01List, swiftRef01ListOk := swiftRef01ListResult.([]any)
		if !swiftRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", swiftRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(swiftRef01List), map[string]any{"id": swiftRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		swiftRef01DataUp0Up := map[string]any{
			"identifier": setup.idmap["identifier"],
			"owner": setup.idmap["owner"],
		}

		swiftRef01MarkdefUp0Name := "auth_mode"
		swiftRef01MarkdefUp0Value := fmt.Sprintf("Mark01-swift_ref01_%d", setup.now)
		swiftRef01DataUp0Up[swiftRef01MarkdefUp0Name] = swiftRef01MarkdefUp0Value

		swiftRef01ResdataUp0Result, err := swiftRef01Ent.Update(swiftRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		swiftRef01ResdataUp0 := core.ToMapAny(swiftRef01ResdataUp0Result)
		if swiftRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if swiftRef01ResdataUp0[swiftRef01MarkdefUp0Name] != swiftRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", swiftRef01MarkdefUp0Name, swiftRef01ResdataUp0[swiftRef01MarkdefUp0Name])
		}

		// LOAD
		swiftRef01MatchDt0 := map[string]any{}
		swiftRef01DataDt0Loaded, err := swiftRef01Ent.Load(swiftRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if swiftRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func swiftBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "swift", "SwiftTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read swift test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse swift test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"swift01", "swift02", "swift03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_SWIFT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_SWIFT_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_SWIFT_ENTID"])
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
