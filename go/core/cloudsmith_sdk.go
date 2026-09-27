package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/cloudsmith-sdk/go/utility/struct"
)

type CloudsmithSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCloudsmithSDK(options map[string]any) *CloudsmithSDK {
	sdk := &CloudsmithSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CloudsmithSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CloudsmithSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CloudsmithSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CloudsmithSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *CloudsmithSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *CloudsmithSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *CloudsmithSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("CloudsmithSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *CloudsmithSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *CloudsmithSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("CloudsmithSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Cargo returns a Cargo entity bound to this client.
// Idiomatic usage: client.Cargo(nil).List(nil, nil) or
// client.Cargo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Cargo(data map[string]any) CloudsmithEntity {
	return NewCargoEntityFunc(sdk, data)
}


// Composer returns a Composer entity bound to this client.
// Idiomatic usage: client.Composer(nil).List(nil, nil) or
// client.Composer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Composer(data map[string]any) CloudsmithEntity {
	return NewComposerEntityFunc(sdk, data)
}


// Conda returns a Conda entity bound to this client.
// Idiomatic usage: client.Conda(nil).List(nil, nil) or
// client.Conda(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Conda(data map[string]any) CloudsmithEntity {
	return NewCondaEntityFunc(sdk, data)
}


// Cran returns a Cran entity bound to this client.
// Idiomatic usage: client.Cran(nil).List(nil, nil) or
// client.Cran(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Cran(data map[string]any) CloudsmithEntity {
	return NewCranEntityFunc(sdk, data)
}


// Dart returns a Dart entity bound to this client.
// Idiomatic usage: client.Dart(nil).List(nil, nil) or
// client.Dart(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Dart(data map[string]any) CloudsmithEntity {
	return NewDartEntityFunc(sdk, data)
}


// Deb returns a Deb entity bound to this client.
// Idiomatic usage: client.Deb(nil).List(nil, nil) or
// client.Deb(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Deb(data map[string]any) CloudsmithEntity {
	return NewDebEntityFunc(sdk, data)
}


// DistributionFull returns a DistributionFull entity bound to this client.
// Idiomatic usage: client.DistributionFull(nil).List(nil, nil) or
// client.DistributionFull(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) DistributionFull(data map[string]any) CloudsmithEntity {
	return NewDistributionFullEntityFunc(sdk, data)
}


// Docker returns a Docker entity bound to this client.
// Idiomatic usage: client.Docker(nil).List(nil, nil) or
// client.Docker(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Docker(data map[string]any) CloudsmithEntity {
	return NewDockerEntityFunc(sdk, data)
}


// DynamicMapping returns a DynamicMapping entity bound to this client.
// Idiomatic usage: client.DynamicMapping(nil).List(nil, nil) or
// client.DynamicMapping(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) DynamicMapping(data map[string]any) CloudsmithEntity {
	return NewDynamicMappingEntityFunc(sdk, data)
}


// Entitlement returns a Entitlement entity bound to this client.
// Idiomatic usage: client.Entitlement(nil).List(nil, nil) or
// client.Entitlement(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Entitlement(data map[string]any) CloudsmithEntity {
	return NewEntitlementEntityFunc(sdk, data)
}


// File returns a File entity bound to this client.
// Idiomatic usage: client.File(nil).List(nil, nil) or
// client.File(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) File(data map[string]any) CloudsmithEntity {
	return NewFileEntityFunc(sdk, data)
}


// Format returns a Format entity bound to this client.
// Idiomatic usage: client.Format(nil).List(nil, nil) or
// client.Format(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Format(data map[string]any) CloudsmithEntity {
	return NewFormatEntityFunc(sdk, data)
}


// Gon returns a Gon entity bound to this client.
// Idiomatic usage: client.Gon(nil).List(nil, nil) or
// client.Gon(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Gon(data map[string]any) CloudsmithEntity {
	return NewGonEntityFunc(sdk, data)
}


// Helm returns a Helm entity bound to this client.
// Idiomatic usage: client.Helm(nil).List(nil, nil) or
// client.Helm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Helm(data map[string]any) CloudsmithEntity {
	return NewHelmEntityFunc(sdk, data)
}


