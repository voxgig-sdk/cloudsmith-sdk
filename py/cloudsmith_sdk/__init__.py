# Cloudsmith SDK

from cloudsmith_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudsmith_sdk.core.utility_type import CloudsmithUtility
from cloudsmith_sdk.core.spec import CloudsmithSpec
from cloudsmith_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from cloudsmith_sdk.utility import register

# Load features
from cloudsmith_sdk.feature.base_feature import CloudsmithBaseFeature
from cloudsmith_sdk.features import _has_feature, _make_feature


class CloudsmithSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CloudsmithUtility()
        self._utility = utility

        from cloudsmith_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CloudsmithUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CloudsmithSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CloudsmithSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CloudsmithSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Cargo(self, data=None) -> "CargoEntity":
        """Entity factory: client.Cargo().list() / client.Cargo().load({"id": ...})."""
        from cloudsmith_sdk.entity.cargo_entity import CargoEntity
        return CargoEntity(self, data)


    def Composer(self, data=None) -> "ComposerEntity":
        """Entity factory: client.Composer().list() / client.Composer().load({"id": ...})."""
        from cloudsmith_sdk.entity.composer_entity import ComposerEntity
        return ComposerEntity(self, data)


    def Conda(self, data=None) -> "CondaEntity":
        """Entity factory: client.Conda().list() / client.Conda().load({"id": ...})."""
        from cloudsmith_sdk.entity.conda_entity import CondaEntity
        return CondaEntity(self, data)


    def Cran(self, data=None) -> "CranEntity":
        """Entity factory: client.Cran().list() / client.Cran().load({"id": ...})."""
        from cloudsmith_sdk.entity.cran_entity import CranEntity
        return CranEntity(self, data)


    def Dart(self, data=None) -> "DartEntity":
        """Entity factory: client.Dart().list() / client.Dart().load({"id": ...})."""
        from cloudsmith_sdk.entity.dart_entity import DartEntity
        return DartEntity(self, data)


    def Deb(self, data=None) -> "DebEntity":
        """Entity factory: client.Deb().list() / client.Deb().load({"id": ...})."""
        from cloudsmith_sdk.entity.deb_entity import DebEntity
        return DebEntity(self, data)


    def DistributionFull(self, data=None) -> "DistributionFullEntity":
        """Entity factory: client.DistributionFull().list() / client.DistributionFull().load({"id": ...})."""
        from cloudsmith_sdk.entity.distribution_full_entity import DistributionFullEntity
        return DistributionFullEntity(self, data)


    def Docker(self, data=None) -> "DockerEntity":
        """Entity factory: client.Docker().list() / client.Docker().load({"id": ...})."""
        from cloudsmith_sdk.entity.docker_entity import DockerEntity
        return DockerEntity(self, data)


    def DynamicMapping(self, data=None) -> "DynamicMappingEntity":
        """Entity factory: client.DynamicMapping().list() / client.DynamicMapping().load({"id": ...})."""
        from cloudsmith_sdk.entity.dynamic_mapping_entity import DynamicMappingEntity
        return DynamicMappingEntity(self, data)


    def Entitlement(self, data=None) -> "EntitlementEntity":
        """Entity factory: client.Entitlement().list() / client.Entitlement().load({"id": ...})."""
        from cloudsmith_sdk.entity.entitlement_entity import EntitlementEntity
        return EntitlementEntity(self, data)


    def File(self, data=None) -> "FileEntity":
        """Entity factory: client.File().list() / client.File().load({"id": ...})."""
        from cloudsmith_sdk.entity.file_entity import FileEntity
        return FileEntity(self, data)


    def Format(self, data=None) -> "FormatEntity":
        """Entity factory: client.Format().list() / client.Format().load({"id": ...})."""
        from cloudsmith_sdk.entity.format_entity import FormatEntity
        return FormatEntity(self, data)


    def Gon(self, data=None) -> "GonEntity":
        """Entity factory: client.Gon().list() / client.Gon().load({"id": ...})."""
        from cloudsmith_sdk.entity.gon_entity import GonEntity
        return GonEntity(self, data)


    def Helm(self, data=None) -> "HelmEntity":
        """Entity factory: client.Helm().list() / client.Helm().load({"id": ...})."""
        from cloudsmith_sdk.entity.helm_entity import HelmEntity
        return HelmEntity(self, data)


    def Hex(self, data=None) -> "HexEntity":
        """Entity factory: client.Hex().list() / client.Hex().load({"id": ...})."""
        from cloudsmith_sdk.entity.hex_entity import HexEntity
        return HexEntity(self, data)


    def Huggingface(self, data=None) -> "HuggingfaceEntity":
        """Entity factory: client.Huggingface().list() / client.Huggingface().load({"id": ...})."""
        from cloudsmith_sdk.entity.huggingface_entity import HuggingfaceEntity
        return HuggingfaceEntity(self, data)


    def Maven(self, data=None) -> "MavenEntity":
        """Entity factory: client.Maven().list() / client.Maven().load({"id": ...})."""
        from cloudsmith_sdk.entity.maven_entity import MavenEntity
        return MavenEntity(self, data)


    def Namespace(self, data=None) -> "NamespaceEntity":
        """Entity factory: client.Namespace().list() / client.Namespace().load({"id": ...})."""
        from cloudsmith_sdk.entity.namespace_entity import NamespaceEntity
        return NamespaceEntity(self, data)


    def NamespaceAuditLog(self, data=None) -> "NamespaceAuditLogEntity":
        """Entity factory: client.NamespaceAuditLog().list() / client.NamespaceAuditLog().load({"id": ...})."""
        from cloudsmith_sdk.entity.namespace_audit_log_entity import NamespaceAuditLogEntity
        return NamespaceAuditLogEntity(self, data)


    def Npm(self, data=None) -> "NpmEntity":
        """Entity factory: client.Npm().list() / client.Npm().load({"id": ...})."""
        from cloudsmith_sdk.entity.npm_entity import NpmEntity
        return NpmEntity(self, data)


    def Nuget(self, data=None) -> "NugetEntity":
        """Entity factory: client.Nuget().list() / client.Nuget().load({"id": ...})."""
        from cloudsmith_sdk.entity.nuget_entity import NugetEntity
        return NugetEntity(self, data)


    def Org(self, data=None) -> "OrgEntity":
        """Entity factory: client.Org().list() / client.Org().load({"id": ...})."""
        from cloudsmith_sdk.entity.org_entity import OrgEntity
        return OrgEntity(self, data)


    def OrganizationGroupSync(self, data=None) -> "OrganizationGroupSyncEntity":
        """Entity factory: client.OrganizationGroupSync().list() / client.OrganizationGroupSync().load({"id": ...})."""
        from cloudsmith_sdk.entity.organization_group_sync_entity import OrganizationGroupSyncEntity
        return OrganizationGroupSyncEntity(self, data)


    def OrganizationGroupSyncStatus(self, data=None) -> "OrganizationGroupSyncStatusEntity":
        """Entity factory: client.OrganizationGroupSyncStatus().list() / client.OrganizationGroupSyncStatus().load({"id": ...})."""
        from cloudsmith_sdk.entity.organization_group_sync_status_entity import OrganizationGroupSyncStatusEntity
        return OrganizationGroupSyncStatusEntity(self, data)


    def OrganizationInvite(self, data=None) -> "OrganizationInviteEntity":
        """Entity factory: client.OrganizationInvite().list() / client.OrganizationInvite().load({"id": ...})."""
        from cloudsmith_sdk.entity.organization_invite_entity import OrganizationInviteEntity
        return OrganizationInviteEntity(self, data)


    def OrganizationInviteExtend(self, data=None) -> "OrganizationInviteExtendEntity":
        """Entity factory: client.OrganizationInviteExtend().list() / client.OrganizationInviteExtend().load({"id": ...})."""
        from cloudsmith_sdk.entity.organization_invite_extend_entity import OrganizationInviteExtendEntity
        return OrganizationInviteExtendEntity(self, data)


    def OrganizationMembership(self, data=None) -> "OrganizationMembershipEntity":
        """Entity factory: client.OrganizationMembership().list() / client.OrganizationMembership().load({"id": ...})."""
        from cloudsmith_sdk.entity.organization_membership_entity import OrganizationMembershipEntity
        return OrganizationMembershipEntity(self, data)


    def OrganizationMembershipRoleUpdate(self, data=None) -> "OrganizationMembershipRoleUpdateEntity":
        """Entity factory: client.OrganizationMembershipRoleUpdate().list() / client.OrganizationMembershipRoleUpdate().load({"id": ...})."""
        from cloudsmith_sdk.entity.organization_membership_role_update_entity import OrganizationMembershipRoleUpdateEntity
        return OrganizationMembershipRoleUpdateEntity(self, data)


    def OrganizationMembershipVisibilityUpdate(self, data=None) -> "OrganizationMembershipVisibilityUpdateEntity":
        """Entity factory: client.OrganizationMembershipVisibilityUpdate().list() / client.OrganizationMembershipVisibilityUpdate().load({"id": ...})."""
        from cloudsmith_sdk.entity.organization_membership_visibility_update_entity import OrganizationMembershipVisibilityUpdateEntity
        return OrganizationMembershipVisibilityUpdateEntity(self, data)


    def OrganizationPackageLicensePolicy(self, data=None) -> "OrganizationPackageLicensePolicyEntity":
        """Entity factory: client.OrganizationPackageLicensePolicy().list() / client.OrganizationPackageLicensePolicy().load({"id": ...})."""
        from cloudsmith_sdk.entity.organization_package_license_policy_entity import OrganizationPackageLicensePolicyEntity
        return OrganizationPackageLicensePolicyEntity(self, data)


    def OrganizationPackageVulnerabilityPolicy(self, data=None) -> "OrganizationPackageVulnerabilityPolicyEntity":
        """Entity factory: client.OrganizationPackageVulnerabilityPolicy().list() / client.OrganizationPackageVulnerabilityPolicy().load({"id": ...})."""
        from cloudsmith_sdk.entity.organization_package_vulnerability_policy_entity import OrganizationPackageVulnerabilityPolicyEntity
        return OrganizationPackageVulnerabilityPolicyEntity(self, data)


    def OrganizationSamlAuth(self, data=None) -> "OrganizationSamlAuthEntity":
        """Entity factory: client.OrganizationSamlAuth().list() / client.OrganizationSamlAuth().load({"id": ...})."""
        from cloudsmith_sdk.entity.organization_saml_auth_entity import OrganizationSamlAuthEntity
        return OrganizationSamlAuthEntity(self, data)


    def OrganizationTeam(self, data=None) -> "OrganizationTeamEntity":
        """Entity factory: client.OrganizationTeam().list() / client.OrganizationTeam().load({"id": ...})."""
        from cloudsmith_sdk.entity.organization_team_entity import OrganizationTeamEntity
        return OrganizationTeamEntity(self, data)


    def OrganizationTeamMember(self, data=None) -> "OrganizationTeamMemberEntity":
        """Entity factory: client.OrganizationTeamMember().list() / client.OrganizationTeamMember().load({"id": ...})."""
        from cloudsmith_sdk.entity.organization_team_member_entity import OrganizationTeamMemberEntity
        return OrganizationTeamMemberEntity(self, data)


    def Package(self, data=None) -> "PackageEntity":
        """Entity factory: client.Package().list() / client.Package().load({"id": ...})."""
        from cloudsmith_sdk.entity.package_entity import PackageEntity
        return PackageEntity(self, data)


    def PackageDenyPolicy(self, data=None) -> "PackageDenyPolicyEntity":
        """Entity factory: client.PackageDenyPolicy().list() / client.PackageDenyPolicy().load({"id": ...})."""
        from cloudsmith_sdk.entity.package_deny_policy_entity import PackageDenyPolicyEntity
        return PackageDenyPolicyEntity(self, data)


    def PackageFilePartsUpload(self, data=None) -> "PackageFilePartsUploadEntity":
        """Entity factory: client.PackageFilePartsUpload().list() / client.PackageFilePartsUpload().load({"id": ...})."""
        from cloudsmith_sdk.entity.package_file_parts_upload_entity import PackageFilePartsUploadEntity
        return PackageFilePartsUploadEntity(self, data)


    def PackageFileUpload(self, data=None) -> "PackageFileUploadEntity":
        """Entity factory: client.PackageFileUpload().list() / client.PackageFileUpload().load({"id": ...})."""
        from cloudsmith_sdk.entity.package_file_upload_entity import PackageFileUploadEntity
        return PackageFileUploadEntity(self, data)


    def PackageLicensePolicyEvaluation(self, data=None) -> "PackageLicensePolicyEvaluationEntity":
        """Entity factory: client.PackageLicensePolicyEvaluation().list() / client.PackageLicensePolicyEvaluation().load({"id": ...})."""
        from cloudsmith_sdk.entity.package_license_policy_evaluation_entity import PackageLicensePolicyEvaluationEntity
        return PackageLicensePolicyEvaluationEntity(self, data)


    def PackageVersionBadge(self, data=None) -> "PackageVersionBadgeEntity":
        """Entity factory: client.PackageVersionBadge().list() / client.PackageVersionBadge().load({"id": ...})."""
        from cloudsmith_sdk.entity.package_version_badge_entity import PackageVersionBadgeEntity
        return PackageVersionBadgeEntity(self, data)


    def PackageVulnerabilityPolicyEvaluation(self, data=None) -> "PackageVulnerabilityPolicyEvaluationEntity":
        """Entity factory: client.PackageVulnerabilityPolicyEvaluation().list() / client.PackageVulnerabilityPolicyEvaluation().load({"id": ...})."""
        from cloudsmith_sdk.entity.package_vulnerability_policy_evaluation_entity import PackageVulnerabilityPolicyEvaluationEntity
        return PackageVulnerabilityPolicyEvaluationEntity(self, data)


    def ProviderSetting(self, data=None) -> "ProviderSettingEntity":
        """Entity factory: client.ProviderSetting().list() / client.ProviderSetting().load({"id": ...})."""
        from cloudsmith_sdk.entity.provider_setting_entity import ProviderSettingEntity
        return ProviderSettingEntity(self, data)


    def ProviderSettingsWrite(self, data=None) -> "ProviderSettingsWriteEntity":
        """Entity factory: client.ProviderSettingsWrite().list() / client.ProviderSettingsWrite().load({"id": ...})."""
        from cloudsmith_sdk.entity.provider_settings_write_entity import ProviderSettingsWriteEntity
        return ProviderSettingsWriteEntity(self, data)


    def Python(self, data=None) -> "PythonEntity":
        """Entity factory: client.Python().list() / client.Python().load({"id": ...})."""
        from cloudsmith_sdk.entity.python_entity import PythonEntity
        return PythonEntity(self, data)


    def Quota(self, data=None) -> "QuotaEntity":
        """Entity factory: client.Quota().list() / client.Quota().load({"id": ...})."""
        from cloudsmith_sdk.entity.quota_entity import QuotaEntity
        return QuotaEntity(self, data)


    def Repo(self, data=None) -> "RepoEntity":
        """Entity factory: client.Repo().list() / client.Repo().load({"id": ...})."""
        from cloudsmith_sdk.entity.repo_entity import RepoEntity
        return RepoEntity(self, data)


    def RepositoryAuditLog(self, data=None) -> "RepositoryAuditLogEntity":
        """Entity factory: client.RepositoryAuditLog().list() / client.RepositoryAuditLog().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_audit_log_entity import RepositoryAuditLogEntity
        return RepositoryAuditLogEntity(self, data)


    def RepositoryEcdsaKey(self, data=None) -> "RepositoryEcdsaKeyEntity":
        """Entity factory: client.RepositoryEcdsaKey().list() / client.RepositoryEcdsaKey().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_ecdsa_key_entity import RepositoryEcdsaKeyEntity
        return RepositoryEcdsaKeyEntity(self, data)


    def RepositoryGeoIpRule(self, data=None) -> "RepositoryGeoIpRuleEntity":
        """Entity factory: client.RepositoryGeoIpRule().list() / client.RepositoryGeoIpRule().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_geo_ip_rule_entity import RepositoryGeoIpRuleEntity
        return RepositoryGeoIpRuleEntity(self, data)


    def RepositoryGeoIpStatus(self, data=None) -> "RepositoryGeoIpStatusEntity":
        """Entity factory: client.RepositoryGeoIpStatus().list() / client.RepositoryGeoIpStatus().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_geo_ip_status_entity import RepositoryGeoIpStatusEntity
        return RepositoryGeoIpStatusEntity(self, data)


    def RepositoryGeoIpTestAddress(self, data=None) -> "RepositoryGeoIpTestAddressEntity":
        """Entity factory: client.RepositoryGeoIpTestAddress().list() / client.RepositoryGeoIpTestAddress().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_geo_ip_test_address_entity import RepositoryGeoIpTestAddressEntity
        return RepositoryGeoIpTestAddressEntity(self, data)


    def RepositoryGpgKey(self, data=None) -> "RepositoryGpgKeyEntity":
        """Entity factory: client.RepositoryGpgKey().list() / client.RepositoryGpgKey().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_gpg_key_entity import RepositoryGpgKeyEntity
        return RepositoryGpgKeyEntity(self, data)


    def RepositoryPrivilegeDict(self, data=None) -> "RepositoryPrivilegeDictEntity":
        """Entity factory: client.RepositoryPrivilegeDict().list() / client.RepositoryPrivilegeDict().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_privilege_dict_entity import RepositoryPrivilegeDictEntity
        return RepositoryPrivilegeDictEntity(self, data)


    def RepositoryRetentionRule(self, data=None) -> "RepositoryRetentionRuleEntity":
        """Entity factory: client.RepositoryRetentionRule().list() / client.RepositoryRetentionRule().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_retention_rule_entity import RepositoryRetentionRuleEntity
        return RepositoryRetentionRuleEntity(self, data)


    def RepositoryRsaKey(self, data=None) -> "RepositoryRsaKeyEntity":
        """Entity factory: client.RepositoryRsaKey().list() / client.RepositoryRsaKey().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_rsa_key_entity import RepositoryRsaKeyEntity
        return RepositoryRsaKeyEntity(self, data)


    def RepositoryToken(self, data=None) -> "RepositoryTokenEntity":
        """Entity factory: client.RepositoryToken().list() / client.RepositoryToken().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_token_entity import RepositoryTokenEntity
        return RepositoryTokenEntity(self, data)


    def RepositoryTokenRefresh(self, data=None) -> "RepositoryTokenRefreshEntity":
        """Entity factory: client.RepositoryTokenRefresh().list() / client.RepositoryTokenRefresh().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_token_refresh_entity import RepositoryTokenRefreshEntity
        return RepositoryTokenRefreshEntity(self, data)


    def RepositoryTokenSync(self, data=None) -> "RepositoryTokenSyncEntity":
        """Entity factory: client.RepositoryTokenSync().list() / client.RepositoryTokenSync().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_token_sync_entity import RepositoryTokenSyncEntity
        return RepositoryTokenSyncEntity(self, data)


    def RepositoryWebhook(self, data=None) -> "RepositoryWebhookEntity":
        """Entity factory: client.RepositoryWebhook().list() / client.RepositoryWebhook().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_webhook_entity import RepositoryWebhookEntity
        return RepositoryWebhookEntity(self, data)


    def RepositoryX509EcdsaCertificate(self, data=None) -> "RepositoryX509EcdsaCertificateEntity":
        """Entity factory: client.RepositoryX509EcdsaCertificate().list() / client.RepositoryX509EcdsaCertificate().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_x509_ecdsa_certificate_entity import RepositoryX509EcdsaCertificateEntity
        return RepositoryX509EcdsaCertificateEntity(self, data)


    def RepositoryX509RsaCertificate(self, data=None) -> "RepositoryX509RsaCertificateEntity":
        """Entity factory: client.RepositoryX509RsaCertificate().list() / client.RepositoryX509RsaCertificate().load({"id": ...})."""
        from cloudsmith_sdk.entity.repository_x509_rsa_certificate_entity import RepositoryX509RsaCertificateEntity
        return RepositoryX509RsaCertificateEntity(self, data)


    def ResourcesRateCheck(self, data=None) -> "ResourcesRateCheckEntity":
        """Entity factory: client.ResourcesRateCheck().list() / client.ResourcesRateCheck().load({"id": ...})."""
        from cloudsmith_sdk.entity.resources_rate_check_entity import ResourcesRateCheckEntity
        return ResourcesRateCheckEntity(self, data)


    def Rpm(self, data=None) -> "RpmEntity":
        """Entity factory: client.Rpm().list() / client.Rpm().load({"id": ...})."""
        from cloudsmith_sdk.entity.rpm_entity import RpmEntity
        return RpmEntity(self, data)


    def Ruby(self, data=None) -> "RubyEntity":
        """Entity factory: client.Ruby().list() / client.Ruby().load({"id": ...})."""
        from cloudsmith_sdk.entity.ruby_entity import RubyEntity
        return RubyEntity(self, data)


    def Service(self, data=None) -> "ServiceEntity":
        """Entity factory: client.Service().list() / client.Service().load({"id": ...})."""
        from cloudsmith_sdk.entity.service_entity import ServiceEntity
        return ServiceEntity(self, data)


    def StatusBasic(self, data=None) -> "StatusBasicEntity":
        """Entity factory: client.StatusBasic().list() / client.StatusBasic().load({"id": ...})."""
        from cloudsmith_sdk.entity.status_basic_entity import StatusBasicEntity
        return StatusBasicEntity(self, data)


    def StorageRegion(self, data=None) -> "StorageRegionEntity":
        """Entity factory: client.StorageRegion().list() / client.StorageRegion().load({"id": ...})."""
        from cloudsmith_sdk.entity.storage_region_entity import StorageRegionEntity
        return StorageRegionEntity(self, data)


    def Swift(self, data=None) -> "SwiftEntity":
        """Entity factory: client.Swift().list() / client.Swift().load({"id": ...})."""
        from cloudsmith_sdk.entity.swift_entity import SwiftEntity
        return SwiftEntity(self, data)


    def User(self, data=None) -> "UserEntity":
        """Entity factory: client.User().list() / client.User().load({"id": ...})."""
        from cloudsmith_sdk.entity.user_entity import UserEntity
        return UserEntity(self, data)


    def UserAuthToken(self, data=None) -> "UserAuthTokenEntity":
        """Entity factory: client.UserAuthToken().list() / client.UserAuthToken().load({"id": ...})."""
        from cloudsmith_sdk.entity.user_auth_token_entity import UserAuthTokenEntity
        return UserAuthTokenEntity(self, data)


    def UserAuthenticationToken(self, data=None) -> "UserAuthenticationTokenEntity":
        """Entity factory: client.UserAuthenticationToken().list() / client.UserAuthenticationToken().load({"id": ...})."""
        from cloudsmith_sdk.entity.user_authentication_token_entity import UserAuthenticationTokenEntity
        return UserAuthenticationTokenEntity(self, data)


    def UserBrief(self, data=None) -> "UserBriefEntity":
        """Entity factory: client.UserBrief().list() / client.UserBrief().load({"id": ...})."""
        from cloudsmith_sdk.entity.user_brief_entity import UserBriefEntity
        return UserBriefEntity(self, data)


    def UserProfile(self, data=None) -> "UserProfileEntity":
        """Entity factory: client.UserProfile().list() / client.UserProfile().load({"id": ...})."""
        from cloudsmith_sdk.entity.user_profile_entity import UserProfileEntity
        return UserProfileEntity(self, data)


    def Vulnerability(self, data=None) -> "VulnerabilityEntity":
        """Entity factory: client.Vulnerability().list() / client.Vulnerability().load({"id": ...})."""
        from cloudsmith_sdk.entity.vulnerability_entity import VulnerabilityEntity
        return VulnerabilityEntity(self, data)


    def Webhook(self, data=None) -> "WebhookEntity":
        """Entity factory: client.Webhook().list() / client.Webhook().load({"id": ...})."""
        from cloudsmith_sdk.entity.webhook_entity import WebhookEntity
        return WebhookEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CloudsmithSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from cloudsmith_sdk.entity.cargo_entity import CargoEntity
    from cloudsmith_sdk.entity.composer_entity import ComposerEntity
    from cloudsmith_sdk.entity.conda_entity import CondaEntity
    from cloudsmith_sdk.entity.cran_entity import CranEntity
    from cloudsmith_sdk.entity.dart_entity import DartEntity
    from cloudsmith_sdk.entity.deb_entity import DebEntity
    from cloudsmith_sdk.entity.distribution_full_entity import DistributionFullEntity
    from cloudsmith_sdk.entity.docker_entity import DockerEntity
    from cloudsmith_sdk.entity.dynamic_mapping_entity import DynamicMappingEntity
    from cloudsmith_sdk.entity.entitlement_entity import EntitlementEntity
    from cloudsmith_sdk.entity.file_entity import FileEntity
    from cloudsmith_sdk.entity.format_entity import FormatEntity
    from cloudsmith_sdk.entity.gon_entity import GonEntity
    from cloudsmith_sdk.entity.helm_entity import HelmEntity
    from cloudsmith_sdk.entity.hex_entity import HexEntity
    from cloudsmith_sdk.entity.huggingface_entity import HuggingfaceEntity
    from cloudsmith_sdk.entity.maven_entity import MavenEntity
    from cloudsmith_sdk.entity.namespace_entity import NamespaceEntity
    from cloudsmith_sdk.entity.namespace_audit_log_entity import NamespaceAuditLogEntity
    from cloudsmith_sdk.entity.npm_entity import NpmEntity
    from cloudsmith_sdk.entity.nuget_entity import NugetEntity
    from cloudsmith_sdk.entity.org_entity import OrgEntity
    from cloudsmith_sdk.entity.organization_group_sync_entity import OrganizationGroupSyncEntity
    from cloudsmith_sdk.entity.organization_group_sync_status_entity import OrganizationGroupSyncStatusEntity
    from cloudsmith_sdk.entity.organization_invite_entity import OrganizationInviteEntity
    from cloudsmith_sdk.entity.organization_invite_extend_entity import OrganizationInviteExtendEntity
    from cloudsmith_sdk.entity.organization_membership_entity import OrganizationMembershipEntity
    from cloudsmith_sdk.entity.organization_membership_role_update_entity import OrganizationMembershipRoleUpdateEntity
    from cloudsmith_sdk.entity.organization_membership_visibility_update_entity import OrganizationMembershipVisibilityUpdateEntity
    from cloudsmith_sdk.entity.organization_package_license_policy_entity import OrganizationPackageLicensePolicyEntity
    from cloudsmith_sdk.entity.organization_package_vulnerability_policy_entity import OrganizationPackageVulnerabilityPolicyEntity
    from cloudsmith_sdk.entity.organization_saml_auth_entity import OrganizationSamlAuthEntity
    from cloudsmith_sdk.entity.organization_team_entity import OrganizationTeamEntity
    from cloudsmith_sdk.entity.organization_team_member_entity import OrganizationTeamMemberEntity
    from cloudsmith_sdk.entity.package_entity import PackageEntity
    from cloudsmith_sdk.entity.package_deny_policy_entity import PackageDenyPolicyEntity
    from cloudsmith_sdk.entity.package_file_parts_upload_entity import PackageFilePartsUploadEntity
    from cloudsmith_sdk.entity.package_file_upload_entity import PackageFileUploadEntity
    from cloudsmith_sdk.entity.package_license_policy_evaluation_entity import PackageLicensePolicyEvaluationEntity
    from cloudsmith_sdk.entity.package_version_badge_entity import PackageVersionBadgeEntity
    from cloudsmith_sdk.entity.package_vulnerability_policy_evaluation_entity import PackageVulnerabilityPolicyEvaluationEntity
    from cloudsmith_sdk.entity.provider_setting_entity import ProviderSettingEntity
    from cloudsmith_sdk.entity.provider_settings_write_entity import ProviderSettingsWriteEntity
    from cloudsmith_sdk.entity.python_entity import PythonEntity
    from cloudsmith_sdk.entity.quota_entity import QuotaEntity
    from cloudsmith_sdk.entity.repo_entity import RepoEntity
    from cloudsmith_sdk.entity.repository_audit_log_entity import RepositoryAuditLogEntity
    from cloudsmith_sdk.entity.repository_ecdsa_key_entity import RepositoryEcdsaKeyEntity
    from cloudsmith_sdk.entity.repository_geo_ip_rule_entity import RepositoryGeoIpRuleEntity
    from cloudsmith_sdk.entity.repository_geo_ip_status_entity import RepositoryGeoIpStatusEntity
    from cloudsmith_sdk.entity.repository_geo_ip_test_address_entity import RepositoryGeoIpTestAddressEntity
    from cloudsmith_sdk.entity.repository_gpg_key_entity import RepositoryGpgKeyEntity
    from cloudsmith_sdk.entity.repository_privilege_dict_entity import RepositoryPrivilegeDictEntity
    from cloudsmith_sdk.entity.repository_retention_rule_entity import RepositoryRetentionRuleEntity
    from cloudsmith_sdk.entity.repository_rsa_key_entity import RepositoryRsaKeyEntity
    from cloudsmith_sdk.entity.repository_token_entity import RepositoryTokenEntity
    from cloudsmith_sdk.entity.repository_token_refresh_entity import RepositoryTokenRefreshEntity
    from cloudsmith_sdk.entity.repository_token_sync_entity import RepositoryTokenSyncEntity
    from cloudsmith_sdk.entity.repository_webhook_entity import RepositoryWebhookEntity
    from cloudsmith_sdk.entity.repository_x509_ecdsa_certificate_entity import RepositoryX509EcdsaCertificateEntity
    from cloudsmith_sdk.entity.repository_x509_rsa_certificate_entity import RepositoryX509RsaCertificateEntity
    from cloudsmith_sdk.entity.resources_rate_check_entity import ResourcesRateCheckEntity
    from cloudsmith_sdk.entity.rpm_entity import RpmEntity
    from cloudsmith_sdk.entity.ruby_entity import RubyEntity
    from cloudsmith_sdk.entity.service_entity import ServiceEntity
    from cloudsmith_sdk.entity.status_basic_entity import StatusBasicEntity
    from cloudsmith_sdk.entity.storage_region_entity import StorageRegionEntity
    from cloudsmith_sdk.entity.swift_entity import SwiftEntity
    from cloudsmith_sdk.entity.user_entity import UserEntity
    from cloudsmith_sdk.entity.user_auth_token_entity import UserAuthTokenEntity
    from cloudsmith_sdk.entity.user_authentication_token_entity import UserAuthenticationTokenEntity
    from cloudsmith_sdk.entity.user_brief_entity import UserBriefEntity
    from cloudsmith_sdk.entity.user_profile_entity import UserProfileEntity
    from cloudsmith_sdk.entity.vulnerability_entity import VulnerabilityEntity
    from cloudsmith_sdk.entity.webhook_entity import WebhookEntity
