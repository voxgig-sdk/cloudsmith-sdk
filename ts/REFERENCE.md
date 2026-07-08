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

#### `Gon2(data?: object)`

Create a new `Gon2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Gon2Entity` instance.

#### `Gon3(data?: object)`

Create a new `Gon3` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Gon3Entity` instance.

#### `Gon4(data?: object)`

Create a new `Gon4` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Gon4Entity` instance.

#### `Gon5(data?: object)`

Create a new `Gon5` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Gon5Entity` instance.

#### `Gon6(data?: object)`

Create a new `Gon6` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Gon6Entity` instance.

#### `Gon7(data?: object)`

Create a new `Gon7` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Gon7Entity` instance.

#### `Gon8(data?: object)`

Create a new `Gon8` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Gon8Entity` instance.

#### `Gon9(data?: object)`

Create a new `Gon9` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Gon9Entity` instance.

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

#### `P2n2(data?: object)`

Create a new `P2n2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `P2n2Entity` instance.

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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Cargo().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Cargo().list()
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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Composer().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Composer().list()
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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Conda().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Conda().list()
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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Cran().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Cran().list()
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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Dart().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Dart().list()
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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `component` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `distro_version` | `any[]` | Yes |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `gpg_key_inline` | `string` | No |  |
| `gpg_key_url` | `string` | No |  |
| `gpg_verification` | `string` | No |  |
| `include_source` | `boolean` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_distribution` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verification_status` | `string` | No |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Deb().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Deb().list()
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
| `slug` | `string` | No |  |
| `variant` | `string` | No |  |
| `version` | `any[]` | No |  |

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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Docker().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Docker().list()
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
| `claim_value` | `string` | Yes |  |
| `service_account` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DynamicMapping().list()
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
| `token` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Entitlement().create({
  identifier: /* any */,
  owner: /* any */,
  repo: /* any */,
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
  owner: /* any */,
  repo: /* any */,
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
| `description` | `string` | Yes |  |
| `distribution` | `any[]` | No |  |
| `extension` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `premium` | `boolean` | Yes |  |
| `premium_plan_id` | `string` | No |  |
| `premium_plan_name` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `support` | `Record<string, any>` | Yes |  |

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

## Gon2Entity

```ts
const gon2 = client.Gon2()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `Gon2Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Gon3Entity

```ts
const gon3 = client.Gon3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Gon3().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `Gon3Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Gon4Entity

```ts
const gon4 = client.Gon4()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `Gon4Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Gon5Entity

```ts
const gon5 = client.Gon5()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Gon5().create({
  identifier: /* any */,
  owner: /* any */,
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

Create a new `Gon5Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Gon6Entity

```ts
const gon6 = client.Gon6()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Gon6().load({ identifier: 'identifier', owner: 'owner', slug_perm: 'slug_perm' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `Gon6Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Gon7Entity

```ts
const gon7 = client.Gon7()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `Gon7Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Gon8Entity

```ts
const gon8 = client.Gon8()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Gon8().update({
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

Create a new `Gon8Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudsmithSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Gon9Entity

```ts
const gon9 = client.Gon9()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Gon9().update({
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

Create a new `Gon9Entity` instance with the same client and
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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Helm().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Helm().list()
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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Hex().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Hex().list()
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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Huggingface().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Huggingface().list()
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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `gpg_key_inline` | `string` | No |  |
| `gpg_key_url` | `string` | No |  |
| `gpg_verification` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verification_status` | `string` | No |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Maven().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Maven().list()
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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Npm().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Npm().list()
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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Nuget().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Nuget().list()
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
| `location` | `string` | No |  |
| `name` | `string` | Yes |  |
| `package` | `Record<string, any>` | Yes |  |
| `policy` | `Record<string, any>` | Yes |  |
| `reason` | `any[]` | Yes |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `tagline` | `string` | No |  |
| `vulnerability_scan_result` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Org().create({
  id: /* string */,
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
  org_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationGroupSync().list()
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
| `email` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `inviter` | `string` | No |  |
| `inviter_url` | `string` | No |  |
| `org` | `string` | No |  |
| `role` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `team` | `any[]` | No |  |
| `user` | `string` | No |  |
| `user_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationInvite().create({
  org_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationInvite().list()
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
| `email` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `inviter` | `string` | No |  |
| `inviter_url` | `string` | No |  |
| `org` | `string` | No |  |
| `role` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `team` | `any[]` | No |  |
| `user` | `string` | No |  |
| `user_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationInviteExtend().create({
  org_id: /* string */,
  slug_perm: /* any */,
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
const results = await client.OrganizationMembership().list()
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
| `allow_unknown_license` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `name` | `string` | Yes |  |
| `on_violation_quarantine` | `boolean` | No |  |
| `package_query_string` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `spdx_identifier` | `any[]` | Yes |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationPackageLicensePolicy().create({
  org_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationPackageLicensePolicy().list()
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
| `allow_unknown_severity` | `boolean` | No |  |
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
  org_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationPackageVulnerabilityPolicy().list()
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
| `saml_metadata_inline` | `string` | No |  |
| `saml_metadata_url` | `string` | No |  |

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
  org_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationTeam().list()
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
  org_id: /* string */,
  team_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationTeamMember().list()
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

## P2n2Entity

```ts
const p2n2 = client.P2n2()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `P2n2Entity` instance with the same client and
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
| `architecture` | `any[]` | No |  |
| `backend_kind` | `number` | No |  |
| `cdn_url` | `string` | No |  |
| `checksum_md5` | `string` | No |  |
| `checksum_sha1` | `string` | No |  |
| `checksum_sha256` | `string` | No |  |
| `checksum_sha512` | `string` | No |  |
| `count` | `number` | Yes |  |
| `dep_type` | `string` | No |  |
| `dependencies_checksum_md5` | `string` | No |  |
| `dependencies_url` | `string` | No |  |
| `description` | `string` | No |  |
| `display_name` | `string` | No |  |
| `distro` | `Record<string, any>` | Yes |  |
| `distro_version` | `Record<string, any>` | No |  |
| `download` | `number` | No |  |
| `epoch` | `number` | No |  |
| `extension` | `string` | No |  |
| `file` | `any[]` | No |  |
| `filename` | `string` | No |  |
| `format` | `string` | No |  |
| `format_url` | `string` | No |  |
| `freeable_storage` | `number` | No |  |
| `fully_qualified_name` | `string` | No |  |
| `identifier` | `Record<string, any>` | No |  |
| `identifier_perm` | `string` | No |  |
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
| `license` | `string` | No |  |
| `name` | `string` | No |  |
| `namespace` | `string` | No |  |
| `namespace_url` | `string` | No |  |
| `num_download` | `number` | Yes |  |
| `num_file` | `number` | No |  |
| `operator` | `string` | No |  |
| `origin_repository` | `string` | No |  |
| `origin_repository_url` | `string` | No |  |
| `package` | `Record<string, any>` | Yes |  |
| `package_type` | `number` | No |  |
| `policy_violated` | `boolean` | No |  |
| `release` | `string` | No |  |
| `repository` | `string` | No |  |
| `repository_url` | `string` | No |  |
| `security_scan_completed_at` | `string` | No |  |
| `security_scan_started_at` | `string` | No |  |
| `security_scan_status` | `string` | No |  |
| `security_scan_status_updated_at` | `string` | No |  |
| `self_html_url` | `string` | No |  |
| `self_url` | `string` | No |  |
| `signature_url` | `string` | No |  |
| `size` | `number` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `stage` | `number` | No |  |
| `stage_str` | `string` | No |  |
| `stage_updated_at` | `string` | No |  |
| `status` | `number` | No |  |
| `status_reason` | `string` | No |  |
| `status_str` | `string` | No |  |
| `status_updated_at` | `string` | No |  |
| `status_url` | `string` | No |  |
| `subtype` | `string` | No |  |
| `summary` | `string` | No |  |
| `sync_finished_at` | `string` | No |  |
| `sync_progress` | `number` | No |  |
| `tag` | `Record<string, any>` | No |  |
| `tags_immutable` | `Record<string, any>` | No |  |
| `type_display` | `string` | No |  |
| `uploaded_at` | `string` | No |  |
| `uploader` | `string` | No |  |
| `uploader_url` | `string` | No |  |
| `version` | `string` | No |  |
| `version_orig` | `string` | No |  |
| `vulnerability_scan_results_url` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `architecture` | - | - | - | - |
| `backend_kind` | - | - | - | - |
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
| `download` | - | - | - | - |
| `epoch` | - | - | - | - |
| `extension` | - | - | - | - |
| `file` | - | - | - | - |
| `filename` | - | - | - | - |
| `format` | - | - | - | - |
| `format_url` | - | - | - | - |
| `freeable_storage` | - | - | - | - |
| `fully_qualified_name` | - | - | - | - |
| `identifier` | - | - | - | - |
| `identifier_perm` | - | - | - | - |
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
| `num_download` | - | - | - | - |
| `num_file` | - | - | - | - |
| `operator` | - | - | - | - |
| `origin_repository` | - | - | - | - |
| `origin_repository_url` | - | - | - | - |
| `package` | - | - | - | - |
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
| `tag` | - | - | - | - |
| `tags_immutable` | - | - | - | - |
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
  owner: /* any */,
  repo: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Package().list()
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
| `enabled` | `boolean` | No |  |
| `name` | `string` | No |  |
| `package_query_string` | `string` | Yes |  |
| `slug_perm` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PackageDenyPolicy().create({
  org_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PackageDenyPolicy().list()
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
| `identifier` | `string` | No |  |
| `upload_querystring` | `string` | No |  |
| `upload_url` | `string` | No |  |

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
  identifier: /* any */,
  owner: /* any */,
  repo: /* any */,
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
| `created_at` | `string` | No |  |
| `evaluation_count` | `number` | No |  |
| `policy` | `Record<string, any>` | Yes |  |
| `slug_perm` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `violation_count` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PackageLicensePolicyEvaluation().create({
  org_id: /* string */,
  policy_slug_perm: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PackageLicensePolicyEvaluation().list()
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
| `created_at` | `string` | No |  |
| `evaluation_count` | `number` | No |  |
| `policy` | `Record<string, any>` | No |  |
| `slug_perm` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `violation_count` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PackageVulnerabilityPolicyEvaluation().create({
  org_id: /* string */,
  policy_slug_perm: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PackageVulnerabilityPolicyEvaluation().list()
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
| `claim` | `Record<string, any>` | Yes |  |
| `enabled` | `boolean` | Yes |  |
| `mapping_claim` | `string` | No |  |
| `name` | `string` | Yes |  |
| `provider_url` | `string` | Yes |  |
| `service_account` | `any[]` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProviderSetting().list()
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
| `claim` | `Record<string, any>` | Yes |  |
| `dynamic_mapping` | `any[]` | No |  |
| `enabled` | `boolean` | Yes |  |
| `mapping_claim` | `string` | No |  |
| `name` | `string` | Yes |  |
| `provider_url` | `string` | Yes |  |
| `service_account` | `any[]` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProviderSettingsWrite().create({
  org_id: /* string */,
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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Python().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Python().list()
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
| `history` | `any[]` | Yes |  |
| `usage` | `Record<string, any>` | Yes |  |

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
| `cdn_url` | `string` | No |  |
| `content_kind` | `string` | No |  |
| `contextual_auth_realm` | `boolean` | No |  |
| `copy_own` | `boolean` | No |  |
| `copy_package` | `string` | No |  |
| `cosign_signing_enabled` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `default_privilege` | `string` | No |  |
| `delete_own` | `boolean` | No |  |
| `delete_package` | `string` | No |  |
| `deleted_at` | `string` | No |  |
| `description` | `string` | No |  |
| `distribute` | `any[]` | No |  |
| `docker_refresh_tokens_enabled` | `boolean` | No |  |
| `ecdsa_key` | `any[]` | No |  |
| `enforce_eula` | `boolean` | No |  |
| `gpg_key` | `any[]` | No |  |
| `index_file` | `boolean` | No |  |
| `is_open_source` | `boolean` | No |  |
| `is_private` | `boolean` | No |  |
| `is_public` | `boolean` | No |  |
| `manage_entitlements_privilege` | `string` | No |  |
| `move_own` | `boolean` | No |  |
| `move_package` | `string` | No |  |
| `name` | `string` | Yes |  |
| `namespace` | `string` | No |  |
| `namespace_url` | `string` | No |  |
| `nuget_native_signing_enabled` | `boolean` | No |  |
| `num_download` | `number` | No |  |
| `num_policy_violated_package` | `number` | No |  |
| `num_quarantined_package` | `number` | No |  |
| `open_source_license` | `string` | No |  |
| `open_source_project_url` | `string` | No |  |
| `package_count` | `number` | No |  |
| `package_group_count` | `number` | No |  |
| `proxy_npmj` | `boolean` | No |  |
| `proxy_pypi` | `boolean` | No |  |
| `raw_package_index_enabled` | `boolean` | No |  |
| `raw_package_index_signatures_enabled` | `boolean` | No |  |
| `replace_package` | `string` | No |  |
| `replace_packages_by_default` | `boolean` | No |  |
| `repository_type` | `number` | No |  |
| `repository_type_str` | `string` | No |  |
| `resync_own` | `boolean` | No |  |
| `resync_package` | `string` | No |  |
| `scan_own` | `boolean` | No |  |
| `scan_package` | `string` | No |  |
| `self_html_url` | `string` | No |  |
| `self_url` | `string` | No |  |
| `show_setup_all` | `boolean` | No |  |
| `size` | `number` | No |  |
| `size_str` | `string` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `storage_region` | `string` | No |  |
| `strict_npm_validation` | `boolean` | No |  |
| `tag_pre_releases_as_latest` | `boolean` | No |  |
| `use_debian_label` | `boolean` | No |  |
| `use_default_cargo_upstream` | `boolean` | No |  |
| `use_entitlements_privilege` | `string` | No |  |
| `use_noarch_package` | `boolean` | No |  |
| `use_source_package` | `boolean` | No |  |
| `use_vulnerability_scanning` | `boolean` | No |  |
| `user_entitlements_enabled` | `boolean` | No |  |
| `view_statistic` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Repo().create({
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
const results = await client.RepositoryAuditLog().list()
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
| `active` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No |  |
| `fingerprint` | `string` | No |  |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No |  |
| `ssh_fingerprint` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryEcdsaKey().create({
  identifier: /* any */,
  owner: /* any */,
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
| `geoip_enabled` | `boolean` | No |  |

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
  identifier: /* any */,
  owner: /* any */,
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
| `active` | `boolean` | No |  |
| `comment` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No |  |
| `fingerprint` | `string` | No |  |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryGpgKey().create({
  identifier: /* any */,
  owner: /* any */,
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
| `privilege` | `string` | Yes |  |
| `service` | `string` | No |  |
| `team` | `string` | No |  |
| `user` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RepositoryPrivilegeInput().list()
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
| `retention_count_limit` | `number` | No |  |
| `retention_days_limit` | `number` | No |  |
| `retention_enabled` | `boolean` | No |  |
| `retention_group_by_format` | `boolean` | No |  |
| `retention_group_by_name` | `boolean` | No |  |
| `retention_group_by_package_type` | `boolean` | No |  |
| `retention_package_query_string` | `string` | No |  |
| `retention_size_limit` | `number` | No |  |

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
| `active` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No |  |
| `fingerprint` | `string` | No |  |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No |  |
| `ssh_fingerprint` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryRsaKey().create({
  identifier: /* any */,
  owner: /* any */,
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
| `client` | `number` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `default` | `boolean` | No |  |
| `disable_url` | `string` | No |  |
| `download` | `number` | No |  |
| `enable_url` | `string` | No |  |
| `eula_accepted` | `Record<string, any>` | No |  |
| `eula_accepted_at` | `string` | No |  |
| `eula_accepted_from` | `string` | No |  |
| `eula_required` | `boolean` | No |  |
| `has_limit` | `boolean` | No |  |
| `identifier` | `number` | No |  |
| `is_active` | `boolean` | No |  |
| `is_limited` | `boolean` | No |  |
| `limit_bandwidth` | `number` | No |  |
| `limit_bandwidth_unit` | `string` | No |  |
| `limit_date_range_from` | `string` | No |  |
| `limit_date_range_to` | `string` | No |  |
| `limit_num_client` | `number` | No |  |
| `limit_num_download` | `number` | No |  |
| `limit_package_query` | `string` | No |  |
| `limit_path_query` | `string` | No |  |
| `metadata` | `Record<string, any>` | No |  |
| `name` | `string` | Yes |  |
| `refresh_url` | `string` | No |  |
| `reset_url` | `string` | No |  |
| `scheduled_reset_at` | `string` | No |  |
| `scheduled_reset_period` | `string` | No |  |
| `self_url` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `token` | `string` | No |  |
| `updated_at` | `string` | No |  |
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
  owner: /* any */,
  repo: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RepositoryToken().list()
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
| `client` | `number` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `default` | `boolean` | No |  |
| `disable_url` | `string` | No |  |
| `download` | `number` | No |  |
| `enable_url` | `string` | No |  |
| `eula_accepted` | `Record<string, any>` | No |  |
| `eula_accepted_at` | `string` | No |  |
| `eula_accepted_from` | `string` | No |  |
| `eula_required` | `boolean` | No |  |
| `has_limit` | `boolean` | No |  |
| `identifier` | `number` | No |  |
| `is_active` | `boolean` | No |  |
| `is_limited` | `boolean` | No |  |
| `limit_bandwidth` | `number` | No |  |
| `limit_bandwidth_unit` | `string` | No |  |
| `limit_date_range_from` | `string` | No |  |
| `limit_date_range_to` | `string` | No |  |
| `limit_num_client` | `number` | No |  |
| `limit_num_download` | `number` | No |  |
| `limit_package_query` | `string` | No |  |
| `limit_path_query` | `string` | No |  |
| `metadata` | `Record<string, any>` | No |  |
| `name` | `string` | No |  |
| `refresh_url` | `string` | No |  |
| `reset_url` | `string` | No |  |
| `scheduled_reset_at` | `string` | No |  |
| `scheduled_reset_period` | `string` | No |  |
| `self_url` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `token` | `string` | No |  |
| `updated_at` | `string` | No |  |
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
  identifier: /* any */,
  owner: /* any */,
  repo: /* any */,
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
| `token` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryTokenSync().create({
  owner: /* any */,
  repo: /* any */,
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
| `event` | `any[]` | Yes |  |
| `identifier` | `number` | No |  |
| `is_active` | `boolean` | No |  |
| `is_last_response_bad` | `boolean` | No |  |
| `last_response_status` | `number` | No |  |
| `last_response_status_str` | `string` | No |  |
| `num_sent` | `number` | No |  |
| `package_query` | `string` | No |  |
| `request_body_format` | `number` | No |  |
| `request_body_format_str` | `string` | No |  |
| `request_body_template_format` | `number` | No |  |
| `request_body_template_format_str` | `string` | No |  |
| `request_content_type` | `string` | No |  |
| `secret_header` | `string` | No |  |
| `self_url` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `target_url` | `string` | Yes |  |
| `template` | `any[]` | Yes |  |
| `updated_at` | `string` | No |  |
| `updated_by` | `string` | No |  |
| `updated_by_url` | `string` | No |  |
| `verify_ssl` | `boolean` | No |  |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `created_by` | - | - | - |
| `created_by_url` | - | - | - |
| `disable_reason` | - | - | - |
| `disable_reason_str` | - | - | - |
| `event` | - | - | - |
| `identifier` | - | - | - |
| `is_active` | - | - | - |
| `is_last_response_bad` | - | - | - |
| `last_response_status` | - | - | - |
| `last_response_status_str` | - | - | - |
| `num_sent` | - | - | - |
| `package_query` | - | - | - |
| `request_body_format` | - | - | - |
| `request_body_format_str` | - | - | - |
| `request_body_template_format` | - | - | - |
| `request_body_template_format_str` | - | - | - |
| `request_content_type` | - | - | - |
| `secret_header` | - | - | - |
| `self_url` | - | - | - |
| `slug_perm` | - | - | - |
| `target_url` | - | - | - |
| `template` | Yes | - | - |
| `updated_at` | - | - | - |
| `updated_by` | - | - | - |
| `updated_by_url` | - | - | - |
| `verify_ssl` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryWebhook().create({
  owner: /* any */,
  repo: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RepositoryWebhook().list()
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
| `active` | `boolean` | No |  |
| `certificate` | `string` | No |  |
| `certificate_chain` | `string` | No |  |
| `certificate_chain_fingerprint` | `string` | No |  |
| `certificate_chain_fingerprint_short` | `string` | No |  |
| `certificate_fingerprint` | `string` | No |  |
| `certificate_fingerprint_short` | `string` | No |  |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No |  |
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
| `active` | `boolean` | No |  |
| `certificate` | `string` | No |  |
| `certificate_chain` | `string` | No |  |
| `certificate_chain_fingerprint` | `string` | No |  |
| `certificate_chain_fingerprint_short` | `string` | No |  |
| `certificate_fingerprint` | `string` | No |  |
| `certificate_fingerprint_short` | `string` | No |  |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No |  |
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
| `resource` | `Record<string, any>` | No |  |

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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `distro_version` | `string` | Yes |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `gpg_key_inline` | `string` | No |  |
| `gpg_key_url` | `string` | No |  |
| `gpg_verification` | `string` | No |  |
| `include_source` | `boolean` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verification_status` | `string` | No |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Rpm().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Rpm().list()
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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Ruby().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Ruby().list()
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
| `description` | `string` | No |  |
| `key` | `string` | No |  |
| `key_expires_at` | `string` | No |  |
| `name` | `string` | Yes |  |
| `role` | `string` | No |  |
| `slug` | `string` | No |  |
| `team` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Service().create({
  org_id: /* string */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Service().list()
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
| `detail` | `string` | No |  |
| `version` | `string` | No |  |

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
| `label` | `string` | Yes |  |
| `slug` | `string` | Yes |  |

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
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Swift().create({
  identifier: /* any */,
  owner: /* any */,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Swift().list()
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
| `created` | `string` | No |  |
| `key` | `string` | No |  |
| `slug_perm` | `string` | No |  |

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
| `created` | `string` | No |  |
| `key` | `string` | No |  |
| `slug_perm` | `string` | No |  |

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
| `authenticated` | `boolean` | No |  |
| `email` | `string` | No |  |
| `name` | `string` | No |  |
| `profile_url` | `string` | No |  |
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
| `tagline` | `string` | No |  |
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
| `created_at` | `string` | No |  |
| `has_vulnerability` | `boolean` | No |  |
| `identifier` | `string` | Yes |  |
| `max_severity` | `string` | No |  |
| `num_vulnerability` | `number` | No |  |
| `package` | `Record<string, any>` | Yes |  |
| `result` | `any[]` | Yes |  |
| `scan_id` | `number` | Yes |  |
| `target` | `string` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Vulnerability().list()
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