// Hex returns a Hex entity bound to this client.
// Idiomatic usage: client.Hex(nil).List(nil, nil) or
// client.Hex(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Hex(data map[string]any) CloudsmithEntity {
	return NewHexEntityFunc(sdk, data)
}


// Huggingface returns a Huggingface entity bound to this client.
// Idiomatic usage: client.Huggingface(nil).List(nil, nil) or
// client.Huggingface(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Huggingface(data map[string]any) CloudsmithEntity {
	return NewHuggingfaceEntityFunc(sdk, data)
}


// Maven returns a Maven entity bound to this client.
// Idiomatic usage: client.Maven(nil).List(nil, nil) or
// client.Maven(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Maven(data map[string]any) CloudsmithEntity {
	return NewMavenEntityFunc(sdk, data)
}


// Namespace returns a Namespace entity bound to this client.
// Idiomatic usage: client.Namespace(nil).List(nil, nil) or
// client.Namespace(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Namespace(data map[string]any) CloudsmithEntity {
	return NewNamespaceEntityFunc(sdk, data)
}


// NamespaceAuditLog returns a NamespaceAuditLog entity bound to this client.
// Idiomatic usage: client.NamespaceAuditLog(nil).List(nil, nil) or
// client.NamespaceAuditLog(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) NamespaceAuditLog(data map[string]any) CloudsmithEntity {
	return NewNamespaceAuditLogEntityFunc(sdk, data)
}


// Npm returns a Npm entity bound to this client.
// Idiomatic usage: client.Npm(nil).List(nil, nil) or
// client.Npm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Npm(data map[string]any) CloudsmithEntity {
	return NewNpmEntityFunc(sdk, data)
}


// Nuget returns a Nuget entity bound to this client.
// Idiomatic usage: client.Nuget(nil).List(nil, nil) or
// client.Nuget(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Nuget(data map[string]any) CloudsmithEntity {
	return NewNugetEntityFunc(sdk, data)
}


// Org returns a Org entity bound to this client.
// Idiomatic usage: client.Org(nil).List(nil, nil) or
// client.Org(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Org(data map[string]any) CloudsmithEntity {
	return NewOrgEntityFunc(sdk, data)
}


// OrganizationGroupSync returns a OrganizationGroupSync entity bound to this client.
// Idiomatic usage: client.OrganizationGroupSync(nil).List(nil, nil) or
// client.OrganizationGroupSync(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationGroupSync(data map[string]any) CloudsmithEntity {
	return NewOrganizationGroupSyncEntityFunc(sdk, data)
}


// OrganizationGroupSyncStatus returns a OrganizationGroupSyncStatus entity bound to this client.
// Idiomatic usage: client.OrganizationGroupSyncStatus(nil).List(nil, nil) or
// client.OrganizationGroupSyncStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationGroupSyncStatus(data map[string]any) CloudsmithEntity {
	return NewOrganizationGroupSyncStatusEntityFunc(sdk, data)
}


// OrganizationInvite returns a OrganizationInvite entity bound to this client.
// Idiomatic usage: client.OrganizationInvite(nil).List(nil, nil) or
// client.OrganizationInvite(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationInvite(data map[string]any) CloudsmithEntity {
	return NewOrganizationInviteEntityFunc(sdk, data)
}


// OrganizationInviteExtend returns a OrganizationInviteExtend entity bound to this client.
// Idiomatic usage: client.OrganizationInviteExtend(nil).List(nil, nil) or
// client.OrganizationInviteExtend(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationInviteExtend(data map[string]any) CloudsmithEntity {
	return NewOrganizationInviteExtendEntityFunc(sdk, data)
}


// OrganizationMembership returns a OrganizationMembership entity bound to this client.
// Idiomatic usage: client.OrganizationMembership(nil).List(nil, nil) or
// client.OrganizationMembership(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationMembership(data map[string]any) CloudsmithEntity {
	return NewOrganizationMembershipEntityFunc(sdk, data)
}


