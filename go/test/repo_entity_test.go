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

func TestRepoEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Repo(nil)
		if ent == nil {
			t.Fatal("expected non-nil RepoEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"repo": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Repo(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.MakeConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.Repo(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := repoBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "repo." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_REPO_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		repoRef01Ent := client.Repo(nil)
		repoRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "repo"}, setup.data), "repo_ref01"))
		repoRef01Data["identifier"] = setup.idmap["identifier01"]
		repoRef01Data["owner"] = setup.idmap["owner01"]

		repoRef01DataResult, err := repoRef01Ent.Create(repoRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		repoRef01Data = core.ToMapAny(repoRef01DataResult)
		if repoRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		repoRef01Match := map[string]any{}

		repoRef01ListResult, err := repoRef01Ent.List(repoRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		repoRef01List, repoRef01ListOk := repoRef01ListResult.([]any)
		if !repoRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", repoRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(repoRef01List), map[string]any{"id": repoRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		repoRef01DataUp0Up := map[string]any{
			"owner": setup.idmap["owner"],
		}

		repoRef01MarkdefUp0Name := "cdn_url"
		repoRef01MarkdefUp0Value := fmt.Sprintf("Mark01-repo_ref01_%d", setup.now)
		repoRef01DataUp0Up[repoRef01MarkdefUp0Name] = repoRef01MarkdefUp0Value

		repoRef01ResdataUp0Result, err := repoRef01Ent.Update(repoRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		repoRef01ResdataUp0 := core.ToMapAny(repoRef01ResdataUp0Result)
		if repoRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if repoRef01ResdataUp0[repoRef01MarkdefUp0Name] != repoRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", repoRef01MarkdefUp0Name, repoRef01ResdataUp0[repoRef01MarkdefUp0Name])
		}

		// LOAD
		repoRef01MatchDt0 := map[string]any{}
		repoRef01DataDt0Loaded, err := repoRef01Ent.Load(repoRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if repoRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

		// REMOVE
		repoRef01MatchRm0 := map[string]any{
			"id": repoRef01Data["id"],
		}
		_, err = repoRef01Ent.Remove(repoRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		repoRef01MatchRt0 := map[string]any{}

		repoRef01ListRt0Result, err := repoRef01Ent.List(repoRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		repoRef01ListRt0, repoRef01ListRt0Ok := repoRef01ListRt0Result.([]any)
		if !repoRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", repoRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(repoRef01ListRt0), map[string]any{"id": repoRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func repoBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "repo", "RepoTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read repo test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse repo test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"repo01", "repo02", "repo03", "cargo01", "cargo02", "cargo03", "composer01", "composer02", "composer03", "conda01", "conda02", "conda03", "cran01", "cran02", "cran03", "dart01", "dart02", "dart03", "deb01", "deb02", "deb03", "docker01", "docker02", "docker03", "go01", "go02", "go03", "helm01", "helm02", "helm03", "hex01", "hex02", "hex03", "huggingface01", "huggingface02", "huggingface03", "maven01", "maven02", "maven03", "npm01", "npm02", "npm03", "nuget01", "nuget02", "nuget03", "python01", "python02", "python03", "rpm01", "rpm02", "rpm03", "ruby01", "ruby02", "ruby03", "swift01", "swift02", "swift03", "identifier01", "owner01"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_REPO_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_REPO_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_REPO_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
