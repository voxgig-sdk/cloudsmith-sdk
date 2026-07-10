-- Typed models for the Cloudsmith SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Abort

---@class Alpine

---@class AuditLog

---@class Basic

---@class Cargo
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class CargoLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class CargoListMatch
---@field identifier any
---@field owner any

---@class CargoCreateData
---@field identifier any
---@field owner any

---@class CargoUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class Cocoapod

---@class Complete

---@class Composer
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class ComposerLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class ComposerListMatch
---@field identifier any
---@field owner any

---@class ComposerCreateData
---@field identifier any
---@field owner any

---@class ComposerUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class Conan

---@class Conda
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class CondaLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class CondaListMatch
---@field identifier any
---@field owner any

---@class CondaCreateData
---@field identifier any
---@field owner any

---@class CondaUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class Copy

---@class Cran
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class CranLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class CranListMatch
---@field identifier any
---@field owner any

---@class CranCreateData
---@field identifier any
---@field owner any

---@class CranUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class Dart
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class DartLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class DartListMatch
---@field identifier any
---@field owner any

---@class DartCreateData
---@field identifier any
---@field owner any

---@class DartUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class Deb
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field component? string
---@field created_at? string
---@field disable_reason? string
---@field distro_version table
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field gpg_key_inline? string
---@field gpg_key_url? string
---@field gpg_verification? string
---@field include_source? boolean
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_distribution? string
---@field upstream_url string
---@field verification_status? string
---@field verify_ssl? boolean

---@class DebLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class DebListMatch
---@field identifier any
---@field owner any

---@class DebCreateData
---@field identifier any
---@field owner any

---@class DebUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class DenyPolicy

---@class Dependency

---@class Disable

---@class DistributionFull
---@field format? string
---@field format_url? string
---@field name string
---@field self_url? string
---@field slug? string
---@field variant? string
---@field version? table

---@class DistributionFullLoadMatch
---@field slug string

---@class DistributionFullListMatch
---@field format? string
---@field format_url? string
---@field name? string
---@field self_url? string
---@field slug? string
---@field variant? string
---@field version? table

---@class Distro

---@class Docker
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class DockerLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class DockerListMatch
---@field identifier any
---@field owner any

---@class DockerCreateData
---@field identifier any
---@field owner any

---@class DockerUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class DynamicMapping
---@field claim_value string
---@field service_account string

---@class DynamicMappingLoadMatch
---@field id string
---@field openid_connect_id string
---@field org_id string

---@class DynamicMappingListMatch
---@field org_id string
---@field provider_setting any

---@class Ecdsa

---@class Enable

---@class Entitlement
---@field token table

---@class EntitlementLoadMatch
---@field owner? any
---@field repo? any
---@field id? string

---@class EntitlementCreateData
---@field identifier any
---@field owner any
---@field repo any

---@class EntitlementRemoveMatch
---@field identifier any
---@field owner any
---@field repo any

---@class Evaluation

---@class File

---@class FileCreateData
---@field identifier? any
---@field owner any
---@field repo any

---@class Format
---@field description string
---@field distribution? table
---@field extension table
---@field name string
---@field premium boolean
---@field premium_plan_id? string
---@field premium_plan_name? string
---@field slug string
---@field support table

---@class FormatLoadMatch
---@field id string

---@class FormatListMatch
---@field description? string
---@field distribution? table
---@field extension? table
---@field name? string
---@field premium? boolean
---@field premium_plan_id? string
---@field premium_plan_name? string
---@field slug? string
---@field support? table

---@class Geoip

---@class Gon

---@class Gon2

---@class Gon3
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class Gon3ListMatch
---@field identifier any
---@field owner any

---@class Gon4

---@class Gon5

---@class Gon5CreateData
---@field identifier any
---@field owner any

---@class Gon6
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class Gon6LoadMatch
---@field identifier any
---@field owner any
---@field slug_perm any

---@class Gon7

---@class Gon8
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class Gon8UpdateData
---@field identifier any
---@field owner any
---@field slug_perm any

---@class Gon9
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class Gon9UpdateData
---@field identifier any
---@field owner any
---@field slug_perm any

