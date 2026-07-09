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
`load()` returns the bare record (a `dict`) and raises on error.

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
    cargos = client.Cargo().list()
    print(cargos)
except Exception as err:
    print(f"list failed: {err}")
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

# Entity ops return the bare record and raise on error.
cargo = client.Cargo().list()
# cargo contains the mock response record
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
| `Gon2` | `(data) -> Gon2Entity` | Create a Gon2 entity instance. |
| `Gon3` | `(data) -> Gon3Entity` | Create a Gon3 entity instance. |
| `Gon4` | `(data) -> Gon4Entity` | Create a Gon4 entity instance. |
| `Gon5` | `(data) -> Gon5Entity` | Create a Gon5 entity instance. |
| `Gon6` | `(data) -> Gon6Entity` | Create a Gon6 entity instance. |
| `Gon7` | `(data) -> Gon7Entity` | Create a Gon7 entity instance. |
| `Gon8` | `(data) -> Gon8Entity` | Create a Gon8 entity instance. |
| `Gon9` | `(data) -> Gon9Entity` | Create a Gon9 entity instance. |
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
| `P2n2` | `(data) -> P2n2Entity` | Create a P2n2 entity instance. |
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

Entity operations return the bare result data (a `dict` for single-entity
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
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

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
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

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
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

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
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/cran/`

#### Dart

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/dart/`

#### Deb

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `component` |  |
| `created_at` |  |
| `disable_reason` |  |
| `distro_version` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `gpg_key_inline` |  |
| `gpg_key_url` |  |
| `gpg_verification` |  |
| `include_source` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_distribution` |  |
| `upstream_url` |  |
| `verification_status` |  |
| `verify_ssl` |  |

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
| `slug` |  |
| `variant` |  |
| `version` |  |

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
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/docker/`

#### DynamicMapping

| Field | Description |
| --- | --- |
| `claim_value` |  |
| `service_account` |  |

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
| `token` |  |

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
| `description` |  |
| `distribution` |  |
| `extension` |  |
| `name` |  |
| `premium` |  |
| `premium_plan_id` |  |
| `premium_plan_name` |  |
| `slug` |  |
| `support` |  |

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

Operations: .

API path: ``

#### Gon2

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Gon3

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: List.

API path: `/repos/{owner}/{identifier}/upstream/go/`

#### Gon4

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Gon5

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/repos/{owner}/{identifier}/upstream/go/`

#### Gon6

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Load.

API path: `/repos/{owner}/{identifier}/upstream/go/{slug_perm}/`

#### Gon7

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Gon8

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Update.

API path: `/repos/{owner}/{identifier}/upstream/go/{slug_perm}/`

#### Gon9

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Update.

API path: `/repos/{owner}/{identifier}/upstream/go/{slug_perm}/`

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
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/helm/`

#### Hex

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

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
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

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
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `gpg_key_inline` |  |
| `gpg_key_url` |  |
| `gpg_verification` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verification_status` |  |
| `verify_ssl` |  |

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
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/npm/`

#### Nuget

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

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
| `location` |  |
| `name` |  |
| `package` |  |
| `policy` |  |
| `reason` |  |
| `slug` |  |
| `slug_perm` |  |
| `tagline` |  |
| `vulnerability_scan_result` |  |

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
| `email` |  |
| `expires_at` |  |
| `inviter` |  |
| `inviter_url` |  |
| `org` |  |
| `role` |  |
| `slug_perm` |  |
| `team` |  |
| `user` |  |
| `user_url` |  |

Operations: Create, List, Update.

API path: `/orgs/{org}/invites/`

#### OrganizationInviteExtend

| Field | Description |
| --- | --- |
| `email` |  |
| `expires_at` |  |
| `inviter` |  |
| `inviter_url` |  |
| `org` |  |
| `role` |  |
| `slug_perm` |  |
| `team` |  |
| `user` |  |
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
| `allow_unknown_license` |  |
| `created_at` |  |
| `description` |  |
| `name` |  |
| `on_violation_quarantine` |  |
| `package_query_string` |  |
| `slug_perm` |  |
| `spdx_identifier` |  |
| `updated_at` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/orgs/{org}/license-policy/`

#### OrganizationPackageVulnerabilityPolicy

| Field | Description |
| --- | --- |
| `allow_unknown_severity` |  |
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
| `saml_metadata_inline` |  |
| `saml_metadata_url` |  |

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

#### P2n2

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Package

| Field | Description |
| --- | --- |
| `architecture` |  |
| `backend_kind` |  |
| `cdn_url` |  |
| `checksum_md5` |  |
| `checksum_sha1` |  |
| `checksum_sha256` |  |
| `checksum_sha512` |  |
| `count` |  |
| `dep_type` |  |
| `dependencies_checksum_md5` |  |
| `dependencies_url` |  |
| `description` |  |
| `display_name` |  |
| `distro` |  |
| `distro_version` |  |
| `download` |  |
| `epoch` |  |
| `extension` |  |
| `file` |  |
| `filename` |  |
| `format` |  |
| `format_url` |  |
| `freeable_storage` |  |
| `fully_qualified_name` |  |
| `identifier` |  |
| `identifier_perm` |  |
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
| `license` |  |
| `name` |  |
| `namespace` |  |
| `namespace_url` |  |
| `num_download` |  |
| `num_file` |  |
| `operator` |  |
| `origin_repository` |  |
| `origin_repository_url` |  |
| `package` |  |
| `package_type` |  |
| `policy_violated` |  |
| `release` |  |
| `repository` |  |
| `repository_url` |  |
| `security_scan_completed_at` |  |
| `security_scan_started_at` |  |
| `security_scan_status` |  |
| `security_scan_status_updated_at` |  |
| `self_html_url` |  |
| `self_url` |  |
| `signature_url` |  |
| `size` |  |
| `slug` |  |
| `slug_perm` |  |
| `stage` |  |
| `stage_str` |  |
| `stage_updated_at` |  |
| `status` |  |
| `status_reason` |  |
| `status_str` |  |
| `status_updated_at` |  |
| `status_url` |  |
| `subtype` |  |
| `summary` |  |
| `sync_finished_at` |  |
| `sync_progress` |  |
| `tag` |  |
| `tags_immutable` |  |
| `type_display` |  |
| `uploaded_at` |  |
| `uploader` |  |
| `uploader_url` |  |
| `version` |  |
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
| `enabled` |  |
| `name` |  |
| `package_query_string` |  |
| `slug_perm` |  |
| `status` |  |
| `updated_at` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/orgs/{org}/deny-policy/`

#### PackageFilePartsUpload

| Field | Description |
| --- | --- |
| `identifier` |  |
| `upload_querystring` |  |
| `upload_url` |  |

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
| `created_at` |  |
| `evaluation_count` |  |
| `policy` |  |
| `slug_perm` |  |
| `status` |  |
| `updated_at` |  |
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
| `created_at` |  |
| `evaluation_count` |  |
| `policy` |  |
| `slug_perm` |  |
| `status` |  |
| `updated_at` |  |
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
| `claim` |  |
| `enabled` |  |
| `mapping_claim` |  |
| `name` |  |
| `provider_url` |  |
| `service_account` |  |
| `slug` |  |
| `slug_perm` |  |

Operations: List, Load.

API path: `/orgs/{org}/openid-connect/`

#### ProviderSettingsWrite

| Field | Description |
| --- | --- |
| `claim` |  |
| `dynamic_mapping` |  |
| `enabled` |  |
| `mapping_claim` |  |
| `name` |  |
| `provider_url` |  |
| `service_account` |  |
| `slug` |  |
| `slug_perm` |  |

Operations: Create, Patch, Update.

API path: `/orgs/{org}/openid-connect/`

#### Python

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

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
| `history` |  |
| `usage` |  |

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
| `cdn_url` |  |
| `content_kind` |  |
| `contextual_auth_realm` |  |
| `copy_own` |  |
| `copy_package` |  |
| `cosign_signing_enabled` |  |
| `created_at` |  |
| `default_privilege` |  |
| `delete_own` |  |
| `delete_package` |  |
| `deleted_at` |  |
| `description` |  |
| `distribute` |  |
| `docker_refresh_tokens_enabled` |  |
| `ecdsa_key` |  |
| `enforce_eula` |  |
| `gpg_key` |  |
| `index_file` |  |
| `is_open_source` |  |
| `is_private` |  |
| `is_public` |  |
| `manage_entitlements_privilege` |  |
| `move_own` |  |
| `move_package` |  |
| `name` |  |
| `namespace` |  |
| `namespace_url` |  |
| `nuget_native_signing_enabled` |  |
| `num_download` |  |
| `num_policy_violated_package` |  |
| `num_quarantined_package` |  |
| `open_source_license` |  |
| `open_source_project_url` |  |
| `package_count` |  |
| `package_group_count` |  |
| `proxy_npmj` |  |
| `proxy_pypi` |  |
| `raw_package_index_enabled` |  |
| `raw_package_index_signatures_enabled` |  |
| `replace_package` |  |
| `replace_packages_by_default` |  |
| `repository_type` |  |
| `repository_type_str` |  |
| `resync_own` |  |
| `resync_package` |  |
| `scan_own` |  |
| `scan_package` |  |
| `self_html_url` |  |
| `self_url` |  |
| `show_setup_all` |  |
| `size` |  |
| `size_str` |  |
| `slug` |  |
| `slug_perm` |  |
| `storage_region` |  |
| `strict_npm_validation` |  |
| `tag_pre_releases_as_latest` |  |
| `use_debian_label` |  |
| `use_default_cargo_upstream` |  |
| `use_entitlements_privilege` |  |
| `use_noarch_package` |  |
| `use_source_package` |  |
| `use_vulnerability_scanning` |  |
| `user_entitlements_enabled` |  |
| `view_statistic` |  |

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
| `active` |  |
| `created_at` |  |
| `default` |  |
| `fingerprint` |  |
| `fingerprint_short` |  |
| `public_key` |  |
| `ssh_fingerprint` |  |

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
| `geoip_enabled` |  |

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
| `active` |  |
| `comment` |  |
| `created_at` |  |
| `default` |  |
| `fingerprint` |  |
| `fingerprint_short` |  |
| `public_key` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{identifier}/gpg/`

#### RepositoryPrivilegeInput

| Field | Description |
| --- | --- |
| `privilege` |  |
| `service` |  |
| `team` |  |
| `user` |  |

Operations: List.

API path: `/repos/{owner}/{identifier}/privileges`

#### RepositoryRetentionRule

| Field | Description |
| --- | --- |
| `retention_count_limit` |  |
| `retention_days_limit` |  |
| `retention_enabled` |  |
| `retention_group_by_format` |  |
| `retention_group_by_name` |  |
| `retention_group_by_package_type` |  |
| `retention_package_query_string` |  |
| `retention_size_limit` |  |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/retention/`

#### RepositoryRsaKey

| Field | Description |
| --- | --- |
| `active` |  |
| `created_at` |  |
| `default` |  |
| `fingerprint` |  |
| `fingerprint_short` |  |
| `public_key` |  |
| `ssh_fingerprint` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{identifier}/rsa/`

#### RepositoryToken

| Field | Description |
| --- | --- |
| `client` |  |
| `created_at` |  |
| `created_by` |  |
| `created_by_url` |  |
| `default` |  |
| `disable_url` |  |
| `download` |  |
| `enable_url` |  |
| `eula_accepted` |  |
| `eula_accepted_at` |  |
| `eula_accepted_from` |  |
| `eula_required` |  |
| `has_limit` |  |
| `identifier` |  |
| `is_active` |  |
| `is_limited` |  |
| `limit_bandwidth` |  |
| `limit_bandwidth_unit` |  |
| `limit_date_range_from` |  |
| `limit_date_range_to` |  |
| `limit_num_client` |  |
| `limit_num_download` |  |
| `limit_package_query` |  |
| `limit_path_query` |  |
| `metadata` |  |
| `name` |  |
| `refresh_url` |  |
| `reset_url` |  |
| `scheduled_reset_at` |  |
| `scheduled_reset_period` |  |
| `self_url` |  |
| `slug_perm` |  |
| `token` |  |
| `updated_at` |  |
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
| `client` |  |
| `created_at` |  |
| `created_by` |  |
| `created_by_url` |  |
| `default` |  |
| `disable_url` |  |
| `download` |  |
| `enable_url` |  |
| `eula_accepted` |  |
| `eula_accepted_at` |  |
| `eula_accepted_from` |  |
| `eula_required` |  |
| `has_limit` |  |
| `identifier` |  |
| `is_active` |  |
| `is_limited` |  |
| `limit_bandwidth` |  |
| `limit_bandwidth_unit` |  |
| `limit_date_range_from` |  |
| `limit_date_range_to` |  |
| `limit_num_client` |  |
| `limit_num_download` |  |
| `limit_package_query` |  |
| `limit_path_query` |  |
| `metadata` |  |
| `name` |  |
| `refresh_url` |  |
| `reset_url` |  |
| `scheduled_reset_at` |  |
| `scheduled_reset_period` |  |
| `self_url` |  |
| `slug_perm` |  |
| `token` |  |
| `updated_at` |  |
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
| `token` |  |

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
| `event` |  |
| `identifier` |  |
| `is_active` |  |
| `is_last_response_bad` |  |
| `last_response_status` |  |
| `last_response_status_str` |  |
| `num_sent` |  |
| `package_query` |  |
| `request_body_format` |  |
| `request_body_format_str` |  |
| `request_body_template_format` |  |
| `request_body_template_format_str` |  |
| `request_content_type` |  |
| `secret_header` |  |
| `self_url` |  |
| `slug_perm` |  |
| `target_url` |  |
| `template` |  |
| `updated_at` |  |
| `updated_by` |  |
| `updated_by_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Update.

API path: `/webhooks/{owner}/{repo}/`

#### RepositoryX509EcdsaCertificate

| Field | Description |
| --- | --- |
| `active` |  |
| `certificate` |  |
| `certificate_chain` |  |
| `certificate_chain_fingerprint` |  |
| `certificate_chain_fingerprint_short` |  |
| `certificate_fingerprint` |  |
| `certificate_fingerprint_short` |  |
| `created_at` |  |
| `default` |  |
| `issuing_status` |  |

Operations: Load.

API path: `/repos/{owner}/{identifier}/x509-ecdsa/`

#### RepositoryX509RsaCertificate

| Field | Description |
| --- | --- |
| `active` |  |
| `certificate` |  |
| `certificate_chain` |  |
| `certificate_chain_fingerprint` |  |
| `certificate_chain_fingerprint_short` |  |
| `certificate_fingerprint` |  |
| `certificate_fingerprint_short` |  |
| `created_at` |  |
| `default` |  |
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
| `resource` |  |

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
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `distro_version` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `gpg_key_inline` |  |
| `gpg_key_url` |  |
| `gpg_verification` |  |
| `include_source` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verification_status` |  |
| `verify_ssl` |  |

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
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

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
| `description` |  |
| `key` |  |
| `key_expires_at` |  |
| `name` |  |
| `role` |  |
| `slug` |  |
| `team` |  |

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
| `detail` |  |
| `version` |  |

Operations: Load.

API path: `/status/check/basic/`

#### StorageRegion

| Field | Description |
| --- | --- |
| `label` |  |
| `slug` |  |

Operations: List, Load.

API path: `/storage-regions/`

#### Swift

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

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
| `created` |  |
| `key` |  |
| `slug_perm` |  |

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
| `created` |  |
| `key` |  |
| `slug_perm` |  |

Operations: Create, Update.

API path: `/user/tokens/`

#### UserBrief

| Field | Description |
| --- | --- |
| `authenticated` |  |
| `email` |  |
| `name` |  |
| `profile_url` |  |
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
| `tagline` |  |
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
| `created_at` |  |
| `has_vulnerability` |  |
| `identifier` |  |
| `max_severity` |  |
| `num_vulnerability` |  |
| `package` |  |
| `result` |  |
| `scan_id` |  |
| `target` |  |
| `type` |  |

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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
cargo = client.Cargo().load({"id": "cargo_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
cargos = client.Cargo().list()
```

#### Example: Create

```python
cargo = client.Cargo().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
composer = client.Composer().load({"id": "composer_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
composers = client.Composer().list()
```

#### Example: Create

```python
composer = client.Composer().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
conda = client.Conda().load({"id": "conda_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
condas = client.Conda().list()
```

#### Example: Create

```python
conda = client.Conda().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
cran = client.Cran().load({"id": "cran_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
crans = client.Cran().list()
```

#### Example: Create

```python
cran = client.Cran().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
dart = client.Dart().load({"id": "dart_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
darts = client.Dart().list()
```

#### Example: Create

```python
dart = client.Dart().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `component` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `distro_version` | `list` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `gpg_key_inline` | `str` |  |
| `gpg_key_url` | `str` |  |
| `gpg_verification` | `str` |  |
| `include_source` | `bool` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_distribution` | `str` |  |
| `upstream_url` | `str` |  |
| `verification_status` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
deb = client.Deb().load({"id": "deb_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
debs = client.Deb().list()
```

#### Example: Create

```python
deb = client.Deb().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `slug` | `str` |  |
| `variant` | `str` |  |
| `version` | `list` |  |

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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
docker = client.Docker().load({"id": "docker_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
dockers = client.Docker().list()
```

#### Example: Create

```python
docker = client.Docker().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `claim_value` | `str` |  |
| `service_account` | `str` |  |

#### Example: Load

```python
dynamic_mapping = client.DynamicMapping().load({"id": "dynamic_mapping_id", "openid_connect_id": "openid_connect_id", "org_id": "org_id"})
```

#### Example: List

```python
dynamic_mappings = client.DynamicMapping().list()
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
| `token` | `dict` |  |

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
| `description` | `str` |  |
| `distribution` | `list` |  |
| `extension` | `list` |  |
| `name` | `str` |  |
| `premium` | `bool` |  |
| `premium_plan_id` | `str` |  |
| `premium_plan_name` | `str` |  |
| `slug` | `str` |  |
| `support` | `dict` |  |

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


### Gon2

Create an instance: `gon2 = client.Gon2()`


### Gon3

Create an instance: `gon3 = client.Gon3()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: List

```python
gon3s = client.Gon3().list()
```


### Gon4

Create an instance: `gon4 = client.Gon4()`


### Gon5

Create an instance: `gon5 = client.Gon5()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
gon5 = client.Gon5().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
})
```


### Gon6

Create an instance: `gon6 = client.Gon6()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
gon6 = client.Gon6().load({"identifier": "identifier", "owner": "owner", "slug_perm": "slug_perm"})
```


### Gon7

Create an instance: `gon7 = client.Gon7()`


### Gon8

Create an instance: `gon8 = client.Gon8()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |


### Gon9

Create an instance: `gon9 = client.Gon9()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |


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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
helm = client.Helm().load({"id": "helm_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
helms = client.Helm().list()
```

#### Example: Create

```python
helm = client.Helm().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
hex = client.Hex().load({"id": "hex_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
hexs = client.Hex().list()
```

#### Example: Create

```python
hex = client.Hex().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
huggingface = client.Huggingface().load({"id": "huggingface_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
huggingfaces = client.Huggingface().list()
```

#### Example: Create

```python
huggingface = client.Huggingface().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `gpg_key_inline` | `str` |  |
| `gpg_key_url` | `str` |  |
| `gpg_verification` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verification_status` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
maven = client.Maven().load({"id": "maven_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
mavens = client.Maven().list()
```

#### Example: Create

```python
maven = client.Maven().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
npm = client.Npm().load({"id": "npm_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
npms = client.Npm().list()
```

#### Example: Create

```python
npm = client.Npm().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
nuget = client.Nuget().load({"id": "nuget_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
nugets = client.Nuget().list()
```

#### Example: Create

```python
nuget = client.Nuget().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `location` | `str` |  |
| `name` | `str` |  |
| `package` | `dict` |  |
| `policy` | `dict` |  |
| `reason` | `list` |  |
| `slug` | `str` |  |
| `slug_perm` | `str` |  |
| `tagline` | `str` |  |
| `vulnerability_scan_result` | `dict` |  |

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
organization_group_syncs = client.OrganizationGroupSync().list()
```

#### Example: Create

```python
organization_group_sync = client.OrganizationGroupSync().create({
    "org_id": "example_org_id",  # str
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
| `email` | `str` |  |
| `expires_at` | `str` |  |
| `inviter` | `str` |  |
| `inviter_url` | `str` |  |
| `org` | `str` |  |
| `role` | `str` |  |
| `slug_perm` | `str` |  |
| `team` | `list` |  |
| `user` | `str` |  |
| `user_url` | `str` |  |

#### Example: List

```python
organization_invites = client.OrganizationInvite().list()
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
| `email` | `str` |  |
| `expires_at` | `str` |  |
| `inviter` | `str` |  |
| `inviter_url` | `str` |  |
| `org` | `str` |  |
| `role` | `str` |  |
| `slug_perm` | `str` |  |
| `team` | `list` |  |
| `user` | `str` |  |
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
organization_memberships = client.OrganizationMembership().list()
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
| `allow_unknown_license` | `bool` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `name` | `str` |  |
| `on_violation_quarantine` | `bool` |  |
| `package_query_string` | `str` |  |
| `slug_perm` | `str` |  |
| `spdx_identifier` | `list` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
organization_package_license_policy = client.OrganizationPackageLicensePolicy().load({"id": "organization_package_license_policy_id", "org_id": "org_id"})
```

#### Example: List

```python
organization_package_license_policys = client.OrganizationPackageLicensePolicy().list()
```

#### Example: Create

```python
organization_package_license_policy = client.OrganizationPackageLicensePolicy().create({
    "org_id": "example_org_id",  # str
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
| `allow_unknown_severity` | `bool` |  |
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
organization_package_vulnerability_policys = client.OrganizationPackageVulnerabilityPolicy().list()
```

#### Example: Create

```python
organization_package_vulnerability_policy = client.OrganizationPackageVulnerabilityPolicy().create({
    "org_id": "example_org_id",  # str
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
| `saml_metadata_inline` | `str` |  |
| `saml_metadata_url` | `str` |  |

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
organization_teams = client.OrganizationTeam().list()
```

#### Example: Create

```python
organization_team = client.OrganizationTeam().create({
    "org_id": "example_org_id",  # str
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
organization_team_members = client.OrganizationTeamMember().list()
```

#### Example: Create

```python
organization_team_member = client.OrganizationTeamMember().create({
    "org_id": "example_org_id",  # str
    "team_id": "example_team_id",  # str
})
```


### Oss

Create an instance: `oss = client.Oss()`


### P2n

Create an instance: `p2n = client.P2n()`


### P2n2

Create an instance: `p2n2 = client.P2n2()`


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
| `architecture` | `list` |  |
| `backend_kind` | `int` |  |
| `cdn_url` | `str` |  |
| `checksum_md5` | `str` |  |
| `checksum_sha1` | `str` |  |
| `checksum_sha256` | `str` |  |
| `checksum_sha512` | `str` |  |
| `count` | `int` |  |
| `dep_type` | `str` |  |
| `dependencies_checksum_md5` | `str` |  |
| `dependencies_url` | `str` |  |
| `description` | `str` |  |
| `display_name` | `str` |  |
| `distro` | `dict` |  |
| `distro_version` | `dict` |  |
| `download` | `int` |  |
| `epoch` | `int` |  |
| `extension` | `str` |  |
| `file` | `list` |  |
| `filename` | `str` |  |
| `format` | `str` |  |
| `format_url` | `str` |  |
| `freeable_storage` | `int` |  |
| `fully_qualified_name` | `str` |  |
| `identifier` | `dict` |  |
| `identifier_perm` | `str` |  |
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
| `license` | `str` |  |
| `name` | `str` |  |
| `namespace` | `str` |  |
| `namespace_url` | `str` |  |
| `num_download` | `int` |  |
| `num_file` | `int` |  |
| `operator` | `str` |  |
| `origin_repository` | `str` |  |
| `origin_repository_url` | `str` |  |
| `package` | `dict` |  |
| `package_type` | `int` |  |
| `policy_violated` | `bool` |  |
| `release` | `str` |  |
| `repository` | `str` |  |
| `repository_url` | `str` |  |
| `security_scan_completed_at` | `str` |  |
| `security_scan_started_at` | `str` |  |
| `security_scan_status` | `str` |  |
| `security_scan_status_updated_at` | `str` |  |
| `self_html_url` | `str` |  |
| `self_url` | `str` |  |
| `signature_url` | `str` |  |
| `size` | `int` |  |
| `slug` | `str` |  |
| `slug_perm` | `str` |  |
| `stage` | `int` |  |
| `stage_str` | `str` |  |
| `stage_updated_at` | `str` |  |
| `status` | `int` |  |
| `status_reason` | `str` |  |
| `status_str` | `str` |  |
| `status_updated_at` | `str` |  |
| `status_url` | `str` |  |
| `subtype` | `str` |  |
| `summary` | `str` |  |
| `sync_finished_at` | `str` |  |
| `sync_progress` | `int` |  |
| `tag` | `dict` |  |
| `tags_immutable` | `dict` |  |
| `type_display` | `str` |  |
| `uploaded_at` | `str` |  |
| `uploader` | `str` |  |
| `uploader_url` | `str` |  |
| `version` | `str` |  |
| `version_orig` | `str` |  |
| `vulnerability_scan_results_url` | `str` |  |

#### Example: Load

```python
package = client.Package().load({"owner": "owner", "repo": "repo"})
```

#### Example: List

```python
packages = client.Package().list()
```

#### Example: Create

```python
package = client.Package().create({
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
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
| `enabled` | `bool` |  |
| `name` | `str` |  |
| `package_query_string` | `str` |  |
| `slug_perm` | `str` |  |
| `status` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
package_deny_policy = client.PackageDenyPolicy().load({"id": "package_deny_policy_id", "org_id": "org_id"})
```

#### Example: List

```python
package_deny_policys = client.PackageDenyPolicy().list()
```

#### Example: Create

```python
package_deny_policy = client.PackageDenyPolicy().create({
    "org_id": "example_org_id",  # str
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
| `identifier` | `str` |  |
| `upload_querystring` | `str` |  |
| `upload_url` | `str` |  |

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
| `created_at` | `str` |  |
| `evaluation_count` | `int` |  |
| `policy` | `dict` |  |
| `slug_perm` | `str` |  |
| `status` | `str` |  |
| `updated_at` | `str` |  |
| `violation_count` | `int` |  |

#### Example: Load

```python
package_license_policy_evaluation = client.PackageLicensePolicyEvaluation().load({"id": "package_license_policy_evaluation_id", "license_policy_id": "license_policy_id", "org_id": "org_id"})
```

#### Example: List

```python
package_license_policy_evaluations = client.PackageLicensePolicyEvaluation().list()
```

#### Example: Create

```python
package_license_policy_evaluation = client.PackageLicensePolicyEvaluation().create({
    "org_id": "example_org_id",  # str
    "policy_slug_perm": "example_policy_slug_perm",  # Any
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
| `created_at` | `str` |  |
| `evaluation_count` | `int` |  |
| `policy` | `dict` |  |
| `slug_perm` | `str` |  |
| `status` | `str` |  |
| `updated_at` | `str` |  |
| `violation_count` | `int` |  |

#### Example: Load

```python
package_vulnerability_policy_evaluation = client.PackageVulnerabilityPolicyEvaluation().load({"id": "package_vulnerability_policy_evaluation_id", "org_id": "org_id", "vulnerability_policy_id": "vulnerability_policy_id"})
```

#### Example: List

```python
package_vulnerability_policy_evaluations = client.PackageVulnerabilityPolicyEvaluation().list()
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
| `claim` | `dict` |  |
| `enabled` | `bool` |  |
| `mapping_claim` | `str` |  |
| `name` | `str` |  |
| `provider_url` | `str` |  |
| `service_account` | `list` |  |
| `slug` | `str` |  |
| `slug_perm` | `str` |  |

#### Example: Load

```python
provider_setting = client.ProviderSetting().load({"org_id": "org_id", "slug_perm": "slug_perm"})
```

#### Example: List

```python
provider_settings = client.ProviderSetting().list()
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
| `claim` | `dict` |  |
| `dynamic_mapping` | `list` |  |
| `enabled` | `bool` |  |
| `mapping_claim` | `str` |  |
| `name` | `str` |  |
| `provider_url` | `str` |  |
| `service_account` | `list` |  |
| `slug` | `str` |  |
| `slug_perm` | `str` |  |

#### Example: Create

```python
provider_settings_write = client.ProviderSettingsWrite().create({
    "org_id": "example_org_id",  # str
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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
python = client.Python().load({"id": "python_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
pythons = client.Python().list()
```

#### Example: Create

```python
python = client.Python().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `history` | `list` |  |
| `usage` | `dict` |  |

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
| `cdn_url` | `str` |  |
| `content_kind` | `str` |  |
| `contextual_auth_realm` | `bool` |  |
| `copy_own` | `bool` |  |
| `copy_package` | `str` |  |
| `cosign_signing_enabled` | `bool` |  |
| `created_at` | `str` |  |
| `default_privilege` | `str` |  |
| `delete_own` | `bool` |  |
| `delete_package` | `str` |  |
| `deleted_at` | `str` |  |
| `description` | `str` |  |
| `distribute` | `list` |  |
| `docker_refresh_tokens_enabled` | `bool` |  |
| `ecdsa_key` | `list` |  |
| `enforce_eula` | `bool` |  |
| `gpg_key` | `list` |  |
| `index_file` | `bool` |  |
| `is_open_source` | `bool` |  |
| `is_private` | `bool` |  |
| `is_public` | `bool` |  |
| `manage_entitlements_privilege` | `str` |  |
| `move_own` | `bool` |  |
| `move_package` | `str` |  |
| `name` | `str` |  |
| `namespace` | `str` |  |
| `namespace_url` | `str` |  |
| `nuget_native_signing_enabled` | `bool` |  |
| `num_download` | `int` |  |
| `num_policy_violated_package` | `int` |  |
| `num_quarantined_package` | `int` |  |
| `open_source_license` | `str` |  |
| `open_source_project_url` | `str` |  |
| `package_count` | `int` |  |
| `package_group_count` | `int` |  |
| `proxy_npmj` | `bool` |  |
| `proxy_pypi` | `bool` |  |
| `raw_package_index_enabled` | `bool` |  |
| `raw_package_index_signatures_enabled` | `bool` |  |
| `replace_package` | `str` |  |
| `replace_packages_by_default` | `bool` |  |
| `repository_type` | `int` |  |
| `repository_type_str` | `str` |  |
| `resync_own` | `bool` |  |
| `resync_package` | `str` |  |
| `scan_own` | `bool` |  |
| `scan_package` | `str` |  |
| `self_html_url` | `str` |  |
| `self_url` | `str` |  |
| `show_setup_all` | `bool` |  |
| `size` | `int` |  |
| `size_str` | `str` |  |
| `slug` | `str` |  |
| `slug_perm` | `str` |  |
| `storage_region` | `str` |  |
| `strict_npm_validation` | `bool` |  |
| `tag_pre_releases_as_latest` | `bool` |  |
| `use_debian_label` | `bool` |  |
| `use_default_cargo_upstream` | `bool` |  |
| `use_entitlements_privilege` | `str` |  |
| `use_noarch_package` | `bool` |  |
| `use_source_package` | `bool` |  |
| `use_vulnerability_scanning` | `bool` |  |
| `user_entitlements_enabled` | `bool` |  |
| `view_statistic` | `str` |  |

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
repository_audit_logs = client.RepositoryAuditLog().list()
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
| `active` | `bool` |  |
| `created_at` | `str` |  |
| `default` | `bool` |  |
| `fingerprint` | `str` |  |
| `fingerprint_short` | `str` |  |
| `public_key` | `str` |  |
| `ssh_fingerprint` | `str` |  |

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
| `geoip_enabled` | `bool` |  |

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
| `active` | `bool` |  |
| `comment` | `str` |  |
| `created_at` | `str` |  |
| `default` | `bool` |  |
| `fingerprint` | `str` |  |
| `fingerprint_short` | `str` |  |
| `public_key` | `str` |  |

#### Example: Load

```python
repository_gpg_key = client.RepositoryGpgKey().load({"identifier": "identifier", "owner": "owner"})
```

#### Example: Create

```python
repository_gpg_key = client.RepositoryGpgKey().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `privilege` | `str` |  |
| `service` | `str` |  |
| `team` | `str` |  |
| `user` | `str` |  |

#### Example: List

```python
repository_privilege_inputs = client.RepositoryPrivilegeInput().list()
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
| `retention_count_limit` | `int` |  |
| `retention_days_limit` | `int` |  |
| `retention_enabled` | `bool` |  |
| `retention_group_by_format` | `bool` |  |
| `retention_group_by_name` | `bool` |  |
| `retention_group_by_package_type` | `bool` |  |
| `retention_package_query_string` | `str` |  |
| `retention_size_limit` | `int` |  |

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
| `active` | `bool` |  |
| `created_at` | `str` |  |
| `default` | `bool` |  |
| `fingerprint` | `str` |  |
| `fingerprint_short` | `str` |  |
| `public_key` | `str` |  |
| `ssh_fingerprint` | `str` |  |

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
| `client` | `int` |  |
| `created_at` | `str` |  |
| `created_by` | `str` |  |
| `created_by_url` | `str` |  |
| `default` | `bool` |  |
| `disable_url` | `str` |  |
| `download` | `int` |  |
| `enable_url` | `str` |  |
| `eula_accepted` | `dict` |  |
| `eula_accepted_at` | `str` |  |
| `eula_accepted_from` | `str` |  |
| `eula_required` | `bool` |  |
| `has_limit` | `bool` |  |
| `identifier` | `int` |  |
| `is_active` | `bool` |  |
| `is_limited` | `bool` |  |
| `limit_bandwidth` | `int` |  |
| `limit_bandwidth_unit` | `str` |  |
| `limit_date_range_from` | `str` |  |
| `limit_date_range_to` | `str` |  |
| `limit_num_client` | `int` |  |
| `limit_num_download` | `int` |  |
| `limit_package_query` | `str` |  |
| `limit_path_query` | `str` |  |
| `metadata` | `dict` |  |
| `name` | `str` |  |
| `refresh_url` | `str` |  |
| `reset_url` | `str` |  |
| `scheduled_reset_at` | `str` |  |
| `scheduled_reset_period` | `str` |  |
| `self_url` | `str` |  |
| `slug_perm` | `str` |  |
| `token` | `str` |  |
| `updated_at` | `str` |  |
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
repository_tokens = client.RepositoryToken().list()
```

#### Example: Create

```python
repository_token = client.RepositoryToken().create({
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
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
| `client` | `int` |  |
| `created_at` | `str` |  |
| `created_by` | `str` |  |
| `created_by_url` | `str` |  |
| `default` | `bool` |  |
| `disable_url` | `str` |  |
| `download` | `int` |  |
| `enable_url` | `str` |  |
| `eula_accepted` | `dict` |  |
| `eula_accepted_at` | `str` |  |
| `eula_accepted_from` | `str` |  |
| `eula_required` | `bool` |  |
| `has_limit` | `bool` |  |
| `identifier` | `int` |  |
| `is_active` | `bool` |  |
| `is_limited` | `bool` |  |
| `limit_bandwidth` | `int` |  |
| `limit_bandwidth_unit` | `str` |  |
| `limit_date_range_from` | `str` |  |
| `limit_date_range_to` | `str` |  |
| `limit_num_client` | `int` |  |
| `limit_num_download` | `int` |  |
| `limit_package_query` | `str` |  |
| `limit_path_query` | `str` |  |
| `metadata` | `dict` |  |
| `name` | `str` |  |
| `refresh_url` | `str` |  |
| `reset_url` | `str` |  |
| `scheduled_reset_at` | `str` |  |
| `scheduled_reset_period` | `str` |  |
| `self_url` | `str` |  |
| `slug_perm` | `str` |  |
| `token` | `str` |  |
| `updated_at` | `str` |  |
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
| `token` | `list` |  |

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
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `created_by` | `str` |  |
| `created_by_url` | `str` |  |
| `disable_reason` | `int` |  |
| `disable_reason_str` | `str` |  |
| `event` | `list` |  |
| `identifier` | `int` |  |
| `is_active` | `bool` |  |
| `is_last_response_bad` | `bool` |  |
| `last_response_status` | `int` |  |
| `last_response_status_str` | `str` |  |
| `num_sent` | `int` |  |
| `package_query` | `str` |  |
| `request_body_format` | `int` |  |
| `request_body_format_str` | `str` |  |
| `request_body_template_format` | `int` |  |
| `request_body_template_format_str` | `str` |  |
| `request_content_type` | `str` |  |
| `secret_header` | `str` |  |
| `self_url` | `str` |  |
| `slug_perm` | `str` |  |
| `target_url` | `str` |  |
| `template` | `list` |  |
| `updated_at` | `str` |  |
| `updated_by` | `str` |  |
| `updated_by_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: List

```python
repository_webhooks = client.RepositoryWebhook().list()
```

#### Example: Create

```python
repository_webhook = client.RepositoryWebhook().create({
    "owner": "example_owner",  # Any
    "repo": "example_repo",  # Any
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
| `active` | `bool` |  |
| `certificate` | `str` |  |
| `certificate_chain` | `str` |  |
| `certificate_chain_fingerprint` | `str` |  |
| `certificate_chain_fingerprint_short` | `str` |  |
| `certificate_fingerprint` | `str` |  |
| `certificate_fingerprint_short` | `str` |  |
| `created_at` | `str` |  |
| `default` | `bool` |  |
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
| `active` | `bool` |  |
| `certificate` | `str` |  |
| `certificate_chain` | `str` |  |
| `certificate_chain_fingerprint` | `str` |  |
| `certificate_chain_fingerprint_short` | `str` |  |
| `certificate_fingerprint` | `str` |  |
| `certificate_fingerprint_short` | `str` |  |
| `created_at` | `str` |  |
| `default` | `bool` |  |
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
| `resource` | `dict` |  |

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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `distro_version` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `gpg_key_inline` | `str` |  |
| `gpg_key_url` | `str` |  |
| `gpg_verification` | `str` |  |
| `include_source` | `bool` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verification_status` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
rpm = client.Rpm().load({"id": "rpm_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
rpms = client.Rpm().list()
```

#### Example: Create

```python
rpm = client.Rpm().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
ruby = client.Ruby().load({"id": "ruby_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
rubys = client.Ruby().list()
```

#### Example: Create

```python
ruby = client.Ruby().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `description` | `str` |  |
| `key` | `str` |  |
| `key_expires_at` | `str` |  |
| `name` | `str` |  |
| `role` | `str` |  |
| `slug` | `str` |  |
| `team` | `list` |  |

#### Example: Load

```python
service = client.Service().load({"id": "service_id", "org_id": "org_id"})
```

#### Example: List

```python
services = client.Service().list()
```

#### Example: Create

```python
service = client.Service().create({
    "org_id": "example_org_id",  # str
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
| `detail` | `str` |  |
| `version` | `str` |  |

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
| `label` | `str` |  |
| `slug` | `str` |  |

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
| `auth_mode` | `str` |  |
| `auth_secret` | `str` |  |
| `auth_username` | `str` |  |
| `created_at` | `str` |  |
| `disable_reason` | `str` |  |
| `extra_header_1` | `str` |  |
| `extra_header_2` | `str` |  |
| `extra_value_1` | `str` |  |
| `extra_value_2` | `str` |  |
| `is_active` | `bool` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `str` |  |
| `updated_at` | `str` |  |
| `upstream_url` | `str` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```python
swift = client.Swift().load({"id": "swift_id", "identifier": "identifier", "owner": "owner"})
```

#### Example: List

```python
swifts = client.Swift().list()
```

#### Example: Create

```python
swift = client.Swift().create({
    "identifier": "example_identifier",  # Any
    "owner": "example_owner",  # Any
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
| `created` | `str` |  |
| `key` | `str` |  |
| `slug_perm` | `str` |  |

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
| `created` | `str` |  |
| `key` | `str` |  |
| `slug_perm` | `str` |  |

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
| `authenticated` | `bool` |  |
| `email` | `str` |  |
| `name` | `str` |  |
| `profile_url` | `str` |  |
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
| `tagline` | `str` |  |
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
| `created_at` | `str` |  |
| `has_vulnerability` | `bool` |  |
| `identifier` | `str` |  |
| `max_severity` | `str` |  |
| `num_vulnerability` | `int` |  |
| `package` | `dict` |  |
| `result` | `list` |  |
| `scan_id` | `int` |  |
| `target` | `str` |  |
| `type` | `str` |  |

#### Example: Load

```python
vulnerability = client.Vulnerability().load({"id": "vulnerability_id"})
```

#### Example: List

```python
vulnerabilitys = client.Vulnerability().list()
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

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
cargo = client.Cargo()
cargo.list()

# cargo.data_get() now returns the cargo data from the last list
# cargo.match_get() returns the last match criteria
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
