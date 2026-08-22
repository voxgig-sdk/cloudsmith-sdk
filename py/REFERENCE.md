# Cloudsmith Python SDK Reference

Complete API reference for the Cloudsmith Python SDK.


## CloudsmithSDK

### Constructor

```python
from cloudsmith_sdk import CloudsmithSDK

client = CloudsmithSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudsmithSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CloudsmithSDK.test()
```


### Instance Methods

#### `Abort(data=None)`

Create a new `AbortEntity` instance. Pass `None` for no initial data.

#### `Alpine(data=None)`

Create a new `AlpineEntity` instance. Pass `None` for no initial data.

#### `AuditLog(data=None)`

Create a new `AuditLogEntity` instance. Pass `None` for no initial data.

#### `Basic(data=None)`

Create a new `BasicEntity` instance. Pass `None` for no initial data.

#### `Cargo(data=None)`

Create a new `CargoEntity` instance. Pass `None` for no initial data.

#### `Cocoapod(data=None)`

Create a new `CocoapodEntity` instance. Pass `None` for no initial data.

#### `Complete(data=None)`

Create a new `CompleteEntity` instance. Pass `None` for no initial data.

#### `Composer(data=None)`

Create a new `ComposerEntity` instance. Pass `None` for no initial data.

#### `Conan(data=None)`

Create a new `ConanEntity` instance. Pass `None` for no initial data.

#### `Conda(data=None)`

Create a new `CondaEntity` instance. Pass `None` for no initial data.

#### `Copy(data=None)`

Create a new `CopyEntity` instance. Pass `None` for no initial data.

#### `Cran(data=None)`

Create a new `CranEntity` instance. Pass `None` for no initial data.

#### `Dart(data=None)`

Create a new `DartEntity` instance. Pass `None` for no initial data.

#### `Deb(data=None)`

Create a new `DebEntity` instance. Pass `None` for no initial data.

#### `DenyPolicy(data=None)`

Create a new `DenyPolicyEntity` instance. Pass `None` for no initial data.

#### `Dependency(data=None)`

Create a new `DependencyEntity` instance. Pass `None` for no initial data.

#### `Disable(data=None)`

Create a new `DisableEntity` instance. Pass `None` for no initial data.

#### `DistributionFull(data=None)`

Create a new `DistributionFullEntity` instance. Pass `None` for no initial data.

#### `Distro(data=None)`

Create a new `DistroEntity` instance. Pass `None` for no initial data.

#### `Docker(data=None)`

Create a new `DockerEntity` instance. Pass `None` for no initial data.

#### `DynamicMapping(data=None)`

Create a new `DynamicMappingEntity` instance. Pass `None` for no initial data.

#### `Ecdsa(data=None)`

Create a new `EcdsaEntity` instance. Pass `None` for no initial data.

#### `Enable(data=None)`

Create a new `EnableEntity` instance. Pass `None` for no initial data.

#### `Entitlement(data=None)`

Create a new `EntitlementEntity` instance. Pass `None` for no initial data.

#### `Evaluation(data=None)`

Create a new `EvaluationEntity` instance. Pass `None` for no initial data.

#### `File(data=None)`

Create a new `FileEntity` instance. Pass `None` for no initial data.

#### `Format(data=None)`

Create a new `FormatEntity` instance. Pass `None` for no initial data.

#### `Geoip(data=None)`

Create a new `GeoipEntity` instance. Pass `None` for no initial data.

#### `Gon(data=None)`

Create a new `GonEntity` instance. Pass `None` for no initial data.

#### `Gpg(data=None)`

Create a new `GpgEntity` instance. Pass `None` for no initial data.

#### `Group(data=None)`

Create a new `GroupEntity` instance. Pass `None` for no initial data.

#### `Helm(data=None)`

Create a new `HelmEntity` instance. Pass `None` for no initial data.

#### `Hex(data=None)`

Create a new `HexEntity` instance. Pass `None` for no initial data.

#### `History(data=None)`

Create a new `HistoryEntity` instance. Pass `None` for no initial data.

#### `Huggingface(data=None)`

Create a new `HuggingfaceEntity` instance. Pass `None` for no initial data.

#### `Info(data=None)`

Create a new `InfoEntity` instance. Pass `None` for no initial data.

#### `Invite(data=None)`

Create a new `InviteEntity` instance. Pass `None` for no initial data.

#### `LicensePolicy(data=None)`

Create a new `LicensePolicyEntity` instance. Pass `None` for no initial data.

#### `Limit(data=None)`

Create a new `LimitEntity` instance. Pass `None` for no initial data.

#### `Luarock(data=None)`

Create a new `LuarockEntity` instance. Pass `None` for no initial data.

#### `Maven(data=None)`

Create a new `MavenEntity` instance. Pass `None` for no initial data.

#### `Member(data=None)`

Create a new `MemberEntity` instance. Pass `None` for no initial data.

#### `Move(data=None)`

Create a new `MoveEntity` instance. Pass `None` for no initial data.

#### `Namespace(data=None)`

Create a new `NamespaceEntity` instance. Pass `None` for no initial data.

#### `NamespaceAuditLog(data=None)`

Create a new `NamespaceAuditLogEntity` instance. Pass `None` for no initial data.

#### `Npm(data=None)`

Create a new `NpmEntity` instance. Pass `None` for no initial data.

#### `Nuget(data=None)`

Create a new `NugetEntity` instance. Pass `None` for no initial data.

#### `OpenidConnect(data=None)`

Create a new `OpenidConnectEntity` instance. Pass `None` for no initial data.

#### `Org(data=None)`

Create a new `OrgEntity` instance. Pass `None` for no initial data.

#### `OrganizationGroupSync(data=None)`

Create a new `OrganizationGroupSyncEntity` instance. Pass `None` for no initial data.

#### `OrganizationGroupSyncStatus(data=None)`

Create a new `OrganizationGroupSyncStatusEntity` instance. Pass `None` for no initial data.

#### `OrganizationInvite(data=None)`

Create a new `OrganizationInviteEntity` instance. Pass `None` for no initial data.

#### `OrganizationInviteExtend(data=None)`

Create a new `OrganizationInviteExtendEntity` instance. Pass `None` for no initial data.

#### `OrganizationMembership(data=None)`

Create a new `OrganizationMembershipEntity` instance. Pass `None` for no initial data.

#### `OrganizationMembershipRoleUpdate(data=None)`

Create a new `OrganizationMembershipRoleUpdateEntity` instance. Pass `None` for no initial data.

#### `OrganizationMembershipVisibilityUpdate(data=None)`

Create a new `OrganizationMembershipVisibilityUpdateEntity` instance. Pass `None` for no initial data.

#### `OrganizationPackageLicensePolicy(data=None)`

Create a new `OrganizationPackageLicensePolicyEntity` instance. Pass `None` for no initial data.

#### `OrganizationPackageVulnerabilityPolicy(data=None)`

Create a new `OrganizationPackageVulnerabilityPolicyEntity` instance. Pass `None` for no initial data.

#### `OrganizationSamlAuth(data=None)`

Create a new `OrganizationSamlAuthEntity` instance. Pass `None` for no initial data.

#### `OrganizationTeam(data=None)`

Create a new `OrganizationTeamEntity` instance. Pass `None` for no initial data.

#### `OrganizationTeamMember(data=None)`

Create a new `OrganizationTeamMemberEntity` instance. Pass `None` for no initial data.

#### `Oss(data=None)`

Create a new `OssEntity` instance. Pass `None` for no initial data.

#### `P2n(data=None)`

Create a new `P2nEntity` instance. Pass `None` for no initial data.

#### `Package(data=None)`

Create a new `PackageEntity` instance. Pass `None` for no initial data.

#### `PackageDenyPolicy(data=None)`

Create a new `PackageDenyPolicyEntity` instance. Pass `None` for no initial data.

#### `PackageFilePartsUpload(data=None)`

Create a new `PackageFilePartsUploadEntity` instance. Pass `None` for no initial data.

#### `PackageFileUpload(data=None)`

Create a new `PackageFileUploadEntity` instance. Pass `None` for no initial data.

#### `PackageLicensePolicyEvaluation(data=None)`

Create a new `PackageLicensePolicyEvaluationEntity` instance. Pass `None` for no initial data.

#### `PackageVersionBadge(data=None)`

Create a new `PackageVersionBadgeEntity` instance. Pass `None` for no initial data.

#### `PackageVulnerabilityPolicyEvaluation(data=None)`

Create a new `PackageVulnerabilityPolicyEvaluationEntity` instance. Pass `None` for no initial data.

#### `Privilege(data=None)`

Create a new `PrivilegeEntity` instance. Pass `None` for no initial data.

#### `Profile(data=None)`

Create a new `ProfileEntity` instance. Pass `None` for no initial data.

#### `ProviderSetting(data=None)`

Create a new `ProviderSettingEntity` instance. Pass `None` for no initial data.

#### `ProviderSettingsWrite(data=None)`

Create a new `ProviderSettingsWriteEntity` instance. Pass `None` for no initial data.