---@class Gpg

---@class Group

---@class Helm
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class HelmLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class HelmListMatch
---@field identifier any
---@field owner any

---@class HelmCreateData
---@field identifier any
---@field owner any

---@class HelmUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class Hex
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class HexLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class HexListMatch
---@field identifier any
---@field owner any

---@class HexCreateData
---@field identifier any
---@field owner any

---@class HexUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class History

---@class Huggingface
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class HuggingfaceLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class HuggingfaceListMatch
---@field identifier any
---@field owner any

---@class HuggingfaceCreateData
---@field identifier any
---@field owner any

---@class HuggingfaceUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class Info

---@class Invite

---@class LicensePolicy

---@class Limit

---@class Luarock

---@class Maven
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field gpg_key_inline? string
---@field gpg_key_url? string
---@field gpg_verification? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verification_status? string
---@field verify_ssl? boolean

---@class MavenLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class MavenListMatch
---@field identifier any
---@field owner any

---@class MavenCreateData
---@field identifier any
---@field owner any

---@class MavenUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class Member

---@class Move

---@class Namespace
---@field name? string
---@field slug? string
---@field slug_perm? string
---@field type_name? string

---@class NamespaceLoadMatch
---@field id string

---@class NamespaceListMatch
---@field name? string
---@field slug? string
---@field slug_perm? string
---@field type_name? string

---@class NamespaceAuditLog
---@field actor string
---@field actor_ip_address string
---@field actor_kind? string
---@field actor_location table
---@field actor_slug_perm string
---@field actor_url? string
---@field context string
---@field event string
---@field event_at string
---@field object string
---@field object_kind string
---@field object_slug_perm string
---@field target string
---@field target_kind string
---@field target_slug_perm? string
---@field uuid? string

---@class NamespaceAuditLogLoadMatch
---@field id string

---@class Npm
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class NpmLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class NpmListMatch
---@field identifier any
---@field owner any

---@class NpmCreateData
---@field identifier any
---@field owner any

---@class NpmUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class Nuget
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class NugetLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class NugetListMatch
---@field identifier any
---@field owner any

---@class NugetCreateData
---@field identifier any
---@field owner any

---@class NugetUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class OpenidConnect

---@class Org
---@field country? string
---@field created_at? string
---@field event_at? string
---@field location? string
---@field name string
---@field package table
---@field policy table
---@field reason table
---@field slug? string
---@field slug_perm? string
---@field tagline? string
---@field vulnerability_scan_result table

---@class OrgLoadMatch
---@field id string
---@field member_id? string

---@class OrgListMatch
---@field country? string
---@field created_at? string
---@field event_at? string
---@field location? string
---@field name? string
---@field package? table
---@field policy? table
---@field reason? table
---@field slug? string
---@field slug_perm? string
---@field tagline? string
---@field vulnerability_scan_result? table

---@class OrgCreateData
---@field id string
---@field member_id? string

---@class OrgUpdateData
---@field id string
---@field team_id string

---@class OrgRemoveMatch
---@field id string
---@field member? any
---@field service? any
---@field slug_perm? any
---@field team? any

---@class OrganizationGroupSync
---@field idp_key string
---@field idp_value string
---@field role? string
---@field slug_perm? string
---@field team string

---@class OrganizationGroupSyncListMatch
---@field org_id string

---@class OrganizationGroupSyncCreateData
---@field org_id string

---@class OrganizationGroupSyncStatus
---@field saml_group_sync_status? boolean

---@class OrganizationGroupSyncStatusLoadMatch
---@field org_id string

---@class OrganizationInvite
---@field email? string
---@field expires_at? string
---@field inviter? string
---@field inviter_url? string
---@field org? string
---@field role? string
---@field slug_perm? string
---@field team? table
---@field user? string
---@field user_url? string

---@class OrganizationInviteListMatch
---@field org_id string

---@class OrganizationInviteCreateData
---@field org_id string

---@class OrganizationInviteUpdateData
---@field id string
---@field org_id string

---@class OrganizationInviteExtend
---@field email? string
---@field expires_at? string
---@field inviter? string
---@field inviter_url? string
---@field org? string
---@field role? string
---@field slug_perm? string
---@field team? table
---@field user? string
---@field user_url? string

