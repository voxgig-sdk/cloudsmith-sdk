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

func TestHexEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Hex(nil)
		if ent == nil {
			t.Fatal("expected non-nil HexEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := hexBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "hex." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_HEX_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		hexRef01Ent := client.Hex(nil)
		hexRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "hex"}, setup.data), "hex_ref01"))
		hexRef01Data["identifier"] = setup.idmap["identifier01"]
		hexRef01Data["owner"] = setup.idmap["owner01"]

		hexRef01DataResult, err := hexRef01Ent.Create(hexRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		hexRef01Data = core.ToMapAny(hexRef01DataResult)
		if hexRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		hexRef01Match := map[string]any{
			"identifier": setup.idmap["identifier01"],
			"owner": setup.idmap["owner01"],
		}

		hexRef01ListResult, err := hexRef01Ent.List(hexRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		hexRef01List, hexRef01ListOk := hexRef01ListResult.([]any)
		if !hexRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", hexRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(hexRef01List), map[string]any{"id": hexRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		hexRef01DataUp0Up := map[string]any{
			"identifier": setup.idmap["identifier"],
			"owner": setup.idmap["owner"],
		}

		hexRef01MarkdefUp0Name := "auth_mode"
		hexRef01MarkdefUp0Value := fmt.Sprintf("Mark01-hex_ref01_%d", setup.now)
		hexRef01DataUp0Up[hexRef01MarkdefUp0Name] = hexRef01MarkdefUp0Value

		hexRef01ResdataUp0Result, err := hexRef01Ent.Update(hexRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		hexRef01ResdataUp0 := core.ToMapAny(hexRef01ResdataUp0Result)
		if hexRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if hexRef01ResdataUp0[hexRef01MarkdefUp0Name] != hexRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", hexRef01MarkdefUp0Name, hexRef01ResdataUp0[hexRef01MarkdefUp0Name])
		}

		// LOAD
		hexRef01MatchDt0 := map[string]any{}
		hexRef01DataDt0Loaded, err := hexRef01Ent.Load(hexRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if hexRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func hexBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "hex", "HexTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read hex test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse hex test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"hex01", "hex02", "hex03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_HEX_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_HEX_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_HEX_ENTID"])
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
