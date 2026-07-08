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

func TestRepositoryRetentionRuleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RepositoryRetentionRule(nil)
		if ent == nil {
			t.Fatal("expected non-nil RepositoryRetentionRuleEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := repository_retention_ruleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "repository_retention_rule." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_REPOSITORY_RETENTION_RULE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		repositoryRetentionRuleRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.repository_retention_rule", setup.data)))
		var repositoryRetentionRuleRef01Data map[string]any
		if len(repositoryRetentionRuleRef01DataRaw) > 0 {
			repositoryRetentionRuleRef01Data = core.ToMapAny(repositoryRetentionRuleRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = repositoryRetentionRuleRef01Data

		// UPDATE
		repositoryRetentionRuleRef01Ent := client.RepositoryRetentionRule(nil)
		repositoryRetentionRuleRef01DataUp0Up := map[string]any{
			"owner": setup.idmap["owner"],
		}

		repositoryRetentionRuleRef01MarkdefUp0Name := "retention_package_query_string"
		repositoryRetentionRuleRef01MarkdefUp0Value := fmt.Sprintf("Mark01-repository_retention_rule_ref01_%d", setup.now)
		repositoryRetentionRuleRef01DataUp0Up[repositoryRetentionRuleRef01MarkdefUp0Name] = repositoryRetentionRuleRef01MarkdefUp0Value

		repositoryRetentionRuleRef01ResdataUp0Result, err := repositoryRetentionRuleRef01Ent.Update(repositoryRetentionRuleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		repositoryRetentionRuleRef01ResdataUp0 := core.ToMapAny(repositoryRetentionRuleRef01ResdataUp0Result)
		if repositoryRetentionRuleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if repositoryRetentionRuleRef01ResdataUp0[repositoryRetentionRuleRef01MarkdefUp0Name] != repositoryRetentionRuleRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", repositoryRetentionRuleRef01MarkdefUp0Name, repositoryRetentionRuleRef01ResdataUp0[repositoryRetentionRuleRef01MarkdefUp0Name])
		}

		// LOAD
		repositoryRetentionRuleRef01MatchDt0 := map[string]any{}
		repositoryRetentionRuleRef01DataDt0Loaded, err := repositoryRetentionRuleRef01Ent.Load(repositoryRetentionRuleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if repositoryRetentionRuleRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func repository_retention_ruleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "repository_retention_rule", "RepositoryRetentionRuleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read repository_retention_rule test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse repository_retention_rule test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"repository_retention_rule01", "repository_retention_rule02", "repository_retention_rule03", "repo01", "repo02", "repo03", "owner01"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_REPOSITORY_RETENTION_RULE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_REPOSITORY_RETENTION_RULE_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_REPOSITORY_RETENTION_RULE_ENTID"])
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