---@class OrganizationInviteExtendCreateData
---@field org_id string
---@field slug_perm any

---@class OrganizationMembership
---@field email? string
---@field has_two_factor? boolean
---@field is_active? boolean
---@field joined_at? string
---@field last_login_at? string
---@field last_login_method? string
---@field role? string
---@field user? string
---@field user_id? string
---@field user_name? string
---@field user_url? string
---@field visibility? string

---@class OrganizationMembershipLoadMatch
---@field member any
---@field org_id string

---@class OrganizationMembershipListMatch
---@field org_id string

---@class OrganizationMembershipUpdateData
---@field member any
---@field org_id string

---@class OrganizationMembershipRoleUpdate
---@field email? string
---@field has_two_factor? boolean
---@field joined_at? string
---@field last_login_at? string
---@field last_login_method? string
---@field role? string
---@field user? string
---@field user_id? string
---@field user_name? string
---@field user_url? string
---@field visibility? string

---@class OrganizationMembershipRoleUpdateUpdateData
---@field member_id string
---@field org_id string

---@class OrganizationMembershipVisibilityUpdate
---@field email? string
---@field has_two_factor? boolean
---@field joined_at? string
---@field last_login_at? string
---@field last_login_method? string
---@field role? string
---@field user? string
---@field user_id? string
---@field user_name? string
---@field user_url? string
---@field visibility? string

---@class OrganizationMembershipVisibilityUpdateUpdateData
---@field member_id string
---@field org_id string

---@class OrganizationPackageLicensePolicy
---@field allow_unknown_license? boolean
---@field created_at? string
---@field description? string
---@field name string
---@field on_violation_quarantine? boolean
---@field package_query_string? string
---@field slug_perm? string
---@field spdx_identifier table
---@field updated_at? string

---@class OrganizationPackageLicensePolicyLoadMatch
---@field id string
---@field org_id string

---@class OrganizationPackageLicensePolicyListMatch
---@field org_id string

---@class OrganizationPackageLicensePolicyCreateData
---@field org_id string

---@class OrganizationPackageLicensePolicyUpdateData
---@field id string
---@field org_id string

---@class OrganizationPackageVulnerabilityPolicy
---@field allow_unknown_severity? boolean
---@field created_at? string
---@field description? string
---@field min_severity? string
---@field name string
---@field on_violation_quarantine? boolean
---@field package_query_string? string
---@field slug_perm? string
---@field updated_at? string

---@class OrganizationPackageVulnerabilityPolicyLoadMatch
---@field id string
---@field org_id string

---@class OrganizationPackageVulnerabilityPolicyListMatch
---@field org_id string

---@class OrganizationPackageVulnerabilityPolicyCreateData
---@field org_id string

---@class OrganizationPackageVulnerabilityPolicyUpdateData
---@field id string
---@field org_id string

---@class OrganizationSamlAuth
---@field saml_auth_enabled boolean
---@field saml_auth_enforced boolean
---@field saml_metadata_inline? string
---@field saml_metadata_url? string

---@class OrganizationSamlAuthLoadMatch
---@field org_id string

---@class OrganizationSamlAuthUpdateData
---@field org_id string

---@class OrganizationTeam
---@field description? string
---@field name string
---@field slug? string
---@field slug_perm? string
---@field visibility? string

---@class OrganizationTeamLoadMatch
---@field id string
---@field org_id string

---@class OrganizationTeamListMatch
---@field org_id string

---@class OrganizationTeamCreateData
---@field org_id string

---@class OrganizationTeamUpdateData
---@field id string
---@field org_id string

---@class OrganizationTeamMember
---@field role string
---@field user string

---@class OrganizationTeamMemberListMatch
---@field org_id string
---@field team_id string

---@class OrganizationTeamMemberCreateData
---@field org_id string
---@field team_id string

---@class Oss

---@class P2n

---@class P2n2

