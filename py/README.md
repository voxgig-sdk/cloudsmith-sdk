# Cloudsmith Python SDK



The Python SDK for the Cloudsmith API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Abort()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudsmith-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from cloudsmith_sdk import CloudsmithSDK

client = CloudsmithSDK({
    "apikey": os.environ.get("CLOUDSMITH_APIKEY"),
})
```

### 3. Load a cargo

Cargo is nested under identifier, so provide the `identifier`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    cargo = client.Cargo().load({"identifier": "example_identifier", "owner": "example_owner", "id": "example_id"})
    print(cargo)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    userprofile = client.UserProfile().load({"id": "example_id"})
    print(userprofile)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CloudsmithSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
userprofile = client.UserProfile().load({"id": "test01"})
# userprofile contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CloudsmithSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDSMITH_TEST_LIVE=TRUE
CLOUDSMITH_APIKEY=<your-key>
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### CloudsmithSDK

```python
from cloudsmith_sdk import CloudsmithSDK

client = CloudsmithSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CloudsmithSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CloudsmithSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Abort` | `(data) -> AbortEntity` | Create an Abort entity instance. |
| `Alpine` | `(data) -> AlpineEntity` | Create an Alpine entity instance. |
| `AuditLog` | `(data) -> AuditLogEntity` | Create an AuditLog entity instance. |
| `Basic` | `(data) -> BasicEntity` | Create a Basic entity instance. |
| `Cargo` | `(data) -> CargoEntity` | Create a Cargo entity instance. |
| `Cocoapod` | `(data) -> CocoapodEntity` | Create a Cocoapod entity instance. |
| `Complete` | `(data) -> CompleteEntity` | Create a Complete entity instance. |
| `Composer` | `(data) -> ComposerEntity` | Create a Composer entity instance. |
| `Conan` | `(data) -> ConanEntity` | Create a Conan entity instance. |
| `Conda` | `(data) -> CondaEntity` | Create a Conda entity instance. |
| `Copy` | `(data) -> CopyEntity` | Create a Copy entity instance. |
| `Cran` | `(data) -> CranEntity` | Create a Cran entity instance. |
| `Dart` | `(data) -> DartEntity` | Create a Dart entity instance. |
| `Deb` | `(data) -> DebEntity` | Create a Deb entity instance. |
| `DenyPolicy` | `(data) -> DenyPolicyEntity` | Create a DenyPolicy entity instance. |
| `Dependency` | `(data) -> DependencyEntity` | Create a Dependency entity instance. |
| `Disable` | `(data) -> DisableEntity` | Create a Disable entity instance. |
| `DistributionFull` | `(data) -> DistributionFullEntity` | Create a DistributionFull entity instance. |
| `Distro` | `(data) -> DistroEntity` | Create a Distro entity instance. |
| `Docker` | `(data) -> DockerEntity` | Create a Docker entity instance. |
| `DynamicMapping` | `(data) -> DynamicMappingEntity` | Create a DynamicMapping entity instance. |
| `Ecdsa` | `(data) -> EcdsaEntity` | Create an Ecdsa entity instance. |
| `Enable` | `(data) -> EnableEntity` | Create an Enable entity instance. |
| `Entitlement` | `(data) -> EntitlementEntity` | Create an Entitlement entity instance. |
| `Evaluation` | `(data) -> EvaluationEntity` | Create an Evaluation entity instance. |
| `File` | `(data) -> FileEntity` | Create a File entity instance. |
| `Format` | `(data) -> FormatEntity` | Create a Format entity instance. |
| `Geoip` | `(data) -> GeoipEntity` | Create a Geoip entity instance. |
| `Gon` | `(data) -> GonEntity` | Create a Gon entity instance. |
| `Gpg` | `(data) -> GpgEntity` | Create a Gpg entity instance. |
| `Group` | `(data) -> GroupEntity` | Create a Group entity instance. |
| `Helm` | `(data) -> HelmEntity` | Create a Helm entity instance. |
| `Hex` | `(data) -> HexEntity` | Create a Hex entity instance. |
| `History` | `(data) -> HistoryEntity` | Create a History entity instance. |
| `Huggingface` | `(data) -> HuggingfaceEntity` | Create a Huggingface entity instance. |
| `Info` | `(data) -> InfoEntity` | Create an Info entity instance. |
| `Invite` | `(data) -> InviteEntity` | Create an Invite entity instance. |
| `LicensePolicy` | `(data) -> LicensePolicyEntity` | Create a LicensePolicy entity instance. |
| `Limit` | `(data) -> LimitEntity` | Create a Limit entity instance. |
| `Luarock` | `(data) -> LuarockEntity` | Create a Luarock entity instance. |
| `Maven` | `(data) -> MavenEntity` | Create a Maven entity instance. |
| `Member` | `(data) -> MemberEntity` | Create a Member entity instance. |
| `Move` | `(data) -> MoveEntity` | Create a Move entity instance. |
| `Namespace` | `(data) -> NamespaceEntity` | Create a Namespace entity instance. |
| `NamespaceAuditLog` | `(data) -> NamespaceAuditLogEntity` | Create a NamespaceAuditLog entity instance. |
| `Npm` | `(data) -> NpmEntity` | Create a Npm entity instance. |
| `Nuget` | `(data) -> NugetEntity` | Create a Nuget entity instance. |
| `OpenidConnect` | `(data) -> OpenidConnectEntity` | Create an OpenidConnect entity instance. |
| `Org` | `(data) -> OrgEntity` | Create an Org entity instance. |
| `OrganizationGroupSync` | `(data) -> OrganizationGroupSyncEntity` | Create an OrganizationGroupSync entity instance. |
| `OrganizationGroupSyncStatus` | `(data) -> OrganizationGroupSyncStatusEntity` | Create an OrganizationGroupSyncStatus entity instance. |
| `OrganizationInvite` | `(data) -> OrganizationInviteEntity` | Create an OrganizationInvite entity instance. |
| `OrganizationInviteExtend` | `(data) -> OrganizationInviteExtendEntity` | Create an OrganizationInviteExtend entity instance. |
| `OrganizationMembership` | `(data) -> OrganizationMembershipEntity` | Create an OrganizationMembership entity instance. |
| `OrganizationMembershipRoleUpdate` | `(data) -> OrganizationMembershipRoleUpdateEntity` | Create an OrganizationMembershipRoleUpdate entity instance. |
| `OrganizationMembershipVisibilityUpdate` | `(data) -> OrganizationMembershipVisibilityUpdateEntity` | Create an OrganizationMembershipVisibilityUpdate entity instance. |
| `OrganizationPackageLicensePolicy` | `(data) -> OrganizationPackageLicensePolicyEntity` | Create an OrganizationPackageLicensePolicy entity instance. |
| `OrganizationPackageVulnerabilityPolicy` | `(data) -> OrganizationPackageVulnerabilityPolicyEntity` | Create an OrganizationPackageVulnerabilityPolicy entity instance. |
| `OrganizationSamlAuth` | `(data) -> OrganizationSamlAuthEntity` | Create an OrganizationSamlAuth entity instance. |
| `OrganizationTeam` | `(data) -> OrganizationTeamEntity` | Create an OrganizationTeam entity instance. |
| `OrganizationTeamMember` | `(data) -> OrganizationTeamMemberEntity` | Create an OrganizationTeamMember entity instance. |
| `Oss` | `(data) -> OssEntity` | Create an Oss entity instance. |
| `P2n` | `(data) -> P2nEntity` | Create a P2n entity instance. |
| `Package` | `(data) -> PackageEntity` | Create a Package entity instance. |
| `PackageDenyPolicy` | `(data) -> PackageDenyPolicyEntity` | Create a PackageDenyPolicy entity instance. |
| `PackageFilePartsUpload` | `(data) -> PackageFilePartsUploadEntity` | Create a PackageFilePartsUpload entity instance. |
| `PackageFileUpload` | `(data) -> PackageFileUploadEntity` | Create a PackageFileUpload entity instance. |
| `PackageLicensePolicyEvaluation` | `(data) -> PackageLicensePolicyEvaluationEntity` | Create a PackageLicensePolicyEvaluation entity instance. |
| `PackageVersionBadge` | `(data) -> PackageVersionBadgeEntity` | Create a PackageVersionBadge entity instance. |
| `PackageVulnerabilityPolicyEvaluation` | `(data) -> PackageVulnerabilityPolicyEvaluationEntity` | Create a PackageVulnerabilityPolicyEvaluation entity instance. |
| `Privilege` | `(data) -> PrivilegeEntity` | Create a Privilege entity instance. |
| `Profile` | `(data) -> ProfileEntity` | Create a Profile entity instance. |
| `ProviderSetting` | `(data) -> ProviderSettingEntity` | Create a ProviderSetting entity instance. |
| `ProviderSettingsWrite` | `(data) -> ProviderSettingsWriteEntity` | Create a ProviderSettingsWrite entity instance. |
| `Python` | `(data) -> PythonEntity` | Create a Python entity instance. |
| `Quarantine` | `(data) -> QuarantineEntity` | Create a Quarantine entity instance. |
| `Quota` | `(data) -> QuotaEntity` | Create a Quota entity instance. |
| `Raw` | `(data) -> RawEntity` | Create a Raw entity instance. |
| `Refresh` | `(data) -> RefreshEntity` | Create a Refresh entity instance. |
| `Regenerate` | `(data) -> RegenerateEntity` | Create a Regenerate entity instance. |
| `Repo` | `(data) -> RepoEntity` | Create a Repo entity instance. |
| `RepositoryAuditLog` | `(data) -> RepositoryAuditLogEntity` | Create a RepositoryAuditLog entity instance. |
| `RepositoryEcdsaKey` | `(data) -> RepositoryEcdsaKeyEntity` | Create a RepositoryEcdsaKey entity instance. |
| `RepositoryGeoIpRule` | `(data) -> RepositoryGeoIpRuleEntity` | Create a RepositoryGeoIpRule entity instance. |
| `RepositoryGeoIpStatus` | `(data) -> RepositoryGeoIpStatusEntity` | Create a RepositoryGeoIpStatus entity instance. |
| `RepositoryGeoIpTestAddress` | `(data) -> RepositoryGeoIpTestAddressEntity` | Create a RepositoryGeoIpTestAddress entity instance. |
| `RepositoryGpgKey` | `(data) -> RepositoryGpgKeyEntity` | Create a RepositoryGpgKey entity instance. |
| `RepositoryPrivilegeInput` | `(data) -> RepositoryPrivilegeInputEntity` | Create a RepositoryPrivilegeInput entity instance. |
| `RepositoryRetentionRule` | `(data) -> RepositoryRetentionRuleEntity` | Create a RepositoryRetentionRule entity instance. |
| `RepositoryRsaKey` | `(data) -> RepositoryRsaKeyEntity` | Create a RepositoryRsaKey entity instance. |
| `RepositoryToken` | `(data) -> RepositoryTokenEntity` | Create a RepositoryToken entity instance. |
| `RepositoryTokenRefresh` | `(data) -> RepositoryTokenRefreshEntity` | Create a RepositoryTokenRefresh entity instance. |
| `RepositoryTokenSync` | `(data) -> RepositoryTokenSyncEntity` | Create a RepositoryTokenSync entity instance. |
| `RepositoryWebhook` | `(data) -> RepositoryWebhookEntity` | Create a RepositoryWebhook entity instance. |
| `RepositoryX509EcdsaCertificate` | `(data) -> RepositoryX509EcdsaCertificateEntity` | Create a RepositoryX509EcdsaCertificate entity instance. |
| `RepositoryX509RsaCertificate` | `(data) -> RepositoryX509RsaCertificateEntity` | Create a RepositoryX509RsaCertificate entity instance. |
| `Reset` | `(data) -> ResetEntity` | Create a Reset entity instance. |
| `ResourcesRateCheck` | `(data) -> ResourcesRateCheckEntity` | Create a ResourcesRateCheck entity instance. |
| `Resync` | `(data) -> ResyncEntity` | Create a Resync entity instance. |
| `Retention` | `(data) -> RetentionEntity` | Create a Retention entity instance. |
| `Rpm` | `(data) -> RpmEntity` | Create a Rpm entity instance. |
| `Rsa` | `(data) -> RsaEntity` | Create a Rsa entity instance. |
| `Ruby` | `(data) -> RubyEntity` | Create a Ruby entity instance. |
| `SamlGroupSync` | `(data) -> SamlGroupSyncEntity` | Create a SamlGroupSync entity instance. |
| `Scan` | `(data) -> ScanEntity` | Create a Scan entity instance. |
| `Self` | `(data) -> SelfEntity` | Create a Self entity instance. |
| `Service` | `(data) -> ServiceEntity` | Create a Service entity instance. |
| `Status` | `(data) -> StatusEntity` | Create a Status entity instance. |
| `StatusBasic` | `(data) -> StatusBasicEntity` | Create a StatusBasic entity instance. |
| `StorageRegion` | `(data) -> StorageRegionEntity` | Create a StorageRegion entity instance. |
| `Swift` | `(data) -> SwiftEntity` | Create a Swift entity instance. |
| `Sync` | `(data) -> SyncEntity` | Create a Sync entity instance. |
| `Tag` | `(data) -> TagEntity` | Create a Tag entity instance. |
| `Team` | `(data) -> TeamEntity` | Create a Team entity instance. |
| `Terraform` | `(data) -> TerraformEntity` | Create a Terraform entity instance. |
| `Test` | `(data) -> TestEntity` | Create a Test entity instance. |
| `Token` | `(data) -> TokenEntity` | Create a Token entity instance. |
| `TransferRegion` | `(data) -> TransferRegionEntity` | Create a TransferRegion entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `UserAuthToken` | `(data) -> UserAuthTokenEntity` | Create an UserAuthToken entity instance. |
| `UserAuthenticationToken` | `(data) -> UserAuthenticationTokenEntity` | Create an UserAuthenticationToken entity instance. |
| `UserBrief` | `(data) -> UserBriefEntity` | Create an UserBrief entity instance. |
| `UserProfile` | `(data) -> UserProfileEntity` | Create an UserProfile entity instance. |
| `Vagrant` | `(data) -> VagrantEntity` | Create a Vagrant entity instance. |
| `Validate` | `(data) -> ValidateEntity` | Create a Validate entity instance. |
| `Version` | `(data) -> VersionEntity` | Create a Version entity instance. |
| `Vulnerability` | `(data) -> VulnerabilityEntity` | Create a Vulnerability entity instance. |
| `VulnerabilityPolicy` | `(data) -> VulnerabilityPolicyEntity` | Create a VulnerabilityPolicy entity instance. |
| `Webhook` | `(data) -> WebhookEntity` | Create a Webhook entity instance. |
| `X509Ecdsa` | `(data) -> X509EcdsaEntity` | Create a X509Ecdsa entity instance. |
| `X509Rsa` | `(data) -> X509RsaEntity` | Create a X509Rsa entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### Abort

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Alpine

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### AuditLog

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Basic

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Cargo

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/cargo/`

