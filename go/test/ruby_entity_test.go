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

func TestRubyEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Ruby(nil)
		if ent == nil {
			t.Fatal("expected non-nil RubyEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := rubyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ruby." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_RUBY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		rubyRef01Ent := client.Ruby(nil)
		rubyRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "ruby"}, setup.data), "ruby_ref01"))
		rubyRef01Data["identifier"] = setup.idmap["identifier01"]
		rubyRef01Data["owner"] = setup.idmap["owner01"]

		rubyRef01DataResult, err := rubyRef01Ent.Create(rubyRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		rubyRef01Data = core.ToMapAny(rubyRef01DataResult)
		if rubyRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		rubyRef01Match := map[string]any{
			"identifier": setup.idmap["identifier01"],
			"owner": setup.idmap["owner01"],
		}

		rubyRef01ListResult, err := rubyRef01Ent.List(rubyRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		rubyRef01List, rubyRef01ListOk := rubyRef01ListResult.([]any)
		if !rubyRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", rubyRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(rubyRef01List), map[string]any{"id": rubyRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		rubyRef01DataUp0Up := map[string]any{
			"identifier": setup.idmap["identifier"],
			"owner": setup.idmap["owner"],
		}

		rubyRef01MarkdefUp0Name := "auth_mode"
		rubyRef01MarkdefUp0Value := fmt.Sprintf("Mark01-ruby_ref01_%d", setup.now)
		rubyRef01DataUp0Up[rubyRef01MarkdefUp0Name] = rubyRef01MarkdefUp0Value

		rubyRef01ResdataUp0Result, err := rubyRef01Ent.Update(rubyRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		rubyRef01ResdataUp0 := core.ToMapAny(rubyRef01ResdataUp0Result)
		if rubyRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if rubyRef01ResdataUp0[rubyRef01MarkdefUp0Name] != rubyRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", rubyRef01MarkdefUp0Name, rubyRef01ResdataUp0[rubyRef01MarkdefUp0Name])
		}

		// LOAD
		rubyRef01MatchDt0 := map[string]any{}
		rubyRef01DataDt0Loaded, err := rubyRef01Ent.Load(rubyRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if rubyRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func rubyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ruby", "RubyTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ruby test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ruby test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"ruby01", "ruby02", "ruby03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_RUBY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_RUBY_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_RUBY_ENTID"])
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