// OrganizationMembershipRoleUpdate returns a OrganizationMembershipRoleUpdate entity bound to this client.
// Idiomatic usage: client.OrganizationMembershipRoleUpdate(nil).List(nil, nil) or
// client.OrganizationMembershipRoleUpdate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationMembershipRoleUpdate(data map[string]any) CloudsmithEntity {
	return NewOrganizationMembershipRoleUpdateEntityFunc(sdk, data)
}


// OrganizationMembershipVisibilityUpdate returns a OrganizationMembershipVisibilityUpdate entity bound to this client.
// Idiomatic usage: client.OrganizationMembershipVisibilityUpdate(nil).List(nil, nil) or
// client.OrganizationMembershipVisibilityUpdate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationMembershipVisibilityUpdate(data map[string]any) CloudsmithEntity {
	return NewOrganizationMembershipVisibilityUpdateEntityFunc(sdk, data)
}


// OrganizationPackageLicensePolicy returns a OrganizationPackageLicensePolicy entity bound to this client.
// Idiomatic usage: client.OrganizationPackageLicensePolicy(nil).List(nil, nil) or
// client.OrganizationPackageLicensePolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationPackageLicensePolicy(data map[string]any) CloudsmithEntity {
	return NewOrganizationPackageLicensePolicyEntityFunc(sdk, data)
}


// OrganizationPackageVulnerabilityPolicy returns a OrganizationPackageVulnerabilityPolicy entity bound to this client.
// Idiomatic usage: client.OrganizationPackageVulnerabilityPolicy(nil).List(nil, nil) or
// client.OrganizationPackageVulnerabilityPolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationPackageVulnerabilityPolicy(data map[string]any) CloudsmithEntity {
	return NewOrganizationPackageVulnerabilityPolicyEntityFunc(sdk, data)
}


// OrganizationSamlAuth returns a OrganizationSamlAuth entity bound to this client.
// Idiomatic usage: client.OrganizationSamlAuth(nil).List(nil, nil) or
// client.OrganizationSamlAuth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationSamlAuth(data map[string]any) CloudsmithEntity {
	return NewOrganizationSamlAuthEntityFunc(sdk, data)
}


// OrganizationTeam returns a OrganizationTeam entity bound to this client.
// Idiomatic usage: client.OrganizationTeam(nil).List(nil, nil) or
// client.OrganizationTeam(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationTeam(data map[string]any) CloudsmithEntity {
	return NewOrganizationTeamEntityFunc(sdk, data)
}


// OrganizationTeamMember returns a OrganizationTeamMember entity bound to this client.
// Idiomatic usage: client.OrganizationTeamMember(nil).List(nil, nil) or
// client.OrganizationTeamMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationTeamMember(data map[string]any) CloudsmithEntity {
	return NewOrganizationTeamMemberEntityFunc(sdk, data)
}


// Package returns a Package entity bound to this client.
// Idiomatic usage: client.Package(nil).List(nil, nil) or
// client.Package(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Package(data map[string]any) CloudsmithEntity {
	return NewPackageEntityFunc(sdk, data)
}


// PackageDenyPolicy returns a PackageDenyPolicy entity bound to this client.
// Idiomatic usage: client.PackageDenyPolicy(nil).List(nil, nil) or
// client.PackageDenyPolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) PackageDenyPolicy(data map[string]any) CloudsmithEntity {
	return NewPackageDenyPolicyEntityFunc(sdk, data)
}


// PackageFilePartsUpload returns a PackageFilePartsUpload entity bound to this client.
// Idiomatic usage: client.PackageFilePartsUpload(nil).List(nil, nil) or
// client.PackageFilePartsUpload(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) PackageFilePartsUpload(data map[string]any) CloudsmithEntity {
	return NewPackageFilePartsUploadEntityFunc(sdk, data)
}


// PackageFileUpload returns a PackageFileUpload entity bound to this client.
// Idiomatic usage: client.PackageFileUpload(nil).List(nil, nil) or
// client.PackageFileUpload(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) PackageFileUpload(data map[string]any) CloudsmithEntity {
	return NewPackageFileUploadEntityFunc(sdk, data)
}


