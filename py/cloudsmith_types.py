# Typed models for the Cloudsmith SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Abort(TypedDict):
    pass


class Alpine(TypedDict):
    pass


class AuditLog(TypedDict):
    pass


class Basic(TypedDict):
    pass


class CargoRequired(TypedDict):
    name: str
    upstream_url: str


class Cargo(CargoRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class CargoLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class CargoListMatch(TypedDict):
    identifier: Any
    owner: Any


class CargoCreateData(TypedDict):
    identifier: Any
    owner: Any


class CargoUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class Cocoapod(TypedDict):
    pass


class Complete(TypedDict):
    pass


class ComposerRequired(TypedDict):
    name: str
    upstream_url: str


class Composer(ComposerRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class ComposerLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class ComposerListMatch(TypedDict):
    identifier: Any
    owner: Any


class ComposerCreateData(TypedDict):
    identifier: Any
    owner: Any


class ComposerUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class Conan(TypedDict):
    pass


class CondaRequired(TypedDict):
    name: str
    upstream_url: str


class Conda(CondaRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class CondaLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class CondaListMatch(TypedDict):
    identifier: Any
    owner: Any


class CondaCreateData(TypedDict):
    identifier: Any
    owner: Any


class CondaUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class Copy(TypedDict):
    pass


class CranRequired(TypedDict):
    name: str
    upstream_url: str


class Cran(CranRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class CranLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class CranListMatch(TypedDict):
    identifier: Any
    owner: Any


class CranCreateData(TypedDict):
    identifier: Any
    owner: Any


class CranUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class DartRequired(TypedDict):
    name: str
    upstream_url: str


class Dart(DartRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class DartLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class DartListMatch(TypedDict):
    identifier: Any
    owner: Any


class DartCreateData(TypedDict):
    identifier: Any
    owner: Any


class DartUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class DebRequired(TypedDict):
    distro_version: list
    name: str
    upstream_url: str


class Deb(DebRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    component: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    gpg_key_inline: str
    gpg_key_url: str
    gpg_verification: str
    include_source: bool
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_distribution: str
    verification_status: str
    verify_ssl: bool


class DebLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class DebListMatch(TypedDict):
    identifier: Any
    owner: Any


class DebCreateData(TypedDict):
    identifier: Any
    owner: Any


class DebUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class DenyPolicy(TypedDict):
    pass


class Dependency(TypedDict):
    pass


class Disable(TypedDict):
    pass


class DistributionFullRequired(TypedDict):
    name: str


class DistributionFull(DistributionFullRequired, total=False):
    format: str
    format_url: str
    self_url: str
    slug: str
    variant: str
    version: list


class DistributionFullLoadMatch(TypedDict):
    slug: str


class DistributionFullListMatch(TypedDict, total=False):
    format: str
    format_url: str
    name: str
    self_url: str
    slug: str
    variant: str
    version: list


class Distro(TypedDict):
    pass


class DockerRequired(TypedDict):
    name: str
    upstream_url: str


class Docker(DockerRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class DockerLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class DockerListMatch(TypedDict):
    identifier: Any
    owner: Any


class DockerCreateData(TypedDict):
    identifier: Any
    owner: Any


class DockerUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class DynamicMapping(TypedDict):
    claim_value: str
    service_account: str


class DynamicMappingLoadMatch(TypedDict):
    id: str
    openid_connect_id: str
    org_id: str


class DynamicMappingListMatch(TypedDict):
    org_id: str
    provider_setting: Any


class Ecdsa(TypedDict):
    pass


class Enable(TypedDict):
    pass


class Entitlement(TypedDict):
    token: dict


class EntitlementLoadMatch(TypedDict, total=False):
    owner: Any
    repo: Any
    id: str


class EntitlementCreateData(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class EntitlementRemoveMatch(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class Evaluation(TypedDict):
    pass


class File(TypedDict):
    pass


class FileCreateDataRequired(TypedDict):
    owner: Any
    repo: Any


class FileCreateData(FileCreateDataRequired, total=False):
    identifier: Any


class FormatRequired(TypedDict):
    description: str
    extension: list
    name: str
    premium: bool
    slug: str
    support: dict


class Format(FormatRequired, total=False):
    distribution: list
    premium_plan_id: str
    premium_plan_name: str


class FormatLoadMatch(TypedDict):
    id: str


class FormatListMatch(TypedDict, total=False):
    description: str
    distribution: list
    extension: list
    name: str
    premium: bool
    premium_plan_id: str
    premium_plan_name: str
    slug: str
    support: dict


class Geoip(TypedDict):
    pass


class Gon(TypedDict):
    pass


class Gon2(TypedDict):
    pass


class Gon3Required(TypedDict):
    name: str
    upstream_url: str


class Gon3(Gon3Required, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class Gon3ListMatch(TypedDict):
    identifier: Any
    owner: Any


class Gon4(TypedDict):
    pass


class Gon5(TypedDict):
    pass


class Gon5CreateData(TypedDict):
    identifier: Any
    owner: Any


class Gon6Required(TypedDict):
    name: str
    upstream_url: str


class Gon6(Gon6Required, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class Gon6LoadMatch(TypedDict):
    identifier: Any
    owner: Any
    slug_perm: Any


class Gon7(TypedDict):
    pass


class Gon8Required(TypedDict):
    name: str
    upstream_url: str


class Gon8(Gon8Required, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class Gon8UpdateData(TypedDict):
    identifier: Any
    owner: Any
    slug_perm: Any


class Gon9Required(TypedDict):
    name: str
    upstream_url: str


class Gon9(Gon9Required, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class Gon9UpdateData(TypedDict):
    identifier: Any
    owner: Any
    slug_perm: Any


class Gpg(TypedDict):
    pass


class Group(TypedDict):
    pass


class HelmRequired(TypedDict):
    name: str
    upstream_url: str


class Helm(HelmRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class HelmLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class HelmListMatch(TypedDict):
    identifier: Any
    owner: Any


class HelmCreateData(TypedDict):
    identifier: Any
    owner: Any


class HelmUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class HexRequired(TypedDict):
    name: str
    upstream_url: str


class Hex(HexRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class HexLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class HexListMatch(TypedDict):
    identifier: Any
    owner: Any


class HexCreateData(TypedDict):
    identifier: Any
    owner: Any


class HexUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class History(TypedDict):
    pass


class HuggingfaceRequired(TypedDict):
    name: str
    upstream_url: str


class Huggingface(HuggingfaceRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class HuggingfaceLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class HuggingfaceListMatch(TypedDict):
    identifier: Any
    owner: Any


class HuggingfaceCreateData(TypedDict):
    identifier: Any
    owner: Any


class HuggingfaceUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class Info(TypedDict):
    pass


class Invite(TypedDict):
    pass


class LicensePolicy(TypedDict):
    pass


class Limit(TypedDict):
    pass


class Luarock(TypedDict):
    pass


class MavenRequired(TypedDict):
    name: str
    upstream_url: str


class Maven(MavenRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    gpg_key_inline: str
    gpg_key_url: str
    gpg_verification: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verification_status: str
    verify_ssl: bool


class MavenLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class MavenListMatch(TypedDict):
    identifier: Any
    owner: Any


class MavenCreateData(TypedDict):
    identifier: Any
    owner: Any


class MavenUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class Member(TypedDict):
    pass


class Move(TypedDict):
    pass


class Namespace(TypedDict, total=False):
    name: str
    slug: str
    slug_perm: str
    type_name: str


class NamespaceLoadMatch(TypedDict):
    id: str


class NamespaceListMatch(TypedDict, total=False):
    name: str
    slug: str
    slug_perm: str
    type_name: str


class NamespaceAuditLogRequired(TypedDict):
    actor: str
    actor_ip_address: str
    actor_location: dict
    actor_slug_perm: str
    context: str
    event: str
    event_at: str
    object: str
    object_kind: str
    object_slug_perm: str
    target: str
    target_kind: str


class NamespaceAuditLog(NamespaceAuditLogRequired, total=False):
    actor_kind: str
    actor_url: str
    target_slug_perm: str
    uuid: str


class NamespaceAuditLogLoadMatch(TypedDict):
    id: str


class NpmRequired(TypedDict):
    name: str
    upstream_url: str


class Npm(NpmRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class NpmLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class NpmListMatch(TypedDict):
    identifier: Any
    owner: Any


class NpmCreateData(TypedDict):
    identifier: Any
    owner: Any


class NpmUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class NugetRequired(TypedDict):
    name: str
    upstream_url: str


class Nuget(NugetRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class NugetLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class NugetListMatch(TypedDict):
    identifier: Any
    owner: Any


class NugetCreateData(TypedDict):
    identifier: Any
    owner: Any


class NugetUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class OpenidConnect(TypedDict):
    pass


class OrgRequired(TypedDict):
    name: str
    package: dict
    policy: dict
    reason: list
    vulnerability_scan_result: dict


class Org(OrgRequired, total=False):
    country: str
    created_at: str
    event_at: str
    location: str
    slug: str
    slug_perm: str
    tagline: str


class OrgLoadMatchRequired(TypedDict):
    id: str


class OrgLoadMatch(OrgLoadMatchRequired, total=False):
    member_id: str


class OrgListMatch(TypedDict, total=False):
    country: str
    created_at: str
    event_at: str
    location: str
    name: str
    package: dict
    policy: dict
    reason: list
    slug: str
    slug_perm: str
    tagline: str
    vulnerability_scan_result: dict


class OrgCreateDataRequired(TypedDict):
    id: str


class OrgCreateData(OrgCreateDataRequired, total=False):
    member_id: str


class OrgUpdateData(TypedDict):
    id: str
    team_id: str


class OrgRemoveMatchRequired(TypedDict):
    id: str


class OrgRemoveMatch(OrgRemoveMatchRequired, total=False):
    member: Any
    service: Any
    slug_perm: Any
    team: Any


class OrganizationGroupSyncRequired(TypedDict):
    idp_key: str
    idp_value: str
    team: str


class OrganizationGroupSync(OrganizationGroupSyncRequired, total=False):
    role: str
    slug_perm: str


class OrganizationGroupSyncListMatch(TypedDict):
    org_id: str


class OrganizationGroupSyncCreateData(TypedDict):
    org_id: str


class OrganizationGroupSyncStatus(TypedDict, total=False):
    saml_group_sync_status: bool


class OrganizationGroupSyncStatusLoadMatch(TypedDict):
    org_id: str


class OrganizationInvite(TypedDict, total=False):
    email: str
    expires_at: str
    inviter: str
    inviter_url: str
    org: str
    role: str
    slug_perm: str
    team: list
    user: str
    user_url: str


class OrganizationInviteListMatch(TypedDict):
    org_id: str


class OrganizationInviteCreateData(TypedDict):
    org_id: str


class OrganizationInviteUpdateData(TypedDict):
    id: str
    org_id: str


class OrganizationInviteExtend(TypedDict, total=False):
    email: str
    expires_at: str
    inviter: str
    inviter_url: str
    org: str
    role: str
    slug_perm: str
    team: list
    user: str
    user_url: str


class OrganizationInviteExtendCreateData(TypedDict):
    org_id: str
    slug_perm: Any


class OrganizationMembership(TypedDict, total=False):
    email: str
    has_two_factor: bool
    is_active: bool
    joined_at: str
    last_login_at: str
    last_login_method: str
    role: str
    user: str
    user_id: str
    user_name: str
    user_url: str
    visibility: str


class OrganizationMembershipLoadMatch(TypedDict):
    member: Any
    org_id: str


class OrganizationMembershipListMatch(TypedDict):
    org_id: str


class OrganizationMembershipUpdateData(TypedDict):
    member: Any
    org_id: str


class OrganizationMembershipRoleUpdate(TypedDict, total=False):
    email: str
    has_two_factor: bool
    joined_at: str
    last_login_at: str
    last_login_method: str
    role: str
    user: str
    user_id: str
    user_name: str
    user_url: str
    visibility: str


class OrganizationMembershipRoleUpdateUpdateData(TypedDict):
    member_id: str
    org_id: str


class OrganizationMembershipVisibilityUpdate(TypedDict, total=False):
    email: str
    has_two_factor: bool
    joined_at: str
    last_login_at: str
    last_login_method: str
    role: str
    user: str
    user_id: str
    user_name: str
    user_url: str
    visibility: str


class OrganizationMembershipVisibilityUpdateUpdateData(TypedDict):
    member_id: str
    org_id: str


class OrganizationPackageLicensePolicyRequired(TypedDict):
    name: str
    spdx_identifier: list


class OrganizationPackageLicensePolicy(OrganizationPackageLicensePolicyRequired, total=False):
    allow_unknown_license: bool
    created_at: str
    description: str
    on_violation_quarantine: bool
    package_query_string: str
    slug_perm: str
    updated_at: str


class OrganizationPackageLicensePolicyLoadMatch(TypedDict):
    id: str
    org_id: str


class OrganizationPackageLicensePolicyListMatch(TypedDict):
    org_id: str


class OrganizationPackageLicensePolicyCreateData(TypedDict):
    org_id: str


class OrganizationPackageLicensePolicyUpdateData(TypedDict):
    id: str
    org_id: str


class OrganizationPackageVulnerabilityPolicyRequired(TypedDict):
    name: str


class OrganizationPackageVulnerabilityPolicy(OrganizationPackageVulnerabilityPolicyRequired, total=False):
    allow_unknown_severity: bool
    created_at: str
    description: str
    min_severity: str
    on_violation_quarantine: bool
    package_query_string: str
    slug_perm: str
    updated_at: str


class OrganizationPackageVulnerabilityPolicyLoadMatch(TypedDict):
    id: str
    org_id: str


class OrganizationPackageVulnerabilityPolicyListMatch(TypedDict):
    org_id: str


class OrganizationPackageVulnerabilityPolicyCreateData(TypedDict):
    org_id: str


class OrganizationPackageVulnerabilityPolicyUpdateData(TypedDict):
    id: str
    org_id: str


class OrganizationSamlAuthRequired(TypedDict):
    saml_auth_enabled: bool
    saml_auth_enforced: bool


class OrganizationSamlAuth(OrganizationSamlAuthRequired, total=False):
    saml_metadata_inline: str
    saml_metadata_url: str


class OrganizationSamlAuthLoadMatch(TypedDict):
    org_id: str


class OrganizationSamlAuthUpdateData(TypedDict):
    org_id: str


class OrganizationTeamRequired(TypedDict):
    name: str


class OrganizationTeam(OrganizationTeamRequired, total=False):
    description: str
    slug: str
    slug_perm: str
    visibility: str


class OrganizationTeamLoadMatch(TypedDict):
    id: str
    org_id: str


class OrganizationTeamListMatch(TypedDict):
    org_id: str


class OrganizationTeamCreateData(TypedDict):
    org_id: str


class OrganizationTeamUpdateData(TypedDict):
    id: str
    org_id: str


class OrganizationTeamMember(TypedDict):
    role: str
    user: str


class OrganizationTeamMemberListMatch(TypedDict):
    org_id: str
    team_id: str


class OrganizationTeamMemberCreateData(TypedDict):
    org_id: str
    team_id: str


class Oss(TypedDict):
    pass


class P2n(TypedDict):
    pass


class P2n2(TypedDict):
    pass


class PackageRequired(TypedDict):
    count: int
    distro: dict
    last_push: str
    num_download: int
    package: dict


class Package(PackageRequired, total=False):
    architecture: list
    backend_kind: int
    cdn_url: str
    checksum_md5: str
    checksum_sha1: str
    checksum_sha256: str
    checksum_sha512: str
    dep_type: str
    dependencies_checksum_md5: str
    dependencies_url: str
    description: str
    display_name: str
    distro_version: dict
    download: int
    epoch: int
    extension: str
    file: list
    filename: str
    format: str
    format_url: str
    freeable_storage: int
    fully_qualified_name: str
    identifier: dict
    identifier_perm: str
    indexed: bool
    is_cancellable: bool
    is_copyable: bool
    is_deleteable: bool
    is_downloadable: bool
    is_moveable: bool
    is_quarantinable: bool
    is_quarantined: bool
    is_resyncable: bool
    is_security_scannable: bool
    is_sync_awaiting: bool
    is_sync_completed: bool
    is_sync_failed: bool
    is_sync_in_flight: bool
    is_sync_in_progress: bool
    license: str
    name: str
    namespace: str
    namespace_url: str
    num_file: int
    operator: str
    origin_repository: str
    origin_repository_url: str
    package_type: int
    policy_violated: bool
    release: str
    repository: str
    repository_url: str
    security_scan_completed_at: str
    security_scan_started_at: str
    security_scan_status: str
    security_scan_status_updated_at: str
    self_html_url: str
    self_url: str
    signature_url: str
    size: int
    slug: str
    slug_perm: str
    stage: int
    stage_str: str
    stage_updated_at: str
    status: int
    status_reason: str
    status_str: str
    status_updated_at: str
    status_url: str
    subtype: str
    summary: str
    sync_finished_at: str
    sync_progress: int
    tag: dict
    tags_immutable: dict
    type_display: str
    uploaded_at: str
    uploader: str
    uploader_url: str
    version: str
    version_orig: str
    vulnerability_scan_results_url: str


class PackageLoadMatchRequired(TypedDict):
    owner: Any
    repo: Any


class PackageLoadMatch(PackageLoadMatchRequired, total=False):
    identifier: Any


class PackageListMatchRequired(TypedDict):
    owner: Any
    repo: Any


class PackageListMatch(PackageListMatchRequired, total=False):
    identifier: Any


class PackageCreateDataRequired(TypedDict):
    owner: Any
    repo: Any


class PackageCreateData(PackageCreateDataRequired, total=False):
    identifier: Any


class PackageRemoveMatch(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class PackageDenyPolicyRequired(TypedDict):
    package_query_string: str


class PackageDenyPolicy(PackageDenyPolicyRequired, total=False):
    action: str
    created_at: str
    description: str
    enabled: bool
    name: str
    slug_perm: str
    status: str
    updated_at: str


class PackageDenyPolicyLoadMatch(TypedDict):
    id: str
    org_id: str


class PackageDenyPolicyListMatch(TypedDict):
    org_id: str


class PackageDenyPolicyCreateData(TypedDict):
    org_id: str


class PackageDenyPolicyUpdateData(TypedDict):
    id: str
    org_id: str


class PackageFilePartsUpload(TypedDict, total=False):
    identifier: str
    upload_querystring: str
    upload_url: str


class PackageFilePartsUploadLoadMatch(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class PackageFileUpload(TypedDict):
    pass


class PackageFileUploadCreateData(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class PackageLicensePolicyEvaluationRequired(TypedDict):
    policy: dict


class PackageLicensePolicyEvaluation(PackageLicensePolicyEvaluationRequired, total=False):
    created_at: str
    evaluation_count: int
    slug_perm: str
    status: str
    updated_at: str
    violation_count: int


class PackageLicensePolicyEvaluationLoadMatch(TypedDict):
    id: str
    license_policy_id: str
    org_id: str


class PackageLicensePolicyEvaluationListMatch(TypedDict):
    org_id: str
    policy_slug_perm: Any


class PackageLicensePolicyEvaluationCreateData(TypedDict):
    org_id: str
    policy_slug_perm: Any


class PackageVersionBadge(TypedDict):
    pass


class PackageVersionBadgeLoadMatch(TypedDict):
    owner: Any
    package_format: Any
    package_identifier: Any
    package_name: Any
    package_version: Any
    repo: Any


class PackageVulnerabilityPolicyEvaluation(TypedDict, total=False):
    created_at: str
    evaluation_count: int
    policy: dict
    slug_perm: str
    status: str
    updated_at: str
    violation_count: int


class PackageVulnerabilityPolicyEvaluationLoadMatch(TypedDict):
    id: str
    org_id: str
    vulnerability_policy_id: str


class PackageVulnerabilityPolicyEvaluationListMatch(TypedDict):
    org_id: str
    policy_slug_perm: Any


class PackageVulnerabilityPolicyEvaluationCreateData(TypedDict):
    org_id: str
    policy_slug_perm: Any


class Privilege(TypedDict):
    pass


class Profile(TypedDict):
    pass


class ProviderSettingRequired(TypedDict):
    claim: dict
    enabled: bool
    name: str
    provider_url: str


class ProviderSetting(ProviderSettingRequired, total=False):
    mapping_claim: str
    service_account: list
    slug: str
    slug_perm: str


class ProviderSettingLoadMatch(TypedDict):
    org_id: str
    slug_perm: Any


class ProviderSettingListMatch(TypedDict):
    org_id: str


class ProviderSettingsWriteRequired(TypedDict):
    claim: dict
    enabled: bool
    name: str
    provider_url: str


class ProviderSettingsWrite(ProviderSettingsWriteRequired, total=False):
    dynamic_mapping: list
    mapping_claim: str
    service_account: list
    slug: str
    slug_perm: str


class ProviderSettingsWriteCreateData(TypedDict):
    org_id: str


class ProviderSettingsWriteUpdateData(TypedDict):
    org_id: str
    slug_perm: Any


class PythonRequired(TypedDict):
    name: str
    upstream_url: str


class Python(PythonRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class PythonLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class PythonListMatch(TypedDict):
    identifier: Any
    owner: Any


class PythonCreateData(TypedDict):
    identifier: Any
    owner: Any


class PythonUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class Quarantine(TypedDict):
    pass


class Quota(TypedDict):
    history: list
    usage: dict


class QuotaLoadMatch(TypedDict, total=False):
    id: str
    owner: Any


class Raw(TypedDict):
    pass


class Refresh(TypedDict):
    pass


class Regenerate(TypedDict):
    pass


class RepoRequired(TypedDict):
    name: str


class Repo(RepoRequired, total=False):
    cdn_url: str
    content_kind: str
    contextual_auth_realm: bool
    copy_own: bool
    copy_package: str
    cosign_signing_enabled: bool
    created_at: str
    default_privilege: str
    delete_own: bool
    delete_package: str
    deleted_at: str
    description: str
    distribute: list
    docker_refresh_tokens_enabled: bool
    ecdsa_key: list
    enforce_eula: bool
    gpg_key: list
    index_file: bool
    is_open_source: bool
    is_private: bool
    is_public: bool
    manage_entitlements_privilege: str
    move_own: bool
    move_package: str
    namespace: str
    namespace_url: str
    nuget_native_signing_enabled: bool
    num_download: int
    num_policy_violated_package: int
    num_quarantined_package: int
    open_source_license: str
    open_source_project_url: str
    package_count: int
    package_group_count: int
    proxy_npmj: bool
    proxy_pypi: bool
    raw_package_index_enabled: bool
    raw_package_index_signatures_enabled: bool
    replace_package: str
    replace_packages_by_default: bool
    repository_type: int
    repository_type_str: str
    resync_own: bool
    resync_package: str
    scan_own: bool
    scan_package: str
    self_html_url: str
    self_url: str
    show_setup_all: bool
    size: int
    size_str: str
    slug: str
    slug_perm: str
    storage_region: str
    strict_npm_validation: bool
    tag_pre_releases_as_latest: bool
    use_debian_label: bool
    use_default_cargo_upstream: bool
    use_entitlements_privilege: str
    use_noarch_package: bool
    use_source_package: bool
    use_vulnerability_scanning: bool
    user_entitlements_enabled: bool
    view_statistic: str


class RepoLoadMatch(TypedDict):
    id: str


class RepoListMatch(TypedDict, total=False):
    identifier: Any
    owner: Any


class RepoCreateData(TypedDict, total=False):
    identifier: Any
    owner: Any
    id: str


class RepoUpdateData(TypedDict):
    identifier: Any
    owner: Any


class RepoRemoveMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class RepoRemoveMatch(RepoRemoveMatchRequired, total=False):
    slug_perm: Any


class RepositoryAuditLogRequired(TypedDict):
    actor: str
    actor_ip_address: str
    actor_location: dict
    actor_slug_perm: str
    context: str
    event: str
    event_at: str
    object: str
    object_kind: str
    object_slug_perm: str


class RepositoryAuditLog(RepositoryAuditLogRequired, total=False):
    actor_kind: str
    actor_url: str
    uuid: str


class RepositoryAuditLogListMatch(TypedDict):
    owner: Any
    repo: Any


class RepositoryEcdsaKey(TypedDict, total=False):
    active: bool
    created_at: str
    default: bool
    fingerprint: str
    fingerprint_short: str
    public_key: str
    ssh_fingerprint: str


class RepositoryEcdsaKeyLoadMatch(TypedDict):
    identifier: Any
    owner: Any


class RepositoryEcdsaKeyCreateData(TypedDict):
    identifier: Any
    owner: Any


class RepositoryGeoIpRule(TypedDict):
    cidr: dict
    country_code: dict


class RepositoryGeoIpRuleLoadMatch(TypedDict):
    identifier: Any
    owner: Any


class RepositoryGeoIpRuleUpdateData(TypedDict):
    identifier: Any
    owner: Any


class RepositoryGeoIpStatus(TypedDict, total=False):
    geoip_enabled: bool


class RepositoryGeoIpStatusLoadMatch(TypedDict):
    identifier: Any
    owner: Any


class RepositoryGeoIpTestAddress(TypedDict):
    pass


class RepositoryGeoIpTestAddressCreateData(TypedDict):
    identifier: Any
    owner: Any


class RepositoryGpgKeyRequired(TypedDict):
    comment: str


class RepositoryGpgKey(RepositoryGpgKeyRequired, total=False):
    active: bool
    created_at: str
    default: bool
    fingerprint: str
    fingerprint_short: str
    public_key: str


class RepositoryGpgKeyLoadMatch(TypedDict):
    identifier: Any
    owner: Any


class RepositoryGpgKeyCreateData(TypedDict):
    identifier: Any
    owner: Any


class RepositoryPrivilegeInputRequired(TypedDict):
    privilege: str


class RepositoryPrivilegeInput(RepositoryPrivilegeInputRequired, total=False):
    service: str
    team: str
    user: str


class RepositoryPrivilegeInputListMatch(TypedDict):
    identifier: Any
    owner: Any


class RepositoryRetentionRule(TypedDict, total=False):
    retention_count_limit: int
    retention_days_limit: int
    retention_enabled: bool
    retention_group_by_format: bool
    retention_group_by_name: bool
    retention_group_by_package_type: bool
    retention_package_query_string: str
    retention_size_limit: int


class RepositoryRetentionRuleLoadMatch(TypedDict):
    owner: Any
    repo: Any


class RepositoryRetentionRuleUpdateData(TypedDict):
    owner: Any
    repo: Any


class RepositoryRsaKey(TypedDict, total=False):
    active: bool
    created_at: str
    default: bool
    fingerprint: str
    fingerprint_short: str
    public_key: str
    ssh_fingerprint: str


class RepositoryRsaKeyLoadMatch(TypedDict):
    identifier: Any
    owner: Any


class RepositoryRsaKeyCreateData(TypedDict):
    identifier: Any
    owner: Any


class RepositoryTokenRequired(TypedDict):
    name: str


class RepositoryToken(RepositoryTokenRequired, total=False):
    client: int
    created_at: str
    created_by: str
    created_by_url: str
    default: bool
    disable_url: str
    download: int
    enable_url: str
    eula_accepted: dict
    eula_accepted_at: str
    eula_accepted_from: str
    eula_required: bool
    has_limit: bool
    identifier: int
    is_active: bool
    is_limited: bool
    limit_bandwidth: int
    limit_bandwidth_unit: str
    limit_date_range_from: str
    limit_date_range_to: str
    limit_num_client: int
    limit_num_download: int
    limit_package_query: str
    limit_path_query: str
    metadata: dict
    refresh_url: str
    reset_url: str
    scheduled_reset_at: str
    scheduled_reset_period: str
    self_url: str
    slug_perm: str
    token: str
    updated_at: str
    updated_by: str
    updated_by_url: str
    usage: str
    user: str
    user_url: str


class RepositoryTokenLoadMatch(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class RepositoryTokenListMatch(TypedDict):
    owner: Any
    repo: Any


class RepositoryTokenCreateData(TypedDict):
    owner: Any
    repo: Any


class RepositoryTokenUpdateData(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class RepositoryTokenRefresh(TypedDict, total=False):
    client: int
    created_at: str
    created_by: str
    created_by_url: str
    default: bool
    disable_url: str
    download: int
    enable_url: str
    eula_accepted: dict
    eula_accepted_at: str
    eula_accepted_from: str
    eula_required: bool
    has_limit: bool
    identifier: int
    is_active: bool
    is_limited: bool
    limit_bandwidth: int
    limit_bandwidth_unit: str
    limit_date_range_from: str
    limit_date_range_to: str
    limit_num_client: int
    limit_num_download: int
    limit_package_query: str
    limit_path_query: str
    metadata: dict
    name: str
    refresh_url: str
    reset_url: str
    scheduled_reset_at: str
    scheduled_reset_period: str
    self_url: str
    slug_perm: str
    token: str
    updated_at: str
    updated_by: str
    updated_by_url: str
    usage: str
    user: str
    user_url: str


class RepositoryTokenRefreshCreateData(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class RepositoryTokenSync(TypedDict, total=False):
    token: list


class RepositoryTokenSyncCreateData(TypedDict):
    owner: Any
    repo: Any


class RepositoryWebhookRequired(TypedDict):
    event: list
    target_url: str
    template: list


class RepositoryWebhook(RepositoryWebhookRequired, total=False):
    created_at: str
    created_by: str
    created_by_url: str
    disable_reason: int
    disable_reason_str: str
    identifier: int
    is_active: bool
    is_last_response_bad: bool
    last_response_status: int
    last_response_status_str: str
    num_sent: int
    package_query: str
    request_body_format: int
    request_body_format_str: str
    request_body_template_format: int
    request_body_template_format_str: str
    request_content_type: str
    secret_header: str
    self_url: str
    slug_perm: str
    updated_at: str
    updated_by: str
    updated_by_url: str
    verify_ssl: bool


class RepositoryWebhookListMatchRequired(TypedDict):
    owner: Any
    repo: Any


class RepositoryWebhookListMatch(RepositoryWebhookListMatchRequired, total=False):
    identifier: Any


class RepositoryWebhookCreateData(TypedDict):
    owner: Any
    repo: Any


class RepositoryWebhookUpdateData(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class RepositoryX509EcdsaCertificate(TypedDict, total=False):
    active: bool
    certificate: str
    certificate_chain: str
    certificate_chain_fingerprint: str
    certificate_chain_fingerprint_short: str
    certificate_fingerprint: str
    certificate_fingerprint_short: str
    created_at: str
    default: bool
    issuing_status: str


class RepositoryX509EcdsaCertificateLoadMatch(TypedDict):
    identifier: Any
    owner: Any


class RepositoryX509RsaCertificate(TypedDict, total=False):
    active: bool
    certificate: str
    certificate_chain: str
    certificate_chain_fingerprint: str
    certificate_chain_fingerprint_short: str
    certificate_fingerprint: str
    certificate_fingerprint_short: str
    created_at: str
    default: bool
    issuing_status: str


class RepositoryX509RsaCertificateLoadMatch(TypedDict):
    identifier: Any
    owner: Any


class Reset(TypedDict):
    pass


class ResourcesRateCheck(TypedDict, total=False):
    resource: dict


class ResourcesRateCheckLoadMatch(TypedDict, total=False):
    resource: dict


class Resync(TypedDict):
    pass


class Retention(TypedDict):
    pass


class RpmRequired(TypedDict):
    distro_version: str
    name: str
    upstream_url: str


class Rpm(RpmRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    gpg_key_inline: str
    gpg_key_url: str
    gpg_verification: str
    include_source: bool
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verification_status: str
    verify_ssl: bool


class RpmLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class RpmListMatch(TypedDict):
    identifier: Any
    owner: Any


class RpmCreateData(TypedDict):
    identifier: Any
    owner: Any


class RpmUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class Rsa(TypedDict):
    pass


class RubyRequired(TypedDict):
    name: str
    upstream_url: str


class Ruby(RubyRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class RubyLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class RubyListMatch(TypedDict):
    identifier: Any
    owner: Any


class RubyCreateData(TypedDict):
    identifier: Any
    owner: Any


class RubyUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class SamlGroupSync(TypedDict):
    pass


class Scan(TypedDict):
    pass


class Self(TypedDict):
    pass


class ServiceRequired(TypedDict):
    name: str


class Service(ServiceRequired, total=False):
    created_at: str
    created_by: str
    created_by_url: str
    description: str
    key: str
    key_expires_at: str
    role: str
    slug: str
    team: list


class ServiceLoadMatch(TypedDict):
    id: str
    org_id: str


class ServiceListMatch(TypedDict):
    org_id: str


class ServiceCreateData(TypedDict):
    org_id: str


class ServiceUpdateData(TypedDict):
    id: str
    org_id: str


class Status(TypedDict):
    pass


class StatusBasic(TypedDict, total=False):
    detail: str
    version: str


class StatusBasicLoadMatch(TypedDict, total=False):
    detail: str
    version: str


class StorageRegion(TypedDict):
    label: str
    slug: str


class StorageRegionLoadMatch(TypedDict):
    id: str


class StorageRegionListMatch(TypedDict, total=False):
    label: str
    slug: str


class SwiftRequired(TypedDict):
    name: str
    upstream_url: str


class Swift(SwiftRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class SwiftLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class SwiftListMatch(TypedDict):
    identifier: Any
    owner: Any


class SwiftCreateData(TypedDict):
    identifier: Any
    owner: Any


class SwiftUpdateData(TypedDict):
    id: str
    identifier: Any
    owner: Any


class Sync(TypedDict):
    pass


class Tag(TypedDict):
    pass


class Team(TypedDict):
    pass


class Terraform(TypedDict):
    pass


class Test(TypedDict):
    pass


class Token(TypedDict):
    pass


class TransferRegion(TypedDict):
    pass


class User(TypedDict, total=False):
    created: str
    key: str
    slug_perm: str


class UserListMatch(TypedDict, total=False):
    created: str
    key: str
    slug_perm: str


class UserAuthToken(TypedDict):
    pass


class UserAuthTokenCreateData(TypedDict):
    pass


class UserAuthenticationToken(TypedDict, total=False):
    created: str
    key: str
    slug_perm: str


class UserAuthenticationTokenCreateData(TypedDict, total=False):
    created: str
    key: str
    slug_perm: str


class UserAuthenticationTokenUpdateData(TypedDict):
    slug_perm: Any


class UserBrief(TypedDict, total=False):
    authenticated: bool
    email: str
    name: str
    profile_url: str
    self_url: str
    slug: str
    slug_perm: str


class UserBriefLoadMatch(TypedDict, total=False):
    authenticated: bool
    email: str
    name: str
    profile_url: str
    self_url: str
    slug: str
    slug_perm: str


class UserProfileRequired(TypedDict):
    first_name: str
    last_name: str


class UserProfile(UserProfileRequired, total=False):
    company: str
    job_title: str
    joined_at: str
    name: str
    slug: str
    slug_perm: str
    tagline: str
    url: str


class UserProfileLoadMatch(TypedDict):
    id: str


class Vagrant(TypedDict):
    pass


class Validate(TypedDict):
    pass


class Version(TypedDict):
    pass


class VulnerabilityRequired(TypedDict):
    identifier: str
    package: dict
    result: list
    scan_id: int
    target: str
    type: str


class Vulnerability(VulnerabilityRequired, total=False):
    created_at: str
    has_vulnerability: bool
    max_severity: str
    num_vulnerability: int


class VulnerabilityLoadMatch(TypedDict):
    id: str


class VulnerabilityListMatchRequired(TypedDict):
    owner: Any
    repo: Any


class VulnerabilityListMatch(VulnerabilityListMatchRequired, total=False):
    package: Any
    identifier: Any


class VulnerabilityPolicy(TypedDict):
    pass


class Webhook(TypedDict):
    pass


class WebhookRemoveMatch(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class X509Ecdsa(TypedDict):
    pass


class X509Rsa(TypedDict):
    pass
