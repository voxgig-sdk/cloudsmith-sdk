# Cloudsmith Golang SDK



The Golang SDK for the Cloudsmith API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Abort(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cloudsmith-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cloudsmith-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cloudsmith-sdk/go=../cloudsmith-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "os"
    sdk "github.com/voxgig-sdk/cloudsmith-sdk/go"
)

func main() {
    client := sdk.NewCloudsmithSDK(map[string]any{
        "apikey": os.Getenv("CLOUDSMITH_APIKEY"),
    })

    _ = client
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
abort, err := client.Abort(nil).Load(nil, nil)
if err != nil {
    // handle err
    return
}
_ = abort
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

abort, err := client.Abort(nil).Load(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(abort) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCloudsmithSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCloudsmithSDK

```go
func NewCloudsmithSDK(options map[string]any) *CloudsmithSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudsmithSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudsmithSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Abort` | `(data map[string]any) CloudsmithEntity` | Create an Abort entity instance. |
| `Alpine` | `(data map[string]any) CloudsmithEntity` | Create an Alpine entity instance. |
| `AuditLog` | `(data map[string]any) CloudsmithEntity` | Create an AuditLog entity instance. |
| `Basic` | `(data map[string]any) CloudsmithEntity` | Create a Basic entity instance. |
| `Cargo` | `(data map[string]any) CloudsmithEntity` | Create a Cargo entity instance. |
| `Cocoapod` | `(data map[string]any) CloudsmithEntity` | Create a Cocoapod entity instance. |
| `Complete` | `(data map[string]any) CloudsmithEntity` | Create a Complete entity instance. |
| `Composer` | `(data map[string]any) CloudsmithEntity` | Create a Composer entity instance. |
| `Conan` | `(data map[string]any) CloudsmithEntity` | Create a Conan entity instance. |
| `Conda` | `(data map[string]any) CloudsmithEntity` | Create a Conda entity instance. |
| `Copy` | `(data map[string]any) CloudsmithEntity` | Create a Copy entity instance. |
| `Cran` | `(data map[string]any) CloudsmithEntity` | Create a Cran entity instance. |
| `Dart` | `(data map[string]any) CloudsmithEntity` | Create a Dart entity instance. |
| `Deb` | `(data map[string]any) CloudsmithEntity` | Create a Deb entity instance. |
| `DenyPolicy` | `(data map[string]any) CloudsmithEntity` | Create a DenyPolicy entity instance. |
| `Dependency` | `(data map[string]any) CloudsmithEntity` | Create a Dependency entity instance. |
| `Disable` | `(data map[string]any) CloudsmithEntity` | Create a Disable entity instance. |
| `DistributionFull` | `(data map[string]any) CloudsmithEntity` | Create a DistributionFull entity instance. |
| `Distro` | `(data map[string]any) CloudsmithEntity` | Create a Distro entity instance. |
| `Docker` | `(data map[string]any) CloudsmithEntity` | Create a Docker entity instance. |
| `DynamicMapping` | `(data map[string]any) CloudsmithEntity` | Create a DynamicMapping entity instance. |
| `Ecdsa` | `(data map[string]any) CloudsmithEntity` | Create an Ecdsa entity instance. |
| `Enable` | `(data map[string]any) CloudsmithEntity` | Create an Enable entity instance. |
| `Entitlement` | `(data map[string]any) CloudsmithEntity` | Create an Entitlement entity instance. |
| `Evaluation` | `(data map[string]any) CloudsmithEntity` | Create an Evaluation entity instance. |
| `File` | `(data map[string]any) CloudsmithEntity` | Create a File entity instance. |
| `Format` | `(data map[string]any) CloudsmithEntity` | Create a Format entity instance. |
| `Geoip` | `(data map[string]any) CloudsmithEntity` | Create a Geoip entity instance. |
| `Gon` | `(data map[string]any) CloudsmithEntity` | Create a Gon entity instance. |
| `Gon2` | `(data map[string]any) CloudsmithEntity` | Create a Gon2 entity instance. |
| `Gon3` | `(data map[string]any) CloudsmithEntity` | Create a Gon3 entity instance. |
| `Gon4` | `(data map[string]any) CloudsmithEntity` | Create a Gon4 entity instance. |
| `Gon5` | `(data map[string]any) CloudsmithEntity` | Create a Gon5 entity instance. |
| `Gon6` | `(data map[string]any) CloudsmithEntity` | Create a Gon6 entity instance. |
| `Gon7` | `(data map[string]any) CloudsmithEntity` | Create a Gon7 entity instance. |
| `Gon8` | `(data map[string]any) CloudsmithEntity` | Create a Gon8 entity instance. |
| `Gon9` | `(data map[string]any) CloudsmithEntity` | Create a Gon9 entity instance. |
| `Gpg` | `(data map[string]any) CloudsmithEntity` | Create a Gpg entity instance. |
| `Group` | `(data map[string]any) CloudsmithEntity` | Create a Group entity instance. |
| `Helm` | `(data map[string]any) CloudsmithEntity` | Create a Helm entity instance. |
| `Hex` | `(data map[string]any) CloudsmithEntity` | Create a Hex entity instance. |
| `History` | `(data map[string]any) CloudsmithEntity` | Create a History entity instance. |
| `Huggingface` | `(data map[string]any) CloudsmithEntity` | Create a Huggingface entity instance. |
| `Info` | `(data map[string]any) CloudsmithEntity` | Create an Info entity instance. |
| `Invite` | `(data map[string]any) CloudsmithEntity` | Create an Invite entity instance. |
| `LicensePolicy` | `(data map[string]any) CloudsmithEntity` | Create a LicensePolicy entity instance. |
| `Limit` | `(data map[string]any) CloudsmithEntity` | Create a Limit entity instance. |
| `Luarock` | `(data map[string]any) CloudsmithEntity` | Create a Luarock entity instance. |
| `Maven` | `(data map[string]any) CloudsmithEntity` | Create a Maven entity instance. |
| `Member` | `(data map[string]any) CloudsmithEntity` | Create a Member entity instance. |
| `Move` | `(data map[string]any) CloudsmithEntity` | Create a Move entity instance. |
| `Namespace` | `(data map[string]any) CloudsmithEntity` | Create a Namespace entity instance. |
| `NamespaceAuditLog` | `(data map[string]any) CloudsmithEntity` | Create a NamespaceAuditLog entity instance. |
| `Npm` | `(data map[string]any) CloudsmithEntity` | Create a Npm entity instance. |
| `Nuget` | `(data map[string]any) CloudsmithEntity` | Create a Nuget entity instance. |
| `OpenidConnect` | `(data map[string]any) CloudsmithEntity` | Create an OpenidConnect entity instance. |
| `Org` | `(data map[string]any) CloudsmithEntity` | Create an Org entity instance. |
| `OrganizationGroupSync` | `(data map[string]any) CloudsmithEntity` | Create an OrganizationGroupSync entity instance. |
| `OrganizationGroupSyncStatus` | `(data map[string]any) CloudsmithEntity` | Create an OrganizationGroupSyncStatus entity instance. |
| `OrganizationInvite` | `(data map[string]any) CloudsmithEntity` | Create an OrganizationInvite entity instance. |
| `OrganizationInviteExtend` | `(data map[string]any) CloudsmithEntity` | Create an OrganizationInviteExtend entity instance. |
| `OrganizationMembership` | `(data map[string]any) CloudsmithEntity` | Create an OrganizationMembership entity instance. |
| `OrganizationMembershipRoleUpdate` | `(data map[string]any) CloudsmithEntity` | Create an OrganizationMembershipRoleUpdate entity instance. |
| `OrganizationMembershipVisibilityUpdate` | `(data map[string]any) CloudsmithEntity` | Create an OrganizationMembershipVisibilityUpdate entity instance. |
| `OrganizationPackageLicensePolicy` | `(data map[string]any) CloudsmithEntity` | Create an OrganizationPackageLicensePolicy entity instance. |
| `OrganizationPackageVulnerabilityPolicy` | `(data map[string]any) CloudsmithEntity` | Create an OrganizationPackageVulnerabilityPolicy entity instance. |
| `OrganizationSamlAuth` | `(data map[string]any) CloudsmithEntity` | Create an OrganizationSamlAuth entity instance. |
| `OrganizationTeam` | `(data map[string]any) CloudsmithEntity` | Create an OrganizationTeam entity instance. |
| `OrganizationTeamMember` | `(data map[string]any) CloudsmithEntity` | Create an OrganizationTeamMember entity instance. |
| `Oss` | `(data map[string]any) CloudsmithEntity` | Create an Oss entity instance. |
| `P2n` | `(data map[string]any) CloudsmithEntity` | Create a P2n entity instance. |
| `P2n2` | `(data map[string]any) CloudsmithEntity` | Create a P2n2 entity instance. |
| `Package` | `(data map[string]any) CloudsmithEntity` | Create a Package entity instance. |
| `PackageDenyPolicy` | `(data map[string]any) CloudsmithEntity` | Create a PackageDenyPolicy entity instance. |
| `PackageFilePartsUpload` | `(data map[string]any) CloudsmithEntity` | Create a PackageFilePartsUpload entity instance. |
| `PackageFileUpload` | `(data map[string]any) CloudsmithEntity` | Create a PackageFileUpload entity instance. |
| `PackageLicensePolicyEvaluation` | `(data map[string]any) CloudsmithEntity` | Create a PackageLicensePolicyEvaluation entity instance. |
| `PackageVersionBadge` | `(data map[string]any) CloudsmithEntity` | Create a PackageVersionBadge entity instance. |
| `PackageVulnerabilityPolicyEvaluation` | `(data map[string]any) CloudsmithEntity` | Create a PackageVulnerabilityPolicyEvaluation entity instance. |
| `Privilege` | `(data map[string]any) CloudsmithEntity` | Create a Privilege entity instance. |
| `Profile` | `(data map[string]any) CloudsmithEntity` | Create a Profile entity instance. |
| `ProviderSetting` | `(data map[string]any) CloudsmithEntity` | Create a ProviderSetting entity instance. |
| `ProviderSettingsWrite` | `(data map[string]any) CloudsmithEntity` | Create a ProviderSettingsWrite entity instance. |
| `Python` | `(data map[string]any) CloudsmithEntity` | Create a Python entity instance. |
| `Quarantine` | `(data map[string]any) CloudsmithEntity` | Create a Quarantine entity instance. |
| `Quota` | `(data map[string]any) CloudsmithEntity` | Create a Quota entity instance. |
| `Raw` | `(data map[string]any) CloudsmithEntity` | Create a Raw entity instance. |
| `Refresh` | `(data map[string]any) CloudsmithEntity` | Create a Refresh entity instance. |
| `Regenerate` | `(data map[string]any) CloudsmithEntity` | Create a Regenerate entity instance. |
| `Repo` | `(data map[string]any) CloudsmithEntity` | Create a Repo entity instance. |
| `RepositoryAuditLog` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryAuditLog entity instance. |
| `RepositoryEcdsaKey` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryEcdsaKey entity instance. |
| `RepositoryGeoIpRule` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryGeoIpRule entity instance. |
| `RepositoryGeoIpStatus` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryGeoIpStatus entity instance. |
| `RepositoryGeoIpTestAddress` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryGeoIpTestAddress entity instance. |
| `RepositoryGpgKey` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryGpgKey entity instance. |
| `RepositoryPrivilegeInput` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryPrivilegeInput entity instance. |
| `RepositoryRetentionRule` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryRetentionRule entity instance. |
| `RepositoryRsaKey` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryRsaKey entity instance. |
| `RepositoryToken` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryToken entity instance. |
| `RepositoryTokenRefresh` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryTokenRefresh entity instance. |
| `RepositoryTokenSync` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryTokenSync entity instance. |
| `RepositoryWebhook` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryWebhook entity instance. |
| `RepositoryX509EcdsaCertificate` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryX509EcdsaCertificate entity instance. |
| `RepositoryX509RsaCertificate` | `(data map[string]any) CloudsmithEntity` | Create a RepositoryX509RsaCertificate entity instance. |
| `Reset` | `(data map[string]any) CloudsmithEntity` | Create a Reset entity instance. |
| `ResourcesRateCheck` | `(data map[string]any) CloudsmithEntity` | Create a ResourcesRateCheck entity instance. |
| `Resync` | `(data map[string]any) CloudsmithEntity` | Create a Resync entity instance. |
| `Retention` | `(data map[string]any) CloudsmithEntity` | Create a Retention entity instance. |
| `Rpm` | `(data map[string]any) CloudsmithEntity` | Create a Rpm entity instance. |
| `Rsa` | `(data map[string]any) CloudsmithEntity` | Create a Rsa entity instance. |
| `Ruby` | `(data map[string]any) CloudsmithEntity` | Create a Ruby entity instance. |
| `SamlGroupSync` | `(data map[string]any) CloudsmithEntity` | Create a SamlGroupSync entity instance. |
| `Scan` | `(data map[string]any) CloudsmithEntity` | Create a Scan entity instance. |
| `Self` | `(data map[string]any) CloudsmithEntity` | Create a Self entity instance. |
| `Service` | `(data map[string]any) CloudsmithEntity` | Create a Service entity instance. |
| `Status` | `(data map[string]any) CloudsmithEntity` | Create a Status entity instance. |
| `StatusBasic` | `(data map[string]any) CloudsmithEntity` | Create a StatusBasic entity instance. |
| `StorageRegion` | `(data map[string]any) CloudsmithEntity` | Create a StorageRegion entity instance. |
| `Swift` | `(data map[string]any) CloudsmithEntity` | Create a Swift entity instance. |
| `Sync` | `(data map[string]any) CloudsmithEntity` | Create a Sync entity instance. |
| `Tag` | `(data map[string]any) CloudsmithEntity` | Create a Tag entity instance. |
| `Team` | `(data map[string]any) CloudsmithEntity` | Create a Team entity instance. |
| `Terraform` | `(data map[string]any) CloudsmithEntity` | Create a Terraform entity instance. |
| `Test` | `(data map[string]any) CloudsmithEntity` | Create a Test entity instance. |
| `Token` | `(data map[string]any) CloudsmithEntity` | Create a Token entity instance. |
| `TransferRegion` | `(data map[string]any) CloudsmithEntity` | Create a TransferRegion entity instance. |
| `User` | `(data map[string]any) CloudsmithEntity` | Create an User entity instance. |
| `UserAuthToken` | `(data map[string]any) CloudsmithEntity` | Create an UserAuthToken entity instance. |
| `UserAuthenticationToken` | `(data map[string]any) CloudsmithEntity` | Create an UserAuthenticationToken entity instance. |
| `UserBrief` | `(data map[string]any) CloudsmithEntity` | Create an UserBrief entity instance. |
| `UserProfile` | `(data map[string]any) CloudsmithEntity` | Create an UserProfile entity instance. |
| `Vagrant` | `(data map[string]any) CloudsmithEntity` | Create a Vagrant entity instance. |
| `Validate` | `(data map[string]any) CloudsmithEntity` | Create a Validate entity instance. |
| `Version` | `(data map[string]any) CloudsmithEntity` | Create a Version entity instance. |
| `Vulnerability` | `(data map[string]any) CloudsmithEntity` | Create a Vulnerability entity instance. |
| `VulnerabilityPolicy` | `(data map[string]any) CloudsmithEntity` | Create a VulnerabilityPolicy entity instance. |
| `Webhook` | `(data map[string]any) CloudsmithEntity` | Create a Webhook entity instance. |
| `X509Ecdsa` | `(data map[string]any) CloudsmithEntity` | Create a X509Ecdsa entity instance. |
| `X509Rsa` | `(data map[string]any) CloudsmithEntity` | Create a X509Rsa entity instance. |

### Entity interface (CloudsmithEntity)

All entities implement the `CloudsmithEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    abort, err := client.Abort(nil).Load(nil, nil)
    if err != nil { /* handle */ }
    // abort is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

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
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

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
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

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
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

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
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/cran/`

#### Dart

| Field | Description |
| --- | --- |
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/dart/`

#### Deb

| Field | Description |
| --- | --- |
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"component"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"distro_version"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"gpg_key_inline"` |  |
| `"gpg_key_url"` |  |
| `"gpg_verification"` |  |
| `"include_source"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_distribution"` |  |
| `"upstream_url"` |  |
| `"verification_status"` |  |
| `"verify_ssl"` |  |

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
| `"format"` |  |
| `"format_url"` |  |
| `"name"` |  |
| `"self_url"` |  |
| `"slug"` |  |
| `"variant"` |  |
| `"version"` |  |

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
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/docker/`

#### DynamicMapping

| Field | Description |
| --- | --- |
| `"claim_value"` |  |
| `"service_account"` |  |

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
| `"token"` |  |

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
| `"description"` |  |
| `"distribution"` |  |
| `"extension"` |  |
| `"name"` |  |
| `"premium"` |  |
| `"premium_plan_id"` |  |
| `"premium_plan_name"` |  |
| `"slug"` |  |
| `"support"` |  |

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
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

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
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

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
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

Operations: Update.

API path: `/repos/{owner}/{identifier}/upstream/go/{slug_perm}/`

#### Gon9

| Field | Description |
| --- | --- |
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

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
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/helm/`

#### Hex

| Field | Description |
| --- | --- |
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

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
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

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
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"gpg_key_inline"` |  |
| `"gpg_key_url"` |  |
| `"gpg_verification"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verification_status"` |  |
| `"verify_ssl"` |  |

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
| `"name"` |  |
| `"slug"` |  |
| `"slug_perm"` |  |
| `"type_name"` |  |

Operations: List, Load.

API path: `/namespaces/`

#### NamespaceAuditLog

| Field | Description |
| --- | --- |
| `"actor"` |  |
| `"actor_ip_address"` |  |
| `"actor_kind"` |  |
| `"actor_location"` |  |
| `"actor_slug_perm"` |  |
| `"actor_url"` |  |
| `"context"` |  |
| `"event"` |  |
| `"event_at"` |  |
| `"object"` |  |
| `"object_kind"` |  |
| `"object_slug_perm"` |  |
| `"target"` |  |
| `"target_kind"` |  |
| `"target_slug_perm"` |  |
| `"uuid"` |  |

Operations: Load.

API path: `/audit-log/{owner}/`

#### Npm

| Field | Description |
| --- | --- |
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/npm/`

#### Nuget

| Field | Description |
| --- | --- |
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

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
| `"country"` |  |
| `"created_at"` |  |
| `"event_at"` |  |
| `"location"` |  |
| `"name"` |  |
| `"package"` |  |
| `"policy"` |  |
| `"reason"` |  |
| `"slug"` |  |
| `"slug_perm"` |  |
| `"tagline"` |  |
| `"vulnerability_scan_result"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/orgs/{org}/members/{member}/refresh/`

#### OrganizationGroupSync

| Field | Description |
| --- | --- |
| `"idp_key"` |  |
| `"idp_value"` |  |
| `"role"` |  |
| `"slug_perm"` |  |
| `"team"` |  |

Operations: Create, List.

API path: `/orgs/{org}/saml-group-sync/`

#### OrganizationGroupSyncStatus

| Field | Description |
| --- | --- |
| `"saml_group_sync_status"` |  |

Operations: Load.

API path: `/orgs/{org}/saml-group-sync/status/`

#### OrganizationInvite

| Field | Description |
| --- | --- |
| `"email"` |  |
| `"expires_at"` |  |
| `"inviter"` |  |
| `"inviter_url"` |  |
| `"org"` |  |
| `"role"` |  |
| `"slug_perm"` |  |
| `"team"` |  |
| `"user"` |  |
| `"user_url"` |  |

Operations: Create, List, Update.

API path: `/orgs/{org}/invites/`

#### OrganizationInviteExtend

| Field | Description |
| --- | --- |
| `"email"` |  |
| `"expires_at"` |  |
| `"inviter"` |  |
| `"inviter_url"` |  |
| `"org"` |  |
| `"role"` |  |
| `"slug_perm"` |  |
| `"team"` |  |
| `"user"` |  |
| `"user_url"` |  |

Operations: Create.

API path: `/orgs/{org}/invites/{slug_perm}/extend/`

#### OrganizationMembership

| Field | Description |
| --- | --- |
| `"email"` |  |
| `"has_two_factor"` |  |
| `"is_active"` |  |
| `"joined_at"` |  |
| `"last_login_at"` |  |
| `"last_login_method"` |  |
| `"role"` |  |
| `"user"` |  |
| `"user_id"` |  |
| `"user_name"` |  |
| `"user_url"` |  |
| `"visibility"` |  |

Operations: List, Load, Update.

API path: `/orgs/{org}/members/`

#### OrganizationMembershipRoleUpdate

| Field | Description |
| --- | --- |
| `"email"` |  |
| `"has_two_factor"` |  |
| `"joined_at"` |  |
| `"last_login_at"` |  |
| `"last_login_method"` |  |
| `"role"` |  |
| `"user"` |  |
| `"user_id"` |  |
| `"user_name"` |  |
| `"user_url"` |  |
| `"visibility"` |  |

Operations: Update.

API path: `/orgs/{org}/members/{member}/update-role/`

#### OrganizationMembershipVisibilityUpdate

| Field | Description |
| --- | --- |
| `"email"` |  |
| `"has_two_factor"` |  |
| `"joined_at"` |  |
| `"last_login_at"` |  |
| `"last_login_method"` |  |
| `"role"` |  |
| `"user"` |  |
| `"user_id"` |  |
| `"user_name"` |  |
| `"user_url"` |  |
| `"visibility"` |  |

Operations: Update.

API path: `/orgs/{org}/members/{member}/update-visibility/`

#### OrganizationPackageLicensePolicy

| Field | Description |
| --- | --- |
| `"allow_unknown_license"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"name"` |  |
| `"on_violation_quarantine"` |  |
| `"package_query_string"` |  |
| `"slug_perm"` |  |
| `"spdx_identifier"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/orgs/{org}/license-policy/`

#### OrganizationPackageVulnerabilityPolicy

| Field | Description |
| --- | --- |
| `"allow_unknown_severity"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"min_severity"` |  |
| `"name"` |  |
| `"on_violation_quarantine"` |  |
| `"package_query_string"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/orgs/{org}/vulnerability-policy/`

#### OrganizationSamlAuth

| Field | Description |
| --- | --- |
| `"saml_auth_enabled"` |  |
| `"saml_auth_enforced"` |  |
| `"saml_metadata_inline"` |  |
| `"saml_metadata_url"` |  |

Operations: Load, Update.

API path: `/orgs/{org}/saml-authentication`

#### OrganizationTeam

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"name"` |  |
| `"slug"` |  |
| `"slug_perm"` |  |
| `"visibility"` |  |

Operations: Create, List, Load, Update.

API path: `/orgs/{org}/teams/`

#### OrganizationTeamMember

| Field | Description |
| --- | --- |
| `"role"` |  |
| `"user"` |  |

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
| `"architecture"` |  |
| `"backend_kind"` |  |
| `"cdn_url"` |  |
| `"checksum_md5"` |  |
| `"checksum_sha1"` |  |
| `"checksum_sha256"` |  |
| `"checksum_sha512"` |  |
| `"count"` |  |
| `"dep_type"` |  |
| `"dependencies_checksum_md5"` |  |
| `"dependencies_url"` |  |
| `"description"` |  |
| `"display_name"` |  |
| `"distro"` |  |
| `"distro_version"` |  |
| `"download"` |  |
| `"epoch"` |  |
| `"extension"` |  |
| `"file"` |  |
| `"filename"` |  |
| `"format"` |  |
| `"format_url"` |  |
| `"freeable_storage"` |  |
| `"fully_qualified_name"` |  |
| `"identifier"` |  |
| `"identifier_perm"` |  |
| `"indexed"` |  |
| `"is_cancellable"` |  |
| `"is_copyable"` |  |
| `"is_deleteable"` |  |
| `"is_downloadable"` |  |
| `"is_moveable"` |  |
| `"is_quarantinable"` |  |
| `"is_quarantined"` |  |
| `"is_resyncable"` |  |
| `"is_security_scannable"` |  |
| `"is_sync_awaiting"` |  |
| `"is_sync_completed"` |  |
| `"is_sync_failed"` |  |
| `"is_sync_in_flight"` |  |
| `"is_sync_in_progress"` |  |
| `"last_push"` |  |
| `"license"` |  |
| `"name"` |  |
| `"namespace"` |  |
| `"namespace_url"` |  |
| `"num_download"` |  |
| `"num_file"` |  |
| `"operator"` |  |
| `"origin_repository"` |  |
| `"origin_repository_url"` |  |
| `"package"` |  |
| `"package_type"` |  |
| `"policy_violated"` |  |
| `"release"` |  |
| `"repository"` |  |
| `"repository_url"` |  |
| `"security_scan_completed_at"` |  |
| `"security_scan_started_at"` |  |
| `"security_scan_status"` |  |
| `"security_scan_status_updated_at"` |  |
| `"self_html_url"` |  |
| `"self_url"` |  |
| `"signature_url"` |  |
| `"size"` |  |
| `"slug"` |  |
| `"slug_perm"` |  |
| `"stage"` |  |
| `"stage_str"` |  |
| `"stage_updated_at"` |  |
| `"status"` |  |
| `"status_reason"` |  |
| `"status_str"` |  |
| `"status_updated_at"` |  |
| `"status_url"` |  |
| `"subtype"` |  |
| `"summary"` |  |
| `"sync_finished_at"` |  |
| `"sync_progress"` |  |
| `"tag"` |  |
| `"tags_immutable"` |  |
| `"type_display"` |  |
| `"uploaded_at"` |  |
| `"uploader"` |  |
| `"uploader_url"` |  |
| `"version"` |  |
| `"version_orig"` |  |
| `"vulnerability_scan_results_url"` |  |

Operations: Create, List, Load, Remove.

API path: `/packages/{owner}/{repo}/{identifier}/copy/`

#### PackageDenyPolicy

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"enabled"` |  |
| `"name"` |  |
| `"package_query_string"` |  |
| `"slug_perm"` |  |
| `"status"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/orgs/{org}/deny-policy/`

#### PackageFilePartsUpload

| Field | Description |
| --- | --- |
| `"identifier"` |  |
| `"upload_querystring"` |  |
| `"upload_url"` |  |

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
| `"created_at"` |  |
| `"evaluation_count"` |  |
| `"policy"` |  |
| `"slug_perm"` |  |
| `"status"` |  |
| `"updated_at"` |  |
| `"violation_count"` |  |

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
| `"created_at"` |  |
| `"evaluation_count"` |  |
| `"policy"` |  |
| `"slug_perm"` |  |
| `"status"` |  |
| `"updated_at"` |  |
| `"violation_count"` |  |

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
| `"claim"` |  |
| `"enabled"` |  |
| `"mapping_claim"` |  |
| `"name"` |  |
| `"provider_url"` |  |
| `"service_account"` |  |
| `"slug"` |  |
| `"slug_perm"` |  |

Operations: List, Load.

API path: `/orgs/{org}/openid-connect/`

#### ProviderSettingsWrite

| Field | Description |
| --- | --- |
| `"claim"` |  |
| `"dynamic_mapping"` |  |
| `"enabled"` |  |
| `"mapping_claim"` |  |
| `"name"` |  |
| `"provider_url"` |  |
| `"service_account"` |  |
| `"slug"` |  |
| `"slug_perm"` |  |

Operations: Create, Patch, Update.

API path: `/orgs/{org}/openid-connect/`

#### Python

| Field | Description |
| --- | --- |
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

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
| `"history"` |  |
| `"usage"` |  |

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
| `"cdn_url"` |  |
| `"content_kind"` |  |
| `"contextual_auth_realm"` |  |
| `"copy_own"` |  |
| `"copy_package"` |  |
| `"cosign_signing_enabled"` |  |
| `"created_at"` |  |
| `"default_privilege"` |  |
| `"delete_own"` |  |
| `"delete_package"` |  |
| `"deleted_at"` |  |
| `"description"` |  |
| `"distribute"` |  |
| `"docker_refresh_tokens_enabled"` |  |
| `"ecdsa_key"` |  |
| `"enforce_eula"` |  |
| `"gpg_key"` |  |
| `"index_file"` |  |
| `"is_open_source"` |  |
| `"is_private"` |  |
| `"is_public"` |  |
| `"manage_entitlements_privilege"` |  |
| `"move_own"` |  |
| `"move_package"` |  |
| `"name"` |  |
| `"namespace"` |  |
| `"namespace_url"` |  |
| `"nuget_native_signing_enabled"` |  |
| `"num_download"` |  |
| `"num_policy_violated_package"` |  |
| `"num_quarantined_package"` |  |
| `"open_source_license"` |  |
| `"open_source_project_url"` |  |
| `"package_count"` |  |
| `"package_group_count"` |  |
| `"proxy_npmj"` |  |
| `"proxy_pypi"` |  |
| `"raw_package_index_enabled"` |  |
| `"raw_package_index_signatures_enabled"` |  |
| `"replace_package"` |  |
| `"replace_packages_by_default"` |  |
| `"repository_type"` |  |
| `"repository_type_str"` |  |
| `"resync_own"` |  |
| `"resync_package"` |  |
| `"scan_own"` |  |
| `"scan_package"` |  |
| `"self_html_url"` |  |
| `"self_url"` |  |
| `"show_setup_all"` |  |
| `"size"` |  |
| `"size_str"` |  |
| `"slug"` |  |
| `"slug_perm"` |  |
| `"storage_region"` |  |
| `"strict_npm_validation"` |  |
| `"tag_pre_releases_as_latest"` |  |
| `"use_debian_label"` |  |
| `"use_default_cargo_upstream"` |  |
| `"use_entitlements_privilege"` |  |
| `"use_noarch_package"` |  |
| `"use_source_package"` |  |
| `"use_vulnerability_scanning"` |  |
| `"user_entitlements_enabled"` |  |
| `"view_statistic"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/repos/{owner}/{identifier}/geoip/disable/`

#### RepositoryAuditLog

| Field | Description |
| --- | --- |
| `"actor"` |  |
| `"actor_ip_address"` |  |
| `"actor_kind"` |  |
| `"actor_location"` |  |
| `"actor_slug_perm"` |  |
| `"actor_url"` |  |
| `"context"` |  |
| `"event"` |  |
| `"event_at"` |  |
| `"object"` |  |
| `"object_kind"` |  |
| `"object_slug_perm"` |  |
| `"uuid"` |  |

Operations: List.

API path: `/audit-log/{owner}/{repo}/`

#### RepositoryEcdsaKey

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"created_at"` |  |
| `"default"` |  |
| `"fingerprint"` |  |
| `"fingerprint_short"` |  |
| `"public_key"` |  |
| `"ssh_fingerprint"` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{identifier}/ecdsa/`

#### RepositoryGeoIpRule

| Field | Description |
| --- | --- |
| `"cidr"` |  |
| `"country_code"` |  |

Operations: Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/geoip`

#### RepositoryGeoIpStatus

| Field | Description |
| --- | --- |
| `"geoip_enabled"` |  |

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
| `"active"` |  |
| `"comment"` |  |
| `"created_at"` |  |
| `"default"` |  |
| `"fingerprint"` |  |
| `"fingerprint_short"` |  |
| `"public_key"` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{identifier}/gpg/`

#### RepositoryPrivilegeInput

| Field | Description |
| --- | --- |
| `"privilege"` |  |
| `"service"` |  |
| `"team"` |  |
| `"user"` |  |

Operations: List.

API path: `/repos/{owner}/{identifier}/privileges`

#### RepositoryRetentionRule

| Field | Description |
| --- | --- |
| `"retention_count_limit"` |  |
| `"retention_days_limit"` |  |
| `"retention_enabled"` |  |
| `"retention_group_by_format"` |  |
| `"retention_group_by_name"` |  |
| `"retention_group_by_package_type"` |  |
| `"retention_package_query_string"` |  |
| `"retention_size_limit"` |  |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/retention/`

#### RepositoryRsaKey

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"created_at"` |  |
| `"default"` |  |
| `"fingerprint"` |  |
| `"fingerprint_short"` |  |
| `"public_key"` |  |
| `"ssh_fingerprint"` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{identifier}/rsa/`

#### RepositoryToken

| Field | Description |
| --- | --- |
| `"client"` |  |
| `"created_at"` |  |
| `"created_by"` |  |
| `"created_by_url"` |  |
| `"default"` |  |
| `"disable_url"` |  |
| `"download"` |  |
| `"enable_url"` |  |
| `"eula_accepted"` |  |
| `"eula_accepted_at"` |  |
| `"eula_accepted_from"` |  |
| `"eula_required"` |  |
| `"has_limit"` |  |
| `"identifier"` |  |
| `"is_active"` |  |
| `"is_limited"` |  |
| `"limit_bandwidth"` |  |
| `"limit_bandwidth_unit"` |  |
| `"limit_date_range_from"` |  |
| `"limit_date_range_to"` |  |
| `"limit_num_client"` |  |
| `"limit_num_download"` |  |
| `"limit_package_query"` |  |
| `"limit_path_query"` |  |
| `"metadata"` |  |
| `"name"` |  |
| `"refresh_url"` |  |
| `"reset_url"` |  |
| `"scheduled_reset_at"` |  |
| `"scheduled_reset_period"` |  |
| `"self_url"` |  |
| `"slug_perm"` |  |
| `"token"` |  |
| `"updated_at"` |  |
| `"updated_by"` |  |
| `"updated_by_url"` |  |
| `"usage"` |  |
| `"user"` |  |
| `"user_url"` |  |

Operations: Create, List, Load, Update.

API path: `/entitlements/{owner}/{repo}/`

#### RepositoryTokenRefresh

| Field | Description |
| --- | --- |
| `"client"` |  |
| `"created_at"` |  |
| `"created_by"` |  |
| `"created_by_url"` |  |
| `"default"` |  |
| `"disable_url"` |  |
| `"download"` |  |
| `"enable_url"` |  |
| `"eula_accepted"` |  |
| `"eula_accepted_at"` |  |
| `"eula_accepted_from"` |  |
| `"eula_required"` |  |
| `"has_limit"` |  |
| `"identifier"` |  |
| `"is_active"` |  |
| `"is_limited"` |  |
| `"limit_bandwidth"` |  |
| `"limit_bandwidth_unit"` |  |
| `"limit_date_range_from"` |  |
| `"limit_date_range_to"` |  |
| `"limit_num_client"` |  |
| `"limit_num_download"` |  |
| `"limit_package_query"` |  |
| `"limit_path_query"` |  |
| `"metadata"` |  |
| `"name"` |  |
| `"refresh_url"` |  |
| `"reset_url"` |  |
| `"scheduled_reset_at"` |  |
| `"scheduled_reset_period"` |  |
| `"self_url"` |  |
| `"slug_perm"` |  |
| `"token"` |  |
| `"updated_at"` |  |
| `"updated_by"` |  |
| `"updated_by_url"` |  |
| `"usage"` |  |
| `"user"` |  |
| `"user_url"` |  |

Operations: Create.

API path: `/entitlements/{owner}/{repo}/{identifier}/refresh/`

#### RepositoryTokenSync

| Field | Description |
| --- | --- |
| `"token"` |  |

Operations: Create.

API path: `/entitlements/{owner}/{repo}/sync/`

#### RepositoryWebhook

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"created_by"` |  |
| `"created_by_url"` |  |
| `"disable_reason"` |  |
| `"disable_reason_str"` |  |
| `"event"` |  |
| `"identifier"` |  |
| `"is_active"` |  |
| `"is_last_response_bad"` |  |
| `"last_response_status"` |  |
| `"last_response_status_str"` |  |
| `"num_sent"` |  |
| `"package_query"` |  |
| `"request_body_format"` |  |
| `"request_body_format_str"` |  |
| `"request_body_template_format"` |  |
| `"request_body_template_format_str"` |  |
| `"request_content_type"` |  |
| `"secret_header"` |  |
| `"self_url"` |  |
| `"slug_perm"` |  |
| `"target_url"` |  |
| `"template"` |  |
| `"updated_at"` |  |
| `"updated_by"` |  |
| `"updated_by_url"` |  |
| `"verify_ssl"` |  |

Operations: Create, List, Update.

API path: `/webhooks/{owner}/{repo}/`

#### RepositoryX509EcdsaCertificate

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"certificate"` |  |
| `"certificate_chain"` |  |
| `"certificate_chain_fingerprint"` |  |
| `"certificate_chain_fingerprint_short"` |  |
| `"certificate_fingerprint"` |  |
| `"certificate_fingerprint_short"` |  |
| `"created_at"` |  |
| `"default"` |  |
| `"issuing_status"` |  |

Operations: Load.

API path: `/repos/{owner}/{identifier}/x509-ecdsa/`

#### RepositoryX509RsaCertificate

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"certificate"` |  |
| `"certificate_chain"` |  |
| `"certificate_chain_fingerprint"` |  |
| `"certificate_chain_fingerprint_short"` |  |
| `"certificate_fingerprint"` |  |
| `"certificate_fingerprint_short"` |  |
| `"created_at"` |  |
| `"default"` |  |
| `"issuing_status"` |  |

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
| `"resource"` |  |

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
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"distro_version"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"gpg_key_inline"` |  |
| `"gpg_key_url"` |  |
| `"gpg_verification"` |  |
| `"include_source"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verification_status"` |  |
| `"verify_ssl"` |  |

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
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

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
| `"created_at"` |  |
| `"created_by"` |  |
| `"created_by_url"` |  |
| `"description"` |  |
| `"key"` |  |
| `"key_expires_at"` |  |
| `"name"` |  |
| `"role"` |  |
| `"slug"` |  |
| `"team"` |  |

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
| `"detail"` |  |
| `"version"` |  |

Operations: Load.

API path: `/status/check/basic/`

#### StorageRegion

| Field | Description |
| --- | --- |
| `"label"` |  |
| `"slug"` |  |

Operations: List, Load.

API path: `/storage-regions/`

#### Swift

| Field | Description |
| --- | --- |
| `"auth_mode"` |  |
| `"auth_secret"` |  |
| `"auth_username"` |  |
| `"created_at"` |  |
| `"disable_reason"` |  |
| `"extra_header_1"` |  |
| `"extra_header_2"` |  |
| `"extra_value_1"` |  |
| `"extra_value_2"` |  |
| `"is_active"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"pending_validation"` |  |
| `"priority"` |  |
| `"slug_perm"` |  |
| `"updated_at"` |  |
| `"upstream_url"` |  |
| `"verify_ssl"` |  |

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
| `"created"` |  |
| `"key"` |  |
| `"slug_perm"` |  |

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
| `"created"` |  |
| `"key"` |  |
| `"slug_perm"` |  |

Operations: Create, Update.

API path: `/user/tokens/`

#### UserBrief

| Field | Description |
| --- | --- |
| `"authenticated"` |  |
| `"email"` |  |
| `"name"` |  |
| `"profile_url"` |  |
| `"self_url"` |  |
| `"slug"` |  |
| `"slug_perm"` |  |

Operations: Load.

API path: `/user/self/`

#### UserProfile

| Field | Description |
| --- | --- |
| `"company"` |  |
| `"first_name"` |  |
| `"job_title"` |  |
| `"joined_at"` |  |
| `"last_name"` |  |
| `"name"` |  |
| `"slug"` |  |
| `"slug_perm"` |  |
| `"tagline"` |  |
| `"url"` |  |

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
| `"created_at"` |  |
| `"has_vulnerability"` |  |
| `"identifier"` |  |
| `"max_severity"` |  |
| `"num_vulnerability"` |  |
| `"package"` |  |
| `"result"` |  |
| `"scan_id"` |  |
| `"target"` |  |
| `"type"` |  |

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

Create an instance: `abort := client.Abort(nil)`


### Alpine

Create an instance: `alpine := client.Alpine(nil)`


### AuditLog

Create an instance: `auditLog := client.AuditLog(nil)`


### Basic

Create an instance: `basic := client.Basic(nil)`


### Cargo

Create an instance: `cargo := client.Cargo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
cargo, err := client.Cargo(nil).Load(map[string]any{"id": "cargo_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cargo) // the loaded record
```

#### Example: List

```go
cargos, err := client.Cargo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cargos) // the array of records
```

#### Example: Create

```go
result, err := client.Cargo(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Cocoapod

Create an instance: `cocoapod := client.Cocoapod(nil)`


### Complete

Create an instance: `complete := client.Complete(nil)`


### Composer

Create an instance: `composer := client.Composer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
composer, err := client.Composer(nil).Load(map[string]any{"id": "composer_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(composer) // the loaded record
```

#### Example: List

```go
composers, err := client.Composer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(composers) // the array of records
```

#### Example: Create

```go
result, err := client.Composer(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Conan

Create an instance: `conan := client.Conan(nil)`


### Conda

Create an instance: `conda := client.Conda(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
conda, err := client.Conda(nil).Load(map[string]any{"id": "conda_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conda) // the loaded record
```

#### Example: List

```go
condas, err := client.Conda(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(condas) // the array of records
```

#### Example: Create

```go
result, err := client.Conda(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Copy

Create an instance: `copy := client.Copy(nil)`


### Cran

Create an instance: `cran := client.Cran(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
cran, err := client.Cran(nil).Load(map[string]any{"id": "cran_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cran) // the loaded record
```

#### Example: List

```go
crans, err := client.Cran(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(crans) // the array of records
```

#### Example: Create

```go
result, err := client.Cran(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Dart

Create an instance: `dart := client.Dart(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
dart, err := client.Dart(nil).Load(map[string]any{"id": "dart_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dart) // the loaded record
```

#### Example: List

```go
darts, err := client.Dart(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(darts) // the array of records
```

#### Example: Create

```go
result, err := client.Dart(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Deb

Create an instance: `deb := client.Deb(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `component` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `distro_version` | `[]any` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `gpg_key_inline` | `string` |  |
| `gpg_key_url` | `string` |  |
| `gpg_verification` | `string` |  |
| `include_source` | `bool` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_distribution` | `string` |  |
| `upstream_url` | `string` |  |
| `verification_status` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
deb, err := client.Deb(nil).Load(map[string]any{"id": "deb_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(deb) // the loaded record
```

#### Example: List

```go
debs, err := client.Deb(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(debs) // the array of records
```

#### Example: Create

```go
result, err := client.Deb(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DenyPolicy

Create an instance: `denyPolicy := client.DenyPolicy(nil)`


### Dependency

Create an instance: `dependency := client.Dependency(nil)`


### Disable

Create an instance: `disable := client.Disable(nil)`


### DistributionFull

Create an instance: `distributionFull := client.DistributionFull(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `format` | `string` |  |
| `format_url` | `string` |  |
| `name` | `string` |  |
| `self_url` | `string` |  |
| `slug` | `string` |  |
| `variant` | `string` |  |
| `version` | `[]any` |  |

#### Example: Load

```go
distributionFull, err := client.DistributionFull(nil).Load(map[string]any{"slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(distributionFull) // the loaded record
```

#### Example: List

```go
distributionFulls, err := client.DistributionFull(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(distributionFulls) // the array of records
```


### Distro

Create an instance: `distro := client.Distro(nil)`


### Docker

Create an instance: `docker := client.Docker(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
docker, err := client.Docker(nil).Load(map[string]any{"id": "docker_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(docker) // the loaded record
```

#### Example: List

```go
dockers, err := client.Docker(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dockers) // the array of records
```

#### Example: Create

```go
result, err := client.Docker(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DynamicMapping

Create an instance: `dynamicMapping := client.DynamicMapping(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claim_value` | `string` |  |
| `service_account` | `string` |  |

#### Example: Load

```go
dynamicMapping, err := client.DynamicMapping(nil).Load(map[string]any{"id": "dynamic_mapping_id", "openid_connect_id": "openid_connect_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dynamicMapping) // the loaded record
```

#### Example: List

```go
dynamicMappings, err := client.DynamicMapping(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dynamicMappings) // the array of records
```


### Ecdsa

Create an instance: `ecdsa := client.Ecdsa(nil)`


### Enable

Create an instance: `enable := client.Enable(nil)`


### Entitlement

Create an instance: `entitlement := client.Entitlement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `token` | `map[string]any` |  |

#### Example: Load

```go
entitlement, err := client.Entitlement(nil).Load(map[string]any{"id": "entitlement_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(entitlement) // the loaded record
```

#### Example: Create

```go
result, err := client.Entitlement(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
    "repo": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Evaluation

Create an instance: `evaluation := client.Evaluation(nil)`


### File

Create an instance: `file := client.File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.File(nil).Create(map[string]any{
    "owner": /* any */,
    "repo": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Format

Create an instance: `format := client.Format(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `distribution` | `[]any` |  |
| `extension` | `[]any` |  |
| `name` | `string` |  |
| `premium` | `bool` |  |
| `premium_plan_id` | `string` |  |
| `premium_plan_name` | `string` |  |
| `slug` | `string` |  |
| `support` | `map[string]any` |  |

#### Example: Load

```go
format, err := client.Format(nil).Load(map[string]any{"id": "format_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(format) // the loaded record
```

#### Example: List

```go
formats, err := client.Format(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(formats) // the array of records
```


### Geoip

Create an instance: `geoip := client.Geoip(nil)`


### Gon

Create an instance: `gon := client.Gon(nil)`


### Gon2

Create an instance: `gon2 := client.Gon2(nil)`


### Gon3

Create an instance: `gon3 := client.Gon3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: List

```go
gon3s, err := client.Gon3(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(gon3s) // the array of records
```


### Gon4

Create an instance: `gon4 := client.Gon4(nil)`


### Gon5

Create an instance: `gon5 := client.Gon5(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.Gon5(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Gon6

Create an instance: `gon6 := client.Gon6(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
gon6, err := client.Gon6(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner", "slug_perm": "slug_perm"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(gon6) // the loaded record
```


### Gon7

Create an instance: `gon7 := client.Gon7(nil)`


### Gon8

Create an instance: `gon8 := client.Gon8(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |


### Gon9

Create an instance: `gon9 := client.Gon9(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |


### Gpg

Create an instance: `gpg := client.Gpg(nil)`


### Group

Create an instance: `group := client.Group(nil)`


### Helm

Create an instance: `helm := client.Helm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
helm, err := client.Helm(nil).Load(map[string]any{"id": "helm_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(helm) // the loaded record
```

#### Example: List

```go
helms, err := client.Helm(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(helms) // the array of records
```

#### Example: Create

```go
result, err := client.Helm(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Hex

Create an instance: `hex := client.Hex(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
hex, err := client.Hex(nil).Load(map[string]any{"id": "hex_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(hex) // the loaded record
```

#### Example: List

```go
hexs, err := client.Hex(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(hexs) // the array of records
```

#### Example: Create

```go
result, err := client.Hex(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### History

Create an instance: `history := client.History(nil)`


### Huggingface

Create an instance: `huggingface := client.Huggingface(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
huggingface, err := client.Huggingface(nil).Load(map[string]any{"id": "huggingface_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(huggingface) // the loaded record
```

#### Example: List

```go
huggingfaces, err := client.Huggingface(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(huggingfaces) // the array of records
```

#### Example: Create

```go
result, err := client.Huggingface(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Info

Create an instance: `info := client.Info(nil)`


### Invite

Create an instance: `invite := client.Invite(nil)`


### LicensePolicy

Create an instance: `licensePolicy := client.LicensePolicy(nil)`


### Limit

Create an instance: `limit := client.Limit(nil)`


### Luarock

Create an instance: `luarock := client.Luarock(nil)`


### Maven

Create an instance: `maven := client.Maven(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verification_status` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
maven, err := client.Maven(nil).Load(map[string]any{"id": "maven_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(maven) // the loaded record
```

#### Example: List

```go
mavens, err := client.Maven(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(mavens) // the array of records
```

#### Example: Create

```go
result, err := client.Maven(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Member

Create an instance: `member := client.Member(nil)`


### Move

Create an instance: `move := client.Move(nil)`


### Namespace

Create an instance: `namespace := client.Namespace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `type_name` | `string` |  |

#### Example: Load

```go
namespace, err := client.Namespace(nil).Load(map[string]any{"id": "namespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(namespace) // the loaded record
```

#### Example: List

```go
namespaces, err := client.Namespace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(namespaces) // the array of records
```


### NamespaceAuditLog

Create an instance: `namespaceAuditLog := client.NamespaceAuditLog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `string` |  |
| `actor_ip_address` | `string` |  |
| `actor_kind` | `string` |  |
| `actor_location` | `map[string]any` |  |
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

```go
namespaceAuditLog, err := client.NamespaceAuditLog(nil).Load(map[string]any{"id": "namespace_audit_log_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(namespaceAuditLog) // the loaded record
```


### Npm

Create an instance: `npm := client.Npm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
npm, err := client.Npm(nil).Load(map[string]any{"id": "npm_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(npm) // the loaded record
```

#### Example: List

```go
npms, err := client.Npm(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(npms) // the array of records
```

#### Example: Create

```go
result, err := client.Npm(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Nuget

Create an instance: `nuget := client.Nuget(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
nuget, err := client.Nuget(nil).Load(map[string]any{"id": "nuget_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(nuget) // the loaded record
```

#### Example: List

```go
nugets, err := client.Nuget(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(nugets) // the array of records
```

#### Example: Create

```go
result, err := client.Nuget(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OpenidConnect

Create an instance: `openidConnect := client.OpenidConnect(nil)`


### Org

Create an instance: `org := client.Org(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `country` | `string` |  |
| `created_at` | `string` |  |
| `event_at` | `string` |  |
| `location` | `string` |  |
| `name` | `string` |  |
| `package` | `map[string]any` |  |
| `policy` | `map[string]any` |  |
| `reason` | `[]any` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `tagline` | `string` |  |
| `vulnerability_scan_result` | `map[string]any` |  |

#### Example: Load

```go
org, err := client.Org(nil).Load(map[string]any{"id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(org) // the loaded record
```

#### Example: List

```go
orgs, err := client.Org(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(orgs) // the array of records
```

#### Example: Create

```go
result, err := client.Org(nil).Create(map[string]any{
    "id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrganizationGroupSync

Create an instance: `organizationGroupSync := client.OrganizationGroupSync(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `idp_key` | `string` |  |
| `idp_value` | `string` |  |
| `role` | `string` |  |
| `slug_perm` | `string` |  |
| `team` | `string` |  |

#### Example: List

```go
organizationGroupSyncs, err := client.OrganizationGroupSync(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationGroupSyncs) // the array of records
```

#### Example: Create

```go
result, err := client.OrganizationGroupSync(nil).Create(map[string]any{
    "org_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrganizationGroupSyncStatus

Create an instance: `organizationGroupSyncStatus := client.OrganizationGroupSyncStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `saml_group_sync_status` | `bool` |  |

#### Example: Load

```go
organizationGroupSyncStatus, err := client.OrganizationGroupSyncStatus(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationGroupSyncStatus) // the loaded record
```


### OrganizationInvite

Create an instance: `organizationInvite := client.OrganizationInvite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `team` | `[]any` |  |
| `user` | `string` |  |
| `user_url` | `string` |  |

#### Example: List

```go
organizationInvites, err := client.OrganizationInvite(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationInvites) // the array of records
```

#### Example: Create

```go
result, err := client.OrganizationInvite(nil).Create(map[string]any{
    "org_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrganizationInviteExtend

Create an instance: `organizationInviteExtend := client.OrganizationInviteExtend(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `team` | `[]any` |  |
| `user` | `string` |  |
| `user_url` | `string` |  |

#### Example: Create

```go
result, err := client.OrganizationInviteExtend(nil).Create(map[string]any{
    "org_id": /* string */,
    "slug_perm": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrganizationMembership

Create an instance: `organizationMembership := client.OrganizationMembership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `has_two_factor` | `bool` |  |
| `is_active` | `bool` |  |
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

```go
organizationMembership, err := client.OrganizationMembership(nil).Load(map[string]any{"member": "member", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationMembership) // the loaded record
```

#### Example: List

```go
organizationMemberships, err := client.OrganizationMembership(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationMemberships) // the array of records
```


### OrganizationMembershipRoleUpdate

Create an instance: `organizationMembershipRoleUpdate := client.OrganizationMembershipRoleUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `has_two_factor` | `bool` |  |
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

Create an instance: `organizationMembershipVisibilityUpdate := client.OrganizationMembershipVisibilityUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `has_two_factor` | `bool` |  |
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

Create an instance: `organizationPackageLicensePolicy := client.OrganizationPackageLicensePolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_unknown_license` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `bool` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `spdx_identifier` | `[]any` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
organizationPackageLicensePolicy, err := client.OrganizationPackageLicensePolicy(nil).Load(map[string]any{"id": "organization_package_license_policy_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationPackageLicensePolicy) // the loaded record
```

#### Example: List

```go
organizationPackageLicensePolicys, err := client.OrganizationPackageLicensePolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationPackageLicensePolicys) // the array of records
```

#### Example: Create

```go
result, err := client.OrganizationPackageLicensePolicy(nil).Create(map[string]any{
    "org_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrganizationPackageVulnerabilityPolicy

Create an instance: `organizationPackageVulnerabilityPolicy := client.OrganizationPackageVulnerabilityPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_unknown_severity` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `min_severity` | `string` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `bool` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
organizationPackageVulnerabilityPolicy, err := client.OrganizationPackageVulnerabilityPolicy(nil).Load(map[string]any{"id": "organization_package_vulnerability_policy_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationPackageVulnerabilityPolicy) // the loaded record
```

#### Example: List

```go
organizationPackageVulnerabilityPolicys, err := client.OrganizationPackageVulnerabilityPolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationPackageVulnerabilityPolicys) // the array of records
```

#### Example: Create

```go
result, err := client.OrganizationPackageVulnerabilityPolicy(nil).Create(map[string]any{
    "org_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrganizationSamlAuth

Create an instance: `organizationSamlAuth := client.OrganizationSamlAuth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `saml_auth_enabled` | `bool` |  |
| `saml_auth_enforced` | `bool` |  |
| `saml_metadata_inline` | `string` |  |
| `saml_metadata_url` | `string` |  |

#### Example: Load

```go
organizationSamlAuth, err := client.OrganizationSamlAuth(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationSamlAuth) // the loaded record
```


### OrganizationTeam

Create an instance: `organizationTeam := client.OrganizationTeam(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `visibility` | `string` |  |

#### Example: Load

```go
organizationTeam, err := client.OrganizationTeam(nil).Load(map[string]any{"id": "organization_team_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationTeam) // the loaded record
```

#### Example: List

```go
organizationTeams, err := client.OrganizationTeam(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationTeams) // the array of records
```

#### Example: Create

```go
result, err := client.OrganizationTeam(nil).Create(map[string]any{
    "org_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrganizationTeamMember

Create an instance: `organizationTeamMember := client.OrganizationTeamMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `role` | `string` |  |
| `user` | `string` |  |

#### Example: List

```go
organizationTeamMembers, err := client.OrganizationTeamMember(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationTeamMembers) // the array of records
```

#### Example: Create

```go
result, err := client.OrganizationTeamMember(nil).Create(map[string]any{
    "org_id": /* string */,
    "team_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Oss

Create an instance: `oss := client.Oss(nil)`


### P2n

Create an instance: `p2n := client.P2n(nil)`


### P2n2

Create an instance: `p2n2 := client.P2n2(nil)`


### Package

Create an instance: `package_ := client.Package(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `[]any` |  |
| `backend_kind` | `int` |  |
| `cdn_url` | `string` |  |
| `checksum_md5` | `string` |  |
| `checksum_sha1` | `string` |  |
| `checksum_sha256` | `string` |  |
| `checksum_sha512` | `string` |  |
| `count` | `int` |  |
| `dep_type` | `string` |  |
| `dependencies_checksum_md5` | `string` |  |
| `dependencies_url` | `string` |  |
| `description` | `string` |  |
| `display_name` | `string` |  |
| `distro` | `map[string]any` |  |
| `distro_version` | `map[string]any` |  |
| `download` | `int` |  |
| `epoch` | `int` |  |
| `extension` | `string` |  |
| `file` | `[]any` |  |
| `filename` | `string` |  |
| `format` | `string` |  |
| `format_url` | `string` |  |
| `freeable_storage` | `int` |  |
| `fully_qualified_name` | `string` |  |
| `identifier` | `map[string]any` |  |
| `identifier_perm` | `string` |  |
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
| `last_push` | `string` |  |
| `license` | `string` |  |
| `name` | `string` |  |
| `namespace` | `string` |  |
| `namespace_url` | `string` |  |
| `num_download` | `int` |  |
| `num_file` | `int` |  |
| `operator` | `string` |  |
| `origin_repository` | `string` |  |
| `origin_repository_url` | `string` |  |
| `package` | `map[string]any` |  |
| `package_type` | `int` |  |
| `policy_violated` | `bool` |  |
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
| `size` | `int` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `stage` | `int` |  |
| `stage_str` | `string` |  |
| `stage_updated_at` | `string` |  |
| `status` | `int` |  |
| `status_reason` | `string` |  |
| `status_str` | `string` |  |
| `status_updated_at` | `string` |  |
| `status_url` | `string` |  |
| `subtype` | `string` |  |
| `summary` | `string` |  |
| `sync_finished_at` | `string` |  |
| `sync_progress` | `int` |  |
| `tag` | `map[string]any` |  |
| `tags_immutable` | `map[string]any` |  |
| `type_display` | `string` |  |
| `uploaded_at` | `string` |  |
| `uploader` | `string` |  |
| `uploader_url` | `string` |  |
| `version` | `string` |  |
| `version_orig` | `string` |  |
| `vulnerability_scan_results_url` | `string` |  |

#### Example: Load

```go
package_, err := client.Package(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(package_) // the loaded record
```

#### Example: List

```go
package_s, err := client.Package(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(package_s) // the array of records
```

#### Example: Create

```go
result, err := client.Package(nil).Create(map[string]any{
    "owner": /* any */,
    "repo": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PackageDenyPolicy

Create an instance: `packageDenyPolicy := client.PackageDenyPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `enabled` | `bool` |  |
| `name` | `string` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
packageDenyPolicy, err := client.PackageDenyPolicy(nil).Load(map[string]any{"id": "package_deny_policy_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(packageDenyPolicy) // the loaded record
```

#### Example: List

```go
packageDenyPolicys, err := client.PackageDenyPolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(packageDenyPolicys) // the array of records
```

#### Example: Create

```go
result, err := client.PackageDenyPolicy(nil).Create(map[string]any{
    "org_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PackageFilePartsUpload

Create an instance: `packageFilePartsUpload := client.PackageFilePartsUpload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `identifier` | `string` |  |
| `upload_querystring` | `string` |  |
| `upload_url` | `string` |  |

#### Example: Load

```go
packageFilePartsUpload, err := client.PackageFilePartsUpload(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(packageFilePartsUpload) // the loaded record
```


### PackageFileUpload

Create an instance: `packageFileUpload := client.PackageFileUpload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.PackageFileUpload(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
    "repo": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PackageLicensePolicyEvaluation

Create an instance: `packageLicensePolicyEvaluation := client.PackageLicensePolicyEvaluation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `evaluation_count` | `int` |  |
| `policy` | `map[string]any` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `violation_count` | `int` |  |

#### Example: Load

```go
packageLicensePolicyEvaluation, err := client.PackageLicensePolicyEvaluation(nil).Load(map[string]any{"id": "package_license_policy_evaluation_id", "license_policy_id": "license_policy_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(packageLicensePolicyEvaluation) // the loaded record
```

#### Example: List

```go
packageLicensePolicyEvaluations, err := client.PackageLicensePolicyEvaluation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(packageLicensePolicyEvaluations) // the array of records
```

#### Example: Create

```go
result, err := client.PackageLicensePolicyEvaluation(nil).Create(map[string]any{
    "org_id": /* string */,
    "policy_slug_perm": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PackageVersionBadge

Create an instance: `packageVersionBadge := client.PackageVersionBadge(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
packageVersionBadge, err := client.PackageVersionBadge(nil).Load(map[string]any{"owner": "owner", "package_format": "package_format", "package_identifier": "package_identifier", "package_name": "package_name", "package_version": "package_version", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(packageVersionBadge) // the loaded record
```


### PackageVulnerabilityPolicyEvaluation

Create an instance: `packageVulnerabilityPolicyEvaluation := client.PackageVulnerabilityPolicyEvaluation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `evaluation_count` | `int` |  |
| `policy` | `map[string]any` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `violation_count` | `int` |  |

#### Example: Load

```go
packageVulnerabilityPolicyEvaluation, err := client.PackageVulnerabilityPolicyEvaluation(nil).Load(map[string]any{"id": "package_vulnerability_policy_evaluation_id", "org_id": "org_id", "vulnerability_policy_id": "vulnerability_policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(packageVulnerabilityPolicyEvaluation) // the loaded record
```

#### Example: List

```go
packageVulnerabilityPolicyEvaluations, err := client.PackageVulnerabilityPolicyEvaluation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(packageVulnerabilityPolicyEvaluations) // the array of records
```

#### Example: Create

```go
result, err := client.PackageVulnerabilityPolicyEvaluation(nil).Create(map[string]any{
    "org_id": /* string */,
    "policy_slug_perm": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Privilege

Create an instance: `privilege := client.Privilege(nil)`


### Profile

Create an instance: `profile := client.Profile(nil)`


### ProviderSetting

Create an instance: `providerSetting := client.ProviderSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claim` | `map[string]any` |  |
| `enabled` | `bool` |  |
| `mapping_claim` | `string` |  |
| `name` | `string` |  |
| `provider_url` | `string` |  |
| `service_account` | `[]any` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Load

```go
providerSetting, err := client.ProviderSetting(nil).Load(map[string]any{"org_id": "org_id", "slug_perm": "slug_perm"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(providerSetting) // the loaded record
```

#### Example: List

```go
providerSettings, err := client.ProviderSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(providerSettings) // the array of records
```


### ProviderSettingsWrite

Create an instance: `providerSettingsWrite := client.ProviderSettingsWrite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claim` | `map[string]any` |  |
| `dynamic_mapping` | `[]any` |  |
| `enabled` | `bool` |  |
| `mapping_claim` | `string` |  |
| `name` | `string` |  |
| `provider_url` | `string` |  |
| `service_account` | `[]any` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Create

```go
result, err := client.ProviderSettingsWrite(nil).Create(map[string]any{
    "org_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Python

Create an instance: `python := client.Python(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
python, err := client.Python(nil).Load(map[string]any{"id": "python_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(python) // the loaded record
```

#### Example: List

```go
pythons, err := client.Python(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(pythons) // the array of records
```

#### Example: Create

```go
result, err := client.Python(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Quarantine

Create an instance: `quarantine := client.Quarantine(nil)`


### Quota

Create an instance: `quota := client.Quota(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `history` | `[]any` |  |
| `usage` | `map[string]any` |  |

#### Example: Load

```go
quota, err := client.Quota(nil).Load(map[string]any{"id": "quota_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(quota) // the loaded record
```


### Raw

Create an instance: `raw := client.Raw(nil)`


### Refresh

Create an instance: `refresh := client.Refresh(nil)`


### Regenerate

Create an instance: `regenerate := client.Regenerate(nil)`


### Repo

Create an instance: `repo := client.Repo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cdn_url` | `string` |  |
| `content_kind` | `string` |  |
| `contextual_auth_realm` | `bool` |  |
| `copy_own` | `bool` |  |
| `copy_package` | `string` |  |
| `cosign_signing_enabled` | `bool` |  |
| `created_at` | `string` |  |
| `default_privilege` | `string` |  |
| `delete_own` | `bool` |  |
| `delete_package` | `string` |  |
| `deleted_at` | `string` |  |
| `description` | `string` |  |
| `distribute` | `[]any` |  |
| `docker_refresh_tokens_enabled` | `bool` |  |
| `ecdsa_key` | `[]any` |  |
| `enforce_eula` | `bool` |  |
| `gpg_key` | `[]any` |  |
| `index_file` | `bool` |  |
| `is_open_source` | `bool` |  |
| `is_private` | `bool` |  |
| `is_public` | `bool` |  |
| `manage_entitlements_privilege` | `string` |  |
| `move_own` | `bool` |  |
| `move_package` | `string` |  |
| `name` | `string` |  |
| `namespace` | `string` |  |
| `namespace_url` | `string` |  |
| `nuget_native_signing_enabled` | `bool` |  |
| `num_download` | `int` |  |
| `num_policy_violated_package` | `int` |  |
| `num_quarantined_package` | `int` |  |
| `open_source_license` | `string` |  |
| `open_source_project_url` | `string` |  |
| `package_count` | `int` |  |
| `package_group_count` | `int` |  |
| `proxy_npmj` | `bool` |  |
| `proxy_pypi` | `bool` |  |
| `raw_package_index_enabled` | `bool` |  |
| `raw_package_index_signatures_enabled` | `bool` |  |
| `replace_package` | `string` |  |
| `replace_packages_by_default` | `bool` |  |
| `repository_type` | `int` |  |
| `repository_type_str` | `string` |  |
| `resync_own` | `bool` |  |
| `resync_package` | `string` |  |
| `scan_own` | `bool` |  |
| `scan_package` | `string` |  |
| `self_html_url` | `string` |  |
| `self_url` | `string` |  |
| `show_setup_all` | `bool` |  |
| `size` | `int` |  |
| `size_str` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `storage_region` | `string` |  |
| `strict_npm_validation` | `bool` |  |
| `tag_pre_releases_as_latest` | `bool` |  |
| `use_debian_label` | `bool` |  |
| `use_default_cargo_upstream` | `bool` |  |
| `use_entitlements_privilege` | `string` |  |
| `use_noarch_package` | `bool` |  |
| `use_source_package` | `bool` |  |
| `use_vulnerability_scanning` | `bool` |  |
| `user_entitlements_enabled` | `bool` |  |
| `view_statistic` | `string` |  |

#### Example: Load

```go
repo, err := client.Repo(nil).Load(map[string]any{"id": "repo_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repo) // the loaded record
```

#### Example: List

```go
repos, err := client.Repo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(repos) // the array of records
```

#### Example: Create

```go
result, err := client.Repo(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RepositoryAuditLog

Create an instance: `repositoryAuditLog := client.RepositoryAuditLog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `string` |  |
| `actor_ip_address` | `string` |  |
| `actor_kind` | `string` |  |
| `actor_location` | `map[string]any` |  |
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

```go
repositoryAuditLogs, err := client.RepositoryAuditLog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryAuditLogs) // the array of records
```


### RepositoryEcdsaKey

Create an instance: `repositoryEcdsaKey := client.RepositoryEcdsaKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `default` | `bool` |  |
| `fingerprint` | `string` |  |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` |  |
| `ssh_fingerprint` | `string` |  |

#### Example: Load

```go
repositoryEcdsaKey, err := client.RepositoryEcdsaKey(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryEcdsaKey) // the loaded record
```

#### Example: Create

```go
result, err := client.RepositoryEcdsaKey(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RepositoryGeoIpRule

Create an instance: `repositoryGeoIpRule := client.RepositoryGeoIpRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cidr` | `map[string]any` |  |
| `country_code` | `map[string]any` |  |

#### Example: Load

```go
repositoryGeoIpRule, err := client.RepositoryGeoIpRule(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryGeoIpRule) // the loaded record
```


### RepositoryGeoIpStatus

Create an instance: `repositoryGeoIpStatus := client.RepositoryGeoIpStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `geoip_enabled` | `bool` |  |

#### Example: Load

```go
repositoryGeoIpStatus, err := client.RepositoryGeoIpStatus(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryGeoIpStatus) // the loaded record
```


### RepositoryGeoIpTestAddress

Create an instance: `repositoryGeoIpTestAddress := client.RepositoryGeoIpTestAddress(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.RepositoryGeoIpTestAddress(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RepositoryGpgKey

Create an instance: `repositoryGpgKey := client.RepositoryGpgKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `comment` | `string` |  |
| `created_at` | `string` |  |
| `default` | `bool` |  |
| `fingerprint` | `string` |  |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` |  |

#### Example: Load

```go
repositoryGpgKey, err := client.RepositoryGpgKey(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryGpgKey) // the loaded record
```

#### Example: Create

```go
result, err := client.RepositoryGpgKey(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RepositoryPrivilegeInput

Create an instance: `repositoryPrivilegeInput := client.RepositoryPrivilegeInput(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `privilege` | `string` |  |
| `service` | `string` |  |
| `team` | `string` |  |
| `user` | `string` |  |

#### Example: List

```go
repositoryPrivilegeInputs, err := client.RepositoryPrivilegeInput(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryPrivilegeInputs) // the array of records
```


### RepositoryRetentionRule

Create an instance: `repositoryRetentionRule := client.RepositoryRetentionRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `retention_count_limit` | `int` |  |
| `retention_days_limit` | `int` |  |
| `retention_enabled` | `bool` |  |
| `retention_group_by_format` | `bool` |  |
| `retention_group_by_name` | `bool` |  |
| `retention_group_by_package_type` | `bool` |  |
| `retention_package_query_string` | `string` |  |
| `retention_size_limit` | `int` |  |

#### Example: Load

```go
repositoryRetentionRule, err := client.RepositoryRetentionRule(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryRetentionRule) // the loaded record
```


### RepositoryRsaKey

Create an instance: `repositoryRsaKey := client.RepositoryRsaKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `default` | `bool` |  |
| `fingerprint` | `string` |  |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` |  |
| `ssh_fingerprint` | `string` |  |

#### Example: Load

```go
repositoryRsaKey, err := client.RepositoryRsaKey(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryRsaKey) // the loaded record
```

#### Example: Create

```go
result, err := client.RepositoryRsaKey(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RepositoryToken

Create an instance: `repositoryToken := client.RepositoryToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client` | `int` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `default` | `bool` |  |
| `disable_url` | `string` |  |
| `download` | `int` |  |
| `enable_url` | `string` |  |
| `eula_accepted` | `map[string]any` |  |
| `eula_accepted_at` | `string` |  |
| `eula_accepted_from` | `string` |  |
| `eula_required` | `bool` |  |
| `has_limit` | `bool` |  |
| `identifier` | `int` |  |
| `is_active` | `bool` |  |
| `is_limited` | `bool` |  |
| `limit_bandwidth` | `int` |  |
| `limit_bandwidth_unit` | `string` |  |
| `limit_date_range_from` | `string` |  |
| `limit_date_range_to` | `string` |  |
| `limit_num_client` | `int` |  |
| `limit_num_download` | `int` |  |
| `limit_package_query` | `string` |  |
| `limit_path_query` | `string` |  |
| `metadata` | `map[string]any` |  |
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

```go
repositoryToken, err := client.RepositoryToken(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryToken) // the loaded record
```

#### Example: List

```go
repositoryTokens, err := client.RepositoryToken(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryTokens) // the array of records
```

#### Example: Create

```go
result, err := client.RepositoryToken(nil).Create(map[string]any{
    "owner": /* any */,
    "repo": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RepositoryTokenRefresh

Create an instance: `repositoryTokenRefresh := client.RepositoryTokenRefresh(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client` | `int` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `default` | `bool` |  |
| `disable_url` | `string` |  |
| `download` | `int` |  |
| `enable_url` | `string` |  |
| `eula_accepted` | `map[string]any` |  |
| `eula_accepted_at` | `string` |  |
| `eula_accepted_from` | `string` |  |
| `eula_required` | `bool` |  |
| `has_limit` | `bool` |  |
| `identifier` | `int` |  |
| `is_active` | `bool` |  |
| `is_limited` | `bool` |  |
| `limit_bandwidth` | `int` |  |
| `limit_bandwidth_unit` | `string` |  |
| `limit_date_range_from` | `string` |  |
| `limit_date_range_to` | `string` |  |
| `limit_num_client` | `int` |  |
| `limit_num_download` | `int` |  |
| `limit_package_query` | `string` |  |
| `limit_path_query` | `string` |  |
| `metadata` | `map[string]any` |  |
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

```go
result, err := client.RepositoryTokenRefresh(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
    "repo": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RepositoryTokenSync

Create an instance: `repositoryTokenSync := client.RepositoryTokenSync(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `token` | `[]any` |  |

#### Example: Create

```go
result, err := client.RepositoryTokenSync(nil).Create(map[string]any{
    "owner": /* any */,
    "repo": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RepositoryWebhook

Create an instance: `repositoryWebhook := client.RepositoryWebhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `disable_reason` | `int` |  |
| `disable_reason_str` | `string` |  |
| `event` | `[]any` |  |
| `identifier` | `int` |  |
| `is_active` | `bool` |  |
| `is_last_response_bad` | `bool` |  |
| `last_response_status` | `int` |  |
| `last_response_status_str` | `string` |  |
| `num_sent` | `int` |  |
| `package_query` | `string` |  |
| `request_body_format` | `int` |  |
| `request_body_format_str` | `string` |  |
| `request_body_template_format` | `int` |  |
| `request_body_template_format_str` | `string` |  |
| `request_content_type` | `string` |  |
| `secret_header` | `string` |  |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `target_url` | `string` |  |
| `template` | `[]any` |  |
| `updated_at` | `string` |  |
| `updated_by` | `string` |  |
| `updated_by_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: List

```go
repositoryWebhooks, err := client.RepositoryWebhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryWebhooks) // the array of records
```

#### Example: Create

```go
result, err := client.RepositoryWebhook(nil).Create(map[string]any{
    "owner": /* any */,
    "repo": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RepositoryX509EcdsaCertificate

Create an instance: `repositoryX509EcdsaCertificate := client.RepositoryX509EcdsaCertificate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `certificate` | `string` |  |
| `certificate_chain` | `string` |  |
| `certificate_chain_fingerprint` | `string` |  |
| `certificate_chain_fingerprint_short` | `string` |  |
| `certificate_fingerprint` | `string` |  |
| `certificate_fingerprint_short` | `string` |  |
| `created_at` | `string` |  |
| `default` | `bool` |  |
| `issuing_status` | `string` |  |

#### Example: Load

```go
repositoryX509EcdsaCertificate, err := client.RepositoryX509EcdsaCertificate(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryX509EcdsaCertificate) // the loaded record
```


### RepositoryX509RsaCertificate

Create an instance: `repositoryX509RsaCertificate := client.RepositoryX509RsaCertificate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `certificate` | `string` |  |
| `certificate_chain` | `string` |  |
| `certificate_chain_fingerprint` | `string` |  |
| `certificate_chain_fingerprint_short` | `string` |  |
| `certificate_fingerprint` | `string` |  |
| `certificate_fingerprint_short` | `string` |  |
| `created_at` | `string` |  |
| `default` | `bool` |  |
| `issuing_status` | `string` |  |

#### Example: Load

```go
repositoryX509RsaCertificate, err := client.RepositoryX509RsaCertificate(nil).Load(map[string]any{"identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryX509RsaCertificate) // the loaded record
```


### Reset

Create an instance: `reset := client.Reset(nil)`


### ResourcesRateCheck

Create an instance: `resourcesRateCheck := client.ResourcesRateCheck(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `resource` | `map[string]any` |  |

#### Example: Load

```go
resourcesRateCheck, err := client.ResourcesRateCheck(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(resourcesRateCheck) // the loaded record
```


### Resync

Create an instance: `resync := client.Resync(nil)`


### Retention

Create an instance: `retention := client.Retention(nil)`


### Rpm

Create an instance: `rpm := client.Rpm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `include_source` | `bool` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verification_status` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
rpm, err := client.Rpm(nil).Load(map[string]any{"id": "rpm_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(rpm) // the loaded record
```

#### Example: List

```go
rpms, err := client.Rpm(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(rpms) // the array of records
```

#### Example: Create

```go
result, err := client.Rpm(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Rsa

Create an instance: `rsa := client.Rsa(nil)`


### Ruby

Create an instance: `ruby := client.Ruby(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
ruby, err := client.Ruby(nil).Load(map[string]any{"id": "ruby_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(ruby) // the loaded record
```

#### Example: List

```go
rubys, err := client.Ruby(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(rubys) // the array of records
```

#### Example: Create

```go
result, err := client.Ruby(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SamlGroupSync

Create an instance: `samlGroupSync := client.SamlGroupSync(nil)`


### Scan

Create an instance: `scan := client.Scan(nil)`


### Self

Create an instance: `self := client.Self(nil)`


### Service

Create an instance: `service := client.Service(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `team` | `[]any` |  |

#### Example: Load

```go
service, err := client.Service(nil).Load(map[string]any{"id": "service_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(service) // the loaded record
```

#### Example: List

```go
services, err := client.Service(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(services) // the array of records
```

#### Example: Create

```go
result, err := client.Service(nil).Create(map[string]any{
    "org_id": /* string */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Status

Create an instance: `status := client.Status(nil)`


### StatusBasic

Create an instance: `statusBasic := client.StatusBasic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `detail` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```go
statusBasic, err := client.StatusBasic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(statusBasic) // the loaded record
```


### StorageRegion

Create an instance: `storageRegion := client.StorageRegion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` |  |
| `slug` | `string` |  |

#### Example: Load

```go
storageRegion, err := client.StorageRegion(nil).Load(map[string]any{"id": "storage_region_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(storageRegion) // the loaded record
```

#### Example: List

```go
storageRegions, err := client.StorageRegion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(storageRegions) // the array of records
```


### Swift

Create an instance: `swift := client.Swift(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```go
swift, err := client.Swift(nil).Load(map[string]any{"id": "swift_id", "identifier": "identifier", "owner": "owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(swift) // the loaded record
```

#### Example: List

```go
swifts, err := client.Swift(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(swifts) // the array of records
```

#### Example: Create

```go
result, err := client.Swift(nil).Create(map[string]any{
    "identifier": /* any */,
    "owner": /* any */,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Sync

Create an instance: `sync := client.Sync(nil)`


### Tag

Create an instance: `tag := client.Tag(nil)`


### Team

Create an instance: `team := client.Team(nil)`


### Terraform

Create an instance: `terraform := client.Terraform(nil)`


### Test

Create an instance: `test := client.Test(nil)`


### Token

Create an instance: `token := client.Token(nil)`


### TransferRegion

Create an instance: `transferRegion := client.TransferRegion(nil)`


### User

Create an instance: `user := client.User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` |  |
| `key` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: List

```go
users, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(users) // the array of records
```


### UserAuthToken

Create an instance: `userAuthToken := client.UserAuthToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.UserAuthToken(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### UserAuthenticationToken

Create an instance: `userAuthenticationToken := client.UserAuthenticationToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` |  |
| `key` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Create

```go
result, err := client.UserAuthenticationToken(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### UserBrief

Create an instance: `userBrief := client.UserBrief(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authenticated` | `bool` |  |
| `email` | `string` |  |
| `name` | `string` |  |
| `profile_url` | `string` |  |
| `self_url` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Load

```go
userBrief, err := client.UserBrief(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(userBrief) // the loaded record
```


### UserProfile

Create an instance: `userProfile := client.UserProfile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
userProfile, err := client.UserProfile(nil).Load(map[string]any{"id": "user_profile_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(userProfile) // the loaded record
```


### Vagrant

Create an instance: `vagrant := client.Vagrant(nil)`


### Validate

Create an instance: `validate := client.Validate(nil)`


### Version

Create an instance: `version := client.Version(nil)`


### Vulnerability

Create an instance: `vulnerability := client.Vulnerability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `has_vulnerability` | `bool` |  |
| `identifier` | `string` |  |
| `max_severity` | `string` |  |
| `num_vulnerability` | `int` |  |
| `package` | `map[string]any` |  |
| `result` | `[]any` |  |
| `scan_id` | `int` |  |
| `target` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```go
vulnerability, err := client.Vulnerability(nil).Load(map[string]any{"id": "vulnerability_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(vulnerability) // the loaded record
```

#### Example: List

```go
vulnerabilitys, err := client.Vulnerability(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(vulnerabilitys) // the array of records
```


### VulnerabilityPolicy

Create an instance: `vulnerabilityPolicy := client.VulnerabilityPolicy(nil)`


### Webhook

Create an instance: `webhook := client.Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### X509Ecdsa

Create an instance: `x509Ecdsa := client.X509Ecdsa(nil)`


### X509Rsa

Create an instance: `x509Rsa := client.X509Rsa(nil)`


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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cloudsmith-sdk/go/
├── cloudsmith.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cloudsmith-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
abort := client.Abort(nil)
abort.Load(nil, nil)

// abort.Data() now returns the abort data from the last load
// abort.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
