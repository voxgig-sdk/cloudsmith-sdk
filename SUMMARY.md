# Cloudsmith API (v1)

The API to the Cloudsmith Service

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 131 entities and 325 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Abort](docs/api/abort.html)

SDK operations: .

### [Alpine](docs/api/alpine.html)

SDK operations: .

### [AuditLog](docs/api/audit_log.html)

SDK operations: .

### [Basic](docs/api/basic.html)

SDK operations: .

### [Cargo](docs/api/cargo.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [Cocoapod](docs/api/cocoapod.html)

SDK operations: .

### [Complete](docs/api/complete.html)

SDK operations: .

### [Composer](docs/api/composer.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [Conan](docs/api/conan.html)

SDK operations: .

### [Conda](docs/api/conda.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [Copy](docs/api/copy.html)

SDK operations: .

### [Cran](docs/api/cran.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [Dart](docs/api/dart.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [Deb](docs/api/deb.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `component`: The component to fetch from the upstream
- `created_at`: The datetime the upstream source was created.

### [DenyPolicy](docs/api/deny_policy.html)

SDK operations: .

### [Dependency](docs/api/dependency.html)

SDK operations: .

### [Disable](docs/api/disable.html)

SDK operations: .

### [DistributionFull](docs/api/distribution_full.html)

Results: Available package formats retrieved; OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `slug`: The slug identifier for this distribution
- `versions`: A list of the versions for this distribution

### [Distro](docs/api/distro.html)

SDK operations: .

### [Docker](docs/api/docker.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [DynamicMapping](docs/api/dynamic_mapping.html)

Results: Retrieved the list of OpenID Connect dynamic mappings for the selected provider setting; Retrieved the specified OpenID Connect dynamic mapping.

SDK operations: `list`, `load`.

Key fields to recognise:

- `claim_value`: The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`. Note: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.
- `service_account`: The service account associated with the provider setting and `claim_value` Note: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.

### [Ecdsa](docs/api/ecdsa.html)

SDK operations: .

### [Enable](docs/api/enable.html)

SDK operations: .

### [Entitlement](docs/api/entitlement.html)

Results: The entitlement token statistics have been reset.; The entitlement token has been disabled.; The entitlement token has been enabled.; Retrieved the metrics for entitlements.; Soft-deleted the specified entitlement token successfully.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `active`: Number of packages with at least 1 download
- `inactive`: Packages with zero downloads
- `total`: Total number of packages in repo

### [Evaluation](docs/api/evaluation.html)

SDK operations: .

### [File](docs/api/file.html)

Results: The multipart upload was aborted successfully.; The upload request was accepted; Validation was successful, parameters are OK.

SDK operations: `create`.

### [Format](docs/api/format.html)

Results: Available package formats retrieved; OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `description`: Description of the package format
- `distributions`: The distributions supported by this package format
- `extensions`: A non-exhaustive list of extensions supported
- `name`: Name for the package format
- `premium`: If true the package format is a premium-only feature

### [Geoip](docs/api/geoip.html)

SDK operations: .

### [Gon](docs/api/gon.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [Gpg](docs/api/gpg.html)

SDK operations: .

### [Group](docs/api/group.html)

SDK operations: .

### [Helm](docs/api/helm.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [Hex](docs/api/hex.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [History](docs/api/history.html)

SDK operations: .

### [Huggingface](docs/api/huggingface.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [Info](docs/api/info.html)

SDK operations: .

### [Invite](docs/api/invite.html)

SDK operations: .

### [LicensePolicy](docs/api/license_policy.html)

SDK operations: .

### [Limit](docs/api/limit.html)

SDK operations: .

### [Luarock](docs/api/luarock.html)

SDK operations: .

### [Maven](docs/api/maven.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [Member](docs/api/member.html)

SDK operations: .

### [Move](docs/api/move.html)

SDK operations: .

### [Namespace](docs/api/namespace.html)

Results: OK.

SDK operations: `list`, `load`.

### [NamespaceAuditLog](docs/api/namespace_audit_log.html)

Results: Retrieved the list of audit log entries.

SDK operations: `load`.

### [Npm](docs/api/npm.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [Nuget](docs/api/nuget.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [OpenidConnect](docs/api/openid_connect.html)

SDK operations: .

### [Org](docs/api/org.html)

Results: Org member API key has been refreshed.; SAML Group Sync has been disabled for this organization.; SAML Group Sync has been enabled for this organization.; OK; Removed the organization member successfully.; Deleted the service successfully.; No Content; Deleted the organization invite successfully.; Deleted the specified OpenID Connect provider setting successfully.; Mapping removed successfully; Deleted the team successfully.; The team members were replaced.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `location`: The city/town/area your organization is based in.
- `tagline`: A short public descriptive for your organization.

### [OrganizationGroupSync](docs/api/organization_group_sync.html)

Results: The SAML Group Sync mapping was created.; Retrieved the list of all SAML Group Sync mappings for this org.

SDK operations: `create`, `list`.

### [OrganizationGroupSyncStatus](docs/api/organization_group_sync_status.html)

Results: Retrieved the SAML Group Sync status for this organization.

SDK operations: `load`.

### [OrganizationInvite](docs/api/organization_invite.html)

Results: Invite sent; Retrieved the list of organization invites; Invite updated.

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `email`: The email of the user to be invited.
- `role`: The role to be assigned to the invited user.
- `user`: The slug of the user to be invited.

### [OrganizationInviteExtend](docs/api/organization_invite_extend.html)

Results: The invite has been extended; The invite has been resent.

SDK operations: `create`.

Key fields to recognise:

- `email`: The email of the user to be invited.
- `role`: The role to be assigned to the invited user.
- `slug_perm`: The slug_perm of the invite to be extended.
- `user`: The slug of the user to be invited.

### [OrganizationMembership](docs/api/organization_membership.html)

Results: Retrieved the list of organization&#39;s members; OK.

SDK operations: `list`, `load`, `update`.

### [OrganizationMembershipRoleUpdate](docs/api/organization_membership_role_update.html)

Results: OK.

SDK operations: `update`.

### [OrganizationMembershipVisibilityUpdate](docs/api/organization_membership_visibility_update.html)

Results: OK.

SDK operations: `update`.

### [OrganizationPackageLicensePolicy](docs/api/organization_package_license_policy.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

### [OrganizationPackageVulnerabilityPolicy](docs/api/organization_package_vulnerability_policy.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `allow_unknown_severity`: Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy.

### [OrganizationSamlAuth](docs/api/organization_saml_auth.html)

Results: Retrieved the SAML Authentication settings.; Updated the SAML Authentication settings.

SDK operations: `load`, `update`.

Key fields to recognise:

- `saml_metadata_inline`: If configured, SAML metadata will be used as entered instead of retrieved from a remote URL.
- `saml_metadata_url`: If configured, SAML metadata be retrieved from a remote URL.

### [OrganizationTeam](docs/api/organization_team.html)

Results: Team created; Retrieved the list of teams within the org; Retrieved the details of the requested team.; Updated the specified team.

SDK operations: `create`, `list`, `load`, `update`.

### [OrganizationTeamMember](docs/api/organization_team_member.html)

Results: The users were added to the team.; Retrieved users for the specified team.

SDK operations: `create`, `list`.

### [Oss](docs/api/oss.html)

SDK operations: .

### [P2n](docs/api/p2n.html)

SDK operations: .

### [Package](docs/api/package.html)

Results: Copied specified package to destination repository.; Moved specified package to destination repository.; Changed the package&#39;s quarantine status.; Modified tags for the package.; Upload acknowledged and queued for synchronization.; Validation was successful, parameters are OK.; Scheduled the package for resynchronisation.; Scheduled the package for scanning.; Retrieved the list of package groups.; Retrieved the list of packages; Retrieved stored dependencies for specified package.; Retrieved the metrics for packages.; Retrieved the specified package successfully.; Retrieved status for specified package.; Deleted the specified package successfully.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `active`: Number of packages with at least 1 download
- `dependencies_checksum_md5`: A checksum of all of the package&#39;s dependencies.
- `description`: A textual description of this package.
- `distro`: The distributions supported by this package format
- `distro_version`: A list of the versions for this distribution

### [PackageDenyPolicy](docs/api/package_deny_policy.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `enabled`: Whether this rule is enabled or disabled.
- `package_query_string`: Packages that match this query will trigger this deny rule.

### [PackageFilePartsUpload](docs/api/package_file_parts_upload.html)

Results: Information for multipart uploaded retrieved successfully.

SDK operations: `load`.

Key fields to recognise:

- `identifier`: The identifier for the file to use uploading parts.
- `upload_querystring`: The querystring to use for the next-step PUT upload.
- `upload_url`: The URL to use for the next-step PUT upload

### [PackageFileUpload](docs/api/package_file_upload.html)

Results: The multipart upload was completed successfully.

SDK operations: `create`.

### [PackageLicensePolicyEvaluation](docs/api/package_license_policy_evaluation.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`.