// PackageLicensePolicyEvaluation returns a PackageLicensePolicyEvaluation entity bound to this client.
// Idiomatic usage: client.PackageLicensePolicyEvaluation(nil).List(nil, nil) or
// client.PackageLicensePolicyEvaluation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) PackageLicensePolicyEvaluation(data map[string]any) CloudsmithEntity {
	return NewPackageLicensePolicyEvaluationEntityFunc(sdk, data)
}


// PackageVersionBadge returns a PackageVersionBadge entity bound to this client.
// Idiomatic usage: client.PackageVersionBadge(nil).List(nil, nil) or
// client.PackageVersionBadge(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) PackageVersionBadge(data map[string]any) CloudsmithEntity {
	return NewPackageVersionBadgeEntityFunc(sdk, data)
}


// PackageVulnerabilityPolicyEvaluation returns a PackageVulnerabilityPolicyEvaluation entity bound to this client.
// Idiomatic usage: client.PackageVulnerabilityPolicyEvaluation(nil).List(nil, nil) or
// client.PackageVulnerabilityPolicyEvaluation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) PackageVulnerabilityPolicyEvaluation(data map[string]any) CloudsmithEntity {
	return NewPackageVulnerabilityPolicyEvaluationEntityFunc(sdk, data)
}


// ProviderSetting returns a ProviderSetting entity bound to this client.
// Idiomatic usage: client.ProviderSetting(nil).List(nil, nil) or
// client.ProviderSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) ProviderSetting(data map[string]any) CloudsmithEntity {
	return NewProviderSettingEntityFunc(sdk, data)
}


// ProviderSettingsWrite returns a ProviderSettingsWrite entity bound to this client.
// Idiomatic usage: client.ProviderSettingsWrite(nil).List(nil, nil) or
// client.ProviderSettingsWrite(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) ProviderSettingsWrite(data map[string]any) CloudsmithEntity {
	return NewProviderSettingsWriteEntityFunc(sdk, data)
}


// Python returns a Python entity bound to this client.
// Idiomatic usage: client.Python(nil).List(nil, nil) or
// client.Python(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Python(data map[string]any) CloudsmithEntity {
	return NewPythonEntityFunc(sdk, data)
}


// Quota returns a Quota entity bound to this client.
// Idiomatic usage: client.Quota(nil).List(nil, nil) or
// client.Quota(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Quota(data map[string]any) CloudsmithEntity {
	return NewQuotaEntityFunc(sdk, data)
}


// Repo returns a Repo entity bound to this client.
// Idiomatic usage: client.Repo(nil).List(nil, nil) or
// client.Repo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Repo(data map[string]any) CloudsmithEntity {
	return NewRepoEntityFunc(sdk, data)
}


// RepositoryAuditLog returns a RepositoryAuditLog entity bound to this client.
// Idiomatic usage: client.RepositoryAuditLog(nil).List(nil, nil) or
// client.RepositoryAuditLog(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryAuditLog(data map[string]any) CloudsmithEntity {
	return NewRepositoryAuditLogEntityFunc(sdk, data)
}


// RepositoryEcdsaKey returns a RepositoryEcdsaKey entity bound to this client.
// Idiomatic usage: client.RepositoryEcdsaKey(nil).List(nil, nil) or
// client.RepositoryEcdsaKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryEcdsaKey(data map[string]any) CloudsmithEntity {
	return NewRepositoryEcdsaKeyEntityFunc(sdk, data)
}


// RepositoryGeoIpRule returns a RepositoryGeoIpRule entity bound to this client.
// Idiomatic usage: client.RepositoryGeoIpRule(nil).List(nil, nil) or
// client.RepositoryGeoIpRule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryGeoIpRule(data map[string]any) CloudsmithEntity {
	return NewRepositoryGeoIpRuleEntityFunc(sdk, data)
}


// RepositoryGeoIpStatus returns a RepositoryGeoIpStatus entity bound to this client.
// Idiomatic usage: client.RepositoryGeoIpStatus(nil).List(nil, nil) or
// client.RepositoryGeoIpStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryGeoIpStatus(data map[string]any) CloudsmithEntity {
	return NewRepositoryGeoIpStatusEntityFunc(sdk, data)
}


