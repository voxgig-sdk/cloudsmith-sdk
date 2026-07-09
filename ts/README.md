# Cloudsmith TypeScript SDK



The TypeScript SDK for the Cloudsmith API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Abort()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudsmith-sdk/releases](https://github.com/voxgig-sdk/cloudsmith-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CloudsmithSDK } from '@voxgig-sdk/cloudsmith'

const client = new CloudsmithSDK({
  apikey: process.env.CLOUDSMITH_APIKEY,
})
```

### 3. Load a cargo

Cargo is nested under identifier, so provide the `identifier`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const cargo = await client.Cargo().load({
    identifier: 'example_identifier',
    owner: 'example_owner',
    id: 'example_id',
  })
  console.log(cargo)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const cargos = await client.Cargo().list()
  console.log(cargos)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CloudsmithSDK.test()

const cargo = await client.Cargo().list()
// cargo is a bare entity populated with mock response data
console.log(cargo)
```

You can also use the instance method:

```ts
const client = new CloudsmithSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Cargo()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CloudsmithSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```


## Reference

### CloudsmithSDK

#### Constructor

```ts
new CloudsmithSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Abort(data?)` | `AbortEntity` | Create an Abort entity instance. |
| `Alpine(data?)` | `AlpineEntity` | Create an Alpine entity instance. |
| `AuditLog(data?)` | `AuditLogEntity` | Create an AuditLog entity instance. |
| `Basic(data?)` | `BasicEntity` | Create a Basic entity instance. |
| `Cargo(data?)` | `CargoEntity` | Create a Cargo entity instance. |
| `Cocoapod(data?)` | `CocoapodEntity` | Create a Cocoapod entity instance. |
| `Complete(data?)` | `CompleteEntity` | Create a Complete entity instance. |
| `Composer(data?)` | `ComposerEntity` | Create a Composer entity instance. |
| `Conan(data?)` | `ConanEntity` | Create a Conan entity instance. |
| `Conda(data?)` | `CondaEntity` | Create a Conda entity instance. |
| `Copy(data?)` | `CopyEntity` | Create a Copy entity instance. |
| `Cran(data?)` | `CranEntity` | Create a Cran entity instance. |
| `Dart(data?)` | `DartEntity` | Create a Dart entity instance. |
| `Deb(data?)` | `DebEntity` | Create a Deb entity instance. |
| `DenyPolicy(data?)` | `DenyPolicyEntity` | Create a DenyPolicy entity instance. |
| `Dependency(data?)` | `DependencyEntity` | Create a Dependency entity instance. |
| `Disable(data?)` | `DisableEntity` | Create a Disable entity instance. |
| `DistributionFull(data?)` | `DistributionFullEntity` | Create a DistributionFull entity instance. |
| `Distro(data?)` | `DistroEntity` | Create a Distro entity instance. |
| `Docker(data?)` | `DockerEntity` | Create a Docker entity instance. |
| `DynamicMapping(data?)` | `DynamicMappingEntity` | Create a DynamicMapping entity instance. |
| `Ecdsa(data?)` | `EcdsaEntity` | Create an Ecdsa entity instance. |
| `Enable(data?)` | `EnableEntity` | Create an Enable entity instance. |
| `Entitlement(data?)` | `EntitlementEntity` | Create an Entitlement entity instance. |
| `Evaluation(data?)` | `EvaluationEntity` | Create an Evaluation entity instance. |
| `File(data?)` | `FileEntity` | Create a File entity instance. |
| `Format(data?)` | `FormatEntity` | Create a Format entity instance. |
| `Geoip(data?)` | `GeoipEntity` | Create a Geoip entity instance. |
| `Gon(data?)` | `GonEntity` | Create a Gon entity instance. |
| `Gon2(data?)` | `Gon2Entity` | Create a Gon2 entity instance. |
| `Gon3(data?)` | `Gon3Entity` | Create a Gon3 entity instance. |
| `Gon4(data?)` | `Gon4Entity` | Create a Gon4 entity instance. |
| `Gon5(data?)` | `Gon5Entity` | Create a Gon5 entity instance. |
| `Gon6(data?)` | `Gon6Entity` | Create a Gon6 entity instance. |
| `Gon7(data?)` | `Gon7Entity` | Create a Gon7 entity instance. |
| `Gon8(data?)` | `Gon8Entity` | Create a Gon8 entity instance. |
| `Gon9(data?)` | `Gon9Entity` | Create a Gon9 entity instance. |
| `Gpg(data?)` | `GpgEntity` | Create a Gpg entity instance. |
| `Group(data?)` | `GroupEntity` | Create a Group entity instance. |
| `Helm(data?)` | `HelmEntity` | Create a Helm entity instance. |
| `Hex(data?)` | `HexEntity` | Create a Hex entity instance. |
| `History(data?)` | `HistoryEntity` | Create a History entity instance. |
| `Huggingface(data?)` | `HuggingfaceEntity` | Create a Huggingface entity instance. |
| `Info(data?)` | `InfoEntity` | Create an Info entity instance. |
| `Invite(data?)` | `InviteEntity` | Create an Invite entity instance. |
| `LicensePolicy(data?)` | `LicensePolicyEntity` | Create a LicensePolicy entity instance. |
| `Limit(data?)` | `LimitEntity` | Create a Limit entity instance. |
| `Luarock(data?)` | `LuarockEntity` | Create a Luarock entity instance. |
| `Maven(data?)` | `MavenEntity` | Create a Maven entity instance. |
| `Member(data?)` | `MemberEntity` | Create a Member entity instance. |
| `Move(data?)` | `MoveEntity` | Create a Move entity instance. |
| `Namespace(data?)` | `NamespaceEntity` | Create a Namespace entity instance. |
| `NamespaceAuditLog(data?)` | `NamespaceAuditLogEntity` | Create a NamespaceAuditLog entity instance. |
| `Npm(data?)` | `NpmEntity` | Create a Npm entity instance. |
| `Nuget(data?)` | `NugetEntity` | Create a Nuget entity instance. |
| `OpenidConnect(data?)` | `OpenidConnectEntity` | Create an OpenidConnect entity instance. |
| `Org(data?)` | `OrgEntity` | Create an Org entity instance. |
| `OrganizationGroupSync(data?)` | `OrganizationGroupSyncEntity` | Create an OrganizationGroupSync entity instance. |
| `OrganizationGroupSyncStatus(data?)` | `OrganizationGroupSyncStatusEntity` | Create an OrganizationGroupSyncStatus entity instance. |
| `OrganizationInvite(data?)` | `OrganizationInviteEntity` | Create an OrganizationInvite entity instance. |
| `OrganizationInviteExtend(data?)` | `OrganizationInviteExtendEntity` | Create an OrganizationInviteExtend entity instance. |
| `OrganizationMembership(data?)` | `OrganizationMembershipEntity` | Create an OrganizationMembership entity instance. |
| `OrganizationMembershipRoleUpdate(data?)` | `OrganizationMembershipRoleUpdateEntity` | Create an OrganizationMembershipRoleUpdate entity instance. |
| `OrganizationMembershipVisibilityUpdate(data?)` | `OrganizationMembershipVisibilityUpdateEntity` | Create an OrganizationMembershipVisibilityUpdate entity instance. |
| `OrganizationPackageLicensePolicy(data?)` | `OrganizationPackageLicensePolicyEntity` | Create an OrganizationPackageLicensePolicy entity instance. |
| `OrganizationPackageVulnerabilityPolicy(data?)` | `OrganizationPackageVulnerabilityPolicyEntity` | Create an OrganizationPackageVulnerabilityPolicy entity instance. |
| `OrganizationSamlAuth(data?)` | `OrganizationSamlAuthEntity` | Create an OrganizationSamlAuth entity instance. |
| `OrganizationTeam(data?)` | `OrganizationTeamEntity` | Create an OrganizationTeam entity instance. |
| `OrganizationTeamMember(data?)` | `OrganizationTeamMemberEntity` | Create an OrganizationTeamMember entity instance. |
| `Oss(data?)` | `OssEntity` | Create an Oss entity instance. |
| `P2n(data?)` | `P2nEntity` | Create a P2n entity instance. |
| `P2n2(data?)` | `P2n2Entity` | Create a P2n2 entity instance. |
| `Package(data?)` | `PackageEntity` | Create a Package entity instance. |
| `PackageDenyPolicy(data?)` | `PackageDenyPolicyEntity` | Create a PackageDenyPolicy entity instance. |
| `PackageFilePartsUpload(data?)` | `PackageFilePartsUploadEntity` | Create a PackageFilePartsUpload entity instance. |
| `PackageFileUpload(data?)` | `PackageFileUploadEntity` | Create a PackageFileUpload entity instance. |
| `PackageLicensePolicyEvaluation(data?)` | `PackageLicensePolicyEvaluationEntity` | Create a PackageLicensePolicyEvaluation entity instance. |
| `PackageVersionBadge(data?)` | `PackageVersionBadgeEntity` | Create a PackageVersionBadge entity instance. |
| `PackageVulnerabilityPolicyEvaluation(data?)` | `PackageVulnerabilityPolicyEvaluationEntity` | Create a PackageVulnerabilityPolicyEvaluation entity instance. |
| `Privilege(data?)` | `PrivilegeEntity` | Create a Privilege entity instance. |
| `Profile(data?)` | `ProfileEntity` | Create a Profile entity instance. |
| `ProviderSetting(data?)` | `ProviderSettingEntity` | Create a ProviderSetting entity instance. |
| `ProviderSettingsWrite(data?)` | `ProviderSettingsWriteEntity` | Create a ProviderSettingsWrite entity instance. |
| `Python(data?)` | `PythonEntity` | Create a Python entity instance. |
| `Quarantine(data?)` | `QuarantineEntity` | Create a Quarantine entity instance. |
| `Quota(data?)` | `QuotaEntity` | Create a Quota entity instance. |
| `Raw(data?)` | `RawEntity` | Create a Raw entity instance. |
| `Refresh(data?)` | `RefreshEntity` | Create a Refresh entity instance. |
| `Regenerate(data?)` | `RegenerateEntity` | Create a Regenerate entity instance. |
| `Repo(data?)` | `RepoEntity` | Create a Repo entity instance. |
| `RepositoryAuditLog(data?)` | `RepositoryAuditLogEntity` | Create a RepositoryAuditLog entity instance. |
| `RepositoryEcdsaKey(data?)` | `RepositoryEcdsaKeyEntity` | Create a RepositoryEcdsaKey entity instance. |
| `RepositoryGeoIpRule(data?)` | `RepositoryGeoIpRuleEntity` | Create a RepositoryGeoIpRule entity instance. |
| `RepositoryGeoIpStatus(data?)` | `RepositoryGeoIpStatusEntity` | Create a RepositoryGeoIpStatus entity instance. |
| `RepositoryGeoIpTestAddress(data?)` | `RepositoryGeoIpTestAddressEntity` | Create a RepositoryGeoIpTestAddress entity instance. |
| `RepositoryGpgKey(data?)` | `RepositoryGpgKeyEntity` | Create a RepositoryGpgKey entity instance. |
| `RepositoryPrivilegeInput(data?)` | `RepositoryPrivilegeInputEntity` | Create a RepositoryPrivilegeInput entity instance. |
| `RepositoryRetentionRule(data?)` | `RepositoryRetentionRuleEntity` | Create a RepositoryRetentionRule entity instance. |
| `RepositoryRsaKey(data?)` | `RepositoryRsaKeyEntity` | Create a RepositoryRsaKey entity instance. |
| `RepositoryToken(data?)` | `RepositoryTokenEntity` | Create a RepositoryToken entity instance. |
| `RepositoryTokenRefresh(data?)` | `RepositoryTokenRefreshEntity` | Create a RepositoryTokenRefresh entity instance. |
| `RepositoryTokenSync(data?)` | `RepositoryTokenSyncEntity` | Create a RepositoryTokenSync entity instance. |
| `RepositoryWebhook(data?)` | `RepositoryWebhookEntity` | Create a RepositoryWebhook entity instance. |
| `RepositoryX509EcdsaCertificate(data?)` | `RepositoryX509EcdsaCertificateEntity` | Create a RepositoryX509EcdsaCertificate entity instance. |
| `RepositoryX509RsaCertificate(data?)` | `RepositoryX509RsaCertificateEntity` | Create a RepositoryX509RsaCertificate entity instance. |
| `Reset(data?)` | `ResetEntity` | Create a Reset entity instance. |
| `ResourcesRateCheck(data?)` | `ResourcesRateCheckEntity` | Create a ResourcesRateCheck entity instance. |
| `Resync(data?)` | `ResyncEntity` | Create a Resync entity instance. |
| `Retention(data?)` | `RetentionEntity` | Create a Retention entity instance. |
| `Rpm(data?)` | `RpmEntity` | Create a Rpm entity instance. |
| `Rsa(data?)` | `RsaEntity` | Create a Rsa entity instance. |
| `Ruby(data?)` | `RubyEntity` | Create a Ruby entity instance. |
| `SamlGroupSync(data?)` | `SamlGroupSyncEntity` | Create a SamlGroupSync entity instance. |
| `Scan(data?)` | `ScanEntity` | Create a Scan entity instance. |
| `Self(data?)` | `SelfEntity` | Create a Self entity instance. |
| `Service(data?)` | `ServiceEntity` | Create a Service entity instance. |
| `Status(data?)` | `StatusEntity` | Create a Status entity instance. |
| `StatusBasic(data?)` | `StatusBasicEntity` | Create a StatusBasic entity instance. |
| `StorageRegion(data?)` | `StorageRegionEntity` | Create a StorageRegion entity instance. |
| `Swift(data?)` | `SwiftEntity` | Create a Swift entity instance. |
| `Sync(data?)` | `SyncEntity` | Create a Sync entity instance. |
| `Tag(data?)` | `TagEntity` | Create a Tag entity instance. |
| `Team(data?)` | `TeamEntity` | Create a Team entity instance. |
| `Terraform(data?)` | `TerraformEntity` | Create a Terraform entity instance. |
| `Test(data?)` | `TestEntity` | Create a Test entity instance. |
| `Token(data?)` | `TokenEntity` | Create a Token entity instance. |
| `TransferRegion(data?)` | `TransferRegionEntity` | Create a TransferRegion entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `UserAuthToken(data?)` | `UserAuthTokenEntity` | Create an UserAuthToken entity instance. |
| `UserAuthenticationToken(data?)` | `UserAuthenticationTokenEntity` | Create an UserAuthenticationToken entity instance. |
| `UserBrief(data?)` | `UserBriefEntity` | Create an UserBrief entity instance. |
| `UserProfile(data?)` | `UserProfileEntity` | Create an UserProfile entity instance. |
| `Vagrant(data?)` | `VagrantEntity` | Create a Vagrant entity instance. |
| `Validate(data?)` | `ValidateEntity` | Create a Validate entity instance. |
| `Version(data?)` | `VersionEntity` | Create a Version entity instance. |
| `Vulnerability(data?)` | `VulnerabilityEntity` | Create a Vulnerability entity instance. |
| `VulnerabilityPolicy(data?)` | `VulnerabilityPolicyEntity` | Create a VulnerabilityPolicy entity instance. |
| `Webhook(data?)` | `WebhookEntity` | Create a Webhook entity instance. |
| `X509Ecdsa(data?)` | `X509EcdsaEntity` | Create a X509Ecdsa entity instance. |
| `X509Rsa(data?)` | `X509RsaEntity` | Create a X509Rsa entity instance. |
| `tester(testopts?, sdkopts?)` | `CloudsmithSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CloudsmithSDK.test(testopts?, sdkopts?)` | `CloudsmithSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CloudsmithSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

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

Operations: list, load.

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

Operations: create, list, load, patch, update.

API path: `/repos/{owner}/{identifier}/upstream/docker/`

#### DynamicMapping

| Field | Description |
| --- | --- |
| `claim_value` |  |
| `service_account` |  |

Operations: list, load.

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

Operations: create, load, remove.

API path: `/entitlements/{owner}/{repo}/{identifier}/reset/`

#### Evaluation

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### File

| Field | Description |
| --- | --- |

Operations: create.

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

Operations: list, load.

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

Operations: list.

API path: `/repos/{owner}/{identifier}/upstream/go/`

#### Gon4

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Gon5

| Field | Description |
| --- | --- |

Operations: create.

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

Operations: load.

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

Operations: update.

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

Operations: update.

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

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

Operations: list, load.

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

Operations: load.

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, remove, update.

API path: `/orgs/{org}/members/{member}/refresh/`

#### OrganizationGroupSync

| Field | Description |
| --- | --- |
| `idp_key` |  |
| `idp_value` |  |
| `role` |  |
| `slug_perm` |  |
| `team` |  |

Operations: create, list.

API path: `/orgs/{org}/saml-group-sync/`

#### OrganizationGroupSyncStatus

| Field | Description |
| --- | --- |
| `saml_group_sync_status` |  |

Operations: load.

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

Operations: create, list, update.

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

Operations: create.

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

Operations: list, load, update.

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

Operations: update.

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

Operations: update.

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

API path: `/orgs/{org}/vulnerability-policy/`

#### OrganizationSamlAuth

| Field | Description |
| --- | --- |
| `saml_auth_enabled` |  |
| `saml_auth_enforced` |  |
| `saml_metadata_inline` |  |
| `saml_metadata_url` |  |

Operations: load, update.

API path: `/orgs/{org}/saml-authentication`

#### OrganizationTeam

| Field | Description |
| --- | --- |
| `description` |  |
| `name` |  |
| `slug` |  |
| `slug_perm` |  |
| `visibility` |  |

Operations: create, list, load, update.

API path: `/orgs/{org}/teams/`

#### OrganizationTeamMember

| Field | Description |
| --- | --- |
| `role` |  |
| `user` |  |

Operations: create, list.

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

Operations: create, list, load, remove.

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

Operations: create, list, load, patch, update.

API path: `/orgs/{org}/deny-policy/`

#### PackageFilePartsUpload

| Field | Description |
| --- | --- |
| `identifier` |  |
| `upload_querystring` |  |
| `upload_url` |  |

Operations: load.

API path: `/files/{owner}/{repo}/{identifier}/info/`

#### PackageFileUpload

| Field | Description |
| --- | --- |

Operations: create.

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

Operations: create, list, load.

API path: `/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/`

#### PackageVersionBadge

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: create, list, load.

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

Operations: list, load.

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

Operations: create, patch, update.

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

Operations: create, list, load, patch, update.

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

Operations: load.

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

Operations: create, list, load, patch, remove, update.

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

Operations: list.

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

Operations: create, load.

API path: `/repos/{owner}/{identifier}/ecdsa/`

#### RepositoryGeoIpRule

| Field | Description |
| --- | --- |
| `cidr` |  |
| `country_code` |  |

Operations: load, patch, update.

API path: `/repos/{owner}/{identifier}/geoip`

#### RepositoryGeoIpStatus

| Field | Description |
| --- | --- |
| `geoip_enabled` |  |

Operations: load.

API path: `/repos/{owner}/{identifier}/geoip/status/`

#### RepositoryGeoIpTestAddress

| Field | Description |
| --- | --- |

Operations: create.

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

Operations: create, load.

API path: `/repos/{owner}/{identifier}/gpg/`

#### RepositoryPrivilegeInput

| Field | Description |
| --- | --- |
| `privilege` |  |
| `service` |  |
| `team` |  |
| `user` |  |

Operations: list.

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

Operations: load, update.

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

Operations: create, load.

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

Operations: create, list, load, update.

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

Operations: create.

API path: `/entitlements/{owner}/{repo}/{identifier}/refresh/`

#### RepositoryTokenSync

| Field | Description |
| --- | --- |
| `token` |  |

Operations: create.

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

Operations: create, list, update.

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

Operations: load.

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

Operations: load.

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

Operations: load.

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, update.

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

Operations: load.

API path: `/status/check/basic/`

#### StorageRegion

| Field | Description |
| --- | --- |
| `label` |  |
| `slug` |  |

Operations: list, load.

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

Operations: create, list, load, patch, update.

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

Operations: list.

API path: `/user/tokens/`

#### UserAuthToken

| Field | Description |
| --- | --- |

Operations: create.

API path: `/user/token/`

#### UserAuthenticationToken

| Field | Description |
| --- | --- |
| `created` |  |
| `key` |  |
| `slug_perm` |  |

Operations: create, update.

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

Operations: load.

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

Operations: load.

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

Operations: list, load.

API path: `/vulnerabilities/{owner}/{repo}/{package}/`

#### VulnerabilityPolicy

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Webhook

| Field | Description |
| --- | --- |

Operations: remove.

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

Create an instance: `const abort = client.Abort()`


### Alpine

Create an instance: `const alpine = client.Alpine()`


### AuditLog

Create an instance: `const audit_log = client.AuditLog()`


### Basic

Create an instance: `const basic = client.Basic()`


### Cargo

Create an instance: `const cargo = client.Cargo()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const cargo = await client.Cargo().load({ id: 'cargo_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const cargos = await client.Cargo().list()
```

#### Example: Create

```ts
const cargo = await client.Cargo().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### Cocoapod

Create an instance: `const cocoapod = client.Cocoapod()`


### Complete

Create an instance: `const complete = client.Complete()`


### Composer

Create an instance: `const composer = client.Composer()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const composer = await client.Composer().load({ id: 'composer_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const composers = await client.Composer().list()
```

#### Example: Create

```ts
const composer = await client.Composer().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### Conan

Create an instance: `const conan = client.Conan()`


### Conda

Create an instance: `const conda = client.Conda()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const conda = await client.Conda().load({ id: 'conda_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const condas = await client.Conda().list()
```

#### Example: Create

```ts
const conda = await client.Conda().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### Copy

Create an instance: `const copy = client.Copy()`


### Cran

Create an instance: `const cran = client.Cran()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const cran = await client.Cran().load({ id: 'cran_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const crans = await client.Cran().list()
```

#### Example: Create

```ts
const cran = await client.Cran().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### Dart

Create an instance: `const dart = client.Dart()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const dart = await client.Dart().load({ id: 'dart_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const darts = await client.Dart().list()
```

#### Example: Create

```ts
const dart = await client.Dart().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### Deb

Create an instance: `const deb = client.Deb()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `component` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `distro_version` | `any[]` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `gpg_key_inline` | `string` |  |
| `gpg_key_url` | `string` |  |
| `gpg_verification` | `string` |  |
| `include_source` | `boolean` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_distribution` | `string` |  |
| `upstream_url` | `string` |  |
| `verification_status` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const deb = await client.Deb().load({ id: 'deb_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const debs = await client.Deb().list()
```

#### Example: Create

```ts
const deb = await client.Deb().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### DenyPolicy

Create an instance: `const deny_policy = client.DenyPolicy()`


### Dependency

Create an instance: `const dependency = client.Dependency()`


### Disable

Create an instance: `const disable = client.Disable()`


### DistributionFull

Create an instance: `const distribution_full = client.DistributionFull()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `format` | `string` |  |
| `format_url` | `string` |  |
| `name` | `string` |  |
| `self_url` | `string` |  |
| `slug` | `string` |  |
| `variant` | `string` |  |
| `version` | `any[]` |  |

#### Example: Load

```ts
const distribution_full = await client.DistributionFull().load({ slug: 'slug' })
```

#### Example: List

```ts
const distribution_fulls = await client.DistributionFull().list()
```


### Distro

Create an instance: `const distro = client.Distro()`


### Docker

Create an instance: `const docker = client.Docker()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const docker = await client.Docker().load({ id: 'docker_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const dockers = await client.Docker().list()
```

#### Example: Create

```ts
const docker = await client.Docker().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### DynamicMapping

Create an instance: `const dynamic_mapping = client.DynamicMapping()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claim_value` | `string` |  |
| `service_account` | `string` |  |

#### Example: Load

```ts
const dynamic_mapping = await client.DynamicMapping().load({ id: 'dynamic_mapping_id', openid_connect_id: 'openid_connect_id', org_id: 'org_id' })
```

#### Example: List

```ts
const dynamic_mappings = await client.DynamicMapping().list()
```


### Ecdsa

Create an instance: `const ecdsa = client.Ecdsa()`


### Enable

Create an instance: `const enable = client.Enable()`


### Entitlement

Create an instance: `const entitlement = client.Entitlement()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `token` | `Record<string, any>` |  |

#### Example: Load

```ts
const entitlement = await client.Entitlement().load({ id: 'entitlement_id' })
```

#### Example: Create

```ts
const entitlement = await client.Entitlement().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  repo: 'example_repo',
})
```


### Evaluation

Create an instance: `const evaluation = client.Evaluation()`


### File

Create an instance: `const file = client.File()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const file = await client.File().create({
  owner: 'example_owner',
  repo: 'example_repo',
})
```


### Format

Create an instance: `const format = client.Format()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `distribution` | `any[]` |  |
| `extension` | `any[]` |  |
| `name` | `string` |  |
| `premium` | `boolean` |  |
| `premium_plan_id` | `string` |  |
| `premium_plan_name` | `string` |  |
| `slug` | `string` |  |
| `support` | `Record<string, any>` |  |

#### Example: Load

```ts
const format = await client.Format().load({ id: 'format_id' })
```

#### Example: List

```ts
const formats = await client.Format().list()
```


### Geoip

Create an instance: `const geoip = client.Geoip()`


### Gon

Create an instance: `const gon = client.Gon()`


### Gon2

Create an instance: `const gon2 = client.Gon2()`


### Gon3

Create an instance: `const gon3 = client.Gon3()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: List

```ts
const gon3s = await client.Gon3().list()
```


### Gon4

Create an instance: `const gon4 = client.Gon4()`


### Gon5

Create an instance: `const gon5 = client.Gon5()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const gon5 = await client.Gon5().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### Gon6

Create an instance: `const gon6 = client.Gon6()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const gon6 = await client.Gon6().load({ identifier: 'identifier', owner: 'owner', slug_perm: 'slug_perm' })
```


### Gon7

Create an instance: `const gon7 = client.Gon7()`


### Gon8

Create an instance: `const gon8 = client.Gon8()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |


### Gon9

Create an instance: `const gon9 = client.Gon9()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |


### Gpg

Create an instance: `const gpg = client.Gpg()`


### Group

Create an instance: `const group = client.Group()`


### Helm

Create an instance: `const helm = client.Helm()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const helm = await client.Helm().load({ id: 'helm_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const helms = await client.Helm().list()
```

#### Example: Create

```ts
const helm = await client.Helm().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### Hex

Create an instance: `const hex = client.Hex()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const hex = await client.Hex().load({ id: 'hex_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const hexs = await client.Hex().list()
```

#### Example: Create

```ts
const hex = await client.Hex().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### History

Create an instance: `const history = client.History()`


### Huggingface

Create an instance: `const huggingface = client.Huggingface()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const huggingface = await client.Huggingface().load({ id: 'huggingface_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const huggingfaces = await client.Huggingface().list()
```

#### Example: Create

```ts
const huggingface = await client.Huggingface().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### Info

Create an instance: `const info = client.Info()`


### Invite

Create an instance: `const invite = client.Invite()`


### LicensePolicy

Create an instance: `const license_policy = client.LicensePolicy()`


### Limit

Create an instance: `const limit = client.Limit()`


### Luarock

Create an instance: `const luarock = client.Luarock()`


### Maven

Create an instance: `const maven = client.Maven()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `gpg_key_inline` | `string` |  |
| `gpg_key_url` | `string` |  |
| `gpg_verification` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verification_status` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const maven = await client.Maven().load({ id: 'maven_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const mavens = await client.Maven().list()
```

#### Example: Create

```ts
const maven = await client.Maven().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### Member

Create an instance: `const member = client.Member()`


### Move

Create an instance: `const move = client.Move()`


### Namespace

Create an instance: `const namespace = client.Namespace()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `type_name` | `string` |  |

#### Example: Load

```ts
const namespace = await client.Namespace().load({ id: 'namespace_id' })
```

#### Example: List

```ts
const namespaces = await client.Namespace().list()
```


### NamespaceAuditLog

Create an instance: `const namespace_audit_log = client.NamespaceAuditLog()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `string` |  |
| `actor_ip_address` | `string` |  |
| `actor_kind` | `string` |  |
| `actor_location` | `Record<string, any>` |  |
| `actor_slug_perm` | `string` |  |
| `actor_url` | `string` |  |
| `context` | `string` |  |
| `event` | `string` |  |
| `event_at` | `string` |  |
| `object` | `string` |  |
| `object_kind` | `string` |  |
| `object_slug_perm` | `string` |  |
| `target` | `string` |  |
| `target_kind` | `string` |  |
| `target_slug_perm` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```ts
const namespace_audit_log = await client.NamespaceAuditLog().load({ id: 'namespace_audit_log_id' })
```


### Npm

Create an instance: `const npm = client.Npm()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const npm = await client.Npm().load({ id: 'npm_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const npms = await client.Npm().list()
```

#### Example: Create

```ts
const npm = await client.Npm().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### Nuget

Create an instance: `const nuget = client.Nuget()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const nuget = await client.Nuget().load({ id: 'nuget_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const nugets = await client.Nuget().list()
```

#### Example: Create

```ts
const nuget = await client.Nuget().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### OpenidConnect

Create an instance: `const openid_connect = client.OpenidConnect()`


### Org

Create an instance: `const org = client.Org()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `country` | `string` |  |
| `created_at` | `string` |  |
| `event_at` | `string` |  |
| `location` | `string` |  |
| `name` | `string` |  |
| `package` | `Record<string, any>` |  |
| `policy` | `Record<string, any>` |  |
| `reason` | `any[]` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `tagline` | `string` |  |
| `vulnerability_scan_result` | `Record<string, any>` |  |

#### Example: Load

```ts
const org = await client.Org().load({ id: 'org_id' })
```

#### Example: List

```ts
const orgs = await client.Org().list()
```

#### Example: Create

```ts
const org = await client.Org().create({
  id: 'example_id',
})
```


### OrganizationGroupSync

Create an instance: `const organization_group_sync = client.OrganizationGroupSync()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `idp_key` | `string` |  |
| `idp_value` | `string` |  |
| `role` | `string` |  |
| `slug_perm` | `string` |  |
| `team` | `string` |  |

#### Example: List

```ts
const organization_group_syncs = await client.OrganizationGroupSync().list()
```

#### Example: Create

```ts
const organization_group_sync = await client.OrganizationGroupSync().create({
  org_id: 'example_org_id',
})
```


### OrganizationGroupSyncStatus

Create an instance: `const organization_group_sync_status = client.OrganizationGroupSyncStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `saml_group_sync_status` | `boolean` |  |

#### Example: Load

```ts
const organization_group_sync_status = await client.OrganizationGroupSyncStatus().load({ org_id: 'org_id' })
```


### OrganizationInvite

Create an instance: `const organization_invite = client.OrganizationInvite()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `expires_at` | `string` |  |
| `inviter` | `string` |  |
| `inviter_url` | `string` |  |
| `org` | `string` |  |
| `role` | `string` |  |
| `slug_perm` | `string` |  |
| `team` | `any[]` |  |
| `user` | `string` |  |
| `user_url` | `string` |  |

#### Example: List

```ts
const organization_invites = await client.OrganizationInvite().list()
```

#### Example: Create

```ts
const organization_invite = await client.OrganizationInvite().create({
  org_id: 'example_org_id',
})
```


### OrganizationInviteExtend

Create an instance: `const organization_invite_extend = client.OrganizationInviteExtend()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `expires_at` | `string` |  |
| `inviter` | `string` |  |
| `inviter_url` | `string` |  |
| `org` | `string` |  |
| `role` | `string` |  |
| `slug_perm` | `string` |  |
| `team` | `any[]` |  |
| `user` | `string` |  |
| `user_url` | `string` |  |

#### Example: Create

```ts
const organization_invite_extend = await client.OrganizationInviteExtend().create({
  org_id: 'example_org_id',
  slug_perm: 'example_slug_perm',
})
```


### OrganizationMembership

Create an instance: `const organization_membership = client.OrganizationMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `has_two_factor` | `boolean` |  |
| `is_active` | `boolean` |  |
| `joined_at` | `string` |  |
| `last_login_at` | `string` |  |
| `last_login_method` | `string` |  |
| `role` | `string` |  |
| `user` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `string` |  |
| `user_url` | `string` |  |
| `visibility` | `string` |  |

#### Example: Load

```ts
const organization_membership = await client.OrganizationMembership().load({ member: 'member', org_id: 'org_id' })
```

#### Example: List

```ts
const organization_memberships = await client.OrganizationMembership().list()
```


### OrganizationMembershipRoleUpdate

Create an instance: `const organization_membership_role_update = client.OrganizationMembershipRoleUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `has_two_factor` | `boolean` |  |
| `joined_at` | `string` |  |
| `last_login_at` | `string` |  |
| `last_login_method` | `string` |  |
| `role` | `string` |  |
| `user` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `string` |  |
| `user_url` | `string` |  |
| `visibility` | `string` |  |


### OrganizationMembershipVisibilityUpdate

Create an instance: `const organization_membership_visibility_update = client.OrganizationMembershipVisibilityUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `has_two_factor` | `boolean` |  |
| `joined_at` | `string` |  |
| `last_login_at` | `string` |  |
| `last_login_method` | `string` |  |
| `role` | `string` |  |
| `user` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `string` |  |
| `user_url` | `string` |  |
| `visibility` | `string` |  |


### OrganizationPackageLicensePolicy

Create an instance: `const organization_package_license_policy = client.OrganizationPackageLicensePolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_unknown_license` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `boolean` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `spdx_identifier` | `any[]` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const organization_package_license_policy = await client.OrganizationPackageLicensePolicy().load({ id: 'organization_package_license_policy_id', org_id: 'org_id' })
```

#### Example: List

```ts
const organization_package_license_policys = await client.OrganizationPackageLicensePolicy().list()
```

#### Example: Create

```ts
const organization_package_license_policy = await client.OrganizationPackageLicensePolicy().create({
  org_id: 'example_org_id',
})
```


### OrganizationPackageVulnerabilityPolicy

Create an instance: `const organization_package_vulnerability_policy = client.OrganizationPackageVulnerabilityPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_unknown_severity` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `min_severity` | `string` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `boolean` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const organization_package_vulnerability_policy = await client.OrganizationPackageVulnerabilityPolicy().load({ id: 'organization_package_vulnerability_policy_id', org_id: 'org_id' })
```

#### Example: List

```ts
const organization_package_vulnerability_policys = await client.OrganizationPackageVulnerabilityPolicy().list()
```

#### Example: Create

```ts
const organization_package_vulnerability_policy = await client.OrganizationPackageVulnerabilityPolicy().create({
  org_id: 'example_org_id',
})
```


### OrganizationSamlAuth

Create an instance: `const organization_saml_auth = client.OrganizationSamlAuth()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `saml_auth_enabled` | `boolean` |  |
| `saml_auth_enforced` | `boolean` |  |
| `saml_metadata_inline` | `string` |  |
| `saml_metadata_url` | `string` |  |

#### Example: Load

```ts
const organization_saml_auth = await client.OrganizationSamlAuth().load({ org_id: 'org_id' })
```


### OrganizationTeam

Create an instance: `const organization_team = client.OrganizationTeam()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `visibility` | `string` |  |

#### Example: Load

```ts
const organization_team = await client.OrganizationTeam().load({ id: 'organization_team_id', org_id: 'org_id' })
```

#### Example: List

```ts
const organization_teams = await client.OrganizationTeam().list()
```

#### Example: Create

```ts
const organization_team = await client.OrganizationTeam().create({
  org_id: 'example_org_id',
})
```


### OrganizationTeamMember

Create an instance: `const organization_team_member = client.OrganizationTeamMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `role` | `string` |  |
| `user` | `string` |  |

#### Example: List

```ts
const organization_team_members = await client.OrganizationTeamMember().list()
```

#### Example: Create

```ts
const organization_team_member = await client.OrganizationTeamMember().create({
  org_id: 'example_org_id',
  team_id: 'example_team_id',
})
```


### Oss

Create an instance: `const oss = client.Oss()`


### P2n

Create an instance: `const p2n = client.P2n()`


### P2n2

Create an instance: `const p2n2 = client.P2n2()`


### Package

Create an instance: `const package_ = client.Package()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `any[]` |  |
| `backend_kind` | `number` |  |
| `cdn_url` | `string` |  |
| `checksum_md5` | `string` |  |
| `checksum_sha1` | `string` |  |
| `checksum_sha256` | `string` |  |
| `checksum_sha512` | `string` |  |
| `count` | `number` |  |
| `dep_type` | `string` |  |
| `dependencies_checksum_md5` | `string` |  |
| `dependencies_url` | `string` |  |
| `description` | `string` |  |
| `display_name` | `string` |  |
| `distro` | `Record<string, any>` |  |
| `distro_version` | `Record<string, any>` |  |
| `download` | `number` |  |
| `epoch` | `number` |  |
| `extension` | `string` |  |
| `file` | `any[]` |  |
| `filename` | `string` |  |
| `format` | `string` |  |
| `format_url` | `string` |  |
| `freeable_storage` | `number` |  |
| `fully_qualified_name` | `string` |  |
| `identifier` | `Record<string, any>` |  |
| `identifier_perm` | `string` |  |
| `indexed` | `boolean` |  |
| `is_cancellable` | `boolean` |  |
| `is_copyable` | `boolean` |  |
| `is_deleteable` | `boolean` |  |
| `is_downloadable` | `boolean` |  |
| `is_moveable` | `boolean` |  |
| `is_quarantinable` | `boolean` |  |
| `is_quarantined` | `boolean` |  |
| `is_resyncable` | `boolean` |  |
| `is_security_scannable` | `boolean` |  |
| `is_sync_awaiting` | `boolean` |  |
| `is_sync_completed` | `boolean` |  |
| `is_sync_failed` | `boolean` |  |
| `is_sync_in_flight` | `boolean` |  |
| `is_sync_in_progress` | `boolean` |  |
| `last_push` | `string` |  |
| `license` | `string` |  |
| `name` | `string` |  |
| `namespace` | `string` |  |
| `namespace_url` | `string` |  |
| `num_download` | `number` |  |
| `num_file` | `number` |  |
| `operator` | `string` |  |
| `origin_repository` | `string` |  |
| `origin_repository_url` | `string` |  |
| `package` | `Record<string, any>` |  |
| `package_type` | `number` |  |
| `policy_violated` | `boolean` |  |
| `release` | `string` |  |
| `repository` | `string` |  |
| `repository_url` | `string` |  |
| `security_scan_completed_at` | `string` |  |
| `security_scan_started_at` | `string` |  |
| `security_scan_status` | `string` |  |
| `security_scan_status_updated_at` | `string` |  |
| `self_html_url` | `string` |  |
| `self_url` | `string` |  |
| `signature_url` | `string` |  |
| `size` | `number` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `stage` | `number` |  |
| `stage_str` | `string` |  |
| `stage_updated_at` | `string` |  |
| `status` | `number` |  |
| `status_reason` | `string` |  |
| `status_str` | `string` |  |
| `status_updated_at` | `string` |  |
| `status_url` | `string` |  |
| `subtype` | `string` |  |
| `summary` | `string` |  |
| `sync_finished_at` | `string` |  |
| `sync_progress` | `number` |  |
| `tag` | `Record<string, any>` |  |
| `tags_immutable` | `Record<string, any>` |  |
| `type_display` | `string` |  |
| `uploaded_at` | `string` |  |
| `uploader` | `string` |  |
| `uploader_url` | `string` |  |
| `version` | `string` |  |
| `version_orig` | `string` |  |
| `vulnerability_scan_results_url` | `string` |  |

#### Example: Load

```ts
const package_ = await client.Package().load({ owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const package_s = await client.Package().list()
```

#### Example: Create

```ts
const package_ = await client.Package().create({
  owner: 'example_owner',
  repo: 'example_repo',
})
```


### PackageDenyPolicy

Create an instance: `const package_deny_policy = client.PackageDenyPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `enabled` | `boolean` |  |
| `name` | `string` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const package_deny_policy = await client.PackageDenyPolicy().load({ id: 'package_deny_policy_id', org_id: 'org_id' })
```

#### Example: List

```ts
const package_deny_policys = await client.PackageDenyPolicy().list()
```

#### Example: Create

```ts
const package_deny_policy = await client.PackageDenyPolicy().create({
  org_id: 'example_org_id',
})
```


### PackageFilePartsUpload

Create an instance: `const package_file_parts_upload = client.PackageFilePartsUpload()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `identifier` | `string` |  |
| `upload_querystring` | `string` |  |
| `upload_url` | `string` |  |

#### Example: Load

```ts
const package_file_parts_upload = await client.PackageFilePartsUpload().load({ identifier: 'identifier', owner: 'owner', repo: 'repo' })
```


### PackageFileUpload

Create an instance: `const package_file_upload = client.PackageFileUpload()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const package_file_upload = await client.PackageFileUpload().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  repo: 'example_repo',
})
```


### PackageLicensePolicyEvaluation

Create an instance: `const package_license_policy_evaluation = client.PackageLicensePolicyEvaluation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `evaluation_count` | `number` |  |
| `policy` | `Record<string, any>` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `violation_count` | `number` |  |

#### Example: Load

```ts
const package_license_policy_evaluation = await client.PackageLicensePolicyEvaluation().load({ id: 'package_license_policy_evaluation_id', license_policy_id: 'license_policy_id', org_id: 'org_id' })
```

#### Example: List

```ts
const package_license_policy_evaluations = await client.PackageLicensePolicyEvaluation().list()
```

#### Example: Create

```ts
const package_license_policy_evaluation = await client.PackageLicensePolicyEvaluation().create({
  org_id: 'example_org_id',
  policy_slug_perm: 'example_policy_slug_perm',
})
```


### PackageVersionBadge

Create an instance: `const package_version_badge = client.PackageVersionBadge()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const package_version_badge = await client.PackageVersionBadge().load({ owner: 'owner', package_format: 'package_format', package_identifier: 'package_identifier', package_name: 'package_name', package_version: 'package_version', repo: 'repo' })
```


### PackageVulnerabilityPolicyEvaluation

Create an instance: `const package_vulnerability_policy_evaluation = client.PackageVulnerabilityPolicyEvaluation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `evaluation_count` | `number` |  |
| `policy` | `Record<string, any>` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `violation_count` | `number` |  |

#### Example: Load

```ts
const package_vulnerability_policy_evaluation = await client.PackageVulnerabilityPolicyEvaluation().load({ id: 'package_vulnerability_policy_evaluation_id', org_id: 'org_id', vulnerability_policy_id: 'vulnerability_policy_id' })
```

#### Example: List

```ts
const package_vulnerability_policy_evaluations = await client.PackageVulnerabilityPolicyEvaluation().list()
```

#### Example: Create

```ts
const package_vulnerability_policy_evaluation = await client.PackageVulnerabilityPolicyEvaluation().create({
  org_id: 'example_org_id',
  policy_slug_perm: 'example_policy_slug_perm',
})
```


### Privilege

Create an instance: `const privilege = client.Privilege()`


### Profile

Create an instance: `const profile = client.Profile()`


### ProviderSetting

Create an instance: `const provider_setting = client.ProviderSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claim` | `Record<string, any>` |  |
| `enabled` | `boolean` |  |
| `mapping_claim` | `string` |  |
| `name` | `string` |  |
| `provider_url` | `string` |  |
| `service_account` | `any[]` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Load

```ts
const provider_setting = await client.ProviderSetting().load({ org_id: 'org_id', slug_perm: 'slug_perm' })
```

#### Example: List

```ts
const provider_settings = await client.ProviderSetting().list()
```


### ProviderSettingsWrite

Create an instance: `const provider_settings_write = client.ProviderSettingsWrite()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claim` | `Record<string, any>` |  |
| `dynamic_mapping` | `any[]` |  |
| `enabled` | `boolean` |  |
| `mapping_claim` | `string` |  |
| `name` | `string` |  |
| `provider_url` | `string` |  |
| `service_account` | `any[]` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Create

```ts
const provider_settings_write = await client.ProviderSettingsWrite().create({
  org_id: 'example_org_id',
})
```


### Python

Create an instance: `const python = client.Python()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const python = await client.Python().load({ id: 'python_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const pythons = await client.Python().list()
```

#### Example: Create

```ts
const python = await client.Python().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### Quarantine

Create an instance: `const quarantine = client.Quarantine()`


### Quota

Create an instance: `const quota = client.Quota()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `history` | `any[]` |  |
| `usage` | `Record<string, any>` |  |

#### Example: Load

```ts
const quota = await client.Quota().load({ id: 'quota_id' })
```


### Raw

Create an instance: `const raw = client.Raw()`


### Refresh

Create an instance: `const refresh = client.Refresh()`


### Regenerate

Create an instance: `const regenerate = client.Regenerate()`


### Repo

Create an instance: `const repo = client.Repo()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cdn_url` | `string` |  |
| `content_kind` | `string` |  |
| `contextual_auth_realm` | `boolean` |  |
| `copy_own` | `boolean` |  |
| `copy_package` | `string` |  |
| `cosign_signing_enabled` | `boolean` |  |
| `created_at` | `string` |  |
| `default_privilege` | `string` |  |
| `delete_own` | `boolean` |  |
| `delete_package` | `string` |  |
| `deleted_at` | `string` |  |
| `description` | `string` |  |
| `distribute` | `any[]` |  |
| `docker_refresh_tokens_enabled` | `boolean` |  |
| `ecdsa_key` | `any[]` |  |
| `enforce_eula` | `boolean` |  |
| `gpg_key` | `any[]` |  |
| `index_file` | `boolean` |  |
| `is_open_source` | `boolean` |  |
| `is_private` | `boolean` |  |
| `is_public` | `boolean` |  |
| `manage_entitlements_privilege` | `string` |  |
| `move_own` | `boolean` |  |
| `move_package` | `string` |  |
| `name` | `string` |  |
| `namespace` | `string` |  |
| `namespace_url` | `string` |  |
| `nuget_native_signing_enabled` | `boolean` |  |
| `num_download` | `number` |  |
| `num_policy_violated_package` | `number` |  |
| `num_quarantined_package` | `number` |  |
| `open_source_license` | `string` |  |
| `open_source_project_url` | `string` |  |
| `package_count` | `number` |  |
| `package_group_count` | `number` |  |
| `proxy_npmj` | `boolean` |  |
| `proxy_pypi` | `boolean` |  |
| `raw_package_index_enabled` | `boolean` |  |
| `raw_package_index_signatures_enabled` | `boolean` |  |
| `replace_package` | `string` |  |
| `replace_packages_by_default` | `boolean` |  |
| `repository_type` | `number` |  |
| `repository_type_str` | `string` |  |
| `resync_own` | `boolean` |  |
| `resync_package` | `string` |  |
| `scan_own` | `boolean` |  |
| `scan_package` | `string` |  |
| `self_html_url` | `string` |  |
| `self_url` | `string` |  |
| `show_setup_all` | `boolean` |  |
| `size` | `number` |  |
| `size_str` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `storage_region` | `string` |  |
| `strict_npm_validation` | `boolean` |  |
| `tag_pre_releases_as_latest` | `boolean` |  |
| `use_debian_label` | `boolean` |  |
| `use_default_cargo_upstream` | `boolean` |  |
| `use_entitlements_privilege` | `string` |  |
| `use_noarch_package` | `boolean` |  |
| `use_source_package` | `boolean` |  |
| `use_vulnerability_scanning` | `boolean` |  |
| `user_entitlements_enabled` | `boolean` |  |
| `view_statistic` | `string` |  |

#### Example: Load

```ts
const repo = await client.Repo().load({ id: 'repo_id' })
```

#### Example: List

```ts
const repos = await client.Repo().list()
```

#### Example: Create

```ts
const repo = await client.Repo().create({
})
```


### RepositoryAuditLog

Create an instance: `const repository_audit_log = client.RepositoryAuditLog()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `string` |  |
| `actor_ip_address` | `string` |  |
| `actor_kind` | `string` |  |
| `actor_location` | `Record<string, any>` |  |
| `actor_slug_perm` | `string` |  |
| `actor_url` | `string` |  |
| `context` | `string` |  |
| `event` | `string` |  |
| `event_at` | `string` |  |
| `object` | `string` |  |
| `object_kind` | `string` |  |
| `object_slug_perm` | `string` |  |
| `uuid` | `string` |  |

#### Example: List

```ts
const repository_audit_logs = await client.RepositoryAuditLog().list()
```


### RepositoryEcdsaKey

Create an instance: `const repository_ecdsa_key = client.RepositoryEcdsaKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `created_at` | `string` |  |
| `default` | `boolean` |  |
| `fingerprint` | `string` |  |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` |  |
| `ssh_fingerprint` | `string` |  |

#### Example: Load

```ts
const repository_ecdsa_key = await client.RepositoryEcdsaKey().load({ identifier: 'identifier', owner: 'owner' })
```

#### Example: Create

```ts
const repository_ecdsa_key = await client.RepositoryEcdsaKey().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### RepositoryGeoIpRule

Create an instance: `const repository_geo_ip_rule = client.RepositoryGeoIpRule()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cidr` | `Record<string, any>` |  |
| `country_code` | `Record<string, any>` |  |

#### Example: Load

```ts
const repository_geo_ip_rule = await client.RepositoryGeoIpRule().load({ identifier: 'identifier', owner: 'owner' })
```


### RepositoryGeoIpStatus

Create an instance: `const repository_geo_ip_status = client.RepositoryGeoIpStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `geoip_enabled` | `boolean` |  |

#### Example: Load

```ts
const repository_geo_ip_status = await client.RepositoryGeoIpStatus().load({ identifier: 'identifier', owner: 'owner' })
```


### RepositoryGeoIpTestAddress

Create an instance: `const repository_geo_ip_test_address = client.RepositoryGeoIpTestAddress()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const repository_geo_ip_test_address = await client.RepositoryGeoIpTestAddress().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### RepositoryGpgKey

Create an instance: `const repository_gpg_key = client.RepositoryGpgKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `comment` | `string` |  |
| `created_at` | `string` |  |
| `default` | `boolean` |  |
| `fingerprint` | `string` |  |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` |  |

#### Example: Load

```ts
const repository_gpg_key = await client.RepositoryGpgKey().load({ identifier: 'identifier', owner: 'owner' })
```

#### Example: Create

```ts
const repository_gpg_key = await client.RepositoryGpgKey().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### RepositoryPrivilegeInput

Create an instance: `const repository_privilege_input = client.RepositoryPrivilegeInput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `privilege` | `string` |  |
| `service` | `string` |  |
| `team` | `string` |  |
| `user` | `string` |  |

#### Example: List

```ts
const repository_privilege_inputs = await client.RepositoryPrivilegeInput().list()
```


### RepositoryRetentionRule

Create an instance: `const repository_retention_rule = client.RepositoryRetentionRule()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `retention_count_limit` | `number` |  |
| `retention_days_limit` | `number` |  |
| `retention_enabled` | `boolean` |  |
| `retention_group_by_format` | `boolean` |  |
| `retention_group_by_name` | `boolean` |  |
| `retention_group_by_package_type` | `boolean` |  |
| `retention_package_query_string` | `string` |  |
| `retention_size_limit` | `number` |  |

#### Example: Load

```ts
const repository_retention_rule = await client.RepositoryRetentionRule().load({ owner: 'owner', repo: 'repo' })
```


### RepositoryRsaKey

Create an instance: `const repository_rsa_key = client.RepositoryRsaKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `created_at` | `string` |  |
| `default` | `boolean` |  |
| `fingerprint` | `string` |  |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` |  |
| `ssh_fingerprint` | `string` |  |

#### Example: Load

```ts
const repository_rsa_key = await client.RepositoryRsaKey().load({ identifier: 'identifier', owner: 'owner' })
```

#### Example: Create

```ts
const repository_rsa_key = await client.RepositoryRsaKey().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### RepositoryToken

Create an instance: `const repository_token = client.RepositoryToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client` | `number` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `default` | `boolean` |  |
| `disable_url` | `string` |  |
| `download` | `number` |  |
| `enable_url` | `string` |  |
| `eula_accepted` | `Record<string, any>` |  |
| `eula_accepted_at` | `string` |  |
| `eula_accepted_from` | `string` |  |
| `eula_required` | `boolean` |  |
| `has_limit` | `boolean` |  |
| `identifier` | `number` |  |
| `is_active` | `boolean` |  |
| `is_limited` | `boolean` |  |
| `limit_bandwidth` | `number` |  |
| `limit_bandwidth_unit` | `string` |  |
| `limit_date_range_from` | `string` |  |
| `limit_date_range_to` | `string` |  |
| `limit_num_client` | `number` |  |
| `limit_num_download` | `number` |  |
| `limit_package_query` | `string` |  |
| `limit_path_query` | `string` |  |
| `metadata` | `Record<string, any>` |  |
| `name` | `string` |  |
| `refresh_url` | `string` |  |
| `reset_url` | `string` |  |
| `scheduled_reset_at` | `string` |  |
| `scheduled_reset_period` | `string` |  |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `token` | `string` |  |
| `updated_at` | `string` |  |
| `updated_by` | `string` |  |
| `updated_by_url` | `string` |  |
| `usage` | `string` |  |
| `user` | `string` |  |
| `user_url` | `string` |  |

#### Example: Load

```ts
const repository_token = await client.RepositoryToken().load({ identifier: 'identifier', owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const repository_tokens = await client.RepositoryToken().list()
```

#### Example: Create

```ts
const repository_token = await client.RepositoryToken().create({
  owner: 'example_owner',
  repo: 'example_repo',
})
```


### RepositoryTokenRefresh

Create an instance: `const repository_token_refresh = client.RepositoryTokenRefresh()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client` | `number` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `default` | `boolean` |  |
| `disable_url` | `string` |  |
| `download` | `number` |  |
| `enable_url` | `string` |  |
| `eula_accepted` | `Record<string, any>` |  |
| `eula_accepted_at` | `string` |  |
| `eula_accepted_from` | `string` |  |
| `eula_required` | `boolean` |  |
| `has_limit` | `boolean` |  |
| `identifier` | `number` |  |
| `is_active` | `boolean` |  |
| `is_limited` | `boolean` |  |
| `limit_bandwidth` | `number` |  |
| `limit_bandwidth_unit` | `string` |  |
| `limit_date_range_from` | `string` |  |
| `limit_date_range_to` | `string` |  |
| `limit_num_client` | `number` |  |
| `limit_num_download` | `number` |  |
| `limit_package_query` | `string` |  |
| `limit_path_query` | `string` |  |
| `metadata` | `Record<string, any>` |  |
| `name` | `string` |  |
| `refresh_url` | `string` |  |
| `reset_url` | `string` |  |
| `scheduled_reset_at` | `string` |  |
| `scheduled_reset_period` | `string` |  |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `token` | `string` |  |
| `updated_at` | `string` |  |
| `updated_by` | `string` |  |
| `updated_by_url` | `string` |  |
| `usage` | `string` |  |
| `user` | `string` |  |
| `user_url` | `string` |  |

#### Example: Create

```ts
const repository_token_refresh = await client.RepositoryTokenRefresh().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  repo: 'example_repo',
})
```


### RepositoryTokenSync

Create an instance: `const repository_token_sync = client.RepositoryTokenSync()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `token` | `any[]` |  |

#### Example: Create

```ts
const repository_token_sync = await client.RepositoryTokenSync().create({
  owner: 'example_owner',
  repo: 'example_repo',
})
```


### RepositoryWebhook

Create an instance: `const repository_webhook = client.RepositoryWebhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `disable_reason` | `number` |  |
| `disable_reason_str` | `string` |  |
| `event` | `any[]` |  |
| `identifier` | `number` |  |
| `is_active` | `boolean` |  |
| `is_last_response_bad` | `boolean` |  |
| `last_response_status` | `number` |  |
| `last_response_status_str` | `string` |  |
| `num_sent` | `number` |  |
| `package_query` | `string` |  |
| `request_body_format` | `number` |  |
| `request_body_format_str` | `string` |  |
| `request_body_template_format` | `number` |  |
| `request_body_template_format_str` | `string` |  |
| `request_content_type` | `string` |  |
| `secret_header` | `string` |  |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `target_url` | `string` |  |
| `template` | `any[]` |  |
| `updated_at` | `string` |  |
| `updated_by` | `string` |  |
| `updated_by_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: List

```ts
const repository_webhooks = await client.RepositoryWebhook().list()
```

#### Example: Create

```ts
const repository_webhook = await client.RepositoryWebhook().create({
  owner: 'example_owner',
  repo: 'example_repo',
})
```


### RepositoryX509EcdsaCertificate

Create an instance: `const repository_x509_ecdsa_certificate = client.RepositoryX509EcdsaCertificate()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `certificate` | `string` |  |
| `certificate_chain` | `string` |  |
| `certificate_chain_fingerprint` | `string` |  |
| `certificate_chain_fingerprint_short` | `string` |  |
| `certificate_fingerprint` | `string` |  |
| `certificate_fingerprint_short` | `string` |  |
| `created_at` | `string` |  |
| `default` | `boolean` |  |
| `issuing_status` | `string` |  |

#### Example: Load

```ts
const repository_x509_ecdsa_certificate = await client.RepositoryX509EcdsaCertificate().load({ identifier: 'identifier', owner: 'owner' })
```


### RepositoryX509RsaCertificate

Create an instance: `const repository_x509_rsa_certificate = client.RepositoryX509RsaCertificate()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `certificate` | `string` |  |
| `certificate_chain` | `string` |  |
| `certificate_chain_fingerprint` | `string` |  |
| `certificate_chain_fingerprint_short` | `string` |  |
| `certificate_fingerprint` | `string` |  |
| `certificate_fingerprint_short` | `string` |  |
| `created_at` | `string` |  |
| `default` | `boolean` |  |
| `issuing_status` | `string` |  |

#### Example: Load

```ts
const repository_x509_rsa_certificate = await client.RepositoryX509RsaCertificate().load({ identifier: 'identifier', owner: 'owner' })
```


### Reset

Create an instance: `const reset = client.Reset()`


### ResourcesRateCheck

Create an instance: `const resources_rate_check = client.ResourcesRateCheck()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `resource` | `Record<string, any>` |  |

#### Example: Load

```ts
const resources_rate_check = await client.ResourcesRateCheck().load()
```


### Resync

Create an instance: `const resync = client.Resync()`


### Retention

Create an instance: `const retention = client.Retention()`


### Rpm

Create an instance: `const rpm = client.Rpm()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `distro_version` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `gpg_key_inline` | `string` |  |
| `gpg_key_url` | `string` |  |
| `gpg_verification` | `string` |  |
| `include_source` | `boolean` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verification_status` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const rpm = await client.Rpm().load({ id: 'rpm_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const rpms = await client.Rpm().list()
```

#### Example: Create

```ts
const rpm = await client.Rpm().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### Rsa

Create an instance: `const rsa = client.Rsa()`


### Ruby

Create an instance: `const ruby = client.Ruby()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const ruby = await client.Ruby().load({ id: 'ruby_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const rubys = await client.Ruby().list()
```

#### Example: Create

```ts
const ruby = await client.Ruby().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### SamlGroupSync

Create an instance: `const saml_group_sync = client.SamlGroupSync()`


### Scan

Create an instance: `const scan = client.Scan()`


### Self

Create an instance: `const self = client.Self()`


### Service

Create an instance: `const service = client.Service()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `description` | `string` |  |
| `key` | `string` |  |
| `key_expires_at` | `string` |  |
| `name` | `string` |  |
| `role` | `string` |  |
| `slug` | `string` |  |
| `team` | `any[]` |  |

#### Example: Load

```ts
const service = await client.Service().load({ id: 'service_id', org_id: 'org_id' })
```

#### Example: List

```ts
const services = await client.Service().list()
```

#### Example: Create

```ts
const service = await client.Service().create({
  org_id: 'example_org_id',
})
```


### Status

Create an instance: `const status = client.Status()`


### StatusBasic

Create an instance: `const status_basic = client.StatusBasic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `detail` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```ts
const status_basic = await client.StatusBasic().load()
```


### StorageRegion

Create an instance: `const storage_region = client.StorageRegion()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` |  |
| `slug` | `string` |  |

#### Example: Load

```ts
const storage_region = await client.StorageRegion().load({ id: 'storage_region_id' })
```

#### Example: List

```ts
const storage_regions = await client.StorageRegion().list()
```


### Swift

Create an instance: `const swift = client.Swift()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```ts
const swift = await client.Swift().load({ id: 'swift_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const swifts = await client.Swift().list()
```

#### Example: Create

```ts
const swift = await client.Swift().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
})
```


### Sync

Create an instance: `const sync = client.Sync()`


### Tag

Create an instance: `const tag = client.Tag()`


### Team

Create an instance: `const team = client.Team()`


### Terraform

Create an instance: `const terraform = client.Terraform()`


### Test

Create an instance: `const test = client.Test()`


### Token

Create an instance: `const token = client.Token()`


### TransferRegion

Create an instance: `const transfer_region = client.TransferRegion()`


### User

Create an instance: `const user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` |  |
| `key` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: List

```ts
const users = await client.User().list()
```


### UserAuthToken

Create an instance: `const user_auth_token = client.UserAuthToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const user_auth_token = await client.UserAuthToken().create({
})
```


### UserAuthenticationToken

Create an instance: `const user_authentication_token = client.UserAuthenticationToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` |  |
| `key` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Create

```ts
const user_authentication_token = await client.UserAuthenticationToken().create({
})
```


### UserBrief

Create an instance: `const user_brief = client.UserBrief()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authenticated` | `boolean` |  |
| `email` | `string` |  |
| `name` | `string` |  |
| `profile_url` | `string` |  |
| `self_url` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Load

```ts
const user_brief = await client.UserBrief().load()
```


### UserProfile

Create an instance: `const user_profile = client.UserProfile()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `company` | `string` |  |
| `first_name` | `string` |  |
| `job_title` | `string` |  |
| `joined_at` | `string` |  |
| `last_name` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `tagline` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const user_profile = await client.UserProfile().load({ id: 'user_profile_id' })
```


### Vagrant

Create an instance: `const vagrant = client.Vagrant()`


### Validate

Create an instance: `const validate = client.Validate()`


### Version

Create an instance: `const version = client.Version()`


### Vulnerability

Create an instance: `const vulnerability = client.Vulnerability()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `has_vulnerability` | `boolean` |  |
| `identifier` | `string` |  |
| `max_severity` | `string` |  |
| `num_vulnerability` | `number` |  |
| `package` | `Record<string, any>` |  |
| `result` | `any[]` |  |
| `scan_id` | `number` |  |
| `target` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const vulnerability = await client.Vulnerability().load({ id: 'vulnerability_id' })
```

#### Example: List

```ts
const vulnerabilitys = await client.Vulnerability().list()
```


### VulnerabilityPolicy

Create an instance: `const vulnerability_policy = client.VulnerabilityPolicy()`


### Webhook

Create an instance: `const webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### X509Ecdsa

Create an instance: `const x509_ecdsa = client.X509Ecdsa()`


### X509Rsa

Create an instance: `const x509_rsa = client.X509Rsa()`


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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cloudsmith/
├── src/
│   ├── CloudsmithSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CloudsmithSDK } from '@voxgig-sdk/cloudsmith'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const cargo = client.Cargo()
await cargo.list()

// cargo.data() now returns the cargo data from the last `list`
// cargo.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