---@class Package
---@field architecture? table
---@field backend_kind? number
---@field cdn_url? string
---@field checksum_md5? string
---@field checksum_sha1? string
---@field checksum_sha256? string
---@field checksum_sha512? string
---@field count number
---@field dep_type? string
---@field dependencies_checksum_md5? string
---@field dependencies_url? string
---@field description? string
---@field display_name? string
---@field distro table
---@field distro_version? table
---@field download? number
---@field epoch? number
---@field extension? string
---@field file? table
---@field filename? string
---@field format? string
---@field format_url? string
---@field freeable_storage? number
---@field fully_qualified_name? string
---@field identifier? table
---@field identifier_perm? string
---@field indexed? boolean
---@field is_cancellable? boolean
---@field is_copyable? boolean
---@field is_deleteable? boolean
---@field is_downloadable? boolean
---@field is_moveable? boolean
---@field is_quarantinable? boolean
---@field is_quarantined? boolean
---@field is_resyncable? boolean
---@field is_security_scannable? boolean
---@field is_sync_awaiting? boolean
---@field is_sync_completed? boolean
---@field is_sync_failed? boolean
---@field is_sync_in_flight? boolean
---@field is_sync_in_progress? boolean
---@field last_push string
---@field license? string
---@field name? string
---@field namespace? string
---@field namespace_url? string
---@field num_download number
---@field num_file? number
---@field operator? string
---@field origin_repository? string
---@field origin_repository_url? string
---@field package table
---@field package_type? number
---@field policy_violated? boolean
---@field release? string
---@field repository? string
---@field repository_url? string
---@field security_scan_completed_at? string
---@field security_scan_started_at? string
---@field security_scan_status? string
---@field security_scan_status_updated_at? string
---@field self_html_url? string
---@field self_url? string
---@field signature_url? string
---@field size? number
---@field slug? string
---@field slug_perm? string
---@field stage? number
---@field stage_str? string
---@field stage_updated_at? string
---@field status? number
---@field status_reason? string
---@field status_str? string
---@field status_updated_at? string
---@field status_url? string
---@field subtype? string
---@field summary? string
---@field sync_finished_at? string
---@field sync_progress? number
---@field tag? table
---@field tags_immutable? table
---@field type_display? string
---@field uploaded_at? string
---@field uploader? string
---@field uploader_url? string
---@field version? string
---@field version_orig? string
---@field vulnerability_scan_results_url? string

---@class PackageLoadMatch
---@field owner any
---@field repo any
---@field identifier? any

---@class PackageListMatch
---@field owner any
---@field repo any
---@field identifier? any

---@class PackageCreateData
---@field identifier? any
---@field owner any
---@field repo any

---@class PackageRemoveMatch
---@field identifier any
---@field owner any
---@field repo any

---@class PackageDenyPolicy
---@field action? string
---@field created_at? string
---@field description? string
---@field enabled? boolean
---@field name? string
---@field package_query_string string
---@field slug_perm? string
---@field status? string
---@field updated_at? string

---@class PackageDenyPolicyLoadMatch
---@field id string
---@field org_id string

---@class PackageDenyPolicyListMatch
---@field org_id string

---@class PackageDenyPolicyCreateData
---@field org_id string

---@class PackageDenyPolicyUpdateData
---@field id string
---@field org_id string

---@class PackageFilePartsUpload
---@field identifier? string
---@field upload_querystring? string
---@field upload_url? string

---@class PackageFilePartsUploadLoadMatch
---@field identifier any
---@field owner any
---@field repo any

---@class PackageFileUpload

---@class PackageFileUploadCreateData
---@field identifier any
---@field owner any
---@field repo any

---@class PackageLicensePolicyEvaluation
---@field created_at? string
---@field evaluation_count? number
---@field policy table
---@field slug_perm? string
---@field status? string
---@field updated_at? string
---@field violation_count? number

---@class PackageLicensePolicyEvaluationLoadMatch
---@field id string
---@field license_policy_id string
---@field org_id string

---@class PackageLicensePolicyEvaluationListMatch
---@field org_id string
---@field policy_slug_perm any

---@class PackageLicensePolicyEvaluationCreateData
---@field org_id string
---@field policy_slug_perm any

---@class PackageVersionBadge

