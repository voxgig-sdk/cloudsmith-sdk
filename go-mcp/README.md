# cloudsmith-mcp

[MCP](https://modelcontextprotocol.io) server exposing the Cloudsmith SDK as
two agent tools — `cloudsmith_list` and `cloudsmith_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudsmith-mcp)
make build

# 2. Provide credentials via the environment
export CLOUDSMITH_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user cloudsmith \
  -- /absolute/path/to/cloudsmith-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./cloudsmith-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// cloudsmith_list: first page of records
{ "entity": "cargo" }
{ "entity": "cargo", "query": { } }

// cloudsmith_load: one record by id
{ "entity": "cargo", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cloudsmith-mcp
   ```

2. **Set your API key:**

   ```sh
   export CLOUDSMITH_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user cloudsmith \
     -- "$PWD"/dist/*/cloudsmith-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `cloudsmith_list` and `cloudsmith_load` tools now appear
   in new sessions. Ask the agent to *"list cargo using cloudsmith"*
   and it calls `cloudsmith_list` with `{"entity":"cargo"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDSMITH_APIKEY=sk_live_xxx            # API key
export CLOUDSMITH_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./cloudsmith-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `cloudsmith_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "cargo" }
```

### Call the `cloudsmith_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "cargo", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `cloudsmith_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `cloudsmith_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 140 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDSMITH_APIKEY` | API key sent with every request. |
| `CLOUDSMITH_BASE` | Optional override of the API base URL. |

### Entities

The 140 entities valid as the `entity` argument:

abort | alpine | audit_log | basic | cargo | cocoapod | complete | composer | conan | conda | copy | cran | dart | deb | deny_policy | dependency | disable | distribution_full | distro | docker | dynamic_mapping | ecdsa | enable | entitlement | evaluation | file | format | geoip | gon | gon2 | gon3 | gon4 | gon5 | gon6 | gon7 | gon8 | gon9 | gpg | group | helm | hex | history | huggingface | info | invite | license_policy | limit | luarock | maven | member | move | namespace | namespace_audit_log | npm | nuget | openid_connect | org | organization_group_sync | organization_group_sync_status | organization_invite | organization_invite_extend | organization_membership | organization_membership_role_update | organization_membership_visibility_update | organization_package_license_policy | organization_package_vulnerability_policy | organization_saml_auth | organization_team | organization_team_member | oss | p2n | p2n2 | package | package_deny_policy | package_file_parts_upload | package_file_upload | package_license_policy_evaluation | package_version_badge | package_vulnerability_policy_evaluation | privilege | profile | provider_setting | provider_settings_write | python | quarantine | quota | raw | refresh | regenerate | repo | repository_audit_log | repository_ecdsa_key | repository_geo_ip_rule | repository_geo_ip_status | repository_geo_ip_test_address | repository_gpg_key | repository_privilege_input | repository_retention_rule | repository_rsa_key | repository_token | repository_token_refresh | repository_token_sync | repository_webhook | repository_x509_ecdsa_certificate | repository_x509_rsa_certificate | reset | resources_rate_check | resync | retention | rpm | rsa | ruby | saml_group_sync | scan | self | service | status | status_basic | storage_region | swift | sync | tag | team | terraform | test | token | transfer_region | user | user_auth_token | user_authentication_token | user_brief | user_profile | vagrant | validate | version | vulnerability | vulnerability_policy | webhook | x509_ecdsa | x509_rsa

### Smoke test via HTTP (raw JSON-RPC)

```sh
./cloudsmith-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"cloudsmith_load","arguments":{"entity":"cargo","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
