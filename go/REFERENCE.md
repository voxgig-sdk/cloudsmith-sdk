# Cloudsmith Golang SDK Reference

Complete API reference for the Cloudsmith Golang SDK.


## CloudsmithSDK

### Constructor

```go
func NewCloudsmithSDK(options map[string]any) *CloudsmithSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CloudsmithSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CloudsmithSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Abort(data map[string]any) CloudsmithEntity`

Create a new `Abort` entity instance. Pass `nil` for no initial data.

#### `Alpine(data map[string]any) CloudsmithEntity`

Create a new `Alpine` entity instance. Pass `nil` for no initial data.

#### `AuditLog(data map[string]any) CloudsmithEntity`

Create a new `AuditLog` entity instance. Pass `nil` for no initial data.

#### `Basic(data map[string]any) CloudsmithEntity`

Create a new `Basic` entity instance. Pass `nil` for no initial data.

#### `Cargo(data map[string]any) CloudsmithEntity`

Create a new `Cargo` entity instance. Pass `nil` for no initial data.

#### `Cocoapod(data map[string]any) CloudsmithEntity`

Create a new `Cocoapod` entity instance. Pass `nil` for no initial data.

#### `Complete(data map[string]any) CloudsmithEntity`

Create a new `Complete` entity instance. Pass `nil` for no initial data.

#### `Composer(data map[string]any) CloudsmithEntity`

Create a new `Composer` entity instance. Pass `nil` for no initial data.

#### `Conan(data map[string]any) CloudsmithEntity`

Create a new `Conan` entity instance. Pass `nil` for no initial data.

#### `Conda(data map[string]any) CloudsmithEntity`

Create a new `Conda` entity instance. Pass `nil` for no initial data.

#### `Copy(data map[string]any) CloudsmithEntity`

Create a new `Copy` entity instance. Pass `nil` for no initial data.

#### `Cran(data map[string]any) CloudsmithEntity`

Create a new `Cran` entity instance. Pass `nil` for no initial data.

#### `Dart(data map[string]any) CloudsmithEntity`

Create a new `Dart` entity instance. Pass `nil` for no initial data.

#### `Deb(data map[string]any) CloudsmithEntity`

Create a new `Deb` entity instance. Pass `nil` for no initial data.

#### `DenyPolicy(data map[string]any) CloudsmithEntity`

Create a new `DenyPolicy` entity instance. Pass `nil` for no initial data.

#### `Dependency(data map[string]any) CloudsmithEntity`

Create a new `Dependency` entity instance. Pass `nil` for no initial data.

#### `Disable(data map[string]any) CloudsmithEntity`

Create a new `Disable` entity instance. Pass `nil` for no initial data.

#### `DistributionFull(data map[string]any) CloudsmithEntity`

Create a new `DistributionFull` entity instance. Pass `nil` for no initial data.

#### `Distro(data map[string]any) CloudsmithEntity`

Create a new `Distro` entity instance. Pass `nil` for no initial data.

#### `Docker(data map[string]any) CloudsmithEntity`

Create a new `Docker` entity instance. Pass `nil` for no initial data.

#### `DynamicMapping(data map[string]any) CloudsmithEntity`

Create a new `DynamicMapping` entity instance. Pass `nil` for no initial data.

#### `Ecdsa(data map[string]any) CloudsmithEntity`

Create a new `Ecdsa` entity instance. Pass `nil` for no initial data.

#### `Enable(data map[string]any) CloudsmithEntity`

Create a new `Enable` entity instance. Pass `nil` for no initial data.

#### `Entitlement(data map[string]any) CloudsmithEntity`

Create a new `Entitlement` entity instance. Pass `nil` for no initial data.

#### `Evaluation(data map[string]any) CloudsmithEntity`

Create a new `Evaluation` entity instance. Pass `nil` for no initial data.

#### `File(data map[string]any) CloudsmithEntity`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Format(data map[string]any) CloudsmithEntity`

Create a new `Format` entity instance. Pass `nil` for no initial data.

#### `Geoip(data map[string]any) CloudsmithEntity`

Create a new `Geoip` entity instance. Pass `nil` for no initial data.

#### `Gon(data map[string]any) CloudsmithEntity`

Create a new `Gon` entity instance. Pass `nil` for no initial data.

#### `Gpg(data map[string]any) CloudsmithEntity`

Create a new `Gpg` entity instance. Pass `nil` for no initial data.

#### `Group(data map[string]any) CloudsmithEntity`

Create a new `Group` entity instance. Pass `nil` for no initial data.

#### `Helm(data map[string]any) CloudsmithEntity`

Create a new `Helm` entity instance. Pass `nil` for no initial data.

#### `Hex(data map[string]any) CloudsmithEntity`

Create a new `Hex` entity instance. Pass `nil` for no initial data.

#### `History(data map[string]any) CloudsmithEntity`

Create a new `History` entity instance. Pass `nil` for no initial data.

#### `Huggingface(data map[string]any) CloudsmithEntity`

Create a new `Huggingface` entity instance. Pass `nil` for no initial data.

#### `Info(data map[string]any) CloudsmithEntity`

Create a new `Info` entity instance. Pass `nil` for no initial data.

#### `Invite(data map[string]any) CloudsmithEntity`

Create a new `Invite` entity instance. Pass `nil` for no initial data.

#### `LicensePolicy(data map[string]any) CloudsmithEntity`

Create a new `LicensePolicy` entity instance. Pass `nil` for no initial data.

#### `Limit(data map[string]any) CloudsmithEntity`

Create a new `Limit` entity instance. Pass `nil` for no initial data.

#### `Luarock(data map[string]any) CloudsmithEntity`

Create a new `Luarock` entity instance. Pass `nil` for no initial data.

#### `Maven(data map[string]any) CloudsmithEntity`

Create a new `Maven` entity instance. Pass `nil` for no initial data.

#### `Member(data map[string]any) CloudsmithEntity`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `Move(data map[string]any) CloudsmithEntity`

Create a new `Move` entity instance. Pass `nil` for no initial data.

#### `Namespace(data map[string]any) CloudsmithEntity`

Create a new `Namespace` entity instance. Pass `nil` for no initial data.

#### `NamespaceAuditLog(data map[string]any) CloudsmithEntity`

Create a new `NamespaceAuditLog` entity instance. Pass `nil` for no initial data.

#### `Npm(data map[string]any) CloudsmithEntity`

Create a new `Npm` entity instance. Pass `nil` for no initial data.

#### `Nuget(data map[string]any) CloudsmithEntity`

Create a new `Nuget` entity instance. Pass `nil` for no initial data.

#### `OpenidConnect(data map[string]any) CloudsmithEntity`

Create a new `OpenidConnect` entity instance. Pass `nil` for no initial data.

#### `Org(data map[string]any) CloudsmithEntity`

Create a new `Org` entity instance. Pass `nil` for no initial data.

#### `OrganizationGroupSync(data map[string]any) CloudsmithEntity`

Create a new `OrganizationGroupSync` entity instance. Pass `nil` for no initial data.

#### `OrganizationGroupSyncStatus(data map[string]any) CloudsmithEntity`

Create a new `OrganizationGroupSyncStatus` entity instance. Pass `nil` for no initial data.

#### `OrganizationInvite(data map[string]any) CloudsmithEntity`

Create a new `OrganizationInvite` entity instance. Pass `nil` for no initial data.

#### `OrganizationInviteExtend(data map[string]any) CloudsmithEntity`

Create a new `OrganizationInviteExtend` entity instance. Pass `nil` for no initial data.

#### `OrganizationMembership(data map[string]any) CloudsmithEntity`

Create a new `OrganizationMembership` entity instance. Pass `nil` for no initial data.

#### `OrganizationMembershipRoleUpdate(data map[string]any) CloudsmithEntity`

Create a new `OrganizationMembershipRoleUpdate` entity instance. Pass `nil` for no initial data.

#### `OrganizationMembershipVisibilityUpdate(data map[string]any) CloudsmithEntity`

Create a new `OrganizationMembershipVisibilityUpdate` entity instance. Pass `nil` for no initial data.

#### `OrganizationPackageLicensePolicy(data map[string]any) CloudsmithEntity`

Create a new `OrganizationPackageLicensePolicy` entity instance. Pass `nil` for no initial data.

#### `OrganizationPackageVulnerabilityPolicy(data map[string]any) CloudsmithEntity`

Create a new `OrganizationPackageVulnerabilityPolicy` entity instance. Pass `nil` for no initial data.

#### `OrganizationSamlAuth(data map[string]any) CloudsmithEntity`

Create a new `OrganizationSamlAuth` entity instance. Pass `nil` for no initial data.

#### `OrganizationTeam(data map[string]any) CloudsmithEntity`

Create a new `OrganizationTeam` entity instance. Pass `nil` for no initial data.

#### `OrganizationTeamMember(data map[string]any) CloudsmithEntity`

Create a new `OrganizationTeamMember` entity instance. Pass `nil` for no initial data.

#### `Oss(data map[string]any) CloudsmithEntity`

Create a new `Oss` entity instance. Pass `nil` for no initial data.

#### `P2n(data map[string]any) CloudsmithEntity`

Create a new `P2n` entity instance. Pass `nil` for no initial data.