---@class PackageVersionBadgeLoadMatch
---@field owner any
---@field package_format any
---@field package_identifier any
---@field package_name any
---@field package_version any
---@field repo any

---@class PackageVulnerabilityPolicyEvaluation
---@field created_at? string
---@field evaluation_count? number
---@field policy? table
---@field slug_perm? string
---@field status? string
---@field updated_at? string
---@field violation_count? number

---@class PackageVulnerabilityPolicyEvaluationLoadMatch
---@field id string
---@field org_id string
---@field vulnerability_policy_id string

---@class PackageVulnerabilityPolicyEvaluationListMatch
---@field org_id string
---@field policy_slug_perm any

---@class PackageVulnerabilityPolicyEvaluationCreateData
---@field org_id string
---@field policy_slug_perm any

---@class Privilege

---@class Profile

---@class ProviderSetting
---@field claim table
---@field enabled boolean
---@field mapping_claim? string
---@field name string
---@field provider_url string
---@field service_account? table
---@field slug? string
---@field slug_perm? string

---@class ProviderSettingLoadMatch
---@field org_id string
---@field slug_perm any

---@class ProviderSettingListMatch
---@field org_id string

---@class ProviderSettingsWrite
---@field claim table
---@field dynamic_mapping? table
---@field enabled boolean
---@field mapping_claim? string
---@field name string
---@field provider_url string
---@field service_account? table
---@field slug? string
---@field slug_perm? string

---@class ProviderSettingsWriteCreateData
---@field org_id string

---@class ProviderSettingsWriteUpdateData
---@field org_id string
---@field slug_perm any

---@class Python
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class PythonLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class PythonListMatch
---@field identifier any
---@field owner any

---@class PythonCreateData
---@field identifier any
---@field owner any

---@class PythonUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class Quarantine

---@class Quota
---@field history table
---@field usage table

---@class QuotaLoadMatch
---@field id? string
---@field owner? any

---@class Raw

---@class Refresh

---@class Regenerate

---@class Repo
---@field cdn_url? string
---@field content_kind? string
---@field contextual_auth_realm? boolean
---@field copy_own? boolean
---@field copy_package? string
---@field cosign_signing_enabled? boolean
---@field created_at? string
---@field default_privilege? string
---@field delete_own? boolean
---@field delete_package? string
---@field deleted_at? string
---@field description? string
---@field distribute? table
---@field docker_refresh_tokens_enabled? boolean
---@field ecdsa_key? table
---@field enforce_eula? boolean
---@field gpg_key? table
---@field index_file? boolean
---@field is_open_source? boolean
---@field is_private? boolean
---@field is_public? boolean
---@field manage_entitlements_privilege? string
---@field move_own? boolean
---@field move_package? string
---@field name string
---@field namespace? string
---@field namespace_url? string
---@field nuget_native_signing_enabled? boolean
---@field num_download? number
---@field num_policy_violated_package? number
---@field num_quarantined_package? number
---@field open_source_license? string
---@field open_source_project_url? string
---@field package_count? number
---@field package_group_count? number
---@field proxy_npmj? boolean
---@field proxy_pypi? boolean
---@field raw_package_index_enabled? boolean
---@field raw_package_index_signatures_enabled? boolean
---@field replace_package? string
---@field replace_packages_by_default? boolean
---@field repository_type? number
---@field repository_type_str? string
---@field resync_own? boolean
---@field resync_package? string
---@field scan_own? boolean
---@field scan_package? string
---@field self_html_url? string
---@field self_url? string
---@field show_setup_all? boolean
---@field size? number
---@field size_str? string
---@field slug? string
---@field slug_perm? string
---@field storage_region? string
---@field strict_npm_validation? boolean
---@field tag_pre_releases_as_latest? boolean
---@field use_debian_label? boolean
---@field use_default_cargo_upstream? boolean
---@field use_entitlements_privilege? string
---@field use_noarch_package? boolean
---@field use_source_package? boolean
---@field use_vulnerability_scanning? boolean
---@field user_entitlements_enabled? boolean
---@field view_statistic? string

---@class RepoLoadMatch
---@field id string

---@class RepoListMatch
---@field identifier? any
---@field owner? any

