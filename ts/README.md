# Cloudsmith TypeScript SDK



The TypeScript SDK for the Cloudsmith API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Abort()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
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
  const userprofile = await client.UserProfile().load({ id: "example_id" })
  console.log(userprofile)
} catch (err) {
  console.error('load failed:', err)
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

const userprofile = await client.UserProfile().load({ id: 'test01' })
// userprofile is the entity, populated with mock response data
// — call userprofile.data() for the record itself
console.log(userprofile)
```

You can also use the instance method:

```ts
const client = new CloudsmithSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.UserProfile()

// First call runs the operation and stores its result
await entity.load({ id: 'example' })

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

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
| `slug` | The slug identifier for this distribution |
| `variants` |  |
| `versions` | A list of the versions for this distribution |

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

Operations: create, list, load, patch, update.

API path: `/repos/{owner}/{identifier}/upstream/docker/`

#### DynamicMapping

| Field | Description |
| --- | --- |
| `claim_value` | The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`. |
| `service_account` | The service account associated with the provider setting and `claim_value` Note: This field and the dynamic mappings feature are still in early access. |

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
| `active` | Number of packages with at least 1 download |
| `bandwidth` |  |
| `downloads` |  |
| `inactive` | Packages with zero downloads |
| `total` | Total number of packages in repo |

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
| `description` | Description of the package format |
| `distributions` | The distributions supported by this package format |
| `extensions` | A non-exhaustive list of extensions supported |
| `name` | Name for the package format |
| `premium` | If true the package format is a premium-only feature |
| `premium_plan_id` | The minimum plan id required for this package format |
| `premium_plan_name` | The minimum plan name required for this package format |
| `slug` | Slug for the package format |
| `supports` | A set of what the package format supports |

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

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
| `location` | The city/town/area your organization is based in. |
| `name` |  |
| `package` |  |
| `policy` |  |
| `reasons` |  |
| `slug` |  |
| `slug_perm` |  |
| `tagline` | A short public descriptive for your organization. |
| `vulnerability_scan_results` |  |

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

Operations: create, list, update.

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
| `allow_unknown_licenses` |  |
| `created_at` |  |
| `description` |  |
| `name` |  |
| `on_violation_quarantine` |  |
| `package_query_string` |  |
| `slug_perm` |  |
| `spdx_identifiers` |  |
| `updated_at` |  |

Operations: create, list, load, patch, update.

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

Operations: create, list, load, patch, update.

API path: `/orgs/{org}/vulnerability-policy/`

#### OrganizationSamlAuth

| Field | Description |
| --- | --- |
| `saml_auth_enabled` |  |
| `saml_auth_enforced` |  |
| `saml_metadata_inline` | If configured, SAML metadata will be used as entered instead of retrieved from a remote URL. |
| `saml_metadata_url` | If configured, SAML metadata be retrieved from a remote URL. |

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

Operations: create, list, load, remove.

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

Operations: create, list, load, patch, update.

API path: `/orgs/{org}/deny-policy/`

#### PackageFilePartsUpload

| Field | Description |
| --- | --- |
| `identifier` | The identifier for the file to use uploading parts. |
| `upload_querystring` | The querystring to use for the next-step PUT upload. |
| `upload_url` | The URL to use for the next-step PUT upload |

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
| `claims` | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `enabled` | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | The name of the provider settings are being configured for |
| `provider_url` | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | The service accounts associated with these provider settings. |
| `slug` | The slug of the provider settings |
| `slug_perm` | The unique, immutable identifier of the provider settings. |

Operations: list, load.

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

Operations: create, patch, update.

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
| `display` |  |
| `history` |  |
| `raw` |  |

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
| `active` | If selected this is the active key for this repository. |
| `created_at` |  |
| `default` | If selected this is the default key for this repository. |
| `fingerprint` | The long identifier used by ECDSA for this key. |
| `fingerprint_short` |  |
| `public_key` | The public key given to repository users. |
| `ssh_fingerprint` | The SSH fingerprint used by ECDSA for this key. |

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
| `geoip_enabled` | If checked, any access to the website or downloads for this repository is allowed/denied according to the configured Geo/IP restriction rules. |

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
| `active` | If selected this is the active key for this repository. |
| `comment` |  |
| `created_at` |  |
| `default` | If selected this is the default key for this repository. |
| `fingerprint` | The long identifier used by GPG for this key. |
| `fingerprint_short` |  |
| `public_key` | The public key given to repository users. |

Operations: create, load.

API path: `/repos/{owner}/{identifier}/gpg/`

#### RepositoryPrivilegeInput

| Field | Description |
| --- | --- |
| `privilege` | The level of privilege that the user or team should be granted to the specified repository. |
| `service` | The service identifier (slug). |
| `team` | The team identifier (slug). |
| `user` | The user identifier (slug). |

Operations: list.

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

Operations: load, update.

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

Operations: create, load.

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

Operations: create, list, load, update.

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

Operations: create.

API path: `/entitlements/{owner}/{repo}/{identifier}/refresh/`

#### RepositoryTokenSync

| Field | Description |
| --- | --- |
| `tokens` | The entitlements that have been synchronised. |

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

Operations: create, list, load, update.

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

Operations: load.

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
| `interval` | The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window. |
| `limit` | The maximum number of requests that you are permitted to send per hour |
| `remaining` | The number of requests that are remaining in the current rate limit window |
| `reset` | The UTC epoch timestamp at which the current rate limit window will reset |
| `reset_iso_8601` | The ISO 8601 datetime at which the current rate limit window will reset |
| `throttled` | If true, throttling is currently being enforced. |

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
| `description` | The description of the service |
| `key` | The API key of the service |
| `key_expires_at` | The time at which the API key will expire. |
| `name` | The name of the service |
| `role` | The role of the service. |
| `slug` | The slug of the service |
| `teams` |  |

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
| `detail` | The message describing the state of the API. |
| `version` | The current version for the Cloudsmith service. |

Operations: load.

API path: `/status/check/basic/`

#### StorageRegion

| Field | Description |
| --- | --- |
| `label` | Name of the storage region |
| `slug` | Slug for the storage region |

Operations: list, load.

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
| `created` | The time at which the API key was created. |
| `key` | The unique API key used for authentication. |
| `slug_perm` | The slug_perm for token. |

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
| `created` | The time at which the API key was created. |
| `key` | The unique API key used for authentication. |
| `slug_perm` | The slug_perm for token. |

Operations: create, update.

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
| `tagline` | Your tagline is a sentence about you. |
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
| `created_at` | The time this scan result was stored. |
| `has_vulnerabilities` | Do the results contain any known vulnerabilities? |
| `identifier` |  |
| `max_severity` |  |
| `num_vulnerabilities` |  |
| `package` |  |
| `scan_id` | Deprecated (23-05-15): Please use 'identifier' instead. |
| `scans` |  |

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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const cargo = await client.Cargo().load({ id: 'cargo_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const cargos = await client.Cargo().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const cargo = await client.Cargo().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const composer = await client.Composer().load({ id: 'composer_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const composers = await client.Composer().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const composer = await client.Composer().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const conda = await client.Conda().load({ id: 'conda_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const condas = await client.Conda().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const conda = await client.Conda().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const cran = await client.Cran().load({ id: 'cran_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const crans = await client.Cran().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const cran = await client.Cran().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const dart = await client.Dart().load({ id: 'dart_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const darts = await client.Dart().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const dart = await client.Dart().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `component` | `string` | The component to fetch from the upstream |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `distro_versions` | `any[]` | The distribution version that packages found on this upstream could be associated with. |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `string` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `string` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `string` | The GPG signature verification mode for this upstream. |
| `include_sources` | `boolean` | When true, source packages will be available from this upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_distribution` | `string` | The distribution to fetch from the upstream |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verification_status` | `string` | The signature verification status for this upstream. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const deb = await client.Deb().load({ id: 'deb_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const debs = await client.Deb().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const deb = await client.Deb().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  distro_versions: [],
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `slug` | `string` | The slug identifier for this distribution |
| `variants` | `string` |  |
| `versions` | `any[]` | A list of the versions for this distribution |

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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const docker = await client.Docker().load({ id: 'docker_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const dockers = await client.Docker().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const docker = await client.Docker().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `claim_value` | `string` | The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`. |
| `service_account` | `string` | The service account associated with the provider setting and `claim_value` Note: This field and the dynamic mappings feature are still in early access. |

#### Example: Load

```ts
const dynamic_mapping = await client.DynamicMapping().load({ id: 'dynamic_mapping_id', openid_connect_id: 'openid_connect_id', org_id: 'org_id' })
```

#### Example: List

```ts
const dynamic_mappings = await client.DynamicMapping().list({ org_id: "example", provider_setting: "example" })
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
| `active` | `number` | Number of packages with at least 1 download |
| `bandwidth` | `Record<string, any>` |  |
| `downloads` | `Record<string, any>` |  |
| `inactive` | `number` | Packages with zero downloads |
| `total` | `number` | Total number of packages in repo |

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
  bandwidth: {},
  downloads: {},
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
| `description` | `string` | Description of the package format |
| `distributions` | `any[]` | The distributions supported by this package format |
| `extensions` | `any[]` | A non-exhaustive list of extensions supported |
| `name` | `string` | Name for the package format |
| `premium` | `boolean` | If true the package format is a premium-only feature |
| `premium_plan_id` | `string` | The minimum plan id required for this package format |
| `premium_plan_name` | `string` | The minimum plan name required for this package format |
| `slug` | `string` | Slug for the package format |
| `supports` | `Record<string, any>` | A set of what the package format supports |

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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const gon = await client.Gon().load({ identifier: 'identifier', owner: 'owner', slug_perm: 'slug_perm' })
```

#### Example: List

```ts
const gons = await client.Gon().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const gon = await client.Gon().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
})
```


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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const helm = await client.Helm().load({ id: 'helm_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const helms = await client.Helm().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const helm = await client.Helm().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const hex = await client.Hex().load({ id: 'hex_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const hexs = await client.Hex().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const hex = await client.Hex().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const huggingface = await client.Huggingface().load({ id: 'huggingface_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const huggingfaces = await client.Huggingface().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const huggingface = await client.Huggingface().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `string` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `string` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `string` | The GPG signature verification mode for this upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verification_status` | `string` | The signature verification status for this upstream. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const maven = await client.Maven().load({ id: 'maven_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const mavens = await client.Maven().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const maven = await client.Maven().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const npm = await client.Npm().load({ id: 'npm_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const npms = await client.Npm().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const npm = await client.Npm().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const nuget = await client.Nuget().load({ id: 'nuget_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const nugets = await client.Nuget().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const nuget = await client.Nuget().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `location` | `string` | The city/town/area your organization is based in. |
| `name` | `string` |  |
| `package` | `Record<string, any>` |  |
| `policy` | `Record<string, any>` |  |
| `reasons` | `any[]` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `tagline` | `string` | A short public descriptive for your organization. |
| `vulnerability_scan_results` | `Record<string, any>` |  |

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
  name: 'example_name',
  package: {},
  policy: {},
  reasons: [],
  vulnerability_scan_results: {},
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
const organization_group_syncs = await client.OrganizationGroupSync().list({ org_id: "example" })
```

#### Example: Create

```ts
const organization_group_sync = await client.OrganizationGroupSync().create({
  org_id: 'example_org_id',
  idp_key: 'example_idp_key',
  idp_value: 'example_idp_value',
  team: 'example_team',
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
| `email` | `string` | The email of the user to be invited. |
| `expires_at` | `string` |  |
| `inviter` | `string` |  |
| `inviter_url` | `string` |  |
| `org` | `string` |  |
| `role` | `string` | The role to be assigned to the invited user. |
| `slug_perm` | `string` |  |
| `teams` | `any[]` |  |
| `user` | `string` | The slug of the user to be invited. |
| `user_url` | `string` |  |

#### Example: List

```ts
const organization_invites = await client.OrganizationInvite().list({ org_id: "example" })
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
| `email` | `string` | The email of the user to be invited. |
| `expires_at` | `string` |  |
| `inviter` | `string` |  |
| `inviter_url` | `string` |  |
| `org` | `string` |  |
| `role` | `string` | The role to be assigned to the invited user. |
| `slug_perm` | `string` | The slug_perm of the invite to be extended. |
| `teams` | `any[]` |  |
| `user` | `string` | The slug of the user to be invited. |
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
const organization_memberships = await client.OrganizationMembership().list({ org_id: "example" })
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
| `allow_unknown_licenses` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `boolean` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `spdx_identifiers` | `any[]` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const organization_package_license_policy = await client.OrganizationPackageLicensePolicy().load({ id: 'organization_package_license_policy_id', org_id: 'org_id' })
```

#### Example: List

```ts
const organization_package_license_policys = await client.OrganizationPackageLicensePolicy().list({ org_id: "example" })
```

#### Example: Create

```ts
const organization_package_license_policy = await client.OrganizationPackageLicensePolicy().create({
  org_id: 'example_org_id',
  name: 'example_name',
  spdx_identifiers: [],
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
| `allow_unknown_severity` | `boolean` | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
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
const organization_package_vulnerability_policys = await client.OrganizationPackageVulnerabilityPolicy().list({ org_id: "example" })
```

#### Example: Create

```ts
const organization_package_vulnerability_policy = await client.OrganizationPackageVulnerabilityPolicy().create({
  org_id: 'example_org_id',
  name: 'example_name',
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
| `saml_metadata_inline` | `string` | If configured, SAML metadata will be used as entered instead of retrieved from a remote URL. |
| `saml_metadata_url` | `string` | If configured, SAML metadata be retrieved from a remote URL. |

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
const organization_teams = await client.OrganizationTeam().list({ org_id: "example" })
```

#### Example: Create

```ts
const organization_team = await client.OrganizationTeam().create({
  org_id: 'example_org_id',
  name: 'example_name',
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
const organization_team_members = await client.OrganizationTeamMember().list({ org_id: "example", team_id: "example" })
```

#### Example: Create

```ts
const organization_team_member = await client.OrganizationTeamMember().create({
  org_id: 'example_org_id',
  team_id: 'example_team_id',
  role: 'example_role',
  user: 'example_user',
})
```


### Oss

Create an instance: `const oss = client.Oss()`


### P2n

Create an instance: `const p2n = client.P2n()`


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
| `active` | `number` | Number of packages with at least 1 download |
| `architectures` | `any[]` |  |
| `backend_kind` | `number` |  |
| `bandwidth` | `Record<string, any>` |  |
| `cdn_url` | `string` |  |
| `checksum_md5` | `string` |  |
| `checksum_sha1` | `string` |  |
| `checksum_sha256` | `string` |  |
| `checksum_sha512` | `string` |  |
| `count` | `number` |  |
| `dep_type` | `string` |  |
| `dependencies_checksum_md5` | `string` | A checksum of all of the package's dependencies. |
| `dependencies_url` | `string` |  |
| `description` | `string` | A textual description of this package. |
| `display_name` | `string` |  |
| `distro` | `Record<string, any>` | The distributions supported by this package format |
| `distro_version` | `Record<string, any>` | A list of the versions for this distribution |
| `downloads` | `Record<string, any>` |  |
| `epoch` | `number` | The epoch of the package version (if any). |
| `extension` | `string` |  |
| `filename` | `string` |  |
| `files` | `any[]` |  |
| `format` | `string` |  |
| `format_url` | `string` |  |
| `freeable_storage` | `number` | Amount of storage that will be freed if this package is deleted |
| `fully_qualified_name` | `string` |  |
| `identifier_perm` | `string` | Unique and permanent identifier for the package. |
| `identifiers` | `Record<string, any>` | Return a map of identifier field names and their values. |
| `inactive` | `number` | Packages with zero downloads |
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
| `license` | `string` | The license of this package. |
| `name` | `string` | The name of this package. |
| `namespace` | `string` |  |
| `namespace_url` | `string` |  |
| `num_downloads` | `number` |  |
| `num_files` | `number` |  |
| `operator` | `string` |  |
| `origin_repository` | `string` |  |
| `origin_repository_url` | `string` |  |
| `package_type` | `number` | The type of package contents. |
| `policy_violated` | `boolean` | Whether or not the package has violated any policy. |
| `release` | `string` | The release of the package version (if any). |
| `repository` | `string` | The repository the package will be copied to. |
| `repository_url` | `string` |  |
| `security_scan_completed_at` | `string` | The datetime the security scanning was completed. |
| `security_scan_started_at` | `string` | The datetime the security scanning was started. |
| `security_scan_status` | `string` |  |
| `security_scan_status_updated_at` | `string` | The datetime the security scanning status was updated. |
| `self_html_url` | `string` |  |
| `self_url` | `string` |  |
| `signature_url` | `string` |  |
| `size` | `number` | The calculated size of the package. |
| `slug` | `string` | The public unique identifier for the package. |
| `slug_perm` | `string` |  |
| `stage` | `number` | The synchronisation (in progress) stage of the package. |
| `stage_str` | `string` |  |
| `stage_updated_at` | `string` | The datetime the package stage was updated at. |
| `status` | `number` | The synchronisation status of the package. |
| `status_reason` | `string` | A textual description for the synchronous status reason (if any |
| `status_str` | `string` |  |
| `status_updated_at` | `string` | The datetime the package status was updated at. |
| `status_url` | `string` |  |
| `subtype` | `string` |  |
| `summary` | `string` | A one-liner synopsis of this package. |
| `sync_finished_at` | `string` | The datetime the package sync was finished at. |
| `sync_progress` | `number` | Synchronisation progress (from 0-100) |
| `tags` | `Record<string, any>` | All tags on the package, grouped by tag type. |
| `tags_immutable` | `Record<string, any>` | All tags on the package, grouped by tag type. |
| `total` | `number` | Total number of packages in repo |
| `type_display` | `string` |  |
| `uploaded_at` | `string` | The date this package was uploaded. |
| `uploader` | `string` |  |
| `uploader_url` | `string` |  |
| `version` | `string` | The raw version for this package. |
| `version_orig` | `string` |  |
| `vulnerability_scan_results_url` | `string` |  |

#### Example: Load

```ts
const package_ = await client.Package().load({ owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const package_s = await client.Package().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const package_ = await client.Package().create({
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
| `enabled` | `boolean` | Whether this rule is enabled or disabled. |
| `name` | `string` |  |
| `package_query_string` | `string` | Packages that match this query will trigger this deny rule. |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const package_deny_policy = await client.PackageDenyPolicy().load({ id: 'package_deny_policy_id', org_id: 'org_id' })
```

#### Example: List

```ts
const package_deny_policys = await client.PackageDenyPolicy().list({ org_id: "example" })
```

#### Example: Create

```ts
const package_deny_policy = await client.PackageDenyPolicy().create({
  org_id: 'example_org_id',
  package_query_string: 'example_package_query_string',
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
| `identifier` | `string` | The identifier for the file to use uploading parts. |
| `upload_querystring` | `string` | The querystring to use for the next-step PUT upload. |
| `upload_url` | `string` | The URL to use for the next-step PUT upload |

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
| `allow_unknown_licenses` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `evaluation_count` | `number` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `boolean` |  |
| `package_query_string` | `string` |  |
| `policy` | `Record<string, any>` |  |
| `slug_perm` | `string` |  |
| `spdx_identifiers` | `any[]` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `violation_count` | `number` |  |

#### Example: Load

```ts
const package_license_policy_evaluation = await client.PackageLicensePolicyEvaluation().load({ id: 'package_license_policy_evaluation_id', license_policy_id: 'license_policy_id', org_id: 'org_id' })
```

#### Example: List

```ts
const package_license_policy_evaluations = await client.PackageLicensePolicyEvaluation().list({ org_id: "example", policy_slug_perm: "example" })
```

#### Example: Create

```ts
const package_license_policy_evaluation = await client.PackageLicensePolicyEvaluation().create({
  org_id: 'example_org_id',
  policy_slug_perm: 'example_policy_slug_perm',
  policy: {},
  spdx_identifiers: [],
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
| `allow_unknown_severity` | `boolean` | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `evaluation_count` | `number` |  |
| `min_severity` | `string` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `boolean` |  |
| `package_query_string` | `string` |  |
| `policy` | `Record<string, any>` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `violation_count` | `number` |  |

#### Example: Load

```ts
const package_vulnerability_policy_evaluation = await client.PackageVulnerabilityPolicyEvaluation().load({ id: 'package_vulnerability_policy_evaluation_id', org_id: 'org_id', vulnerability_policy_id: 'vulnerability_policy_id' })
```

#### Example: List

```ts
const package_vulnerability_policy_evaluations = await client.PackageVulnerabilityPolicyEvaluation().list({ org_id: "example", policy_slug_perm: "example" })
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
| `claims` | `Record<string, any>` | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `enabled` | `boolean` | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | `string` | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | `string` | The name of the provider settings are being configured for |
| `provider_url` | `string` | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | `any[]` | The service accounts associated with these provider settings. |
| `slug` | `string` | The slug of the provider settings |
| `slug_perm` | `string` | The unique, immutable identifier of the provider settings. |

#### Example: Load

```ts
const provider_setting = await client.ProviderSetting().load({ org_id: 'org_id', slug_perm: 'slug_perm' })
```

#### Example: List

```ts
const provider_settings = await client.ProviderSetting().list({ org_id: "example" })
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
| `claims` | `Record<string, any>` | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `dynamic_mappings` | `any[]` | The dynamic mappings of `mapping_claim` values to service accounts. |
| `enabled` | `boolean` | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | `string` | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | `string` | The name of the provider settings are being configured for |
| `provider_url` | `string` | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | `any[]` | The service accounts associated with these provider settings. |
| `slug` | `string` | The slug of the provider settings |
| `slug_perm` | `string` | The unique, immutable identifier of the provider settings. |

#### Example: Create

```ts
const provider_settings_write = await client.ProviderSettingsWrite().create({
  org_id: 'example_org_id',
  claims: {},
  enabled: true,
  name: 'example_name',
  provider_url: 'example_provider_url',
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const python = await client.Python().load({ id: 'python_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const pythons = await client.Python().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const python = await client.Python().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `display` | `Record<string, any>` |  |
| `history` | `any[]` |  |
| `raw` | `Record<string, any>` |  |

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
| `cdn_url` | `string` | Base URL from which packages and other artifacts are downloaded. |
| `content_kind` | `string` | The repository content kind determines whether this repository contains packages, or provides a distribution of packages from other repositories. |
| `contextual_auth_realm` | `boolean` | If checked, missing credentials for this repository where basic authentication is required shall present an enriched value in the 'WWW-Authenticate' header containing the namespace and repository. |
| `copy_own` | `boolean` | If checked, users can copy any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `copy_packages` | `string` | This defines the minimum level of privilege required for a user to copy packages. |
| `cosign_signing_enabled` | `boolean` | When enabled, all pushed (or pulled from upstream) OCI packages and artifacts will be signed using cosign with the repository's ECDSA key. |
| `created_at` | `string` |  |
| `default_privilege` | `string` | This defines the default level of privilege that all of your organization members have for this repository. |
| `delete_own` | `boolean` | If checked, users can delete any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `delete_packages` | `string` | This defines the minimum level of privilege required for a user to delete packages. |
| `deleted_at` | `string` | The datetime the repository was manually deleted at. |
| `description` | `string` | A description of the repository's purpose/contents. |
| `distributes` | `any[]` | The repositories distributed through this repo. |
| `docker_refresh_tokens_enabled` | `boolean` | If checked, refresh tokens will be issued in addition to access tokens for Docker authentication. |
| `ecdsa_keys` | `any[]` |  |
| `enforce_eula` | `boolean` | If checked, downloads will explicitly require acceptance of an EULA. |
| `gpg_keys` | `any[]` |  |
| `index_files` | `boolean` | If checked, files contained in packages will be indexed, which increase the synchronisation time required for packages. |
| `is_open_source` | `boolean` |  |
| `is_private` | `boolean` |  |
| `is_public` | `boolean` |  |
| `manage_entitlements_privilege` | `string` | This defines the minimum level of privilege required for a user to manage entitlement tokens with private repositories. |
| `move_own` | `boolean` | If checked, users can move any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `move_packages` | `string` | This defines the minimum level of privilege required for a user to move packages. |
| `name` | `string` | A descriptive name for the repository. |
| `namespace` | `string` | Namespace to which this repository belongs. |
| `namespace_url` | `string` | API endpoint where data about this namespace can be retrieved. |
| `nuget_native_signing_enabled` | `boolean` | When enabled, all pushed (or pulled from upstream) nuget packages and artifacts will be signed using the repository's X.509 RSA certificate. |
| `num_downloads` | `number` | The number of downloads for packages in the repository. |
| `num_policy_violated_packages` | `number` | Number of packages with policy violations in a repository. |
| `num_quarantined_packages` | `number` | Number of quarantined packages in a repository. |
| `open_source_license` | `string` | The SPDX identifier of the open source license. |
| `open_source_project_url` | `string` | The URL to the Open-Source project, used for validating that the project meets the requirements for Open-Source. |
| `package_count` | `number` | The number of packages in the repository. |
| `package_group_count` | `number` | The number of groups in the repository. |
| `proxy_npmjs` | `boolean` | If checked, Npm packages that are not in the repository when requested by clients will automatically be proxied from the public npmjs.org registry. |
| `proxy_pypi` | `boolean` | If checked, Python packages that are not in the repository when requested by clients will automatically be proxied from the public pypi.python.org registry. |
| `raw_package_index_enabled` | `boolean` | If checked, HTML and JSON indexes will be generated that list all available raw packages in the repository. |
| `raw_package_index_signatures_enabled` | `boolean` | If checked, the HTML and JSON indexes will display raw package GPG signatures alongside the index packages. |
| `replace_packages` | `string` | This defines the minimum level of privilege required for a user to republish packages. |
| `replace_packages_by_default` | `boolean` | If checked, uploaded packages will overwrite/replace any others with the same attributes (e.g. |
| `repository_type` | `number` | The repository type changes how it is accessed and billed. |
| `repository_type_str` | `string` | The repository type changes how it is accessed and billed. |
| `resync_own` | `boolean` | If checked, users can resync any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `resync_packages` | `string` | This defines the minimum level of privilege required for a user to resync packages. |
| `scan_own` | `boolean` | If checked, users can scan any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `scan_packages` | `string` | This defines the minimum level of privilege required for a user to scan packages. |
| `self_html_url` | `string` | Website URL for this repository. |
| `self_url` | `string` | API endpoint where data about this repository can be retrieved. |
| `show_setup_all` | `boolean` | If checked, the Set Me Up help for all formats will always be shown, even if you don't have packages of that type uploaded. |
| `size` | `number` | The calculated size of the repository. |
| `size_str` | `string` | The calculated size of the repository (human readable). |
| `slug` | `string` | The slug identifies the repository in URIs. |
| `slug_perm` | `string` | The slug_perm immutably identifies the repository. |
| `storage_region` | `string` | The Cloudsmith region in which package files are stored. |
| `strict_npm_validation` | `boolean` | If checked, npm packages will be validated strictly to ensure the package matches specifcation. |
| `tag_pre_releases_as_latest` | `boolean` | If checked, packages pushed with a pre-release component on that version will be marked with the 'latest' tag. |
| `use_debian_labels` | `boolean` | If checked, a 'Label' field will be present in Debian-based repositories. |
| `use_default_cargo_upstream` | `boolean` | If checked, dependencies of uploaded Cargo crates which do not set an explicit value for "registry" will be assumed to be available from crates.io. |
| `use_entitlements_privilege` | `string` | This defines the minimum level of privilege required for a user to see/use entitlement tokens with private repositories. |
| `use_noarch_packages` | `boolean` | If checked, noarch packages (if supported) are enabled in installations/configurations. |
| `use_source_packages` | `boolean` | If checked, source packages (if supported) are enabled in installations/configurations. |
| `use_vulnerability_scanning` | `boolean` | If checked, vulnerability scanning will be enabled for all supported packages within this repository. |
| `user_entitlements_enabled` | `boolean` | If checked, users can use and manage their own user-specific entitlement token for the repository (if private). |
| `view_statistics` | `string` | This defines the minimum level of privilege required for a user to view repository statistics, to include entitlement-based usage, if applicable. |

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
  id: 'example_id',
  name: 'example_name',
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
const repository_audit_logs = await client.RepositoryAuditLog().list({ owner: "example", repo: "example" })
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
| `active` | `boolean` | If selected this is the active key for this repository. |
| `created_at` | `string` |  |
| `default` | `boolean` | If selected this is the default key for this repository. |
| `fingerprint` | `string` | The long identifier used by ECDSA for this key. |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` | The public key given to repository users. |
| `ssh_fingerprint` | `string` | The SSH fingerprint used by ECDSA for this key. |

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
| `geoip_enabled` | `boolean` | If checked, any access to the website or downloads for this repository is allowed/denied according to the configured Geo/IP restriction rules. |

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
| `active` | `boolean` | If selected this is the active key for this repository. |
| `comment` | `string` |  |
| `created_at` | `string` |  |
| `default` | `boolean` | If selected this is the default key for this repository. |
| `fingerprint` | `string` | The long identifier used by GPG for this key. |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` | The public key given to repository users. |

#### Example: Load

```ts
const repository_gpg_key = await client.RepositoryGpgKey().load({ identifier: 'identifier', owner: 'owner' })
```

#### Example: Create

```ts
const repository_gpg_key = await client.RepositoryGpgKey().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  comment: 'example_comment',
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
| `privilege` | `string` | The level of privilege that the user or team should be granted to the specified repository. |
| `service` | `string` | The service identifier (slug). |
| `team` | `string` | The team identifier (slug). |
| `user` | `string` | The user identifier (slug). |

#### Example: List

```ts
const repository_privilege_inputs = await client.RepositoryPrivilegeInput().list({ identifier: "example", owner: "example" })
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
| `retention_count_limit` | `number` | The maximum X number of packages to retain. |
| `retention_days_limit` | `number` | The X number of days of packages to retain. |
| `retention_enabled` | `boolean` | If checked, the retention lifecycle rules will be activated for the repository. |
| `retention_group_by_format` | `boolean` | If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are diffe… |
| `retention_group_by_name` | `boolean` | If checked, retention will apply to groups of packages by name rather than all packages.<br>For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgB… |
| `retention_group_by_package_type` | `boolean` | If checked, retention will apply to packages by package type (e.g. |
| `retention_package_query_string` | `string` | A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will pre… |
| `retention_size_limit` | `number` | The maximum X total size (in bytes) of packages to retain. |

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
| `active` | `boolean` | If selected this is the active key for this repository. |
| `created_at` | `string` |  |
| `default` | `boolean` | If selected this is the default key for this repository. |
| `fingerprint` | `string` | The long identifier used by RSA for this key. |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` | The public key given to repository users. |
| `ssh_fingerprint` | `string` | The SSH fingerprint used by RSA for this key. |

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
| `clients` | `number` |  |
| `created_at` | `string` | The datetime the token was updated at. |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `default` | `boolean` | If selected this is the default token for this repository. |
| `disable_url` | `string` |  |
| `downloads` | `number` |  |
| `enable_url` | `string` |  |
| `eula_accepted` | `Record<string, any>` |  |
| `eula_accepted_at` | `string` | The datetime the EULA was accepted at. |
| `eula_accepted_from` | `string` |  |
| `eula_required` | `boolean` | If checked, a EULA acceptance is required for this token. |
| `has_limits` | `boolean` |  |
| `identifier` | `number` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `boolean` | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` | `boolean` |  |
| `limit_bandwidth` | `number` | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` | `string` |  |
| `limit_date_range_from` | `string` | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | `string` | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | `number` | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | `number` | The maximum number of downloads allowed for the token. |
| `limit_package_query` | `string` | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | `string` | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` | `Record<string, any>` |  |
| `name` | `string` |  |
| `refresh_url` | `string` |  |
| `reset_url` | `string` |  |
| `scheduled_reset_at` | `string` | The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero. |
| `scheduled_reset_period` | `string` |  |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `token` | `string` |  |
| `updated_at` | `string` | The datetime the token was updated at. |
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
const repository_tokens = await client.RepositoryToken().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const repository_token = await client.RepositoryToken().create({
  owner: 'example_owner',
  repo: 'example_repo',
  name: 'example_name',
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
| `clients` | `number` |  |
| `created_at` | `string` | The datetime the token was updated at. |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `default` | `boolean` | If selected this is the default token for this repository. |
| `disable_url` | `string` |  |
| `downloads` | `number` |  |
| `enable_url` | `string` |  |
| `eula_accepted` | `Record<string, any>` |  |
| `eula_accepted_at` | `string` | The datetime the EULA was accepted at. |
| `eula_accepted_from` | `string` |  |
| `eula_required` | `boolean` | If checked, a EULA acceptance is required for this token. |
| `has_limits` | `boolean` |  |
| `identifier` | `number` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `boolean` | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` | `boolean` |  |
| `limit_bandwidth` | `number` | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` | `string` |  |
| `limit_date_range_from` | `string` | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | `string` | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | `number` | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | `number` | The maximum number of downloads allowed for the token. |
| `limit_package_query` | `string` | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | `string` | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` | `Record<string, any>` |  |
| `name` | `string` |  |
| `refresh_url` | `string` |  |
| `reset_url` | `string` |  |
| `scheduled_reset_at` | `string` | The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero. |
| `scheduled_reset_period` | `string` |  |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `token` | `string` |  |
| `updated_at` | `string` | The datetime the token was updated at. |
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
| `tokens` | `any[]` | The entitlements that have been synchronised. |

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
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `disable_reason` | `number` |  |
| `disable_reason_str` | `string` |  |
| `events` | `any[]` |  |
| `identifier` | `number` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `boolean` | If enabled, the webhook will trigger on subscribed events and send payloads to the configured target URL. |
| `is_last_response_bad` | `boolean` |  |
| `last_response_status` | `number` |  |
| `last_response_status_str` | `string` |  |
| `num_sent` | `number` |  |
| `package_query` | `string` | The package-based search query for webhooks to fire. |
| `request_body_format` | `number` | The format of the payloads for webhook requests. |
| `request_body_format_str` | `string` |  |
| `request_body_template_format` | `number` | The format of the payloads for webhook requests. |
| `request_body_template_format_str` | `string` |  |
| `request_content_type` | `string` | The value that will be sent for the 'Content Type' header. |
| `secret_header` | `string` | The header to send the predefined secret in. |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `target_url` | `string` | The destination URL that webhook payloads will be POST'ed to. |
| `templates` | `any[]` |  |
| `updated_at` | `string` |  |
| `updated_by` | `string` |  |
| `updated_by_url` | `string` |  |
| `verify_ssl` | `boolean` | If enabled, SSL certificates is verified when webhooks are sent. |

#### Example: Load

```ts
const repository_webhook = await client.RepositoryWebhook().load({ identifier: 'identifier', owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const repository_webhooks = await client.RepositoryWebhook().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const repository_webhook = await client.RepositoryWebhook().create({
  owner: 'example_owner',
  repo: 'example_repo',
  events: [],
  target_url: 'example_target_url',
  templates: [],
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
| `active` | `boolean` | If selected this is the active key for this repository. |
| `certificate` | `string` | The issued certificate. |
| `certificate_chain` | `string` | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` | `string` |  |
| `certificate_chain_fingerprint_short` | `string` |  |
| `certificate_fingerprint` | `string` | The SHA-256 long identifier used |
| `certificate_fingerprint_short` | `string` |  |
| `created_at` | `string` |  |
| `default` | `boolean` | If selected this is the default key for this repository. |
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
| `active` | `boolean` | If selected this is the active key for this repository. |
| `certificate` | `string` | The issued certificate. |
| `certificate_chain` | `string` | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` | `string` |  |
| `certificate_chain_fingerprint_short` | `string` |  |
| `certificate_fingerprint` | `string` | The SHA-256 long identifier used |
| `certificate_fingerprint_short` | `string` |  |
| `created_at` | `string` |  |
| `default` | `boolean` | If selected this is the default key for this repository. |
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
| `interval` | `number` | The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window. |
| `limit` | `number` | The maximum number of requests that you are permitted to send per hour |
| `remaining` | `number` | The number of requests that are remaining in the current rate limit window |
| `reset` | `number` | The UTC epoch timestamp at which the current rate limit window will reset |
| `reset_iso_8601` | `string` | The ISO 8601 datetime at which the current rate limit window will reset |
| `throttled` | `boolean` | If true, throttling is currently being enforced. |

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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `distro_version` | `string` | The distribution version that packages found on this upstream will be associated with. |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `string` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `string` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `string` | The GPG signature verification mode for this upstream. |
| `include_sources` | `boolean` | When checked, source packages will be available from this upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verification_status` | `string` | The signature verification status for this upstream. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const rpm = await client.Rpm().load({ id: 'rpm_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const rpms = await client.Rpm().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const rpm = await client.Rpm().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  distro_version: 'example_distro_version',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const ruby = await client.Ruby().load({ id: 'ruby_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const rubys = await client.Ruby().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const ruby = await client.Ruby().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `description` | `string` | The description of the service |
| `key` | `string` | The API key of the service |
| `key_expires_at` | `string` | The time at which the API key will expire. |
| `name` | `string` | The name of the service |
| `role` | `string` | The role of the service. |
| `slug` | `string` | The slug of the service |
| `teams` | `any[]` |  |

#### Example: Load

```ts
const service = await client.Service().load({ id: 'service_id', org_id: 'org_id' })
```

#### Example: List

```ts
const services = await client.Service().list({ org_id: "example" })
```

#### Example: Create

```ts
const service = await client.Service().create({
  org_id: 'example_org_id',
  name: 'example_name',
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
| `detail` | `string` | The message describing the state of the API. |
| `version` | `string` | The current version for the Cloudsmith service. |

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
| `label` | `string` | Name of the storage region |
| `slug` | `string` | Slug for the storage region |

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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```ts
const swift = await client.Swift().load({ id: 'swift_id', identifier: 'identifier', owner: 'owner' })
```

#### Example: List

```ts
const swifts = await client.Swift().list({ identifier: "example", owner: "example" })
```

#### Example: Create

```ts
const swift = await client.Swift().create({
  identifier: 'example_identifier',
  owner: 'example_owner',
  name: 'example_name',
  upstream_url: 'example_upstream_url',
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
| `created` | `string` | The time at which the API key was created. |
| `key` | `string` | The unique API key used for authentication. |
| `slug_perm` | `string` | The slug_perm for token. |

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
| `created` | `string` | The time at which the API key was created. |
| `key` | `string` | The unique API key used for authentication. |
| `slug_perm` | `string` | The slug_perm for token. |

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
| `authenticated` | `boolean` | If true then you're logged in as a user. |
| `email` | `string` | Your email address that we use to contact you. |
| `name` | `string` | The full name of the user (if any). |
| `profile_url` | `string` | The URL for the full profile of the user. |
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
| `tagline` | `string` | Your tagline is a sentence about you. |
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
| `created_at` | `string` | The time this scan result was stored. |
| `has_vulnerabilities` | `boolean` | Do the results contain any known vulnerabilities? |
| `identifier` | `string` |  |
| `max_severity` | `string` |  |
| `num_vulnerabilities` | `number` |  |
| `package` | `Record<string, any>` |  |
| `scan_id` | `number` | Deprecated (23-05-15): Please use 'identifier' instead. |
| `scans` | `any[]` |  |

#### Example: Load

```ts
const vulnerability = await client.Vulnerability().load({ id: 'vulnerability_id' })
```

#### Example: List

```ts
const vulnerabilitys = await client.Vulnerability().list({ owner: "example", repo: "example" })
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

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const userprofile = client.UserProfile()
await userprofile.load({ id: "example_id" })

// userprofile.data() now returns the userprofile data from the last `load`
// userprofile.match() returns { id: "example_id" }
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