#### `Package(data map[string]any) CloudsmithEntity`

Create a new `Package` entity instance. Pass `nil` for no initial data.

#### `PackageDenyPolicy(data map[string]any) CloudsmithEntity`

Create a new `PackageDenyPolicy` entity instance. Pass `nil` for no initial data.

#### `PackageFilePartsUpload(data map[string]any) CloudsmithEntity`

Create a new `PackageFilePartsUpload` entity instance. Pass `nil` for no initial data.

#### `PackageFileUpload(data map[string]any) CloudsmithEntity`

Create a new `PackageFileUpload` entity instance. Pass `nil` for no initial data.

#### `PackageLicensePolicyEvaluation(data map[string]any) CloudsmithEntity`

Create a new `PackageLicensePolicyEvaluation` entity instance. Pass `nil` for no initial data.

#### `PackageVersionBadge(data map[string]any) CloudsmithEntity`

Create a new `PackageVersionBadge` entity instance. Pass `nil` for no initial data.

#### `PackageVulnerabilityPolicyEvaluation(data map[string]any) CloudsmithEntity`

Create a new `PackageVulnerabilityPolicyEvaluation` entity instance. Pass `nil` for no initial data.

#### `Privilege(data map[string]any) CloudsmithEntity`

Create a new `Privilege` entity instance. Pass `nil` for no initial data.

#### `Profile(data map[string]any) CloudsmithEntity`

Create a new `Profile` entity instance. Pass `nil` for no initial data.

#### `ProviderSetting(data map[string]any) CloudsmithEntity`

Create a new `ProviderSetting` entity instance. Pass `nil` for no initial data.

#### `ProviderSettingsWrite(data map[string]any) CloudsmithEntity`

Create a new `ProviderSettingsWrite` entity instance. Pass `nil` for no initial data.

#### `Python(data map[string]any) CloudsmithEntity`

Create a new `Python` entity instance. Pass `nil` for no initial data.

#### `Quarantine(data map[string]any) CloudsmithEntity`

Create a new `Quarantine` entity instance. Pass `nil` for no initial data.

#### `Quota(data map[string]any) CloudsmithEntity`

Create a new `Quota` entity instance. Pass `nil` for no initial data.

#### `Raw(data map[string]any) CloudsmithEntity`

Create a new `Raw` entity instance. Pass `nil` for no initial data.

#### `Refresh(data map[string]any) CloudsmithEntity`

Create a new `Refresh` entity instance. Pass `nil` for no initial data.

#### `Regenerate(data map[string]any) CloudsmithEntity`

Create a new `Regenerate` entity instance. Pass `nil` for no initial data.

#### `Repo(data map[string]any) CloudsmithEntity`

Create a new `Repo` entity instance. Pass `nil` for no initial data.

#### `RepositoryAuditLog(data map[string]any) CloudsmithEntity`

Create a new `RepositoryAuditLog` entity instance. Pass `nil` for no initial data.

#### `RepositoryEcdsaKey(data map[string]any) CloudsmithEntity`

Create a new `RepositoryEcdsaKey` entity instance. Pass `nil` for no initial data.

#### `RepositoryGeoIpRule(data map[string]any) CloudsmithEntity`

Create a new `RepositoryGeoIpRule` entity instance. Pass `nil` for no initial data.

#### `RepositoryGeoIpStatus(data map[string]any) CloudsmithEntity`

Create a new `RepositoryGeoIpStatus` entity instance. Pass `nil` for no initial data.

#### `RepositoryGeoIpTestAddress(data map[string]any) CloudsmithEntity`

Create a new `RepositoryGeoIpTestAddress` entity instance. Pass `nil` for no initial data.

#### `RepositoryGpgKey(data map[string]any) CloudsmithEntity`

Create a new `RepositoryGpgKey` entity instance. Pass `nil` for no initial data.

#### `RepositoryPrivilegeInput(data map[string]any) CloudsmithEntity`

Create a new `RepositoryPrivilegeInput` entity instance. Pass `nil` for no initial data.

#### `RepositoryRetentionRule(data map[string]any) CloudsmithEntity`

Create a new `RepositoryRetentionRule` entity instance. Pass `nil` for no initial data.

#### `RepositoryRsaKey(data map[string]any) CloudsmithEntity`

Create a new `RepositoryRsaKey` entity instance. Pass `nil` for no initial data.

#### `RepositoryToken(data map[string]any) CloudsmithEntity`

Create a new `RepositoryToken` entity instance. Pass `nil` for no initial data.

#### `RepositoryTokenRefresh(data map[string]any) CloudsmithEntity`

Create a new `RepositoryTokenRefresh` entity instance. Pass `nil` for no initial data.

#### `RepositoryTokenSync(data map[string]any) CloudsmithEntity`

Create a new `RepositoryTokenSync` entity instance. Pass `nil` for no initial data.

#### `RepositoryWebhook(data map[string]any) CloudsmithEntity`

Create a new `RepositoryWebhook` entity instance. Pass `nil` for no initial data.

#### `RepositoryX509EcdsaCertificate(data map[string]any) CloudsmithEntity`

Create a new `RepositoryX509EcdsaCertificate` entity instance. Pass `nil` for no initial data.

#### `RepositoryX509RsaCertificate(data map[string]any) CloudsmithEntity`

Create a new `RepositoryX509RsaCertificate` entity instance. Pass `nil` for no initial data.

#### `Reset(data map[string]any) CloudsmithEntity`

Create a new `Reset` entity instance. Pass `nil` for no initial data.

#### `ResourcesRateCheck(data map[string]any) CloudsmithEntity`

Create a new `ResourcesRateCheck` entity instance. Pass `nil` for no initial data.

#### `Resync(data map[string]any) CloudsmithEntity`

Create a new `Resync` entity instance. Pass `nil` for no initial data.

#### `Retention(data map[string]any) CloudsmithEntity`

Create a new `Retention` entity instance. Pass `nil` for no initial data.

#### `Rpm(data map[string]any) CloudsmithEntity`

Create a new `Rpm` entity instance. Pass `nil` for no initial data.

#### `Rsa(data map[string]any) CloudsmithEntity`

Create a new `Rsa` entity instance. Pass `nil` for no initial data.

#### `Ruby(data map[string]any) CloudsmithEntity`

Create a new `Ruby` entity instance. Pass `nil` for no initial data.

#### `SamlGroupSync(data map[string]any) CloudsmithEntity`

Create a new `SamlGroupSync` entity instance. Pass `nil` for no initial data.

#### `Scan(data map[string]any) CloudsmithEntity`

Create a new `Scan` entity instance. Pass `nil` for no initial data.

#### `Self(data map[string]any) CloudsmithEntity`

Create a new `Self` entity instance. Pass `nil` for no initial data.

#### `Service(data map[string]any) CloudsmithEntity`

Create a new `Service` entity instance. Pass `nil` for no initial data.

#### `Status(data map[string]any) CloudsmithEntity`

Create a new `Status` entity instance. Pass `nil` for no initial data.

#### `StatusBasic(data map[string]any) CloudsmithEntity`

Create a new `StatusBasic` entity instance. Pass `nil` for no initial data.

#### `StorageRegion(data map[string]any) CloudsmithEntity`

Create a new `StorageRegion` entity instance. Pass `nil` for no initial data.

#### `Swift(data map[string]any) CloudsmithEntity`

Create a new `Swift` entity instance. Pass `nil` for no initial data.

#### `Sync(data map[string]any) CloudsmithEntity`

Create a new `Sync` entity instance. Pass `nil` for no initial data.

#### `Tag(data map[string]any) CloudsmithEntity`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `Team(data map[string]any) CloudsmithEntity`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `Terraform(data map[string]any) CloudsmithEntity`

Create a new `Terraform` entity instance. Pass `nil` for no initial data.

#### `Test(data map[string]any) CloudsmithEntity`

Create a new `Test` entity instance. Pass `nil` for no initial data.

#### `Token(data map[string]any) CloudsmithEntity`

Create a new `Token` entity instance. Pass `nil` for no initial data.

#### `TransferRegion(data map[string]any) CloudsmithEntity`

Create a new `TransferRegion` entity instance. Pass `nil` for no initial data.

#### `User(data map[string]any) CloudsmithEntity`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserAuthToken(data map[string]any) CloudsmithEntity`

Create a new `UserAuthToken` entity instance. Pass `nil` for no initial data.

#### `UserAuthenticationToken(data map[string]any) CloudsmithEntity`

Create a new `UserAuthenticationToken` entity instance. Pass `nil` for no initial data.

#### `UserBrief(data map[string]any) CloudsmithEntity`

Create a new `UserBrief` entity instance. Pass `nil` for no initial data.

#### `UserProfile(data map[string]any) CloudsmithEntity`

Create a new `UserProfile` entity instance. Pass `nil` for no initial data.

#### `Vagrant(data map[string]any) CloudsmithEntity`

Create a new `Vagrant` entity instance. Pass `nil` for no initial data.

#### `Validate(data map[string]any) CloudsmithEntity`

Create a new `Validate` entity instance. Pass `nil` for no initial data.

#### `Version(data map[string]any) CloudsmithEntity`

Create a new `Version` entity instance. Pass `nil` for no initial data.