---@class RepoCreateData
---@field identifier? any
---@field owner? any
---@field id? string

---@class RepoUpdateData
---@field identifier any
---@field owner any

---@class RepoRemoveMatch
---@field identifier any
---@field owner any
---@field slug_perm? any

---@class RepositoryAuditLog
---@field actor string
---@field actor_ip_address string
---@field actor_kind? string
---@field actor_location table
---@field actor_slug_perm string
---@field actor_url? string
---@field context string
---@field event string
---@field event_at string
---@field object string
---@field object_kind string
---@field object_slug_perm string
---@field uuid? string

---@class RepositoryAuditLogListMatch
---@field owner any
---@field repo any

---@class RepositoryEcdsaKey
---@field active? boolean
---@field created_at? string
---@field default? boolean
---@field fingerprint? string
---@field fingerprint_short? string
---@field public_key? string
---@field ssh_fingerprint? string

---@class RepositoryEcdsaKeyLoadMatch
---@field identifier any
---@field owner any

---@class RepositoryEcdsaKeyCreateData
---@field identifier any
---@field owner any

---@class RepositoryGeoIpRule
---@field cidr table
---@field country_code table

---@class RepositoryGeoIpRuleLoadMatch
---@field identifier any
---@field owner any

---@class RepositoryGeoIpRuleUpdateData
---@field identifier any
---@field owner any

---@class RepositoryGeoIpStatus
---@field geoip_enabled? boolean

---@class RepositoryGeoIpStatusLoadMatch
---@field identifier any
---@field owner any

---@class RepositoryGeoIpTestAddress

---@class RepositoryGeoIpTestAddressCreateData
---@field identifier any
---@field owner any

---@class RepositoryGpgKey
---@field active? boolean
---@field comment string
---@field created_at? string
---@field default? boolean
---@field fingerprint? string
---@field fingerprint_short? string
---@field public_key? string

---@class RepositoryGpgKeyLoadMatch
---@field identifier any
---@field owner any

---@class RepositoryGpgKeyCreateData
---@field identifier any
---@field owner any

---@class RepositoryPrivilegeInput
---@field privilege string
---@field service? string
---@field team? string
---@field user? string

---@class RepositoryPrivilegeInputListMatch
---@field identifier any
---@field owner any

---@class RepositoryRetentionRule
---@field retention_count_limit? number
---@field retention_days_limit? number
---@field retention_enabled? boolean
---@field retention_group_by_format? boolean
---@field retention_group_by_name? boolean
---@field retention_group_by_package_type? boolean
---@field retention_package_query_string? string
---@field retention_size_limit? number

---@class RepositoryRetentionRuleLoadMatch
---@field owner any
---@field repo any

---@class RepositoryRetentionRuleUpdateData
---@field owner any
---@field repo any

---@class RepositoryRsaKey
---@field active? boolean
---@field created_at? string
---@field default? boolean
---@field fingerprint? string
---@field fingerprint_short? string
---@field public_key? string
---@field ssh_fingerprint? string

---@class RepositoryRsaKeyLoadMatch
---@field identifier any
---@field owner any

---@class RepositoryRsaKeyCreateData
---@field identifier any
---@field owner any

---@class RepositoryToken
---@field client? number
---@field created_at? string
---@field created_by? string
---@field created_by_url? string
---@field default? boolean
---@field disable_url? string
---@field download? number
---@field enable_url? string
---@field eula_accepted? table
---@field eula_accepted_at? string
---@field eula_accepted_from? string
---@field eula_required? boolean
---@field has_limit? boolean
---@field identifier? number
---@field is_active? boolean
---@field is_limited? boolean
---@field limit_bandwidth? number
---@field limit_bandwidth_unit? string
---@field limit_date_range_from? string
---@field limit_date_range_to? string
---@field limit_num_client? number
---@field limit_num_download? number
---@field limit_package_query? string
---@field limit_path_query? string
---@field metadata? table
---@field name string
---@field refresh_url? string
---@field reset_url? string
---@field scheduled_reset_at? string
---@field scheduled_reset_period? string
---@field self_url? string
---@field slug_perm? string
---@field token? string
---@field updated_at? string
---@field updated_by? string
---@field updated_by_url? string
---@field usage? string
---@field user? string
---@field user_url? string

