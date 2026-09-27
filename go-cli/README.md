# cloudsmith-cli

boru-driven command-line client **and** interactive REPL for the Cloudsmith
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudsmith-cli)
make build

# 2. See usage (words, entities, env vars)
./cloudsmith-cli --help

# 3. Provide credentials once, via the environment
export CLOUDSMITH_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./cloudsmith-cli list cargo
./cloudsmith-cli load 1 cargo            # {id:1} shorthand
./cloudsmith-cli load '{id:1}' cargo       # explicit match map
./cloudsmith-cli update '{name:"x"}' cargo
./cloudsmith-cli list composer

# 5. Override the API base URL for a single call
CLOUDSMITH_BASE=https://api.example.com ./cloudsmith-cli list cargo

# 6. No arguments -> interactive REPL
./cloudsmith-cli
cloudsmith> list cargo
cloudsmith> /quit
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

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/cloudsmith-cli list cargo
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./cloudsmith-cli list cargo
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Load a single record

```sh
./cloudsmith-cli load 1 cargo          # scalar shorthand for {id:1}
./cloudsmith-cli load '{id:1}' cargo     # explicit match map
```

The query is either a **scalar** (`1`, treated as `{id:1}`) or a **match map**
(`{id:1}`, `{slug:"acme"}`). Quote the map so your shell passes it through intact.

### Update a record

```sh
./cloudsmith-cli update '{id:1,name:"new"}' cargo
```

The match map carries both the selector and the new field values; the updated
record is printed back.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDSMITH_APIKEY=sk_live_xxx            # API key
export CLOUDSMITH_BASE=https://api.example.com  # optional: override the API base URL
./cloudsmith-cli list cargo
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `cloudsmith>`). Each line is
evaluated as its own boru expression:

```text
$ ./cloudsmith-cli
cloudsmith> list cargo
cloudsmith> /help
cloudsmith> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 75 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `cargo`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDSMITH_APIKEY` | API key sent with every request. |
| `CLOUDSMITH_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

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

The 75 entities this SDK exposes (any is valid as `<entity>`):

cargo composer conda cran dart deb distribution_full docker dynamic_mapping entitlement file format gon helm hex huggingface maven namespace namespace_audit_log npm nuget org organization_group_sync organization_group_sync_status organization_invite organization_invite_extend organization_membership organization_membership_role_update organization_membership_visibility_update organization_package_license_policy organization_package_vulnerability_policy organization_saml_auth organization_team organization_team_member package package_deny_policy package_file_parts_upload package_file_upload package_license_policy_evaluation package_version_badge package_vulnerability_policy_evaluation provider_setting provider_settings_write python quota repo repository_audit_log repository_ecdsa_key repository_geo_ip_rule repository_geo_ip_status repository_geo_ip_test_address repository_gpg_key repository_privilege_dict repository_retention_rule repository_rsa_key repository_token repository_token_refresh repository_token_sync repository_webhook repository_x509_ecdsa_certificate repository_x509_rsa_certificate resources_rate_check rpm ruby service status_basic storage_region swift user user_auth_token user_authentication_token user_brief user_profile vulnerability webhook

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./cloudsmith-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
