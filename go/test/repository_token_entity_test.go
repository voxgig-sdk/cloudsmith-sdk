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

func TestRepositoryTokenEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RepositoryToken(nil)
		if ent == nil {
			t.Fatal("expected non-nil RepositoryTokenEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := repository_tokenBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "repository_token." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_REPOSITORY_TOKEN_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		repositoryTokenRef01Ent := client.RepositoryToken(nil)
		repositoryTokenRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "repository_token"}, setup.data), "repository_token_ref01"))
		repositoryTokenRef01Data["owner"] = setup.idmap["owner01"]
		repositoryTokenRef01Data["repo"] = setup.idmap["repo01"]

		repositoryTokenRef01DataResult, err := repositoryTokenRef01Ent.Create(repositoryTokenRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		repositoryTokenRef01Data = core.ToMapAny(repositoryTokenRef01DataResult)
		if repositoryTokenRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		repositoryTokenRef01Match := map[string]any{
			"owner": setup.idmap["owner01"],
			"repo": setup.idmap["repo01"],
		}

		repositoryTokenRef01ListResult, err := repositoryTokenRef01Ent.List(repositoryTokenRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		repositoryTokenRef01List, repositoryTokenRef01ListOk := repositoryTokenRef01ListResult.([]any)
		if !repositoryTokenRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", repositoryTokenRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(repositoryTokenRef01List), map[string]any{"id": repositoryTokenRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		repositoryTokenRef01DataUp0Up := map[string]any{
			"owner": setup.idmap["owner"],
			"repo": setup.idmap["repo"],
		}

		repositoryTokenRef01MarkdefUp0Name := "created_at"
		repositoryTokenRef01MarkdefUp0Value := fmt.Sprintf("Mark01-repository_token_ref01_%d", setup.now)
		repositoryTokenRef01DataUp0Up[repositoryTokenRef01MarkdefUp0Name] = repositoryTokenRef01MarkdefUp0Value

		repositoryTokenRef01ResdataUp0Result, err := repositoryTokenRef01Ent.Update(repositoryTokenRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		repositoryTokenRef01ResdataUp0 := core.ToMapAny(repositoryTokenRef01ResdataUp0Result)
		if repositoryTokenRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if repositoryTokenRef01ResdataUp0[repositoryTokenRef01MarkdefUp0Name] != repositoryTokenRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", repositoryTokenRef01MarkdefUp0Name, repositoryTokenRef01ResdataUp0[repositoryTokenRef01MarkdefUp0Name])
		}

		// LOAD
		repositoryTokenRef01MatchDt0 := map[string]any{}
		repositoryTokenRef01DataDt0Loaded, err := repositoryTokenRef01Ent.Load(repositoryTokenRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if repositoryTokenRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func repository_tokenBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "repository_token", "RepositoryTokenTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read repository_token test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse repository_token test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"repository_token01", "repository_token02", "repository_token03", "entitlement01", "entitlement02", "entitlement03", "owner01", "repo01"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_REPOSITORY_TOKEN_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_REPOSITORY_TOKEN_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_REPOSITORY_TOKEN_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add owner alias for update test.
	if idmapResolved["owner"] == nil {
		idmapResolved["owner"] = idmapResolved["owner01"]
	}
	// Add repo alias for update test.
	if idmapResolved["repo"] == nil {
		idmapResolved["repo"] = idmapResolved["repo01"]
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