---@class RepositoryTokenLoadMatch
---@field identifier any
---@field owner any
---@field repo any

---@class RepositoryTokenListMatch
---@field owner any
---@field repo any

---@class RepositoryTokenCreateData
---@field owner any
---@field repo any

---@class RepositoryTokenUpdateData
---@field identifier any
---@field owner any
---@field repo any

---@class RepositoryTokenRefresh
---@field client? number
---@field created_at? string
---@field created_by? string
---@field created_by_url? string
---@field default? boolean
---@field disable_url? string
---@field download? number
---@field enable_url? string
---@field eula_accepted? table
---@field eula_accepted_at? string
---@field eula_accepted_from? string
---@field eula_required? boolean
---@field has_limit? boolean
---@field identifier? number
---@field is_active? boolean
---@field is_limited? boolean
---@field limit_bandwidth? number
---@field limit_bandwidth_unit? string
---@field limit_date_range_from? string
---@field limit_date_range_to? string
---@field limit_num_client? number
---@field limit_num_download? number
---@field limit_package_query? string
---@field limit_path_query? string
---@field metadata? table
---@field name? string
---@field refresh_url? string
---@field reset_url? string
---@field scheduled_reset_at? string
---@field scheduled_reset_period? string
---@field self_url? string
---@field slug_perm? string
---@field token? string
---@field updated_at? string
---@field updated_by? string
---@field updated_by_url? string
---@field usage? string
---@field user? string
---@field user_url? string

---@class RepositoryTokenRefreshCreateData
---@field identifier any
---@field owner any
---@field repo any

---@class RepositoryTokenSync
---@field token? table

---@class RepositoryTokenSyncCreateData
---@field owner any
---@field repo any

---@class RepositoryWebhook
---@field created_at? string
---@field created_by? string
---@field created_by_url? string
---@field disable_reason? number
---@field disable_reason_str? string
---@field event table
---@field identifier? number
---@field is_active? boolean
---@field is_last_response_bad? boolean
---@field last_response_status? number
---@field last_response_status_str? string
---@field num_sent? number
---@field package_query? string
---@field request_body_format? number
---@field request_body_format_str? string
---@field request_body_template_format? number
---@field request_body_template_format_str? string
---@field request_content_type? string
---@field secret_header? string
---@field self_url? string
---@field slug_perm? string
---@field target_url string
---@field template table
---@field updated_at? string
---@field updated_by? string
---@field updated_by_url? string
---@field verify_ssl? boolean

---@class RepositoryWebhookListMatch
---@field owner any
---@field repo any
---@field identifier? any

---@class RepositoryWebhookCreateData
---@field owner any
---@field repo any

---@class RepositoryWebhookUpdateData
---@field identifier any
---@field owner any
---@field repo any

---@class RepositoryX509EcdsaCertificate
---@field active? boolean
---@field certificate? string
---@field certificate_chain? string
---@field certificate_chain_fingerprint? string
---@field certificate_chain_fingerprint_short? string
---@field certificate_fingerprint? string
---@field certificate_fingerprint_short? string
---@field created_at? string
---@field default? boolean
---@field issuing_status? string

---@class RepositoryX509EcdsaCertificateLoadMatch
---@field identifier any
---@field owner any

---@class RepositoryX509RsaCertificate
---@field active? boolean
---@field certificate? string
---@field certificate_chain? string
---@field certificate_chain_fingerprint? string
---@field certificate_chain_fingerprint_short? string
---@field certificate_fingerprint? string
---@field certificate_fingerprint_short? string
---@field created_at? string
---@field default? boolean
---@field issuing_status? string

---@class RepositoryX509RsaCertificateLoadMatch
---@field identifier any
---@field owner any

---@class Reset

---@class ResourcesRateCheck
---@field resource? table

---@class ResourcesRateCheckLoadMatch
---@field resource? table

---@class Resync

---@class Retention

---@class Rpm
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field distro_version string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field gpg_key_inline? string
---@field gpg_key_url? string
---@field gpg_verification? string
---@field include_source? boolean
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verification_status? string
---@field verify_ssl? boolean

