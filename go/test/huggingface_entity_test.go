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

func TestHuggingfaceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Huggingface(nil)
		if ent == nil {
			t.Fatal("expected non-nil HuggingfaceEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := huggingfaceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "huggingface." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_HUGGINGFACE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		huggingfaceRef01Ent := client.Huggingface(nil)
		huggingfaceRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "huggingface"}, setup.data), "huggingface_ref01"))
		huggingfaceRef01Data["identifier"] = setup.idmap["identifier01"]
		huggingfaceRef01Data["owner"] = setup.idmap["owner01"]

		huggingfaceRef01DataResult, err := huggingfaceRef01Ent.Create(huggingfaceRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		huggingfaceRef01Data = core.ToMapAny(huggingfaceRef01DataResult)
		if huggingfaceRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		huggingfaceRef01Match := map[string]any{
			"identifier": setup.idmap["identifier01"],
			"owner": setup.idmap["owner01"],
		}

		huggingfaceRef01ListResult, err := huggingfaceRef01Ent.List(huggingfaceRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		huggingfaceRef01List, huggingfaceRef01ListOk := huggingfaceRef01ListResult.([]any)
		if !huggingfaceRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", huggingfaceRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(huggingfaceRef01List), map[string]any{"id": huggingfaceRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		huggingfaceRef01DataUp0Up := map[string]any{
			"identifier": setup.idmap["identifier"],
			"owner": setup.idmap["owner"],
		}

		huggingfaceRef01MarkdefUp0Name := "auth_mode"
		huggingfaceRef01MarkdefUp0Value := fmt.Sprintf("Mark01-huggingface_ref01_%d", setup.now)
		huggingfaceRef01DataUp0Up[huggingfaceRef01MarkdefUp0Name] = huggingfaceRef01MarkdefUp0Value

		huggingfaceRef01ResdataUp0Result, err := huggingfaceRef01Ent.Update(huggingfaceRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		huggingfaceRef01ResdataUp0 := core.ToMapAny(huggingfaceRef01ResdataUp0Result)
		if huggingfaceRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if huggingfaceRef01ResdataUp0[huggingfaceRef01MarkdefUp0Name] != huggingfaceRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", huggingfaceRef01MarkdefUp0Name, huggingfaceRef01ResdataUp0[huggingfaceRef01MarkdefUp0Name])
		}

		// LOAD
		huggingfaceRef01MatchDt0 := map[string]any{}
		huggingfaceRef01DataDt0Loaded, err := huggingfaceRef01Ent.Load(huggingfaceRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if huggingfaceRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func huggingfaceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "huggingface", "HuggingfaceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read huggingface test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse huggingface test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"huggingface01", "huggingface02", "huggingface03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_HUGGINGFACE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_HUGGINGFACE_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_HUGGINGFACE_ENTID"])
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