#### `Python(data=None)`

Create a new `PythonEntity` instance. Pass `None` for no initial data.

#### `Quarantine(data=None)`

Create a new `QuarantineEntity` instance. Pass `None` for no initial data.

#### `Quota(data=None)`

Create a new `QuotaEntity` instance. Pass `None` for no initial data.

#### `Raw(data=None)`

Create a new `RawEntity` instance. Pass `None` for no initial data.

#### `Refresh(data=None)`

Create a new `RefreshEntity` instance. Pass `None` for no initial data.

#### `Regenerate(data=None)`

Create a new `RegenerateEntity` instance. Pass `None` for no initial data.

#### `Repo(data=None)`

Create a new `RepoEntity` instance. Pass `None` for no initial data.

#### `RepositoryAuditLog(data=None)`

Create a new `RepositoryAuditLogEntity` instance. Pass `None` for no initial data.

#### `RepositoryEcdsaKey(data=None)`

Create a new `RepositoryEcdsaKeyEntity` instance. Pass `None` for no initial data.

#### `RepositoryGeoIpRule(data=None)`

Create a new `RepositoryGeoIpRuleEntity` instance. Pass `None` for no initial data.

#### `RepositoryGeoIpStatus(data=None)`

Create a new `RepositoryGeoIpStatusEntity` instance. Pass `None` for no initial data.

#### `RepositoryGeoIpTestAddress(data=None)`

Create a new `RepositoryGeoIpTestAddressEntity` instance. Pass `None` for no initial data.

#### `RepositoryGpgKey(data=None)`

Create a new `RepositoryGpgKeyEntity` instance. Pass `None` for no initial data.

#### `RepositoryPrivilegeInput(data=None)`

Create a new `RepositoryPrivilegeInputEntity` instance. Pass `None` for no initial data.

#### `RepositoryRetentionRule(data=None)`

Create a new `RepositoryRetentionRuleEntity` instance. Pass `None` for no initial data.

#### `RepositoryRsaKey(data=None)`

Create a new `RepositoryRsaKeyEntity` instance. Pass `None` for no initial data.

#### `RepositoryToken(data=None)`

Create a new `RepositoryTokenEntity` instance. Pass `None` for no initial data.

#### `RepositoryTokenRefresh(data=None)`

Create a new `RepositoryTokenRefreshEntity` instance. Pass `None` for no initial data.

#### `RepositoryTokenSync(data=None)`

Create a new `RepositoryTokenSyncEntity` instance. Pass `None` for no initial data.

#### `RepositoryWebhook(data=None)`

Create a new `RepositoryWebhookEntity` instance. Pass `None` for no initial data.

#### `RepositoryX509EcdsaCertificate(data=None)`

Create a new `RepositoryX509EcdsaCertificateEntity` instance. Pass `None` for no initial data.

#### `RepositoryX509RsaCertificate(data=None)`

Create a new `RepositoryX509RsaCertificateEntity` instance. Pass `None` for no initial data.

#### `Reset(data=None)`

Create a new `ResetEntity` instance. Pass `None` for no initial data.

#### `ResourcesRateCheck(data=None)`

Create a new `ResourcesRateCheckEntity` instance. Pass `None` for no initial data.

#### `Resync(data=None)`

Create a new `ResyncEntity` instance. Pass `None` for no initial data.

#### `Retention(data=None)`

Create a new `RetentionEntity` instance. Pass `None` for no initial data.

#### `Rpm(data=None)`

Create a new `RpmEntity` instance. Pass `None` for no initial data.

#### `Rsa(data=None)`

Create a new `RsaEntity` instance. Pass `None` for no initial data.

#### `Ruby(data=None)`

Create a new `RubyEntity` instance. Pass `None` for no initial data.

#### `SamlGroupSync(data=None)`

Create a new `SamlGroupSyncEntity` instance. Pass `None` for no initial data.

#### `Scan(data=None)`

Create a new `ScanEntity` instance. Pass `None` for no initial data.

#### `Self(data=None)`

Create a new `SelfEntity` instance. Pass `None` for no initial data.

#### `Service(data=None)`

Create a new `ServiceEntity` instance. Pass `None` for no initial data.

#### `Status(data=None)`

Create a new `StatusEntity` instance. Pass `None` for no initial data.

#### `StatusBasic(data=None)`

Create a new `StatusBasicEntity` instance. Pass `None` for no initial data.

#### `StorageRegion(data=None)`

Create a new `StorageRegionEntity` instance. Pass `None` for no initial data.

#### `Swift(data=None)`

Create a new `SwiftEntity` instance. Pass `None` for no initial data.

#### `Sync(data=None)`

Create a new `SyncEntity` instance. Pass `None` for no initial data.

#### `Tag(data=None)`

Create a new `TagEntity` instance. Pass `None` for no initial data.

#### `Team(data=None)`

Create a new `TeamEntity` instance. Pass `None` for no initial data.

#### `Terraform(data=None)`

Create a new `TerraformEntity` instance. Pass `None` for no initial data.

#### `Test(data=None)`

Create a new `TestEntity` instance. Pass `None` for no initial data.

#### `Token(data=None)`

Create a new `TokenEntity` instance. Pass `None` for no initial data.

#### `TransferRegion(data=None)`

Create a new `TransferRegionEntity` instance. Pass `None` for no initial data.

#### `User(data=None)`

Create a new `UserEntity` instance. Pass `None` for no initial data.

#### `UserAuthToken(data=None)`

Create a new `UserAuthTokenEntity` instance. Pass `None` for no initial data.

#### `UserAuthenticationToken(data=None)`

Create a new `UserAuthenticationTokenEntity` instance. Pass `None` for no initial data.

#### `UserBrief(data=None)`

Create a new `UserBriefEntity` instance. Pass `None` for no initial data.

#### `UserProfile(data=None)`

Create a new `UserProfileEntity` instance. Pass `None` for no initial data.

#### `Vagrant(data=None)`

Create a new `VagrantEntity` instance. Pass `None` for no initial data.

#### `Validate(data=None)`

Create a new `ValidateEntity` instance. Pass `None` for no initial data.

#### `Version(data=None)`

Create a new `VersionEntity` instance. Pass `None` for no initial data.

#### `Vulnerability(data=None)`

Create a new `VulnerabilityEntity` instance. Pass `None` for no initial data.

#### `VulnerabilityPolicy(data=None)`

Create a new `VulnerabilityPolicyEntity` instance. Pass `None` for no initial data.

#### `Webhook(data=None)`

Create a new `WebhookEntity` instance. Pass `None` for no initial data.

#### `X509Ecdsa(data=None)`

Create a new `X509EcdsaEntity` instance. Pass `None` for no initial data.

#### `X509Rsa(data=None)`

Create a new `X509RsaEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AbortEntity

```python
abort = client.Abort()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AbortEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AlpineEntity

```python
alpine = client.Alpine()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlpineEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuditLogEntity

```python
audit_log = client.AuditLog()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuditLogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BasicEntity

