package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/cloudsmith-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"cargo | composer | conda | cran | dart | deb | distribution_full | docker | dynamic_mapping | entitlement | file | format | gon | helm | hex | huggingface | maven | namespace | namespace_audit_log | npm | nuget | org | organization_group_sync | organization_group_sync_status | organization_invite | organization_invite_extend | organization_membership | organization_membership_role_update | organization_membership_visibility_update | organization_package_license_policy | organization_package_vulnerability_policy | organization_saml_auth | organization_team | organization_team_member | package | package_deny_policy | package_file_parts_upload | package_file_upload | package_license_policy_evaluation | package_version_badge | package_vulnerability_policy_evaluation | provider_setting | provider_settings_write | python | quota | repo | repository_audit_log | repository_ecdsa_key | repository_geo_ip_rule | repository_geo_ip_status | repository_geo_ip_test_address | repository_gpg_key | repository_privilege_dict | repository_retention_rule | repository_rsa_key | repository_token | repository_token_refresh | repository_token_sync | repository_webhook | repository_x509_ecdsa_certificate | repository_x509_rsa_certificate | resources_rate_check | rpm | ruby | service | status_basic | storage_region | swift | user | user_auth_token | user_authentication_token | user_brief | user_profile | vulnerability | webhook"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.CloudsmithSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudsmith_list",
		Description: "List records from Cloudsmith. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudsmith_load",
		Description: "Load a single record from Cloudsmith. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.CloudsmithSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.CloudsmithSDK, name string) (sdk.CloudsmithEntity, error) {
	switch strings.ToLower(name) {
	case "cargo":
		return client.Cargo(nil), nil
	case "composer":
		return client.Composer(nil), nil
	case "conda":
		return client.Conda(nil), nil
	case "cran":
		return client.Cran(nil), nil
	case "dart":
		return client.Dart(nil), nil
	case "deb":
		return client.Deb(nil), nil
	case "distribution_full":
		return client.DistributionFull(nil), nil
	case "docker":
		return client.Docker(nil), nil
	case "dynamic_mapping":
		return client.DynamicMapping(nil), nil
	case "entitlement":
		return client.Entitlement(nil), nil
	case "file":
		return client.File(nil), nil
	case "format":
		return client.Format(nil), nil
	case "gon":
		return client.Gon(nil), nil
	case "helm":
		return client.Helm(nil), nil
	case "hex":
		return client.Hex(nil), nil
	case "huggingface":
		return client.Huggingface(nil), nil
	case "maven":
		return client.Maven(nil), nil
	case "namespace":
		return client.Namespace(nil), nil
	case "namespace_audit_log":
		return client.NamespaceAuditLog(nil), nil
	case "npm":
		return client.Npm(nil), nil
	case "nuget":
		return client.Nuget(nil), nil
	case "org":
		return client.Org(nil), nil
	case "organization_group_sync":
		return client.OrganizationGroupSync(nil), nil
	case "organization_group_sync_status":
		return client.OrganizationGroupSyncStatus(nil), nil
	case "organization_invite":
		return client.OrganizationInvite(nil), nil
	case "organization_invite_extend":
		return client.OrganizationInviteExtend(nil), nil
	case "organization_membership":
		return client.OrganizationMembership(nil), nil
	case "organization_membership_role_update":
		return client.OrganizationMembershipRoleUpdate(nil), nil
	case "organization_membership_visibility_update":
		return client.OrganizationMembershipVisibilityUpdate(nil), nil
	case "organization_package_license_policy":
		return client.OrganizationPackageLicensePolicy(nil), nil
	case "organization_package_vulnerability_policy":
		return client.OrganizationPackageVulnerabilityPolicy(nil), nil
	case "organization_saml_auth":
		return client.OrganizationSamlAuth(nil), nil
	case "organization_team":
		return client.OrganizationTeam(nil), nil
	case "organization_team_member":
		return client.OrganizationTeamMember(nil), nil
	case "package":
		return client.Package(nil), nil
	case "package_deny_policy":
		return client.PackageDenyPolicy(nil), nil
	case "package_file_parts_upload":
		return client.PackageFilePartsUpload(nil), nil
	case "package_file_upload":
		return client.PackageFileUpload(nil), nil
	case "package_license_policy_evaluation":
		return client.PackageLicensePolicyEvaluation(nil), nil
	case "package_version_badge":
		return client.PackageVersionBadge(nil), nil
	case "package_vulnerability_policy_evaluation":
		return client.PackageVulnerabilityPolicyEvaluation(nil), nil
	case "provider_setting":
		return client.ProviderSetting(nil), nil
	case "provider_settings_write":
		return client.ProviderSettingsWrite(nil), nil
	case "python":
		return client.Python(nil), nil
	case "quota":
		return client.Quota(nil), nil
	case "repo":
		return client.Repo(nil), nil
	case "repository_audit_log":
		return client.RepositoryAuditLog(nil), nil
	case "repository_ecdsa_key":
		return client.RepositoryEcdsaKey(nil), nil
	case "repository_geo_ip_rule":
		return client.RepositoryGeoIpRule(nil), nil
	case "repository_geo_ip_status":
		return client.RepositoryGeoIpStatus(nil), nil
	case "repository_geo_ip_test_address":
		return client.RepositoryGeoIpTestAddress(nil), nil
	case "repository_gpg_key":
		return client.RepositoryGpgKey(nil), nil
	case "repository_privilege_dict":
		return client.RepositoryPrivilegeDict(nil), nil
	case "repository_retention_rule":
		return client.RepositoryRetentionRule(nil), nil
	case "repository_rsa_key":
		return client.RepositoryRsaKey(nil), nil
	case "repository_token":
		return client.RepositoryToken(nil), nil
	case "repository_token_refresh":
		return client.RepositoryTokenRefresh(nil), nil
	case "repository_token_sync":
		return client.RepositoryTokenSync(nil), nil
	case "repository_webhook":
		return client.RepositoryWebhook(nil), nil
	case "repository_x509_ecdsa_certificate":
		return client.RepositoryX509EcdsaCertificate(nil), nil
	case "repository_x509_rsa_certificate":
		return client.RepositoryX509RsaCertificate(nil), nil
	case "resources_rate_check":
		return client.ResourcesRateCheck(nil), nil
	case "rpm":
		return client.Rpm(nil), nil
	case "ruby":
		return client.Ruby(nil), nil
	case "service":
		return client.Service(nil), nil
	case "status_basic":
		return client.StatusBasic(nil), nil
	case "storage_region":
		return client.StorageRegion(nil), nil
	case "swift":
		return client.Swift(nil), nil
	case "user":
		return client.User(nil), nil
	case "user_auth_token":
		return client.UserAuthToken(nil), nil
	case "user_authentication_token":
		return client.UserAuthenticationToken(nil), nil
	case "user_brief":
		return client.UserBrief(nil), nil
	case "user_profile":
		return client.UserProfile(nil), nil
	case "vulnerability":
		return client.Vulnerability(nil), nil
	case "webhook":
		return client.Webhook(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