// RepositoryGeoIpTestAddress returns a RepositoryGeoIpTestAddress entity bound to this client.
// Idiomatic usage: client.RepositoryGeoIpTestAddress(nil).List(nil, nil) or
// client.RepositoryGeoIpTestAddress(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryGeoIpTestAddress(data map[string]any) CloudsmithEntity {
	return NewRepositoryGeoIpTestAddressEntityFunc(sdk, data)
}


// RepositoryGpgKey returns a RepositoryGpgKey entity bound to this client.
// Idiomatic usage: client.RepositoryGpgKey(nil).List(nil, nil) or
// client.RepositoryGpgKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryGpgKey(data map[string]any) CloudsmithEntity {
	return NewRepositoryGpgKeyEntityFunc(sdk, data)
}


// RepositoryPrivilegeDict returns a RepositoryPrivilegeDict entity bound to this client.
// Idiomatic usage: client.RepositoryPrivilegeDict(nil).List(nil, nil) or
// client.RepositoryPrivilegeDict(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryPrivilegeDict(data map[string]any) CloudsmithEntity {
	return NewRepositoryPrivilegeDictEntityFunc(sdk, data)
}


// RepositoryRetentionRule returns a RepositoryRetentionRule entity bound to this client.
// Idiomatic usage: client.RepositoryRetentionRule(nil).List(nil, nil) or
// client.RepositoryRetentionRule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryRetentionRule(data map[string]any) CloudsmithEntity {
	return NewRepositoryRetentionRuleEntityFunc(sdk, data)
}


// RepositoryRsaKey returns a RepositoryRsaKey entity bound to this client.
// Idiomatic usage: client.RepositoryRsaKey(nil).List(nil, nil) or
// client.RepositoryRsaKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryRsaKey(data map[string]any) CloudsmithEntity {
	return NewRepositoryRsaKeyEntityFunc(sdk, data)
}


// RepositoryToken returns a RepositoryToken entity bound to this client.
// Idiomatic usage: client.RepositoryToken(nil).List(nil, nil) or
// client.RepositoryToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryToken(data map[string]any) CloudsmithEntity {
	return NewRepositoryTokenEntityFunc(sdk, data)
}


// RepositoryTokenRefresh returns a RepositoryTokenRefresh entity bound to this client.
// Idiomatic usage: client.RepositoryTokenRefresh(nil).List(nil, nil) or
// client.RepositoryTokenRefresh(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryTokenRefresh(data map[string]any) CloudsmithEntity {
	return NewRepositoryTokenRefreshEntityFunc(sdk, data)
}


// RepositoryTokenSync returns a RepositoryTokenSync entity bound to this client.
// Idiomatic usage: client.RepositoryTokenSync(nil).List(nil, nil) or
// client.RepositoryTokenSync(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryTokenSync(data map[string]any) CloudsmithEntity {
	return NewRepositoryTokenSyncEntityFunc(sdk, data)
}


// RepositoryWebhook returns a RepositoryWebhook entity bound to this client.
// Idiomatic usage: client.RepositoryWebhook(nil).List(nil, nil) or
// client.RepositoryWebhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryWebhook(data map[string]any) CloudsmithEntity {
	return NewRepositoryWebhookEntityFunc(sdk, data)
}


// RepositoryX509EcdsaCertificate returns a RepositoryX509EcdsaCertificate entity bound to this client.
// Idiomatic usage: client.RepositoryX509EcdsaCertificate(nil).List(nil, nil) or
// client.RepositoryX509EcdsaCertificate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryX509EcdsaCertificate(data map[string]any) CloudsmithEntity {
	return NewRepositoryX509EcdsaCertificateEntityFunc(sdk, data)
}


// RepositoryX509RsaCertificate returns a RepositoryX509RsaCertificate entity bound to this client.
// Idiomatic usage: client.RepositoryX509RsaCertificate(nil).List(nil, nil) or
// client.RepositoryX509RsaCertificate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryX509RsaCertificate(data map[string]any) CloudsmithEntity {
	return NewRepositoryX509RsaCertificateEntityFunc(sdk, data)
}