### [PackageVersionBadge](docs/api/package_version_badge.html)

Results: OK.

SDK operations: `load`.

### [PackageVulnerabilityPolicyEvaluation](docs/api/package_vulnerability_policy_evaluation.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `allow_unknown_severity`: Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy.

### [Privilege](docs/api/privilege.html)

SDK operations: .

### [Profile](docs/api/profile.html)

SDK operations: .

### [ProviderSetting](docs/api/provider_setting.html)

Results: Retrieved the list of OpenID Connect provider settings for the org; OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `claims`: The set of claims that any received tokens from the provider must contain to authenticate as the configured service account.
- `enabled`: Whether the provider settings should be used for incoming OIDC requests.
- `mapping_claim`: The OIDC claim to use for mapping to service accounts in dynamic_mappings. Note: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.
- `name`: The name of the provider settings are being configured for
- `provider_url`: The URL from the provider that serves as the base for the OpenID configuration. For example, if the OpenID configuration is available at https://token.actions.githubusercontent.com/.well-known/openid-configuration, the provider URL would be https://token.actions.githubusercontent.com/

### [ProviderSettingsWrite](docs/api/provider_settings_write.html)

Results: Created the OpenID Connect provider settings for the org; Updated the specified OpenID Connect provider setting for the org.

SDK operations: `create`, `patch`, `update`.

Key fields to recognise:

- `claims`: The set of claims that any received tokens from the provider must contain to authenticate as the configured service account.
- `dynamic_mappings`: The dynamic mappings of `mapping_claim` values to service accounts. Cannot be provided if `service_accounts` is also set. Note: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.
- `enabled`: Whether the provider settings should be used for incoming OIDC requests.
- `mapping_claim`: The OIDC claim to use for mapping to service accounts in dynamic_mappings. Cannot be provided if `service_accounts` is also set. Note: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.
- `name`: The name of the provider settings are being configured for

### [Python](docs/api/python.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [Quarantine](docs/api/quarantine.html)

SDK operations: .

### [Quota](docs/api/quota.html)

Results: OK.

SDK operations: `load`.

### [Raw](docs/api/raw.html)

SDK operations: .

### [Refresh](docs/api/refresh.html)

SDK operations: .

### [Regenerate](docs/api/regenerate.html)

SDK operations: .

### [Repo](docs/api/repo.html)

Results: GeoIP has been disabled for this repository.; GeoIP has been enabled for this repository.; Repository region transfer initiated.; The repository was created.; Retrieved the list of repositories; Retrieved the specified repository; The repository was updated.; Repository privileges updated; No Content; The repository has been scheduled for deletion.; Repository privileges replaced.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `cdn_url`: Base URL from which packages and other artifacts are downloaded.
- `content_kind`: The repository content kind determines whether this repository contains packages, or provides a distribution of packages from other repositories. You can only select the content kind at repository creation time.
- `contextual_auth_realm`: If checked, missing credentials for this repository where basic authentication is required shall present an enriched value in the &#39;WWW-Authenticate&#39; header containing the namespace and repository. This can be useful for tooling such as SBT where the authentication realm is used to distinguish and disambiguate credentials.
- `copy_own`: If checked, users can copy any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. This takes precedence over privileges configured in the &#39;Access Controls&#39; section of the repository, and any inherited from the org.
- `copy_packages`: This defines the minimum level of privilege required for a user to copy packages. Unless the package was uploaded by that user, in which the permission may be overridden by the user-specific copy setting.

### [RepositoryAuditLog](docs/api/repository_audit_log.html)

Results: Retrieved the list of audit log entries.

SDK operations: `list`.

### [RepositoryEcdsaKey](docs/api/repository_ecdsa_key.html)

Results: The provided ECDSA key is the same as the current ECDSA key.; The provided ECDSA key was assigned to the Repository.; An ECDSA key was generated for the Repository.; Retrieved the active ECDSA key.

SDK operations: `create`, `load`.

Key fields to recognise:

- `active`: If selected this is the active key for this repository.
- `default`: If selected this is the default key for this repository.
- `fingerprint`: The long identifier used by ECDSA for this key.
- `public_key`: The public key given to repository users.
- `ssh_fingerprint`: The SSH fingerprint used by ECDSA for this key.

### [RepositoryGeoIpRule](docs/api/repository_geo_ip_rule.html)

Results: OK.

SDK operations: `load`, `patch`, `update`.

### [RepositoryGeoIpStatus](docs/api/repository_geo_ip_status.html)

Results: Retrieved the GeoIP status for this repository.

SDK operations: `load`.

Key fields to recognise:

- `geoip_enabled`: If checked, any access to the website or downloads for this repository is allowed/denied according to the configured Geo/IP restriction rules.

### [RepositoryGeoIpTestAddress](docs/api/repository_geo_ip_test_address.html)

Results: Successfuly tested addresses against the repository&#39;s GeoIP rules.

SDK operations: `create`.

### [RepositoryGpgKey](docs/api/repository_gpg_key.html)

Results: The provided GPG key is the same as the current GPG key.; The provided GPG key was assigned to the Repository.; A GPG key was generated for the Repository.; Retrieved the active GPG key.

SDK operations: `create`, `load`.

Key fields to recognise:

- `active`: If selected this is the active key for this repository.
- `default`: If selected this is the default key for this repository.
- `fingerprint`: The long identifier used by GPG for this key.
- `public_key`: The public key given to repository users.

### [RepositoryPrivilegeInput](docs/api/repository_privilege_input.html)

Results: Retrieved privileges for the specified repository.

SDK operations: `list`.

Key fields to recognise:

- `privilege`: The level of privilege that the user or team should be granted to the specified repository.
- `service`: The service identifier (slug).
- `team`: The team identifier (slug).
- `user`: The user identifier (slug).

### [RepositoryRetentionRule](docs/api/repository_retention_rule.html)

Results: Retrieved the retention rules for the repository.; Updated the retention rules for the repository.

SDK operations: `load`, `update`.

Key fields to recognise:

- `retention_count_limit`: The maximum X number of packages to retain.
- `retention_days_limit`: The X number of days of packages to retain.
- `retention_enabled`: If checked, the retention lifecycle rules will be activated for the repository. Any packages that don&#39;t match will be deleted automatically, and the rest are retained.
- `retention_group_by_format`: If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are different formats.
- `retention_group_by_name`: If checked, retention will apply to groups of packages by name rather than all packages. For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgBs and one (1) PkgA.

### [RepositoryRsaKey](docs/api/repository_rsa_key.html)

Results: The provided RSA key is the same as the current RSA key.; The provided RSA key was assigned to the Repository.; An RSA key was generated for the Repository.; Retrieved the active RSA key.

SDK operations: `create`, `load`.

Key fields to recognise:

- `active`: If selected this is the active key for this repository.
- `default`: If selected this is the default key for this repository.
- `fingerprint`: The long identifier used by RSA for this key.
- `public_key`: The public key given to repository users.
- `ssh_fingerprint`: The SSH fingerprint used by RSA for this key.

### [RepositoryToken](docs/api/repository_token.html)

Results: Created the specified entitlement; Retrieved the list of entitlement tokens; Retrieved the specified entitlement; Updated the specified entitlement.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `created_at`: The datetime the token was updated at.
- `default`: If selected this is the default token for this repository.
- `eula_accepted_at`: The datetime the EULA was accepted at.
- `eula_required`: If checked, a EULA acceptance is required for this token.
- `identifier`: Deprecated (23-05-15): Please use &#39;slug_perm&#39; instead. Previously: A monotonically increasing number that identified an entitlement within a repository.

### [RepositoryTokenRefresh](docs/api/repository_token_refresh.html)

Results: The entitlement token has been refreshed.

SDK operations: `create`.

Key fields to recognise:

- `created_at`: The datetime the token was updated at.
- `default`: If selected this is the default token for this repository.
- `eula_accepted_at`: The datetime the EULA was accepted at.
- `eula_required`: If checked, a EULA acceptance is required for this token.
- `identifier`: Deprecated (23-05-15): Please use &#39;slug_perm&#39; instead. Previously: A monotonically increasing number that identified an entitlement within a repository.

### [RepositoryTokenSync](docs/api/repository_token_sync.html)

Results: The tokens have been synchronised from the source repository.

SDK operations: `create`.

Key fields to recognise:

- `tokens`: The entitlements that have been synchronised.

### [RepositoryWebhook](docs/api/repository_webhook.html)

Results: Created the specified webhook; Retrieved the list of webhooks; OK; Updated the specified webhook.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `identifier`: Deprecated (23-05-15): Please use &#39;slug_perm&#39; instead. Previously: A monotonically increasing number that identified a webhook request within a repository.
- `is_active`: If enabled, the webhook will trigger on subscribed events and send payloads to the configured target URL.
- `package_query`: The package-based search query for webhooks to fire. This uses the same syntax as the standard search used for repositories, and also supports boolean logic operators such as OR/AND/NOT and parentheses for grouping. If a package does not match, the webhook will not fire.
- `request_body_format`: The format of the payloads for webhook requests. Valid options are: (0) JSON, (1) JSON array, (2) form encoded JSON and (3) Handlebars template.
- `request_body_template_format`: The format of the payloads for webhook requests. Valid options are: (0) Generic/user defined, (1) JSON and (2) XML.

### [RepositoryX509EcdsaCertificate](docs/api/repository_x509_ecdsa_certificate.html)

Results: Retrieved the active X.509 ECDSA Certificate.

SDK operations: `load`.

Key fields to recognise:

- `active`: If selected this is the active key for this repository.
- `certificate`: The issued certificate.
- `certificate_chain`: Base64 encoded CA certificate chain.
- `certificate_fingerprint`: The SHA-256 long identifier used
- `default`: If selected this is the default key for this repository.

### [RepositoryX509RsaCertificate](docs/api/repository_x509_rsa_certificate.html)

Results: Retrieved the active X.509 RSA Certificate.

SDK operations: `load`.

Key fields to recognise:

- `active`: If selected this is the active key for this repository.
- `certificate`: The issued certificate.
- `certificate_chain`: Base64 encoded CA certificate chain.
- `certificate_fingerprint`: The SHA-256 long identifier used
- `default`: If selected this is the default key for this repository.

### [Reset](docs/api/reset.html)

SDK operations: .

### [ResourcesRateCheck](docs/api/resources_rate_check.html)

Results: Rate check was successful.

SDK operations: `load`.

Key fields to recognise:

- `interval`: The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window.
- `limit`: The maximum number of requests that you are permitted to send per hour
- `remaining`: The number of requests that are remaining in the current rate limit window
- `reset`: The UTC epoch timestamp at which the current rate limit window will reset
- `reset_iso_8601`: The ISO 8601 datetime at which the current rate limit window will reset

### [Resync](docs/api/resync.html)

SDK operations: .

### [Retention](docs/api/retention.html)

SDK operations: .

### [Rpm](docs/api/rpm.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `distro_version`: The distribution version that packages found on this upstream will be associated with.

### [Rsa](docs/api/rsa.html)

SDK operations: .

### [Ruby](docs/api/ruby.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [SamlGroupSync](docs/api/saml_group_sync.html)

SDK operations: .

### [Scan](docs/api/scan.html)

SDK operations: .

### [Self](docs/api/self.html)

SDK operations: .

### [Service](docs/api/service.html)

Results: Created the service within the org; Refreshed the service token successfully.; Retrieved the list of services within the org; OK; Updated the service within the org.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `description`: The description of the service
- `key`: The API key of the service
- `key_expires_at`: The time at which the API key will expire. This will only be populated if the Organization has an active API Key Policy.
- `name`: The name of the service
- `role`: The role of the service.

### [Status](docs/api/status.html)

SDK operations: .

### [StatusBasic](docs/api/status_basic.html)

Results: Status check was successful.

SDK operations: `load`.

Key fields to recognise:

- `detail`: The message describing the state of the API.
- `version`: The current version for the Cloudsmith service.

### [StorageRegion](docs/api/storage_region.html)

Results: Available storage regions retrieved; OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `label`: Name of the storage region
- `slug`: Slug for the storage region

### [Swift](docs/api/swift.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `auth_mode`: The authentication mode to use when accessing this upstream.
- `auth_secret`: Secret to provide with requests to upstream.
- `auth_username`: Username to provide with requests to upstream.
- `created_at`: The datetime the upstream source was created.
- `extra_header_1`: The key for extra header #1 to send to upstream.