#### Cocoapod

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Complete

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Composer

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/composer/`

#### Conan

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Conda

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/conda/`

#### Copy

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Cran

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/cran/`

#### Dart

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/dart/`

#### Deb

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `component` | The component to fetch from the upstream |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `distro_versions` | The distribution version that packages found on this upstream could be associated with. |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | The GPG signature verification mode for this upstream. |
| `include_sources` | When true, source packages will be available from this upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_distribution` | The distribution to fetch from the upstream |
| `upstream_url` | The URL for this upstream source. |
| `verification_status` | The signature verification status for this upstream. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/deb/`

#### DenyPolicy

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Dependency

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Disable

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### DistributionFull

| Field | Description |
| --- | --- |
| `format` |  |
| `format_url` |  |
| `name` |  |
| `self_url` |  |
| `slug` | The slug identifier for this distribution |
| `variants` |  |
| `versions` | A list of the versions for this distribution |

Operations: List, Load.

API path: `/distros/`

#### Distro

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Docker

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/docker/`

#### DynamicMapping

| Field | Description |
| --- | --- |
| `claim_value` | The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`. |
| `service_account` | The service account associated with the provider setting and `claim_value` Note: This field and the dynamic mappings feature are still in early access. |

Operations: List, Load.

API path: `/orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/`

#### Ecdsa

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Enable

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Entitlement

| Field | Description |
| --- | --- |
| `active` | Number of packages with at least 1 download |
| `bandwidth` |  |
| `downloads` |  |
| `inactive` | Packages with zero downloads |
| `total` | Total number of packages in repo |

Operations: Create, Load, Remove.

API path: `/entitlements/{owner}/{repo}/{identifier}/reset/`

#### Evaluation

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### File

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/files/{owner}/{repo}/{identifier}/abort/`

#### Format

| Field | Description |
| --- | --- |
| `description` | Description of the package format |
| `distributions` | The distributions supported by this package format |
| `extensions` | A non-exhaustive list of extensions supported |
| `name` | Name for the package format |
| `premium` | If true the package format is a premium-only feature |
| `premium_plan_id` | The minimum plan id required for this package format |
| `premium_plan_name` | The minimum plan name required for this package format |
| `slug` | Slug for the package format |
| `supports` | A set of what the package format supports |

Operations: List, Load.

API path: `/formats/`

#### Geoip

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Gon

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/go/`

#### Gpg

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Group

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Helm

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/helm/`

#### Hex

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/hex/`

#### History

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Huggingface

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/huggingface/`

#### Info

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Invite

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### LicensePolicy

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Limit

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Luarock

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Maven

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | The GPG signature verification mode for this upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verification_status` | The signature verification status for this upstream. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/maven/`

#### Member

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Move

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Namespace

| Field | Description |
| --- | --- |
| `name` |  |
| `slug` |  |
| `slug_perm` |  |
| `type_name` |  |

Operations: List, Load.

API path: `/namespaces/`

#### NamespaceAuditLog

| Field | Description |
| --- | --- |
| `actor` |  |
| `actor_ip_address` |  |
| `actor_kind` |  |
| `actor_location` |  |
| `actor_slug_perm` |  |
| `actor_url` |  |
| `context` |  |
| `event` |  |
| `event_at` |  |
| `object` |  |
| `object_kind` |  |
| `object_slug_perm` |  |
| `target` |  |
| `target_kind` |  |
| `target_slug_perm` |  |
| `uuid` |  |

Operations: Load.

API path: `/audit-log/{owner}/`

#### Npm

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/npm/`

#### Nuget

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/nuget/`

#### OpenidConnect

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Org

| Field | Description |
| --- | --- |
| `country` |  |
| `created_at` |  |
| `event_at` |  |
| `location` | The city/town/area your organization is based in. |
| `name` |  |
| `package` |  |
| `policy` |  |
| `reasons` |  |
| `slug` |  |
| `slug_perm` |  |
| `tagline` | A short public descriptive for your organization. |
| `vulnerability_scan_results` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/orgs/{org}/members/{member}/refresh/`

#### OrganizationGroupSync

| Field | Description |
| --- | --- |
| `idp_key` |  |
| `idp_value` |  |
| `role` |  |
| `slug_perm` |  |
| `team` |  |

Operations: Create, List.

API path: `/orgs/{org}/saml-group-sync/`

#### OrganizationGroupSyncStatus

| Field | Description |
| --- | --- |
| `saml_group_sync_status` |  |

Operations: Load.

API path: `/orgs/{org}/saml-group-sync/status/`

#### OrganizationInvite

| Field | Description |
| --- | --- |
| `email` | The email of the user to be invited. |
| `expires_at` |  |
| `inviter` |  |
| `inviter_url` |  |
| `org` |  |
| `role` | The role to be assigned to the invited user. |
| `slug_perm` |  |
| `teams` |  |
| `user` | The slug of the user to be invited. |
| `user_url` |  |

Operations: Create, List, Update.

API path: `/orgs/{org}/invites/`

#### OrganizationInviteExtend

| Field | Description |
| --- | --- |
| `email` | The email of the user to be invited. |
| `expires_at` |  |
| `inviter` |  |
| `inviter_url` |  |
| `org` |  |
| `role` | The role to be assigned to the invited user. |
| `slug_perm` | The slug_perm of the invite to be extended. |
| `teams` |  |
| `user` | The slug of the user to be invited. |
| `user_url` |  |

Operations: Create.

API path: `/orgs/{org}/invites/{slug_perm}/extend/`

#### OrganizationMembership

| Field | Description |
| --- | --- |
| `email` |  |
| `has_two_factor` |  |
| `is_active` |  |
| `joined_at` |  |
| `last_login_at` |  |
| `last_login_method` |  |
| `role` |  |
| `user` |  |
| `user_id` |  |
| `user_name` |  |
| `user_url` |  |
| `visibility` |  |

Operations: List, Load, Update.

API path: `/orgs/{org}/members/`

#### OrganizationMembershipRoleUpdate

| Field | Description |
| --- | --- |
| `email` |  |
| `has_two_factor` |  |
| `joined_at` |  |
| `last_login_at` |  |
| `last_login_method` |  |
| `role` |  |
| `user` |  |
| `user_id` |  |
| `user_name` |  |
| `user_url` |  |
| `visibility` |  |

Operations: Update.

API path: `/orgs/{org}/members/{member}/update-role/`

#### OrganizationMembershipVisibilityUpdate

| Field | Description |
| --- | --- |
| `email` |  |
| `has_two_factor` |  |
| `joined_at` |  |
| `last_login_at` |  |
| `last_login_method` |  |
| `role` |  |
| `user` |  |
| `user_id` |  |
| `user_name` |  |
| `user_url` |  |
| `visibility` |  |

Operations: Update.

API path: `/orgs/{org}/members/{member}/update-visibility/`

#### OrganizationPackageLicensePolicy

| Field | Description |
| --- | --- |
| `allow_unknown_licenses` |  |
| `created_at` |  |
| `description` |  |
| `name` |  |
| `on_violation_quarantine` |  |
| `package_query_string` |  |
| `slug_perm` |  |
| `spdx_identifiers` |  |
| `updated_at` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/orgs/{org}/license-policy/`

#### OrganizationPackageVulnerabilityPolicy

| Field | Description |
| --- | --- |
| `allow_unknown_severity` | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
| `created_at` |  |
| `description` |  |
| `min_severity` |  |
| `name` |  |
| `on_violation_quarantine` |  |
| `package_query_string` |  |
| `slug_perm` |  |
| `updated_at` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/orgs/{org}/vulnerability-policy/`

#### OrganizationSamlAuth

| Field | Description |
| --- | --- |
| `saml_auth_enabled` |  |
| `saml_auth_enforced` |  |
| `saml_metadata_inline` | If configured, SAML metadata will be used as entered instead of retrieved from a remote URL. |
| `saml_metadata_url` | If configured, SAML metadata be retrieved from a remote URL. |

Operations: Load, Update.

API path: `/orgs/{org}/saml-authentication`

#### OrganizationTeam

| Field | Description |
| --- | --- |
| `description` |  |
| `name` |  |
| `slug` |  |
| `slug_perm` |  |
| `visibility` |  |

Operations: Create, List, Load, Update.

API path: `/orgs/{org}/teams/`

#### OrganizationTeamMember

| Field | Description |
| --- | --- |
| `role` |  |
| `user` |  |

Operations: Create, List.

API path: `/orgs/{org}/teams/{team}/members`

#### Oss

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### P2n

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Package

