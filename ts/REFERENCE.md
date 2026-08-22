# Cloudsmith TypeScript SDK Reference

Complete API reference for the Cloudsmith TypeScript SDK.


## CloudsmithSDK

### Constructor

```ts
new CloudsmithSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudsmithSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CloudsmithSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CloudsmithSDK` instance in test mode.


### Instance Methods

#### `Abort(data?: object)`

Create a new `Abort` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AbortEntity` instance.

#### `Alpine(data?: object)`

Create a new `Alpine` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlpineEntity` instance.

#### `AuditLog(data?: object)`

Create a new `AuditLog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuditLogEntity` instance.

#### `Basic(data?: object)`

Create a new `Basic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BasicEntity` instance.

#### `Cargo(data?: object)`

Create a new `Cargo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CargoEntity` instance.

#### `Cocoapod(data?: object)`

Create a new `Cocoapod` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CocoapodEntity` instance.

#### `Complete(data?: object)`

Create a new `Complete` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompleteEntity` instance.

#### `Composer(data?: object)`

Create a new `Composer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ComposerEntity` instance.

#### `Conan(data?: object)`

Create a new `Conan` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConanEntity` instance.

#### `Conda(data?: object)`

Create a new `Conda` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CondaEntity` instance.

#### `Copy(data?: object)`

Create a new `Copy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CopyEntity` instance.

#### `Cran(data?: object)`

Create a new `Cran` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CranEntity` instance.

#### `Dart(data?: object)`

Create a new `Dart` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DartEntity` instance.

#### `Deb(data?: object)`

Create a new `Deb` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DebEntity` instance.

#### `DenyPolicy(data?: object)`

Create a new `DenyPolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DenyPolicyEntity` instance.

#### `Dependency(data?: object)`

Create a new `Dependency` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DependencyEntity` instance.

#### `Disable(data?: object)`

Create a new `Disable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DisableEntity` instance.

#### `DistributionFull(data?: object)`

Create a new `DistributionFull` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DistributionFullEntity` instance.

#### `Distro(data?: object)`

Create a new `Distro` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DistroEntity` instance.

#### `Docker(data?: object)`

Create a new `Docker` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DockerEntity` instance.

#### `DynamicMapping(data?: object)`

Create a new `DynamicMapping` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DynamicMappingEntity` instance.

#### `Ecdsa(data?: object)`

Create a new `Ecdsa` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EcdsaEntity` instance.

#### `Enable(data?: object)`

Create a new `Enable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnableEntity` instance.

#### `Entitlement(data?: object)`

Create a new `Entitlement` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EntitlementEntity` instance.

#### `Evaluation(data?: object)`

Create a new `Evaluation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EvaluationEntity` instance.

#### `File(data?: object)`

Create a new `File` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FileEntity` instance.

#### `Format(data?: object)`

Create a new `Format` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FormatEntity` instance.

#### `Geoip(data?: object)`

Create a new `Geoip` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GeoipEntity` instance.

#### `Gon(data?: object)`

Create a new `Gon` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GonEntity` instance.

#### `Gpg(data?: object)`

Create a new `Gpg` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GpgEntity` instance.

#### `Group(data?: object)`

Create a new `Group` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupEntity` instance.

#### `Helm(data?: object)`

Create a new `Helm` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HelmEntity` instance.

#### `Hex(data?: object)`

Create a new `Hex` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HexEntity` instance.

#### `History(data?: object)`

Create a new `History` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HistoryEntity` instance.

#### `Huggingface(data?: object)`

Create a new `Huggingface` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HuggingfaceEntity` instance.

#### `Info(data?: object)`

Create a new `Info` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InfoEntity` instance.

#### `Invite(data?: object)`

Create a new `Invite` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InviteEntity` instance.

#### `LicensePolicy(data?: object)`

Create a new `LicensePolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LicensePolicyEntity` instance.

#### `Limit(data?: object)`

Create a new `Limit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LimitEntity` instance.

#### `Luarock(data?: object)`

Create a new `Luarock` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LuarockEntity` instance.

#### `Maven(data?: object)`

Create a new `Maven` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MavenEntity` instance.

#### `Member(data?: object)`

Create a new `Member` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MemberEntity` instance.

#### `Move(data?: object)`

Create a new `Move` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MoveEntity` instance.

#### `Namespace(data?: object)`

Create a new `Namespace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NamespaceEntity` instance.

#### `NamespaceAuditLog(data?: object)`

Create a new `NamespaceAuditLog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NamespaceAuditLogEntity` instance.

#### `Npm(data?: object)`

Create a new `Npm` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NpmEntity` instance.

#### `Nuget(data?: object)`

Create a new `Nuget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NugetEntity` instance.

#### `OpenidConnect(data?: object)`

Create a new `OpenidConnect` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OpenidConnectEntity` instance.

#### `Org(data?: object)`

Create a new `Org` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrgEntity` instance.

#### `OrganizationGroupSync(data?: object)`

Create a new `OrganizationGroupSync` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationGroupSyncEntity` instance.

#### `OrganizationGroupSyncStatus(data?: object)`

Create a new `OrganizationGroupSyncStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationGroupSyncStatusEntity` instance.

#### `OrganizationInvite(data?: object)`

Create a new `OrganizationInvite` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationInviteEntity` instance.

#### `OrganizationInviteExtend(data?: object)`

Create a new `OrganizationInviteExtend` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationInviteExtendEntity` instance.

#### `OrganizationMembership(data?: object)`

Create a new `OrganizationMembership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationMembershipEntity` instance.

#### `OrganizationMembershipRoleUpdate(data?: object)`

Create a new `OrganizationMembershipRoleUpdate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationMembershipRoleUpdateEntity` instance.

#### `OrganizationMembershipVisibilityUpdate(data?: object)`

Create a new `OrganizationMembershipVisibilityUpdate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationMembershipVisibilityUpdateEntity` instance.

#### `OrganizationPackageLicensePolicy(data?: object)`

Create a new `OrganizationPackageLicensePolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationPackageLicensePolicyEntity` instance.

#### `OrganizationPackageVulnerabilityPolicy(data?: object)`

Create a new `OrganizationPackageVulnerabilityPolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationPackageVulnerabilityPolicyEntity` instance.

#### `OrganizationSamlAuth(data?: object)`

Create a new `OrganizationSamlAuth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationSamlAuthEntity` instance.

#### `OrganizationTeam(data?: object)`

Create a new `OrganizationTeam` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationTeamEntity` instance.

#### `OrganizationTeamMember(data?: object)`

Create a new `OrganizationTeamMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationTeamMemberEntity` instance.

#### `Oss(data?: object)`

Create a new `Oss` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OssEntity` instance.

#### `P2n(data?: object)`

Create a new `P2n` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `P2nEntity` instance.

#### `Package(data?: object)`

Create a new `Package` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PackageEntity` instance.

#### `PackageDenyPolicy(data?: object)`

Create a new `PackageDenyPolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PackageDenyPolicyEntity` instance.

#### `PackageFilePartsUpload(data?: object)`

Create a new `PackageFilePartsUpload` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PackageFilePartsUploadEntity` instance.

#### `PackageFileUpload(data?: object)`

Create a new `PackageFileUpload` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PackageFileUploadEntity` instance.

#### `PackageLicensePolicyEvaluation(data?: object)`

Create a new `PackageLicensePolicyEvaluation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PackageLicensePolicyEvaluationEntity` instance.

#### `PackageVersionBadge(data?: object)`

Create a new `PackageVersionBadge` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PackageVersionBadgeEntity` instance.

#### `PackageVulnerabilityPolicyEvaluation(data?: object)`

Create a new `PackageVulnerabilityPolicyEvaluation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PackageVulnerabilityPolicyEvaluationEntity` instance.

#### `Privilege(data?: object)`

Create a new `Privilege` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PrivilegeEntity` instance.

#### `Profile(data?: object)`

Create a new `Profile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProfileEntity` instance.

#### `ProviderSetting(data?: object)`

Create a new `ProviderSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProviderSettingEntity` instance.

#### `ProviderSettingsWrite(data?: object)`

Create a new `ProviderSettingsWrite` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProviderSettingsWriteEntity` instance.

#### `Python(data?: object)`

Create a new `Python` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PythonEntity` instance.

#### `Quarantine(data?: object)`

Create a new `Quarantine` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `QuarantineEntity` instance.

#### `Quota(data?: object)`

Create a new `Quota` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `QuotaEntity` instance.

#### `Raw(data?: object)`

Create a new `Raw` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RawEntity` instance.

#### `Refresh(data?: object)`