#### `Vulnerability(data map[string]any) CloudsmithEntity`

Create a new `Vulnerability` entity instance. Pass `nil` for no initial data.

#### `VulnerabilityPolicy(data map[string]any) CloudsmithEntity`

Create a new `VulnerabilityPolicy` entity instance. Pass `nil` for no initial data.

#### `Webhook(data map[string]any) CloudsmithEntity`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `X509Ecdsa(data map[string]any) CloudsmithEntity`

Create a new `X509Ecdsa` entity instance. Pass `nil` for no initial data.

#### `X509Rsa(data map[string]any) CloudsmithEntity`

Create a new `X509Rsa` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AbortEntity

```go
abort := client.Abort(nil)
fmt.Println(abort.GetName()) // "abort"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AbortEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AlpineEntity

```go
alpine := client.Alpine(nil)
fmt.Println(alpine.GetName()) // "alpine"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlpineEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuditLogEntity

```go
auditLog := client.AuditLog(nil)
fmt.Println(auditLog.GetName()) // "audit_log"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuditLogEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BasicEntity

```go
basic := client.Basic(nil)
fmt.Println(basic.GetName()) // "basic"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BasicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CargoEntity

```go
cargo := client.Cargo(nil)
fmt.Println(cargo.GetName()) // "cargo"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Cargo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Cargo(nil).Load(map[string]any{"id": "cargo_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Cargo(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Cargo(nil).Update(map[string]any{
    "id": "cargo_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CargoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CocoapodEntity

```go
cocoapod := client.Cocoapod(nil)
fmt.Println(cocoapod.GetName()) // "cocoapod"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CocoapodEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CompleteEntity

```go
complete := client.Complete(nil)
fmt.Println(complete.GetName()) // "complete"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompleteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ComposerEntity

```go
composer := client.Composer(nil)
fmt.Println(composer.GetName()) // "composer"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Composer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Composer(nil).Load(map[string]any{"id": "composer_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Composer(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Composer(nil).Update(map[string]any{
    "id": "composer_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ComposerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConanEntity

```go
conan := client.Conan(nil)
fmt.Println(conan.GetName()) // "conan"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConanEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CondaEntity

```go
conda := client.Conda(nil)
fmt.Println(conda.GetName()) // "conda"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Conda(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Conda(nil).Load(map[string]any{"id": "conda_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Conda(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Conda(nil).Update(map[string]any{
    "id": "conda_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CondaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CopyEntity

```go
copy := client.Copy(nil)
fmt.Println(copy.GetName()) // "copy"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CopyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CranEntity

```go
cran := client.Cran(nil)
fmt.Println(cran.GetName()) // "cran"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Cran(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Cran(nil).Load(map[string]any{"id": "cran_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Cran(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Cran(nil).Update(map[string]any{
    "id": "cran_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CranEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DartEntity