### [Sync](docs/api/sync.html)

SDK operations: .

### [Tag](docs/api/tag.html)

SDK operations: .

### [Team](docs/api/team.html)

SDK operations: .

### [Terraform](docs/api/terraform.html)

SDK operations: .

### [Test](docs/api/test.html)

SDK operations: .

### [Token](docs/api/token.html)

SDK operations: .

### [TransferRegion](docs/api/transfer_region.html)

SDK operations: .

### [User](docs/api/user.html)

Results: Retrieved the API key for the user that is currently authenticated.

SDK operations: `list`.

### [UserAuthToken](docs/api/user_auth_token.html)

Results: Retrieved/created user API token/key.

SDK operations: `create`.

### [UserAuthenticationToken](docs/api/user_authentication_token.html)

Results: Created an API key for the user that is currently authenticated.; Successfully refreshed the API key.

SDK operations: `create`, `update`.

Key fields to recognise:

- `created`: The time at which the API key was created.
- `key`: The unique API key used for authentication. This will be obfuscated on read-only HTTP methods.
- `slug_perm`: The slug_perm for token.

### [UserBrief](docs/api/user_brief.html)

Results: Retrieved brief for the current user.

SDK operations: `load`.

Key fields to recognise:

- `authenticated`: If true then you&#39;re logged in as a user.
- `email`: Your email address that we use to contact you. This is only visible to you.
- `name`: The full name of the user (if any).
- `profile_url`: The URL for the full profile of the user.

### [UserProfile](docs/api/user_profile.html)

Results: Retrieved details for the specified user (or current user, if none was specified).

SDK operations: `load`.

Key fields to recognise:

- `tagline`: Your tagline is a sentence about you. Make it funny. Make it professional. Either way, it&#39;s public and it represents who you are.

### [Vagrant](docs/api/vagrant.html)

SDK operations: .

### [Validate](docs/api/validate.html)

SDK operations: .

### [Version](docs/api/version.html)

SDK operations: .

### [Vulnerability](docs/api/vulnerability.html)

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `created_at`: The time this scan result was stored.
- `has_vulnerabilities`: Do the results contain any known vulnerabilities?
- `scan_id`: Deprecated (23-05-15): Please use &#39;identifier&#39; instead. Previously: A monotonically increasing number that identified a scan within a repository.

### [VulnerabilityPolicy](docs/api/vulnerability_policy.html)

SDK operations: .

### [Webhook](docs/api/webhook.html)

Results: Deleted the specified webhook successfully.

SDK operations: `remove`.

### [X509Ecdsa](docs/api/x509_ecdsa.html)

SDK operations: .

### [X509Rsa](docs/api/x509_rsa.html)