Create a new `Refresh` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RefreshEntity` instance.

#### `Regenerate(data?: object)`

Create a new `Regenerate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RegenerateEntity` instance.

#### `Repo(data?: object)`

Create a new `Repo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepoEntity` instance.

#### `RepositoryAuditLog(data?: object)`

Create a new `RepositoryAuditLog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryAuditLogEntity` instance.

#### `RepositoryEcdsaKey(data?: object)`

Create a new `RepositoryEcdsaKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryEcdsaKeyEntity` instance.

#### `RepositoryGeoIpRule(data?: object)`

Create a new `RepositoryGeoIpRule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryGeoIpRuleEntity` instance.

#### `RepositoryGeoIpStatus(data?: object)`

Create a new `RepositoryGeoIpStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryGeoIpStatusEntity` instance.

#### `RepositoryGeoIpTestAddress(data?: object)`

Create a new `RepositoryGeoIpTestAddress` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryGeoIpTestAddressEntity` instance.

#### `RepositoryGpgKey(data?: object)`

Create a new `RepositoryGpgKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryGpgKeyEntity` instance.

#### `RepositoryPrivilegeInput(data?: object)`

Create a new `RepositoryPrivilegeInput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryPrivilegeInputEntity` instance.

#### `RepositoryRetentionRule(data?: object)`

Create a new `RepositoryRetentionRule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryRetentionRuleEntity` instance.

#### `RepositoryRsaKey(data?: object)`

Create a new `RepositoryRsaKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryRsaKeyEntity` instance.

#### `RepositoryToken(data?: object)`

Create a new `RepositoryToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryTokenEntity` instance.

#### `RepositoryTokenRefresh(data?: object)`

Create a new `RepositoryTokenRefresh` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryTokenRefreshEntity` instance.

#### `RepositoryTokenSync(data?: object)`

Create a new `RepositoryTokenSync` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryTokenSyncEntity` instance.

#### `RepositoryWebhook(data?: object)`

Create a new `RepositoryWebhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryWebhookEntity` instance.

#### `RepositoryX509EcdsaCertificate(data?: object)`

Create a new `RepositoryX509EcdsaCertificate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryX509EcdsaCertificateEntity` instance.

#### `RepositoryX509RsaCertificate(data?: object)`

Create a new `RepositoryX509RsaCertificate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryX509RsaCertificateEntity` instance.

#### `Reset(data?: object)`

Create a new `Reset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResetEntity` instance.

#### `ResourcesRateCheck(data?: object)`

Create a new `ResourcesRateCheck` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResourcesRateCheckEntity` instance.

#### `Resync(data?: object)`

Create a new `Resync` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResyncEntity` instance.

#### `Retention(data?: object)`

Create a new `Retention` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RetentionEntity` instance.

#### `Rpm(data?: object)`

Create a new `Rpm` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RpmEntity` instance.

#### `Rsa(data?: object)`

Create a new `Rsa` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RsaEntity` instance.

#### `Ruby(data?: object)`

Create a new `Ruby` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RubyEntity` instance.

#### `SamlGroupSync(data?: object)`

Create a new `SamlGroupSync` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SamlGroupSyncEntity` instance.

#### `Scan(data?: object)`

Create a new `Scan` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScanEntity` instance.

#### `Self(data?: object)`

Create a new `Self` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SelfEntity` instance.

#### `Service(data?: object)`

Create a new `Service` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ServiceEntity` instance.

#### `Status(data?: object)`

Create a new `Status` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusEntity` instance.

#### `StatusBasic(data?: object)`

Create a new `StatusBasic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusBasicEntity` instance.

#### `StorageRegion(data?: object)`

Create a new `StorageRegion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StorageRegionEntity` instance.

#### `Swift(data?: object)`

Create a new `Swift` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SwiftEntity` instance.

#### `Sync(data?: object)`

Create a new `Sync` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SyncEntity` instance.

#### `Tag(data?: object)`

Create a new `Tag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TagEntity` instance.

#### `Team(data?: object)`

Create a new `Team` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamEntity` instance.

#### `Terraform(data?: object)`

Create a new `Terraform` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TerraformEntity` instance.

#### `Test(data?: object)`

Create a new `Test` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TestEntity` instance.

#### `Token(data?: object)`

Create a new `Token` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TokenEntity` instance.

#### `TransferRegion(data?: object)`

Create a new `TransferRegion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TransferRegionEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `UserAuthToken(data?: object)`

Create a new `UserAuthToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserAuthTokenEntity` instance.

#### `UserAuthenticationToken(data?: object)`

Create a new `UserAuthenticationToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserAuthenticationTokenEntity` instance.

#### `UserBrief(data?: object)`

Create a new `UserBrief` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserBriefEntity` instance.

#### `UserProfile(data?: object)`

Create a new `UserProfile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserProfileEntity` instance.

#### `Vagrant(data?: object)`

Create a new `Vagrant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VagrantEntity` instance.

#### `Validate(data?: object)`

Create a new `Validate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ValidateEntity` instance.

#### `Version(data?: object)`

Create a new `Version` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VersionEntity` instance.

#### `Vulnerability(data?: object)`

Create a new `Vulnerability` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VulnerabilityEntity` instance.

#### `VulnerabilityPolicy(data?: object)`

Create a new `VulnerabilityPolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VulnerabilityPolicyEntity` instance.

#### `Webhook(data?: object)`

Create a new `Webhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEntity` instance.

#### `X509Ecdsa(data?: object)`

Create a new `X509Ecdsa` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `X509EcdsaEntity` instance.

#### `X509Rsa(data?: object)`

Create a new `X509Rsa` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `X509RsaEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CloudsmithSDK.test()`.

**Returns:** `CloudsmithSDK` instance in test mode.


---

## AbortEntity

```ts
const abort = client.Abort()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AbortEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlpineEntity

```ts
const alpine = client.Alpine()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlpineEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuditLogEntity

```ts
const audit_log = client.AuditLog()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuditLogEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BasicEntity