```python
basic = client.Basic()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BasicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CargoEntity

```python
cargo = client.Cargo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Cargo().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Cargo().list({"identifier": "example", "owner": "example"})
for cargo in results:
    print(cargo)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Cargo().load({"id": "cargo_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Cargo().update({
    "id": "cargo_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CargoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CocoapodEntity

```python
cocoapod = client.Cocoapod()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CocoapodEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompleteEntity

```python
complete = client.Complete()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompleteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ComposerEntity

```python
composer = client.Composer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Composer().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Composer().list({"identifier": "example", "owner": "example"})
for composer in results:
    print(composer)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Composer().load({"id": "composer_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Composer().update({
    "id": "composer_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComposerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConanEntity

```python
conan = client.Conan()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConanEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CondaEntity

```python
conda = client.Conda()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Conda().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Conda().list({"identifier": "example", "owner": "example"})
for conda in results:
    print(conda)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Conda().load({"id": "conda_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Conda().update({
    "id": "conda_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CondaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CopyEntity

```python
copy = client.Copy()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CopyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CranEntity

```python
cran = client.Cran()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Cran().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Cran().list({"identifier": "example", "owner": "example"})
for cran in results:
    print(cran)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Cran().load({"id": "cran_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Cran().update({
    "id": "cran_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CranEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DartEntity

```python
dart = client.Dart()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Dart().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Dart().list({"identifier": "example", "owner": "example"})
for dart in results:
    print(dart)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Dart().load({"id": "dart_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Dart().update({
    "id": "dart_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DartEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DebEntity

```python
deb = client.Deb()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `component` | `str` | No | The component to fetch from the upstream |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `distro_versions` | `list` | Yes | The distribution version that packages found on this upstream could be associated with. |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `str` | No | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `str` | No | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `str` | No | The GPG signature verification mode for this upstream. |
| `include_sources` | `bool` | No | When true, source packages will be available from this upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_distribution` | `str` | No | The distribution to fetch from the upstream |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verification_status` | `str` | No | The signature verification status for this upstream. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Deb().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "distro_versions": [],  # list
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Deb().list({"identifier": "example", "owner": "example"})
for deb in results:
    print(deb)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Deb().load({"id": "deb_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Deb().update({
    "id": "deb_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DebEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DenyPolicyEntity

```python
deny_policy = client.DenyPolicy()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DenyPolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DependencyEntity

```python
dependency = client.Dependency()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependencyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DisableEntity

```python
disable = client.Disable()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DisableEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DistributionFullEntity

```python
distribution_full = client.DistributionFull()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `format` | `str` | No |  |
| `format_url` | `str` | No |  |
| `name` | `str` | Yes |  |
| `self_url` | `str` | No |  |
| `slug` | `str` | No | The slug identifier for this distribution |
| `variants` | `str` | No |  |
| `versions` | `list` | No | A list of the versions for this distribution |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DistributionFull().list()
for distribution_full in results:
    print(distribution_full)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DistributionFull().load({"slug": "slug"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DistributionFullEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DistroEntity

```python
distro = client.Distro()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DistroEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DockerEntity

```python
docker = client.Docker()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Docker().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Docker().list({"identifier": "example", "owner": "example"})
for docker in results:
    print(docker)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Docker().load({"id": "docker_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Docker().update({
    "id": "docker_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DockerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DynamicMappingEntity

```python
dynamic_mapping = client.DynamicMapping()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claim_value` | `str` | Yes | The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`. |
| `service_account` | `str` | Yes | The service account associated with the provider setting and `claim_value` Note: This field and the dynamic mappings feature are still in early access. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DynamicMapping().list({"org_id": "example", "provider_setting": "example"})
for dynamic_mapping in results:
    print(dynamic_mapping)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DynamicMapping().load({"id": "dynamic_mapping_id", "openid_connect_id": "openid_connect_id", "org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DynamicMappingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EcdsaEntity

```python
ecdsa = client.Ecdsa()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EcdsaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnableEntity

```python
enable = client.Enable()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnableEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EntitlementEntity

```python
entitlement = client.Entitlement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `int` | No | Number of packages with at least 1 download |
| `bandwidth` | `dict` | Yes |  |
| `downloads` | `dict` | Yes |  |
| `inactive` | `int` | No | Packages with zero downloads |
| `total` | `int` | No | Total number of packages in repo |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Entitlement().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
    "bandwidth": {},  # dict
    "downloads": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Entitlement().load({"id": "entitlement_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Entitlement().remove({"identifier": "identifier", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EntitlementEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EvaluationEntity

```python
evaluation = client.Evaluation()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EvaluationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FileEntity

```python
file = client.File()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.File().create({
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FormatEntity

```python
format = client.Format()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | Yes | Description of the package format |
| `distributions` | `list` | No | The distributions supported by this package format |
| `extensions` | `list` | Yes | A non-exhaustive list of extensions supported |
| `name` | `str` | Yes | Name for the package format |
| `premium` | `bool` | Yes | If true the package format is a premium-only feature |
| `premium_plan_id` | `str` | No | The minimum plan id required for this package format |
| `premium_plan_name` | `str` | No | The minimum plan name required for this package format |
| `slug` | `str` | Yes | Slug for the package format |
| `supports` | `dict` | Yes | A set of what the package format supports |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Format().list()
for format in results:
    print(format)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Format().load({"id": "format_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FormatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GeoipEntity

```python
geoip = client.Geoip()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeoipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GonEntity

```python
gon = client.Gon()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Gon().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Gon().list({"identifier": "example", "owner": "example"})
for gon in results:
    print(gon)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Gon().load({"identifier": "identifier", "owner": "owner", "slug_perm": "slug_perm"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Gon().update({
    "identifier": "identifier",
    "owner": "owner",
    "slug_perm": "slug_perm",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GonEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GpgEntity

```python
gpg = client.Gpg()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GpgEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupEntity

```python
group = client.Group()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HelmEntity

```python
helm = client.Helm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Helm().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Helm().list({"identifier": "example", "owner": "example"})
for helm in results:
    print(helm)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Helm().load({"id": "helm_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Helm().update({
    "id": "helm_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HelmEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HexEntity

```python
hex = client.Hex()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Hex().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Hex().list({"identifier": "example", "owner": "example"})
for hex in results:
    print(hex)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Hex().load({"id": "hex_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Hex().update({
    "id": "hex_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HexEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HistoryEntity

```python
history = client.History()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HistoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HuggingfaceEntity

```python
huggingface = client.Huggingface()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Huggingface().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Huggingface().list({"identifier": "example", "owner": "example"})
for huggingface in results:
    print(huggingface)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Huggingface().load({"id": "huggingface_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Huggingface().update({
    "id": "huggingface_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HuggingfaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InfoEntity

```python
info = client.Info()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InfoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InviteEntity

```python
invite = client.Invite()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InviteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LicensePolicyEntity

```python
license_policy = client.LicensePolicy()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LicensePolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LimitEntity

```python
limit = client.Limit()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LimitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LuarockEntity

```python
luarock = client.Luarock()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LuarockEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MavenEntity

```python
maven = client.Maven()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `str` | No | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `str` | No | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `str` | No | The GPG signature verification mode for this upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verification_status` | `str` | No | The signature verification status for this upstream. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Maven().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Maven().list({"identifier": "example", "owner": "example"})
for maven in results:
    print(maven)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Maven().load({"id": "maven_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Maven().update({
    "id": "maven_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MavenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MemberEntity

```python
member = client.Member()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MoveEntity

```python
move = client.Move()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoveEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NamespaceEntity

```python
namespace = client.Namespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `str` | No |  |
| `slug` | `str` | No |  |
| `slug_perm` | `str` | No |  |
| `type_name` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Namespace().list()
for namespace in results:
    print(namespace)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Namespace().load({"id": "namespace_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NamespaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NamespaceAuditLogEntity

```python
namespace_audit_log = client.NamespaceAuditLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `str` | Yes |  |
| `actor_ip_address` | `str` | Yes |  |
| `actor_kind` | `str` | No |  |
| `actor_location` | `dict` | Yes |  |
| `actor_slug_perm` | `str` | Yes |  |
| `actor_url` | `str` | No |  |
| `context` | `str` | Yes |  |
| `event` | `str` | Yes |  |
| `event_at` | `str` | Yes |  |
| `object` | `str` | Yes |  |
| `object_kind` | `str` | Yes |  |
| `object_slug_perm` | `str` | Yes |  |
| `target` | `str` | Yes |  |
| `target_kind` | `str` | Yes |  |
| `target_slug_perm` | `str` | No |  |
| `uuid` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NamespaceAuditLog().load({"id": "namespace_audit_log_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NamespaceAuditLogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NpmEntity

```python
npm = client.Npm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Npm().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Npm().list({"identifier": "example", "owner": "example"})
for npm in results:
    print(npm)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Npm().load({"id": "npm_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Npm().update({
    "id": "npm_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NpmEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NugetEntity

```python
nuget = client.Nuget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Nuget().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Nuget().list({"identifier": "example", "owner": "example"})
for nuget in results:
    print(nuget)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Nuget().load({"id": "nuget_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Nuget().update({
    "id": "nuget_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NugetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OpenidConnectEntity

```python
openid_connect = client.OpenidConnect()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OpenidConnectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrgEntity

```python
org = client.Org()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `str` | No |  |
| `created_at` | `str` | No |  |
| `event_at` | `str` | No |  |
| `location` | `str` | No | The city/town/area your organization is based in. |
| `name` | `str` | Yes |  |
| `package` | `dict` | Yes |  |
| `policy` | `dict` | Yes |  |
| `reasons` | `list` | Yes |  |
| `slug` | `str` | No |  |
| `slug_perm` | `str` | No |  |
| `tagline` | `str` | No | A short public descriptive for your organization. |
| `vulnerability_scan_results` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Org().create({
    "id": "example_id",  # str
    "name": "example_name",  # str
    "package": {},  # dict
    "policy": {},  # dict
    "reasons": [],  # list
    "vulnerability_scan_results": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Org().list()
for org in results:
    print(org)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Org().load({"id": "org_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Org().remove({"id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Org().update({
    "id": "org_id",
    "team_id": "team_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationGroupSyncEntity

```python
organization_group_sync = client.OrganizationGroupSync()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `idp_key` | `str` | Yes |  |
| `idp_value` | `str` | Yes |  |
| `role` | `str` | No |  |
| `slug_perm` | `str` | No |  |
| `team` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrganizationGroupSync().create({
    "org_id": "example_org_id",  # str
    "idp_key": "example_idp_key",  # str
    "idp_value": "example_idp_value",  # str
    "team": "example_team",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationGroupSync().list({"org_id": "example"})
for organization_group_sync in results:
    print(organization_group_sync)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationGroupSyncEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationGroupSyncStatusEntity

```python
organization_group_sync_status = client.OrganizationGroupSyncStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `saml_group_sync_status` | `bool` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationGroupSyncStatus().load({"org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationGroupSyncStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationInviteEntity

```python
organization_invite = client.OrganizationInvite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | No | The email of the user to be invited. |
| `expires_at` | `str` | No |  |
| `inviter` | `str` | No |  |
| `inviter_url` | `str` | No |  |
| `org` | `str` | No |  |
| `role` | `str` | No | The role to be assigned to the invited user. |
| `slug_perm` | `str` | No |  |
| `teams` | `list` | No |  |
| `user` | `str` | No | The slug of the user to be invited. |
| `user_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrganizationInvite().create({
    "org_id": "example_org_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationInvite().list({"org_id": "example"})
for organization_invite in results:
    print(organization_invite)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OrganizationInvite().update({
    "id": "id",
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationInviteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationInviteExtendEntity

```python
organization_invite_extend = client.OrganizationInviteExtend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | No | The email of the user to be invited. |
| `expires_at` | `str` | No |  |
| `inviter` | `str` | No |  |
| `inviter_url` | `str` | No |  |
| `org` | `str` | No |  |
| `role` | `str` | No | The role to be assigned to the invited user. |
| `slug_perm` | `str` | No | The slug_perm of the invite to be extended. |
| `teams` | `list` | No |  |
| `user` | `str` | No | The slug of the user to be invited. |
| `user_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrganizationInviteExtend().create({
    "org_id": "example_org_id",  # str
    "slug_perm": "example_slug_perm",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationInviteExtendEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationMembershipEntity

```python
organization_membership = client.OrganizationMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | No |  |
| `has_two_factor` | `bool` | No |  |
| `is_active` | `bool` | No |  |
| `joined_at` | `str` | No |  |
| `last_login_at` | `str` | No |  |
| `last_login_method` | `str` | No |  |
| `role` | `str` | No |  |
| `user` | `str` | No |  |
| `user_id` | `str` | No |  |
| `user_name` | `str` | No |  |
| `user_url` | `str` | No |  |
| `visibility` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationMembership().list({"org_id": "example"})
for organization_membership in results:
    print(organization_membership)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationMembership().load({"member": "member", "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OrganizationMembership().update({
    "member": "member",
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationMembershipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationMembershipRoleUpdateEntity

```python
organization_membership_role_update = client.OrganizationMembershipRoleUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | No |  |
| `has_two_factor` | `bool` | No |  |
| `joined_at` | `str` | No |  |
| `last_login_at` | `str` | No |  |
| `last_login_method` | `str` | No |  |
| `role` | `str` | No |  |
| `user` | `str` | No |  |
| `user_id` | `str` | No |  |
| `user_name` | `str` | No |  |
| `user_url` | `str` | No |  |
| `visibility` | `str` | No |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OrganizationMembershipRoleUpdate().update({
    "member_id": "member_id",
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationMembershipRoleUpdateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationMembershipVisibilityUpdateEntity

```python
organization_membership_visibility_update = client.OrganizationMembershipVisibilityUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | No |  |
| `has_two_factor` | `bool` | No |  |
| `joined_at` | `str` | No |  |
| `last_login_at` | `str` | No |  |
| `last_login_method` | `str` | No |  |
| `role` | `str` | No |  |
| `user` | `str` | No |  |
| `user_id` | `str` | No |  |
| `user_name` | `str` | No |  |
| `user_url` | `str` | No |  |
| `visibility` | `str` | No |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OrganizationMembershipVisibilityUpdate().update({
    "member_id": "member_id",
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationMembershipVisibilityUpdateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationPackageLicensePolicyEntity

```python
organization_package_license_policy = client.OrganizationPackageLicensePolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_licenses` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `name` | `str` | Yes |  |
| `on_violation_quarantine` | `bool` | No |  |
| `package_query_string` | `str` | No |  |
| `slug_perm` | `str` | No |  |
| `spdx_identifiers` | `list` | Yes |  |
| `updated_at` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrganizationPackageLicensePolicy().create({
    "org_id": "example_org_id",  # str
    "name": "example_name",  # str
    "spdx_identifiers": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationPackageLicensePolicy().list({"org_id": "example"})
for organization_package_license_policy in results:
    print(organization_package_license_policy)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationPackageLicensePolicy().load({"id": "organization_package_license_policy_id", "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OrganizationPackageLicensePolicy().update({
    "id": "organization_package_license_policy_id",
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationPackageLicensePolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationPackageVulnerabilityPolicyEntity

```python
organization_package_vulnerability_policy = client.OrganizationPackageVulnerabilityPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_severity` | `bool` | No | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `min_severity` | `str` | No |  |
| `name` | `str` | Yes |  |
| `on_violation_quarantine` | `bool` | No |  |
| `package_query_string` | `str` | No |  |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrganizationPackageVulnerabilityPolicy().create({
    "org_id": "example_org_id",  # str
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationPackageVulnerabilityPolicy().list({"org_id": "example"})
for organization_package_vulnerability_policy in results:
    print(organization_package_vulnerability_policy)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationPackageVulnerabilityPolicy().load({"id": "organization_package_vulnerability_policy_id", "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OrganizationPackageVulnerabilityPolicy().update({
    "id": "organization_package_vulnerability_policy_id",
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationPackageVulnerabilityPolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationSamlAuthEntity

```python
organization_saml_auth = client.OrganizationSamlAuth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `saml_auth_enabled` | `bool` | Yes |  |
| `saml_auth_enforced` | `bool` | Yes |  |
| `saml_metadata_inline` | `str` | No | If configured, SAML metadata will be used as entered instead of retrieved from a remote URL. |
| `saml_metadata_url` | `str` | No | If configured, SAML metadata be retrieved from a remote URL. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationSamlAuth().load({"org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OrganizationSamlAuth().update({
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationSamlAuthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationTeamEntity

```python
organization_team = client.OrganizationTeam()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `name` | `str` | Yes |  |
| `slug` | `str` | No |  |
| `slug_perm` | `str` | No |  |
| `visibility` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrganizationTeam().create({
    "org_id": "example_org_id",  # str
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationTeam().list({"org_id": "example"})
for organization_team in results:
    print(organization_team)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationTeam().load({"id": "organization_team_id", "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OrganizationTeam().update({
    "id": "organization_team_id",
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationTeamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationTeamMemberEntity

```python
organization_team_member = client.OrganizationTeamMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `role` | `str` | Yes |  |
| `user` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrganizationTeamMember().create({
    "org_id": "example_org_id",  # str
    "team_id": "example_team_id",  # str
    "role": "example_role",  # str
    "user": "example_user",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationTeamMember().list({"org_id": "example", "team_id": "example"})
for organization_team_member in results:
    print(organization_team_member)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationTeamMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OssEntity

```python
oss = client.Oss()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OssEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## P2nEntity

```python
p2n = client.P2n()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `P2nEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PackageEntity

```python
package = client.Package()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `int` | No | Number of packages with at least 1 download |
| `architectures` | `list` | No |  |
| `backend_kind` | `int` | No |  |
| `bandwidth` | `dict` | Yes |  |
| `cdn_url` | `str` | No |  |
| `checksum_md5` | `str` | No |  |
| `checksum_sha1` | `str` | No |  |
| `checksum_sha256` | `str` | No |  |
| `checksum_sha512` | `str` | No |  |
| `count` | `int` | Yes |  |
| `dep_type` | `str` | No |  |
| `dependencies_checksum_md5` | `str` | No | A checksum of all of the package's dependencies. |
| `dependencies_url` | `str` | No |  |
| `description` | `str` | No | A textual description of this package. |
| `display_name` | `str` | No |  |
| `distro` | `dict` | Yes | The distributions supported by this package format |
| `distro_version` | `dict` | No | A list of the versions for this distribution |
| `downloads` | `dict` | Yes |  |
| `epoch` | `int` | No | The epoch of the package version (if any). |
| `extension` | `str` | No |  |
| `filename` | `str` | No |  |
| `files` | `list` | No |  |
| `format` | `str` | No |  |
| `format_url` | `str` | No |  |
| `freeable_storage` | `int` | No | Amount of storage that will be freed if this package is deleted |
| `fully_qualified_name` | `str` | No |  |
| `identifier_perm` | `str` | No | Unique and permanent identifier for the package. |
| `identifiers` | `dict` | No | Return a map of identifier field names and their values. |
| `inactive` | `int` | No | Packages with zero downloads |
| `indexed` | `bool` | No |  |
| `is_cancellable` | `bool` | No |  |
| `is_copyable` | `bool` | No |  |
| `is_deleteable` | `bool` | No |  |
| `is_downloadable` | `bool` | No |  |
| `is_moveable` | `bool` | No |  |
| `is_quarantinable` | `bool` | No |  |
| `is_quarantined` | `bool` | No |  |
| `is_resyncable` | `bool` | No |  |
| `is_security_scannable` | `bool` | No |  |
| `is_sync_awaiting` | `bool` | No |  |
| `is_sync_completed` | `bool` | No |  |
| `is_sync_failed` | `bool` | No |  |
| `is_sync_in_flight` | `bool` | No |  |
| `is_sync_in_progress` | `bool` | No |  |
| `last_push` | `str` | Yes |  |
| `license` | `str` | No | The license of this package. |
| `name` | `str` | No | The name of this package. |
| `namespace` | `str` | No |  |
| `namespace_url` | `str` | No |  |
| `num_downloads` | `int` | Yes |  |
| `num_files` | `int` | No |  |
| `operator` | `str` | No |  |
| `origin_repository` | `str` | No |  |
| `origin_repository_url` | `str` | No |  |
| `package_type` | `int` | No | The type of package contents. |
| `policy_violated` | `bool` | No | Whether or not the package has violated any policy. |
| `release` | `str` | No | The release of the package version (if any). |
| `repository` | `str` | No | The repository the package will be copied to. |
| `repository_url` | `str` | No |  |
| `security_scan_completed_at` | `str` | No | The datetime the security scanning was completed. |
| `security_scan_started_at` | `str` | No | The datetime the security scanning was started. |
| `security_scan_status` | `str` | No |  |
| `security_scan_status_updated_at` | `str` | No | The datetime the security scanning status was updated. |
| `self_html_url` | `str` | No |  |
| `self_url` | `str` | No |  |
| `signature_url` | `str` | No |  |
| `size` | `int` | No | The calculated size of the package. |
| `slug` | `str` | No | The public unique identifier for the package. |
| `slug_perm` | `str` | No |  |
| `stage` | `int` | No | The synchronisation (in progress) stage of the package. |
| `stage_str` | `str` | No |  |
| `stage_updated_at` | `str` | No | The datetime the package stage was updated at. |
| `status` | `int` | No | The synchronisation status of the package. |
| `status_reason` | `str` | No | A textual description for the synchronous status reason (if any |
| `status_str` | `str` | No |  |
| `status_updated_at` | `str` | No | The datetime the package status was updated at. |
| `status_url` | `str` | No |  |
| `subtype` | `str` | No |  |
| `summary` | `str` | No | A one-liner synopsis of this package. |
| `sync_finished_at` | `str` | No | The datetime the package sync was finished at. |
| `sync_progress` | `int` | No | Synchronisation progress (from 0-100) |
| `tags` | `dict` | No | All tags on the package, grouped by tag type. |
| `tags_immutable` | `dict` | No | All tags on the package, grouped by tag type. |
| `total` | `int` | No | Total number of packages in repo |
| `type_display` | `str` | No |  |
| `uploaded_at` | `str` | No | The date this package was uploaded. |
| `uploader` | `str` | No |  |
| `uploader_url` | `str` | No |  |
| `version` | `str` | No | The raw version for this package. |
| `version_orig` | `str` | No |  |
| `vulnerability_scan_results_url` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Package().create({
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
    "bandwidth": {},  # dict
    "count": 1,  # int
    "distro": {},  # dict
    "downloads": {},  # dict
    "last_push": "example_last_push",  # str
    "num_downloads": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Package().list({"owner": "example", "repo": "example"})
for package in results:
    print(package)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Package().load({"owner": "owner", "repo": "repo"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Package().remove({"identifier": "identifier", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PackageDenyPolicyEntity

```python
package_deny_policy = client.PackageDenyPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `enabled` | `bool` | No | Whether this rule is enabled or disabled. |
| `name` | `str` | No |  |
| `package_query_string` | `str` | Yes | Packages that match this query will trigger this deny rule. |
| `slug_perm` | `str` | No |  |
| `status` | `str` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PackageDenyPolicy().create({
    "org_id": "example_org_id",  # str
    "package_query_string": "example_package_query_string",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PackageDenyPolicy().list({"org_id": "example"})
for package_deny_policy in results:
    print(package_deny_policy)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PackageDenyPolicy().load({"id": "package_deny_policy_id", "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PackageDenyPolicy().update({
    "id": "package_deny_policy_id",
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageDenyPolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PackageFilePartsUploadEntity

```python
package_file_parts_upload = client.PackageFilePartsUpload()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `identifier` | `str` | No | The identifier for the file to use uploading parts. |
| `upload_querystring` | `str` | No | The querystring to use for the next-step PUT upload. |
| `upload_url` | `str` | No | The URL to use for the next-step PUT upload |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PackageFilePartsUpload().load({"identifier": "identifier", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageFilePartsUploadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PackageFileUploadEntity

```python
package_file_upload = client.PackageFileUpload()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PackageFileUpload().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageFileUploadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PackageLicensePolicyEvaluationEntity

```python
package_license_policy_evaluation = client.PackageLicensePolicyEvaluation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_licenses` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `evaluation_count` | `int` | No |  |
| `name` | `str` | No |  |
| `on_violation_quarantine` | `bool` | No |  |
| `package_query_string` | `str` | No |  |
| `policy` | `dict` | Yes |  |
| `slug_perm` | `str` | No |  |
| `spdx_identifiers` | `list` | Yes |  |
| `status` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `url` | `str` | No |  |
| `violation_count` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PackageLicensePolicyEvaluation().create({
    "org_id": "example_org_id",  # str
    "policy_slug_perm": "example_policy_slug_perm",  # Any
    "policy": {},  # dict
    "spdx_identifiers": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PackageLicensePolicyEvaluation().list({"org_id": "example", "policy_slug_perm": "example"})
for package_license_policy_evaluation in results:
    print(package_license_policy_evaluation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PackageLicensePolicyEvaluation().load({"id": "package_license_policy_evaluation_id", "license_policy_id": "license_policy_id", "org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageLicensePolicyEvaluationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PackageVersionBadgeEntity

```python
package_version_badge = client.PackageVersionBadge()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PackageVersionBadge().load({"owner": "owner", "package_format": "package_format", "package_identifier": "package_identifier", "package_name": "package_name", "package_version": "package_version", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageVersionBadgeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PackageVulnerabilityPolicyEvaluationEntity

```python
package_vulnerability_policy_evaluation = client.PackageVulnerabilityPolicyEvaluation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_severity` | `bool` | No | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `evaluation_count` | `int` | No |  |
| `min_severity` | `str` | No |  |
| `name` | `str` | No |  |
| `on_violation_quarantine` | `bool` | No |  |
| `package_query_string` | `str` | No |  |
| `policy` | `dict` | No |  |
| `slug_perm` | `str` | No |  |
| `status` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `url` | `str` | No |  |
| `violation_count` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PackageVulnerabilityPolicyEvaluation().create({
    "org_id": "example_org_id",  # str
    "policy_slug_perm": "example_policy_slug_perm",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PackageVulnerabilityPolicyEvaluation().list({"org_id": "example", "policy_slug_perm": "example"})
for package_vulnerability_policy_evaluation in results:
    print(package_vulnerability_policy_evaluation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PackageVulnerabilityPolicyEvaluation().load({"id": "package_vulnerability_policy_evaluation_id", "org_id": "org_id", "vulnerability_policy_id": "vulnerability_policy_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageVulnerabilityPolicyEvaluationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PrivilegeEntity

```python
privilege = client.Privilege()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrivilegeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProfileEntity

```python
profile = client.Profile()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProfileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProviderSettingEntity

```python
provider_setting = client.ProviderSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claims` | `dict` | Yes | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `enabled` | `bool` | Yes | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | `str` | No | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | `str` | Yes | The name of the provider settings are being configured for |
| `provider_url` | `str` | Yes | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | `list` | No | The service accounts associated with these provider settings. |
| `slug` | `str` | No | The slug of the provider settings |
| `slug_perm` | `str` | No | The unique, immutable identifier of the provider settings. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProviderSetting().list({"org_id": "example"})
for provider_setting in results:
    print(provider_setting)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProviderSetting().load({"org_id": "org_id", "slug_perm": "slug_perm"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProviderSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProviderSettingsWriteEntity

```python
provider_settings_write = client.ProviderSettingsWrite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claims` | `dict` | Yes | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `dynamic_mappings` | `list` | No | The dynamic mappings of `mapping_claim` values to service accounts. |
| `enabled` | `bool` | Yes | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | `str` | No | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | `str` | Yes | The name of the provider settings are being configured for |
| `provider_url` | `str` | Yes | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | `list` | No | The service accounts associated with these provider settings. |
| `slug` | `str` | No | The slug of the provider settings |
| `slug_perm` | `str` | No | The unique, immutable identifier of the provider settings. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProviderSettingsWrite().create({
    "org_id": "example_org_id",  # str
    "claims": {},  # dict
    "enabled": True,  # bool
    "name": "example_name",  # str
    "provider_url": "example_provider_url",  # str
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProviderSettingsWrite().update({
    "org_id": "org_id",
    "slug_perm": "slug_perm",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProviderSettingsWriteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PythonEntity

```python
python = client.Python()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Python().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Python().list({"identifier": "example", "owner": "example"})
for python in results:
    print(python)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Python().load({"id": "python_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Python().update({
    "id": "python_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PythonEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## QuarantineEntity

```python
quarantine = client.Quarantine()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QuarantineEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## QuotaEntity

```python
quota = client.Quota()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display` | `dict` | Yes |  |
| `history` | `list` | Yes |  |
| `raw` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Quota().load({"id": "quota_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QuotaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RawEntity

```python
raw = client.Raw()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RawEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RefreshEntity

```python
refresh = client.Refresh()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RefreshEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RegenerateEntity

```python
regenerate = client.Regenerate()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegenerateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepoEntity

```python
repo = client.Repo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cdn_url` | `str` | No | Base URL from which packages and other artifacts are downloaded. |
| `content_kind` | `str` | No | The repository content kind determines whether this repository contains packages, or provides a distribution of packages from other repositories. |
| `contextual_auth_realm` | `bool` | No | If checked, missing credentials for this repository where basic authentication is required shall present an enriched value in the 'WWW-Authenticate' header containing the namespace and repository. |
| `copy_own` | `bool` | No | If checked, users can copy any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `copy_packages` | `str` | No | This defines the minimum level of privilege required for a user to copy packages. |
| `cosign_signing_enabled` | `bool` | No | When enabled, all pushed (or pulled from upstream) OCI packages and artifacts will be signed using cosign with the repository's ECDSA key. |
| `created_at` | `str` | No |  |
| `default_privilege` | `str` | No | This defines the default level of privilege that all of your organization members have for this repository. |
| `delete_own` | `bool` | No | If checked, users can delete any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `delete_packages` | `str` | No | This defines the minimum level of privilege required for a user to delete packages. |
| `deleted_at` | `str` | No | The datetime the repository was manually deleted at. |
| `description` | `str` | No | A description of the repository's purpose/contents. |
| `distributes` | `list` | No | The repositories distributed through this repo. |
| `docker_refresh_tokens_enabled` | `bool` | No | If checked, refresh tokens will be issued in addition to access tokens for Docker authentication. |
| `ecdsa_keys` | `list` | No |  |
| `enforce_eula` | `bool` | No | If checked, downloads will explicitly require acceptance of an EULA. |
| `gpg_keys` | `list` | No |  |
| `index_files` | `bool` | No | If checked, files contained in packages will be indexed, which increase the synchronisation time required for packages. |
| `is_open_source` | `bool` | No |  |
| `is_private` | `bool` | No |  |
| `is_public` | `bool` | No |  |
| `manage_entitlements_privilege` | `str` | No | This defines the minimum level of privilege required for a user to manage entitlement tokens with private repositories. |
| `move_own` | `bool` | No | If checked, users can move any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `move_packages` | `str` | No | This defines the minimum level of privilege required for a user to move packages. |
| `name` | `str` | Yes | A descriptive name for the repository. |
| `namespace` | `str` | No | Namespace to which this repository belongs. |
| `namespace_url` | `str` | No | API endpoint where data about this namespace can be retrieved. |
| `nuget_native_signing_enabled` | `bool` | No | When enabled, all pushed (or pulled from upstream) nuget packages and artifacts will be signed using the repository's X.509 RSA certificate. |
| `num_downloads` | `int` | No | The number of downloads for packages in the repository. |
| `num_policy_violated_packages` | `int` | No | Number of packages with policy violations in a repository. |
| `num_quarantined_packages` | `int` | No | Number of quarantined packages in a repository. |
| `open_source_license` | `str` | No | The SPDX identifier of the open source license. |
| `open_source_project_url` | `str` | No | The URL to the Open-Source project, used for validating that the project meets the requirements for Open-Source. |
| `package_count` | `int` | No | The number of packages in the repository. |
| `package_group_count` | `int` | No | The number of groups in the repository. |
| `proxy_npmjs` | `bool` | No | If checked, Npm packages that are not in the repository when requested by clients will automatically be proxied from the public npmjs.org registry. |
| `proxy_pypi` | `bool` | No | If checked, Python packages that are not in the repository when requested by clients will automatically be proxied from the public pypi.python.org registry. |
| `raw_package_index_enabled` | `bool` | No | If checked, HTML and JSON indexes will be generated that list all available raw packages in the repository. |
| `raw_package_index_signatures_enabled` | `bool` | No | If checked, the HTML and JSON indexes will display raw package GPG signatures alongside the index packages. |
| `replace_packages` | `str` | No | This defines the minimum level of privilege required for a user to republish packages. |
| `replace_packages_by_default` | `bool` | No | If checked, uploaded packages will overwrite/replace any others with the same attributes (e.g. |
| `repository_type` | `int` | No | The repository type changes how it is accessed and billed. |
| `repository_type_str` | `str` | No | The repository type changes how it is accessed and billed. |
| `resync_own` | `bool` | No | If checked, users can resync any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `resync_packages` | `str` | No | This defines the minimum level of privilege required for a user to resync packages. |
| `scan_own` | `bool` | No | If checked, users can scan any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `scan_packages` | `str` | No | This defines the minimum level of privilege required for a user to scan packages. |
| `self_html_url` | `str` | No | Website URL for this repository. |
| `self_url` | `str` | No | API endpoint where data about this repository can be retrieved. |
| `show_setup_all` | `bool` | No | If checked, the Set Me Up help for all formats will always be shown, even if you don't have packages of that type uploaded. |
| `size` | `int` | No | The calculated size of the repository. |
| `size_str` | `str` | No | The calculated size of the repository (human readable). |
| `slug` | `str` | No | The slug identifies the repository in URIs. |
| `slug_perm` | `str` | No | The slug_perm immutably identifies the repository. |
| `storage_region` | `str` | No | The Cloudsmith region in which package files are stored. |
| `strict_npm_validation` | `bool` | No | If checked, npm packages will be validated strictly to ensure the package matches specifcation. |
| `tag_pre_releases_as_latest` | `bool` | No | If checked, packages pushed with a pre-release component on that version will be marked with the 'latest' tag. |
| `use_debian_labels` | `bool` | No | If checked, a 'Label' field will be present in Debian-based repositories. |
| `use_default_cargo_upstream` | `bool` | No | If checked, dependencies of uploaded Cargo crates which do not set an explicit value for "registry" will be assumed to be available from crates.io. |
| `use_entitlements_privilege` | `str` | No | This defines the minimum level of privilege required for a user to see/use entitlement tokens with private repositories. |
| `use_noarch_packages` | `bool` | No | If checked, noarch packages (if supported) are enabled in installations/configurations. |
| `use_source_packages` | `bool` | No | If checked, source packages (if supported) are enabled in installations/configurations. |
| `use_vulnerability_scanning` | `bool` | No | If checked, vulnerability scanning will be enabled for all supported packages within this repository. |
| `user_entitlements_enabled` | `bool` | No | If checked, users can use and manage their own user-specific entitlement token for the repository (if private). |
| `view_statistics` | `str` | No | This defines the minimum level of privilege required for a user to view repository statistics, to include entitlement-based usage, if applicable. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Repo().create({
    "id": "example_id",  # str
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Repo().list()
for repo in results:
    print(repo)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Repo().load({"id": "repo_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Repo().remove({"identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Repo().update({
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryAuditLogEntity

```python
repository_audit_log = client.RepositoryAuditLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `str` | Yes |  |
| `actor_ip_address` | `str` | Yes |  |
| `actor_kind` | `str` | No |  |
| `actor_location` | `dict` | Yes |  |
| `actor_slug_perm` | `str` | Yes |  |
| `actor_url` | `str` | No |  |
| `context` | `str` | Yes |  |
| `event` | `str` | Yes |  |
| `event_at` | `str` | Yes |  |
| `object` | `str` | Yes |  |
| `object_kind` | `str` | Yes |  |
| `object_slug_perm` | `str` | Yes |  |
| `uuid` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RepositoryAuditLog().list({"owner": "example", "repo": "example"})
for repository_audit_log in results:
    print(repository_audit_log)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryAuditLogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryEcdsaKeyEntity

```python
repository_ecdsa_key = client.RepositoryEcdsaKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | If selected this is the active key for this repository. |
| `created_at` | `str` | No |  |
| `default` | `bool` | No | If selected this is the default key for this repository. |
| `fingerprint` | `str` | No | The long identifier used by ECDSA for this key. |
| `fingerprint_short` | `str` | No |  |
| `public_key` | `str` | No | The public key given to repository users. |
| `ssh_fingerprint` | `str` | No | The SSH fingerprint used by ECDSA for this key. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RepositoryEcdsaKey().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositoryEcdsaKey().load({"identifier": "identifier", "owner": "owner"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryEcdsaKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryGeoIpRuleEntity

```python
repository_geo_ip_rule = client.RepositoryGeoIpRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cidr` | `dict` | Yes |  |
| `country_code` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositoryGeoIpRule().load({"identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.RepositoryGeoIpRule().update({
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryGeoIpRuleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryGeoIpStatusEntity

```python
repository_geo_ip_status = client.RepositoryGeoIpStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `geoip_enabled` | `bool` | No | If checked, any access to the website or downloads for this repository is allowed/denied according to the configured Geo/IP restriction rules. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositoryGeoIpStatus().load({"identifier": "identifier", "owner": "owner"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryGeoIpStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryGeoIpTestAddressEntity

```python
repository_geo_ip_test_address = client.RepositoryGeoIpTestAddress()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RepositoryGeoIpTestAddress().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryGeoIpTestAddressEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryGpgKeyEntity

```python
repository_gpg_key = client.RepositoryGpgKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | If selected this is the active key for this repository. |
| `comment` | `str` | Yes |  |
| `created_at` | `str` | No |  |
| `default` | `bool` | No | If selected this is the default key for this repository. |
| `fingerprint` | `str` | No | The long identifier used by GPG for this key. |
| `fingerprint_short` | `str` | No |  |
| `public_key` | `str` | No | The public key given to repository users. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RepositoryGpgKey().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "comment": "example_comment",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositoryGpgKey().load({"identifier": "identifier", "owner": "owner"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryGpgKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryPrivilegeInputEntity

```python
repository_privilege_input = client.RepositoryPrivilegeInput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `privilege` | `str` | Yes | The level of privilege that the user or team should be granted to the specified repository. |
| `service` | `str` | No | The service identifier (slug). |
| `team` | `str` | No | The team identifier (slug). |
| `user` | `str` | No | The user identifier (slug). |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RepositoryPrivilegeInput().list({"identifier": "example", "owner": "example"})
for repository_privilege_input in results:
    print(repository_privilege_input)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryPrivilegeInputEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryRetentionRuleEntity

```python
repository_retention_rule = client.RepositoryRetentionRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `retention_count_limit` | `int` | No | The maximum X number of packages to retain. |
| `retention_days_limit` | `int` | No | The X number of days of packages to retain. |
| `retention_enabled` | `bool` | No | If checked, the retention lifecycle rules will be activated for the repository. |
| `retention_group_by_format` | `bool` | No | If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are diffe… |
| `retention_group_by_name` | `bool` | No | If checked, retention will apply to groups of packages by name rather than all packages.<br>For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgB… |
| `retention_group_by_package_type` | `bool` | No | If checked, retention will apply to packages by package type (e.g. |
| `retention_package_query_string` | `str` | No | A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will pre… |
| `retention_size_limit` | `int` | No | The maximum X total size (in bytes) of packages to retain. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositoryRetentionRule().load({"owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.RepositoryRetentionRule().update({
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryRetentionRuleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryRsaKeyEntity

```python
repository_rsa_key = client.RepositoryRsaKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | If selected this is the active key for this repository. |
| `created_at` | `str` | No |  |
| `default` | `bool` | No | If selected this is the default key for this repository. |
| `fingerprint` | `str` | No | The long identifier used by RSA for this key. |
| `fingerprint_short` | `str` | No |  |
| `public_key` | `str` | No | The public key given to repository users. |
| `ssh_fingerprint` | `str` | No | The SSH fingerprint used by RSA for this key. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RepositoryRsaKey().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositoryRsaKey().load({"identifier": "identifier", "owner": "owner"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryRsaKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryTokenEntity

```python
repository_token = client.RepositoryToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clients` | `int` | No |  |
| `created_at` | `str` | No | The datetime the token was updated at. |
| `created_by` | `str` | No |  |
| `created_by_url` | `str` | No |  |
| `default` | `bool` | No | If selected this is the default token for this repository. |
| `disable_url` | `str` | No |  |
| `downloads` | `int` | No |  |
| `enable_url` | `str` | No |  |
| `eula_accepted` | `dict` | No |  |
| `eula_accepted_at` | `str` | No | The datetime the EULA was accepted at. |
| `eula_accepted_from` | `str` | No |  |
| `eula_required` | `bool` | No | If checked, a EULA acceptance is required for this token. |
| `has_limits` | `bool` | No |  |
| `identifier` | `int` | No | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `bool` | No | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` | `bool` | No |  |
| `limit_bandwidth` | `int` | No | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` | `str` | No |  |
| `limit_date_range_from` | `str` | No | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | `str` | No | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | `int` | No | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | `int` | No | The maximum number of downloads allowed for the token. |
| `limit_package_query` | `str` | No | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | `str` | No | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` | `dict` | No |  |
| `name` | `str` | Yes |  |
| `refresh_url` | `str` | No |  |
| `reset_url` | `str` | No |  |
| `scheduled_reset_at` | `str` | No | The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero. |
| `scheduled_reset_period` | `str` | No |  |
| `self_url` | `str` | No |  |
| `slug_perm` | `str` | No |  |
| `token` | `str` | No |  |
| `updated_at` | `str` | No | The datetime the token was updated at. |
| `updated_by` | `str` | No |  |
| `updated_by_url` | `str` | No |  |
| `usage` | `str` | No |  |
| `user` | `str` | No |  |
| `user_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RepositoryToken().create({
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RepositoryToken().list({"owner": "example", "repo": "example"})
for repository_token in results:
    print(repository_token)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositoryToken().load({"identifier": "identifier", "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.RepositoryToken().update({
    "identifier": "identifier",
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryTokenRefreshEntity

```python
repository_token_refresh = client.RepositoryTokenRefresh()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clients` | `int` | No |  |
| `created_at` | `str` | No | The datetime the token was updated at. |
| `created_by` | `str` | No |  |
| `created_by_url` | `str` | No |  |
| `default` | `bool` | No | If selected this is the default token for this repository. |
| `disable_url` | `str` | No |  |
| `downloads` | `int` | No |  |
| `enable_url` | `str` | No |  |
| `eula_accepted` | `dict` | No |  |
| `eula_accepted_at` | `str` | No | The datetime the EULA was accepted at. |
| `eula_accepted_from` | `str` | No |  |
| `eula_required` | `bool` | No | If checked, a EULA acceptance is required for this token. |
| `has_limits` | `bool` | No |  |
| `identifier` | `int` | No | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `bool` | No | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` | `bool` | No |  |
| `limit_bandwidth` | `int` | No | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` | `str` | No |  |
| `limit_date_range_from` | `str` | No | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | `str` | No | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | `int` | No | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | `int` | No | The maximum number of downloads allowed for the token. |
| `limit_package_query` | `str` | No | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | `str` | No | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` | `dict` | No |  |
| `name` | `str` | No |  |
| `refresh_url` | `str` | No |  |
| `reset_url` | `str` | No |  |
| `scheduled_reset_at` | `str` | No | The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero. |
| `scheduled_reset_period` | `str` | No |  |
| `self_url` | `str` | No |  |
| `slug_perm` | `str` | No |  |
| `token` | `str` | No |  |
| `updated_at` | `str` | No | The datetime the token was updated at. |
| `updated_by` | `str` | No |  |
| `updated_by_url` | `str` | No |  |
| `usage` | `str` | No |  |
| `user` | `str` | No |  |
| `user_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RepositoryTokenRefresh().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryTokenRefreshEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryTokenSyncEntity

```python
repository_token_sync = client.RepositoryTokenSync()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tokens` | `list` | No | The entitlements that have been synchronised. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RepositoryTokenSync().create({
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryTokenSyncEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryWebhookEntity

```python
repository_webhook = client.RepositoryWebhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `created_by` | `str` | No |  |
| `created_by_url` | `str` | No |  |
| `disable_reason` | `int` | No |  |
| `disable_reason_str` | `str` | No |  |
| `events` | `list` | Yes |  |
| `identifier` | `int` | No | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `bool` | No | If enabled, the webhook will trigger on subscribed events and send payloads to the configured target URL. |
| `is_last_response_bad` | `bool` | No |  |
| `last_response_status` | `int` | No |  |
| `last_response_status_str` | `str` | No |  |
| `num_sent` | `int` | No |  |
| `package_query` | `str` | No | The package-based search query for webhooks to fire. |
| `request_body_format` | `int` | No | The format of the payloads for webhook requests. |
| `request_body_format_str` | `str` | No |  |
| `request_body_template_format` | `int` | No | The format of the payloads for webhook requests. |
| `request_body_template_format_str` | `str` | No |  |
| `request_content_type` | `str` | No | The value that will be sent for the 'Content Type' header. |
| `secret_header` | `str` | No | The header to send the predefined secret in. |
| `self_url` | `str` | No |  |
| `slug_perm` | `str` | No |  |
| `target_url` | `str` | Yes | The destination URL that webhook payloads will be POST'ed to. |
| `templates` | `list` | Yes |  |
| `updated_at` | `str` | No |  |
| `updated_by` | `str` | No |  |
| `updated_by_url` | `str` | No |  |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates is verified when webhooks are sent. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RepositoryWebhook().create({
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
    "events": [],  # list
    "target_url": "example_target_url",  # str
    "templates": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RepositoryWebhook().list({"owner": "example", "repo": "example"})
for repository_webhook in results:
    print(repository_webhook)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositoryWebhook().load({"identifier": "identifier", "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.RepositoryWebhook().update({
    "identifier": "identifier",
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryWebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryX509EcdsaCertificateEntity

```python
repository_x509_ecdsa_certificate = client.RepositoryX509EcdsaCertificate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | If selected this is the active key for this repository. |
| `certificate` | `str` | No | The issued certificate. |
| `certificate_chain` | `str` | No | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` | `str` | No |  |
| `certificate_chain_fingerprint_short` | `str` | No |  |
| `certificate_fingerprint` | `str` | No | The SHA-256 long identifier used |
| `certificate_fingerprint_short` | `str` | No |  |
| `created_at` | `str` | No |  |
| `default` | `bool` | No | If selected this is the default key for this repository. |
| `issuing_status` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositoryX509EcdsaCertificate().load({"identifier": "identifier", "owner": "owner"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryX509EcdsaCertificateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryX509RsaCertificateEntity

```python
repository_x509_rsa_certificate = client.RepositoryX509RsaCertificate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | If selected this is the active key for this repository. |
| `certificate` | `str` | No | The issued certificate. |
| `certificate_chain` | `str` | No | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` | `str` | No |  |
| `certificate_chain_fingerprint_short` | `str` | No |  |
| `certificate_fingerprint` | `str` | No | The SHA-256 long identifier used |
| `certificate_fingerprint_short` | `str` | No |  |
| `created_at` | `str` | No |  |
| `default` | `bool` | No | If selected this is the default key for this repository. |
| `issuing_status` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositoryX509RsaCertificate().load({"identifier": "identifier", "owner": "owner"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryX509RsaCertificateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResetEntity

```python
reset = client.Reset()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResourcesRateCheckEntity

```python
resources_rate_check = client.ResourcesRateCheck()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `interval` | `float` | No | The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window. |
| `limit` | `int` | No | The maximum number of requests that you are permitted to send per hour |
| `remaining` | `int` | No | The number of requests that are remaining in the current rate limit window |
| `reset` | `int` | No | The UTC epoch timestamp at which the current rate limit window will reset |
| `reset_iso_8601` | `str` | No | The ISO 8601 datetime at which the current rate limit window will reset |
| `throttled` | `bool` | No | If true, throttling is currently being enforced. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ResourcesRateCheck().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourcesRateCheckEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResyncEntity

```python
resync = client.Resync()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResyncEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RetentionEntity

```python
retention = client.Retention()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RetentionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RpmEntity

```python
rpm = client.Rpm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `distro_version` | `str` | Yes | The distribution version that packages found on this upstream will be associated with. |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `str` | No | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `str` | No | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `str` | No | The GPG signature verification mode for this upstream. |
| `include_sources` | `bool` | No | When checked, source packages will be available from this upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verification_status` | `str` | No | The signature verification status for this upstream. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Rpm().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "distro_version": "example_distro_version",  # str
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Rpm().list({"identifier": "example", "owner": "example"})
for rpm in results:
    print(rpm)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Rpm().load({"id": "rpm_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Rpm().update({
    "id": "rpm_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RpmEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RsaEntity

```python
rsa = client.Rsa()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RsaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RubyEntity

```python
ruby = client.Ruby()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Ruby().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Ruby().list({"identifier": "example", "owner": "example"})
for ruby in results:
    print(ruby)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Ruby().load({"id": "ruby_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Ruby().update({
    "id": "ruby_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RubyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SamlGroupSyncEntity

```python
saml_group_sync = client.SamlGroupSync()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SamlGroupSyncEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScanEntity

```python
scan = client.Scan()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScanEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SelfEntity

```python
self = client.Self()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SelfEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ServiceEntity

```python
service = client.Service()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `created_by` | `str` | No |  |
| `created_by_url` | `str` | No |  |
| `description` | `str` | No | The description of the service |
| `key` | `str` | No | The API key of the service |
| `key_expires_at` | `str` | No | The time at which the API key will expire. |
| `name` | `str` | Yes | The name of the service |
| `role` | `str` | No | The role of the service. |
| `slug` | `str` | No | The slug of the service |
| `teams` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Service().create({
    "org_id": "example_org_id",  # str
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Service().list({"org_id": "example"})
for service in results:
    print(service)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Service().load({"id": "service_id", "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Service().update({
    "id": "service_id",
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ServiceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusEntity

```python
status = client.Status()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusBasicEntity

```python
status_basic = client.StatusBasic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detail` | `str` | No | The message describing the state of the API. |
| `version` | `str` | No | The current version for the Cloudsmith service. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.StatusBasic().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusBasicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StorageRegionEntity

```python
storage_region = client.StorageRegion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `str` | Yes | Name of the storage region |
| `slug` | `str` | Yes | Slug for the storage region |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.StorageRegion().list()
for storage_region in results:
    print(storage_region)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.StorageRegion().load({"id": "storage_region_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StorageRegionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SwiftEntity

```python
swift = client.Swift()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `str` | No | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | No | Secret to provide with requests to upstream. |
| `auth_username` | `str` | No | Username to provide with requests to upstream. |
| `created_at` | `str` | No | The datetime the upstream source was created. |
| `disable_reason` | `str` | No |  |
| `extra_header_1` | `str` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | No | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | No | The mode that this upstream should operate in. |
| `name` | `str` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upstream_url` | `str` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Swift().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Swift().list({"identifier": "example", "owner": "example"})
for swift in results:
    print(swift)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Swift().load({"id": "swift_id", "identifier": "identifier", "owner": "owner"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Swift().update({
    "id": "swift_id",
    "identifier": "identifier",
    "owner": "owner",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SwiftEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SyncEntity

```python
sync = client.Sync()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SyncEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TagEntity

```python
tag = client.Tag()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamEntity

```python
team = client.Team()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TerraformEntity

```python
terraform = client.Terraform()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TerraformEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TestEntity

```python
test = client.Test()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TokenEntity

```python
token = client.Token()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TransferRegionEntity

```python
transfer_region = client.TransferRegion()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TransferRegionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserEntity

```python
user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `str` | No | The time at which the API key was created. |
| `key` | `str` | No | The unique API key used for authentication. |
| `slug_perm` | `str` | No | The slug_perm for token. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.User().list()
for user in results:
    print(user)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserAuthTokenEntity

```python
user_auth_token = client.UserAuthToken()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.UserAuthToken().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserAuthTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserAuthenticationTokenEntity

```python
user_authentication_token = client.UserAuthenticationToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `str` | No | The time at which the API key was created. |
| `key` | `str` | No | The unique API key used for authentication. |
| `slug_perm` | `str` | No | The slug_perm for token. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.UserAuthenticationToken().create({
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UserAuthenticationToken().update({
    "slug_perm": "slug_perm",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserAuthenticationTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserBriefEntity

```python
user_brief = client.UserBrief()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authenticated` | `bool` | No | If true then you're logged in as a user. |
| `email` | `str` | No | Your email address that we use to contact you. |
| `name` | `str` | No | The full name of the user (if any). |
| `profile_url` | `str` | No | The URL for the full profile of the user. |
| `self_url` | `str` | No |  |
| `slug` | `str` | No |  |
| `slug_perm` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.UserBrief().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserBriefEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserProfileEntity

```python
user_profile = client.UserProfile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `company` | `str` | No |  |
| `first_name` | `str` | Yes |  |
| `job_title` | `str` | No |  |
| `joined_at` | `str` | No |  |
| `last_name` | `str` | Yes |  |
| `name` | `str` | No |  |
| `slug` | `str` | No |  |
| `slug_perm` | `str` | No |  |
| `tagline` | `str` | No | Your tagline is a sentence about you. |
| `url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.UserProfile().load({"id": "user_profile_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserProfileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VagrantEntity

```python
vagrant = client.Vagrant()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VagrantEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ValidateEntity

```python
validate = client.Validate()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ValidateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VersionEntity

```python
version = client.Version()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VersionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VulnerabilityEntity

```python
vulnerability = client.Vulnerability()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | The time this scan result was stored. |
| `has_vulnerabilities` | `bool` | No | Do the results contain any known vulnerabilities? |
| `identifier` | `str` | Yes |  |
| `max_severity` | `str` | No |  |
| `num_vulnerabilities` | `int` | No |  |
| `package` | `dict` | Yes |  |
| `scan_id` | `int` | Yes | Deprecated (23-05-15): Please use 'identifier' instead. |
| `scans` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Vulnerability().list({"owner": "example", "repo": "example"})
for vulnerability in results:
    print(vulnerability)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Vulnerability().load({"id": "vulnerability_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VulnerabilityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VulnerabilityPolicyEntity

```python
vulnerability_policy = client.VulnerabilityPolicy()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VulnerabilityPolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEntity

```python
webhook = client.Webhook()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Webhook().remove({"identifier": "identifier", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## X509EcdsaEntity

```python
x509_ecdsa = client.X509Ecdsa()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `X509EcdsaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## X509RsaEntity

```python
x509_rsa = client.X509Rsa()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `X509RsaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = CloudsmithSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