// ResourcesRateCheck returns a ResourcesRateCheck entity bound to this client.
// Idiomatic usage: client.ResourcesRateCheck(nil).List(nil, nil) or
// client.ResourcesRateCheck(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) ResourcesRateCheck(data map[string]any) CloudsmithEntity {
	return NewResourcesRateCheckEntityFunc(sdk, data)
}


// Rpm returns a Rpm entity bound to this client.
// Idiomatic usage: client.Rpm(nil).List(nil, nil) or
// client.Rpm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Rpm(data map[string]any) CloudsmithEntity {
	return NewRpmEntityFunc(sdk, data)
}


// Ruby returns a Ruby entity bound to this client.
// Idiomatic usage: client.Ruby(nil).List(nil, nil) or
// client.Ruby(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Ruby(data map[string]any) CloudsmithEntity {
	return NewRubyEntityFunc(sdk, data)
}


// Service returns a Service entity bound to this client.
// Idiomatic usage: client.Service(nil).List(nil, nil) or
// client.Service(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Service(data map[string]any) CloudsmithEntity {
	return NewServiceEntityFunc(sdk, data)
}


// StatusBasic returns a StatusBasic entity bound to this client.
// Idiomatic usage: client.StatusBasic(nil).List(nil, nil) or
// client.StatusBasic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) StatusBasic(data map[string]any) CloudsmithEntity {
	return NewStatusBasicEntityFunc(sdk, data)
}


// StorageRegion returns a StorageRegion entity bound to this client.
// Idiomatic usage: client.StorageRegion(nil).List(nil, nil) or
// client.StorageRegion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) StorageRegion(data map[string]any) CloudsmithEntity {
	return NewStorageRegionEntityFunc(sdk, data)
}


// Swift returns a Swift entity bound to this client.
// Idiomatic usage: client.Swift(nil).List(nil, nil) or
// client.Swift(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Swift(data map[string]any) CloudsmithEntity {
	return NewSwiftEntityFunc(sdk, data)
}


// User returns a User entity bound to this client.
// Idiomatic usage: client.User(nil).List(nil, nil) or
// client.User(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) User(data map[string]any) CloudsmithEntity {
	return NewUserEntityFunc(sdk, data)
}


// UserAuthToken returns a UserAuthToken entity bound to this client.
// Idiomatic usage: client.UserAuthToken(nil).List(nil, nil) or
// client.UserAuthToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) UserAuthToken(data map[string]any) CloudsmithEntity {
	return NewUserAuthTokenEntityFunc(sdk, data)
}


// UserAuthenticationToken returns a UserAuthenticationToken entity bound to this client.
// Idiomatic usage: client.UserAuthenticationToken(nil).List(nil, nil) or
// client.UserAuthenticationToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) UserAuthenticationToken(data map[string]any) CloudsmithEntity {
	return NewUserAuthenticationTokenEntityFunc(sdk, data)
}


// UserBrief returns a UserBrief entity bound to this client.
// Idiomatic usage: client.UserBrief(nil).List(nil, nil) or
// client.UserBrief(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) UserBrief(data map[string]any) CloudsmithEntity {
	return NewUserBriefEntityFunc(sdk, data)
}


// UserProfile returns a UserProfile entity bound to this client.
// Idiomatic usage: client.UserProfile(nil).List(nil, nil) or
// client.UserProfile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) UserProfile(data map[string]any) CloudsmithEntity {
	return NewUserProfileEntityFunc(sdk, data)
}


// Vulnerability returns a Vulnerability entity bound to this client.
// Idiomatic usage: client.Vulnerability(nil).List(nil, nil) or
// client.Vulnerability(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Vulnerability(data map[string]any) CloudsmithEntity {
	return NewVulnerabilityEntityFunc(sdk, data)
}


// Webhook returns a Webhook entity bound to this client.
// Idiomatic usage: client.Webhook(nil).List(nil, nil) or
// client.Webhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Webhook(data map[string]any) CloudsmithEntity {
	return NewWebhookEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudsmithSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCloudsmithSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
