// Typed models for the Cloudsmith SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Abort {
}

export interface Alpine {
}

export interface AuditLog {
}

export interface Basic {
}

export interface Cargo {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface CargoLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface CargoListMatch {
  identifier: any
  owner: any
}

export interface CargoCreateData {
  identifier: any
  owner: any
}

export interface CargoUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface Cocoapod {
}

export interface Complete {
}

export interface Composer {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface ComposerLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface ComposerListMatch {
  identifier: any
  owner: any
}

export interface ComposerCreateData {
  identifier: any
  owner: any
}

export interface ComposerUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface Conan {
}

export interface Conda {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface CondaLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface CondaListMatch {
  identifier: any
  owner: any
}

export interface CondaCreateData {
  identifier: any
  owner: any
}

export interface CondaUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface Copy {
}

export interface Cran {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface CranLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface CranListMatch {
  identifier: any
  owner: any
}

export interface CranCreateData {
  identifier: any
  owner: any
}

export interface CranUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface Dart {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface DartLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface DartListMatch {
  identifier: any
  owner: any
}

export interface DartCreateData {
  identifier: any
  owner: any
}

export interface DartUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface Deb {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  component?: string
  created_at?: string
  disable_reason?: string
  distro_version: any[]
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  gpg_key_inline?: string
  gpg_key_url?: string
  gpg_verification?: string
  include_source?: boolean
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_distribution?: string
  upstream_url: string
  verification_status?: string
  verify_ssl?: boolean
}

export interface DebLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface DebListMatch {
  identifier: any
  owner: any
}

export interface DebCreateData {
  identifier: any
  owner: any
}

export interface DebUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface DenyPolicy {
}

export interface Dependency {
}

export interface Disable {
}

export interface DistributionFull {
  format?: string
  format_url?: string
  name: string
  self_url?: string
  slug?: string
  variant?: string
  version?: any[]
}

export interface DistributionFullLoadMatch {
  slug: string
}

export interface DistributionFullListMatch {
  format?: string
  format_url?: string
  name?: string
  self_url?: string
  slug?: string
  variant?: string
  version?: any[]
}

export interface Distro {
}

export interface Docker {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface DockerLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface DockerListMatch {
  identifier: any
  owner: any
}

export interface DockerCreateData {
  identifier: any
  owner: any
}

export interface DockerUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface DynamicMapping {
  claim_value: string
  service_account: string
}

export interface DynamicMappingLoadMatch {
  id: string
  openid_connect_id: string
  org_id: string
}

export interface DynamicMappingListMatch {
  org_id: string
  provider_setting: any
}

export interface Ecdsa {
}

export interface Enable {
}

export interface Entitlement {
  token: Record<string, any>
}

export interface EntitlementLoadMatch {
  owner?: any
  repo?: any
  id?: string
}

export interface EntitlementCreateData {
  identifier: any
  owner: any
  repo: any
}

export interface EntitlementRemoveMatch {
  identifier: any
  owner: any
  repo: any
}

export interface Evaluation {
}

export interface File {
}

export interface FileCreateData {
  identifier?: any
  owner: any
  repo: any
}

export interface Format {
  description: string
  distribution?: any[]
  extension: any[]
  name: string
  premium: boolean
  premium_plan_id?: string
  premium_plan_name?: string
  slug: string
  support: Record<string, any>
}

export interface FormatLoadMatch {
  id: string
}

export interface FormatListMatch {
  description?: string
  distribution?: any[]
  extension?: any[]
  name?: string
  premium?: boolean
  premium_plan_id?: string
  premium_plan_name?: string
  slug?: string
  support?: Record<string, any>
}

export interface Geoip {
}

export interface Gon {
}

export interface Gon2 {
}

export interface Gon3 {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface Gon3ListMatch {
  identifier: any
  owner: any
}

export interface Gon4 {
}

export interface Gon5 {
}

export interface Gon5CreateData {
  identifier: any
  owner: any
}

export interface Gon6 {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface Gon6LoadMatch {
  identifier: any
  owner: any
  slug_perm: any
}

export interface Gon7 {
}

export interface Gon8 {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface Gon8UpdateData {
  identifier: any
  owner: any
  slug_perm: any
}

export interface Gon9 {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface Gon9UpdateData {
  identifier: any
  owner: any
  slug_perm: any
}

export interface Gpg {
}

export interface Group {
}

export interface Helm {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface HelmLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface HelmListMatch {
  identifier: any
  owner: any
}

export interface HelmCreateData {
  identifier: any
  owner: any
}

export interface HelmUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface Hex {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface HexLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface HexListMatch {
  identifier: any
  owner: any
}

export interface HexCreateData {
  identifier: any
  owner: any
}

export interface HexUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface History {
}

export interface Huggingface {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface HuggingfaceLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface HuggingfaceListMatch {
  identifier: any
  owner: any
}

export interface HuggingfaceCreateData {
  identifier: any
  owner: any
}

export interface HuggingfaceUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface Info {
}

export interface Invite {
}

export interface LicensePolicy {
}

export interface Limit {
}

export interface Luarock {
}

export interface Maven {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  gpg_key_inline?: string
  gpg_key_url?: string
  gpg_verification?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verification_status?: string
  verify_ssl?: boolean
}

export interface MavenLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface MavenListMatch {
  identifier: any
  owner: any
}

export interface MavenCreateData {
  identifier: any
  owner: any
}

export interface MavenUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface Member {
}

export interface Move {
}

export interface Namespace {
  name?: string
  slug?: string
  slug_perm?: string
  type_name?: string
}

export interface NamespaceLoadMatch {
  id: string
}

export interface NamespaceListMatch {
  name?: string
  slug?: string
  slug_perm?: string
  type_name?: string
}

export interface NamespaceAuditLog {
  actor: string
  actor_ip_address: string
  actor_kind?: string
  actor_location: Record<string, any>
  actor_slug_perm: string
  actor_url?: string
  context: string
  event: string
  event_at: string
  object: string
  object_kind: string
  object_slug_perm: string
  target: string
  target_kind: string
  target_slug_perm?: string
  uuid?: string
}

export interface NamespaceAuditLogLoadMatch {
  id: string
}

export interface Npm {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface NpmLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface NpmListMatch {
  identifier: any
  owner: any
}

export interface NpmCreateData {
  identifier: any
  owner: any
}

export interface NpmUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface Nuget {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface NugetLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface NugetListMatch {
  identifier: any
  owner: any
}

export interface NugetCreateData {
  identifier: any
  owner: any
}

export interface NugetUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface OpenidConnect {
}

export interface Org {
  country?: string
  created_at?: string
  event_at?: string
  location?: string
  name: string
  package: Record<string, any>
  policy: Record<string, any>
  reason: any[]
  slug?: string
  slug_perm?: string
  tagline?: string
  vulnerability_scan_result: Record<string, any>
}

export interface OrgLoadMatch {
  id: string
  member_id?: string
}

export interface OrgListMatch {
  country?: string
  created_at?: string
  event_at?: string
  location?: string
  name?: string
  package?: Record<string, any>
  policy?: Record<string, any>
  reason?: any[]
  slug?: string
  slug_perm?: string
  tagline?: string
  vulnerability_scan_result?: Record<string, any>
}

export interface OrgCreateData {
  id: string
  member_id?: string
}

export interface OrgUpdateData {
  id: string
  team_id: string
}

export interface OrgRemoveMatch {
  id: string
  member?: any
  service?: any
  slug_perm?: any
  team?: any
}

export interface OrganizationGroupSync {
  idp_key: string
  idp_value: string
  role?: string
  slug_perm?: string
  team: string
}

export interface OrganizationGroupSyncListMatch {
  org_id: string
}

export interface OrganizationGroupSyncCreateData {
  org_id: string
}

export interface OrganizationGroupSyncStatus {
  saml_group_sync_status?: boolean
}

export interface OrganizationGroupSyncStatusLoadMatch {
  org_id: string
}

export interface OrganizationInvite {
  email?: string
  expires_at?: string
  inviter?: string
  inviter_url?: string
  org?: string
  role?: string
  slug_perm?: string
  team?: any[]
  user?: string
  user_url?: string
}

export interface OrganizationInviteListMatch {
  org_id: string
}

export interface OrganizationInviteCreateData {
  org_id: string
}

export interface OrganizationInviteUpdateData {
  id: string
  org_id: string
}

export interface OrganizationInviteExtend {
  email?: string
  expires_at?: string
  inviter?: string
  inviter_url?: string
  org?: string
  role?: string
  slug_perm?: string
  team?: any[]
  user?: string
  user_url?: string
}

export interface OrganizationInviteExtendCreateData {
  org_id: string
  slug_perm: any
}

export interface OrganizationMembership {
  email?: string
  has_two_factor?: boolean
  is_active?: boolean
  joined_at?: string
  last_login_at?: string
  last_login_method?: string
  role?: string
  user?: string
  user_id?: string
  user_name?: string
  user_url?: string
  visibility?: string
}

export interface OrganizationMembershipLoadMatch {
  member: any
  org_id: string
}

export interface OrganizationMembershipListMatch {
  org_id: string
}

export interface OrganizationMembershipUpdateData {
  member: any
  org_id: string
}

export interface OrganizationMembershipRoleUpdate {
  email?: string
  has_two_factor?: boolean
  joined_at?: string
  last_login_at?: string
  last_login_method?: string
  role?: string
  user?: string
  user_id?: string
  user_name?: string
  user_url?: string
  visibility?: string
}

export interface OrganizationMembershipRoleUpdateUpdateData {
  member_id: string
  org_id: string
}

export interface OrganizationMembershipVisibilityUpdate {
  email?: string
  has_two_factor?: boolean
  joined_at?: string
  last_login_at?: string
  last_login_method?: string
  role?: string
  user?: string
  user_id?: string
  user_name?: string
  user_url?: string
  visibility?: string
}

export interface OrganizationMembershipVisibilityUpdateUpdateData {
  member_id: string
  org_id: string
}

export interface OrganizationPackageLicensePolicy {
  allow_unknown_license?: boolean
  created_at?: string
  description?: string
  name: string
  on_violation_quarantine?: boolean
  package_query_string?: string
  slug_perm?: string
  spdx_identifier: any[]
  updated_at?: string
}

export interface OrganizationPackageLicensePolicyLoadMatch {
  id: string
  org_id: string
}

export interface OrganizationPackageLicensePolicyListMatch {
  org_id: string
}

export interface OrganizationPackageLicensePolicyCreateData {
  org_id: string
}

export interface OrganizationPackageLicensePolicyUpdateData {
  id: string
  org_id: string
}

export interface OrganizationPackageVulnerabilityPolicy {
  allow_unknown_severity?: boolean
  created_at?: string
  description?: string
  min_severity?: string
  name: string
  on_violation_quarantine?: boolean
  package_query_string?: string
  slug_perm?: string
  updated_at?: string
}

export interface OrganizationPackageVulnerabilityPolicyLoadMatch {
  id: string
  org_id: string
}

export interface OrganizationPackageVulnerabilityPolicyListMatch {
  org_id: string
}

export interface OrganizationPackageVulnerabilityPolicyCreateData {
  org_id: string
}

export interface OrganizationPackageVulnerabilityPolicyUpdateData {
  id: string
  org_id: string
}

export interface OrganizationSamlAuth {
  saml_auth_enabled: boolean
  saml_auth_enforced: boolean
  saml_metadata_inline?: string
  saml_metadata_url?: string
}

export interface OrganizationSamlAuthLoadMatch {
  org_id: string
}

export interface OrganizationSamlAuthUpdateData {
  org_id: string
}

export interface OrganizationTeam {
  description?: string
  name: string
  slug?: string
  slug_perm?: string
  visibility?: string
}

export interface OrganizationTeamLoadMatch {
  id: string
  org_id: string
}

export interface OrganizationTeamListMatch {
  org_id: string
}

export interface OrganizationTeamCreateData {
  org_id: string
}

export interface OrganizationTeamUpdateData {
  id: string
  org_id: string
}

export interface OrganizationTeamMember {
  role: string
  user: string
}

export interface OrganizationTeamMemberListMatch {
  org_id: string
  team_id: string
}

export interface OrganizationTeamMemberCreateData {
  org_id: string
  team_id: string
}

export interface Oss {
}

export interface P2n {
}

export interface P2n2 {
}

export interface Package {
  architecture?: any[]
  backend_kind?: number
  cdn_url?: string
  checksum_md5?: string
  checksum_sha1?: string
  checksum_sha256?: string
  checksum_sha512?: string
  count: number
  dep_type?: string
  dependencies_checksum_md5?: string
  dependencies_url?: string
  description?: string
  display_name?: string
  distro: Record<string, any>
  distro_version?: Record<string, any>
  download?: number
  epoch?: number
  extension?: string
  file?: any[]
  filename?: string
  format?: string
  format_url?: string
  freeable_storage?: number
  fully_qualified_name?: string
  identifier?: Record<string, any>
  identifier_perm?: string
  indexed?: boolean
  is_cancellable?: boolean
  is_copyable?: boolean
  is_deleteable?: boolean
  is_downloadable?: boolean
  is_moveable?: boolean
  is_quarantinable?: boolean
  is_quarantined?: boolean
  is_resyncable?: boolean
  is_security_scannable?: boolean
  is_sync_awaiting?: boolean
  is_sync_completed?: boolean
  is_sync_failed?: boolean
  is_sync_in_flight?: boolean
  is_sync_in_progress?: boolean
  last_push: string
  license?: string
  name?: string
  namespace?: string
  namespace_url?: string
  num_download: number
  num_file?: number
  operator?: string
  origin_repository?: string
  origin_repository_url?: string
  package: Record<string, any>
  package_type?: number
  policy_violated?: boolean
  release?: string
  repository?: string
  repository_url?: string
  security_scan_completed_at?: string
  security_scan_started_at?: string
  security_scan_status?: string
  security_scan_status_updated_at?: string
  self_html_url?: string
  self_url?: string
  signature_url?: string
  size?: number
  slug?: string
  slug_perm?: string
  stage?: number
  stage_str?: string
  stage_updated_at?: string
  status?: number
  status_reason?: string
  status_str?: string
  status_updated_at?: string
  status_url?: string
  subtype?: string
  summary?: string
  sync_finished_at?: string
  sync_progress?: number
  tag?: Record<string, any>
  tags_immutable?: Record<string, any>
  type_display?: string
  uploaded_at?: string
  uploader?: string
  uploader_url?: string
  version?: string
  version_orig?: string
  vulnerability_scan_results_url?: string
}

export interface PackageLoadMatch {
  owner: any
  repo: any
  identifier?: any
}

export interface PackageListMatch {
  owner: any
  repo: any
  identifier?: any
}

export interface PackageCreateData {
  identifier?: any
  owner: any
  repo: any
}

export interface PackageRemoveMatch {
  identifier: any
  owner: any
  repo: any
}

export interface PackageDenyPolicy {
  action?: string
  created_at?: string
  description?: string
  enabled?: boolean
  name?: string
  package_query_string: string
  slug_perm?: string
  status?: string
  updated_at?: string
}

export interface PackageDenyPolicyLoadMatch {
  id: string
  org_id: string
}

export interface PackageDenyPolicyListMatch {
  org_id: string
}

export interface PackageDenyPolicyCreateData {
  org_id: string
}

export interface PackageDenyPolicyUpdateData {
  id: string
  org_id: string
}

export interface PackageFilePartsUpload {
  identifier?: string
  upload_querystring?: string
  upload_url?: string
}

export interface PackageFilePartsUploadLoadMatch {
  identifier: any
  owner: any
  repo: any
}

export interface PackageFileUpload {
}

export interface PackageFileUploadCreateData {
  identifier: any
  owner: any
  repo: any
}

export interface PackageLicensePolicyEvaluation {
  created_at?: string
  evaluation_count?: number
  policy: Record<string, any>
  slug_perm?: string
  status?: string
  updated_at?: string
  violation_count?: number
}

export interface PackageLicensePolicyEvaluationLoadMatch {
  id: string
  license_policy_id: string
  org_id: string
}

export interface PackageLicensePolicyEvaluationListMatch {
  org_id: string
  policy_slug_perm: any
}

export interface PackageLicensePolicyEvaluationCreateData {
  org_id: string
  policy_slug_perm: any
}

export interface PackageVersionBadge {
}

export interface PackageVersionBadgeLoadMatch {
  owner: any
  package_format: any
  package_identifier: any
  package_name: any
  package_version: any
  repo: any
}

export interface PackageVulnerabilityPolicyEvaluation {
  created_at?: string
  evaluation_count?: number
  policy?: Record<string, any>
  slug_perm?: string
  status?: string
  updated_at?: string
  violation_count?: number
}

export interface PackageVulnerabilityPolicyEvaluationLoadMatch {
  id: string
  org_id: string
  vulnerability_policy_id: string
}

export interface PackageVulnerabilityPolicyEvaluationListMatch {
  org_id: string
  policy_slug_perm: any
}

export interface PackageVulnerabilityPolicyEvaluationCreateData {
  org_id: string
  policy_slug_perm: any
}

export interface Privilege {
}

export interface Profile {
}

export interface ProviderSetting {
  claim: Record<string, any>
  enabled: boolean
  mapping_claim?: string
  name: string
  provider_url: string
  service_account?: any[]
  slug?: string
  slug_perm?: string
}

export interface ProviderSettingLoadMatch {
  org_id: string
  slug_perm: any
}

export interface ProviderSettingListMatch {
  org_id: string
}

export interface ProviderSettingsWrite {
  claim: Record<string, any>
  dynamic_mapping?: any[]
  enabled: boolean
  mapping_claim?: string
  name: string
  provider_url: string
  service_account?: any[]
  slug?: string
  slug_perm?: string
}

export interface ProviderSettingsWriteCreateData {
  org_id: string
}

export interface ProviderSettingsWriteUpdateData {
  org_id: string
  slug_perm: any
}

export interface Python {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface PythonLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface PythonListMatch {
  identifier: any
  owner: any
}

export interface PythonCreateData {
  identifier: any
  owner: any
}

export interface PythonUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface Quarantine {
}

export interface Quota {
  history: any[]
  usage: Record<string, any>
}

export interface QuotaLoadMatch {
  id?: string
  owner?: any
}

export interface Raw {
}

export interface Refresh {
}

export interface Regenerate {
}

export interface Repo {
  cdn_url?: string
  content_kind?: string
  contextual_auth_realm?: boolean
  copy_own?: boolean
  copy_package?: string
  cosign_signing_enabled?: boolean
  created_at?: string
  default_privilege?: string
  delete_own?: boolean
  delete_package?: string
  deleted_at?: string
  description?: string
  distribute?: any[]
  docker_refresh_tokens_enabled?: boolean
  ecdsa_key?: any[]
  enforce_eula?: boolean
  gpg_key?: any[]
  index_file?: boolean
  is_open_source?: boolean
  is_private?: boolean
  is_public?: boolean
  manage_entitlements_privilege?: string
  move_own?: boolean
  move_package?: string
  name: string
  namespace?: string
  namespace_url?: string
  nuget_native_signing_enabled?: boolean
  num_download?: number
  num_policy_violated_package?: number
  num_quarantined_package?: number
  open_source_license?: string
  open_source_project_url?: string
  package_count?: number
  package_group_count?: number
  proxy_npmj?: boolean
  proxy_pypi?: boolean
  raw_package_index_enabled?: boolean
  raw_package_index_signatures_enabled?: boolean
  replace_package?: string
  replace_packages_by_default?: boolean
  repository_type?: number
  repository_type_str?: string
  resync_own?: boolean
  resync_package?: string
  scan_own?: boolean
  scan_package?: string
  self_html_url?: string
  self_url?: string
  show_setup_all?: boolean
  size?: number
  size_str?: string
  slug?: string
  slug_perm?: string
  storage_region?: string
  strict_npm_validation?: boolean
  tag_pre_releases_as_latest?: boolean
  use_debian_label?: boolean
  use_default_cargo_upstream?: boolean
  use_entitlements_privilege?: string
  use_noarch_package?: boolean
  use_source_package?: boolean
  use_vulnerability_scanning?: boolean
  user_entitlements_enabled?: boolean
  view_statistic?: string
}

export interface RepoLoadMatch {
  id: string
}

export interface RepoListMatch {
  identifier?: any
  owner?: any
}

export interface RepoCreateData {
  identifier?: any
  owner?: any
  id?: string
}

export interface RepoUpdateData {
  identifier: any
  owner: any
}

export interface RepoRemoveMatch {
  identifier: any
  owner: any
  slug_perm?: any
}

export interface RepositoryAuditLog {
  actor: string
  actor_ip_address: string
  actor_kind?: string
  actor_location: Record<string, any>
  actor_slug_perm: string
  actor_url?: string
  context: string
  event: string
  event_at: string
  object: string
  object_kind: string
  object_slug_perm: string
  uuid?: string
}

export interface RepositoryAuditLogListMatch {
  owner: any
  repo: any
}

export interface RepositoryEcdsaKey {
  active?: boolean
  created_at?: string
  default?: boolean
  fingerprint?: string
  fingerprint_short?: string
  public_key?: string
  ssh_fingerprint?: string
}

export interface RepositoryEcdsaKeyLoadMatch {
  identifier: any
  owner: any
}

export interface RepositoryEcdsaKeyCreateData {
  identifier: any
  owner: any
}

export interface RepositoryGeoIpRule {
  cidr: Record<string, any>
  country_code: Record<string, any>
}

export interface RepositoryGeoIpRuleLoadMatch {
  identifier: any
  owner: any
}

export interface RepositoryGeoIpRuleUpdateData {
  identifier: any
  owner: any
}

export interface RepositoryGeoIpStatus {
  geoip_enabled?: boolean
}

export interface RepositoryGeoIpStatusLoadMatch {
  identifier: any
  owner: any
}

export interface RepositoryGeoIpTestAddress {
}

export interface RepositoryGeoIpTestAddressCreateData {
  identifier: any
  owner: any
}

export interface RepositoryGpgKey {
  active?: boolean
  comment: string
  created_at?: string
  default?: boolean
  fingerprint?: string
  fingerprint_short?: string
  public_key?: string
}

export interface RepositoryGpgKeyLoadMatch {
  identifier: any
  owner: any
}

export interface RepositoryGpgKeyCreateData {
  identifier: any
  owner: any
}

export interface RepositoryPrivilegeInput {
  privilege: string
  service?: string
  team?: string
  user?: string
}

export interface RepositoryPrivilegeInputListMatch {
  identifier: any
  owner: any
}

export interface RepositoryRetentionRule {
  retention_count_limit?: number
  retention_days_limit?: number
  retention_enabled?: boolean
  retention_group_by_format?: boolean
  retention_group_by_name?: boolean
  retention_group_by_package_type?: boolean
  retention_package_query_string?: string
  retention_size_limit?: number
}

export interface RepositoryRetentionRuleLoadMatch {
  owner: any
  repo: any
}

export interface RepositoryRetentionRuleUpdateData {
  owner: any
  repo: any
}

export interface RepositoryRsaKey {
  active?: boolean
  created_at?: string
  default?: boolean
  fingerprint?: string
  fingerprint_short?: string
  public_key?: string
  ssh_fingerprint?: string
}

export interface RepositoryRsaKeyLoadMatch {
  identifier: any
  owner: any
}

export interface RepositoryRsaKeyCreateData {
  identifier: any
  owner: any
}

export interface RepositoryToken {
  client?: number
  created_at?: string
  created_by?: string
  created_by_url?: string
  default?: boolean
  disable_url?: string
  download?: number
  enable_url?: string
  eula_accepted?: Record<string, any>
  eula_accepted_at?: string
  eula_accepted_from?: string
  eula_required?: boolean
  has_limit?: boolean
  identifier?: number
  is_active?: boolean
  is_limited?: boolean
  limit_bandwidth?: number
  limit_bandwidth_unit?: string
  limit_date_range_from?: string
  limit_date_range_to?: string
  limit_num_client?: number
  limit_num_download?: number
  limit_package_query?: string
  limit_path_query?: string
  metadata?: Record<string, any>
  name: string
  refresh_url?: string
  reset_url?: string
  scheduled_reset_at?: string
  scheduled_reset_period?: string
  self_url?: string
  slug_perm?: string
  token?: string
  updated_at?: string
  updated_by?: string
  updated_by_url?: string
  usage?: string
  user?: string
  user_url?: string
}

export interface RepositoryTokenLoadMatch {
  identifier: any
  owner: any
  repo: any
}

export interface RepositoryTokenListMatch {
  owner: any
  repo: any
}

export interface RepositoryTokenCreateData {
  owner: any
  repo: any
}

export interface RepositoryTokenUpdateData {
  identifier: any
  owner: any
  repo: any
}

export interface RepositoryTokenRefresh {
  client?: number
  created_at?: string
  created_by?: string
  created_by_url?: string
  default?: boolean
  disable_url?: string
  download?: number
  enable_url?: string
  eula_accepted?: Record<string, any>
  eula_accepted_at?: string
  eula_accepted_from?: string
  eula_required?: boolean
  has_limit?: boolean
  identifier?: number
  is_active?: boolean
  is_limited?: boolean
  limit_bandwidth?: number
  limit_bandwidth_unit?: string
  limit_date_range_from?: string
  limit_date_range_to?: string
  limit_num_client?: number
  limit_num_download?: number
  limit_package_query?: string
  limit_path_query?: string
  metadata?: Record<string, any>
  name?: string
  refresh_url?: string
  reset_url?: string
  scheduled_reset_at?: string
  scheduled_reset_period?: string
  self_url?: string
  slug_perm?: string
  token?: string
  updated_at?: string
  updated_by?: string
  updated_by_url?: string
  usage?: string
  user?: string
  user_url?: string
}

export interface RepositoryTokenRefreshCreateData {
  identifier: any
  owner: any
  repo: any
}

export interface RepositoryTokenSync {
  token?: any[]
}

export interface RepositoryTokenSyncCreateData {
  owner: any
  repo: any
}

export interface RepositoryWebhook {
  created_at?: string
  created_by?: string
  created_by_url?: string
  disable_reason?: number
  disable_reason_str?: string
  event: any[]
  identifier?: number
  is_active?: boolean
  is_last_response_bad?: boolean
  last_response_status?: number
  last_response_status_str?: string
  num_sent?: number
  package_query?: string
  request_body_format?: number
  request_body_format_str?: string
  request_body_template_format?: number
  request_body_template_format_str?: string
  request_content_type?: string
  secret_header?: string
  self_url?: string
  slug_perm?: string
  target_url: string
  template: any[]
  updated_at?: string
  updated_by?: string
  updated_by_url?: string
  verify_ssl?: boolean
}

export interface RepositoryWebhookListMatch {
  owner: any
  repo: any
  identifier?: any
}

export interface RepositoryWebhookCreateData {
  owner: any
  repo: any
}

export interface RepositoryWebhookUpdateData {
  identifier: any
  owner: any
  repo: any
}

export interface RepositoryX509EcdsaCertificate {
  active?: boolean
  certificate?: string
  certificate_chain?: string
  certificate_chain_fingerprint?: string
  certificate_chain_fingerprint_short?: string
  certificate_fingerprint?: string
  certificate_fingerprint_short?: string
  created_at?: string
  default?: boolean
  issuing_status?: string
}

export interface RepositoryX509EcdsaCertificateLoadMatch {
  identifier: any
  owner: any
}

export interface RepositoryX509RsaCertificate {
  active?: boolean
  certificate?: string
  certificate_chain?: string
  certificate_chain_fingerprint?: string
  certificate_chain_fingerprint_short?: string
  certificate_fingerprint?: string
  certificate_fingerprint_short?: string
  created_at?: string
  default?: boolean
  issuing_status?: string
}

export interface RepositoryX509RsaCertificateLoadMatch {
  identifier: any
  owner: any
}

export interface Reset {
}

export interface ResourcesRateCheck {
  resource?: Record<string, any>
}

export interface ResourcesRateCheckLoadMatch {
  resource?: Record<string, any>
}

export interface Resync {
}

export interface Retention {
}

export interface Rpm {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  distro_version: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  gpg_key_inline?: string
  gpg_key_url?: string
  gpg_verification?: string
  include_source?: boolean
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verification_status?: string
  verify_ssl?: boolean
}

export interface RpmLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface RpmListMatch {
  identifier: any
  owner: any
}

export interface RpmCreateData {
  identifier: any
  owner: any
}

export interface RpmUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface Rsa {
}

export interface Ruby {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface RubyLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface RubyListMatch {
  identifier: any
  owner: any
}

export interface RubyCreateData {
  identifier: any
  owner: any
}

export interface RubyUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface SamlGroupSync {
}

export interface Scan {
}

export interface Self {
}

export interface Service {
  created_at?: string
  created_by?: string
  created_by_url?: string
  description?: string
  key?: string
  key_expires_at?: string
  name: string
  role?: string
  slug?: string
  team?: any[]
}

export interface ServiceLoadMatch {
  id: string
  org_id: string
}

export interface ServiceListMatch {
  org_id: string
}

export interface ServiceCreateData {
  org_id: string
}

export interface ServiceUpdateData {
  id: string
  org_id: string
}

export interface Status {
}

export interface StatusBasic {
  detail?: string
  version?: string
}

export interface StatusBasicLoadMatch {
  detail?: string
  version?: string
}

export interface StorageRegion {
  label: string
  slug: string
}

export interface StorageRegionLoadMatch {
  id: string
}

export interface StorageRegionListMatch {
  label?: string
  slug?: string
}

export interface Swift {
  auth_mode?: string
  auth_secret?: string
  auth_username?: string
  created_at?: string
  disable_reason?: string
  extra_header_1?: string
  extra_header_2?: string
  extra_value_1?: string
  extra_value_2?: string
  is_active?: boolean
  mode?: string
  name: string
  pending_validation?: boolean
  priority?: number
  slug_perm?: string
  updated_at?: string
  upstream_url: string
  verify_ssl?: boolean
}

export interface SwiftLoadMatch {
  id: string
  identifier: any
  owner: any
}

export interface SwiftListMatch {
  identifier: any
  owner: any
}

export interface SwiftCreateData {
  identifier: any
  owner: any
}

export interface SwiftUpdateData {
  id: string
  identifier: any
  owner: any
}

export interface Sync {
}

export interface Tag {
}

export interface Team {
}

export interface Terraform {
}

export interface Test {
}

export interface Token {
}

export interface TransferRegion {
}

export interface User {
  created?: string
  key?: string
  slug_perm?: string
}

export interface UserListMatch {
  created?: string
  key?: string
  slug_perm?: string
}

export interface UserAuthToken {
}

export interface UserAuthTokenCreateData {
}

export interface UserAuthenticationToken {
  created?: string
  key?: string
  slug_perm?: string
}

export interface UserAuthenticationTokenCreateData {
  created?: string
  key?: string
  slug_perm?: string
}

export interface UserAuthenticationTokenUpdateData {
  slug_perm: any
}

export interface UserBrief {
  authenticated?: boolean
  email?: string
  name?: string
  profile_url?: string
  self_url?: string
  slug?: string
  slug_perm?: string
}

export interface UserBriefLoadMatch {
  authenticated?: boolean
  email?: string
  name?: string
  profile_url?: string
  self_url?: string
  slug?: string
  slug_perm?: string
}

export interface UserProfile {
  company?: string
  first_name: string
  job_title?: string
  joined_at?: string
  last_name: string
  name?: string
  slug?: string
  slug_perm?: string
  tagline?: string
  url?: string
}

export interface UserProfileLoadMatch {
  id: string
}

export interface Vagrant {
}

export interface Validate {
}

export interface Version {
}

export interface Vulnerability {
  created_at?: string
  has_vulnerability?: boolean
  identifier: string
  max_severity?: string
  num_vulnerability?: number
  package: Record<string, any>
  result: any[]
  scan_id: number
  target: string
  type: string
}

export interface VulnerabilityLoadMatch {
  id: string
}

export interface VulnerabilityListMatch {
  owner: any
  package?: any
  repo: any
  identifier?: any
}

export interface VulnerabilityPolicy {
}

export interface Webhook {
}

export interface WebhookRemoveMatch {
  identifier: any
  owner: any
  repo: any
}

export interface X509Ecdsa {
}

export interface X509Rsa {
}