```ts
const basic = client.Basic()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BasicEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CargoEntity

```ts
const cargo = client.Cargo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Cargo().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Cargo().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Cargo().load({ id: 'cargo_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Cargo().update({
  id: 'cargo_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CargoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CocoapodEntity

```ts
const cocoapod = client.Cocoapod()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CocoapodEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompleteEntity

```ts
const complete = client.Complete()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompleteEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ComposerEntity

```ts
const composer = client.Composer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Composer().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Composer().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Composer().load({ id: 'composer_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Composer().update({
  id: 'composer_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ComposerEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConanEntity

```ts
const conan = client.Conan()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConanEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CondaEntity

```ts
const conda = client.Conda()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Conda().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Conda().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Conda().load({ id: 'conda_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Conda().update({
  id: 'conda_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CondaEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CopyEntity

```ts
const copy = client.Copy()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CopyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CranEntity

```ts
const cran = client.Cran()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Cran().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Cran().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Cran().load({ id: 'cran_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Cran().update({
  id: 'cran_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CranEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DartEntity

```ts
const dart = client.Dart()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Dart().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Dart().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Dart().load({ id: 'dart_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Dart().update({
  id: 'dart_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DartEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DebEntity

```ts
const deb = client.Deb()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `component` | `string` | No | The component to fetch from the upstream |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `distro_versions` | `any[]` | Yes | The distribution version that packages found on this upstream could be associated with. |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `string` | No | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `string` | No | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `string` | No | The GPG signature verification mode for this upstream. |
| `include_sources` | `boolean` | No | When true, source packages will be available from this upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_distribution` | `string` | No | The distribution to fetch from the upstream |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verification_status` | `string` | No | The signature verification status for this upstream. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Deb().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  distro_versions: [],
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Deb().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Deb().load({ id: 'deb_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Deb().update({
  id: 'deb_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DebEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DenyPolicyEntity

```ts
const deny_policy = client.DenyPolicy()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DenyPolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DependencyEntity

```ts
const dependency = client.Dependency()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DependencyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DisableEntity

```ts
const disable = client.Disable()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DisableEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DistributionFullEntity

```ts
const distribution_full = client.DistributionFull()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `format` | `string` | No |  |
| `format_url` | `string` | No |  |
| `name` | `string` | Yes |  |
| `self_url` | `string` | No |  |
| `slug` | `string` | No | The slug identifier for this distribution |
| `variants` | `string` | No |  |
| `versions` | `any[]` | No | A list of the versions for this distribution |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DistributionFull().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DistributionFull().load({ slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DistributionFullEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DistroEntity

```ts
const distro = client.Distro()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DistroEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DockerEntity

```ts
const docker = client.Docker()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Docker().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Docker().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Docker().load({ id: 'docker_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Docker().update({
  id: 'docker_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DockerEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DynamicMappingEntity

```ts
const dynamic_mapping = client.DynamicMapping()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claim_value` | `string` | Yes | The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`. |
| `service_account` | `string` | Yes | The service account associated with the provider setting and `claim_value` Note: This field and the dynamic mappings feature are still in early access. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DynamicMapping().list({ org_id: "example", provider_setting: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DynamicMapping().load({ id: 'dynamic_mapping_id', openid_connect_id: 'openid_connect_id', org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DynamicMappingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EcdsaEntity

```ts
const ecdsa = client.Ecdsa()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EcdsaEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnableEntity

```ts
const enable = client.Enable()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnableEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EntitlementEntity

```ts
const entitlement = client.Entitlement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `number` | No | Number of packages with at least 1 download |
| `bandwidth` | `Record<string, any>` | Yes |  |
| `downloads` | `Record<string, any>` | Yes |  |
| `inactive` | `number` | No | Packages with zero downloads |
| `total` | `number` | No | Total number of packages in repo |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Entitlement().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  repo: 'example_repo',
  bandwidth: {},
  downloads: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Entitlement().load({ id: 'entitlement_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Entitlement().remove({ identifier: 'identifier', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EvaluationEntity

```ts
const evaluation = client.Evaluation()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EvaluationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FileEntity

```ts
const file = client.File()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.File().create({
  owner: 'example_owner',
  repo: 'example_repo',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FileEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FormatEntity

```ts
const format = client.Format()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the package format |
| `distributions` | `any[]` | No | The distributions supported by this package format |
| `extensions` | `any[]` | Yes | A non-exhaustive list of extensions supported |
| `name` | `string` | Yes | Name for the package format |
| `premium` | `boolean` | Yes | If true the package format is a premium-only feature |
| `premium_plan_id` | `string` | No | The minimum plan id required for this package format |
| `premium_plan_name` | `string` | No | The minimum plan name required for this package format |
| `slug` | `string` | Yes | Slug for the package format |
| `supports` | `Record<string, any>` | Yes | A set of what the package format supports |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Format().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Format().load({ id: 'format_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FormatEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GeoipEntity

```ts
const geoip = client.Geoip()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GeoipEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GonEntity

```ts
const gon = client.Gon()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Gon().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Gon().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Gon().load({ identifier: 'identifier', owner: 'owner', slug_perm: 'slug_perm' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Gon().update({
  identifier: 'identifier',
  owner: 'owner',
  slug_perm: 'slug_perm',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GonEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GpgEntity

```ts
const gpg = client.Gpg()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GpgEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupEntity

```ts
const group = client.Group()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HelmEntity

```ts
const helm = client.Helm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Helm().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Helm().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Helm().load({ id: 'helm_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Helm().update({
  id: 'helm_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HelmEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HexEntity

```ts
const hex = client.Hex()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Hex().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Hex().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Hex().load({ id: 'hex_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Hex().update({
  id: 'hex_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HexEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HistoryEntity

```ts
const history = client.History()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HuggingfaceEntity

```ts
const huggingface = client.Huggingface()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Huggingface().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Huggingface().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Huggingface().load({ id: 'huggingface_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Huggingface().update({
  id: 'huggingface_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HuggingfaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InfoEntity

```ts
const info = client.Info()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InfoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InviteEntity

```ts
const invite = client.Invite()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InviteEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LicensePolicyEntity

```ts
const license_policy = client.LicensePolicy()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LicensePolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LimitEntity

```ts
const limit = client.Limit()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LimitEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LuarockEntity

```ts
const luarock = client.Luarock()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LuarockEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MavenEntity

```ts
const maven = client.Maven()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `string` | No | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `string` | No | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `string` | No | The GPG signature verification mode for this upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verification_status` | `string` | No | The signature verification status for this upstream. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Maven().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Maven().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Maven().load({ id: 'maven_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Maven().update({
  id: 'maven_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MavenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MemberEntity

```ts
const member = client.Member()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MoveEntity

```ts
const move = client.Move()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MoveEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NamespaceEntity

```ts
const namespace = client.Namespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `type_name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Namespace().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Namespace().load({ id: 'namespace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NamespaceAuditLogEntity

```ts
const namespace_audit_log = client.NamespaceAuditLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `string` | Yes |  |
| `actor_ip_address` | `string` | Yes |  |
| `actor_kind` | `string` | No |  |
| `actor_location` | `Record<string, any>` | Yes |  |
| `actor_slug_perm` | `string` | Yes |  |
| `actor_url` | `string` | No |  |
| `context` | `string` | Yes |  |
| `event` | `string` | Yes |  |
| `event_at` | `string` | Yes |  |
| `object` | `string` | Yes |  |
| `object_kind` | `string` | Yes |  |
| `object_slug_perm` | `string` | Yes |  |
| `target` | `string` | Yes |  |
| `target_kind` | `string` | Yes |  |
| `target_slug_perm` | `string` | No |  |
| `uuid` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NamespaceAuditLog().load({ id: 'namespace_audit_log_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NamespaceAuditLogEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NpmEntity

```ts
const npm = client.Npm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Npm().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Npm().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Npm().load({ id: 'npm_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Npm().update({
  id: 'npm_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NpmEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NugetEntity

```ts
const nuget = client.Nuget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Nuget().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Nuget().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Nuget().load({ id: 'nuget_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Nuget().update({
  id: 'nuget_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NugetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OpenidConnectEntity

```ts
const openid_connect = client.OpenidConnect()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OpenidConnectEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrgEntity

```ts
const org = client.Org()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `string` | No |  |
| `created_at` | `string` | No |  |
| `event_at` | `string` | No |  |
| `location` | `string` | No | The city/town/area your organization is based in. |
| `name` | `string` | Yes |  |
| `package` | `Record<string, any>` | Yes |  |
| `policy` | `Record<string, any>` | Yes |  |
| `reasons` | `any[]` | Yes |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `tagline` | `string` | No | A short public descriptive for your organization. |
| `vulnerability_scan_results` | `Record<string, any>` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `license_policy_violation` | `/orgs/{org}/license-policy-violation/` | `client.Org().list({ $action: 'license_policy_violation', ... })` |
| `vulnerability_policy_violation` | `/orgs/{org}/vulnerability-policy-violation/` | `client.Org().list({ $action: 'vulnerability_policy_violation', ... })` |

An action returns that action's OWN response, which is not necessarily a
Org record — check the API definition for its shape.

```ts
const result = await client.Org().list({
  $action: 'license_policy_violation',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Org().create({
  id: 'example_id',
  name: 'example_name',
  package: {},
  policy: {},
  reasons: [],
  vulnerability_scan_results: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Org().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Org().load({ id: 'org_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Org().remove({ id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Org().update({
  id: 'org_id',
  team_id: 'team_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrgEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationGroupSyncEntity

```ts
const organization_group_sync = client.OrganizationGroupSync()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `idp_key` | `string` | Yes |  |
| `idp_value` | `string` | Yes |  |
| `role` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `team` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationGroupSync().create({
  org_id: 'example_org_id',
  idp_key: 'example_idp_key',
  idp_value: 'example_idp_value',
  team: 'example_team',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationGroupSync().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationGroupSyncEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationGroupSyncStatusEntity

```ts
const organization_group_sync_status = client.OrganizationGroupSyncStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `saml_group_sync_status` | `boolean` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationGroupSyncStatus().load({ org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationGroupSyncStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationInviteEntity

```ts
const organization_invite = client.OrganizationInvite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No | The email of the user to be invited. |
| `expires_at` | `string` | No |  |
| `inviter` | `string` | No |  |
| `inviter_url` | `string` | No |  |
| `org` | `string` | No |  |
| `role` | `string` | No | The role to be assigned to the invited user. |
| `slug_perm` | `string` | No |  |
| `teams` | `any[]` | No |  |
| `user` | `string` | No | The slug of the user to be invited. |
| `user_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationInvite().create({
  org_id: 'example_org_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationInvite().list({ org_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OrganizationInvite().update({
  id: 'id',
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationInviteEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationInviteExtendEntity

```ts
const organization_invite_extend = client.OrganizationInviteExtend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No | The email of the user to be invited. |
| `expires_at` | `string` | No |  |
| `inviter` | `string` | No |  |
| `inviter_url` | `string` | No |  |
| `org` | `string` | No |  |
| `role` | `string` | No | The role to be assigned to the invited user. |
| `slug_perm` | `string` | No | The slug_perm of the invite to be extended. |
| `teams` | `any[]` | No |  |
| `user` | `string` | No | The slug of the user to be invited. |
| `user_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationInviteExtend().create({
  org_id: 'example_org_id',
  slug_perm: 'example_slug_perm',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationInviteExtendEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationMembershipEntity

```ts
const organization_membership = client.OrganizationMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `has_two_factor` | `boolean` | No |  |
| `is_active` | `boolean` | No |  |
| `joined_at` | `string` | No |  |
| `last_login_at` | `string` | No |  |
| `last_login_method` | `string` | No |  |
| `role` | `string` | No |  |
| `user` | `string` | No |  |
| `user_id` | `string` | No |  |
| `user_name` | `string` | No |  |
| `user_url` | `string` | No |  |
| `visibility` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationMembership().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationMembership().load({ member: 'member', org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OrganizationMembership().update({
  member: 'member',
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationMembershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationMembershipRoleUpdateEntity

```ts
const organization_membership_role_update = client.OrganizationMembershipRoleUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `has_two_factor` | `boolean` | No |  |
| `joined_at` | `string` | No |  |
| `last_login_at` | `string` | No |  |
| `last_login_method` | `string` | No |  |
| `role` | `string` | No |  |
| `user` | `string` | No |  |
| `user_id` | `string` | No |  |
| `user_name` | `string` | No |  |
| `user_url` | `string` | No |  |
| `visibility` | `string` | No |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OrganizationMembershipRoleUpdate().update({
  member_id: 'member_id',
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationMembershipRoleUpdateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationMembershipVisibilityUpdateEntity

```ts
const organization_membership_visibility_update = client.OrganizationMembershipVisibilityUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `has_two_factor` | `boolean` | No |  |
| `joined_at` | `string` | No |  |
| `last_login_at` | `string` | No |  |
| `last_login_method` | `string` | No |  |
| `role` | `string` | No |  |
| `user` | `string` | No |  |
| `user_id` | `string` | No |  |
| `user_name` | `string` | No |  |
| `user_url` | `string` | No |  |
| `visibility` | `string` | No |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OrganizationMembershipVisibilityUpdate().update({
  member_id: 'member_id',
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationMembershipVisibilityUpdateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationPackageLicensePolicyEntity

```ts
const organization_package_license_policy = client.OrganizationPackageLicensePolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_licenses` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `name` | `string` | Yes |  |
| `on_violation_quarantine` | `boolean` | No |  |
| `package_query_string` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `spdx_identifiers` | `any[]` | Yes |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationPackageLicensePolicy().create({
  org_id: 'example_org_id',
  name: 'example_name',
  spdx_identifiers: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationPackageLicensePolicy().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationPackageLicensePolicy().load({ id: 'organization_package_license_policy_id', org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OrganizationPackageLicensePolicy().update({
  id: 'organization_package_license_policy_id',
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationPackageLicensePolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationPackageVulnerabilityPolicyEntity

```ts
const organization_package_vulnerability_policy = client.OrganizationPackageVulnerabilityPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_severity` | `boolean` | No | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `min_severity` | `string` | No |  |
| `name` | `string` | Yes |  |
| `on_violation_quarantine` | `boolean` | No |  |
| `package_query_string` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationPackageVulnerabilityPolicy().create({
  org_id: 'example_org_id',
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationPackageVulnerabilityPolicy().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationPackageVulnerabilityPolicy().load({ id: 'organization_package_vulnerability_policy_id', org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OrganizationPackageVulnerabilityPolicy().update({
  id: 'organization_package_vulnerability_policy_id',
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationPackageVulnerabilityPolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationSamlAuthEntity

```ts
const organization_saml_auth = client.OrganizationSamlAuth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `saml_auth_enabled` | `boolean` | Yes |  |
| `saml_auth_enforced` | `boolean` | Yes |  |
| `saml_metadata_inline` | `string` | No | If configured, SAML metadata will be used as entered instead of retrieved from a remote URL. |
| `saml_metadata_url` | `string` | No | If configured, SAML metadata be retrieved from a remote URL. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationSamlAuth().load({ org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OrganizationSamlAuth().update({
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationSamlAuthEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationTeamEntity

```ts
const organization_team = client.OrganizationTeam()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `visibility` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationTeam().create({
  org_id: 'example_org_id',
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationTeam().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationTeam().load({ id: 'organization_team_id', org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OrganizationTeam().update({
  id: 'organization_team_id',
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationTeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationTeamMemberEntity

```ts
const organization_team_member = client.OrganizationTeamMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `role` | `string` | Yes |  |
| `user` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationTeamMember().create({
  org_id: 'example_org_id',
  team_id: 'example_team_id',
  role: 'example_role',
  user: 'example_user',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationTeamMember().list({ org_id: "example", team_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationTeamMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OssEntity

```ts
const oss = client.Oss()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OssEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## P2nEntity

```ts
const p2n = client.P2n()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `P2nEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PackageEntity

```ts
const package_ = client.Package()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `number` | No | Number of packages with at least 1 download |
| `architectures` | `any[]` | No |  |
| `backend_kind` | `number` | No |  |
| `bandwidth` | `Record<string, any>` | Yes |  |
| `cdn_url` | `string` | No |  |
| `checksum_md5` | `string` | No |  |
| `checksum_sha1` | `string` | No |  |
| `checksum_sha256` | `string` | No |  |
| `checksum_sha512` | `string` | No |  |
| `count` | `number` | Yes |  |
| `dep_type` | `string` | No |  |
| `dependencies_checksum_md5` | `string` | No | A checksum of all of the package's dependencies. |
| `dependencies_url` | `string` | No |  |
| `description` | `string` | No | A textual description of this package. |
| `display_name` | `string` | No |  |
| `distro` | `Record<string, any>` | Yes | The distributions supported by this package format |
| `distro_version` | `Record<string, any>` | No | A list of the versions for this distribution |
| `downloads` | `Record<string, any>` | Yes |  |
| `epoch` | `number` | No | The epoch of the package version (if any). |
| `extension` | `string` | No |  |
| `filename` | `string` | No |  |
| `files` | `any[]` | No |  |
| `format` | `string` | No |  |
| `format_url` | `string` | No |  |
| `freeable_storage` | `number` | No | Amount of storage that will be freed if this package is deleted |
| `fully_qualified_name` | `string` | No |  |
| `identifier_perm` | `string` | No | Unique and permanent identifier for the package. |
| `identifiers` | `Record<string, any>` | No | Return a map of identifier field names and their values. |
| `inactive` | `number` | No | Packages with zero downloads |
| `indexed` | `boolean` | No |  |
| `is_cancellable` | `boolean` | No |  |
| `is_copyable` | `boolean` | No |  |
| `is_deleteable` | `boolean` | No |  |
| `is_downloadable` | `boolean` | No |  |
| `is_moveable` | `boolean` | No |  |
| `is_quarantinable` | `boolean` | No |  |
| `is_quarantined` | `boolean` | No |  |
| `is_resyncable` | `boolean` | No |  |
| `is_security_scannable` | `boolean` | No |  |
| `is_sync_awaiting` | `boolean` | No |  |
| `is_sync_completed` | `boolean` | No |  |
| `is_sync_failed` | `boolean` | No |  |
| `is_sync_in_flight` | `boolean` | No |  |
| `is_sync_in_progress` | `boolean` | No |  |
| `last_push` | `string` | Yes |  |
| `license` | `string` | No | The license of this package. |
| `name` | `string` | No | The name of this package. |
| `namespace` | `string` | No |  |
| `namespace_url` | `string` | No |  |
| `num_downloads` | `number` | Yes |  |
| `num_files` | `number` | No |  |
| `operator` | `string` | No |  |
| `origin_repository` | `string` | No |  |
| `origin_repository_url` | `string` | No |  |
| `package_type` | `number` | No | The type of package contents. |
| `policy_violated` | `boolean` | No | Whether or not the package has violated any policy. |
| `release` | `string` | No | The release of the package version (if any). |
| `repository` | `string` | No | The repository the package will be copied to. |
| `repository_url` | `string` | No |  |
| `security_scan_completed_at` | `string` | No | The datetime the security scanning was completed. |
| `security_scan_started_at` | `string` | No | The datetime the security scanning was started. |
| `security_scan_status` | `string` | No |  |
| `security_scan_status_updated_at` | `string` | No | The datetime the security scanning status was updated. |
| `self_html_url` | `string` | No |  |
| `self_url` | `string` | No |  |
| `signature_url` | `string` | No |  |
| `size` | `number` | No | The calculated size of the package. |
| `slug` | `string` | No | The public unique identifier for the package. |
| `slug_perm` | `string` | No |  |
| `stage` | `number` | No | The synchronisation (in progress) stage of the package. |
| `stage_str` | `string` | No |  |
| `stage_updated_at` | `string` | No | The datetime the package stage was updated at. |
| `status` | `number` | No | The synchronisation status of the package. |
| `status_reason` | `string` | No | A textual description for the synchronous status reason (if any |
| `status_str` | `string` | No |  |
| `status_updated_at` | `string` | No | The datetime the package status was updated at. |
| `status_url` | `string` | No |  |
| `subtype` | `string` | No |  |
| `summary` | `string` | No | A one-liner synopsis of this package. |
| `sync_finished_at` | `string` | No | The datetime the package sync was finished at. |
| `sync_progress` | `number` | No | Synchronisation progress (from 0-100) |
| `tags` | `Record<string, any>` | No | All tags on the package, grouped by tag type. |
| `tags_immutable` | `Record<string, any>` | No | All tags on the package, grouped by tag type. |
| `total` | `number` | No | Total number of packages in repo |
| `type_display` | `string` | No |  |
| `uploaded_at` | `string` | No | The date this package was uploaded. |
| `uploader` | `string` | No |  |
| `uploader_url` | `string` | No |  |
| `version` | `string` | No | The raw version for this package. |
| `version_orig` | `string` | No |  |
| `vulnerability_scan_results_url` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `active` | - | - | - | - |
| `architectures` | - | - | - | - |
| `backend_kind` | - | - | - | - |
| `bandwidth` | - | - | - | - |
| `cdn_url` | - | - | - | - |
| `checksum_md5` | - | - | - | - |
| `checksum_sha1` | - | - | - | - |
| `checksum_sha256` | - | - | - | - |
| `checksum_sha512` | - | - | - | - |
| `count` | - | - | - | - |
| `dep_type` | - | - | - | - |
| `dependencies_checksum_md5` | - | - | - | - |
| `dependencies_url` | - | - | - | - |
| `description` | - | - | - | - |
| `display_name` | - | - | - | - |
| `distro` | - | - | - | - |
| `distro_version` | - | - | - | - |
| `downloads` | Yes | Yes | Yes | - |
| `epoch` | - | - | - | - |
| `extension` | - | - | - | - |
| `filename` | - | - | - | - |
| `files` | - | - | - | - |
| `format` | - | - | - | - |
| `format_url` | - | - | - | - |
| `freeable_storage` | - | - | - | - |
| `fully_qualified_name` | - | - | - | - |
| `identifier_perm` | - | - | - | - |
| `identifiers` | - | - | - | - |
| `inactive` | - | - | - | - |
| `indexed` | - | - | - | - |
| `is_cancellable` | - | - | - | - |
| `is_copyable` | - | - | - | - |
| `is_deleteable` | - | - | - | - |
| `is_downloadable` | - | - | - | - |
| `is_moveable` | - | - | - | - |
| `is_quarantinable` | - | - | - | - |
| `is_quarantined` | - | - | - | - |
| `is_resyncable` | - | - | - | - |
| `is_security_scannable` | - | - | - | - |
| `is_sync_awaiting` | - | - | - | - |
| `is_sync_completed` | - | - | - | - |
| `is_sync_failed` | - | - | - | - |
| `is_sync_in_flight` | - | - | - | - |
| `is_sync_in_progress` | - | - | - | - |
| `last_push` | - | - | - | - |
| `license` | - | - | - | - |
| `name` | - | - | - | - |
| `namespace` | - | - | - | - |
| `namespace_url` | - | - | - | - |
| `num_downloads` | - | - | - | - |
| `num_files` | - | - | - | - |
| `operator` | - | - | - | - |
| `origin_repository` | - | - | - | - |
| `origin_repository_url` | - | - | - | - |
| `package_type` | - | - | - | - |
| `policy_violated` | - | - | - | - |
| `release` | - | - | - | - |
| `repository` | - | - | - | - |
| `repository_url` | - | - | - | - |
| `security_scan_completed_at` | - | - | - | - |
| `security_scan_started_at` | - | - | - | - |
| `security_scan_status` | - | - | - | - |
| `security_scan_status_updated_at` | - | - | - | - |
| `self_html_url` | - | - | - | - |
| `self_url` | - | - | - | - |
| `signature_url` | - | - | - | - |
| `size` | - | Yes | - | - |
| `slug` | - | - | - | - |
| `slug_perm` | - | - | - | - |
| `stage` | - | - | - | - |
| `stage_str` | - | - | - | - |
| `stage_updated_at` | - | - | - | - |
| `status` | - | - | - | - |
| `status_reason` | - | - | - | - |
| `status_str` | - | - | - | - |
| `status_updated_at` | - | - | - | - |
| `status_url` | - | - | - | - |
| `subtype` | - | - | - | - |
| `summary` | - | - | - | - |
| `sync_finished_at` | - | - | - | - |
| `sync_progress` | - | - | - | - |
| `tags` | - | - | - | - |
| `tags_immutable` | - | - | - | - |
| `total` | - | - | - | - |
| `type_display` | - | - | - | - |
| `uploaded_at` | - | - | - | - |
| `uploader` | - | - | - | - |
| `uploader_url` | - | - | - | - |
| `version` | - | - | - | - |
| `version_orig` | - | - | - | - |
| `vulnerability_scan_results_url` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Package().create({
  owner: 'example_owner',
  repo: 'example_repo',
  bandwidth: {},
  count: 1,
  distro: {},
  downloads: {},
  last_push: 'example_last_push',
  num_downloads: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Package().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Package().load({ owner: 'owner', repo: 'repo' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Package().remove({ identifier: 'identifier', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PackageDenyPolicyEntity

```ts
const package_deny_policy = client.PackageDenyPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `enabled` | `boolean` | No | Whether this rule is enabled or disabled. |
| `name` | `string` | No |  |
| `package_query_string` | `string` | Yes | Packages that match this query will trigger this deny rule. |
| `slug_perm` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PackageDenyPolicy().create({
  org_id: 'example_org_id',
  package_query_string: 'example_package_query_string',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PackageDenyPolicy().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PackageDenyPolicy().load({ id: 'package_deny_policy_id', org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PackageDenyPolicy().update({
  id: 'package_deny_policy_id',
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PackageDenyPolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PackageFilePartsUploadEntity

```ts
const package_file_parts_upload = client.PackageFilePartsUpload()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `identifier` | `string` | No | The identifier for the file to use uploading parts. |
| `upload_querystring` | `string` | No | The querystring to use for the next-step PUT upload. |
| `upload_url` | `string` | No | The URL to use for the next-step PUT upload |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PackageFilePartsUpload().load({ identifier: 'identifier', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PackageFilePartsUploadEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PackageFileUploadEntity

```ts
const package_file_upload = client.PackageFileUpload()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PackageFileUpload().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  repo: 'example_repo',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PackageFileUploadEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PackageLicensePolicyEvaluationEntity

```ts
const package_license_policy_evaluation = client.PackageLicensePolicyEvaluation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_licenses` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `evaluation_count` | `number` | No |  |
| `name` | `string` | No |  |
| `on_violation_quarantine` | `boolean` | No |  |
| `package_query_string` | `string` | No |  |
| `policy` | `Record<string, any>` | Yes |  |
| `slug_perm` | `string` | No |  |
| `spdx_identifiers` | `any[]` | Yes |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `violation_count` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PackageLicensePolicyEvaluation().create({
  org_id: 'example_org_id',
  policy_slug_perm: 'example_policy_slug_perm',
  policy: {},
  spdx_identifiers: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PackageLicensePolicyEvaluation().list({ org_id: "example", policy_slug_perm: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PackageLicensePolicyEvaluation().load({ id: 'package_license_policy_evaluation_id', license_policy_id: 'license_policy_id', org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PackageLicensePolicyEvaluationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PackageVersionBadgeEntity

```ts
const package_version_badge = client.PackageVersionBadge()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PackageVersionBadge().load({ owner: 'owner', package_format: 'package_format', package_identifier: 'package_identifier', package_name: 'package_name', package_version: 'package_version', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PackageVersionBadgeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PackageVulnerabilityPolicyEvaluationEntity

```ts
const package_vulnerability_policy_evaluation = client.PackageVulnerabilityPolicyEvaluation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_severity` | `boolean` | No | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `evaluation_count` | `number` | No |  |
| `min_severity` | `string` | No |  |
| `name` | `string` | No |  |
| `on_violation_quarantine` | `boolean` | No |  |
| `package_query_string` | `string` | No |  |
| `policy` | `Record<string, any>` | No |  |
| `slug_perm` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `violation_count` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PackageVulnerabilityPolicyEvaluation().create({
  org_id: 'example_org_id',
  policy_slug_perm: 'example_policy_slug_perm',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PackageVulnerabilityPolicyEvaluation().list({ org_id: "example", policy_slug_perm: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PackageVulnerabilityPolicyEvaluation().load({ id: 'package_vulnerability_policy_evaluation_id', org_id: 'org_id', vulnerability_policy_id: 'vulnerability_policy_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PackageVulnerabilityPolicyEvaluationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PrivilegeEntity

```ts
const privilege = client.Privilege()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PrivilegeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProfileEntity

```ts
const profile = client.Profile()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProfileEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProviderSettingEntity

```ts
const provider_setting = client.ProviderSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claims` | `Record<string, any>` | Yes | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `enabled` | `boolean` | Yes | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | `string` | No | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | `string` | Yes | The name of the provider settings are being configured for |
| `provider_url` | `string` | Yes | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | `any[]` | No | The service accounts associated with these provider settings. |
| `slug` | `string` | No | The slug of the provider settings |
| `slug_perm` | `string` | No | The unique, immutable identifier of the provider settings. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProviderSetting().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProviderSetting().load({ org_id: 'org_id', slug_perm: 'slug_perm' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProviderSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProviderSettingsWriteEntity

```ts
const provider_settings_write = client.ProviderSettingsWrite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claims` | `Record<string, any>` | Yes | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `dynamic_mappings` | `any[]` | No | The dynamic mappings of `mapping_claim` values to service accounts. |
| `enabled` | `boolean` | Yes | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | `string` | No | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | `string` | Yes | The name of the provider settings are being configured for |
| `provider_url` | `string` | Yes | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | `any[]` | No | The service accounts associated with these provider settings. |
| `slug` | `string` | No | The slug of the provider settings |
| `slug_perm` | `string` | No | The unique, immutable identifier of the provider settings. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProviderSettingsWrite().create({
  org_id: 'example_org_id',
  claims: {},
  enabled: true,
  name: 'example_name',
  provider_url: 'example_provider_url',
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProviderSettingsWrite().update({
  org_id: 'org_id',
  slug_perm: 'slug_perm',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProviderSettingsWriteEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PythonEntity

```ts
const python = client.Python()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Python().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Python().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Python().load({ id: 'python_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Python().update({
  id: 'python_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PythonEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## QuarantineEntity

```ts
const quarantine = client.Quarantine()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `QuarantineEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## QuotaEntity

```ts
const quota = client.Quota()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display` | `Record<string, any>` | Yes |  |
| `history` | `any[]` | Yes |  |
| `raw` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Quota().load({ id: 'quota_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `QuotaEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RawEntity

```ts
const raw = client.Raw()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RawEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RefreshEntity

```ts
const refresh = client.Refresh()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RefreshEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RegenerateEntity

```ts
const regenerate = client.Regenerate()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RegenerateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepoEntity

```ts
const repo = client.Repo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cdn_url` | `string` | No | Base URL from which packages and other artifacts are downloaded. |
| `content_kind` | `string` | No | The repository content kind determines whether this repository contains packages, or provides a distribution of packages from other repositories. |
| `contextual_auth_realm` | `boolean` | No | If checked, missing credentials for this repository where basic authentication is required shall present an enriched value in the 'WWW-Authenticate' header containing the namespace and repository. |
| `copy_own` | `boolean` | No | If checked, users can copy any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `copy_packages` | `string` | No | This defines the minimum level of privilege required for a user to copy packages. |
| `cosign_signing_enabled` | `boolean` | No | When enabled, all pushed (or pulled from upstream) OCI packages and artifacts will be signed using cosign with the repository's ECDSA key. |
| `created_at` | `string` | No |  |
| `default_privilege` | `string` | No | This defines the default level of privilege that all of your organization members have for this repository. |
| `delete_own` | `boolean` | No | If checked, users can delete any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `delete_packages` | `string` | No | This defines the minimum level of privilege required for a user to delete packages. |
| `deleted_at` | `string` | No | The datetime the repository was manually deleted at. |
| `description` | `string` | No | A description of the repository's purpose/contents. |
| `distributes` | `any[]` | No | The repositories distributed through this repo. |
| `docker_refresh_tokens_enabled` | `boolean` | No | If checked, refresh tokens will be issued in addition to access tokens for Docker authentication. |
| `ecdsa_keys` | `any[]` | No |  |
| `enforce_eula` | `boolean` | No | If checked, downloads will explicitly require acceptance of an EULA. |
| `gpg_keys` | `any[]` | No |  |
| `index_files` | `boolean` | No | If checked, files contained in packages will be indexed, which increase the synchronisation time required for packages. |
| `is_open_source` | `boolean` | No |  |
| `is_private` | `boolean` | No |  |
| `is_public` | `boolean` | No |  |
| `manage_entitlements_privilege` | `string` | No | This defines the minimum level of privilege required for a user to manage entitlement tokens with private repositories. |
| `move_own` | `boolean` | No | If checked, users can move any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `move_packages` | `string` | No | This defines the minimum level of privilege required for a user to move packages. |
| `name` | `string` | Yes | A descriptive name for the repository. |
| `namespace` | `string` | No | Namespace to which this repository belongs. |
| `namespace_url` | `string` | No | API endpoint where data about this namespace can be retrieved. |
| `nuget_native_signing_enabled` | `boolean` | No | When enabled, all pushed (or pulled from upstream) nuget packages and artifacts will be signed using the repository's X.509 RSA certificate. |
| `num_downloads` | `number` | No | The number of downloads for packages in the repository. |
| `num_policy_violated_packages` | `number` | No | Number of packages with policy violations in a repository. |
| `num_quarantined_packages` | `number` | No | Number of quarantined packages in a repository. |
| `open_source_license` | `string` | No | The SPDX identifier of the open source license. |
| `open_source_project_url` | `string` | No | The URL to the Open-Source project, used for validating that the project meets the requirements for Open-Source. |
| `package_count` | `number` | No | The number of packages in the repository. |
| `package_group_count` | `number` | No | The number of groups in the repository. |
| `proxy_npmjs` | `boolean` | No | If checked, Npm packages that are not in the repository when requested by clients will automatically be proxied from the public npmjs.org registry. |
| `proxy_pypi` | `boolean` | No | If checked, Python packages that are not in the repository when requested by clients will automatically be proxied from the public pypi.python.org registry. |
| `raw_package_index_enabled` | `boolean` | No | If checked, HTML and JSON indexes will be generated that list all available raw packages in the repository. |
| `raw_package_index_signatures_enabled` | `boolean` | No | If checked, the HTML and JSON indexes will display raw package GPG signatures alongside the index packages. |
| `replace_packages` | `string` | No | This defines the minimum level of privilege required for a user to republish packages. |
| `replace_packages_by_default` | `boolean` | No | If checked, uploaded packages will overwrite/replace any others with the same attributes (e.g. |
| `repository_type` | `number` | No | The repository type changes how it is accessed and billed. |
| `repository_type_str` | `string` | No | The repository type changes how it is accessed and billed. |
| `resync_own` | `boolean` | No | If checked, users can resync any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `resync_packages` | `string` | No | This defines the minimum level of privilege required for a user to resync packages. |
| `scan_own` | `boolean` | No | If checked, users can scan any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `scan_packages` | `string` | No | This defines the minimum level of privilege required for a user to scan packages. |
| `self_html_url` | `string` | No | Website URL for this repository. |
| `self_url` | `string` | No | API endpoint where data about this repository can be retrieved. |
| `show_setup_all` | `boolean` | No | If checked, the Set Me Up help for all formats will always be shown, even if you don't have packages of that type uploaded. |
| `size` | `number` | No | The calculated size of the repository. |
| `size_str` | `string` | No | The calculated size of the repository (human readable). |
| `slug` | `string` | No | The slug identifies the repository in URIs. |
| `slug_perm` | `string` | No | The slug_perm immutably identifies the repository. |
| `storage_region` | `string` | No | The Cloudsmith region in which package files are stored. |
| `strict_npm_validation` | `boolean` | No | If checked, npm packages will be validated strictly to ensure the package matches specifcation. |
| `tag_pre_releases_as_latest` | `boolean` | No | If checked, packages pushed with a pre-release component on that version will be marked with the 'latest' tag. |
| `use_debian_labels` | `boolean` | No | If checked, a 'Label' field will be present in Debian-based repositories. |
| `use_default_cargo_upstream` | `boolean` | No | If checked, dependencies of uploaded Cargo crates which do not set an explicit value for "registry" will be assumed to be available from crates.io. |
| `use_entitlements_privilege` | `string` | No | This defines the minimum level of privilege required for a user to see/use entitlement tokens with private repositories. |
| `use_noarch_packages` | `boolean` | No | If checked, noarch packages (if supported) are enabled in installations/configurations. |
| `use_source_packages` | `boolean` | No | If checked, source packages (if supported) are enabled in installations/configurations. |
| `use_vulnerability_scanning` | `boolean` | No | If checked, vulnerability scanning will be enabled for all supported packages within this repository. |
| `user_entitlements_enabled` | `boolean` | No | If checked, users can use and manage their own user-specific entitlement token for the repository (if private). |
| `view_statistics` | `string` | No | This defines the minimum level of privilege required for a user to view repository statistics, to include entitlement-based usage, if applicable. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `transfer_region` | `/repos/{owner}/{repo}/transfer-region/` | `client.Repo().create({ $action: 'transfer_region', ... })` |

An action returns that action's OWN response, which is not necessarily a
Repo record — check the API definition for its shape.

```ts
const result = await client.Repo().create({
  $action: 'transfer_region',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Repo().create({
  id: 'example_id',
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Repo().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Repo().load({ id: 'repo_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Repo().remove({ identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Repo().update({
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryAuditLogEntity

```ts
const repository_audit_log = client.RepositoryAuditLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `string` | Yes |  |
| `actor_ip_address` | `string` | Yes |  |
| `actor_kind` | `string` | No |  |
| `actor_location` | `Record<string, any>` | Yes |  |
| `actor_slug_perm` | `string` | Yes |  |
| `actor_url` | `string` | No |  |
| `context` | `string` | Yes |  |
| `event` | `string` | Yes |  |
| `event_at` | `string` | Yes |  |
| `object` | `string` | Yes |  |
| `object_kind` | `string` | Yes |  |
| `object_slug_perm` | `string` | Yes |  |
| `uuid` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RepositoryAuditLog().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryAuditLogEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryEcdsaKeyEntity

```ts
const repository_ecdsa_key = client.RepositoryEcdsaKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No | If selected this is the active key for this repository. |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No | If selected this is the default key for this repository. |
| `fingerprint` | `string` | No | The long identifier used by ECDSA for this key. |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No | The public key given to repository users. |
| `ssh_fingerprint` | `string` | No | The SSH fingerprint used by ECDSA for this key. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryEcdsaKey().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryEcdsaKey().load({ identifier: 'identifier', owner: 'owner' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryEcdsaKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryGeoIpRuleEntity

```ts
const repository_geo_ip_rule = client.RepositoryGeoIpRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cidr` | `Record<string, any>` | Yes |  |
| `country_code` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryGeoIpRule().load({ identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.RepositoryGeoIpRule().update({
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryGeoIpRuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryGeoIpStatusEntity

```ts
const repository_geo_ip_status = client.RepositoryGeoIpStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `geoip_enabled` | `boolean` | No | If checked, any access to the website or downloads for this repository is allowed/denied according to the configured Geo/IP restriction rules. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryGeoIpStatus().load({ identifier: 'identifier', owner: 'owner' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryGeoIpStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryGeoIpTestAddressEntity

```ts
const repository_geo_ip_test_address = client.RepositoryGeoIpTestAddress()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryGeoIpTestAddress().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryGeoIpTestAddressEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryGpgKeyEntity

```ts
const repository_gpg_key = client.RepositoryGpgKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No | If selected this is the active key for this repository. |
| `comment` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No | If selected this is the default key for this repository. |
| `fingerprint` | `string` | No | The long identifier used by GPG for this key. |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No | The public key given to repository users. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryGpgKey().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  comment: 'example_comment',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryGpgKey().load({ identifier: 'identifier', owner: 'owner' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryGpgKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryPrivilegeInputEntity

```ts
const repository_privilege_input = client.RepositoryPrivilegeInput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `privilege` | `string` | Yes | The level of privilege that the user or team should be granted to the specified repository. |
| `service` | `string` | No | The service identifier (slug). |
| `team` | `string` | No | The team identifier (slug). |
| `user` | `string` | No | The user identifier (slug). |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RepositoryPrivilegeInput().list({ identifier: "example", owner: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryPrivilegeInputEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryRetentionRuleEntity

```ts
const repository_retention_rule = client.RepositoryRetentionRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `retention_count_limit` | `number` | No | The maximum X number of packages to retain. |
| `retention_days_limit` | `number` | No | The X number of days of packages to retain. |
| `retention_enabled` | `boolean` | No | If checked, the retention lifecycle rules will be activated for the repository. |
| `retention_group_by_format` | `boolean` | No | If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are diffe… |
| `retention_group_by_name` | `boolean` | No | If checked, retention will apply to groups of packages by name rather than all packages.<br>For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgB… |
| `retention_group_by_package_type` | `boolean` | No | If checked, retention will apply to packages by package type (e.g. |
| `retention_package_query_string` | `string` | No | A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will pre… |
| `retention_size_limit` | `number` | No | The maximum X total size (in bytes) of packages to retain. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryRetentionRule().load({ owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.RepositoryRetentionRule().update({
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryRetentionRuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryRsaKeyEntity

```ts
const repository_rsa_key = client.RepositoryRsaKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No | If selected this is the active key for this repository. |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No | If selected this is the default key for this repository. |
| `fingerprint` | `string` | No | The long identifier used by RSA for this key. |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No | The public key given to repository users. |
| `ssh_fingerprint` | `string` | No | The SSH fingerprint used by RSA for this key. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryRsaKey().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryRsaKey().load({ identifier: 'identifier', owner: 'owner' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryRsaKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryTokenEntity

```ts
const repository_token = client.RepositoryToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clients` | `number` | No |  |
| `created_at` | `string` | No | The datetime the token was updated at. |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `default` | `boolean` | No | If selected this is the default token for this repository. |
| `disable_url` | `string` | No |  |
| `downloads` | `number` | No |  |
| `enable_url` | `string` | No |  |
| `eula_accepted` | `Record<string, any>` | No |  |
| `eula_accepted_at` | `string` | No | The datetime the EULA was accepted at. |
| `eula_accepted_from` | `string` | No |  |
| `eula_required` | `boolean` | No | If checked, a EULA acceptance is required for this token. |
| `has_limits` | `boolean` | No |  |
| `identifier` | `number` | No | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `boolean` | No | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` | `boolean` | No |  |
| `limit_bandwidth` | `number` | No | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` | `string` | No |  |
| `limit_date_range_from` | `string` | No | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | `string` | No | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | `number` | No | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | `number` | No | The maximum number of downloads allowed for the token. |
| `limit_package_query` | `string` | No | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | `string` | No | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` | `Record<string, any>` | No |  |
| `name` | `string` | Yes |  |
| `refresh_url` | `string` | No |  |
| `reset_url` | `string` | No |  |
| `scheduled_reset_at` | `string` | No | The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero. |
| `scheduled_reset_period` | `string` | No |  |
| `self_url` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `token` | `string` | No |  |
| `updated_at` | `string` | No | The datetime the token was updated at. |
| `updated_by` | `string` | No |  |
| `updated_by_url` | `string` | No |  |
| `usage` | `string` | No |  |
| `user` | `string` | No |  |
| `user_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryToken().create({
  owner: 'example_owner',
  repo: 'example_repo',
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RepositoryToken().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryToken().load({ identifier: 'identifier', owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.RepositoryToken().update({
  identifier: 'identifier',
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryTokenRefreshEntity

```ts
const repository_token_refresh = client.RepositoryTokenRefresh()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clients` | `number` | No |  |
| `created_at` | `string` | No | The datetime the token was updated at. |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `default` | `boolean` | No | If selected this is the default token for this repository. |
| `disable_url` | `string` | No |  |
| `downloads` | `number` | No |  |
| `enable_url` | `string` | No |  |
| `eula_accepted` | `Record<string, any>` | No |  |
| `eula_accepted_at` | `string` | No | The datetime the EULA was accepted at. |
| `eula_accepted_from` | `string` | No |  |
| `eula_required` | `boolean` | No | If checked, a EULA acceptance is required for this token. |
| `has_limits` | `boolean` | No |  |
| `identifier` | `number` | No | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `boolean` | No | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` | `boolean` | No |  |
| `limit_bandwidth` | `number` | No | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` | `string` | No |  |
| `limit_date_range_from` | `string` | No | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | `string` | No | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | `number` | No | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | `number` | No | The maximum number of downloads allowed for the token. |
| `limit_package_query` | `string` | No | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | `string` | No | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` | `Record<string, any>` | No |  |
| `name` | `string` | No |  |
| `refresh_url` | `string` | No |  |
| `reset_url` | `string` | No |  |
| `scheduled_reset_at` | `string` | No | The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero. |
| `scheduled_reset_period` | `string` | No |  |
| `self_url` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `token` | `string` | No |  |
| `updated_at` | `string` | No | The datetime the token was updated at. |
| `updated_by` | `string` | No |  |
| `updated_by_url` | `string` | No |  |
| `usage` | `string` | No |  |
| `user` | `string` | No |  |
| `user_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryTokenRefresh().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  repo: 'example_repo',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryTokenRefreshEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryTokenSyncEntity

```ts
const repository_token_sync = client.RepositoryTokenSync()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tokens` | `any[]` | No | The entitlements that have been synchronised. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryTokenSync().create({
  owner: 'example_owner',
  repo: 'example_repo',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryTokenSyncEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryWebhookEntity

```ts
const repository_webhook = client.RepositoryWebhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `disable_reason` | `number` | No |  |
| `disable_reason_str` | `string` | No |  |
| `events` | `any[]` | Yes |  |
| `identifier` | `number` | No | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `boolean` | No | If enabled, the webhook will trigger on subscribed events and send payloads to the configured target URL. |
| `is_last_response_bad` | `boolean` | No |  |
| `last_response_status` | `number` | No |  |
| `last_response_status_str` | `string` | No |  |
| `num_sent` | `number` | No |  |
| `package_query` | `string` | No | The package-based search query for webhooks to fire. |
| `request_body_format` | `number` | No | The format of the payloads for webhook requests. |
| `request_body_format_str` | `string` | No |  |
| `request_body_template_format` | `number` | No | The format of the payloads for webhook requests. |
| `request_body_template_format_str` | `string` | No |  |
| `request_content_type` | `string` | No | The value that will be sent for the 'Content Type' header. |
| `secret_header` | `string` | No | The header to send the predefined secret in. |
| `self_url` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `target_url` | `string` | Yes | The destination URL that webhook payloads will be POST'ed to. |
| `templates` | `any[]` | Yes |  |
| `updated_at` | `string` | No |  |
| `updated_by` | `string` | No |  |
| `updated_by_url` | `string` | No |  |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates is verified when webhooks are sent. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryWebhook().create({
  owner: 'example_owner',
  repo: 'example_repo',
  events: [],
  target_url: 'example_target_url',
  templates: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RepositoryWebhook().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryWebhook().load({ identifier: 'identifier', owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.RepositoryWebhook().update({
  identifier: 'identifier',
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryWebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryX509EcdsaCertificateEntity

```ts
const repository_x509_ecdsa_certificate = client.RepositoryX509EcdsaCertificate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No | If selected this is the active key for this repository. |
| `certificate` | `string` | No | The issued certificate. |
| `certificate_chain` | `string` | No | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` | `string` | No |  |
| `certificate_chain_fingerprint_short` | `string` | No |  |
| `certificate_fingerprint` | `string` | No | The SHA-256 long identifier used |
| `certificate_fingerprint_short` | `string` | No |  |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No | If selected this is the default key for this repository. |
| `issuing_status` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryX509EcdsaCertificate().load({ identifier: 'identifier', owner: 'owner' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryX509EcdsaCertificateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryX509RsaCertificateEntity

```ts
const repository_x509_rsa_certificate = client.RepositoryX509RsaCertificate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No | If selected this is the active key for this repository. |
| `certificate` | `string` | No | The issued certificate. |
| `certificate_chain` | `string` | No | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` | `string` | No |  |
| `certificate_chain_fingerprint_short` | `string` | No |  |
| `certificate_fingerprint` | `string` | No | The SHA-256 long identifier used |
| `certificate_fingerprint_short` | `string` | No |  |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No | If selected this is the default key for this repository. |
| `issuing_status` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryX509RsaCertificate().load({ identifier: 'identifier', owner: 'owner' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryX509RsaCertificateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResetEntity

```ts
const reset = client.Reset()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResourcesRateCheckEntity

```ts
const resources_rate_check = client.ResourcesRateCheck()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `interval` | `number` | No | The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window. |
| `limit` | `number` | No | The maximum number of requests that you are permitted to send per hour |
| `remaining` | `number` | No | The number of requests that are remaining in the current rate limit window |
| `reset` | `number` | No | The UTC epoch timestamp at which the current rate limit window will reset |
| `reset_iso_8601` | `string` | No | The ISO 8601 datetime at which the current rate limit window will reset |
| `throttled` | `boolean` | No | If true, throttling is currently being enforced. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ResourcesRateCheck().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResourcesRateCheckEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResyncEntity

```ts
const resync = client.Resync()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResyncEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RetentionEntity

```ts
const retention = client.Retention()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RetentionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RpmEntity

```ts
const rpm = client.Rpm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `distro_version` | `string` | Yes | The distribution version that packages found on this upstream will be associated with. |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `string` | No | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `string` | No | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `string` | No | The GPG signature verification mode for this upstream. |
| `include_sources` | `boolean` | No | When checked, source packages will be available from this upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verification_status` | `string` | No | The signature verification status for this upstream. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Rpm().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  distro_version: 'example_distro_version',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Rpm().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Rpm().load({ id: 'rpm_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Rpm().update({
  id: 'rpm_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RpmEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RsaEntity

```ts
const rsa = client.Rsa()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RsaEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RubyEntity

```ts
const ruby = client.Ruby()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Ruby().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Ruby().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Ruby().load({ id: 'ruby_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Ruby().update({
  id: 'ruby_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RubyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SamlGroupSyncEntity

```ts
const saml_group_sync = client.SamlGroupSync()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SamlGroupSyncEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScanEntity

```ts
const scan = client.Scan()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScanEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SelfEntity

```ts
const self = client.Self()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SelfEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ServiceEntity

```ts
const service = client.Service()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `description` | `string` | No | The description of the service |
| `key` | `string` | No | The API key of the service |
| `key_expires_at` | `string` | No | The time at which the API key will expire. |
| `name` | `string` | Yes | The name of the service |
| `role` | `string` | No | The role of the service. |
| `slug` | `string` | No | The slug of the service |
| `teams` | `any[]` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `refresh` | `/orgs/{org}/services/{service}/refresh/` | `client.Service().create({ $action: 'refresh', ... })` |

An action returns that action's OWN response, which is not necessarily a
Service record — check the API definition for its shape.

```ts
const result = await client.Service().create({
  $action: 'refresh',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Service().create({
  org_id: 'example_org_id',
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Service().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Service().load({ id: 'service_id', org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Service().update({
  id: 'service_id',
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ServiceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusEntity

```ts
const status = client.Status()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusBasicEntity

```ts
const status_basic = client.StatusBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detail` | `string` | No | The message describing the state of the API. |
| `version` | `string` | No | The current version for the Cloudsmith service. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.StatusBasic().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusBasicEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StorageRegionEntity

```ts
const storage_region = client.StorageRegion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes | Name of the storage region |
| `slug` | `string` | Yes | Slug for the storage region |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.StorageRegion().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.StorageRegion().load({ id: 'storage_region_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StorageRegionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SwiftEntity

```ts
const swift = client.Swift()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | No | Secret to provide with requests to upstream. |
| `auth_username` | `string` | No | Username to provide with requests to upstream. |
| `created_at` | `string` | No | The datetime the upstream source was created. |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | No | When true, this upstream source is pending validation. |
| `priority` | `number` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `boolean` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Swift().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Swift().list({ identifier: "example", owner: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Swift().load({ id: 'swift_id', identifier: 'identifier', owner: 'owner' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Swift().update({
  id: 'swift_id',
  identifier: 'identifier',
  owner: 'owner',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SwiftEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SyncEntity

```ts
const sync = client.Sync()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SyncEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TagEntity

```ts
const tag = client.Tag()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TagEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamEntity

```ts
const team = client.Team()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TerraformEntity

```ts
const terraform = client.Terraform()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TerraformEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TestEntity

```ts
const test = client.Test()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TestEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TokenEntity

```ts
const token = client.Token()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TransferRegionEntity

```ts
const transfer_region = client.TransferRegion()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TransferRegionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No | The time at which the API key was created. |
| `key` | `string` | No | The unique API key used for authentication. |
| `slug_perm` | `string` | No | The slug_perm for token. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `token` | `/user/tokens/` | `client.User().list({ $action: 'token', ... })` |

An action returns that action's OWN response, which is not necessarily a
User record — check the API definition for its shape.

```ts
const result = await client.User().list({
  $action: 'token',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.User().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserAuthTokenEntity

```ts
const user_auth_token = client.UserAuthToken()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UserAuthToken().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserAuthTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserAuthenticationTokenEntity

```ts
const user_authentication_token = client.UserAuthenticationToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No | The time at which the API key was created. |
| `key` | `string` | No | The unique API key used for authentication. |
| `slug_perm` | `string` | No | The slug_perm for token. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UserAuthenticationToken().create({
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UserAuthenticationToken().update({
  slug_perm: 'slug_perm',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserAuthenticationTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserBriefEntity

```ts
const user_brief = client.UserBrief()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authenticated` | `boolean` | No | If true then you're logged in as a user. |
| `email` | `string` | No | Your email address that we use to contact you. |
| `name` | `string` | No | The full name of the user (if any). |
| `profile_url` | `string` | No | The URL for the full profile of the user. |
| `self_url` | `string` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UserBrief().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserBriefEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserProfileEntity

```ts
const user_profile = client.UserProfile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `company` | `string` | No |  |
| `first_name` | `string` | Yes |  |
| `job_title` | `string` | No |  |
| `joined_at` | `string` | No |  |
| `last_name` | `string` | Yes |  |
| `name` | `string` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `tagline` | `string` | No | Your tagline is a sentence about you. |
| `url` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UserProfile().load({ id: 'user_profile_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserProfileEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VagrantEntity

```ts
const vagrant = client.Vagrant()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VagrantEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ValidateEntity

```ts
const validate = client.Validate()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ValidateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VersionEntity

```ts
const version = client.Version()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VulnerabilityEntity

```ts
const vulnerability = client.Vulnerability()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | The time this scan result was stored. |
| `has_vulnerabilities` | `boolean` | No | Do the results contain any known vulnerabilities? |
| `identifier` | `string` | Yes |  |
| `max_severity` | `string` | No |  |
| `num_vulnerabilities` | `number` | No |  |
| `package` | `Record<string, any>` | Yes |  |
| `scan_id` | `number` | Yes | Deprecated (23-05-15): Please use 'identifier' instead. |
| `scans` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Vulnerability().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Vulnerability().load({ id: 'vulnerability_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VulnerabilityEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VulnerabilityPolicyEntity

```ts
const vulnerability_policy = client.VulnerabilityPolicy()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VulnerabilityPolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEntity

```ts
const webhook = client.Webhook()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Webhook().remove({ identifier: 'identifier', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## X509EcdsaEntity

```ts
const x509_ecdsa = client.X509Ecdsa()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `X509EcdsaEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## X509RsaEntity

```ts
const x509_rsa = client.X509Rsa()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `X509RsaEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new CloudsmithSDK({
  feature: {
    test: { active: true },
  }
})
```