```go
dart := client.Dart(nil)
fmt.Println(dart.GetName()) // "dart"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Dart(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Dart(nil).Load(map[string]any{"id": "dart_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Dart(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Dart(nil).Update(map[string]any{
    "id": "dart_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DartEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DebEntity

```go
deb := client.Deb(nil)
fmt.Println(deb.GetName()) // "deb"
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
| `distro_versions` | `[]any` | Yes | The distribution version that packages found on this upstream could be associated with. |
| `extra_header_1` | `string` | No | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | No | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | No | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | No | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `string` | No | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `string` | No | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `string` | No | The GPG signature verification mode for this upstream. |
| `include_sources` | `bool` | No | When true, source packages will be available from this upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_distribution` | `string` | No | The distribution to fetch from the upstream |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verification_status` | `string` | No | The signature verification status for this upstream. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Deb(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Deb(nil).Load(map[string]any{"id": "deb_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Deb(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "distro_versions": []any{},
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Deb(nil).Update(map[string]any{
    "id": "deb_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DebEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DenyPolicyEntity

```go
denyPolicy := client.DenyPolicy(nil)
fmt.Println(denyPolicy.GetName()) // "deny_policy"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DenyPolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DependencyEntity

```go
dependency := client.Dependency(nil)
fmt.Println(dependency.GetName()) // "dependency"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DependencyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DisableEntity

```go
disable := client.Disable(nil)
fmt.Println(disable.GetName()) // "disable"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DisableEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DistributionFullEntity

```go
distributionFull := client.DistributionFull(nil)
fmt.Println(distributionFull.GetName()) // "distribution_full"
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
| `versions` | `[]any` | No | A list of the versions for this distribution |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DistributionFull(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DistributionFull(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DistributionFullEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DistroEntity

```go
distro := client.Distro(nil)
fmt.Println(distro.GetName()) // "distro"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DistroEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DockerEntity

```go
docker := client.Docker(nil)
fmt.Println(docker.GetName()) // "docker"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Docker(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Docker(nil).Load(map[string]any{"id": "docker_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Docker(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Docker(nil).Update(map[string]any{
    "id": "docker_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DockerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DynamicMappingEntity

```go
dynamicMapping := client.DynamicMapping(nil)
fmt.Println(dynamicMapping.GetName()) // "dynamic_mapping"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claim_value` | `string` | Yes | The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`. |
| `service_account` | `string` | Yes | The service account associated with the provider setting and `claim_value` Note: This field and the dynamic mappings feature are still in early access. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DynamicMapping(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DynamicMapping(nil).Load(map[string]any{"id": "dynamic_mapping_id", "openid_connect_id": "openid_connect_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DynamicMappingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EcdsaEntity

```go
ecdsa := client.Ecdsa(nil)
fmt.Println(ecdsa.GetName()) // "ecdsa"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EcdsaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnableEntity

```go
enable := client.Enable(nil)
fmt.Println(enable.GetName()) // "enable"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnableEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EntitlementEntity

```go
entitlement := client.Entitlement(nil)
fmt.Println(entitlement.GetName()) // "entitlement"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `int` | No | Number of packages with at least 1 download |
| `bandwidth` | `map[string]any` | Yes |  |
| `downloads` | `map[string]any` | Yes |  |
| `inactive` | `int` | No | Packages with zero downloads |
| `total` | `int` | No | Total number of packages in repo |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Entitlement(nil).Load(map[string]any{"id": "entitlement_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Entitlement(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "repo": "example_repo",
    "bandwidth": map[string]any{},
    "downloads": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Entitlement(nil).Remove(map[string]any{"identifier": "identifier", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EvaluationEntity

```go
evaluation := client.Evaluation(nil)
fmt.Println(evaluation.GetName()) // "evaluation"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EvaluationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FileEntity

```go
file := client.File(nil)
fmt.Println(file.GetName()) // "file"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.File(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FormatEntity

```go
format := client.Format(nil)
fmt.Println(format.GetName()) // "format"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the package format |
| `distributions` | `[]any` | No | The distributions supported by this package format |
| `extensions` | `[]any` | Yes | A non-exhaustive list of extensions supported |
| `name` | `string` | Yes | Name for the package format |
| `premium` | `bool` | Yes | If true the package format is a premium-only feature |
| `premium_plan_id` | `string` | No | The minimum plan id required for this package format |
| `premium_plan_name` | `string` | No | The minimum plan name required for this package format |
| `slug` | `string` | Yes | Slug for the package format |
| `supports` | `map[string]any` | Yes | A set of what the package format supports |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Format(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Format(nil).Load(map[string]any{"id": "format_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FormatEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GeoipEntity

```go
geoip := client.Geoip(nil)
fmt.Println(geoip.GetName()) // "geoip"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GeoipEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GonEntity

```go
gon := client.Gon(nil)
fmt.Println(gon.GetName()) // "gon"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Gon(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Gon(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner", "slug_perm": "slug_perm"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Gon(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Gon(nil).Update(map[string]any{
    "identifier": "identifier",
    "owner": "owner",
    "slug_perm": "slug_perm",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GonEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GpgEntity

```go
gpg := client.Gpg(nil)
fmt.Println(gpg.GetName()) // "gpg"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GpgEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupEntity

```go
group := client.Group(nil)
fmt.Println(group.GetName()) // "group"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HelmEntity

```go
helm := client.Helm(nil)
fmt.Println(helm.GetName()) // "helm"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Helm(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Helm(nil).Load(map[string]any{"id": "helm_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Helm(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Helm(nil).Update(map[string]any{
    "id": "helm_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HelmEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HexEntity

```go
hex := client.Hex(nil)
fmt.Println(hex.GetName()) // "hex"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Hex(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Hex(nil).Load(map[string]any{"id": "hex_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Hex(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Hex(nil).Update(map[string]any{
    "id": "hex_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HexEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HistoryEntity

```go
history := client.History(nil)
fmt.Println(history.GetName()) // "history"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HuggingfaceEntity

```go
huggingface := client.Huggingface(nil)
fmt.Println(huggingface.GetName()) // "huggingface"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Huggingface(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Huggingface(nil).Load(map[string]any{"id": "huggingface_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Huggingface(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Huggingface(nil).Update(map[string]any{
    "id": "huggingface_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HuggingfaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InfoEntity

```go
info := client.Info(nil)
fmt.Println(info.GetName()) // "info"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InfoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InviteEntity

```go
invite := client.Invite(nil)
fmt.Println(invite.GetName()) // "invite"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InviteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LicensePolicyEntity

```go
licensePolicy := client.LicensePolicy(nil)
fmt.Println(licensePolicy.GetName()) // "license_policy"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LicensePolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LimitEntity

```go
limit := client.Limit(nil)
fmt.Println(limit.GetName()) // "limit"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LimitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LuarockEntity

```go
luarock := client.Luarock(nil)
fmt.Println(luarock.GetName()) // "luarock"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LuarockEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MavenEntity

```go
maven := client.Maven(nil)
fmt.Println(maven.GetName()) // "maven"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verification_status` | `string` | No | The signature verification status for this upstream. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Maven(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Maven(nil).Load(map[string]any{"id": "maven_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Maven(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Maven(nil).Update(map[string]any{
    "id": "maven_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MavenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MemberEntity

```go
member := client.Member(nil)
fmt.Println(member.GetName()) // "member"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MoveEntity

```go
move := client.Move(nil)
fmt.Println(move.GetName()) // "move"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MoveEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NamespaceEntity

```go
namespace := client.Namespace(nil)
fmt.Println(namespace.GetName()) // "namespace"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `type_name` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Namespace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Namespace(nil).Load(map[string]any{"id": "namespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NamespaceAuditLogEntity

```go
namespaceAuditLog := client.NamespaceAuditLog(nil)
fmt.Println(namespaceAuditLog.GetName()) // "namespace_audit_log"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `string` | Yes |  |
| `actor_ip_address` | `string` | Yes |  |
| `actor_kind` | `string` | No |  |
| `actor_location` | `map[string]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NamespaceAuditLog(nil).Load(map[string]any{"id": "namespace_audit_log_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NamespaceAuditLogEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NpmEntity

```go
npm := client.Npm(nil)
fmt.Println(npm.GetName()) // "npm"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Npm(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Npm(nil).Load(map[string]any{"id": "npm_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Npm(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Npm(nil).Update(map[string]any{
    "id": "npm_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NpmEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NugetEntity

```go
nuget := client.Nuget(nil)
fmt.Println(nuget.GetName()) // "nuget"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Nuget(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Nuget(nil).Load(map[string]any{"id": "nuget_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Nuget(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Nuget(nil).Update(map[string]any{
    "id": "nuget_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NugetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OpenidConnectEntity

```go
openidConnect := client.OpenidConnect(nil)
fmt.Println(openidConnect.GetName()) // "openid_connect"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OpenidConnectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrgEntity

```go
org := client.Org(nil)
fmt.Println(org.GetName()) // "org"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `string` | No |  |
| `created_at` | `string` | No |  |
| `event_at` | `string` | No |  |
| `location` | `string` | No | The city/town/area your organization is based in. |
| `name` | `string` | Yes |  |
| `package` | `map[string]any` | Yes |  |
| `policy` | `map[string]any` | Yes |  |
| `reasons` | `[]any` | Yes |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `tagline` | `string` | No | A short public descriptive for your organization. |
| `vulnerability_scan_results` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Org(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Org(nil).Load(map[string]any{"id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Org(nil).Create(map[string]any{
    "id": "example_id",
    "name": "example_name",
    "package": map[string]any{},
    "policy": map[string]any{},
    "reasons": []any{},
    "vulnerability_scan_results": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Org(nil).Update(map[string]any{
    "id": "org_id",
    "team_id": "team_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Org(nil).Remove(map[string]any{"id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrgEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationGroupSyncEntity

```go
organizationGroupSync := client.OrganizationGroupSync(nil)
fmt.Println(organizationGroupSync.GetName()) // "organization_group_sync"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationGroupSync(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrganizationGroupSync(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "idp_key": "example_idp_key",
    "idp_value": "example_idp_value",
    "team": "example_team",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationGroupSyncEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationGroupSyncStatusEntity

```go
organizationGroupSyncStatus := client.OrganizationGroupSyncStatus(nil)
fmt.Println(organizationGroupSyncStatus.GetName()) // "organization_group_sync_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `saml_group_sync_status` | `bool` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationGroupSyncStatus(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationGroupSyncStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationInviteEntity

```go
organizationInvite := client.OrganizationInvite(nil)
fmt.Println(organizationInvite.GetName()) // "organization_invite"
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
| `teams` | `[]any` | No |  |
| `user` | `string` | No | The slug of the user to be invited. |
| `user_url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationInvite(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrganizationInvite(nil).Create(map[string]any{
    "org_id": "example_org_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OrganizationInvite(nil).Update(map[string]any{
    "id": "id",
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationInviteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationInviteExtendEntity

```go
organizationInviteExtend := client.OrganizationInviteExtend(nil)
fmt.Println(organizationInviteExtend.GetName()) // "organization_invite_extend"
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
| `teams` | `[]any` | No |  |
| `user` | `string` | No | The slug of the user to be invited. |
| `user_url` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrganizationInviteExtend(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "slug_perm": "example_slug_perm",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationInviteExtendEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationMembershipEntity

```go
organizationMembership := client.OrganizationMembership(nil)
fmt.Println(organizationMembership.GetName()) // "organization_membership"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `has_two_factor` | `bool` | No |  |
| `is_active` | `bool` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationMembership(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationMembership(nil).Load(map[string]any{"member": "member", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OrganizationMembership(nil).Update(map[string]any{
    "member": "member",
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationMembershipEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationMembershipRoleUpdateEntity

```go
organizationMembershipRoleUpdate := client.OrganizationMembershipRoleUpdate(nil)
fmt.Println(organizationMembershipRoleUpdate.GetName()) // "organization_membership_role_update"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `has_two_factor` | `bool` | No |  |
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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OrganizationMembershipRoleUpdate(nil).Update(map[string]any{
    "member_id": "member_id",
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationMembershipRoleUpdateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationMembershipVisibilityUpdateEntity

```go
organizationMembershipVisibilityUpdate := client.OrganizationMembershipVisibilityUpdate(nil)
fmt.Println(organizationMembershipVisibilityUpdate.GetName()) // "organization_membership_visibility_update"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `has_two_factor` | `bool` | No |  |
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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OrganizationMembershipVisibilityUpdate(nil).Update(map[string]any{
    "member_id": "member_id",
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationMembershipVisibilityUpdateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationPackageLicensePolicyEntity

```go
organizationPackageLicensePolicy := client.OrganizationPackageLicensePolicy(nil)
fmt.Println(organizationPackageLicensePolicy.GetName()) // "organization_package_license_policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_licenses` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `name` | `string` | Yes |  |
| `on_violation_quarantine` | `bool` | No |  |
| `package_query_string` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `spdx_identifiers` | `[]any` | Yes |  |
| `updated_at` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationPackageLicensePolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationPackageLicensePolicy(nil).Load(map[string]any{"id": "organization_package_license_policy_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrganizationPackageLicensePolicy(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "name": "example_name",
    "spdx_identifiers": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OrganizationPackageLicensePolicy(nil).Update(map[string]any{
    "id": "organization_package_license_policy_id",
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationPackageLicensePolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationPackageVulnerabilityPolicyEntity

```go
organizationPackageVulnerabilityPolicy := client.OrganizationPackageVulnerabilityPolicy(nil)
fmt.Println(organizationPackageVulnerabilityPolicy.GetName()) // "organization_package_vulnerability_policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_severity` | `bool` | No | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `min_severity` | `string` | No |  |
| `name` | `string` | Yes |  |
| `on_violation_quarantine` | `bool` | No |  |
| `package_query_string` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationPackageVulnerabilityPolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationPackageVulnerabilityPolicy(nil).Load(map[string]any{"id": "organization_package_vulnerability_policy_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrganizationPackageVulnerabilityPolicy(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OrganizationPackageVulnerabilityPolicy(nil).Update(map[string]any{
    "id": "organization_package_vulnerability_policy_id",
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationPackageVulnerabilityPolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationSamlAuthEntity

```go
organizationSamlAuth := client.OrganizationSamlAuth(nil)
fmt.Println(organizationSamlAuth.GetName()) // "organization_saml_auth"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `saml_auth_enabled` | `bool` | Yes |  |
| `saml_auth_enforced` | `bool` | Yes |  |
| `saml_metadata_inline` | `string` | No | If configured, SAML metadata will be used as entered instead of retrieved from a remote URL. |
| `saml_metadata_url` | `string` | No | If configured, SAML metadata be retrieved from a remote URL. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationSamlAuth(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OrganizationSamlAuth(nil).Update(map[string]any{
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationSamlAuthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationTeamEntity

```go
organizationTeam := client.OrganizationTeam(nil)
fmt.Println(organizationTeam.GetName()) // "organization_team"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationTeam(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationTeam(nil).Load(map[string]any{"id": "organization_team_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrganizationTeam(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OrganizationTeam(nil).Update(map[string]any{
    "id": "organization_team_id",
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationTeamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationTeamMemberEntity

```go
organizationTeamMember := client.OrganizationTeamMember(nil)
fmt.Println(organizationTeamMember.GetName()) // "organization_team_member"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `role` | `string` | Yes |  |
| `user` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationTeamMember(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrganizationTeamMember(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "team_id": "example_team_id",
    "role": "example_role",
    "user": "example_user",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationTeamMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OssEntity

```go
oss := client.Oss(nil)
fmt.Println(oss.GetName()) // "oss"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OssEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## P2nEntity

```go
p2n := client.P2n(nil)
fmt.Println(p2n.GetName()) // "p2n"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `P2nEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PackageEntity

```go
package_ := client.Package(nil)
fmt.Println(package_.GetName()) // "package"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `int` | No | Number of packages with at least 1 download |
| `architectures` | `[]any` | No |  |
| `backend_kind` | `int` | No |  |
| `bandwidth` | `map[string]any` | Yes |  |
| `cdn_url` | `string` | No |  |
| `checksum_md5` | `string` | No |  |
| `checksum_sha1` | `string` | No |  |
| `checksum_sha256` | `string` | No |  |
| `checksum_sha512` | `string` | No |  |
| `count` | `int` | Yes |  |
| `dep_type` | `string` | No |  |
| `dependencies_checksum_md5` | `string` | No | A checksum of all of the package's dependencies. |
| `dependencies_url` | `string` | No |  |
| `description` | `string` | No | A textual description of this package. |
| `display_name` | `string` | No |  |
| `distro` | `map[string]any` | Yes | The distributions supported by this package format |
| `distro_version` | `map[string]any` | No | A list of the versions for this distribution |
| `downloads` | `map[string]any` | Yes |  |
| `epoch` | `int` | No | The epoch of the package version (if any). |
| `extension` | `string` | No |  |
| `filename` | `string` | No |  |
| `files` | `[]any` | No |  |
| `format` | `string` | No |  |
| `format_url` | `string` | No |  |
| `freeable_storage` | `int` | No | Amount of storage that will be freed if this package is deleted |
| `fully_qualified_name` | `string` | No |  |
| `identifier_perm` | `string` | No | Unique and permanent identifier for the package. |
| `identifiers` | `map[string]any` | No | Return a map of identifier field names and their values. |
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
| `last_push` | `string` | Yes |  |
| `license` | `string` | No | The license of this package. |
| `name` | `string` | No | The name of this package. |
| `namespace` | `string` | No |  |
| `namespace_url` | `string` | No |  |
| `num_downloads` | `int` | Yes |  |
| `num_files` | `int` | No |  |
| `operator` | `string` | No |  |
| `origin_repository` | `string` | No |  |
| `origin_repository_url` | `string` | No |  |
| `package_type` | `int` | No | The type of package contents. |
| `policy_violated` | `bool` | No | Whether or not the package has violated any policy. |
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
| `size` | `int` | No | The calculated size of the package. |
| `slug` | `string` | No | The public unique identifier for the package. |
| `slug_perm` | `string` | No |  |
| `stage` | `int` | No | The synchronisation (in progress) stage of the package. |
| `stage_str` | `string` | No |  |
| `stage_updated_at` | `string` | No | The datetime the package stage was updated at. |
| `status` | `int` | No | The synchronisation status of the package. |
| `status_reason` | `string` | No | A textual description for the synchronous status reason (if any |
| `status_str` | `string` | No |  |
| `status_updated_at` | `string` | No | The datetime the package status was updated at. |
| `status_url` | `string` | No |  |
| `subtype` | `string` | No |  |
| `summary` | `string` | No | A one-liner synopsis of this package. |
| `sync_finished_at` | `string` | No | The datetime the package sync was finished at. |
| `sync_progress` | `int` | No | Synchronisation progress (from 0-100) |
| `tags` | `map[string]any` | No | All tags on the package, grouped by tag type. |
| `tags_immutable` | `map[string]any` | No | All tags on the package, grouped by tag type. |
| `total` | `int` | No | Total number of packages in repo |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Package(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Package(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Package(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "bandwidth": map[string]any{},
    "count": 1,
    "distro": map[string]any{},
    "downloads": map[string]any{},
    "last_push": "example_last_push",
    "num_downloads": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Package(nil).Remove(map[string]any{"identifier": "identifier", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PackageDenyPolicyEntity

```go
packageDenyPolicy := client.PackageDenyPolicy(nil)
fmt.Println(packageDenyPolicy.GetName()) // "package_deny_policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `enabled` | `bool` | No | Whether this rule is enabled or disabled. |
| `name` | `string` | No |  |
| `package_query_string` | `string` | Yes | Packages that match this query will trigger this deny rule. |
| `slug_perm` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PackageDenyPolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PackageDenyPolicy(nil).Load(map[string]any{"id": "package_deny_policy_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PackageDenyPolicy(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "package_query_string": "example_package_query_string",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PackageDenyPolicy(nil).Update(map[string]any{
    "id": "package_deny_policy_id",
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PackageDenyPolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PackageFilePartsUploadEntity

```go
packageFilePartsUpload := client.PackageFilePartsUpload(nil)
fmt.Println(packageFilePartsUpload.GetName()) // "package_file_parts_upload"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `identifier` | `string` | No | The identifier for the file to use uploading parts. |
| `upload_querystring` | `string` | No | The querystring to use for the next-step PUT upload. |
| `upload_url` | `string` | No | The URL to use for the next-step PUT upload |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PackageFilePartsUpload(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PackageFilePartsUploadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PackageFileUploadEntity

```go
packageFileUpload := client.PackageFileUpload(nil)
fmt.Println(packageFileUpload.GetName()) // "package_file_upload"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PackageFileUpload(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "repo": "example_repo",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PackageFileUploadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PackageLicensePolicyEvaluationEntity

```go
packageLicensePolicyEvaluation := client.PackageLicensePolicyEvaluation(nil)
fmt.Println(packageLicensePolicyEvaluation.GetName()) // "package_license_policy_evaluation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_licenses` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `evaluation_count` | `int` | No |  |
| `name` | `string` | No |  |
| `on_violation_quarantine` | `bool` | No |  |
| `package_query_string` | `string` | No |  |
| `policy` | `map[string]any` | Yes |  |
| `slug_perm` | `string` | No |  |
| `spdx_identifiers` | `[]any` | Yes |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `violation_count` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PackageLicensePolicyEvaluation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PackageLicensePolicyEvaluation(nil).Load(map[string]any{"id": "package_license_policy_evaluation_id", "license_policy_id": "license_policy_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PackageLicensePolicyEvaluation(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "policy_slug_perm": "example_policy_slug_perm",
    "policy": map[string]any{},
    "spdx_identifiers": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PackageLicensePolicyEvaluationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PackageVersionBadgeEntity

```go
packageVersionBadge := client.PackageVersionBadge(nil)
fmt.Println(packageVersionBadge.GetName()) // "package_version_badge"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PackageVersionBadge(nil).Load(map[string]any{"owner": "owner", "package_format": "package_format", "package_identifier": "package_identifier", "package_name": "package_name", "package_version": "package_version", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PackageVersionBadgeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PackageVulnerabilityPolicyEvaluationEntity

```go
packageVulnerabilityPolicyEvaluation := client.PackageVulnerabilityPolicyEvaluation(nil)
fmt.Println(packageVulnerabilityPolicyEvaluation.GetName()) // "package_vulnerability_policy_evaluation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_severity` | `bool` | No | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `evaluation_count` | `int` | No |  |
| `min_severity` | `string` | No |  |
| `name` | `string` | No |  |
| `on_violation_quarantine` | `bool` | No |  |
| `package_query_string` | `string` | No |  |
| `policy` | `map[string]any` | No |  |
| `slug_perm` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `violation_count` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PackageVulnerabilityPolicyEvaluation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PackageVulnerabilityPolicyEvaluation(nil).Load(map[string]any{"id": "package_vulnerability_policy_evaluation_id", "org_id": "org_id", "vulnerability_policy_id": "vulnerability_policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PackageVulnerabilityPolicyEvaluation(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "policy_slug_perm": "example_policy_slug_perm",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PackageVulnerabilityPolicyEvaluationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PrivilegeEntity

```go
privilege := client.Privilege(nil)
fmt.Println(privilege.GetName()) // "privilege"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PrivilegeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProfileEntity

```go
profile := client.Profile(nil)
fmt.Println(profile.GetName()) // "profile"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProfileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProviderSettingEntity

```go
providerSetting := client.ProviderSetting(nil)
fmt.Println(providerSetting.GetName()) // "provider_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claims` | `map[string]any` | Yes | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `enabled` | `bool` | Yes | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | `string` | No | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | `string` | Yes | The name of the provider settings are being configured for |
| `provider_url` | `string` | Yes | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | `[]any` | No | The service accounts associated with these provider settings. |
| `slug` | `string` | No | The slug of the provider settings |
| `slug_perm` | `string` | No | The unique, immutable identifier of the provider settings. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProviderSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProviderSetting(nil).Load(map[string]any{"org_id": "org_id", "slug_perm": "slug_perm"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProviderSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProviderSettingsWriteEntity

```go
providerSettingsWrite := client.ProviderSettingsWrite(nil)
fmt.Println(providerSettingsWrite.GetName()) // "provider_settings_write"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claims` | `map[string]any` | Yes | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `dynamic_mappings` | `[]any` | No | The dynamic mappings of `mapping_claim` values to service accounts. |
| `enabled` | `bool` | Yes | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | `string` | No | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | `string` | Yes | The name of the provider settings are being configured for |
| `provider_url` | `string` | Yes | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | `[]any` | No | The service accounts associated with these provider settings. |
| `slug` | `string` | No | The slug of the provider settings |
| `slug_perm` | `string` | No | The unique, immutable identifier of the provider settings. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProviderSettingsWrite(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "claims": map[string]any{},
    "enabled": true,
    "name": "example_name",
    "provider_url": "example_provider_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProviderSettingsWrite(nil).Update(map[string]any{
    "org_id": "org_id",
    "slug_perm": "slug_perm",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProviderSettingsWriteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PythonEntity

```go
python := client.Python(nil)
fmt.Println(python.GetName()) // "python"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Python(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Python(nil).Load(map[string]any{"id": "python_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Python(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Python(nil).Update(map[string]any{
    "id": "python_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PythonEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## QuarantineEntity

```go
quarantine := client.Quarantine(nil)
fmt.Println(quarantine.GetName()) // "quarantine"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `QuarantineEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## QuotaEntity

```go
quota := client.Quota(nil)
fmt.Println(quota.GetName()) // "quota"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display` | `map[string]any` | Yes |  |
| `history` | `[]any` | Yes |  |
| `raw` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Quota(nil).Load(map[string]any{"id": "quota_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `QuotaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RawEntity

```go
raw := client.Raw(nil)
fmt.Println(raw.GetName()) // "raw"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RawEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RefreshEntity

```go
refresh := client.Refresh(nil)
fmt.Println(refresh.GetName()) // "refresh"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RefreshEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RegenerateEntity

```go
regenerate := client.Regenerate(nil)
fmt.Println(regenerate.GetName()) // "regenerate"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RegenerateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepoEntity

```go
repo := client.Repo(nil)
fmt.Println(repo.GetName()) // "repo"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cdn_url` | `string` | No | Base URL from which packages and other artifacts are downloaded. |
| `content_kind` | `string` | No | The repository content kind determines whether this repository contains packages, or provides a distribution of packages from other repositories. |
| `contextual_auth_realm` | `bool` | No | If checked, missing credentials for this repository where basic authentication is required shall present an enriched value in the 'WWW-Authenticate' header containing the namespace and repository. |
| `copy_own` | `bool` | No | If checked, users can copy any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `copy_packages` | `string` | No | This defines the minimum level of privilege required for a user to copy packages. |
| `cosign_signing_enabled` | `bool` | No | When enabled, all pushed (or pulled from upstream) OCI packages and artifacts will be signed using cosign with the repository's ECDSA key. |
| `created_at` | `string` | No |  |
| `default_privilege` | `string` | No | This defines the default level of privilege that all of your organization members have for this repository. |
| `delete_own` | `bool` | No | If checked, users can delete any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `delete_packages` | `string` | No | This defines the minimum level of privilege required for a user to delete packages. |
| `deleted_at` | `string` | No | The datetime the repository was manually deleted at. |
| `description` | `string` | No | A description of the repository's purpose/contents. |
| `distributes` | `[]any` | No | The repositories distributed through this repo. |
| `docker_refresh_tokens_enabled` | `bool` | No | If checked, refresh tokens will be issued in addition to access tokens for Docker authentication. |
| `ecdsa_keys` | `[]any` | No |  |
| `enforce_eula` | `bool` | No | If checked, downloads will explicitly require acceptance of an EULA. |
| `gpg_keys` | `[]any` | No |  |
| `index_files` | `bool` | No | If checked, files contained in packages will be indexed, which increase the synchronisation time required for packages. |
| `is_open_source` | `bool` | No |  |
| `is_private` | `bool` | No |  |
| `is_public` | `bool` | No |  |
| `manage_entitlements_privilege` | `string` | No | This defines the minimum level of privilege required for a user to manage entitlement tokens with private repositories. |
| `move_own` | `bool` | No | If checked, users can move any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `move_packages` | `string` | No | This defines the minimum level of privilege required for a user to move packages. |
| `name` | `string` | Yes | A descriptive name for the repository. |
| `namespace` | `string` | No | Namespace to which this repository belongs. |
| `namespace_url` | `string` | No | API endpoint where data about this namespace can be retrieved. |
| `nuget_native_signing_enabled` | `bool` | No | When enabled, all pushed (or pulled from upstream) nuget packages and artifacts will be signed using the repository's X.509 RSA certificate. |
| `num_downloads` | `int` | No | The number of downloads for packages in the repository. |
| `num_policy_violated_packages` | `int` | No | Number of packages with policy violations in a repository. |
| `num_quarantined_packages` | `int` | No | Number of quarantined packages in a repository. |
| `open_source_license` | `string` | No | The SPDX identifier of the open source license. |
| `open_source_project_url` | `string` | No | The URL to the Open-Source project, used for validating that the project meets the requirements for Open-Source. |
| `package_count` | `int` | No | The number of packages in the repository. |
| `package_group_count` | `int` | No | The number of groups in the repository. |
| `proxy_npmjs` | `bool` | No | If checked, Npm packages that are not in the repository when requested by clients will automatically be proxied from the public npmjs.org registry. |
| `proxy_pypi` | `bool` | No | If checked, Python packages that are not in the repository when requested by clients will automatically be proxied from the public pypi.python.org registry. |
| `raw_package_index_enabled` | `bool` | No | If checked, HTML and JSON indexes will be generated that list all available raw packages in the repository. |
| `raw_package_index_signatures_enabled` | `bool` | No | If checked, the HTML and JSON indexes will display raw package GPG signatures alongside the index packages. |
| `replace_packages` | `string` | No | This defines the minimum level of privilege required for a user to republish packages. |
| `replace_packages_by_default` | `bool` | No | If checked, uploaded packages will overwrite/replace any others with the same attributes (e.g. |
| `repository_type` | `int` | No | The repository type changes how it is accessed and billed. |
| `repository_type_str` | `string` | No | The repository type changes how it is accessed and billed. |
| `resync_own` | `bool` | No | If checked, users can resync any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `resync_packages` | `string` | No | This defines the minimum level of privilege required for a user to resync packages. |
| `scan_own` | `bool` | No | If checked, users can scan any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `scan_packages` | `string` | No | This defines the minimum level of privilege required for a user to scan packages. |
| `self_html_url` | `string` | No | Website URL for this repository. |
| `self_url` | `string` | No | API endpoint where data about this repository can be retrieved. |
| `show_setup_all` | `bool` | No | If checked, the Set Me Up help for all formats will always be shown, even if you don't have packages of that type uploaded. |
| `size` | `int` | No | The calculated size of the repository. |
| `size_str` | `string` | No | The calculated size of the repository (human readable). |
| `slug` | `string` | No | The slug identifies the repository in URIs. |
| `slug_perm` | `string` | No | The slug_perm immutably identifies the repository. |
| `storage_region` | `string` | No | The Cloudsmith region in which package files are stored. |
| `strict_npm_validation` | `bool` | No | If checked, npm packages will be validated strictly to ensure the package matches specifcation. |
| `tag_pre_releases_as_latest` | `bool` | No | If checked, packages pushed with a pre-release component on that version will be marked with the 'latest' tag. |
| `use_debian_labels` | `bool` | No | If checked, a 'Label' field will be present in Debian-based repositories. |
| `use_default_cargo_upstream` | `bool` | No | If checked, dependencies of uploaded Cargo crates which do not set an explicit value for "registry" will be assumed to be available from crates.io. |
| `use_entitlements_privilege` | `string` | No | This defines the minimum level of privilege required for a user to see/use entitlement tokens with private repositories. |
| `use_noarch_packages` | `bool` | No | If checked, noarch packages (if supported) are enabled in installations/configurations. |
| `use_source_packages` | `bool` | No | If checked, source packages (if supported) are enabled in installations/configurations. |
| `use_vulnerability_scanning` | `bool` | No | If checked, vulnerability scanning will be enabled for all supported packages within this repository. |
| `user_entitlements_enabled` | `bool` | No | If checked, users can use and manage their own user-specific entitlement token for the repository (if private). |
| `view_statistics` | `string` | No | This defines the minimum level of privilege required for a user to view repository statistics, to include entitlement-based usage, if applicable. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Repo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Repo(nil).Load(map[string]any{"id": "repo_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Repo(nil).Create(map[string]any{
    "id": "example_id",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Repo(nil).Update(map[string]any{
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Repo(nil).Remove(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryAuditLogEntity

```go
repositoryAuditLog := client.RepositoryAuditLog(nil)
fmt.Println(repositoryAuditLog.GetName()) // "repository_audit_log"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `string` | Yes |  |
| `actor_ip_address` | `string` | Yes |  |
| `actor_kind` | `string` | No |  |
| `actor_location` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RepositoryAuditLog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryAuditLogEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryEcdsaKeyEntity

```go
repositoryEcdsaKey := client.RepositoryEcdsaKey(nil)
fmt.Println(repositoryEcdsaKey.GetName()) // "repository_ecdsa_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | If selected this is the active key for this repository. |
| `created_at` | `string` | No |  |
| `default` | `bool` | No | If selected this is the default key for this repository. |
| `fingerprint` | `string` | No | The long identifier used by ECDSA for this key. |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No | The public key given to repository users. |
| `ssh_fingerprint` | `string` | No | The SSH fingerprint used by ECDSA for this key. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositoryEcdsaKey(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RepositoryEcdsaKey(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryEcdsaKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryGeoIpRuleEntity

```go
repositoryGeoIpRule := client.RepositoryGeoIpRule(nil)
fmt.Println(repositoryGeoIpRule.GetName()) // "repository_geo_ip_rule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cidr` | `map[string]any` | Yes |  |
| `country_code` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositoryGeoIpRule(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.RepositoryGeoIpRule(nil).Update(map[string]any{
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryGeoIpRuleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryGeoIpStatusEntity

```go
repositoryGeoIpStatus := client.RepositoryGeoIpStatus(nil)
fmt.Println(repositoryGeoIpStatus.GetName()) // "repository_geo_ip_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `geoip_enabled` | `bool` | No | If checked, any access to the website or downloads for this repository is allowed/denied according to the configured Geo/IP restriction rules. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositoryGeoIpStatus(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryGeoIpStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryGeoIpTestAddressEntity

```go
repositoryGeoIpTestAddress := client.RepositoryGeoIpTestAddress(nil)
fmt.Println(repositoryGeoIpTestAddress.GetName()) // "repository_geo_ip_test_address"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RepositoryGeoIpTestAddress(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryGeoIpTestAddressEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryGpgKeyEntity

```go
repositoryGpgKey := client.RepositoryGpgKey(nil)
fmt.Println(repositoryGpgKey.GetName()) // "repository_gpg_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | If selected this is the active key for this repository. |
| `comment` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `default` | `bool` | No | If selected this is the default key for this repository. |
| `fingerprint` | `string` | No | The long identifier used by GPG for this key. |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No | The public key given to repository users. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositoryGpgKey(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RepositoryGpgKey(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "comment": "example_comment",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryGpgKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryPrivilegeInputEntity

```go
repositoryPrivilegeInput := client.RepositoryPrivilegeInput(nil)
fmt.Println(repositoryPrivilegeInput.GetName()) // "repository_privilege_input"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `privilege` | `string` | Yes | The level of privilege that the user or team should be granted to the specified repository. |
| `service` | `string` | No | The service identifier (slug). |
| `team` | `string` | No | The team identifier (slug). |
| `user` | `string` | No | The user identifier (slug). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RepositoryPrivilegeInput(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryPrivilegeInputEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryRetentionRuleEntity

```go
repositoryRetentionRule := client.RepositoryRetentionRule(nil)
fmt.Println(repositoryRetentionRule.GetName()) // "repository_retention_rule"
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
| `retention_package_query_string` | `string` | No | A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will pre… |
| `retention_size_limit` | `int` | No | The maximum X total size (in bytes) of packages to retain. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositoryRetentionRule(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.RepositoryRetentionRule(nil).Update(map[string]any{
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryRetentionRuleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryRsaKeyEntity

```go
repositoryRsaKey := client.RepositoryRsaKey(nil)
fmt.Println(repositoryRsaKey.GetName()) // "repository_rsa_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | If selected this is the active key for this repository. |
| `created_at` | `string` | No |  |
| `default` | `bool` | No | If selected this is the default key for this repository. |
| `fingerprint` | `string` | No | The long identifier used by RSA for this key. |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No | The public key given to repository users. |
| `ssh_fingerprint` | `string` | No | The SSH fingerprint used by RSA for this key. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositoryRsaKey(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RepositoryRsaKey(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryRsaKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryTokenEntity

```go
repositoryToken := client.RepositoryToken(nil)
fmt.Println(repositoryToken.GetName()) // "repository_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clients` | `int` | No |  |
| `created_at` | `string` | No | The datetime the token was updated at. |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `default` | `bool` | No | If selected this is the default token for this repository. |
| `disable_url` | `string` | No |  |
| `downloads` | `int` | No |  |
| `enable_url` | `string` | No |  |
| `eula_accepted` | `map[string]any` | No |  |
| `eula_accepted_at` | `string` | No | The datetime the EULA was accepted at. |
| `eula_accepted_from` | `string` | No |  |
| `eula_required` | `bool` | No | If checked, a EULA acceptance is required for this token. |
| `has_limits` | `bool` | No |  |
| `identifier` | `int` | No | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `bool` | No | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` | `bool` | No |  |
| `limit_bandwidth` | `int` | No | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` | `string` | No |  |
| `limit_date_range_from` | `string` | No | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | `string` | No | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | `int` | No | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | `int` | No | The maximum number of downloads allowed for the token. |
| `limit_package_query` | `string` | No | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | `string` | No | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RepositoryToken(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositoryToken(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RepositoryToken(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.RepositoryToken(nil).Update(map[string]any{
    "identifier": "identifier",
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryTokenRefreshEntity

```go
repositoryTokenRefresh := client.RepositoryTokenRefresh(nil)
fmt.Println(repositoryTokenRefresh.GetName()) // "repository_token_refresh"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clients` | `int` | No |  |
| `created_at` | `string` | No | The datetime the token was updated at. |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `default` | `bool` | No | If selected this is the default token for this repository. |
| `disable_url` | `string` | No |  |
| `downloads` | `int` | No |  |
| `enable_url` | `string` | No |  |
| `eula_accepted` | `map[string]any` | No |  |
| `eula_accepted_at` | `string` | No | The datetime the EULA was accepted at. |
| `eula_accepted_from` | `string` | No |  |
| `eula_required` | `bool` | No | If checked, a EULA acceptance is required for this token. |
| `has_limits` | `bool` | No |  |
| `identifier` | `int` | No | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `bool` | No | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` | `bool` | No |  |
| `limit_bandwidth` | `int` | No | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` | `string` | No |  |
| `limit_date_range_from` | `string` | No | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | `string` | No | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | `int` | No | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | `int` | No | The maximum number of downloads allowed for the token. |
| `limit_package_query` | `string` | No | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | `string` | No | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` | `map[string]any` | No |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RepositoryTokenRefresh(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "repo": "example_repo",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryTokenRefreshEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryTokenSyncEntity

```go
repositoryTokenSync := client.RepositoryTokenSync(nil)
fmt.Println(repositoryTokenSync.GetName()) // "repository_token_sync"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tokens` | `[]any` | No | The entitlements that have been synchronised. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RepositoryTokenSync(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryTokenSyncEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryWebhookEntity

```go
repositoryWebhook := client.RepositoryWebhook(nil)
fmt.Println(repositoryWebhook.GetName()) // "repository_webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `disable_reason` | `int` | No |  |
| `disable_reason_str` | `string` | No |  |
| `events` | `[]any` | Yes |  |
| `identifier` | `int` | No | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `bool` | No | If enabled, the webhook will trigger on subscribed events and send payloads to the configured target URL. |
| `is_last_response_bad` | `bool` | No |  |
| `last_response_status` | `int` | No |  |
| `last_response_status_str` | `string` | No |  |
| `num_sent` | `int` | No |  |
| `package_query` | `string` | No | The package-based search query for webhooks to fire. |
| `request_body_format` | `int` | No | The format of the payloads for webhook requests. |
| `request_body_format_str` | `string` | No |  |
| `request_body_template_format` | `int` | No | The format of the payloads for webhook requests. |
| `request_body_template_format_str` | `string` | No |  |
| `request_content_type` | `string` | No | The value that will be sent for the 'Content Type' header. |
| `secret_header` | `string` | No | The header to send the predefined secret in. |
| `self_url` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `target_url` | `string` | Yes | The destination URL that webhook payloads will be POST'ed to. |
| `templates` | `[]any` | Yes |  |
| `updated_at` | `string` | No |  |
| `updated_by` | `string` | No |  |
| `updated_by_url` | `string` | No |  |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates is verified when webhooks are sent. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RepositoryWebhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositoryWebhook(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RepositoryWebhook(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "events": []any{},
    "target_url": "example_target_url",
    "templates": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.RepositoryWebhook(nil).Update(map[string]any{
    "identifier": "identifier",
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryWebhookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryX509EcdsaCertificateEntity

```go
repositoryX509EcdsaCertificate := client.RepositoryX509EcdsaCertificate(nil)
fmt.Println(repositoryX509EcdsaCertificate.GetName()) // "repository_x509_ecdsa_certificate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | If selected this is the active key for this repository. |
| `certificate` | `string` | No | The issued certificate. |
| `certificate_chain` | `string` | No | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` | `string` | No |  |
| `certificate_chain_fingerprint_short` | `string` | No |  |
| `certificate_fingerprint` | `string` | No | The SHA-256 long identifier used |
| `certificate_fingerprint_short` | `string` | No |  |
| `created_at` | `string` | No |  |
| `default` | `bool` | No | If selected this is the default key for this repository. |
| `issuing_status` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositoryX509EcdsaCertificate(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryX509EcdsaCertificateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryX509RsaCertificateEntity

```go
repositoryX509RsaCertificate := client.RepositoryX509RsaCertificate(nil)
fmt.Println(repositoryX509RsaCertificate.GetName()) // "repository_x509_rsa_certificate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No | If selected this is the active key for this repository. |
| `certificate` | `string` | No | The issued certificate. |
| `certificate_chain` | `string` | No | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` | `string` | No |  |
| `certificate_chain_fingerprint_short` | `string` | No |  |
| `certificate_fingerprint` | `string` | No | The SHA-256 long identifier used |
| `certificate_fingerprint_short` | `string` | No |  |
| `created_at` | `string` | No |  |
| `default` | `bool` | No | If selected this is the default key for this repository. |
| `issuing_status` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositoryX509RsaCertificate(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryX509RsaCertificateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ResetEntity

```go
reset := client.Reset(nil)
fmt.Println(reset.GetName()) // "reset"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ResourcesRateCheckEntity

```go
resourcesRateCheck := client.ResourcesRateCheck(nil)
fmt.Println(resourcesRateCheck.GetName()) // "resources_rate_check"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `interval` | `float64` | No | The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window. |
| `limit` | `int` | No | The maximum number of requests that you are permitted to send per hour |
| `remaining` | `int` | No | The number of requests that are remaining in the current rate limit window |
| `reset` | `int` | No | The UTC epoch timestamp at which the current rate limit window will reset |
| `reset_iso_8601` | `string` | No | The ISO 8601 datetime at which the current rate limit window will reset |
| `throttled` | `bool` | No | If true, throttling is currently being enforced. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ResourcesRateCheck(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResourcesRateCheckEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ResyncEntity

```go
resync := client.Resync(nil)
fmt.Println(resync.GetName()) // "resync"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResyncEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RetentionEntity

```go
retention := client.Retention(nil)
fmt.Println(retention.GetName()) // "retention"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RetentionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RpmEntity

```go
rpm := client.Rpm(nil)
fmt.Println(rpm.GetName()) // "rpm"
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
| `include_sources` | `bool` | No | When checked, source packages will be available from this upstream. |
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verification_status` | `string` | No | The signature verification status for this upstream. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Rpm(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Rpm(nil).Load(map[string]any{"id": "rpm_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Rpm(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "distro_version": "example_distro_version",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Rpm(nil).Update(map[string]any{
    "id": "rpm_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RpmEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RsaEntity

```go
rsa := client.Rsa(nil)
fmt.Println(rsa.GetName()) // "rsa"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RsaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RubyEntity

```go
ruby := client.Ruby(nil)
fmt.Println(ruby.GetName()) // "ruby"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Ruby(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Ruby(nil).Load(map[string]any{"id": "ruby_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Ruby(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Ruby(nil).Update(map[string]any{
    "id": "ruby_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RubyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SamlGroupSyncEntity

```go
samlGroupSync := client.SamlGroupSync(nil)
fmt.Println(samlGroupSync.GetName()) // "saml_group_sync"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SamlGroupSyncEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ScanEntity

```go
scan := client.Scan(nil)
fmt.Println(scan.GetName()) // "scan"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScanEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SelfEntity

```go
self := client.Self(nil)
fmt.Println(self.GetName()) // "self"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SelfEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ServiceEntity

```go
service := client.Service(nil)
fmt.Println(service.GetName()) // "service"
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
| `teams` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Service(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Service(nil).Load(map[string]any{"id": "service_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Service(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Service(nil).Update(map[string]any{
    "id": "service_id",
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ServiceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StatusEntity

```go
status := client.Status(nil)
fmt.Println(status.GetName()) // "status"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StatusBasicEntity

```go
statusBasic := client.StatusBasic(nil)
fmt.Println(statusBasic.GetName()) // "status_basic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detail` | `string` | No | The message describing the state of the API. |
| `version` | `string` | No | The current version for the Cloudsmith service. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.StatusBasic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusBasicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StorageRegionEntity

```go
storageRegion := client.StorageRegion(nil)
fmt.Println(storageRegion.GetName()) // "storage_region"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes | Name of the storage region |
| `slug` | `string` | Yes | Slug for the storage region |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.StorageRegion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.StorageRegion(nil).Load(map[string]any{"id": "storage_region_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StorageRegionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SwiftEntity

```go
swift := client.Swift(nil)
fmt.Println(swift.GetName()) // "swift"
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
| `is_active` | `bool` | No | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | No | The mode that this upstream should operate in. |
| `name` | `string` | Yes | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | No | When true, this upstream source is pending validation. |
| `priority` | `int` | No | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes | The URL for this upstream source. |
| `verify_ssl` | `bool` | No | If enabled, SSL certificates are verified when requests are made to this upstream. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Swift(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Swift(nil).Load(map[string]any{"id": "swift_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Swift(nil).Create(map[string]any{
    "identifier": "example_identifier",
    "owner": "example_owner",
    "name": "example_name",
    "upstream_url": "example_upstream_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Swift(nil).Update(map[string]any{
    "id": "swift_id",
    "identifier": "identifier",
    "owner": "owner",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SwiftEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SyncEntity

```go
sync := client.Sync(nil)
fmt.Println(sync.GetName()) // "sync"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SyncEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TagEntity

```go
tag := client.Tag(nil)
fmt.Println(tag.GetName()) // "tag"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamEntity

```go
team := client.Team(nil)
fmt.Println(team.GetName()) // "team"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TerraformEntity

```go
terraform := client.Terraform(nil)
fmt.Println(terraform.GetName()) // "terraform"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TerraformEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TestEntity

```go
test := client.Test(nil)
fmt.Println(test.GetName()) // "test"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TokenEntity

```go
token := client.Token(nil)
fmt.Println(token.GetName()) // "token"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TransferRegionEntity

```go
transferRegion := client.TransferRegion(nil)
fmt.Println(transferRegion.GetName()) // "transfer_region"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TransferRegionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserEntity

```go
user := client.User(nil)
fmt.Println(user.GetName()) // "user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No | The time at which the API key was created. |
| `key` | `string` | No | The unique API key used for authentication. |
| `slug_perm` | `string` | No | The slug_perm for token. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserAuthTokenEntity

```go
userAuthToken := client.UserAuthToken(nil)
fmt.Println(userAuthToken.GetName()) // "user_auth_token"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.UserAuthToken(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserAuthTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserAuthenticationTokenEntity

```go
userAuthenticationToken := client.UserAuthenticationToken(nil)
fmt.Println(userAuthenticationToken.GetName()) // "user_authentication_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No | The time at which the API key was created. |
| `key` | `string` | No | The unique API key used for authentication. |
| `slug_perm` | `string` | No | The slug_perm for token. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.UserAuthenticationToken(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.UserAuthenticationToken(nil).Update(map[string]any{
    "slug_perm": "slug_perm",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserAuthenticationTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserBriefEntity

```go
userBrief := client.UserBrief(nil)
fmt.Println(userBrief.GetName()) // "user_brief"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authenticated` | `bool` | No | If true then you're logged in as a user. |
| `email` | `string` | No | Your email address that we use to contact you. |
| `name` | `string` | No | The full name of the user (if any). |
| `profile_url` | `string` | No | The URL for the full profile of the user. |
| `self_url` | `string` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.UserBrief(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserBriefEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserProfileEntity

```go
userProfile := client.UserProfile(nil)
fmt.Println(userProfile.GetName()) // "user_profile"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.UserProfile(nil).Load(map[string]any{"id": "user_profile_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserProfileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VagrantEntity

```go
vagrant := client.Vagrant(nil)
fmt.Println(vagrant.GetName()) // "vagrant"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VagrantEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ValidateEntity

```go
validate := client.Validate(nil)
fmt.Println(validate.GetName()) // "validate"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ValidateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VersionEntity

```go
version := client.Version(nil)
fmt.Println(version.GetName()) // "version"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VersionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VulnerabilityEntity

```go
vulnerability := client.Vulnerability(nil)
fmt.Println(vulnerability.GetName()) // "vulnerability"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | The time this scan result was stored. |
| `has_vulnerabilities` | `bool` | No | Do the results contain any known vulnerabilities? |
| `identifier` | `string` | Yes |  |
| `max_severity` | `string` | No |  |
| `num_vulnerabilities` | `int` | No |  |
| `package` | `map[string]any` | Yes |  |
| `scan_id` | `int` | Yes | Deprecated (23-05-15): Please use 'identifier' instead. |
| `scans` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Vulnerability(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Vulnerability(nil).Load(map[string]any{"id": "vulnerability_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VulnerabilityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VulnerabilityPolicyEntity

```go
vulnerabilityPolicy := client.VulnerabilityPolicy(nil)
fmt.Println(vulnerabilityPolicy.GetName()) // "vulnerability_policy"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VulnerabilityPolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEntity

```go
webhook := client.Webhook(nil)
fmt.Println(webhook.GetName()) // "webhook"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Webhook(nil).Remove(map[string]any{"identifier": "identifier", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## X509EcdsaEntity

```go
x509Ecdsa := client.X509Ecdsa(nil)
fmt.Println(x509Ecdsa.GetName()) // "x509_ecdsa"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `X509EcdsaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## X509RsaEntity

```go
x509Rsa := client.X509Rsa(nil)
fmt.Println(x509Rsa.GetName()) // "x509_rsa"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `X509RsaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewCloudsmithSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