SDK operations: .

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Cargo](docs/api/cargo.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/cargo/` | Required |
| [Cargo](docs/api/cargo.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/cargo/` | Required |
| [Cargo](docs/api/cargo.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/` | Required |
| [Cargo](docs/api/cargo.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/` | Required |
| [Cargo](docs/api/cargo.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/` | Required |
| [Composer](docs/api/composer.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/composer/` | Required |
| [Composer](docs/api/composer.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/composer/` | Required |
| [Composer](docs/api/composer.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/composer/{slug_perm}/` | Required |
| [Composer](docs/api/composer.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/composer/{slug_perm}/` | Required |
| [Composer](docs/api/composer.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/composer/{slug_perm}/` | Required |
| [Conda](docs/api/conda.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/conda/` | Required |
| [Conda](docs/api/conda.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/conda/` | Required |
| [Conda](docs/api/conda.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/conda/{slug_perm}/` | Required |
| [Conda](docs/api/conda.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/conda/{slug_perm}/` | Required |
| [Conda](docs/api/conda.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/conda/{slug_perm}/` | Required |
| [Cran](docs/api/cran.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/cran/` | Required |
| [Cran](docs/api/cran.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/cran/` | Required |
| [Cran](docs/api/cran.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/cran/{slug_perm}/` | Required |
| [Cran](docs/api/cran.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/cran/{slug_perm}/` | Required |
| [Cran](docs/api/cran.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/cran/{slug_perm}/` | Required |
| [Dart](docs/api/dart.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/dart/` | Required |
| [Dart](docs/api/dart.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/dart/` | Required |
| [Dart](docs/api/dart.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/dart/{slug_perm}/` | Required |
| [Dart](docs/api/dart.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/dart/{slug_perm}/` | Required |
| [Dart](docs/api/dart.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/dart/{slug_perm}/` | Required |
| [Deb](docs/api/deb.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/deb/` | Required |
| [Deb](docs/api/deb.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/deb/` | Required |
| [Deb](docs/api/deb.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/deb/{slug_perm}/` | Required |
| [Deb](docs/api/deb.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/deb/{slug_perm}/` | Required |
| [Deb](docs/api/deb.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/deb/{slug_perm}/` | Required |
| [DistributionFull](docs/api/distribution_full.html) | `list` | `GET /distros/` | Required |
| [DistributionFull](docs/api/distribution_full.html) | `load` | `GET /distros/{slug}/` | Required |
| [Docker](docs/api/docker.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/docker/` | Required |
| [Docker](docs/api/docker.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/docker/` | Required |
| [Docker](docs/api/docker.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/docker/{slug_perm}/` | Required |
| [Docker](docs/api/docker.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/docker/{slug_perm}/` | Required |
| [Docker](docs/api/docker.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/docker/{slug_perm}/` | Required |
| [DynamicMapping](docs/api/dynamic_mapping.html) | `list` | `GET /orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/` | Required |
| [DynamicMapping](docs/api/dynamic_mapping.html) | `load` | `GET /orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/{claim_value}/` | Required |
| [Entitlement](docs/api/entitlement.html) | `create` | `POST /entitlements/{owner}/{repo}/{identifier}/reset/` | Required |
| [Entitlement](docs/api/entitlement.html) | `create` | `POST /entitlements/{owner}/{repo}/{identifier}/disable/` | Required |
| [Entitlement](docs/api/entitlement.html) | `create` | `POST /entitlements/{owner}/{repo}/{identifier}/enable/` | Required |
| [Entitlement](docs/api/entitlement.html) | `load` | `GET /metrics/entitlements/{owner}/{repo}/` | Required |
| [Entitlement](docs/api/entitlement.html) | `load` | `GET /metrics/entitlements/{owner}/` | Required |
| [Entitlement](docs/api/entitlement.html) | `remove` | `DELETE /entitlements/{owner}/{repo}/{identifier}/` | Required |
| [File](docs/api/file.html) | `create` | `POST /files/{owner}/{repo}/{identifier}/abort/` | Required |
| [File](docs/api/file.html) | `create` | `POST /files/{owner}/{repo}/` | Required |
| [File](docs/api/file.html) | `create` | `POST /files/{owner}/{repo}/validate/` | Required |
| [Format](docs/api/format.html) | `list` | `GET /formats/` | Required |
| [Format](docs/api/format.html) | `load` | `GET /formats/{slug}/` | Required |
| [Gon](docs/api/gon.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/go/` | Required |
| [Gon](docs/api/gon.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/go/` | Required |
| [Gon](docs/api/gon.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/go/{slug_perm}/` | Required |
| [Gon](docs/api/gon.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/go/{slug_perm}/` | Required |
| [Gon](docs/api/gon.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/go/{slug_perm}/` | Required |
| [Helm](docs/api/helm.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/helm/` | Required |
| [Helm](docs/api/helm.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/helm/` | Required |
| [Helm](docs/api/helm.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/helm/{slug_perm}/` | Required |
| [Helm](docs/api/helm.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/helm/{slug_perm}/` | Required |
| [Helm](docs/api/helm.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/helm/{slug_perm}/` | Required |
| [Hex](docs/api/hex.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/hex/` | Required |
| [Hex](docs/api/hex.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/hex/` | Required |
| [Hex](docs/api/hex.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/hex/{slug_perm}/` | Required |
| [Hex](docs/api/hex.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/hex/{slug_perm}/` | Required |
| [Hex](docs/api/hex.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/hex/{slug_perm}/` | Required |
| [Huggingface](docs/api/huggingface.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/huggingface/` | Required |
| [Huggingface](docs/api/huggingface.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/huggingface/` | Required |
| [Huggingface](docs/api/huggingface.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/` | Required |
| [Huggingface](docs/api/huggingface.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/` | Required |
| [Huggingface](docs/api/huggingface.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/` | Required |
| [Maven](docs/api/maven.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/maven/` | Required |
| [Maven](docs/api/maven.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/maven/` | Required |
| [Maven](docs/api/maven.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/maven/{slug_perm}/` | Required |
| [Maven](docs/api/maven.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/maven/{slug_perm}/` | Required |
| [Maven](docs/api/maven.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/maven/{slug_perm}/` | Required |
| [Namespace](docs/api/namespace.html) | `list` | `GET /namespaces/` | Required |
| [Namespace](docs/api/namespace.html) | `load` | `GET /namespaces/{slug}/` | Required |
| [NamespaceAuditLog](docs/api/namespace_audit_log.html) | `load` | `GET /audit-log/{owner}/` | Required |
| [Npm](docs/api/npm.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/npm/` | Required |
| [Npm](docs/api/npm.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/npm/` | Required |
| [Npm](docs/api/npm.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/npm/{slug_perm}/` | Required |
| [Npm](docs/api/npm.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/npm/{slug_perm}/` | Required |
| [Npm](docs/api/npm.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/npm/{slug_perm}/` | Required |
| [Nuget](docs/api/nuget.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/nuget/` | Required |
| [Nuget](docs/api/nuget.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/nuget/` | Required |
| [Nuget](docs/api/nuget.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/` | Required |
| [Nuget](docs/api/nuget.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/` | Required |
| [Nuget](docs/api/nuget.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/` | Required |
| [Org](docs/api/org.html) | `create` | `POST /orgs/{org}/members/{member}/refresh/` | Required |
| [Org](docs/api/org.html) | `create` | `POST /orgs/{org}/saml-group-sync/disable/` | Required |
| [Org](docs/api/org.html) | `create` | `POST /orgs/{org}/saml-group-sync/enable/` | Required |
| [Org](docs/api/org.html) | `list` | `GET /orgs/{org}/license-policy-violation/` | Required |
| [Org](docs/api/org.html) | `list` | `GET /orgs/{org}/vulnerability-policy-violation/` | Required |
| [Org](docs/api/org.html) | `list` | `GET /orgs/` | Required |
| [Org](docs/api/org.html) | `load` | `GET /orgs/{org}/members/{member}/remove/` | Required |
| [Org](docs/api/org.html) | `load` | `GET /orgs/{org}/` | Required |
| [Org](docs/api/org.html) | `remove` | `DELETE /orgs/{org}/members/{member}/` | Required |
| [Org](docs/api/org.html) | `remove` | `DELETE /orgs/{org}/services/{service}/` | Required |
| [Org](docs/api/org.html) | `remove` | `DELETE /orgs/{org}/deny-policy/{slug_perm}/` | Required |
| [Org](docs/api/org.html) | `remove` | `DELETE /orgs/{org}/invites/{slug_perm}/` | Required |
| [Org](docs/api/org.html) | `remove` | `DELETE /orgs/{org}/license-policy/{slug_perm}/` | Required |
| [Org](docs/api/org.html) | `remove` | `DELETE /orgs/{org}/openid-connect/{slug_perm}/` | Required |
| [Org](docs/api/org.html) | `remove` | `DELETE /orgs/{org}/saml-group-sync/{slug_perm}/` | Required |
| [Org](docs/api/org.html) | `remove` | `DELETE /orgs/{org}/vulnerability-policy/{slug_perm}/` | Required |
| [Org](docs/api/org.html) | `remove` | `DELETE /orgs/{org}/teams/{team}/` | Required |
| [Org](docs/api/org.html) | `remove` | `DELETE /orgs/{org}/` | Required |
| [Org](docs/api/org.html) | `update` | `PUT /orgs/{org}/teams/{team}/members` | Required |
| [OrganizationGroupSync](docs/api/organization_group_sync.html) | `create` | `POST /orgs/{org}/saml-group-sync/` | Required |
| [OrganizationGroupSync](docs/api/organization_group_sync.html) | `list` | `GET /orgs/{org}/saml-group-sync/` | Required |
| [OrganizationGroupSyncStatus](docs/api/organization_group_sync_status.html) | `load` | `GET /orgs/{org}/saml-group-sync/status/` | Required |
| [OrganizationInvite](docs/api/organization_invite.html) | `create` | `POST /orgs/{org}/invites/` | Required |
| [OrganizationInvite](docs/api/organization_invite.html) | `list` | `GET /orgs/{org}/invites/` | Required |
| [OrganizationInvite](docs/api/organization_invite.html) | `update` | `PATCH /orgs/{org}/invites/{slug_perm}/` | Required |
| [OrganizationInviteExtend](docs/api/organization_invite_extend.html) | `create` | `POST /orgs/{org}/invites/{slug_perm}/extend/` | Required |
| [OrganizationInviteExtend](docs/api/organization_invite_extend.html) | `create` | `POST /orgs/{org}/invites/{slug_perm}/resend/` | Required |
| [OrganizationMembership](docs/api/organization_membership.html) | `list` | `GET /orgs/{org}/members/` | Required |
| [OrganizationMembership](docs/api/organization_membership.html) | `load` | `GET /orgs/{org}/members/{member}/` | Required |
| [OrganizationMembership](docs/api/organization_membership.html) | `update` | `PATCH /orgs/{org}/members/{member}/` | Required |
| [OrganizationMembershipRoleUpdate](docs/api/organization_membership_role_update.html) | `update` | `PATCH /orgs/{org}/members/{member}/update-role/` | Required |
| [OrganizationMembershipVisibilityUpdate](docs/api/organization_membership_visibility_update.html) | `update` | `PATCH /orgs/{org}/members/{member}/update-visibility/` | Required |
| [OrganizationPackageLicensePolicy](docs/api/organization_package_license_policy.html) | `create` | `POST /orgs/{org}/license-policy/` | Required |
| [OrganizationPackageLicensePolicy](docs/api/organization_package_license_policy.html) | `list` | `GET /orgs/{org}/license-policy/` | Required |
| [OrganizationPackageLicensePolicy](docs/api/organization_package_license_policy.html) | `load` | `GET /orgs/{org}/license-policy/{slug_perm}/` | Required |
| [OrganizationPackageLicensePolicy](docs/api/organization_package_license_policy.html) | `patch` | `PATCH /orgs/{org}/license-policy/{slug_perm}/` | Required |
| [OrganizationPackageLicensePolicy](docs/api/organization_package_license_policy.html) | `update` | `PUT /orgs/{org}/license-policy/{slug_perm}/` | Required |
| [OrganizationPackageVulnerabilityPolicy](docs/api/organization_package_vulnerability_policy.html) | `create` | `POST /orgs/{org}/vulnerability-policy/` | Required |
| [OrganizationPackageVulnerabilityPolicy](docs/api/organization_package_vulnerability_policy.html) | `list` | `GET /orgs/{org}/vulnerability-policy/` | Required |
| [OrganizationPackageVulnerabilityPolicy](docs/api/organization_package_vulnerability_policy.html) | `load` | `GET /orgs/{org}/vulnerability-policy/{slug_perm}/` | Required |
| [OrganizationPackageVulnerabilityPolicy](docs/api/organization_package_vulnerability_policy.html) | `patch` | `PATCH /orgs/{org}/vulnerability-policy/{slug_perm}/` | Required |
| [OrganizationPackageVulnerabilityPolicy](docs/api/organization_package_vulnerability_policy.html) | `update` | `PUT /orgs/{org}/vulnerability-policy/{slug_perm}/` | Required |
| [OrganizationSamlAuth](docs/api/organization_saml_auth.html) | `load` | `GET /orgs/{org}/saml-authentication` | Required |
| [OrganizationSamlAuth](docs/api/organization_saml_auth.html) | `update` | `PATCH /orgs/{org}/saml-authentication` | Required |
| [OrganizationTeam](docs/api/organization_team.html) | `create` | `POST /orgs/{org}/teams/` | Required |
| [OrganizationTeam](docs/api/organization_team.html) | `list` | `GET /orgs/{org}/teams/` | Required |
| [OrganizationTeam](docs/api/organization_team.html) | `load` | `GET /orgs/{org}/teams/{team}/` | Required |
| [OrganizationTeam](docs/api/organization_team.html) | `update` | `PATCH /orgs/{org}/teams/{team}/` | Required |
| [OrganizationTeamMember](docs/api/organization_team_member.html) | `create` | `POST /orgs/{org}/teams/{team}/members` | Required |
| [OrganizationTeamMember](docs/api/organization_team_member.html) | `list` | `GET /orgs/{org}/teams/{team}/members` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/{identifier}/copy/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/{identifier}/move/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/{identifier}/quarantine/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/{identifier}/tag/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/alpine/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/cargo/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/cocoapods/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/composer/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/conan/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/conda/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/cran/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/dart/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/deb/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/docker/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/go/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/helm/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/hex/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/huggingface/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/luarocks/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/maven/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/npm/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/nuget/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/p2/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/python/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/raw/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/rpm/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/ruby/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/swift/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/terraform/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/upload/vagrant/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/alpine/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/cargo/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/cocoapods/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/composer/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/conan/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/conda/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/cran/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/dart/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/deb/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/docker/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/go/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/helm/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/hex/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/huggingface/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/luarocks/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/maven/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/npm/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/nuget/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/p2/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/python/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/raw/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/rpm/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/ruby/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/swift/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/terraform/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/validate-upload/vagrant/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/{identifier}/resync/` | Required |
| [Package](docs/api/package.html) | `create` | `POST /packages/{owner}/{repo}/{identifier}/scan/` | Required |
| [Package](docs/api/package.html) | `list` | `GET /packages/{owner}/{repo}/groups/` | Required |
| [Package](docs/api/package.html) | `list` | `GET /packages/{owner}/{repo}/` | Required |
| [Package](docs/api/package.html) | `list` | `GET /packages/{owner}/{repo}/{identifier}/dependencies/` | Required |
| [Package](docs/api/package.html) | `load` | `GET /metrics/packages/{owner}/{repo}/` | Required |
| [Package](docs/api/package.html) | `load` | `GET /packages/{owner}/{repo}/{identifier}/` | Required |
| [Package](docs/api/package.html) | `load` | `GET /packages/{owner}/{repo}/{identifier}/status/` | Required |
| [Package](docs/api/package.html) | `remove` | `DELETE /packages/{owner}/{repo}/{identifier}/` | Required |
| [PackageDenyPolicy](docs/api/package_deny_policy.html) | `create` | `POST /orgs/{org}/deny-policy/` | Required |
| [PackageDenyPolicy](docs/api/package_deny_policy.html) | `list` | `GET /orgs/{org}/deny-policy/` | Required |
| [PackageDenyPolicy](docs/api/package_deny_policy.html) | `load` | `GET /orgs/{org}/deny-policy/{slug_perm}/` | Required |
| [PackageDenyPolicy](docs/api/package_deny_policy.html) | `patch` | `PATCH /orgs/{org}/deny-policy/{slug_perm}/` | Required |
| [PackageDenyPolicy](docs/api/package_deny_policy.html) | `update` | `PUT /orgs/{org}/deny-policy/{slug_perm}/` | Required |
| [PackageFilePartsUpload](docs/api/package_file_parts_upload.html) | `load` | `GET /files/{owner}/{repo}/{identifier}/info/` | Required |
| [PackageFileUpload](docs/api/package_file_upload.html) | `create` | `POST /files/{owner}/{repo}/{identifier}/complete/` | Required |
| [PackageLicensePolicyEvaluation](docs/api/package_license_policy_evaluation.html) | `create` | `POST /orgs/{org}/license-policy/{policy_slug_perm}/evaluation/` | Required |
| [PackageLicensePolicyEvaluation](docs/api/package_license_policy_evaluation.html) | `list` | `GET /orgs/{org}/license-policy/{policy_slug_perm}/evaluation/` | Required |
| [PackageLicensePolicyEvaluation](docs/api/package_license_policy_evaluation.html) | `load` | `GET /orgs/{org}/license-policy/{policy_slug_perm}/evaluation/{slug_perm}/` | Required |
| [PackageVersionBadge](docs/api/package_version_badge.html) | `load` | `GET /badges/version/{owner}/{repo}/{package_format}/{package_name}/{package_version}/{package_identifiers}/` | Required |
| [PackageVulnerabilityPolicyEvaluation](docs/api/package_vulnerability_policy_evaluation.html) | `create` | `POST /orgs/{org}/vulnerability-policy/{policy_slug_perm}/evaluation/` | Required |
| [PackageVulnerabilityPolicyEvaluation](docs/api/package_vulnerability_policy_evaluation.html) | `list` | `GET /orgs/{org}/vulnerability-policy/{policy_slug_perm}/evaluation/` | Required |
| [PackageVulnerabilityPolicyEvaluation](docs/api/package_vulnerability_policy_evaluation.html) | `load` | `GET /orgs/{org}/vulnerability-policy/{policy_slug_perm}/evaluation/{slug_perm}/` | Required |
| [ProviderSetting](docs/api/provider_setting.html) | `list` | `GET /orgs/{org}/openid-connect/` | Required |
| [ProviderSetting](docs/api/provider_setting.html) | `load` | `GET /orgs/{org}/openid-connect/{slug_perm}/` | Required |
| [ProviderSettingsWrite](docs/api/provider_settings_write.html) | `create` | `POST /orgs/{org}/openid-connect/` | Required |
| [ProviderSettingsWrite](docs/api/provider_settings_write.html) | `patch` | `PATCH /orgs/{org}/openid-connect/{slug_perm}/` | Required |
| [ProviderSettingsWrite](docs/api/provider_settings_write.html) | `update` | `PUT /orgs/{org}/openid-connect/{slug_perm}/` | Required |
| [Python](docs/api/python.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/python/` | Required |
| [Python](docs/api/python.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/python/` | Required |
| [Python](docs/api/python.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/python/{slug_perm}/` | Required |
| [Python](docs/api/python.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/python/{slug_perm}/` | Required |
| [Python](docs/api/python.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/python/{slug_perm}/` | Required |
| [Quota](docs/api/quota.html) | `load` | `GET /quota/{owner}/` | Required |
| [Quota](docs/api/quota.html) | `load` | `GET /quota/history/{owner}/` | Required |
| [Quota](docs/api/quota.html) | `load` | `GET /quota/oss/history/{owner}/` | Required |
| [Quota](docs/api/quota.html) | `load` | `GET /quota/oss/{owner}/` | Required |
| [Repo](docs/api/repo.html) | `create` | `POST /repos/{owner}/{identifier}/geoip/disable/` | Required |
| [Repo](docs/api/repo.html) | `create` | `POST /repos/{owner}/{identifier}/geoip/enable/` | Required |
| [Repo](docs/api/repo.html) | `create` | `POST /repos/{owner}/{repo}/transfer-region/` | Required |
| [Repo](docs/api/repo.html) | `create` | `POST /repos/{owner}/` | Required |
| [Repo](docs/api/repo.html) | `list` | `GET /repos/` | Required |
| [Repo](docs/api/repo.html) | `load` | `GET /repos/{owner}/` | Required |
| [Repo](docs/api/repo.html) | `load` | `GET /repos/{owner}/{identifier}/` | Required |
| [Repo](docs/api/repo.html) | `patch` | `PATCH /repos/{owner}/{identifier}/` | Required |
| [Repo](docs/api/repo.html) | `patch` | `PATCH /repos/{owner}/{identifier}/privileges` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/composer/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/conda/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/cran/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/dart/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/deb/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/docker/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/go/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/helm/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/hex/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/maven/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/npm/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/python/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/upstream/swift/{slug_perm}/` | Required |
| [Repo](docs/api/repo.html) | `remove` | `DELETE /repos/{owner}/{identifier}/` | Required |
| [Repo](docs/api/repo.html) | `update` | `PUT /repos/{owner}/{identifier}/privileges` | Required |
| [RepositoryAuditLog](docs/api/repository_audit_log.html) | `list` | `GET /audit-log/{owner}/{repo}/` | Required |
| [RepositoryEcdsaKey](docs/api/repository_ecdsa_key.html) | `create` | `POST /repos/{owner}/{identifier}/ecdsa/` | Required |
| [RepositoryEcdsaKey](docs/api/repository_ecdsa_key.html) | `create` | `POST /repos/{owner}/{identifier}/ecdsa/regenerate/` | Required |
| [RepositoryEcdsaKey](docs/api/repository_ecdsa_key.html) | `load` | `GET /repos/{owner}/{identifier}/ecdsa/` | Required |
| [RepositoryGeoIpRule](docs/api/repository_geo_ip_rule.html) | `load` | `GET /repos/{owner}/{identifier}/geoip` | Required |
| [RepositoryGeoIpRule](docs/api/repository_geo_ip_rule.html) | `patch` | `PATCH /repos/{owner}/{identifier}/geoip` | Required |
| [RepositoryGeoIpRule](docs/api/repository_geo_ip_rule.html) | `update` | `PUT /repos/{owner}/{identifier}/geoip` | Required |
| [RepositoryGeoIpStatus](docs/api/repository_geo_ip_status.html) | `load` | `GET /repos/{owner}/{identifier}/geoip/status/` | Required |
| [RepositoryGeoIpTestAddress](docs/api/repository_geo_ip_test_address.html) | `create` | `POST /repos/{owner}/{identifier}/geoip/test/` | Required |
| [RepositoryGpgKey](docs/api/repository_gpg_key.html) | `create` | `POST /repos/{owner}/{identifier}/gpg/` | Required |
| [RepositoryGpgKey](docs/api/repository_gpg_key.html) | `create` | `POST /repos/{owner}/{identifier}/gpg/regenerate/` | Required |
| [RepositoryGpgKey](docs/api/repository_gpg_key.html) | `load` | `GET /repos/{owner}/{identifier}/gpg/` | Required |
| [RepositoryPrivilegeInput](docs/api/repository_privilege_input.html) | `list` | `GET /repos/{owner}/{identifier}/privileges` | Required |
| [RepositoryRetentionRule](docs/api/repository_retention_rule.html) | `load` | `GET /repos/{owner}/{repo}/retention/` | Required |
| [RepositoryRetentionRule](docs/api/repository_retention_rule.html) | `update` | `PATCH /repos/{owner}/{repo}/retention/` | Required |
| [RepositoryRsaKey](docs/api/repository_rsa_key.html) | `create` | `POST /repos/{owner}/{identifier}/rsa/` | Required |
| [RepositoryRsaKey](docs/api/repository_rsa_key.html) | `create` | `POST /repos/{owner}/{identifier}/rsa/regenerate/` | Required |
| [RepositoryRsaKey](docs/api/repository_rsa_key.html) | `load` | `GET /repos/{owner}/{identifier}/rsa/` | Required |
| [RepositoryToken](docs/api/repository_token.html) | `create` | `POST /entitlements/{owner}/{repo}/` | Required |
| [RepositoryToken](docs/api/repository_token.html) | `list` | `GET /entitlements/{owner}/{repo}/` | Required |
| [RepositoryToken](docs/api/repository_token.html) | `load` | `GET /entitlements/{owner}/{repo}/{identifier}/` | Required |
| [RepositoryToken](docs/api/repository_token.html) | `update` | `PATCH /entitlements/{owner}/{repo}/{identifier}/` | Required |
| [RepositoryTokenRefresh](docs/api/repository_token_refresh.html) | `create` | `POST /entitlements/{owner}/{repo}/{identifier}/refresh/` | Required |
| [RepositoryTokenSync](docs/api/repository_token_sync.html) | `create` | `POST /entitlements/{owner}/{repo}/sync/` | Required |
| [RepositoryWebhook](docs/api/repository_webhook.html) | `create` | `POST /webhooks/{owner}/{repo}/` | Required |
| [RepositoryWebhook](docs/api/repository_webhook.html) | `list` | `GET /webhooks/{owner}/{repo}/` | Required |
| [RepositoryWebhook](docs/api/repository_webhook.html) | `load` | `GET /webhooks/{owner}/{repo}/{identifier}/` | Required |
| [RepositoryWebhook](docs/api/repository_webhook.html) | `update` | `PATCH /webhooks/{owner}/{repo}/{identifier}/` | Required |
| [RepositoryX509EcdsaCertificate](docs/api/repository_x509_ecdsa_certificate.html) | `load` | `GET /repos/{owner}/{identifier}/x509-ecdsa/` | Required |
| [RepositoryX509RsaCertificate](docs/api/repository_x509_rsa_certificate.html) | `load` | `GET /repos/{owner}/{identifier}/x509-rsa/` | Required |
| [ResourcesRateCheck](docs/api/resources_rate_check.html) | `load` | `GET /rates/limits/` | Required |
| [Rpm](docs/api/rpm.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/rpm/` | Required |
| [Rpm](docs/api/rpm.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/rpm/` | Required |
| [Rpm](docs/api/rpm.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/` | Required |
| [Rpm](docs/api/rpm.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/` | Required |
| [Rpm](docs/api/rpm.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/` | Required |
| [Ruby](docs/api/ruby.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/ruby/` | Required |
| [Ruby](docs/api/ruby.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/ruby/` | Required |
| [Ruby](docs/api/ruby.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/` | Required |
| [Ruby](docs/api/ruby.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/` | Required |
| [Ruby](docs/api/ruby.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/` | Required |
| [Service](docs/api/service.html) | `create` | `POST /orgs/{org}/services/` | Required |
| [Service](docs/api/service.html) | `create` | `POST /orgs/{org}/services/{service}/refresh/` | Required |
| [Service](docs/api/service.html) | `list` | `GET /orgs/{org}/services/` | Required |
| [Service](docs/api/service.html) | `load` | `GET /orgs/{org}/services/{service}/` | Required |
| [Service](docs/api/service.html) | `update` | `PATCH /orgs/{org}/services/{service}/` | Required |
| [StatusBasic](docs/api/status_basic.html) | `load` | `GET /status/check/basic/` | Not required |
| [StorageRegion](docs/api/storage_region.html) | `list` | `GET /storage-regions/` | Required |
| [StorageRegion](docs/api/storage_region.html) | `load` | `GET /storage-regions/{slug}/` | Required |
| [Swift](docs/api/swift.html) | `create` | `POST /repos/{owner}/{identifier}/upstream/swift/` | Required |
| [Swift](docs/api/swift.html) | `list` | `GET /repos/{owner}/{identifier}/upstream/swift/` | Required |
| [Swift](docs/api/swift.html) | `load` | `GET /repos/{owner}/{identifier}/upstream/swift/{slug_perm}/` | Required |
| [Swift](docs/api/swift.html) | `patch` | `PATCH /repos/{owner}/{identifier}/upstream/swift/{slug_perm}/` | Required |
| [Swift](docs/api/swift.html) | `update` | `PUT /repos/{owner}/{identifier}/upstream/swift/{slug_perm}/` | Required |
| [User](docs/api/user.html) | `list` | `GET /user/tokens/` | Required |
| [UserAuthToken](docs/api/user_auth_token.html) | `create` | `POST /user/token/` | Required |
| [UserAuthenticationToken](docs/api/user_authentication_token.html) | `create` | `POST /user/tokens/` | Required |
| [UserAuthenticationToken](docs/api/user_authentication_token.html) | `update` | `PUT /user/tokens/{slug_perm}/refresh/` | Required |
| [UserBrief](docs/api/user_brief.html) | `load` | `GET /user/self/` | Required |
| [UserProfile](docs/api/user_profile.html) | `load` | `GET /users/profile/{slug}/` | Required |
| [Vulnerability](docs/api/vulnerability.html) | `list` | `GET /vulnerabilities/{owner}/{repo}/{package}/` | Required |
| [Vulnerability](docs/api/vulnerability.html) | `list` | `GET /vulnerabilities/{owner}/{repo}/` | Required |
| [Vulnerability](docs/api/vulnerability.html) | `load` | `GET /vulnerabilities/{owner}/{repo}/{package}/{identifier}/` | Required |
| [Vulnerability](docs/api/vulnerability.html) | `load` | `GET /vulnerabilities/{owner}/` | Required |
| [Webhook](docs/api/webhook.html) | `remove` | `DELETE /webhooks/{owner}/{repo}/{identifier}/` | Required |

## Connect to the API

- API server: `https://api.cloudsmith.io`

The default credential is sent in the `X-Api-Key` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

A read request without required parameters or authentication is `GET /status/check/basic/`. For example:

```sh
curl --fail-with-body --silent --show-error 'https://api.cloudsmith.io/status/check/basic/'
```

Inspect the response using the [StatusBasic](docs/api/status_basic.html) reference. This checks the public route; authenticated operations need their own credentials and request data.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cloudsmith_list`: List records for an entity. Supported entities: `cargo`, `composer`, `conda`, `cran`, `dart`, `deb`, `distribution_full`, `docker`, `dynamic_mapping`, `format`, `gon`, `helm`, `hex`, `huggingface`, `maven`, `namespace`, `npm`, `nuget`, `org`, `organization_group_sync`, `organization_invite`, `organization_membership`, `organization_package_license_policy`, `organization_package_vulnerability_policy`, `organization_team`, `organization_team_member`, `package`, `package_deny_policy`, `package_license_policy_evaluation`, `package_vulnerability_policy_evaluation`, `provider_setting`, `python`, `repo`, `repository_audit_log`, `repository_privilege_input`, `repository_token`, `repository_webhook`, `rpm`, `ruby`, `service`, `storage_region`, `swift`, `user`, `vulnerability`.
- `cloudsmith_load`: Load one record for an entity. Supported entities: `cargo`, `composer`, `conda`, `cran`, `dart`, `deb`, `distribution_full`, `docker`, `dynamic_mapping`, `entitlement`, `format`, `gon`, `helm`, `hex`, `huggingface`, `maven`, `namespace`, `namespace_audit_log`, `npm`, `nuget`, `org`, `organization_group_sync_status`, `organization_membership`, `organization_package_license_policy`, `organization_package_vulnerability_policy`, `organization_saml_auth`, `organization_team`, `package`, `package_deny_policy`, `package_file_parts_upload`, `package_license_policy_evaluation`, `package_version_badge`, `package_vulnerability_policy_evaluation`, `provider_setting`, `python`, `quota`, `repo`, `repository_ecdsa_key`, `repository_geo_ip_rule`, `repository_geo_ip_status`, `repository_gpg_key`, `repository_retention_rule`, `repository_rsa_key`, `repository_token`, `repository_webhook`, `repository_x509_ecdsa_certificate`, `repository_x509_rsa_certificate`, `resources_rate_check`, `rpm`, `ruby`, `service`, `status_basic`, `storage_region`, `swift`, `user_brief`, `user_profile`, `vulnerability`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