---@class RpmLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class RpmListMatch
---@field identifier any
---@field owner any

---@class RpmCreateData
---@field identifier any
---@field owner any

---@class RpmUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class Rsa

---@class Ruby
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class RubyLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class RubyListMatch
---@field identifier any
---@field owner any

---@class RubyCreateData
---@field identifier any
---@field owner any

---@class RubyUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class SamlGroupSync

---@class Scan

---@class Self

---@class Service
---@field created_at? string
---@field created_by? string
---@field created_by_url? string
---@field description? string
---@field key? string
---@field key_expires_at? string
---@field name string
---@field role? string
---@field slug? string
---@field team? table

---@class ServiceLoadMatch
---@field id string
---@field org_id string

---@class ServiceListMatch
---@field org_id string

---@class ServiceCreateData
---@field org_id string

---@class ServiceUpdateData
---@field id string
---@field org_id string

---@class Status

---@class StatusBasic
---@field detail? string
---@field version? string

---@class StatusBasicLoadMatch
---@field detail? string
---@field version? string

---@class StorageRegion
---@field label string
---@field slug string

---@class StorageRegionLoadMatch
---@field id string

---@class StorageRegionListMatch
---@field label? string
---@field slug? string

---@class Swift
---@field auth_mode? string
---@field auth_secret? string
---@field auth_username? string
---@field created_at? string
---@field disable_reason? string
---@field extra_header_1? string
---@field extra_header_2? string
---@field extra_value_1? string
---@field extra_value_2? string
---@field is_active? boolean
---@field mode? string
---@field name string
---@field pending_validation? boolean
---@field priority? number
---@field slug_perm? string
---@field updated_at? string
---@field upstream_url string
---@field verify_ssl? boolean

---@class SwiftLoadMatch
---@field id string
---@field identifier any
---@field owner any

---@class SwiftListMatch
---@field identifier any
---@field owner any

---@class SwiftCreateData
---@field identifier any
---@field owner any

---@class SwiftUpdateData
---@field id string
---@field identifier any
---@field owner any

---@class Sync

---@class Tag

---@class Team

---@class Terraform

---@class Test

---@class Token

---@class TransferRegion

---@class User
---@field created? string
---@field key? string
---@field slug_perm? string

---@class UserListMatch
---@field created? string
---@field key? string
---@field slug_perm? string

---@class UserAuthToken

---@class UserAuthTokenCreateData

---@class UserAuthenticationToken
---@field created? string
---@field key? string
---@field slug_perm? string

---@class UserAuthenticationTokenCreateData
---@field created? string
---@field key? string
---@field slug_perm? string

---@class UserAuthenticationTokenUpdateData
---@field slug_perm any

---@class UserBrief
---@field authenticated? boolean
---@field email? string
---@field name? string
---@field profile_url? string
---@field self_url? string
---@field slug? string
---@field slug_perm? string

---@class UserBriefLoadMatch
---@field authenticated? boolean
---@field email? string
---@field name? string
---@field profile_url? string
---@field self_url? string
---@field slug? string
---@field slug_perm? string

---@class UserProfile
---@field company? string
---@field first_name string
---@field job_title? string
---@field joined_at? string
---@field last_name string
---@field name? string
---@field slug? string
---@field slug_perm? string
---@field tagline? string
---@field url? string

---@class UserProfileLoadMatch
---@field id string

---@class Vagrant

---@class Validate

---@class Version

---@class Vulnerability
---@field created_at? string
---@field has_vulnerability? boolean
---@field identifier string
---@field max_severity? string
---@field num_vulnerability? number
---@field package table
---@field result table
---@field scan_id number
---@field target string
---@field type string

---@class VulnerabilityLoadMatch
---@field id string

---@class VulnerabilityListMatch
---@field owner any
---@field package? any
---@field repo any
---@field identifier? any

---@class VulnerabilityPolicy

---@class Webhook

---@class WebhookRemoveMatch
---@field identifier any
---@field owner any
---@field repo any

---@class X509Ecdsa

---@class X509Rsa

local M = {}

return M
