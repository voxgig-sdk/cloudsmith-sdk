# Cloudsmith SDK

from utility.voxgig_struct import voxgig_struct as vs
from core.utility_type import CloudsmithUtility
from core.spec import CloudsmithSpec
from core import helpers

# Load utility registration (populates Utility._registrar)
from utility import register

# Load features
from feature.base_feature import CloudsmithBaseFeature
from features import _make_feature


class CloudsmithSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CloudsmithUtility()
        self._utility = utility

        from config import make_config
        config = make_config()

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
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        extend = vs.getprop(self.options, "extend")
        if isinstance(extend, list):
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

    def direct(self, fetchargs=None):
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


    def Abort(self, data=None) -> "AbortEntity":
        """Entity factory: client.Abort().list() / client.Abort().load({"id": ...})."""
        from entity.abort_entity import AbortEntity
        return AbortEntity(self, data)


    def Alpine(self, data=None) -> "AlpineEntity":
        """Entity factory: client.Alpine().list() / client.Alpine().load({"id": ...})."""
        from entity.alpine_entity import AlpineEntity
        return AlpineEntity(self, data)


    def AuditLog(self, data=None) -> "AuditLogEntity":
        """Entity factory: client.AuditLog().list() / client.AuditLog().load({"id": ...})."""
        from entity.audit_log_entity import AuditLogEntity
        return AuditLogEntity(self, data)


    def Basic(self, data=None) -> "BasicEntity":
        """Entity factory: client.Basic().list() / client.Basic().load({"id": ...})."""
        from entity.basic_entity import BasicEntity
        return BasicEntity(self, data)


    def Cargo(self, data=None) -> "CargoEntity":
        """Entity factory: client.Cargo().list() / client.Cargo().load({"id": ...})."""
        from entity.cargo_entity import CargoEntity
        return CargoEntity(self, data)


    def Cocoapod(self, data=None) -> "CocoapodEntity":
        """Entity factory: client.Cocoapod().list() / client.Cocoapod().load({"id": ...})."""
        from entity.cocoapod_entity import CocoapodEntity
        return CocoapodEntity(self, data)


    def Complete(self, data=None) -> "CompleteEntity":
        """Entity factory: client.Complete().list() / client.Complete().load({"id": ...})."""
        from entity.complete_entity import CompleteEntity
        return CompleteEntity(self, data)


    def Composer(self, data=None) -> "ComposerEntity":
        """Entity factory: client.Composer().list() / client.Composer().load({"id": ...})."""
        from entity.composer_entity import ComposerEntity
        return ComposerEntity(self, data)


    def Conan(self, data=None) -> "ConanEntity":
        """Entity factory: client.Conan().list() / client.Conan().load({"id": ...})."""
        from entity.conan_entity import ConanEntity
        return ConanEntity(self, data)


    def Conda(self, data=None) -> "CondaEntity":
        """Entity factory: client.Conda().list() / client.Conda().load({"id": ...})."""
        from entity.conda_entity import CondaEntity
        return CondaEntity(self, data)


    def Copy(self, data=None) -> "CopyEntity":
        """Entity factory: client.Copy().list() / client.Copy().load({"id": ...})."""
        from entity.copy_entity import CopyEntity
        return CopyEntity(self, data)


    def Cran(self, data=None) -> "CranEntity":
        """Entity factory: client.Cran().list() / client.Cran().load({"id": ...})."""
        from entity.cran_entity import CranEntity
        return CranEntity(self, data)


    def Dart(self, data=None) -> "DartEntity":
        """Entity factory: client.Dart().list() / client.Dart().load({"id": ...})."""
        from entity.dart_entity import DartEntity
        return DartEntity(self, data)


    def Deb(self, data=None) -> "DebEntity":
        """Entity factory: client.Deb().list() / client.Deb().load({"id": ...})."""
        from entity.deb_entity import DebEntity
        return DebEntity(self, data)


    def DenyPolicy(self, data=None) -> "DenyPolicyEntity":
        """Entity factory: client.DenyPolicy().list() / client.DenyPolicy().load({"id": ...})."""
        from entity.deny_policy_entity import DenyPolicyEntity
        return DenyPolicyEntity(self, data)


    def Dependency(self, data=None) -> "DependencyEntity":
        """Entity factory: client.Dependency().list() / client.Dependency().load({"id": ...})."""
        from entity.dependency_entity import DependencyEntity
        return DependencyEntity(self, data)


    def Disable(self, data=None) -> "DisableEntity":
        """Entity factory: client.Disable().list() / client.Disable().load({"id": ...})."""
        from entity.disable_entity import DisableEntity
        return DisableEntity(self, data)


    def DistributionFull(self, data=None) -> "DistributionFullEntity":
        """Entity factory: client.DistributionFull().list() / client.DistributionFull().load({"id": ...})."""
        from entity.distribution_full_entity import DistributionFullEntity
        return DistributionFullEntity(self, data)


    def Distro(self, data=None) -> "DistroEntity":
        """Entity factory: client.Distro().list() / client.Distro().load({"id": ...})."""
        from entity.distro_entity import DistroEntity
        return DistroEntity(self, data)


    def Docker(self, data=None) -> "DockerEntity":
        """Entity factory: client.Docker().list() / client.Docker().load({"id": ...})."""
        from entity.docker_entity import DockerEntity
        return DockerEntity(self, data)


    def DynamicMapping(self, data=None) -> "DynamicMappingEntity":
        """Entity factory: client.DynamicMapping().list() / client.DynamicMapping().load({"id": ...})."""
        from entity.dynamic_mapping_entity import DynamicMappingEntity
        return DynamicMappingEntity(self, data)


    def Ecdsa(self, data=None) -> "EcdsaEntity":
        """Entity factory: client.Ecdsa().list() / client.Ecdsa().load({"id": ...})."""
        from entity.ecdsa_entity import EcdsaEntity
        return EcdsaEntity(self, data)


    def Enable(self, data=None) -> "EnableEntity":
        """Entity factory: client.Enable().list() / client.Enable().load({"id": ...})."""
        from entity.enable_entity import EnableEntity
        return EnableEntity(self, data)


    def Entitlement(self, data=None) -> "EntitlementEntity":
        """Entity factory: client.Entitlement().list() / client.Entitlement().load({"id": ...})."""
        from entity.entitlement_entity import EntitlementEntity
        return EntitlementEntity(self, data)


    def Evaluation(self, data=None) -> "EvaluationEntity":
        """Entity factory: client.Evaluation().list() / client.Evaluation().load({"id": ...})."""
        from entity.evaluation_entity import EvaluationEntity
        return EvaluationEntity(self, data)


    def File(self, data=None) -> "FileEntity":
        """Entity factory: client.File().list() / client.File().load({"id": ...})."""
        from entity.file_entity import FileEntity
        return FileEntity(self, data)


    def Format(self, data=None) -> "FormatEntity":
        """Entity factory: client.Format().list() / client.Format().load({"id": ...})."""
        from entity.format_entity import FormatEntity
        return FormatEntity(self, data)


    def Geoip(self, data=None) -> "GeoipEntity":
        """Entity factory: client.Geoip().list() / client.Geoip().load({"id": ...})."""
        from entity.geoip_entity import GeoipEntity
        return GeoipEntity(self, data)


    def Gon(self, data=None) -> "GonEntity":
        """Entity factory: client.Gon().list() / client.Gon().load({"id": ...})."""
        from entity.gon_entity import GonEntity
        return GonEntity(self, data)


    def Gon2(self, data=None) -> "Gon2Entity":
        """Entity factory: client.Gon2().list() / client.Gon2().load({"id": ...})."""
        from entity.gon2_entity import Gon2Entity
        return Gon2Entity(self, data)


    def Gon3(self, data=None) -> "Gon3Entity":
        """Entity factory: client.Gon3().list() / client.Gon3().load({"id": ...})."""
        from entity.gon3_entity import Gon3Entity
        return Gon3Entity(self, data)


    def Gon4(self, data=None) -> "Gon4Entity":
        """Entity factory: client.Gon4().list() / client.Gon4().load({"id": ...})."""
        from entity.gon4_entity import Gon4Entity
        return Gon4Entity(self, data)


    def Gon5(self, data=None) -> "Gon5Entity":
        """Entity factory: client.Gon5().list() / client.Gon5().load({"id": ...})."""
        from entity.gon5_entity import Gon5Entity
        return Gon5Entity(self, data)


    def Gon6(self, data=None) -> "Gon6Entity":
        """Entity factory: client.Gon6().list() / client.Gon6().load({"id": ...})."""
        from entity.gon6_entity import Gon6Entity
        return Gon6Entity(self, data)


    def Gon7(self, data=None) -> "Gon7Entity":
        """Entity factory: client.Gon7().list() / client.Gon7().load({"id": ...})."""
        from entity.gon7_entity import Gon7Entity
        return Gon7Entity(self, data)


    def Gon8(self, data=None) -> "Gon8Entity":
        """Entity factory: client.Gon8().list() / client.Gon8().load({"id": ...})."""
        from entity.gon8_entity import Gon8Entity
        return Gon8Entity(self, data)


    def Gon9(self, data=None) -> "Gon9Entity":
        """Entity factory: client.Gon9().list() / client.Gon9().load({"id": ...})."""
        from entity.gon9_entity import Gon9Entity
        return Gon9Entity(self, data)


    def Gpg(self, data=None) -> "GpgEntity":
        """Entity factory: client.Gpg().list() / client.Gpg().load({"id": ...})."""
        from entity.gpg_entity import GpgEntity
        return GpgEntity(self, data)


    def Group(self, data=None) -> "GroupEntity":
        """Entity factory: client.Group().list() / client.Group().load({"id": ...})."""
        from entity.group_entity import GroupEntity
        return GroupEntity(self, data)


    def Helm(self, data=None) -> "HelmEntity":
        """Entity factory: client.Helm().list() / client.Helm().load({"id": ...})."""
        from entity.helm_entity import HelmEntity
        return HelmEntity(self, data)


    def Hex(self, data=None) -> "HexEntity":
        """Entity factory: client.Hex().list() / client.Hex().load({"id": ...})."""
        from entity.hex_entity import HexEntity
        return HexEntity(self, data)


    def History(self, data=None) -> "HistoryEntity":
        """Entity factory: client.History().list() / client.History().load({"id": ...})."""
        from entity.history_entity import HistoryEntity
        return HistoryEntity(self, data)


    def Huggingface(self, data=None) -> "HuggingfaceEntity":
        """Entity factory: client.Huggingface().list() / client.Huggingface().load({"id": ...})."""
        from entity.huggingface_entity import HuggingfaceEntity
        return HuggingfaceEntity(self, data)


    def Info(self, data=None) -> "InfoEntity":
        """Entity factory: client.Info().list() / client.Info().load({"id": ...})."""
        from entity.info_entity import InfoEntity
        return InfoEntity(self, data)


    def Invite(self, data=None) -> "InviteEntity":
        """Entity factory: client.Invite().list() / client.Invite().load({"id": ...})."""
        from entity.invite_entity import InviteEntity
        return InviteEntity(self, data)


    def LicensePolicy(self, data=None) -> "LicensePolicyEntity":
        """Entity factory: client.LicensePolicy().list() / client.LicensePolicy().load({"id": ...})."""
        from entity.license_policy_entity import LicensePolicyEntity
        return LicensePolicyEntity(self, data)


    def Limit(self, data=None) -> "LimitEntity":
        """Entity factory: client.Limit().list() / client.Limit().load({"id": ...})."""
        from entity.limit_entity import LimitEntity
        return LimitEntity(self, data)


    def Luarock(self, data=None) -> "LuarockEntity":
        """Entity factory: client.Luarock().list() / client.Luarock().load({"id": ...})."""
        from entity.luarock_entity import LuarockEntity
        return LuarockEntity(self, data)


    def Maven(self, data=None) -> "MavenEntity":
        """Entity factory: client.Maven().list() / client.Maven().load({"id": ...})."""
        from entity.maven_entity import MavenEntity
        return MavenEntity(self, data)


    def Member(self, data=None) -> "MemberEntity":
        """Entity factory: client.Member().list() / client.Member().load({"id": ...})."""
        from entity.member_entity import MemberEntity
        return MemberEntity(self, data)


    def Move(self, data=None) -> "MoveEntity":
        """Entity factory: client.Move().list() / client.Move().load({"id": ...})."""
        from entity.move_entity import MoveEntity
        return MoveEntity(self, data)


    def Namespace(self, data=None) -> "NamespaceEntity":
        """Entity factory: client.Namespace().list() / client.Namespace().load({"id": ...})."""
        from entity.namespace_entity import NamespaceEntity
        return NamespaceEntity(self, data)


    def NamespaceAuditLog(self, data=None) -> "NamespaceAuditLogEntity":
        """Entity factory: client.NamespaceAuditLog().list() / client.NamespaceAuditLog().load({"id": ...})."""
        from entity.namespace_audit_log_entity import NamespaceAuditLogEntity
        return NamespaceAuditLogEntity(self, data)


    def Npm(self, data=None) -> "NpmEntity":
        """Entity factory: client.Npm().list() / client.Npm().load({"id": ...})."""
        from entity.npm_entity import NpmEntity
        return NpmEntity(self, data)


    def Nuget(self, data=None) -> "NugetEntity":
        """Entity factory: client.Nuget().list() / client.Nuget().load({"id": ...})."""
        from entity.nuget_entity import NugetEntity
        return NugetEntity(self, data)


    def OpenidConnect(self, data=None) -> "OpenidConnectEntity":
        """Entity factory: client.OpenidConnect().list() / client.OpenidConnect().load({"id": ...})."""
        from entity.openid_connect_entity import OpenidConnectEntity
        return OpenidConnectEntity(self, data)


    def Org(self, data=None) -> "OrgEntity":
        """Entity factory: client.Org().list() / client.Org().load({"id": ...})."""
        from entity.org_entity import OrgEntity
        return OrgEntity(self, data)


    def OrganizationGroupSync(self, data=None) -> "OrganizationGroupSyncEntity":
        """Entity factory: client.OrganizationGroupSync().list() / client.OrganizationGroupSync().load({"id": ...})."""
        from entity.organization_group_sync_entity import OrganizationGroupSyncEntity
        return OrganizationGroupSyncEntity(self, data)


    def OrganizationGroupSyncStatus(self, data=None) -> "OrganizationGroupSyncStatusEntity":
        """Entity factory: client.OrganizationGroupSyncStatus().list() / client.OrganizationGroupSyncStatus().load({"id": ...})."""
        from entity.organization_group_sync_status_entity import OrganizationGroupSyncStatusEntity
        return OrganizationGroupSyncStatusEntity(self, data)


    def OrganizationInvite(self, data=None) -> "OrganizationInviteEntity":
        """Entity factory: client.OrganizationInvite().list() / client.OrganizationInvite().load({"id": ...})."""
        from entity.organization_invite_entity import OrganizationInviteEntity
        return OrganizationInviteEntity(self, data)


    def OrganizationInviteExtend(self, data=None) -> "OrganizationInviteExtendEntity":
        """Entity factory: client.OrganizationInviteExtend().list() / client.OrganizationInviteExtend().load({"id": ...})."""
        from entity.organization_invite_extend_entity import OrganizationInviteExtendEntity
        return OrganizationInviteExtendEntity(self, data)


    def OrganizationMembership(self, data=None) -> "OrganizationMembershipEntity":
        """Entity factory: client.OrganizationMembership().list() / client.OrganizationMembership().load({"id": ...})."""
        from entity.organization_membership_entity import OrganizationMembershipEntity
        return OrganizationMembershipEntity(self, data)


    def OrganizationMembershipRoleUpdate(self, data=None) -> "OrganizationMembershipRoleUpdateEntity":
        """Entity factory: client.OrganizationMembershipRoleUpdate().list() / client.OrganizationMembershipRoleUpdate().load({"id": ...})."""
        from entity.organization_membership_role_update_entity import OrganizationMembershipRoleUpdateEntity
        return OrganizationMembershipRoleUpdateEntity(self, data)


    def OrganizationMembershipVisibilityUpdate(self, data=None) -> "OrganizationMembershipVisibilityUpdateEntity":
        """Entity factory: client.OrganizationMembershipVisibilityUpdate().list() / client.OrganizationMembershipVisibilityUpdate().load({"id": ...})."""
        from entity.organization_membership_visibility_update_entity import OrganizationMembershipVisibilityUpdateEntity
        return OrganizationMembershipVisibilityUpdateEntity(self, data)


    def OrganizationPackageLicensePolicy(self, data=None) -> "OrganizationPackageLicensePolicyEntity":
        """Entity factory: client.OrganizationPackageLicensePolicy().list() / client.OrganizationPackageLicensePolicy().load({"id": ...})."""
        from entity.organization_package_license_policy_entity import OrganizationPackageLicensePolicyEntity
        return OrganizationPackageLicensePolicyEntity(self, data)


    def OrganizationPackageVulnerabilityPolicy(self, data=None) -> "OrganizationPackageVulnerabilityPolicyEntity":
        """Entity factory: client.OrganizationPackageVulnerabilityPolicy().list() / client.OrganizationPackageVulnerabilityPolicy().load({"id": ...})."""
        from entity.organization_package_vulnerability_policy_entity import OrganizationPackageVulnerabilityPolicyEntity
        return OrganizationPackageVulnerabilityPolicyEntity(self, data)


    def OrganizationSamlAuth(self, data=None) -> "OrganizationSamlAuthEntity":
        """Entity factory: client.OrganizationSamlAuth().list() / client.OrganizationSamlAuth().load({"id": ...})."""
        from entity.organization_saml_auth_entity import OrganizationSamlAuthEntity
        return OrganizationSamlAuthEntity(self, data)


    def OrganizationTeam(self, data=None) -> "OrganizationTeamEntity":
        """Entity factory: client.OrganizationTeam().list() / client.OrganizationTeam().load({"id": ...})."""
        from entity.organization_team_entity import OrganizationTeamEntity
        return OrganizationTeamEntity(self, data)


    def OrganizationTeamMember(self, data=None) -> "OrganizationTeamMemberEntity":
        """Entity factory: client.OrganizationTeamMember().list() / client.OrganizationTeamMember().load({"id": ...})."""
        from entity.organization_team_member_entity import OrganizationTeamMemberEntity
        return OrganizationTeamMemberEntity(self, data)


    def Oss(self, data=None) -> "OssEntity":
        """Entity factory: client.Oss().list() / client.Oss().load({"id": ...})."""
        from entity.oss_entity import OssEntity
        return OssEntity(self, data)


    def P2n(self, data=None) -> "P2nEntity":
        """Entity factory: client.P2n().list() / client.P2n().load({"id": ...})."""
        from entity.p2n_entity import P2nEntity
        return P2nEntity(self, data)


    def P2n2(self, data=None) -> "P2n2Entity":
        """Entity factory: client.P2n2().list() / client.P2n2().load({"id": ...})."""
        from entity.p2n2_entity import P2n2Entity
        return P2n2Entity(self, data)


    def Package(self, data=None) -> "PackageEntity":
        """Entity factory: client.Package().list() / client.Package().load({"id": ...})."""
        from entity.package_entity import PackageEntity
        return PackageEntity(self, data)


    def PackageDenyPolicy(self, data=None) -> "PackageDenyPolicyEntity":
        """Entity factory: client.PackageDenyPolicy().list() / client.PackageDenyPolicy().load({"id": ...})."""
        from entity.package_deny_policy_entity import PackageDenyPolicyEntity
        return PackageDenyPolicyEntity(self, data)


    def PackageFilePartsUpload(self, data=None) -> "PackageFilePartsUploadEntity":
        """Entity factory: client.PackageFilePartsUpload().list() / client.PackageFilePartsUpload().load({"id": ...})."""
        from entity.package_file_parts_upload_entity import PackageFilePartsUploadEntity
        return PackageFilePartsUploadEntity(self, data)


    def PackageFileUpload(self, data=None) -> "PackageFileUploadEntity":
        """Entity factory: client.PackageFileUpload().list() / client.PackageFileUpload().load({"id": ...})."""
        from entity.package_file_upload_entity import PackageFileUploadEntity
        return PackageFileUploadEntity(self, data)


    def PackageLicensePolicyEvaluation(self, data=None) -> "PackageLicensePolicyEvaluationEntity":
        """Entity factory: client.PackageLicensePolicyEvaluation().list() / client.PackageLicensePolicyEvaluation().load({"id": ...})."""
        from entity.package_license_policy_evaluation_entity import PackageLicensePolicyEvaluationEntity
        return PackageLicensePolicyEvaluationEntity(self, data)


    def PackageVersionBadge(self, data=None) -> "PackageVersionBadgeEntity":
        """Entity factory: client.PackageVersionBadge().list() / client.PackageVersionBadge().load({"id": ...})."""
        from entity.package_version_badge_entity import PackageVersionBadgeEntity
        return PackageVersionBadgeEntity(self, data)


    def PackageVulnerabilityPolicyEvaluation(self, data=None) -> "PackageVulnerabilityPolicyEvaluationEntity":
        """Entity factory: client.PackageVulnerabilityPolicyEvaluation().list() / client.PackageVulnerabilityPolicyEvaluation().load({"id": ...})."""
        from entity.package_vulnerability_policy_evaluation_entity import PackageVulnerabilityPolicyEvaluationEntity
        return PackageVulnerabilityPolicyEvaluationEntity(self, data)


    def Privilege(self, data=None) -> "PrivilegeEntity":
        """Entity factory: client.Privilege().list() / client.Privilege().load({"id": ...})."""
        from entity.privilege_entity import PrivilegeEntity
        return PrivilegeEntity(self, data)


    def Profile(self, data=None) -> "ProfileEntity":
        """Entity factory: client.Profile().list() / client.Profile().load({"id": ...})."""
        from entity.profile_entity import ProfileEntity
        return ProfileEntity(self, data)


    def ProviderSetting(self, data=None) -> "ProviderSettingEntity":
        """Entity factory: client.ProviderSetting().list() / client.ProviderSetting().load({"id": ...})."""
        from entity.provider_setting_entity import ProviderSettingEntity
        return ProviderSettingEntity(self, data)


    def ProviderSettingsWrite(self, data=None) -> "ProviderSettingsWriteEntity":
        """Entity factory: client.ProviderSettingsWrite().list() / client.ProviderSettingsWrite().load({"id": ...})."""
        from entity.provider_settings_write_entity import ProviderSettingsWriteEntity
        return ProviderSettingsWriteEntity(self, data)


    def Python(self, data=None) -> "PythonEntity":
        """Entity factory: client.Python().list() / client.Python().load({"id": ...})."""
        from entity.python_entity import PythonEntity
        return PythonEntity(self, data)


    def Quarantine(self, data=None) -> "QuarantineEntity":
        """Entity factory: client.Quarantine().list() / client.Quarantine().load({"id": ...})."""
        from entity.quarantine_entity import QuarantineEntity
        return QuarantineEntity(self, data)


    def Quota(self, data=None) -> "QuotaEntity":
        """Entity factory: client.Quota().list() / client.Quota().load({"id": ...})."""
        from entity.quota_entity import QuotaEntity
        return QuotaEntity(self, data)


    def Raw(self, data=None) -> "RawEntity":
        """Entity factory: client.Raw().list() / client.Raw().load({"id": ...})."""
        from entity.raw_entity import RawEntity
        return RawEntity(self, data)


    def Refresh(self, data=None) -> "RefreshEntity":
        """Entity factory: client.Refresh().list() / client.Refresh().load({"id": ...})."""
        from entity.refresh_entity import RefreshEntity
        return RefreshEntity(self, data)


    def Regenerate(self, data=None) -> "RegenerateEntity":
        """Entity factory: client.Regenerate().list() / client.Regenerate().load({"id": ...})."""
        from entity.regenerate_entity import RegenerateEntity
        return RegenerateEntity(self, data)


    def Repo(self, data=None) -> "RepoEntity":
        """Entity factory: client.Repo().list() / client.Repo().load({"id": ...})."""
        from entity.repo_entity import RepoEntity
        return RepoEntity(self, data)


    def RepositoryAuditLog(self, data=None) -> "RepositoryAuditLogEntity":
        """Entity factory: client.RepositoryAuditLog().list() / client.RepositoryAuditLog().load({"id": ...})."""
        from entity.repository_audit_log_entity import RepositoryAuditLogEntity
        return RepositoryAuditLogEntity(self, data)


    def RepositoryEcdsaKey(self, data=None) -> "RepositoryEcdsaKeyEntity":
        """Entity factory: client.RepositoryEcdsaKey().list() / client.RepositoryEcdsaKey().load({"id": ...})."""
        from entity.repository_ecdsa_key_entity import RepositoryEcdsaKeyEntity
        return RepositoryEcdsaKeyEntity(self, data)


    def RepositoryGeoIpRule(self, data=None) -> "RepositoryGeoIpRuleEntity":
        """Entity factory: client.RepositoryGeoIpRule().list() / client.RepositoryGeoIpRule().load({"id": ...})."""
        from entity.repository_geo_ip_rule_entity import RepositoryGeoIpRuleEntity
        return RepositoryGeoIpRuleEntity(self, data)


    def RepositoryGeoIpStatus(self, data=None) -> "RepositoryGeoIpStatusEntity":
        """Entity factory: client.RepositoryGeoIpStatus().list() / client.RepositoryGeoIpStatus().load({"id": ...})."""
        from entity.repository_geo_ip_status_entity import RepositoryGeoIpStatusEntity
        return RepositoryGeoIpStatusEntity(self, data)


    def RepositoryGeoIpTestAddress(self, data=None) -> "RepositoryGeoIpTestAddressEntity":
        """Entity factory: client.RepositoryGeoIpTestAddress().list() / client.RepositoryGeoIpTestAddress().load({"id": ...})."""
        from entity.repository_geo_ip_test_address_entity import RepositoryGeoIpTestAddressEntity
        return RepositoryGeoIpTestAddressEntity(self, data)


    def RepositoryGpgKey(self, data=None) -> "RepositoryGpgKeyEntity":
        """Entity factory: client.RepositoryGpgKey().list() / client.RepositoryGpgKey().load({"id": ...})."""
        from entity.repository_gpg_key_entity import RepositoryGpgKeyEntity
        return RepositoryGpgKeyEntity(self, data)


    def RepositoryPrivilegeInput(self, data=None) -> "RepositoryPrivilegeInputEntity":
        """Entity factory: client.RepositoryPrivilegeInput().list() / client.RepositoryPrivilegeInput().load({"id": ...})."""
        from entity.repository_privilege_input_entity import RepositoryPrivilegeInputEntity
        return RepositoryPrivilegeInputEntity(self, data)


    def RepositoryRetentionRule(self, data=None) -> "RepositoryRetentionRuleEntity":
        """Entity factory: client.RepositoryRetentionRule().list() / client.RepositoryRetentionRule().load({"id": ...})."""
        from entity.repository_retention_rule_entity import RepositoryRetentionRuleEntity
        return RepositoryRetentionRuleEntity(self, data)


    def RepositoryRsaKey(self, data=None) -> "RepositoryRsaKeyEntity":
        """Entity factory: client.RepositoryRsaKey().list() / client.RepositoryRsaKey().load({"id": ...})."""
        from entity.repository_rsa_key_entity import RepositoryRsaKeyEntity
        return RepositoryRsaKeyEntity(self, data)


    def RepositoryToken(self, data=None) -> "RepositoryTokenEntity":
        """Entity factory: client.RepositoryToken().list() / client.RepositoryToken().load({"id": ...})."""
        from entity.repository_token_entity import RepositoryTokenEntity
        return RepositoryTokenEntity(self, data)


    def RepositoryTokenRefresh(self, data=None) -> "RepositoryTokenRefreshEntity":
        """Entity factory: client.RepositoryTokenRefresh().list() / client.RepositoryTokenRefresh().load({"id": ...})."""
        from entity.repository_token_refresh_entity import RepositoryTokenRefreshEntity
        return RepositoryTokenRefreshEntity(self, data)


    def RepositoryTokenSync(self, data=None) -> "RepositoryTokenSyncEntity":
        """Entity factory: client.RepositoryTokenSync().list() / client.RepositoryTokenSync().load({"id": ...})."""
        from entity.repository_token_sync_entity import RepositoryTokenSyncEntity
        return RepositoryTokenSyncEntity(self, data)


    def RepositoryWebhook(self, data=None) -> "RepositoryWebhookEntity":
        """Entity factory: client.RepositoryWebhook().list() / client.RepositoryWebhook().load({"id": ...})."""
        from entity.repository_webhook_entity import RepositoryWebhookEntity
        return RepositoryWebhookEntity(self, data)


    def RepositoryX509EcdsaCertificate(self, data=None) -> "RepositoryX509EcdsaCertificateEntity":
        """Entity factory: client.RepositoryX509EcdsaCertificate().list() / client.RepositoryX509EcdsaCertificate().load({"id": ...})."""
        from entity.repository_x509_ecdsa_certificate_entity import RepositoryX509EcdsaCertificateEntity
        return RepositoryX509EcdsaCertificateEntity(self, data)


    def RepositoryX509RsaCertificate(self, data=None) -> "RepositoryX509RsaCertificateEntity":
        """Entity factory: client.RepositoryX509RsaCertificate().list() / client.RepositoryX509RsaCertificate().load({"id": ...})."""
        from entity.repository_x509_rsa_certificate_entity import RepositoryX509RsaCertificateEntity
        return RepositoryX509RsaCertificateEntity(self, data)


    def Reset(self, data=None) -> "ResetEntity":
        """Entity factory: client.Reset().list() / client.Reset().load({"id": ...})."""
        from entity.reset_entity import ResetEntity
        return ResetEntity(self, data)


    def ResourcesRateCheck(self, data=None) -> "ResourcesRateCheckEntity":
        """Entity factory: client.ResourcesRateCheck().list() / client.ResourcesRateCheck().load({"id": ...})."""
        from entity.resources_rate_check_entity import ResourcesRateCheckEntity
        return ResourcesRateCheckEntity(self, data)


    def Resync(self, data=None) -> "ResyncEntity":
        """Entity factory: client.Resync().list() / client.Resync().load({"id": ...})."""
        from entity.resync_entity import ResyncEntity
        return ResyncEntity(self, data)


    def Retention(self, data=None) -> "RetentionEntity":
        """Entity factory: client.Retention().list() / client.Retention().load({"id": ...})."""
        from entity.retention_entity import RetentionEntity
        return RetentionEntity(self, data)


    def Rpm(self, data=None) -> "RpmEntity":
        """Entity factory: client.Rpm().list() / client.Rpm().load({"id": ...})."""
        from entity.rpm_entity import RpmEntity
        return RpmEntity(self, data)


    def Rsa(self, data=None) -> "RsaEntity":
        """Entity factory: client.Rsa().list() / client.Rsa().load({"id": ...})."""
        from entity.rsa_entity import RsaEntity
        return RsaEntity(self, data)


    def Ruby(self, data=None) -> "RubyEntity":
        """Entity factory: client.Ruby().list() / client.Ruby().load({"id": ...})."""
        from entity.ruby_entity import RubyEntity
        return RubyEntity(self, data)


    def SamlGroupSync(self, data=None) -> "SamlGroupSyncEntity":
        """Entity factory: client.SamlGroupSync().list() / client.SamlGroupSync().load({"id": ...})."""
        from entity.saml_group_sync_entity import SamlGroupSyncEntity
        return SamlGroupSyncEntity(self, data)


    def Scan(self, data=None) -> "ScanEntity":
        """Entity factory: client.Scan().list() / client.Scan().load({"id": ...})."""
        from entity.scan_entity import ScanEntity
        return ScanEntity(self, data)


    def Self(self, data=None) -> "SelfEntity":
        """Entity factory: client.Self().list() / client.Self().load({"id": ...})."""
        from entity.self_entity import SelfEntity
        return SelfEntity(self, data)


    def Service(self, data=None) -> "ServiceEntity":
        """Entity factory: client.Service().list() / client.Service().load({"id": ...})."""
        from entity.service_entity import ServiceEntity
        return ServiceEntity(self, data)


    def Status(self, data=None) -> "StatusEntity":
        """Entity factory: client.Status().list() / client.Status().load({"id": ...})."""
        from entity.status_entity import StatusEntity
        return StatusEntity(self, data)


    def StatusBasic(self, data=None) -> "StatusBasicEntity":
        """Entity factory: client.StatusBasic().list() / client.StatusBasic().load({"id": ...})."""
        from entity.status_basic_entity import StatusBasicEntity
        return StatusBasicEntity(self, data)


    def StorageRegion(self, data=None) -> "StorageRegionEntity":
        """Entity factory: client.StorageRegion().list() / client.StorageRegion().load({"id": ...})."""
        from entity.storage_region_entity import StorageRegionEntity
        return StorageRegionEntity(self, data)


    def Swift(self, data=None) -> "SwiftEntity":
        """Entity factory: client.Swift().list() / client.Swift().load({"id": ...})."""
        from entity.swift_entity import SwiftEntity
        return SwiftEntity(self, data)


    def Sync(self, data=None) -> "SyncEntity":
        """Entity factory: client.Sync().list() / client.Sync().load({"id": ...})."""
        from entity.sync_entity import SyncEntity
        return SyncEntity(self, data)


    def Tag(self, data=None) -> "TagEntity":
        """Entity factory: client.Tag().list() / client.Tag().load({"id": ...})."""
        from entity.tag_entity import TagEntity
        return TagEntity(self, data)


    def Team(self, data=None) -> "TeamEntity":
        """Entity factory: client.Team().list() / client.Team().load({"id": ...})."""
        from entity.team_entity import TeamEntity
        return TeamEntity(self, data)


    def Terraform(self, data=None) -> "TerraformEntity":
        """Entity factory: client.Terraform().list() / client.Terraform().load({"id": ...})."""
        from entity.terraform_entity import TerraformEntity
        return TerraformEntity(self, data)


    def Test(self, data=None) -> "TestEntity":
        """Entity factory: client.Test().list() / client.Test().load({"id": ...})."""
        from entity.test_entity import TestEntity
        return TestEntity(self, data)


    def Token(self, data=None) -> "TokenEntity":
        """Entity factory: client.Token().list() / client.Token().load({"id": ...})."""
        from entity.token_entity import TokenEntity
        return TokenEntity(self, data)


    def TransferRegion(self, data=None) -> "TransferRegionEntity":
        """Entity factory: client.TransferRegion().list() / client.TransferRegion().load({"id": ...})."""
        from entity.transfer_region_entity import TransferRegionEntity
        return TransferRegionEntity(self, data)


    def User(self, data=None) -> "UserEntity":
        """Entity factory: client.User().list() / client.User().load({"id": ...})."""
        from entity.user_entity import UserEntity
        return UserEntity(self, data)


    def UserAuthToken(self, data=None) -> "UserAuthTokenEntity":
        """Entity factory: client.UserAuthToken().list() / client.UserAuthToken().load({"id": ...})."""
        from entity.user_auth_token_entity import UserAuthTokenEntity
        return UserAuthTokenEntity(self, data)


    def UserAuthenticationToken(self, data=None) -> "UserAuthenticationTokenEntity":
        """Entity factory: client.UserAuthenticationToken().list() / client.UserAuthenticationToken().load({"id": ...})."""
        from entity.user_authentication_token_entity import UserAuthenticationTokenEntity
        return UserAuthenticationTokenEntity(self, data)


    def UserBrief(self, data=None) -> "UserBriefEntity":
        """Entity factory: client.UserBrief().list() / client.UserBrief().load({"id": ...})."""
        from entity.user_brief_entity import UserBriefEntity
        return UserBriefEntity(self, data)


    def UserProfile(self, data=None) -> "UserProfileEntity":
        """Entity factory: client.UserProfile().list() / client.UserProfile().load({"id": ...})."""
        from entity.user_profile_entity import UserProfileEntity
        return UserProfileEntity(self, data)


    def Vagrant(self, data=None) -> "VagrantEntity":
        """Entity factory: client.Vagrant().list() / client.Vagrant().load({"id": ...})."""
        from entity.vagrant_entity import VagrantEntity
        return VagrantEntity(self, data)


    def Validate(self, data=None) -> "ValidateEntity":
        """Entity factory: client.Validate().list() / client.Validate().load({"id": ...})."""
        from entity.validate_entity import ValidateEntity
        return ValidateEntity(self, data)


    def Version(self, data=None) -> "VersionEntity":
        """Entity factory: client.Version().list() / client.Version().load({"id": ...})."""
        from entity.version_entity import VersionEntity
        return VersionEntity(self, data)


    def Vulnerability(self, data=None) -> "VulnerabilityEntity":
        """Entity factory: client.Vulnerability().list() / client.Vulnerability().load({"id": ...})."""
        from entity.vulnerability_entity import VulnerabilityEntity
        return VulnerabilityEntity(self, data)


    def VulnerabilityPolicy(self, data=None) -> "VulnerabilityPolicyEntity":
        """Entity factory: client.VulnerabilityPolicy().list() / client.VulnerabilityPolicy().load({"id": ...})."""
        from entity.vulnerability_policy_entity import VulnerabilityPolicyEntity
        return VulnerabilityPolicyEntity(self, data)


    def Webhook(self, data=None) -> "WebhookEntity":
        """Entity factory: client.Webhook().list() / client.Webhook().load({"id": ...})."""
        from entity.webhook_entity import WebhookEntity
        return WebhookEntity(self, data)


    def X509Ecdsa(self, data=None) -> "X509EcdsaEntity":
        """Entity factory: client.X509Ecdsa().list() / client.X509Ecdsa().load({"id": ...})."""
        from entity.x509_ecdsa_entity import X509EcdsaEntity
        return X509EcdsaEntity(self, data)


    def X509Rsa(self, data=None) -> "X509RsaEntity":
        """Entity factory: client.X509Rsa().list() / client.X509Rsa().load({"id": ...})."""
        from entity.x509_rsa_entity import X509RsaEntity
        return X509RsaEntity(self, data)



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
    from entity.abort_entity import AbortEntity
    from entity.alpine_entity import AlpineEntity
    from entity.audit_log_entity import AuditLogEntity
    from entity.basic_entity import BasicEntity
    from entity.cargo_entity import CargoEntity
    from entity.cocoapod_entity import CocoapodEntity
    from entity.complete_entity import CompleteEntity
    from entity.composer_entity import ComposerEntity
    from entity.conan_entity import ConanEntity
    from entity.conda_entity import CondaEntity
    from entity.copy_entity import CopyEntity
    from entity.cran_entity import CranEntity
    from entity.dart_entity import DartEntity
    from entity.deb_entity import DebEntity
    from entity.deny_policy_entity import DenyPolicyEntity
    from entity.dependency_entity import DependencyEntity
    from entity.disable_entity import DisableEntity
    from entity.distribution_full_entity import DistributionFullEntity
    from entity.distro_entity import DistroEntity
    from entity.docker_entity import DockerEntity
    from entity.dynamic_mapping_entity import DynamicMappingEntity
    from entity.ecdsa_entity import EcdsaEntity
    from entity.enable_entity import EnableEntity
    from entity.entitlement_entity import EntitlementEntity
    from entity.evaluation_entity import EvaluationEntity
    from entity.file_entity import FileEntity
    from entity.format_entity import FormatEntity
    from entity.geoip_entity import GeoipEntity
    from entity.gon_entity import GonEntity
    from entity.gon2_entity import Gon2Entity
    from entity.gon3_entity import Gon3Entity
    from entity.gon4_entity import Gon4Entity
    from entity.gon5_entity import Gon5Entity
    from entity.gon6_entity import Gon6Entity
    from entity.gon7_entity import Gon7Entity
    from entity.gon8_entity import Gon8Entity
    from entity.gon9_entity import Gon9Entity
    from entity.gpg_entity import GpgEntity
    from entity.group_entity import GroupEntity
    from entity.helm_entity import HelmEntity
    from entity.hex_entity import HexEntity
    from entity.history_entity import HistoryEntity
    from entity.huggingface_entity import HuggingfaceEntity
    from entity.info_entity import InfoEntity
    from entity.invite_entity import InviteEntity
    from entity.license_policy_entity import LicensePolicyEntity
    from entity.limit_entity import LimitEntity
    from entity.luarock_entity import LuarockEntity
    from entity.maven_entity import MavenEntity
    from entity.member_entity import MemberEntity
    from entity.move_entity import MoveEntity
    from entity.namespace_entity import NamespaceEntity
    from entity.namespace_audit_log_entity import NamespaceAuditLogEntity
    from entity.npm_entity import NpmEntity
    from entity.nuget_entity import NugetEntity
    from entity.openid_connect_entity import OpenidConnectEntity
    from entity.org_entity import OrgEntity
    from entity.organization_group_sync_entity import OrganizationGroupSyncEntity
    from entity.organization_group_sync_status_entity import OrganizationGroupSyncStatusEntity
    from entity.organization_invite_entity import OrganizationInviteEntity
    from entity.organization_invite_extend_entity import OrganizationInviteExtendEntity
    from entity.organization_membership_entity import OrganizationMembershipEntity
    from entity.organization_membership_role_update_entity import OrganizationMembershipRoleUpdateEntity
    from entity.organization_membership_visibility_update_entity import OrganizationMembershipVisibilityUpdateEntity
    from entity.organization_package_license_policy_entity import OrganizationPackageLicensePolicyEntity
    from entity.organization_package_vulnerability_policy_entity import OrganizationPackageVulnerabilityPolicyEntity
    from entity.organization_saml_auth_entity import OrganizationSamlAuthEntity
    from entity.organization_team_entity import OrganizationTeamEntity
    from entity.organization_team_member_entity import OrganizationTeamMemberEntity
    from entity.oss_entity import OssEntity
    from entity.p2n_entity import P2nEntity
    from entity.p2n2_entity import P2n2Entity
    from entity.package_entity import PackageEntity
    from entity.package_deny_policy_entity import PackageDenyPolicyEntity
    from entity.package_file_parts_upload_entity import PackageFilePartsUploadEntity
    from entity.package_file_upload_entity import PackageFileUploadEntity
    from entity.package_license_policy_evaluation_entity import PackageLicensePolicyEvaluationEntity
    from entity.package_version_badge_entity import PackageVersionBadgeEntity
    from entity.package_vulnerability_policy_evaluation_entity import PackageVulnerabilityPolicyEvaluationEntity
    from entity.privilege_entity import PrivilegeEntity
    from entity.profile_entity import ProfileEntity
    from entity.provider_setting_entity import ProviderSettingEntity
    from entity.provider_settings_write_entity import ProviderSettingsWriteEntity
    from entity.python_entity import PythonEntity
    from entity.quarantine_entity import QuarantineEntity
    from entity.quota_entity import QuotaEntity
    from entity.raw_entity import RawEntity
    from entity.refresh_entity import RefreshEntity
    from entity.regenerate_entity import RegenerateEntity
    from entity.repo_entity import RepoEntity
    from entity.repository_audit_log_entity import RepositoryAuditLogEntity
    from entity.repository_ecdsa_key_entity import RepositoryEcdsaKeyEntity
    from entity.repository_geo_ip_rule_entity import RepositoryGeoIpRuleEntity
    from entity.repository_geo_ip_status_entity import RepositoryGeoIpStatusEntity
    from entity.repository_geo_ip_test_address_entity import RepositoryGeoIpTestAddressEntity
    from entity.repository_gpg_key_entity import RepositoryGpgKeyEntity
    from entity.repository_privilege_input_entity import RepositoryPrivilegeInputEntity
    from entity.repository_retention_rule_entity import RepositoryRetentionRuleEntity
    from entity.repository_rsa_key_entity import RepositoryRsaKeyEntity
    from entity.repository_token_entity import RepositoryTokenEntity
    from entity.repository_token_refresh_entity import RepositoryTokenRefreshEntity
    from entity.repository_token_sync_entity import RepositoryTokenSyncEntity
    from entity.repository_webhook_entity import RepositoryWebhookEntity
    from entity.repository_x509_ecdsa_certificate_entity import RepositoryX509EcdsaCertificateEntity
    from entity.repository_x509_rsa_certificate_entity import RepositoryX509RsaCertificateEntity
    from entity.reset_entity import ResetEntity
    from entity.resources_rate_check_entity import ResourcesRateCheckEntity
    from entity.resync_entity import ResyncEntity
    from entity.retention_entity import RetentionEntity
    from entity.rpm_entity import RpmEntity
    from entity.rsa_entity import RsaEntity
    from entity.ruby_entity import RubyEntity
    from entity.saml_group_sync_entity import SamlGroupSyncEntity
    from entity.scan_entity import ScanEntity
    from entity.self_entity import SelfEntity
    from entity.service_entity import ServiceEntity
    from entity.status_entity import StatusEntity
    from entity.status_basic_entity import StatusBasicEntity
    from entity.storage_region_entity import StorageRegionEntity
    from entity.swift_entity import SwiftEntity
    from entity.sync_entity import SyncEntity
    from entity.tag_entity import TagEntity
    from entity.team_entity import TeamEntity
    from entity.terraform_entity import TerraformEntity
    from entity.test_entity import TestEntity
    from entity.token_entity import TokenEntity
    from entity.transfer_region_entity import TransferRegionEntity
    from entity.user_entity import UserEntity
    from entity.user_auth_token_entity import UserAuthTokenEntity
    from entity.user_authentication_token_entity import UserAuthenticationTokenEntity
    from entity.user_brief_entity import UserBriefEntity
    from entity.user_profile_entity import UserProfileEntity
    from entity.vagrant_entity import VagrantEntity
    from entity.validate_entity import ValidateEntity
    from entity.version_entity import VersionEntity
    from entity.vulnerability_entity import VulnerabilityEntity
    from entity.vulnerability_policy_entity import VulnerabilityPolicyEntity
    from entity.webhook_entity import WebhookEntity
    from entity.x509_ecdsa_entity import X509EcdsaEntity
    from entity.x509_rsa_entity import X509RsaEntity
