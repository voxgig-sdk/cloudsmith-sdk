# cloudsmith-cli

AQL-driven command-line client **and** interactive REPL for the Cloudsmith
SDK. Each command line is parsed as a single [AQL](https://github.com/aql-lang/aql)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/aql-lang/aql/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudsmith-cli)
make build

# 2. Provide credentials once, via the environment
export CLOUDSMITH_APIKEY=sk_live_xxx

# 3. Each command line is ONE AQL expression, run against the API:

# 4. Override the API base URL for a single call
CLOUDSMITH_BASE=https://api.example.com ./cloudsmith-cli :help

# 5. No arguments -> interactive REPL
./cloudsmith-cli
cloudsmith> :help
cloudsmith> :quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cloudsmith-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export CLOUDSMITH_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an AQL expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/cloudsmith-cli :help
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `:help` for the word and entity lists and `:quit` to leave.

That is the whole loop: *build → set key → evaluate AQL expressions*.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDSMITH_APIKEY=sk_live_xxx            # API key
export CLOUDSMITH_BASE=https://api.example.com  # optional: override the API base URL
./cloudsmith-cli :help
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `cloudsmith>`). Each line is
evaluated as its own AQL expression:

```text
$ ./cloudsmith-cli
cloudsmith> :help
cloudsmith> :help
cloudsmith> :quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`:help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 140 entities.

## Reference

### Words

The CLI registers these AQL words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an AQL atom (e.g. `abort`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDSMITH_APIKEY` | API key sent with every request. |
| `CLOUDSMITH_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### REPL commands

- `:quit` / `:q` / `:exit` — exit the REPL
- `:help` / `:h` / `:?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/cloudsmith-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 140 entities this SDK exposes (any is valid as `<entity>`):

abort alpine audit_log basic cargo cocoapod complete composer conan conda copy cran dart deb deny_policy dependency disable distribution_full distro docker dynamic_mapping ecdsa enable entitlement evaluation file format geoip gon gon2 gon3 gon4 gon5 gon6 gon7 gon8 gon9 gpg group helm hex history huggingface info invite license_policy limit luarock maven member move namespace namespace_audit_log npm nuget openid_connect org organization_group_sync organization_group_sync_status organization_invite organization_invite_extend organization_membership organization_membership_role_update organization_membership_visibility_update organization_package_license_policy organization_package_vulnerability_policy organization_saml_auth organization_team organization_team_member oss p2n p2n2 package package_deny_policy package_file_parts_upload package_file_upload package_license_policy_evaluation package_version_badge package_vulnerability_policy_evaluation privilege profile provider_setting provider_settings_write python quarantine quota raw refresh regenerate repo repository_audit_log repository_ecdsa_key repository_geo_ip_rule repository_geo_ip_status repository_geo_ip_test_address repository_gpg_key repository_privilege_input repository_retention_rule repository_rsa_key repository_token repository_token_refresh repository_token_sync repository_webhook repository_x509_ecdsa_certificate repository_x509_rsa_certificate reset resources_rate_check resync retention rpm rsa ruby saml_group_sync scan self service status status_basic storage_region swift sync tag team terraform test token transfer_region user user_auth_token user_authentication_token user_brief user_profile vagrant validate version vulnerability vulnerability_policy webhook x509_ecdsa x509_rsa

## Explanation

### Why AQL?

The whole command line is one [AQL](https://github.com/aql-lang/aql) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./cloudsmith-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary AQL *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
AQL registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its AQL string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