| Field | Description |
| --- | --- |
| `active` | Number of packages with at least 1 download |
| `architectures` |  |
| `backend_kind` |  |
| `bandwidth` |  |
| `cdn_url` |  |
| `checksum_md5` |  |
| `checksum_sha1` |  |
| `checksum_sha256` |  |
| `checksum_sha512` |  |
| `count` |  |
| `dep_type` |  |
| `dependencies_checksum_md5` | A checksum of all of the package's dependencies. |
| `dependencies_url` |  |
| `description` | A textual description of this package. |
| `display_name` |  |
| `distro` | The distributions supported by this package format |
| `distro_version` | A list of the versions for this distribution |
| `downloads` |  |
| `epoch` | The epoch of the package version (if any). |
| `extension` |  |
| `filename` |  |
| `files` |  |
| `format` |  |
| `format_url` |  |
| `freeable_storage` | Amount of storage that will be freed if this package is deleted |
| `fully_qualified_name` |  |
| `identifier_perm` | Unique and permanent identifier for the package. |
| `identifiers` | Return a map of identifier field names and their values. |
| `inactive` | Packages with zero downloads |
| `indexed` |  |
| `is_cancellable` |  |
| `is_copyable` |  |
| `is_deleteable` |  |
| `is_downloadable` |  |
| `is_moveable` |  |
| `is_quarantinable` |  |
| `is_quarantined` |  |
| `is_resyncable` |  |
| `is_security_scannable` |  |
| `is_sync_awaiting` |  |
| `is_sync_completed` |  |
| `is_sync_failed` |  |
| `is_sync_in_flight` |  |
| `is_sync_in_progress` |  |
| `last_push` |  |
| `license` | The license of this package. |
| `name` | The name of this package. |
| `namespace` |  |
| `namespace_url` |  |
| `num_downloads` |  |
| `num_files` |  |
| `operator` |  |
| `origin_repository` |  |
| `origin_repository_url` |  |
| `package_type` | The type of package contents. |
| `policy_violated` | Whether or not the package has violated any policy. |
| `release` | The release of the package version (if any). |
| `repository` | The repository the package will be copied to. |
| `repository_url` |  |
| `security_scan_completed_at` | The datetime the security scanning was completed. |
| `security_scan_started_at` | The datetime the security scanning was started. |
| `security_scan_status` |  |
| `security_scan_status_updated_at` | The datetime the security scanning status was updated. |
| `self_html_url` |  |
| `self_url` |  |
| `signature_url` |  |
| `size` | The calculated size of the package. |
| `slug` | The public unique identifier for the package. |
| `slug_perm` |  |
| `stage` | The synchronisation (in progress) stage of the package. |
| `stage_str` |  |
| `stage_updated_at` | The datetime the package stage was updated at. |
| `status` | The synchronisation status of the package. |
| `status_reason` | A textual description for the synchronous status reason (if any |
| `status_str` |  |
| `status_updated_at` | The datetime the package status was updated at. |
| `status_url` |  |
| `subtype` |  |
| `summary` | A one-liner synopsis of this package. |
| `sync_finished_at` | The datetime the package sync was finished at. |
| `sync_progress` | Synchronisation progress (from 0-100) |
| `tags` | All tags on the package, grouped by tag type. |
| `tags_immutable` | All tags on the package, grouped by tag type. |
| `total` | Total number of packages in repo |
| `type_display` |  |
| `uploaded_at` | The date this package was uploaded. |
| `uploader` |  |
| `uploader_url` |  |
| `version` | The raw version for this package. |
| `version_orig` |  |
| `vulnerability_scan_results_url` |  |

Operations: Create, List, Load, Remove.

API path: `/packages/{owner}/{repo}/{identifier}/copy/`

#### PackageDenyPolicy

| Field | Description |
| --- | --- |
| `action` |  |
| `created_at` |  |
| `description` |  |
| `enabled` | Whether this rule is enabled or disabled. |
| `name` |  |
| `package_query_string` | Packages that match this query will trigger this deny rule. |
| `slug_perm` |  |
| `status` |  |
| `updated_at` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/orgs/{org}/deny-policy/`

#### PackageFilePartsUpload

| Field | Description |
| --- | --- |
| `identifier` | The identifier for the file to use uploading parts. |
| `upload_querystring` | The querystring to use for the next-step PUT upload. |
| `upload_url` | The URL to use for the next-step PUT upload |

Operations: Load.

API path: `/files/{owner}/{repo}/{identifier}/info/`

#### PackageFileUpload

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/files/{owner}/{repo}/{identifier}/complete/`

#### PackageLicensePolicyEvaluation

| Field | Description |
| --- | --- |
| `allow_unknown_licenses` |  |
| `created_at` |  |
| `description` |  |
| `evaluation_count` |  |
| `name` |  |
| `on_violation_quarantine` |  |
| `package_query_string` |  |
| `policy` |  |
| `slug_perm` |  |
| `spdx_identifiers` |  |
| `status` |  |
| `updated_at` |  |
| `url` |  |
| `violation_count` |  |

Operations: Create, List, Load.

API path: `/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/`

#### PackageVersionBadge

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/badges/version/{owner}/{repo}/{package_format}/{package_name}/{package_version}/{package_identifiers}/`

#### PackageVulnerabilityPolicyEvaluation

| Field | Description |
| --- | --- |
| `allow_unknown_severity` | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
| `created_at` |  |
| `description` |  |
| `evaluation_count` |  |
| `min_severity` |  |
| `name` |  |
| `on_violation_quarantine` |  |
| `package_query_string` |  |
| `policy` |  |
| `slug_perm` |  |
| `status` |  |
| `updated_at` |  |
| `url` |  |
| `violation_count` |  |

Operations: Create, List, Load.

API path: `/orgs/{org}/vulnerability-policy/{policy_slug_perm}/evaluation/`

#### Privilege

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Profile

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ProviderSetting

| Field | Description |
| --- | --- |
| `claims` | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `enabled` | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | The name of the provider settings are being configured for |
| `provider_url` | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | The service accounts associated with these provider settings. |
| `slug` | The slug of the provider settings |
| `slug_perm` | The unique, immutable identifier of the provider settings. |

Operations: List, Load.

API path: `/orgs/{org}/openid-connect/`

#### ProviderSettingsWrite

| Field | Description |
| --- | --- |
| `claims` | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `dynamic_mappings` | The dynamic mappings of `mapping_claim` values to service accounts. |
| `enabled` | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | The name of the provider settings are being configured for |
| `provider_url` | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | The service accounts associated with these provider settings. |
| `slug` | The slug of the provider settings |
| `slug_perm` | The unique, immutable identifier of the provider settings. |

Operations: Create, Patch, Update.

API path: `/orgs/{org}/openid-connect/`

#### Python

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/python/`

#### Quarantine

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Quota

| Field | Description |
| --- | --- |
| `display` |  |
| `history` |  |
| `raw` |  |

Operations: Load.

API path: `/quota/{owner}/`

#### Raw

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Refresh

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Regenerate

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Repo

| Field | Description |
| --- | --- |
| `cdn_url` | Base URL from which packages and other artifacts are downloaded. |
| `content_kind` | The repository content kind determines whether this repository contains packages, or provides a distribution of packages from other repositories. |
| `contextual_auth_realm` | If checked, missing credentials for this repository where basic authentication is required shall present an enriched value in the 'WWW-Authenticate' header containing the namespace and repository. |
| `copy_own` | If checked, users can copy any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `copy_packages` | This defines the minimum level of privilege required for a user to copy packages. |
| `cosign_signing_enabled` | When enabled, all pushed (or pulled from upstream) OCI packages and artifacts will be signed using cosign with the repository's ECDSA key. |
| `created_at` |  |
| `default_privilege` | This defines the default level of privilege that all of your organization members have for this repository. |
| `delete_own` | If checked, users can delete any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `delete_packages` | This defines the minimum level of privilege required for a user to delete packages. |
| `deleted_at` | The datetime the repository was manually deleted at. |
| `description` | A description of the repository's purpose/contents. |
| `distributes` | The repositories distributed through this repo. |
| `docker_refresh_tokens_enabled` | If checked, refresh tokens will be issued in addition to access tokens for Docker authentication. |
| `ecdsa_keys` |  |
| `enforce_eula` | If checked, downloads will explicitly require acceptance of an EULA. |
| `gpg_keys` |  |
| `index_files` | If checked, files contained in packages will be indexed, which increase the synchronisation time required for packages. |
| `is_open_source` |  |
| `is_private` |  |
| `is_public` |  |
| `manage_entitlements_privilege` | This defines the minimum level of privilege required for a user to manage entitlement tokens with private repositories. |
| `move_own` | If checked, users can move any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `move_packages` | This defines the minimum level of privilege required for a user to move packages. |
| `name` | A descriptive name for the repository. |
| `namespace` | Namespace to which this repository belongs. |
| `namespace_url` | API endpoint where data about this namespace can be retrieved. |
| `nuget_native_signing_enabled` | When enabled, all pushed (or pulled from upstream) nuget packages and artifacts will be signed using the repository's X.509 RSA certificate. |
| `num_downloads` | The number of downloads for packages in the repository. |
| `num_policy_violated_packages` | Number of packages with policy violations in a repository. |
| `num_quarantined_packages` | Number of quarantined packages in a repository. |
| `open_source_license` | The SPDX identifier of the open source license. |
| `open_source_project_url` | The URL to the Open-Source project, used for validating that the project meets the requirements for Open-Source. |
| `package_count` | The number of packages in the repository. |
| `package_group_count` | The number of groups in the repository. |
| `proxy_npmjs` | If checked, Npm packages that are not in the repository when requested by clients will automatically be proxied from the public npmjs.org registry. |
| `proxy_pypi` | If checked, Python packages that are not in the repository when requested by clients will automatically be proxied from the public pypi.python.org registry. |
| `raw_package_index_enabled` | If checked, HTML and JSON indexes will be generated that list all available raw packages in the repository. |
| `raw_package_index_signatures_enabled` | If checked, the HTML and JSON indexes will display raw package GPG signatures alongside the index packages. |
| `replace_packages` | This defines the minimum level of privilege required for a user to republish packages. |
| `replace_packages_by_default` | If checked, uploaded packages will overwrite/replace any others with the same attributes (e.g. |
| `repository_type` | The repository type changes how it is accessed and billed. |
| `repository_type_str` | The repository type changes how it is accessed and billed. |
| `resync_own` | If checked, users can resync any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `resync_packages` | This defines the minimum level of privilege required for a user to resync packages. |
| `scan_own` | If checked, users can scan any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `scan_packages` | This defines the minimum level of privilege required for a user to scan packages. |
| `self_html_url` | Website URL for this repository. |
| `self_url` | API endpoint where data about this repository can be retrieved. |
| `show_setup_all` | If checked, the Set Me Up help for all formats will always be shown, even if you don't have packages of that type uploaded. |
| `size` | The calculated size of the repository. |
| `size_str` | The calculated size of the repository (human readable). |
| `slug` | The slug identifies the repository in URIs. |
| `slug_perm` | The slug_perm immutably identifies the repository. |
| `storage_region` | The Cloudsmith region in which package files are stored. |
| `strict_npm_validation` | If checked, npm packages will be validated strictly to ensure the package matches specifcation. |
| `tag_pre_releases_as_latest` | If checked, packages pushed with a pre-release component on that version will be marked with the 'latest' tag. |
| `use_debian_labels` | If checked, a 'Label' field will be present in Debian-based repositories. |
| `use_default_cargo_upstream` | If checked, dependencies of uploaded Cargo crates which do not set an explicit value for "registry" will be assumed to be available from crates.io. |
| `use_entitlements_privilege` | This defines the minimum level of privilege required for a user to see/use entitlement tokens with private repositories. |
| `use_noarch_packages` | If checked, noarch packages (if supported) are enabled in installations/configurations. |
| `use_source_packages` | If checked, source packages (if supported) are enabled in installations/configurations. |
| `use_vulnerability_scanning` | If checked, vulnerability scanning will be enabled for all supported packages within this repository. |
| `user_entitlements_enabled` | If checked, users can use and manage their own user-specific entitlement token for the repository (if private). |
| `view_statistics` | This defines the minimum level of privilege required for a user to view repository statistics, to include entitlement-based usage, if applicable. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/repos/{owner}/{identifier}/geoip/disable/`

#### RepositoryAuditLog

| Field | Description |
| --- | --- |
| `actor` |  |
| `actor_ip_address` |  |
| `actor_kind` |  |
| `actor_location` |  |
| `actor_slug_perm` |  |
| `actor_url` |  |
| `context` |  |
| `event` |  |
| `event_at` |  |
| `object` |  |
| `object_kind` |  |
| `object_slug_perm` |  |
| `uuid` |  |

Operations: List.

API path: `/audit-log/{owner}/{repo}/`

#### RepositoryEcdsaKey

| Field | Description |
| --- | --- |
| `active` | If selected this is the active key for this repository. |
| `created_at` |  |
| `default` | If selected this is the default key for this repository. |
| `fingerprint` | The long identifier used by ECDSA for this key. |
| `fingerprint_short` |  |
| `public_key` | The public key given to repository users. |
| `ssh_fingerprint` | The SSH fingerprint used by ECDSA for this key. |

Operations: Create, Load.

API path: `/repos/{owner}/{identifier}/ecdsa/`

#### RepositoryGeoIpRule

| Field | Description |
| --- | --- |
| `cidr` |  |
| `country_code` |  |

Operations: Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/geoip`

#### RepositoryGeoIpStatus

| Field | Description |
| --- | --- |
| `geoip_enabled` | If checked, any access to the website or downloads for this repository is allowed/denied according to the configured Geo/IP restriction rules. |

Operations: Load.

API path: `/repos/{owner}/{identifier}/geoip/status/`

#### RepositoryGeoIpTestAddress

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/repos/{owner}/{identifier}/geoip/test/`

#### RepositoryGpgKey

| Field | Description |
| --- | --- |
| `active` | If selected this is the active key for this repository. |
| `comment` |  |
| `created_at` |  |
| `default` | If selected this is the default key for this repository. |
| `fingerprint` | The long identifier used by GPG for this key. |
| `fingerprint_short` |  |
| `public_key` | The public key given to repository users. |

Operations: Create, Load.

API path: `/repos/{owner}/{identifier}/gpg/`

#### RepositoryPrivilegeInput

| Field | Description |
| --- | --- |
| `privilege` | The level of privilege that the user or team should be granted to the specified repository. |
| `service` | The service identifier (slug). |
| `team` | The team identifier (slug). |
| `user` | The user identifier (slug). |

Operations: List.

API path: `/repos/{owner}/{identifier}/privileges`

#### RepositoryRetentionRule

| Field | Description |
| --- | --- |
| `retention_count_limit` | The maximum X number of packages to retain. |
| `retention_days_limit` | The X number of days of packages to retain. |
| `retention_enabled` | If checked, the retention lifecycle rules will be activated for the repository. |
| `retention_group_by_format` | If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are diffe… |
| `retention_group_by_name` | If checked, retention will apply to groups of packages by name rather than all packages.<br>For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgB… |
| `retention_group_by_package_type` | If checked, retention will apply to packages by package type (e.g. |
| `retention_package_query_string` | A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will pre… |
| `retention_size_limit` | The maximum X total size (in bytes) of packages to retain. |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/retention/`

#### RepositoryRsaKey

| Field | Description |
| --- | --- |
| `active` | If selected this is the active key for this repository. |
| `created_at` |  |
| `default` | If selected this is the default key for this repository. |
| `fingerprint` | The long identifier used by RSA for this key. |
| `fingerprint_short` |  |
| `public_key` | The public key given to repository users. |
| `ssh_fingerprint` | The SSH fingerprint used by RSA for this key. |

Operations: Create, Load.

API path: `/repos/{owner}/{identifier}/rsa/`

#### RepositoryToken

| Field | Description |
| --- | --- |
| `clients` |  |
| `created_at` | The datetime the token was updated at. |
| `created_by` |  |
| `created_by_url` |  |
| `default` | If selected this is the default token for this repository. |
| `disable_url` |  |
| `downloads` |  |
| `enable_url` |  |
| `eula_accepted` |  |
| `eula_accepted_at` | The datetime the EULA was accepted at. |
| `eula_accepted_from` |  |
| `eula_required` | If checked, a EULA acceptance is required for this token. |
| `has_limits` |  |
| `identifier` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` |  |
| `limit_bandwidth` | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` |  |
| `limit_date_range_from` | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | The maximum number of downloads allowed for the token. |
| `limit_package_query` | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` |  |
| `name` |  |
| `refresh_url` |  |
| `reset_url` |  |
| `scheduled_reset_at` | The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero. |
| `scheduled_reset_period` |  |
| `self_url` |  |
| `slug_perm` |  |
| `token` |  |
| `updated_at` | The datetime the token was updated at. |
| `updated_by` |  |
| `updated_by_url` |  |
| `usage` |  |
| `user` |  |
| `user_url` |  |

Operations: Create, List, Load, Update.

API path: `/entitlements/{owner}/{repo}/`

#### RepositoryTokenRefresh

| Field | Description |
| --- | --- |
| `clients` |  |
| `created_at` | The datetime the token was updated at. |
| `created_by` |  |
| `created_by_url` |  |
| `default` | If selected this is the default token for this repository. |
| `disable_url` |  |
| `downloads` |  |
| `enable_url` |  |
| `eula_accepted` |  |
| `eula_accepted_at` | The datetime the EULA was accepted at. |
| `eula_accepted_from` |  |
| `eula_required` | If checked, a EULA acceptance is required for this token. |
| `has_limits` |  |
| `identifier` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` |  |
| `limit_bandwidth` | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` |  |
| `limit_date_range_from` | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | The maximum number of downloads allowed for the token. |
| `limit_package_query` | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` |  |
| `name` |  |
| `refresh_url` |  |
| `reset_url` |  |
| `scheduled_reset_at` | The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero. |
| `scheduled_reset_period` |  |
| `self_url` |  |
| `slug_perm` |  |
| `token` |  |
| `updated_at` | The datetime the token was updated at. |
| `updated_by` |  |
| `updated_by_url` |  |
| `usage` |  |
| `user` |  |
| `user_url` |  |

Operations: Create.

API path: `/entitlements/{owner}/{repo}/{identifier}/refresh/`

#### RepositoryTokenSync

| Field | Description |
| --- | --- |
| `tokens` | The entitlements that have been synchronised. |

Operations: Create.

API path: `/entitlements/{owner}/{repo}/sync/`

#### RepositoryWebhook

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_by` |  |
| `created_by_url` |  |
| `disable_reason` |  |
| `disable_reason_str` |  |
| `events` |  |
| `identifier` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | If enabled, the webhook will trigger on subscribed events and send payloads to the configured target URL. |
| `is_last_response_bad` |  |
| `last_response_status` |  |
| `last_response_status_str` |  |
| `num_sent` |  |
| `package_query` | The package-based search query for webhooks to fire. |
| `request_body_format` | The format of the payloads for webhook requests. |
| `request_body_format_str` |  |
| `request_body_template_format` | The format of the payloads for webhook requests. |
| `request_body_template_format_str` |  |
| `request_content_type` | The value that will be sent for the 'Content Type' header. |
| `secret_header` | The header to send the predefined secret in. |
| `self_url` |  |
| `slug_perm` |  |
| `target_url` | The destination URL that webhook payloads will be POST'ed to. |
| `templates` |  |
| `updated_at` |  |
| `updated_by` |  |
| `updated_by_url` |  |
| `verify_ssl` | If enabled, SSL certificates is verified when webhooks are sent. |

Operations: Create, List, Load, Update.

API path: `/webhooks/{owner}/{repo}/`

#### RepositoryX509EcdsaCertificate

| Field | Description |
| --- | --- |
| `active` | If selected this is the active key for this repository. |
| `certificate` | The issued certificate. |
| `certificate_chain` | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` |  |
| `certificate_chain_fingerprint_short` |  |
| `certificate_fingerprint` | The SHA-256 long identifier used |
| `certificate_fingerprint_short` |  |
| `created_at` |  |
| `default` | If selected this is the default key for this repository. |
| `issuing_status` |  |

Operations: Load.

API path: `/repos/{owner}/{identifier}/x509-ecdsa/`

#### RepositoryX509RsaCertificate

| Field | Description |
| --- | --- |
| `active` | If selected this is the active key for this repository. |
| `certificate` | The issued certificate. |
| `certificate_chain` | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` |  |
| `certificate_chain_fingerprint_short` |  |
| `certificate_fingerprint` | The SHA-256 long identifier used |
| `certificate_fingerprint_short` |  |
| `created_at` |  |
| `default` | If selected this is the default key for this repository. |
| `issuing_status` |  |

Operations: Load.

API path: `/repos/{owner}/{identifier}/x509-rsa/`

#### Reset

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ResourcesRateCheck

| Field | Description |
| --- | --- |
| `interval` | The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window. |
| `limit` | The maximum number of requests that you are permitted to send per hour |
| `remaining` | The number of requests that are remaining in the current rate limit window |
| `reset` | The UTC epoch timestamp at which the current rate limit window will reset |
| `reset_iso_8601` | The ISO 8601 datetime at which the current rate limit window will reset |
| `throttled` | If true, throttling is currently being enforced. |

Operations: Load.

API path: `/rates/limits/`

#### Resync

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Retention

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Rpm

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `distro_version` | The distribution version that packages found on this upstream will be associated with. |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | The GPG signature verification mode for this upstream. |
| `include_sources` | When checked, source packages will be available from this upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verification_status` | The signature verification status for this upstream. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/rpm/`

#### Rsa

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Ruby

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/ruby/`

#### SamlGroupSync

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Scan

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Self

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Service

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_by` |  |
| `created_by_url` |  |
| `description` | The description of the service |
| `key` | The API key of the service |
| `key_expires_at` | The time at which the API key will expire. |
| `name` | The name of the service |
| `role` | The role of the service. |
| `slug` | The slug of the service |
| `teams` |  |

Operations: Create, List, Load, Update.

API path: `/orgs/{org}/services/`

#### Status

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### StatusBasic

| Field | Description |
| --- | --- |
| `detail` | The message describing the state of the API. |
| `version` | The current version for the Cloudsmith service. |

Operations: Load.

API path: `/status/check/basic/`

#### StorageRegion

| Field | Description |
| --- | --- |
| `label` | Name of the storage region |
| `slug` | Slug for the storage region |

Operations: List, Load.

API path: `/storage-regions/`

#### Swift

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/swift/`

#### Sync

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Tag

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Team

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Terraform

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Test

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Token

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### TransferRegion

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### User

| Field | Description |
| --- | --- |
| `created` | The time at which the API key was created. |
| `key` | The unique API key used for authentication. |
| `slug_perm` | The slug_perm for token. |

Operations: List.

API path: `/user/tokens/`

#### UserAuthToken

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/user/token/`

#### UserAuthenticationToken

| Field | Description |
| --- | --- |
| `created` | The time at which the API key was created. |
| `key` | The unique API key used for authentication. |
| `slug_perm` | The slug_perm for token. |

Operations: Create, Update.

API path: `/user/tokens/`

#### UserBrief

| Field | Description |
| --- | --- |
| `authenticated` | If true then you're logged in as a user. |
| `email` | Your email address that we use to contact you. |
| `name` | The full name of the user (if any). |
| `profile_url` | The URL for the full profile of the user. |
| `self_url` |  |
| `slug` |  |
| `slug_perm` |  |

Operations: Load.

API path: `/user/self/`

#### UserProfile

| Field | Description |
| --- | --- |
| `company` |  |
| `first_name` |  |
| `job_title` |  |
| `joined_at` |  |
| `last_name` |  |
| `name` |  |
| `slug` |  |
| `slug_perm` |  |
| `tagline` | Your tagline is a sentence about you. |
| `url` |  |

Operations: Load.

API path: `/users/profile/{slug}/`

#### Vagrant

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Validate

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Version

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Vulnerability

| Field | Description |
| --- | --- |
| `created_at` | The time this scan result was stored. |
| `has_vulnerabilities` | Do the results contain any known vulnerabilities? |
| `identifier` |  |
| `max_severity` |  |
| `num_vulnerabilities` |  |
| `package` |  |
| `scan_id` | Deprecated (23-05-15): Please use 'identifier' instead. |
| `scans` |  |

Operations: List, Load.

API path: `/vulnerabilities/{owner}/{repo}/{package}/`

#### VulnerabilityPolicy

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Webhook

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/webhooks/{owner}/{repo}/{identifier}/`

#### X509Ecdsa

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### X509Rsa

| Field | Description |
| --- | --- |

Operations: .

API path: ``



## Entities


### Abort

Create an instance: `abort = client.Abort()`


### Alpine

Create an instance: `alpine = client.Alpine()`


### AuditLog

Create an instance: `audit_log = client.AuditLog()`


### Basic

Create an instance: `basic = client.Basic()`


### Cargo

Create an instance: `cargo = client.Cargo()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
cargo = client.Cargo().load({"id": "cargo_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
cargos = client.Cargo().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
cargo = client.Cargo().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### Cocoapod

Create an instance: `cocoapod = client.Cocoapod()`


### Complete

Create an instance: `complete = client.Complete()`


### Composer

Create an instance: `composer = client.Composer()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
composer = client.Composer().load({"id": "composer_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
composers = client.Composer().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
composer = client.Composer().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### Conan

Create an instance: `conan = client.Conan()`


### Conda

Create an instance: `conda = client.Conda()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
conda = client.Conda().load({"id": "conda_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
condas = client.Conda().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
conda = client.Conda().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### Copy

Create an instance: `copy = client.Copy()`


### Cran

Create an instance: `cran = client.Cran()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
cran = client.Cran().load({"id": "cran_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
crans = client.Cran().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
cran = client.Cran().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### Dart

Create an instance: `dart = client.Dart()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
dart = client.Dart().load({"id": "dart_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
darts = client.Dart().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
dart = client.Dart().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### Deb

Create an instance: `deb = client.Deb()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `component` | `str` | The component to fetch from the upstream |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `distro_versions` | `list` | The distribution version that packages found on this upstream could be associated with. |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `str` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `str` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `str` | The GPG signature verification mode for this upstream. |
| `include_sources` | `bool` | When true, source packages will be available from this upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_distribution` | `str` | The distribution to fetch from the upstream |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verification_status` | `str` | The signature verification status for this upstream. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
deb = client.Deb().load({"id": "deb_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
debs = client.Deb().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
deb = client.Deb().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "distro_versions": [],  # list
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### DenyPolicy

Create an instance: `deny_policy = client.DenyPolicy()`


### Dependency

Create an instance: `dependency = client.Dependency()`


### Disable

Create an instance: `disable = client.Disable()`


### DistributionFull

Create an instance: `distribution_full = client.DistributionFull()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `format` | `str` |  |
| `format_url` | `str` |  |
| `name` | `str` |  |
| `self_url` | `str` |  |
| `slug` | `str` | The slug identifier for this distribution |
| `variants` | `str` |  |
| `versions` | `list` | A list of the versions for this distribution |

#### Example: Load

```python
distribution_full = client.DistributionFull().load({"slug": "slug"})
```

#### Example: List

```python
distribution_fulls = client.DistributionFull().list()
```


### Distro

Create an instance: `distro = client.Distro()`


### Docker

Create an instance: `docker = client.Docker()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
docker = client.Docker().load({"id": "docker_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
dockers = client.Docker().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
docker = client.Docker().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### DynamicMapping

Create an instance: `dynamic_mapping = client.DynamicMapping()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claim_value` | `str` | The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`. |
| `service_account` | `str` | The service account associated with the provider setting and `claim_value` Note: This field and the dynamic mappings feature are still in early access. |

#### Example: Load

```python
dynamic_mapping = client.DynamicMapping().load({"id": "dynamic_mapping_id", "openid_connect_id": "openid_connect_id", "org_id": "org_id"})
```

#### Example: List

```python
dynamic_mappings = client.DynamicMapping().list({"org_id": "example", "provider_setting": "example"})
```


### Ecdsa

Create an instance: `ecdsa = client.Ecdsa()`


### Enable

Create an instance: `enable = client.Enable()`


### Entitlement

Create an instance: `entitlement = client.Entitlement()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `int` | Number of packages with at least 1 download |
| `bandwidth` | `dict` |  |
| `downloads` | `dict` |  |
| `inactive` | `int` | Packages with zero downloads |
| `total` | `int` | Total number of packages in repo |

#### Example: Load

```python
entitlement = client.Entitlement().load({"id": "entitlement_id"})
```

#### Example: Create

```python
entitlement = client.Entitlement().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
    "bandwidth": {},  # dict
    "downloads": {},  # dict
})
```


### Evaluation

Create an instance: `evaluation = client.Evaluation()`


### File

Create an instance: `file = client.File()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
file = client.File().create({
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
})
```


### Format

Create an instance: `format = client.Format()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` | Description of the package format |
| `distributions` | `list` | The distributions supported by this package format |
| `extensions` | `list` | A non-exhaustive list of extensions supported |
| `name` | `str` | Name for the package format |
| `premium` | `bool` | If true the package format is a premium-only feature |
| `premium_plan_id` | `str` | The minimum plan id required for this package format |
| `premium_plan_name` | `str` | The minimum plan name required for this package format |
| `slug` | `str` | Slug for the package format |
| `supports` | `dict` | A set of what the package format supports |

#### Example: Load

```python
format = client.Format().load({"id": "format_id"})
```

#### Example: List

```python
formats = client.Format().list()
```


### Geoip

Create an instance: `geoip = client.Geoip()`


### Gon

Create an instance: `gon = client.Gon()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
gon = client.Gon().load({"identifier": "identifier", "owner": "owner", "slug_perm": "slug_perm"})
```

#### Example: List

```python
gons = client.Gon().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
gon = client.Gon().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### Gpg

Create an instance: `gpg = client.Gpg()`


### Group

Create an instance: `group = client.Group()`


### Helm

Create an instance: `helm = client.Helm()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
helm = client.Helm().load({"id": "helm_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
helms = client.Helm().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
helm = client.Helm().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### Hex

Create an instance: `hex = client.Hex()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
hex = client.Hex().load({"id": "hex_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
hexs = client.Hex().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
hex = client.Hex().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### History

Create an instance: `history = client.History()`


### Huggingface

Create an instance: `huggingface = client.Huggingface()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
huggingface = client.Huggingface().load({"id": "huggingface_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
huggingfaces = client.Huggingface().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
huggingface = client.Huggingface().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### Info

Create an instance: `info = client.Info()`


### Invite

Create an instance: `invite = client.Invite()`


### LicensePolicy

Create an instance: `license_policy = client.LicensePolicy()`


### Limit

Create an instance: `limit = client.Limit()`


### Luarock

Create an instance: `luarock = client.Luarock()`


### Maven

Create an instance: `maven = client.Maven()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `str` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `str` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `str` | The GPG signature verification mode for this upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verification_status` | `str` | The signature verification status for this upstream. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
maven = client.Maven().load({"id": "maven_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
mavens = client.Maven().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
maven = client.Maven().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### Member

Create an instance: `member = client.Member()`


### Move

Create an instance: `move = client.Move()`


### Namespace

Create an instance: `namespace = client.Namespace()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `str` |  |
| `slug` | `str` |  |
| `slug_perm` | `str` |  |
| `type_name` | `str` |  |

#### Example: Load

```python
namespace = client.Namespace().load({"id": "namespace_id"})
```

#### Example: List

```python
namespaces = client.Namespace().list()
```


### NamespaceAuditLog

Create an instance: `namespace_audit_log = client.NamespaceAuditLog()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `str` |  |
| `actor_ip_address` | `str` |  |
| `actor_kind` | `str` |  |
| `actor_location` | `dict` |  |
| `actor_slug_perm` | `str` |  |
| `actor_url` | `str` |  |
| `context` | `str` |  |
| `event` | `str` |  |
| `event_at` | `str` |  |
| `object` | `str` |  |
| `object_kind` | `str` |  |
| `object_slug_perm` | `str` |  |
| `target` | `str` |  |
| `target_kind` | `str` |  |
| `target_slug_perm` | `str` |  |
| `uuid` | `str` |  |

#### Example: Load

```python
namespace_audit_log = client.NamespaceAuditLog().load({"id": "namespace_audit_log_id"})
```


### Npm

Create an instance: `npm = client.Npm()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
npm = client.Npm().load({"id": "npm_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
npms = client.Npm().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
npm = client.Npm().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### Nuget

Create an instance: `nuget = client.Nuget()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
nuget = client.Nuget().load({"id": "nuget_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
nugets = client.Nuget().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
nuget = client.Nuget().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### OpenidConnect

Create an instance: `openid_connect = client.OpenidConnect()`


### Org

Create an instance: `org = client.Org()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `country` | `str` |  |
| `created_at` | `str` |  |
| `event_at` | `str` |  |
| `location` | `str` | The city/town/area your organization is based in. |
| `name` | `str` |  |
| `package` | `dict` |  |
| `policy` | `dict` |  |
| `reasons` | `list` |  |
| `slug` | `str` |  |
| `slug_perm` | `str` |  |
| `tagline` | `str` | A short public descriptive for your organization. |
| `vulnerability_scan_results` | `dict` |  |

#### Example: Load

```python
org = client.Org().load({"id": "org_id"})
```

#### Example: List

```python
orgs = client.Org().list()
```

#### Example: Create

```python
org = client.Org().create({
    "id": "example_id",  # str
    "name": "example_name",  # str
    "package": {},  # dict
    "policy": {},  # dict
    "reasons": [],  # list
    "vulnerability_scan_results": {},  # dict
})
```


### OrganizationGroupSync

Create an instance: `organization_group_sync = client.OrganizationGroupSync()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `idp_key` | `str` |  |
| `idp_value` | `str` |  |
| `role` | `str` |  |
| `slug_perm` | `str` |  |
| `team` | `str` |  |

#### Example: List

```python
organization_group_syncs = client.OrganizationGroupSync().list({"org_id": "example"})
```

#### Example: Create

```python
organization_group_sync = client.OrganizationGroupSync().create({
    "org_id": "example_org_id",  # str
    "idp_key": "example_idp_key",  # str
    "idp_value": "example_idp_value",  # str
    "team": "example_team",  # str
})
```


### OrganizationGroupSyncStatus

Create an instance: `organization_group_sync_status = client.OrganizationGroupSyncStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `saml_group_sync_status` | `bool` |  |

#### Example: Load

```python
organization_group_sync_status = client.OrganizationGroupSyncStatus().load({"org_id": "org_id"})
```


### OrganizationInvite

Create an instance: `organization_invite = client.OrganizationInvite()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` | The email of the user to be invited. |
| `expires_at` | `str` |  |
| `inviter` | `str` |  |
| `inviter_url` | `str` |  |
| `org` | `str` |  |
| `role` | `str` | The role to be assigned to the invited user. |
| `slug_perm` | `str` |  |
| `teams` | `list` |  |
| `user` | `str` | The slug of the user to be invited. |
| `user_url` | `str` |  |

#### Example: List

```python
organization_invites = client.OrganizationInvite().list({"org_id": "example"})
```

#### Example: Create

```python
organization_invite = client.OrganizationInvite().create({
    "org_id": "example_org_id",  # str
})
```


### OrganizationInviteExtend

Create an instance: `organization_invite_extend = client.OrganizationInviteExtend()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` | The email of the user to be invited. |
| `expires_at` | `str` |  |
| `inviter` | `str` |  |
| `inviter_url` | `str` |  |
| `org` | `str` |  |
| `role` | `str` | The role to be assigned to the invited user. |
| `slug_perm` | `str` | The slug_perm of the invite to be extended. |
| `teams` | `list` |  |
| `user` | `str` | The slug of the user to be invited. |
| `user_url` | `str` |  |

#### Example: Create

```python
organization_invite_extend = client.OrganizationInviteExtend().create({
    "org_id": "example_org_id",  # str
    "slug_perm": "example_slug_perm",  # Any
})
```


### OrganizationMembership

Create an instance: `organization_membership = client.OrganizationMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` |  |
| `has_two_factor` | `bool` |  |
| `is_active` | `bool` |  |
| `joined_at` | `str` |  |
| `last_login_at` | `str` |  |
| `last_login_method` | `str` |  |
| `role` | `str` |  |
| `user` | `str` |  |
| `user_id` | `str` |  |
| `user_name` | `str` |  |
| `user_url` | `str` |  |
| `visibility` | `str` |  |

#### Example: Load

```python
organization_membership = client.OrganizationMembership().load({"member": "member", "org_id": "org_id"})
```

#### Example: List

```python
organization_memberships = client.OrganizationMembership().list({"org_id": "example"})
```


### OrganizationMembershipRoleUpdate

Create an instance: `organization_membership_role_update = client.OrganizationMembershipRoleUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` |  |
| `has_two_factor` | `bool` |  |
| `joined_at` | `str` |  |
| `last_login_at` | `str` |  |
| `last_login_method` | `str` |  |
| `role` | `str` |  |
| `user` | `str` |  |
| `user_id` | `str` |  |
| `user_name` | `str` |  |
| `user_url` | `str` |  |
| `visibility` | `str` |  |


### OrganizationMembershipVisibilityUpdate

Create an instance: `organization_membership_visibility_update = client.OrganizationMembershipVisibilityUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` |  |
| `has_two_factor` | `bool` |  |
| `joined_at` | `str` |  |
| `last_login_at` | `str` |  |
| `last_login_method` | `str` |  |
| `role` | `str` |  |
| `user` | `str` |  |
| `user_id` | `str` |  |
| `user_name` | `str` |  |
| `user_url` | `str` |  |
| `visibility` | `str` |  |


### OrganizationPackageLicensePolicy

Create an instance: `organization_package_license_policy = client.OrganizationPackageLicensePolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_unknown_licenses` | `bool` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `name` | `str` |  |
| `on_violation_quarantine` | `bool` |  |
| `package_query_string` | `str` |  |
| `slug_perm` | `str` |  |
| `spdx_identifiers` | `list` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
organization_package_license_policy = client.OrganizationPackageLicensePolicy().load({"id": "organization_package_license_policy_id", "org_id": "org_id"})
```

#### Example: List

```python
organization_package_license_policys = client.OrganizationPackageLicensePolicy().list({"org_id": "example"})
```

#### Example: Create

```python
organization_package_license_policy = client.OrganizationPackageLicensePolicy().create({
    "org_id": "example_org_id",  # str
    "name": "example_name",  # str
    "spdx_identifiers": [],  # list
})
```


### OrganizationPackageVulnerabilityPolicy

Create an instance: `organization_package_vulnerability_policy = client.OrganizationPackageVulnerabilityPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_unknown_severity` | `bool` | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `min_severity` | `str` |  |
| `name` | `str` |  |
| `on_violation_quarantine` | `bool` |  |
| `package_query_string` | `str` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
organization_package_vulnerability_policy = client.OrganizationPackageVulnerabilityPolicy().load({"id": "organization_package_vulnerability_policy_id", "org_id": "org_id"})
```

#### Example: List

```python
organization_package_vulnerability_policys = client.OrganizationPackageVulnerabilityPolicy().list({"org_id": "example"})
```

#### Example: Create

```python
organization_package_vulnerability_policy = client.OrganizationPackageVulnerabilityPolicy().create({
    "org_id": "example_org_id",  # str
    "name": "example_name",  # str
})
```


### OrganizationSamlAuth

Create an instance: `organization_saml_auth = client.OrganizationSamlAuth()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `saml_auth_enabled` | `bool` |  |
| `saml_auth_enforced` | `bool` |  |
| `saml_metadata_inline` | `str` | If configured, SAML metadata will be used as entered instead of retrieved from a remote URL. |
| `saml_metadata_url` | `str` | If configured, SAML metadata be retrieved from a remote URL. |

#### Example: Load

```python
organization_saml_auth = client.OrganizationSamlAuth().load({"org_id": "org_id"})
```


### OrganizationTeam

Create an instance: `organization_team = client.OrganizationTeam()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `name` | `str` |  |
| `slug` | `str` |  |
| `slug_perm` | `str` |  |
| `visibility` | `str` |  |

#### Example: Load

```python
organization_team = client.OrganizationTeam().load({"id": "organization_team_id", "org_id": "org_id"})
```

#### Example: List

```python
organization_teams = client.OrganizationTeam().list({"org_id": "example"})
```

#### Example: Create

```python
organization_team = client.OrganizationTeam().create({
    "org_id": "example_org_id",  # str
    "name": "example_name",  # str
})
```


### OrganizationTeamMember

Create an instance: `organization_team_member = client.OrganizationTeamMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `role` | `str` |  |
| `user` | `str` |  |

#### Example: List

```python
organization_team_members = client.OrganizationTeamMember().list({"org_id": "example", "team_id": "example"})
```

#### Example: Create

```python
organization_team_member = client.OrganizationTeamMember().create({
    "org_id": "example_org_id",  # str
    "team_id": "example_team_id",  # str
    "role": "example_role",  # str
    "user": "example_user",  # str
})
```


### Oss

Create an instance: `oss = client.Oss()`


### P2n

Create an instance: `p2n = client.P2n()`


### Package

Create an instance: `package = client.Package()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `int` | Number of packages with at least 1 download |
| `architectures` | `list` |  |
| `backend_kind` | `int` |  |
| `bandwidth` | `dict` |  |
| `cdn_url` | `str` |  |
| `checksum_md5` | `str` |  |
| `checksum_sha1` | `str` |  |
| `checksum_sha256` | `str` |  |
| `checksum_sha512` | `str` |  |
| `count` | `int` |  |
| `dep_type` | `str` |  |
| `dependencies_checksum_md5` | `str` | A checksum of all of the package's dependencies. |
| `dependencies_url` | `str` |  |
| `description` | `str` | A textual description of this package. |
| `display_name` | `str` |  |
| `distro` | `dict` | The distributions supported by this package format |
| `distro_version` | `dict` | A list of the versions for this distribution |
| `downloads` | `dict` |  |
| `epoch` | `int` | The epoch of the package version (if any). |
| `extension` | `str` |  |
| `filename` | `str` |  |
| `files` | `list` |  |
| `format` | `str` |  |
| `format_url` | `str` |  |
| `freeable_storage` | `int` | Amount of storage that will be freed if this package is deleted |
| `fully_qualified_name` | `str` |  |
| `identifier_perm` | `str` | Unique and permanent identifier for the package. |
| `identifiers` | `dict` | Return a map of identifier field names and their values. |
| `inactive` | `int` | Packages with zero downloads |
| `indexed` | `bool` |  |
| `is_cancellable` | `bool` |  |
| `is_copyable` | `bool` |  |
| `is_deleteable` | `bool` |  |
| `is_downloadable` | `bool` |  |
| `is_moveable` | `bool` |  |
| `is_quarantinable` | `bool` |  |
| `is_quarantined` | `bool` |  |
| `is_resyncable` | `bool` |  |
| `is_security_scannable` | `bool` |  |
| `is_sync_awaiting` | `bool` |  |
| `is_sync_completed` | `bool` |  |
| `is_sync_failed` | `bool` |  |
| `is_sync_in_flight` | `bool` |  |
| `is_sync_in_progress` | `bool` |  |
| `last_push` | `str` |  |
| `license` | `str` | The license of this package. |
| `name` | `str` | The name of this package. |
| `namespace` | `str` |  |
| `namespace_url` | `str` |  |
| `num_downloads` | `int` |  |
| `num_files` | `int` |  |
| `operator` | `str` |  |
| `origin_repository` | `str` |  |
| `origin_repository_url` | `str` |  |
| `package_type` | `int` | The type of package contents. |
| `policy_violated` | `bool` | Whether or not the package has violated any policy. |
| `release` | `str` | The release of the package version (if any). |
| `repository` | `str` | The repository the package will be copied to. |
| `repository_url` | `str` |  |
| `security_scan_completed_at` | `str` | The datetime the security scanning was completed. |
| `security_scan_started_at` | `str` | The datetime the security scanning was started. |
| `security_scan_status` | `str` |  |
| `security_scan_status_updated_at` | `str` | The datetime the security scanning status was updated. |
| `self_html_url` | `str` |  |
| `self_url` | `str` |  |
| `signature_url` | `str` |  |
| `size` | `int` | The calculated size of the package. |
| `slug` | `str` | The public unique identifier for the package. |
| `slug_perm` | `str` |  |
| `stage` | `int` | The synchronisation (in progress) stage of the package. |
| `stage_str` | `str` |  |
| `stage_updated_at` | `str` | The datetime the package stage was updated at. |
| `status` | `int` | The synchronisation status of the package. |
| `status_reason` | `str` | A textual description for the synchronous status reason (if any |
| `status_str` | `str` |  |
| `status_updated_at` | `str` | The datetime the package status was updated at. |
| `status_url` | `str` |  |
| `subtype` | `str` |  |
| `summary` | `str` | A one-liner synopsis of this package. |
| `sync_finished_at` | `str` | The datetime the package sync was finished at. |
| `sync_progress` | `int` | Synchronisation progress (from 0-100) |
| `tags` | `dict` | All tags on the package, grouped by tag type. |
| `tags_immutable` | `dict` | All tags on the package, grouped by tag type. |
| `total` | `int` | Total number of packages in repo |
| `type_display` | `str` |  |
| `uploaded_at` | `str` | The date this package was uploaded. |
| `uploader` | `str` |  |
| `uploader_url` | `str` |  |
| `version` | `str` | The raw version for this package. |
| `version_orig` | `str` |  |
| `vulnerability_scan_results_url` | `str` |  |

#### Example: Load

```python
package = client.Package().load({"owner": "owner", "repo": "repo"})
```

#### Example: List

```python
packages = client.Package().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
package = client.Package().create({
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


### PackageDenyPolicy

Create an instance: `package_deny_policy = client.PackageDenyPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `enabled` | `bool` | Whether this rule is enabled or disabled. |
| `name` | `str` |  |
| `package_query_string` | `str` | Packages that match this query will trigger this deny rule. |
| `slug_perm` | `str` |  |
| `status` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
package_deny_policy = client.PackageDenyPolicy().load({"id": "package_deny_policy_id", "org_id": "org_id"})
```

#### Example: List

```python
package_deny_policys = client.PackageDenyPolicy().list({"org_id": "example"})
```

#### Example: Create

```python
package_deny_policy = client.PackageDenyPolicy().create({
    "org_id": "example_org_id",  # str
    "package_query_string": "example_package_query_string",  # str
})
```


### PackageFilePartsUpload

Create an instance: `package_file_parts_upload = client.PackageFilePartsUpload()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `identifier` | `str` | The identifier for the file to use uploading parts. |
| `upload_querystring` | `str` | The querystring to use for the next-step PUT upload. |
| `upload_url` | `str` | The URL to use for the next-step PUT upload |

#### Example: Load

```python
package_file_parts_upload = client.PackageFilePartsUpload().load({"identifier": "identifier", "owner": "owner", "repo": "repo"})
```


### PackageFileUpload

Create an instance: `package_file_upload = client.PackageFileUpload()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
package_file_upload = client.PackageFileUpload().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
})
```


### PackageLicensePolicyEvaluation

Create an instance: `package_license_policy_evaluation = client.PackageLicensePolicyEvaluation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_unknown_licenses` | `bool` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `evaluation_count` | `int` |  |
| `name` | `str` |  |
| `on_violation_quarantine` | `bool` |  |
| `package_query_string` | `str` |  |
| `policy` | `dict` |  |
| `slug_perm` | `str` |  |
| `spdx_identifiers` | `list` |  |
| `status` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `violation_count` | `int` |  |

#### Example: Load

```python
package_license_policy_evaluation = client.PackageLicensePolicyEvaluation().load({"id": "package_license_policy_evaluation_id", "license_policy_id": "license_policy_id", "org_id": "org_id"})
```

#### Example: List

```python
package_license_policy_evaluations = client.PackageLicensePolicyEvaluation().list({"org_id": "example", "policy_slug_perm": "example"})
```

#### Example: Create

```python
package_license_policy_evaluation = client.PackageLicensePolicyEvaluation().create({
    "org_id": "example_org_id",  # str
    "policy_slug_perm": "example_policy_slug_perm",  # Any
    "policy": {},  # dict
    "spdx_identifiers": [],  # list
})
```


### PackageVersionBadge

Create an instance: `package_version_badge = client.PackageVersionBadge()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
package_version_badge = client.PackageVersionBadge().load({"owner": "owner", "package_format": "package_format", "package_identifier": "package_identifier", "package_name": "package_name", "package_version": "package_version", "repo": "repo"})
```


### PackageVulnerabilityPolicyEvaluation

Create an instance: `package_vulnerability_policy_evaluation = client.PackageVulnerabilityPolicyEvaluation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_unknown_severity` | `bool` | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `evaluation_count` | `int` |  |
| `min_severity` | `str` |  |
| `name` | `str` |  |
| `on_violation_quarantine` | `bool` |  |
| `package_query_string` | `str` |  |
| `policy` | `dict` |  |
| `slug_perm` | `str` |  |
| `status` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `violation_count` | `int` |  |

#### Example: Load

```python
package_vulnerability_policy_evaluation = client.PackageVulnerabilityPolicyEvaluation().load({"id": "package_vulnerability_policy_evaluation_id", "org_id": "org_id", "vulnerability_policy_id": "vulnerability_policy_id"})
```

#### Example: List

```python
package_vulnerability_policy_evaluations = client.PackageVulnerabilityPolicyEvaluation().list({"org_id": "example", "policy_slug_perm": "example"})
```

#### Example: Create

```python
package_vulnerability_policy_evaluation = client.PackageVulnerabilityPolicyEvaluation().create({
    "org_id": "example_org_id",  # str
    "policy_slug_perm": "example_policy_slug_perm",  # Any
})
```


### Privilege

Create an instance: `privilege = client.Privilege()`


### Profile

Create an instance: `profile = client.Profile()`


### ProviderSetting

Create an instance: `provider_setting = client.ProviderSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claims` | `dict` | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `enabled` | `bool` | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | `str` | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | `str` | The name of the provider settings are being configured for |
| `provider_url` | `str` | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | `list` | The service accounts associated with these provider settings. |
| `slug` | `str` | The slug of the provider settings |
| `slug_perm` | `str` | The unique, immutable identifier of the provider settings. |

#### Example: Load

```python
provider_setting = client.ProviderSetting().load({"org_id": "org_id", "slug_perm": "slug_perm"})
```

#### Example: List

```python
provider_settings = client.ProviderSetting().list({"org_id": "example"})
```


### ProviderSettingsWrite

Create an instance: `provider_settings_write = client.ProviderSettingsWrite()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claims` | `dict` | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `dynamic_mappings` | `list` | The dynamic mappings of `mapping_claim` values to service accounts. |
| `enabled` | `bool` | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | `str` | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | `str` | The name of the provider settings are being configured for |
| `provider_url` | `str` | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | `list` | The service accounts associated with these provider settings. |
| `slug` | `str` | The slug of the provider settings |
| `slug_perm` | `str` | The unique, immutable identifier of the provider settings. |

#### Example: Create

```python
provider_settings_write = client.ProviderSettingsWrite().create({
    "org_id": "example_org_id",  # str
    "claims": {},  # dict
    "enabled": True,  # bool
    "name": "example_name",  # str
    "provider_url": "example_provider_url",  # str
})
```


### Python

Create an instance: `python = client.Python()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
python = client.Python().load({"id": "python_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
pythons = client.Python().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
python = client.Python().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### Quarantine

Create an instance: `quarantine = client.Quarantine()`


### Quota

Create an instance: `quota = client.Quota()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display` | `dict` |  |
| `history` | `list` |  |
| `raw` | `dict` |  |

#### Example: Load

```python
quota = client.Quota().load({"id": "quota_id"})
```


### Raw

Create an instance: `raw = client.Raw()`


### Refresh

Create an instance: `refresh = client.Refresh()`


### Regenerate

Create an instance: `regenerate = client.Regenerate()`


### Repo

Create an instance: `repo = client.Repo()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cdn_url` | `str` | Base URL from which packages and other artifacts are downloaded. |
| `content_kind` | `str` | The repository content kind determines whether this repository contains packages, or provides a distribution of packages from other repositories. |
| `contextual_auth_realm` | `bool` | If checked, missing credentials for this repository where basic authentication is required shall present an enriched value in the 'WWW-Authenticate' header containing the namespace and repository. |
| `copy_own` | `bool` | If checked, users can copy any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `copy_packages` | `str` | This defines the minimum level of privilege required for a user to copy packages. |
| `cosign_signing_enabled` | `bool` | When enabled, all pushed (or pulled from upstream) OCI packages and artifacts will be signed using cosign with the repository's ECDSA key. |
| `created_at` | `str` |  |
| `default_privilege` | `str` | This defines the default level of privilege that all of your organization members have for this repository. |
| `delete_own` | `bool` | If checked, users can delete any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `delete_packages` | `str` | This defines the minimum level of privilege required for a user to delete packages. |
| `deleted_at` | `str` | The datetime the repository was manually deleted at. |
| `description` | `str` | A description of the repository's purpose/contents. |
| `distributes` | `list` | The repositories distributed through this repo. |
| `docker_refresh_tokens_enabled` | `bool` | If checked, refresh tokens will be issued in addition to access tokens for Docker authentication. |
| `ecdsa_keys` | `list` |  |
| `enforce_eula` | `bool` | If checked, downloads will explicitly require acceptance of an EULA. |
| `gpg_keys` | `list` |  |
| `index_files` | `bool` | If checked, files contained in packages will be indexed, which increase the synchronisation time required for packages. |
| `is_open_source` | `bool` |  |
| `is_private` | `bool` |  |
| `is_public` | `bool` |  |
| `manage_entitlements_privilege` | `str` | This defines the minimum level of privilege required for a user to manage entitlement tokens with private repositories. |
| `move_own` | `bool` | If checked, users can move any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `move_packages` | `str` | This defines the minimum level of privilege required for a user to move packages. |
| `name` | `str` | A descriptive name for the repository. |
| `namespace` | `str` | Namespace to which this repository belongs. |
| `namespace_url` | `str` | API endpoint where data about this namespace can be retrieved. |
| `nuget_native_signing_enabled` | `bool` | When enabled, all pushed (or pulled from upstream) nuget packages and artifacts will be signed using the repository's X.509 RSA certificate. |
| `num_downloads` | `int` | The number of downloads for packages in the repository. |
| `num_policy_violated_packages` | `int` | Number of packages with policy violations in a repository. |
| `num_quarantined_packages` | `int` | Number of quarantined packages in a repository. |
| `open_source_license` | `str` | The SPDX identifier of the open source license. |
| `open_source_project_url` | `str` | The URL to the Open-Source project, used for validating that the project meets the requirements for Open-Source. |
| `package_count` | `int` | The number of packages in the repository. |
| `package_group_count` | `int` | The number of groups in the repository. |
| `proxy_npmjs` | `bool` | If checked, Npm packages that are not in the repository when requested by clients will automatically be proxied from the public npmjs.org registry. |
| `proxy_pypi` | `bool` | If checked, Python packages that are not in the repository when requested by clients will automatically be proxied from the public pypi.python.org registry. |
| `raw_package_index_enabled` | `bool` | If checked, HTML and JSON indexes will be generated that list all available raw packages in the repository. |
| `raw_package_index_signatures_enabled` | `bool` | If checked, the HTML and JSON indexes will display raw package GPG signatures alongside the index packages. |
| `replace_packages` | `str` | This defines the minimum level of privilege required for a user to republish packages. |
| `replace_packages_by_default` | `bool` | If checked, uploaded packages will overwrite/replace any others with the same attributes (e.g. |
| `repository_type` | `int` | The repository type changes how it is accessed and billed. |
| `repository_type_str` | `str` | The repository type changes how it is accessed and billed. |
| `resync_own` | `bool` | If checked, users can resync any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `resync_packages` | `str` | This defines the minimum level of privilege required for a user to resync packages. |
| `scan_own` | `bool` | If checked, users can scan any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `scan_packages` | `str` | This defines the minimum level of privilege required for a user to scan packages. |
| `self_html_url` | `str` | Website URL for this repository. |
| `self_url` | `str` | API endpoint where data about this repository can be retrieved. |
| `show_setup_all` | `bool` | If checked, the Set Me Up help for all formats will always be shown, even if you don't have packages of that type uploaded. |
| `size` | `int` | The calculated size of the repository. |
| `size_str` | `str` | The calculated size of the repository (human readable). |
| `slug` | `str` | The slug identifies the repository in URIs. |
| `slug_perm` | `str` | The slug_perm immutably identifies the repository. |
| `storage_region` | `str` | The Cloudsmith region in which package files are stored. |
| `strict_npm_validation` | `bool` | If checked, npm packages will be validated strictly to ensure the package matches specifcation. |
| `tag_pre_releases_as_latest` | `bool` | If checked, packages pushed with a pre-release component on that version will be marked with the 'latest' tag. |
| `use_debian_labels` | `bool` | If checked, a 'Label' field will be present in Debian-based repositories. |
| `use_default_cargo_upstream` | `bool` | If checked, dependencies of uploaded Cargo crates which do not set an explicit value for "registry" will be assumed to be available from crates.io. |
| `use_entitlements_privilege` | `str` | This defines the minimum level of privilege required for a user to see/use entitlement tokens with private repositories. |
| `use_noarch_packages` | `bool` | If checked, noarch packages (if supported) are enabled in installations/configurations. |
| `use_source_packages` | `bool` | If checked, source packages (if supported) are enabled in installations/configurations. |
| `use_vulnerability_scanning` | `bool` | If checked, vulnerability scanning will be enabled for all supported packages within this repository. |
| `user_entitlements_enabled` | `bool` | If checked, users can use and manage their own user-specific entitlement token for the repository (if private). |
| `view_statistics` | `str` | This defines the minimum level of privilege required for a user to view repository statistics, to include entitlement-based usage, if applicable. |

#### Example: Load

```python
repo = client.Repo().load({"id": "repo_id"})
```

#### Example: List

```python
repos = client.Repo().list()
```

#### Example: Create

```python
repo = client.Repo().create({
    "id": "example_id",  # str
    "name": "example_name",  # str
})
```


### RepositoryAuditLog

Create an instance: `repository_audit_log = client.RepositoryAuditLog()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `str` |  |
| `actor_ip_address` | `str` |  |
| `actor_kind` | `str` |  |
| `actor_location` | `dict` |  |
| `actor_slug_perm` | `str` |  |
| `actor_url` | `str` |  |
| `context` | `str` |  |
| `event` | `str` |  |
| `event_at` | `str` |  |
| `object` | `str` |  |
| `object_kind` | `str` |  |
| `object_slug_perm` | `str` |  |
| `uuid` | `str` |  |

#### Example: List

```python
repository_audit_logs = client.RepositoryAuditLog().list({"owner": "example", "repo": "example"})
```


### RepositoryEcdsaKey

Create an instance: `repository_ecdsa_key = client.RepositoryEcdsaKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | If selected this is the active key for this repository. |
| `created_at` | `str` |  |
| `default` | `bool` | If selected this is the default key for this repository. |
| `fingerprint` | `str` | The long identifier used by ECDSA for this key. |
| `fingerprint_short` | `str` |  |
| `public_key` | `str` | The public key given to repository users. |
| `ssh_fingerprint` | `str` | The SSH fingerprint used by ECDSA for this key. |

#### Example: Load

```python
repository_ecdsa_key = client.RepositoryEcdsaKey().load({"identifier": "identifier", "owner": "owner"})
```

#### Example: Create

```python
repository_ecdsa_key = client.RepositoryEcdsaKey().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
})
```


### RepositoryGeoIpRule

Create an instance: `repository_geo_ip_rule = client.RepositoryGeoIpRule()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cidr` | `dict` |  |
| `country_code` | `dict` |  |

#### Example: Load

```python
repository_geo_ip_rule = client.RepositoryGeoIpRule().load({"identifier": "identifier", "owner": "owner"})
```


### RepositoryGeoIpStatus

Create an instance: `repository_geo_ip_status = client.RepositoryGeoIpStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `geoip_enabled` | `bool` | If checked, any access to the website or downloads for this repository is allowed/denied according to the configured Geo/IP restriction rules. |

#### Example: Load

```python
repository_geo_ip_status = client.RepositoryGeoIpStatus().load({"identifier": "identifier", "owner": "owner"})
```


### RepositoryGeoIpTestAddress

Create an instance: `repository_geo_ip_test_address = client.RepositoryGeoIpTestAddress()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
repository_geo_ip_test_address = client.RepositoryGeoIpTestAddress().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
})
```


### RepositoryGpgKey

Create an instance: `repository_gpg_key = client.RepositoryGpgKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | If selected this is the active key for this repository. |
| `comment` | `str` |  |
| `created_at` | `str` |  |
| `default` | `bool` | If selected this is the default key for this repository. |
| `fingerprint` | `str` | The long identifier used by GPG for this key. |
| `fingerprint_short` | `str` |  |
| `public_key` | `str` | The public key given to repository users. |

#### Example: Load

```python
repository_gpg_key = client.RepositoryGpgKey().load({"identifier": "identifier", "owner": "owner"})
```

#### Example: Create

```python
repository_gpg_key = client.RepositoryGpgKey().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "comment": "example_comment",  # str
})
```


### RepositoryPrivilegeInput

Create an instance: `repository_privilege_input = client.RepositoryPrivilegeInput()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `privilege` | `str` | The level of privilege that the user or team should be granted to the specified repository. |
| `service` | `str` | The service identifier (slug). |
| `team` | `str` | The team identifier (slug). |
| `user` | `str` | The user identifier (slug). |

#### Example: List

```python
repository_privilege_inputs = client.RepositoryPrivilegeInput().list({"identifier": "example", "owner": "example"})
```


### RepositoryRetentionRule

Create an instance: `repository_retention_rule = client.RepositoryRetentionRule()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `retention_count_limit` | `int` | The maximum X number of packages to retain. |
| `retention_days_limit` | `int` | The X number of days of packages to retain. |
| `retention_enabled` | `bool` | If checked, the retention lifecycle rules will be activated for the repository. |
| `retention_group_by_format` | `bool` | If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are diffe… |
| `retention_group_by_name` | `bool` | If checked, retention will apply to groups of packages by name rather than all packages.<br>For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgB… |
| `retention_group_by_package_type` | `bool` | If checked, retention will apply to packages by package type (e.g. |
| `retention_package_query_string` | `str` | A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will pre… |
| `retention_size_limit` | `int` | The maximum X total size (in bytes) of packages to retain. |

#### Example: Load

```python
repository_retention_rule = client.RepositoryRetentionRule().load({"owner": "owner", "repo": "repo"})
```


### RepositoryRsaKey

Create an instance: `repository_rsa_key = client.RepositoryRsaKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | If selected this is the active key for this repository. |
| `created_at` | `str` |  |
| `default` | `bool` | If selected this is the default key for this repository. |
| `fingerprint` | `str` | The long identifier used by RSA for this key. |
| `fingerprint_short` | `str` |  |
| `public_key` | `str` | The public key given to repository users. |
| `ssh_fingerprint` | `str` | The SSH fingerprint used by RSA for this key. |

#### Example: Load

```python
repository_rsa_key = client.RepositoryRsaKey().load({"identifier": "identifier", "owner": "owner"})
```

#### Example: Create

```python
repository_rsa_key = client.RepositoryRsaKey().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
})
```


### RepositoryToken

Create an instance: `repository_token = client.RepositoryToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clients` | `int` |  |
| `created_at` | `str` | The datetime the token was updated at. |
| `created_by` | `str` |  |
| `created_by_url` | `str` |  |
| `default` | `bool` | If selected this is the default token for this repository. |
| `disable_url` | `str` |  |
| `downloads` | `int` |  |
| `enable_url` | `str` |  |
| `eula_accepted` | `dict` |  |
| `eula_accepted_at` | `str` | The datetime the EULA was accepted at. |
| `eula_accepted_from` | `str` |  |
| `eula_required` | `bool` | If checked, a EULA acceptance is required for this token. |
| `has_limits` | `bool` |  |
| `identifier` | `int` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `bool` | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` | `bool` |  |
| `limit_bandwidth` | `int` | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` | `str` |  |
| `limit_date_range_from` | `str` | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | `str` | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | `int` | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | `int` | The maximum number of downloads allowed for the token. |
| `limit_package_query` | `str` | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | `str` | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` | `dict` |  |
| `name` | `str` |  |
| `refresh_url` | `str` |  |
| `reset_url` | `str` |  |
| `scheduled_reset_at` | `str` | The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero. |
| `scheduled_reset_period` | `str` |  |
| `self_url` | `str` |  |
| `slug_perm` | `str` |  |
| `token` | `str` |  |
| `updated_at` | `str` | The datetime the token was updated at. |
| `updated_by` | `str` |  |
| `updated_by_url` | `str` |  |
| `usage` | `str` |  |
| `user` | `str` |  |
| `user_url` | `str` |  |

#### Example: Load

```python
repository_token = client.RepositoryToken().load({"identifier": "identifier", "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
repository_tokens = client.RepositoryToken().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
repository_token = client.RepositoryToken().create({
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
    "name": "example_name",  # str
})
```


### RepositoryTokenRefresh

Create an instance: `repository_token_refresh = client.RepositoryTokenRefresh()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clients` | `int` |  |
| `created_at` | `str` | The datetime the token was updated at. |
| `created_by` | `str` |  |
| `created_by_url` | `str` |  |
| `default` | `bool` | If selected this is the default token for this repository. |
| `disable_url` | `str` |  |
| `downloads` | `int` |  |
| `enable_url` | `str` |  |
| `eula_accepted` | `dict` |  |
| `eula_accepted_at` | `str` | The datetime the EULA was accepted at. |
| `eula_accepted_from` | `str` |  |
| `eula_required` | `bool` | If checked, a EULA acceptance is required for this token. |
| `has_limits` | `bool` |  |
| `identifier` | `int` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `bool` | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` | `bool` |  |
| `limit_bandwidth` | `int` | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` | `str` |  |
| `limit_date_range_from` | `str` | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | `str` | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | `int` | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | `int` | The maximum number of downloads allowed for the token. |
| `limit_package_query` | `str` | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | `str` | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` | `dict` |  |
| `name` | `str` |  |
| `refresh_url` | `str` |  |
| `reset_url` | `str` |  |
| `scheduled_reset_at` | `str` | The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero. |
| `scheduled_reset_period` | `str` |  |
| `self_url` | `str` |  |
| `slug_perm` | `str` |  |
| `token` | `str` |  |
| `updated_at` | `str` | The datetime the token was updated at. |
| `updated_by` | `str` |  |
| `updated_by_url` | `str` |  |
| `usage` | `str` |  |
| `user` | `str` |  |
| `user_url` | `str` |  |

#### Example: Create

```python
repository_token_refresh = client.RepositoryTokenRefresh().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
})
```


### RepositoryTokenSync

Create an instance: `repository_token_sync = client.RepositoryTokenSync()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `tokens` | `list` | The entitlements that have been synchronised. |

#### Example: Create

```python
repository_token_sync = client.RepositoryTokenSync().create({
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
})
```


### RepositoryWebhook

Create an instance: `repository_webhook = client.RepositoryWebhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `created_by` | `str` |  |
| `created_by_url` | `str` |  |
| `disable_reason` | `int` |  |
| `disable_reason_str` | `str` |  |
| `events` | `list` |  |
| `identifier` | `int` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `bool` | If enabled, the webhook will trigger on subscribed events and send payloads to the configured target URL. |
| `is_last_response_bad` | `bool` |  |
| `last_response_status` | `int` |  |
| `last_response_status_str` | `str` |  |
| `num_sent` | `int` |  |
| `package_query` | `str` | The package-based search query for webhooks to fire. |
| `request_body_format` | `int` | The format of the payloads for webhook requests. |
| `request_body_format_str` | `str` |  |
| `request_body_template_format` | `int` | The format of the payloads for webhook requests. |
| `request_body_template_format_str` | `str` |  |
| `request_content_type` | `str` | The value that will be sent for the 'Content Type' header. |
| `secret_header` | `str` | The header to send the predefined secret in. |
| `self_url` | `str` |  |
| `slug_perm` | `str` |  |
| `target_url` | `str` | The destination URL that webhook payloads will be POST'ed to. |
| `templates` | `list` |  |
| `updated_at` | `str` |  |
| `updated_by` | `str` |  |
| `updated_by_url` | `str` |  |
| `verify_ssl` | `bool` | If enabled, SSL certificates is verified when webhooks are sent. |

#### Example: Load

```python
repository_webhook = client.RepositoryWebhook().load({"identifier": "identifier", "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
repository_webhooks = client.RepositoryWebhook().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
repository_webhook = client.RepositoryWebhook().create({
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
    "events": [],  # list
    "target_url": "example_target_url",  # str
    "templates": [],  # list
})
```


### RepositoryX509EcdsaCertificate

Create an instance: `repository_x509_ecdsa_certificate = client.RepositoryX509EcdsaCertificate()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | If selected this is the active key for this repository. |
| `certificate` | `str` | The issued certificate. |
| `certificate_chain` | `str` | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` | `str` |  |
| `certificate_chain_fingerprint_short` | `str` |  |
| `certificate_fingerprint` | `str` | The SHA-256 long identifier used |
| `certificate_fingerprint_short` | `str` |  |
| `created_at` | `str` |  |
| `default` | `bool` | If selected this is the default key for this repository. |
| `issuing_status` | `str` |  |

#### Example: Load

```python
repository_x509_ecdsa_certificate = client.RepositoryX509EcdsaCertificate().load({"identifier": "identifier", "owner": "owner"})
```


### RepositoryX509RsaCertificate

Create an instance: `repository_x509_rsa_certificate = client.RepositoryX509RsaCertificate()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | If selected this is the active key for this repository. |
| `certificate` | `str` | The issued certificate. |
| `certificate_chain` | `str` | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` | `str` |  |
| `certificate_chain_fingerprint_short` | `str` |  |
| `certificate_fingerprint` | `str` | The SHA-256 long identifier used |
| `certificate_fingerprint_short` | `str` |  |
| `created_at` | `str` |  |
| `default` | `bool` | If selected this is the default key for this repository. |
| `issuing_status` | `str` |  |

#### Example: Load

```python
repository_x509_rsa_certificate = client.RepositoryX509RsaCertificate().load({"identifier": "identifier", "owner": "owner"})
```


### Reset

Create an instance: `reset = client.Reset()`


### ResourcesRateCheck

Create an instance: `resources_rate_check = client.ResourcesRateCheck()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `interval` | `float` | The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window. |
| `limit` | `int` | The maximum number of requests that you are permitted to send per hour |
| `remaining` | `int` | The number of requests that are remaining in the current rate limit window |
| `reset` | `int` | The UTC epoch timestamp at which the current rate limit window will reset |
| `reset_iso_8601` | `str` | The ISO 8601 datetime at which the current rate limit window will reset |
| `throttled` | `bool` | If true, throttling is currently being enforced. |

#### Example: Load

```python
resources_rate_check = client.ResourcesRateCheck().load()
```


### Resync

Create an instance: `resync = client.Resync()`


### Retention

Create an instance: `retention = client.Retention()`


### Rpm

Create an instance: `rpm = client.Rpm()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `distro_version` | `str` | The distribution version that packages found on this upstream will be associated with. |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `str` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `str` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `str` | The GPG signature verification mode for this upstream. |
| `include_sources` | `bool` | When checked, source packages will be available from this upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verification_status` | `str` | The signature verification status for this upstream. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
rpm = client.Rpm().load({"id": "rpm_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
rpms = client.Rpm().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
rpm = client.Rpm().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "distro_version": "example_distro_version",  # str
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### Rsa

Create an instance: `rsa = client.Rsa()`


### Ruby

Create an instance: `ruby = client.Ruby()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
ruby = client.Ruby().load({"id": "ruby_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
rubys = client.Ruby().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
ruby = client.Ruby().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### SamlGroupSync

Create an instance: `saml_group_sync = client.SamlGroupSync()`


### Scan

Create an instance: `scan = client.Scan()`


### Self

Create an instance: `self = client.Self()`


### Service

Create an instance: `service = client.Service()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `created_by` | `str` |  |
| `created_by_url` | `str` |  |
| `description` | `str` | The description of the service |
| `key` | `str` | The API key of the service |
| `key_expires_at` | `str` | The time at which the API key will expire. |
| `name` | `str` | The name of the service |
| `role` | `str` | The role of the service. |
| `slug` | `str` | The slug of the service |
| `teams` | `list` |  |

#### Example: Load

```python
service = client.Service().load({"id": "service_id", "org_id": "org_id"})
```

#### Example: List

```python
services = client.Service().list({"org_id": "example"})
```

#### Example: Create

```python
service = client.Service().create({
    "org_id": "example_org_id",  # str
    "name": "example_name",  # str
})
```


### Status

Create an instance: `status = client.Status()`


### StatusBasic

Create an instance: `status_basic = client.StatusBasic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `detail` | `str` | The message describing the state of the API. |
| `version` | `str` | The current version for the Cloudsmith service. |

#### Example: Load

```python
status_basic = client.StatusBasic().load()
```


### StorageRegion

Create an instance: `storage_region = client.StorageRegion()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `str` | Name of the storage region |
| `slug` | `str` | Slug for the storage region |

#### Example: Load

```python
storage_region = client.StorageRegion().load({"id": "storage_region_id"})
```

#### Example: List

```python
storage_regions = client.StorageRegion().list()
```


### Swift

Create an instance: `swift = client.Swift()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `str` | Secret to provide with requests to upstream. |
| `auth_username` | `str` | Username to provide with requests to upstream. |
| `created_at` | `str` | The datetime the upstream source was created. |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `str` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `str` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `str` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `str` | The mode that this upstream should operate in. |
| `name` | `str` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```python
swift = client.Swift().load({"id": "swift_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
swifts = client.Swift().list({"identifier": "example", "owner": "example"})
```

#### Example: Create

```python
swift = client.Swift().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
    "name": "example_name",  # str
    "upstream_url": "example_upstream_url",  # str
})
```


### Sync

Create an instance: `sync = client.Sync()`


### Tag

Create an instance: `tag = client.Tag()`


### Team

Create an instance: `team = client.Team()`


### Terraform

Create an instance: `terraform = client.Terraform()`


### Test

Create an instance: `test = client.Test()`


### Token

Create an instance: `token = client.Token()`


### TransferRegion

Create an instance: `transfer_region = client.TransferRegion()`


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `str` | The time at which the API key was created. |
| `key` | `str` | The unique API key used for authentication. |
| `slug_perm` | `str` | The slug_perm for token. |

#### Example: List

```python
users = client.User().list()
```


### UserAuthToken

Create an instance: `user_auth_token = client.UserAuthToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
user_auth_token = client.UserAuthToken().create({
})
```


### UserAuthenticationToken

Create an instance: `user_authentication_token = client.UserAuthenticationToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `str` | The time at which the API key was created. |
| `key` | `str` | The unique API key used for authentication. |
| `slug_perm` | `str` | The slug_perm for token. |

#### Example: Create

```python
user_authentication_token = client.UserAuthenticationToken().create({
})
```


### UserBrief

Create an instance: `user_brief = client.UserBrief()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authenticated` | `bool` | If true then you're logged in as a user. |
| `email` | `str` | Your email address that we use to contact you. |
| `name` | `str` | The full name of the user (if any). |
| `profile_url` | `str` | The URL for the full profile of the user. |
| `self_url` | `str` |  |
| `slug` | `str` |  |
| `slug_perm` | `str` |  |

#### Example: Load

```python
user_brief = client.UserBrief().load()
```


### UserProfile

Create an instance: `user_profile = client.UserProfile()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `company` | `str` |  |
| `first_name` | `str` |  |
| `job_title` | `str` |  |
| `joined_at` | `str` |  |
| `last_name` | `str` |  |
| `name` | `str` |  |
| `slug` | `str` |  |
| `slug_perm` | `str` |  |
| `tagline` | `str` | Your tagline is a sentence about you. |
| `url` | `str` |  |

#### Example: Load

```python
user_profile = client.UserProfile().load({"id": "user_profile_id"})
```


### Vagrant

Create an instance: `vagrant = client.Vagrant()`


### Validate

Create an instance: `validate = client.Validate()`


### Version

Create an instance: `version = client.Version()`


### Vulnerability

Create an instance: `vulnerability = client.Vulnerability()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | The time this scan result was stored. |
| `has_vulnerabilities` | `bool` | Do the results contain any known vulnerabilities? |
| `identifier` | `str` |  |
| `max_severity` | `str` |  |
| `num_vulnerabilities` | `int` |  |
| `package` | `dict` |  |
| `scan_id` | `int` | Deprecated (23-05-15): Please use 'identifier' instead. |
| `scans` | `list` |  |

#### Example: Load

```python
vulnerability = client.Vulnerability().load({"id": "vulnerability_id"})
```

#### Example: List

```python
vulnerabilitys = client.Vulnerability().list({"owner": "example", "repo": "example"})
```


### VulnerabilityPolicy

Create an instance: `vulnerability_policy = client.VulnerabilityPolicy()`


### Webhook

Create an instance: `webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### X509Ecdsa

Create an instance: `x509_ecdsa = client.X509Ecdsa()`


### X509Rsa

Create an instance: `x509_rsa = client.X509Rsa()`


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── cloudsmith_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`cloudsmith_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
userprofile = client.UserProfile()
userprofile.load({"id": "example_id"})

# userprofile.data_get() now returns the userprofile data from the last load
# userprofile.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
