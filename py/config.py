# Cloudsmith SDK configuration


def make_config():
    return {
        "main": {
            "name": "Cloudsmith",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.cloudsmith.io",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "abort": {},
                "alpine": {},
                "audit_log": {},
                "basic": {},
                "cargo": {},
                "cocoapod": {},
                "complete": {},
                "composer": {},
                "conan": {},
                "conda": {},
                "copy": {},
                "cran": {},
                "dart": {},
                "deb": {},
                "deny_policy": {},
                "dependency": {},
                "disable": {},
                "distribution_full": {},
                "distro": {},
                "docker": {},
                "dynamic_mapping": {},
                "ecdsa": {},
                "enable": {},
                "entitlement": {},
                "evaluation": {},
                "file": {},
                "format": {},
                "geoip": {},
                "gon": {},
                "gon2": {},
                "gon3": {},
                "gon4": {},
                "gon5": {},
                "gon6": {},
                "gon7": {},
                "gon8": {},
                "gon9": {},
                "gpg": {},
                "group": {},
                "helm": {},
                "hex": {},
                "history": {},
                "huggingface": {},
                "info": {},
                "invite": {},
                "license_policy": {},
                "limit": {},
                "luarock": {},
                "maven": {},
                "member": {},
                "move": {},
                "namespace": {},
                "namespace_audit_log": {},
                "npm": {},
                "nuget": {},
                "openid_connect": {},
                "org": {},
                "organization_group_sync": {},
                "organization_group_sync_status": {},
                "organization_invite": {},
                "organization_invite_extend": {},
                "organization_membership": {},
                "organization_membership_role_update": {},
                "organization_membership_visibility_update": {},
                "organization_package_license_policy": {},
                "organization_package_vulnerability_policy": {},
                "organization_saml_auth": {},
                "organization_team": {},
                "organization_team_member": {},
                "oss": {},
                "p2n": {},
                "p2n2": {},
                "package": {},
                "package_deny_policy": {},
                "package_file_parts_upload": {},
                "package_file_upload": {},
                "package_license_policy_evaluation": {},
                "package_version_badge": {},
                "package_vulnerability_policy_evaluation": {},
                "privilege": {},
                "profile": {},
                "provider_setting": {},
                "provider_settings_write": {},
                "python": {},
                "quarantine": {},
                "quota": {},
                "raw": {},
                "refresh": {},
                "regenerate": {},
                "repo": {},
                "repository_audit_log": {},
                "repository_ecdsa_key": {},
                "repository_geo_ip_rule": {},
                "repository_geo_ip_status": {},
                "repository_geo_ip_test_address": {},
                "repository_gpg_key": {},
                "repository_privilege_input": {},
                "repository_retention_rule": {},
                "repository_rsa_key": {},
                "repository_token": {},
                "repository_token_refresh": {},
                "repository_token_sync": {},
                "repository_webhook": {},
                "repository_x509_ecdsa_certificate": {},
                "repository_x509_rsa_certificate": {},
                "reset": {},
                "resources_rate_check": {},
                "resync": {},
                "retention": {},
                "rpm": {},
                "rsa": {},
                "ruby": {},
                "saml_group_sync": {},
                "scan": {},
                "self": {},
                "service": {},
                "status": {},
                "status_basic": {},
                "storage_region": {},
                "swift": {},
                "sync": {},
                "tag": {},
                "team": {},
                "terraform": {},
                "test": {},
                "token": {},
                "transfer_region": {},
                "user": {},
                "user_auth_token": {},
                "user_authentication_token": {},
                "user_brief": {},
                "user_profile": {},
                "vagrant": {},
                "validate": {},
                "version": {},
                "vulnerability": {},
                "vulnerability_policy": {},
                "webhook": {},
                "x509_ecdsa": {},
                "x509_rsa": {},
            },
        },
        "entity": {
      "abort": {
        "fields": [],
        "name": "abort",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "file",
            ],
          ],
        },
      },
      "alpine": {
        "fields": [],
        "name": "alpine",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "audit_log": {
        "fields": [],
        "name": "audit_log",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "audit_log",
            ],
          ],
        },
      },
      "basic": {
        "fields": [],
        "name": "basic",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "cargo": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "cargo",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/cargo/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cargo",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/cargo/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cargo",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cargo",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cargo",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cargo",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "cocoapod": {
        "fields": [],
        "name": "cocoapod",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "complete": {
        "fields": [],
        "name": "complete",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "file",
            ],
          ],
        },
      },
      "composer": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "composer",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/composer/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "composer",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/composer/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "composer",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/composer/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "composer",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/composer/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "composer",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/composer/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "composer",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "conan": {
        "fields": [],
        "name": "conan",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "conda": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "conda",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/conda/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "conda",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/conda/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "conda",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/conda/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "conda",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/conda/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "conda",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/conda/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "conda",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "copy": {
        "fields": [],
        "name": "copy",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "cran": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "cran",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/cran/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cran",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/cran/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cran",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/cran/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cran",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/cran/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cran",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/cran/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cran",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "dart": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "dart",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/dart/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "dart",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/dart/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "dart",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/dart/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "dart",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/dart/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "dart",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/dart/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "dart",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "deb": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "component",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "distro_version",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "gpg_key_inline",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "gpg_key_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "gpg_verification",
            "req": False,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "include_source",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "upstream_distribution",
            "req": False,
            "type": "`$STRING`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "verification_status",
            "req": False,
            "type": "`$STRING`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 25,
          },
        ],
        "name": "deb",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/deb/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "deb",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/deb/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "deb",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/deb/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "deb",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/deb/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "deb",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/deb/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "deb",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "deny_policy": {
        "fields": [],
        "name": "deny_policy",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "org",
            ],
          ],
        },
      },
      "dependency": {
        "fields": [],
        "name": "dependency",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "disable": {
        "fields": [],
        "name": "disable",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "entitlement",
            ],
            [
              "org",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "distribution_full": {
        "fields": [
          {
            "active": True,
            "name": "format",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "format_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "self_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "slug",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "variant",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "version",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 6,
          },
        ],
        "name": "distribution_full",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/distros/",
                "parts": [
                  "distros",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/distros/{slug}/",
                "parts": [
                  "distros",
                  "{slug}",
                ],
                "select": {
                  "exist": [
                    "slug",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "distro",
            ],
          ],
        },
      },
      "distro": {
        "fields": [],
        "name": "distro",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "docker": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "docker",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/docker/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "docker",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/docker/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "docker",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/docker/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "docker",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/docker/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "docker",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/docker/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "docker",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "dynamic_mapping": {
        "fields": [
          {
            "active": True,
            "name": "claim_value",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "service_account",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "dynamic_mapping",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "provider_setting",
                      "orig": "provider_setting",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "openid-connect",
                  "{provider_setting}",
                  "dynamic-mappings",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                    "page",
                    "page_size",
                    "provider_setting",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "claim_value",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "openid_connect_id",
                      "orig": "provider_setting",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/{claim_value}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "openid-connect",
                  "{openid_connect_id}",
                  "dynamic-mappings",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "claim_value": "id",
                    "org": "org_id",
                    "provider_setting": "openid_connect_id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "openid_connect_id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
              "openid_connect",
            ],
          ],
        },
      },
      "ecdsa": {
        "fields": [],
        "name": "ecdsa",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "enable": {
        "fields": [],
        "name": "enable",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "entitlement",
            ],
            [
              "org",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "entitlement": {
        "fields": [
          {
            "active": True,
            "name": "token",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
        ],
        "name": "entitlement",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "show_token",
                      "orig": "show_token",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/entitlements/{owner}/{repo}/{identifier}/reset/",
                "parts": [
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "reset",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "repo",
                    "show_token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/entitlements/{owner}/{repo}/{identifier}/disable/",
                "parts": [
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "disable",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/entitlements/{owner}/{repo}/{identifier}/enable/",
                "parts": [
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "enable",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
            ],
            "key$": "create",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "finish",
                      "orig": "finish",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "start",
                      "orig": "start",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/metrics/entitlements/{owner}/{repo}/",
                "parts": [
                  "metrics",
                  "entitlements",
                  "{owner}",
                  "{repo}",
                ],
                "select": {
                  "exist": [
                    "finish",
                    "owner",
                    "page",
                    "page_size",
                    "repo",
                    "start",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "finish",
                      "orig": "finish",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "start",
                      "orig": "start",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/metrics/entitlements/{owner}/",
                "parts": [
                  "metrics",
                  "entitlements",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "owner": "id",
                  },
                },
                "select": {
                  "exist": [
                    "finish",
                    "id",
                    "page",
                    "page_size",
                    "start",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/entitlements/{owner}/{repo}/{identifier}/",
                "parts": [
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [
            [
              "entitlement",
            ],
          ],
        },
      },
      "evaluation": {
        "fields": [],
        "name": "evaluation",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "org",
              "license_policy",
            ],
            [
              "org",
              "vulnerability_policy",
            ],
          ],
        },
      },
      "file": {
        "fields": [],
        "name": "file",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/files/{owner}/{repo}/{identifier}/abort/",
                "parts": [
                  "files",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "abort",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/files/{owner}/{repo}/",
                "parts": [
                  "files",
                  "{owner}",
                  "{repo}",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/files/{owner}/{repo}/validate/",
                "parts": [
                  "files",
                  "{owner}",
                  "{repo}",
                  "validate",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "file",
            ],
          ],
        },
      },
      "format": {
        "fields": [
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "distribution",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "extension",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "premium",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "premium_plan_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "premium_plan_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "slug",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "support",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 8,
          },
        ],
        "name": "format",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/formats/",
                "parts": [
                  "formats",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/formats/{slug}/",
                "parts": [
                  "formats",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "geoip": {
        "fields": [],
        "name": "geoip",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "gon": {
        "fields": [],
        "name": "gon",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "gon2": {
        "fields": [],
        "name": "gon2",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "gon3": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "gon3",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/go/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "go",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "gon4": {
        "fields": [],
        "name": "gon4",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "gon5": {
        "fields": [],
        "name": "gon5",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/go/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "go",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "gon6": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "gon6",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/go/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "go",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
              "go",
            ],
          ],
        },
      },
      "gon7": {
        "fields": [],
        "name": "gon7",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "repo",
              "go",
            ],
          ],
        },
      },
      "gon8": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "gon8",
        "op": {
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/go/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "go",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
              "go",
            ],
          ],
        },
      },
      "gon9": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "gon9",
        "op": {
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/go/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "go",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
              "go",
            ],
          ],
        },
      },
      "gpg": {
        "fields": [],
        "name": "gpg",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "group": {
        "fields": [],
        "name": "group",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "helm": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "helm",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/helm/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "helm",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/helm/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "helm",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/helm/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "helm",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/helm/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "helm",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/helm/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "helm",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "hex": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "hex",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/hex/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "hex",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/hex/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "hex",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/hex/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "hex",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/hex/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "hex",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/hex/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "hex",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "history": {
        "fields": [],
        "name": "history",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "huggingface": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "huggingface",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/huggingface/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "huggingface",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/huggingface/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "huggingface",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "huggingface",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "huggingface",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "huggingface",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "info": {
        "fields": [],
        "name": "info",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "file",
            ],
          ],
        },
      },
      "invite": {
        "fields": [],
        "name": "invite",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "org",
            ],
            [
              "org",
              "invite",
            ],
          ],
        },
      },
      "license_policy": {
        "fields": [],
        "name": "license_policy",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "org",
            ],
            [
              "org",
              "license_policy",
            ],
          ],
        },
      },
      "limit": {
        "fields": [],
        "name": "limit",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "luarock": {
        "fields": [],
        "name": "luarock",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "maven": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "gpg_key_inline",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "gpg_key_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "gpg_verification",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "verification_status",
            "req": False,
            "type": "`$STRING`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 21,
          },
        ],
        "name": "maven",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/maven/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "maven",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/maven/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "maven",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/maven/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "maven",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/maven/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "maven",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/maven/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "maven",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "member": {
        "fields": [],
        "name": "member",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "org",
            ],
          ],
        },
      },
      "move": {
        "fields": [],
        "name": "move",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "namespace": {
        "fields": [
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "slug",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "type_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "namespace",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/namespaces/",
                "parts": [
                  "namespaces",
                ],
                "select": {
                  "exist": [
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/namespaces/{slug}/",
                "parts": [
                  "namespaces",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "namespace_audit_log": {
        "fields": [
          {
            "active": True,
            "name": "actor",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "actor_ip_address",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "actor_kind",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "actor_location",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "actor_slug_perm",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "actor_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "context",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "event",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "event_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "object",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "object_kind",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "object_slug_perm",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "target",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "target_kind",
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "target_slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "uuid",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
        ],
        "name": "namespace_audit_log",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/audit-log/{owner}/",
                "parts": [
                  "audit-log",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "owner": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "page",
                    "page_size",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "npm": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "npm",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/npm/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "npm",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/npm/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "npm",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/npm/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "npm",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/npm/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "npm",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/npm/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "npm",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "nuget": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "nuget",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/nuget/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "nuget",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/nuget/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "nuget",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "nuget",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "nuget",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "nuget",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "openid_connect": {
        "fields": [],
        "name": "openid_connect",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "org",
            ],
            [
              "org",
              "openid_connect",
            ],
          ],
        },
      },
      "org": {
        "fields": [
          {
            "active": True,
            "name": "country",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "event_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "location",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "package",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "policy",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "reason",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "slug",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "tagline",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "vulnerability_scan_result",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 11,
          },
        ],
        "name": "org",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "member_id",
                      "orig": "member",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/members/{member}/refresh/",
                "parts": [
                  "orgs",
                  "{id}",
                  "members",
                  "{member_id}",
                  "refresh",
                ],
                "rename": {
                  "param": {
                    "member": "member_id",
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "member_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/saml-group-sync/disable/",
                "parts": [
                  "orgs",
                  "{id}",
                  "saml-group-sync",
                  "disable",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/saml-group-sync/enable/",
                "parts": [
                  "orgs",
                  "{id}",
                  "saml-group-sync",
                  "enable",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/license-policy-violation/",
                "parts": [
                  "orgs",
                  "{id}",
                  "license-policy-violation",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "$action": "license_policy_violation",
                  "exist": [
                    "cursor",
                    "id",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/vulnerability-policy-violation/",
                "parts": [
                  "orgs",
                  "{id}",
                  "vulnerability-policy-violation",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "$action": "vulnerability_policy_violation",
                  "exist": [
                    "cursor",
                    "id",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/",
                "parts": [
                  "orgs",
                ],
                "select": {
                  "exist": [
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "member_id",
                      "orig": "member",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/members/{member}/remove/",
                "parts": [
                  "orgs",
                  "{id}",
                  "members",
                  "{member_id}",
                  "remove",
                ],
                "rename": {
                  "param": {
                    "member": "member_id",
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "member_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/",
                "parts": [
                  "orgs",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "member",
                      "orig": "member",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/orgs/{org}/members/{member}/",
                "parts": [
                  "orgs",
                  "{id}",
                  "members",
                  "{member}",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "member",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "service",
                      "orig": "service",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/orgs/{org}/services/{service}/",
                "parts": [
                  "orgs",
                  "{id}",
                  "services",
                  "{service}",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "service",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/orgs/{org}/deny-policy/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{id}",
                  "deny-policy",
                  "{slug_perm}",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/orgs/{org}/invites/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{id}",
                  "invites",
                  "{slug_perm}",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 3,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/orgs/{org}/license-policy/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{id}",
                  "license-policy",
                  "{slug_perm}",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 4,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/orgs/{org}/openid-connect/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{id}",
                  "openid-connect",
                  "{slug_perm}",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 5,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/orgs/{org}/saml-group-sync/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{id}",
                  "saml-group-sync",
                  "{slug_perm}",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 6,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/orgs/{org}/vulnerability-policy/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{id}",
                  "vulnerability-policy",
                  "{slug_perm}",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 7,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "team",
                      "orig": "team",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/orgs/{org}/teams/{team}/",
                "parts": [
                  "orgs",
                  "{id}",
                  "teams",
                  "{team}",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "team",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 8,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/orgs/{org}/",
                "parts": [
                  "orgs",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 9,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "team_id",
                      "orig": "team",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/orgs/{org}/teams/{team}/members",
                "parts": [
                  "orgs",
                  "{id}",
                  "teams",
                  "{team_id}",
                  "members",
                ],
                "rename": {
                  "param": {
                    "org": "id",
                    "team": "team_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "team_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "deny_policy",
            ],
            [
              "invite",
            ],
            [
              "license_policy",
            ],
            [
              "member",
            ],
            [
              "openid_connect",
            ],
            [
              "saml_group_sync",
            ],
            [
              "service",
            ],
            [
              "team",
            ],
            [
              "vulnerability_policy",
            ],
          ],
        },
      },
      "organization_group_sync": {
        "fields": [
          {
            "active": True,
            "name": "idp_key",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "idp_value",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "role",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "team",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
        ],
        "name": "organization_group_sync",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/saml-group-sync/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "saml-group-sync",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/saml-group-sync/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "saml-group-sync",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
            ],
          ],
        },
      },
      "organization_group_sync_status": {
        "fields": [
          {
            "active": True,
            "name": "saml_group_sync_status",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
        ],
        "name": "organization_group_sync_status",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/saml-group-sync/status/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "saml-group-sync",
                  "status",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
            ],
          ],
        },
      },
      "organization_invite": {
        "fields": [
          {
            "active": True,
            "name": "email",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "expires_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "inviter",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "inviter_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "org",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "role",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "team",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "user",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "user_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "organization_invite",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/invites/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "invites",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/invites/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "invites",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/orgs/{org}/invites/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "invites",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
            ],
          ],
        },
      },
      "organization_invite_extend": {
        "fields": [
          {
            "active": True,
            "name": "email",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "expires_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "inviter",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "inviter_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "org",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "role",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "team",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "user",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "user_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "organization_invite_extend",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/invites/{slug_perm}/extend/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "invites",
                  "{slug_perm}",
                  "extend",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/invites/{slug_perm}/resend/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "invites",
                  "{slug_perm}",
                  "resend",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
              "invite",
            ],
          ],
        },
      },
      "organization_membership": {
        "fields": [
          {
            "active": True,
            "name": "email",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "has_two_factor",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "joined_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "last_login_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "last_login_method",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "role",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "user",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "user_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "user_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "user_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "visibility",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
        ],
        "name": "organization_membership",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "is_active",
                      "orig": "is_active",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/members/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "members",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "is_active",
                    "org_id",
                    "page",
                    "page_size",
                    "query",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "member",
                      "orig": "member",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/members/{member}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "members",
                  "{member}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "member",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "member",
                      "orig": "member",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/orgs/{org}/members/{member}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "members",
                  "{member}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "member",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
            ],
            [
              "org",
              "member",
            ],
          ],
        },
      },
      "organization_membership_role_update": {
        "fields": [
          {
            "active": True,
            "name": "email",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "has_two_factor",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "joined_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "last_login_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "last_login_method",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "role",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "user",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "user_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "user_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "user_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "visibility",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
        ],
        "name": "organization_membership_role_update",
        "op": {
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "member_id",
                      "orig": "member",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/orgs/{org}/members/{member}/update-role/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "members",
                  "{member_id}",
                  "update-role",
                ],
                "rename": {
                  "param": {
                    "member": "member_id",
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "member_id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
              "member",
            ],
          ],
        },
      },
      "organization_membership_visibility_update": {
        "fields": [
          {
            "active": True,
            "name": "email",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "has_two_factor",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "joined_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "last_login_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "last_login_method",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "role",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "user",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "user_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "user_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "user_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "visibility",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
        ],
        "name": "organization_membership_visibility_update",
        "op": {
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "member_id",
                      "orig": "member",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/orgs/{org}/members/{member}/update-visibility/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "members",
                  "{member_id}",
                  "update-visibility",
                ],
                "rename": {
                  "param": {
                    "member": "member_id",
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "member_id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
              "member",
            ],
          ],
        },
      },
      "organization_package_license_policy": {
        "fields": [
          {
            "active": True,
            "name": "allow_unknown_license",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "on_violation_quarantine",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "package_query_string",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "spdx_identifier",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
        ],
        "name": "organization_package_license_policy",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/license-policy/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "license-policy",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/license-policy/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "license-policy",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/license-policy/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "license-policy",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/orgs/{org}/license-policy/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "license-policy",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/orgs/{org}/license-policy/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "license-policy",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
            ],
          ],
        },
      },
      "organization_package_vulnerability_policy": {
        "fields": [
          {
            "active": True,
            "name": "allow_unknown_severity",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "min_severity",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "on_violation_quarantine",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "package_query_string",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
        ],
        "name": "organization_package_vulnerability_policy",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/vulnerability-policy/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/vulnerability-policy/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/vulnerability-policy/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/orgs/{org}/vulnerability-policy/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/orgs/{org}/vulnerability-policy/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
            ],
          ],
        },
      },
      "organization_saml_auth": {
        "fields": [
          {
            "active": True,
            "name": "saml_auth_enabled",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "saml_auth_enforced",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "saml_metadata_inline",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "saml_metadata_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "organization_saml_auth",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/saml-authentication",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "saml-authentication",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/orgs/{org}/saml-authentication",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "saml-authentication",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
            ],
          ],
        },
      },
      "organization_team": {
        "fields": [
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "slug",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "visibility",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
        ],
        "name": "organization_team",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/teams/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "teams",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "for_user",
                      "orig": "for_user",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/teams/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "teams",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "for_user",
                    "org_id",
                    "page",
                    "page_size",
                    "query",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "team",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/teams/{team}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "teams",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "team": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "team",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/orgs/{org}/teams/{team}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "teams",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "team": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
            ],
          ],
        },
      },
      "organization_team_member": {
        "fields": [
          {
            "active": True,
            "name": "role",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "user",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "organization_team_member",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "team_id",
                      "orig": "team",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/teams/{team}/members",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "teams",
                  "{team_id}",
                  "members",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "team": "team_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "org_id",
                    "team_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "team_id",
                      "orig": "team",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/teams/{team}/members",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "teams",
                  "{team_id}",
                  "members",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "team": "team_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                    "team_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
              "team",
            ],
          ],
        },
      },
      "oss": {
        "fields": [],
        "name": "oss",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "p2n": {
        "fields": [],
        "name": "p2n",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "p2n2": {
        "fields": [],
        "name": "p2n2",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "package": {
        "fields": [
          {
            "active": True,
            "name": "architecture",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "backend_kind",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "cdn_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "checksum_md5",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "checksum_sha1",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "checksum_sha256",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "checksum_sha512",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "count",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "dep_type",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "dependencies_checksum_md5",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "dependencies_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "display_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "distro",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "distro_version",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "download",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "epoch",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "extension",
            "req": False,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "file",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "filename",
            "req": False,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "format",
            "req": False,
            "type": "`$STRING`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "format_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "freeable_storage",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "fully_qualified_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "identifier",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "identifier_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "indexed",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "is_cancellable",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "is_copyable",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 28,
          },
          {
            "active": True,
            "name": "is_deleteable",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 29,
          },
          {
            "active": True,
            "name": "is_downloadable",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 30,
          },
          {
            "active": True,
            "name": "is_moveable",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 31,
          },
          {
            "active": True,
            "name": "is_quarantinable",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 32,
          },
          {
            "active": True,
            "name": "is_quarantined",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 33,
          },
          {
            "active": True,
            "name": "is_resyncable",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 34,
          },
          {
            "active": True,
            "name": "is_security_scannable",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 35,
          },
          {
            "active": True,
            "name": "is_sync_awaiting",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 36,
          },
          {
            "active": True,
            "name": "is_sync_completed",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 37,
          },
          {
            "active": True,
            "name": "is_sync_failed",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 38,
          },
          {
            "active": True,
            "name": "is_sync_in_flight",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 39,
          },
          {
            "active": True,
            "name": "is_sync_in_progress",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 40,
          },
          {
            "active": True,
            "name": "last_push",
            "req": True,
            "type": "`$STRING`",
            "index$": 41,
          },
          {
            "active": True,
            "name": "license",
            "req": False,
            "type": "`$STRING`",
            "index$": 42,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 43,
          },
          {
            "active": True,
            "name": "namespace",
            "req": False,
            "type": "`$STRING`",
            "index$": 44,
          },
          {
            "active": True,
            "name": "namespace_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 45,
          },
          {
            "active": True,
            "name": "num_download",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 46,
          },
          {
            "active": True,
            "name": "num_file",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 47,
          },
          {
            "active": True,
            "name": "operator",
            "req": False,
            "type": "`$STRING`",
            "index$": 48,
          },
          {
            "active": True,
            "name": "origin_repository",
            "req": False,
            "type": "`$STRING`",
            "index$": 49,
          },
          {
            "active": True,
            "name": "origin_repository_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 50,
          },
          {
            "active": True,
            "name": "package",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 51,
          },
          {
            "active": True,
            "name": "package_type",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 52,
          },
          {
            "active": True,
            "name": "policy_violated",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 53,
          },
          {
            "active": True,
            "name": "release",
            "req": False,
            "type": "`$STRING`",
            "index$": 54,
          },
          {
            "active": True,
            "name": "repository",
            "req": False,
            "type": "`$STRING`",
            "index$": 55,
          },
          {
            "active": True,
            "name": "repository_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 56,
          },
          {
            "active": True,
            "name": "security_scan_completed_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 57,
          },
          {
            "active": True,
            "name": "security_scan_started_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 58,
          },
          {
            "active": True,
            "name": "security_scan_status",
            "req": False,
            "type": "`$STRING`",
            "index$": 59,
          },
          {
            "active": True,
            "name": "security_scan_status_updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 60,
          },
          {
            "active": True,
            "name": "self_html_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 61,
          },
          {
            "active": True,
            "name": "self_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 62,
          },
          {
            "active": True,
            "name": "signature_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 63,
          },
          {
            "active": True,
            "name": "size",
            "op": {
              "list": {
                "req": True,
                "type": "`$INTEGER`",
              },
            },
            "req": False,
            "type": "`$INTEGER`",
            "index$": 64,
          },
          {
            "active": True,
            "name": "slug",
            "req": False,
            "type": "`$STRING`",
            "index$": 65,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 66,
          },
          {
            "active": True,
            "name": "stage",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 67,
          },
          {
            "active": True,
            "name": "stage_str",
            "req": False,
            "type": "`$STRING`",
            "index$": 68,
          },
          {
            "active": True,
            "name": "stage_updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 69,
          },
          {
            "active": True,
            "name": "status",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 70,
          },
          {
            "active": True,
            "name": "status_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 71,
          },
          {
            "active": True,
            "name": "status_str",
            "req": False,
            "type": "`$STRING`",
            "index$": 72,
          },
          {
            "active": True,
            "name": "status_updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 73,
          },
          {
            "active": True,
            "name": "status_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 74,
          },
          {
            "active": True,
            "name": "subtype",
            "req": False,
            "type": "`$STRING`",
            "index$": 75,
          },
          {
            "active": True,
            "name": "summary",
            "req": False,
            "type": "`$STRING`",
            "index$": 76,
          },
          {
            "active": True,
            "name": "sync_finished_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 77,
          },
          {
            "active": True,
            "name": "sync_progress",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 78,
          },
          {
            "active": True,
            "name": "tag",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 79,
          },
          {
            "active": True,
            "name": "tags_immutable",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 80,
          },
          {
            "active": True,
            "name": "type_display",
            "req": False,
            "type": "`$STRING`",
            "index$": 81,
          },
          {
            "active": True,
            "name": "uploaded_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 82,
          },
          {
            "active": True,
            "name": "uploader",
            "req": False,
            "type": "`$STRING`",
            "index$": 83,
          },
          {
            "active": True,
            "name": "uploader_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 84,
          },
          {
            "active": True,
            "name": "version",
            "req": False,
            "type": "`$STRING`",
            "index$": 85,
          },
          {
            "active": True,
            "name": "version_orig",
            "req": False,
            "type": "`$STRING`",
            "index$": 86,
          },
          {
            "active": True,
            "name": "vulnerability_scan_results_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 87,
          },
        ],
        "name": "package",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/{identifier}/copy/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "copy",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/{identifier}/move/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "move",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/{identifier}/quarantine/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "quarantine",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/{identifier}/tag/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "tag",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 3,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/alpine/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "alpine",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 4,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/cargo/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "cargo",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 5,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/cocoapods/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "cocoapods",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 6,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/composer/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "composer",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 7,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/conan/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "conan",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 8,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/conda/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "conda",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 9,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/cran/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "cran",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 10,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/dart/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "dart",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 11,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/deb/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "deb",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 12,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/docker/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "docker",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 13,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/go/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "go",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 14,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/helm/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "helm",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 15,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/hex/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "hex",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 16,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/huggingface/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "huggingface",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 17,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/luarocks/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "luarocks",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 18,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/maven/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "maven",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 19,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/npm/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "npm",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 20,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/nuget/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "nuget",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 21,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/p2/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "p2",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 22,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/python/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "python",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 23,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/raw/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "raw",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 24,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/rpm/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "rpm",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 25,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/ruby/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "ruby",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 26,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/swift/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "swift",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 27,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/terraform/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "terraform",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 28,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/upload/vagrant/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "vagrant",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 29,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/alpine/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "alpine",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 30,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/cargo/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "cargo",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 31,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/cocoapods/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "cocoapods",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 32,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/composer/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "composer",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 33,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/conan/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "conan",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 34,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/conda/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "conda",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 35,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/cran/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "cran",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 36,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/dart/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "dart",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 37,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/deb/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "deb",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 38,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/docker/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "docker",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 39,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/go/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "go",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 40,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/helm/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "helm",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 41,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/hex/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "hex",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 42,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/huggingface/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "huggingface",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 43,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/luarocks/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "luarocks",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 44,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/maven/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "maven",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 45,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/npm/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "npm",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 46,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/nuget/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "nuget",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 47,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/p2/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "p2",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 48,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/python/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "python",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 49,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/raw/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "raw",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 50,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/rpm/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "rpm",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 51,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/ruby/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "ruby",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 52,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/swift/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "swift",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 53,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/terraform/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "terraform",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 54,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/validate-upload/vagrant/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "vagrant",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 55,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/{identifier}/resync/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "resync",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 56,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/packages/{owner}/{repo}/{identifier}/scan/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "scan",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 57,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "group_by",
                      "orig": "group_by",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/packages/{owner}/{repo}/groups/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "groups",
                ],
                "select": {
                  "exist": [
                    "group_by",
                    "owner",
                    "page",
                    "page_size",
                    "query",
                    "repo",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/packages/{owner}/{repo}/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                ],
                "select": {
                  "exist": [
                    "owner",
                    "page",
                    "page_size",
                    "query",
                    "repo",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/packages/{owner}/{repo}/{identifier}/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/packages/{owner}/{repo}/{identifier}/dependencies/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "dependencies",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 3,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "finish",
                      "orig": "finish",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "package",
                      "orig": "package",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "start",
                      "orig": "start",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/metrics/packages/{owner}/{repo}/",
                "parts": [
                  "metrics",
                  "packages",
                  "{owner}",
                  "{repo}",
                ],
                "select": {
                  "exist": [
                    "finish",
                    "owner",
                    "package",
                    "page",
                    "page_size",
                    "repo",
                    "start",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/packages/{owner}/{repo}/{identifier}/status/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "status",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/packages/{owner}/{repo}/{identifier}/",
                "parts": [
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "package_deny_policy": {
        "fields": [
          {
            "active": True,
            "name": "action",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "enabled",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "package_query_string",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
        ],
        "name": "package_deny_policy",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/deny-policy/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "deny-policy",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/deny-policy/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "deny-policy",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/deny-policy/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "deny-policy",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/orgs/{org}/deny-policy/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "deny-policy",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/orgs/{org}/deny-policy/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "deny-policy",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
            ],
          ],
        },
      },
      "package_file_parts_upload": {
        "fields": [
          {
            "active": True,
            "name": "identifier",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "upload_querystring",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "upload_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "package_file_parts_upload",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "filename",
                      "orig": "filename",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "part_number",
                      "orig": "part_number",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/files/{owner}/{repo}/{identifier}/info/",
                "parts": [
                  "files",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "info",
                ],
                "select": {
                  "exist": [
                    "filename",
                    "identifier",
                    "owner",
                    "part_number",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "file",
            ],
          ],
        },
      },
      "package_file_upload": {
        "fields": [],
        "name": "package_file_upload",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/files/{owner}/{repo}/{identifier}/complete/",
                "parts": [
                  "files",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "complete",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "file",
            ],
          ],
        },
      },
      "package_license_policy_evaluation": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "evaluation_count",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "policy",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "violation_count",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
        ],
        "name": "package_license_policy_evaluation",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "policy_slug_perm",
                      "orig": "policy_slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "license-policy",
                  "{policy_slug_perm}",
                  "evaluation",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "org_id",
                    "policy_slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "policy_slug_perm",
                      "orig": "policy_slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "license-policy",
                  "{policy_slug_perm}",
                  "evaluation",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                    "page",
                    "page_size",
                    "policy_slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "license_policy_id",
                      "orig": "policy_slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "license-policy",
                  "{license_policy_id}",
                  "evaluation",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "policy_slug_perm": "license_policy_id",
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "license_policy_id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
              "license_policy",
            ],
          ],
        },
      },
      "package_version_badge": {
        "fields": [],
        "name": "package_version_badge",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "package_format",
                      "orig": "package_format",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "package_identifier",
                      "orig": "package_identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "package_name",
                      "orig": "package_name",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 3,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "package_version",
                      "orig": "package_version",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 4,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 5,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "badge_token",
                      "orig": "badge_token",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "cache_second",
                      "orig": "cache_second",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "color",
                      "orig": "color",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "label",
                      "orig": "label",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "label_color",
                      "orig": "label_color",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "logo_color",
                      "orig": "logo_color",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "logo_width",
                      "orig": "logo_width",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "render",
                      "orig": "render",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "shield",
                      "orig": "shield",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "show_latest",
                      "orig": "show_latest",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "style",
                      "orig": "style",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/badges/version/{owner}/{repo}/{package_format}/{package_name}/{package_version}/{package_identifiers}/",
                "parts": [
                  "badges",
                  "version",
                  "{owner}",
                  "{repo}",
                  "{package_format}",
                  "{package_name}",
                  "{package_version}",
                  "{package_identifier}",
                ],
                "rename": {
                  "param": {
                    "package_identifiers": "package_identifier",
                  },
                },
                "select": {
                  "exist": [
                    "badge_token",
                    "cache_second",
                    "color",
                    "label",
                    "label_color",
                    "logo_color",
                    "logo_width",
                    "owner",
                    "package_format",
                    "package_identifier",
                    "package_name",
                    "package_version",
                    "render",
                    "repo",
                    "shield",
                    "show_latest",
                    "style",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "version",
            ],
          ],
        },
      },
      "package_vulnerability_policy_evaluation": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "evaluation_count",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "policy",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "violation_count",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
        ],
        "name": "package_vulnerability_policy_evaluation",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "policy_slug_perm",
                      "orig": "policy_slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/vulnerability-policy/{policy_slug_perm}/evaluation/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                  "{policy_slug_perm}",
                  "evaluation",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "org_id",
                    "policy_slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "policy_slug_perm",
                      "orig": "policy_slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/vulnerability-policy/{policy_slug_perm}/evaluation/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                  "{policy_slug_perm}",
                  "evaluation",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                    "page",
                    "page_size",
                    "policy_slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "vulnerability_policy_id",
                      "orig": "policy_slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/vulnerability-policy/{policy_slug_perm}/evaluation/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                  "{vulnerability_policy_id}",
                  "evaluation",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "policy_slug_perm": "vulnerability_policy_id",
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "org_id",
                    "vulnerability_policy_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
              "vulnerability_policy",
            ],
          ],
        },
      },
      "privilege": {
        "fields": [],
        "name": "privilege",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "profile": {
        "fields": [],
        "name": "profile",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "provider_setting": {
        "fields": [
          {
            "active": True,
            "name": "claim",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "enabled",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "mapping_claim",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "provider_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "service_account",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "slug",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
        ],
        "name": "provider_setting",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/openid-connect/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "openid-connect",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                    "page",
                    "page_size",
                    "query",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/openid-connect/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "openid-connect",
                  "{slug_perm}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
            ],
            [
              "org",
              "openid_connect",
            ],
          ],
        },
      },
      "provider_settings_write": {
        "fields": [
          {
            "active": True,
            "name": "claim",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "dynamic_mapping",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "enabled",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "mapping_claim",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "provider_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "service_account",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "slug",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
        ],
        "name": "provider_settings_write",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/openid-connect/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "openid-connect",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/orgs/{org}/openid-connect/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "openid-connect",
                  "{slug_perm}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "org_id",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/orgs/{org}/openid-connect/{slug_perm}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "openid-connect",
                  "{slug_perm}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "org_id",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
            ],
            [
              "org",
              "openid_connect",
            ],
          ],
        },
      },
      "python": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "python",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/python/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "python",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/python/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "python",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/python/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "python",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/python/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "python",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/python/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "python",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "quarantine": {
        "fields": [],
        "name": "quarantine",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "quota": {
        "fields": [
          {
            "active": True,
            "name": "history",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "usage",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
        ],
        "name": "quota",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/quota/{owner}/",
                "parts": [
                  "quota",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "owner": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/quota/history/{owner}/",
                "parts": [
                  "quota",
                  "history",
                  "{owner}",
                ],
                "select": {
                  "exist": [
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/quota/oss/history/{owner}/",
                "parts": [
                  "quota",
                  "oss",
                  "history",
                  "{owner}",
                ],
                "select": {
                  "exist": [
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/quota/oss/{owner}/",
                "parts": [
                  "quota",
                  "oss",
                  "{owner}",
                ],
                "select": {
                  "exist": [
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 3,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "history",
            ],
            [
              "oss",
            ],
          ],
        },
      },
      "raw": {
        "fields": [],
        "name": "raw",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "refresh": {
        "fields": [],
        "name": "refresh",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "entitlement",
            ],
          ],
        },
      },
      "regenerate": {
        "fields": [],
        "name": "regenerate",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "repo": {
        "fields": [
          {
            "active": True,
            "name": "cdn_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "content_kind",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "contextual_auth_realm",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "copy_own",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "copy_package",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "cosign_signing_enabled",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "default_privilege",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "delete_own",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "delete_package",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "deleted_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "distribute",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "docker_refresh_tokens_enabled",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "ecdsa_key",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "enforce_eula",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "gpg_key",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "index_file",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "is_open_source",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "is_private",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "is_public",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "manage_entitlements_privilege",
            "req": False,
            "type": "`$STRING`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "move_own",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "move_package",
            "req": False,
            "type": "`$STRING`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "namespace",
            "req": False,
            "type": "`$STRING`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "namespace_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "nuget_native_signing_enabled",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "num_download",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 28,
          },
          {
            "active": True,
            "name": "num_policy_violated_package",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 29,
          },
          {
            "active": True,
            "name": "num_quarantined_package",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 30,
          },
          {
            "active": True,
            "name": "open_source_license",
            "req": False,
            "type": "`$STRING`",
            "index$": 31,
          },
          {
            "active": True,
            "name": "open_source_project_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 32,
          },
          {
            "active": True,
            "name": "package_count",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 33,
          },
          {
            "active": True,
            "name": "package_group_count",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 34,
          },
          {
            "active": True,
            "name": "proxy_npmj",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 35,
          },
          {
            "active": True,
            "name": "proxy_pypi",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 36,
          },
          {
            "active": True,
            "name": "raw_package_index_enabled",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 37,
          },
          {
            "active": True,
            "name": "raw_package_index_signatures_enabled",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 38,
          },
          {
            "active": True,
            "name": "replace_package",
            "req": False,
            "type": "`$STRING`",
            "index$": 39,
          },
          {
            "active": True,
            "name": "replace_packages_by_default",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 40,
          },
          {
            "active": True,
            "name": "repository_type",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 41,
          },
          {
            "active": True,
            "name": "repository_type_str",
            "req": False,
            "type": "`$STRING`",
            "index$": 42,
          },
          {
            "active": True,
            "name": "resync_own",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 43,
          },
          {
            "active": True,
            "name": "resync_package",
            "req": False,
            "type": "`$STRING`",
            "index$": 44,
          },
          {
            "active": True,
            "name": "scan_own",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 45,
          },
          {
            "active": True,
            "name": "scan_package",
            "req": False,
            "type": "`$STRING`",
            "index$": 46,
          },
          {
            "active": True,
            "name": "self_html_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 47,
          },
          {
            "active": True,
            "name": "self_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 48,
          },
          {
            "active": True,
            "name": "show_setup_all",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 49,
          },
          {
            "active": True,
            "name": "size",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 50,
          },
          {
            "active": True,
            "name": "size_str",
            "req": False,
            "type": "`$STRING`",
            "index$": 51,
          },
          {
            "active": True,
            "name": "slug",
            "req": False,
            "type": "`$STRING`",
            "index$": 52,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 53,
          },
          {
            "active": True,
            "name": "storage_region",
            "req": False,
            "type": "`$STRING`",
            "index$": 54,
          },
          {
            "active": True,
            "name": "strict_npm_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 55,
          },
          {
            "active": True,
            "name": "tag_pre_releases_as_latest",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 56,
          },
          {
            "active": True,
            "name": "use_debian_label",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 57,
          },
          {
            "active": True,
            "name": "use_default_cargo_upstream",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 58,
          },
          {
            "active": True,
            "name": "use_entitlements_privilege",
            "req": False,
            "type": "`$STRING`",
            "index$": 59,
          },
          {
            "active": True,
            "name": "use_noarch_package",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 60,
          },
          {
            "active": True,
            "name": "use_source_package",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 61,
          },
          {
            "active": True,
            "name": "use_vulnerability_scanning",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 62,
          },
          {
            "active": True,
            "name": "user_entitlements_enabled",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 63,
          },
          {
            "active": True,
            "name": "view_statistic",
            "req": False,
            "type": "`$STRING`",
            "index$": 64,
          },
        ],
        "name": "repo",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/geoip/disable/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "geoip",
                  "disable",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/geoip/enable/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "geoip",
                  "enable",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{repo}/transfer-region/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{repo}",
                  "transfer-region",
                ],
                "select": {
                  "$action": "transfer_region",
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/",
                "parts": [
                  "repos",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "owner": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 3,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/",
                "parts": [
                  "repos",
                ],
                "select": {
                  "exist": [
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/",
                "parts": [
                  "repos",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "owner": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/privileges",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "privileges",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "patch",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cargo",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/composer/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "composer",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/conda/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "conda",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/cran/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cran",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 3,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/dart/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "dart",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 4,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/deb/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "deb",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 5,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/docker/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "docker",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 6,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/go/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "go",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 7,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/helm/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "helm",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 8,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/hex/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "hex",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 9,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "huggingface",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 10,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/maven/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "maven",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 11,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/npm/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "npm",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 12,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "nuget",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 13,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/python/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "python",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 14,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "rpm",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 15,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "ruby",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 16,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/upstream/swift/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "swift",
                  "{slug_perm}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 17,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/repos/{owner}/{identifier}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 18,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/privileges",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "privileges",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
            [
              "repo",
              "cargo",
            ],
            [
              "repo",
              "composer",
            ],
            [
              "repo",
              "conda",
            ],
            [
              "repo",
              "cran",
            ],
            [
              "repo",
              "dart",
            ],
            [
              "repo",
              "deb",
            ],
            [
              "repo",
              "docker",
            ],
            [
              "repo",
              "go",
            ],
            [
              "repo",
              "helm",
            ],
            [
              "repo",
              "hex",
            ],
            [
              "repo",
              "huggingface",
            ],
            [
              "repo",
              "maven",
            ],
            [
              "repo",
              "npm",
            ],
            [
              "repo",
              "nuget",
            ],
            [
              "repo",
              "python",
            ],
            [
              "repo",
              "rpm",
            ],
            [
              "repo",
              "ruby",
            ],
            [
              "repo",
              "swift",
            ],
          ],
        },
      },
      "repository_audit_log": {
        "fields": [
          {
            "active": True,
            "name": "actor",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "actor_ip_address",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "actor_kind",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "actor_location",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "actor_slug_perm",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "actor_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "context",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "event",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "event_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "object",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "object_kind",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "object_slug_perm",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "uuid",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
        ],
        "name": "repository_audit_log",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/audit-log/{owner}/{repo}/",
                "parts": [
                  "audit-log",
                  "{owner}",
                  "{repo}",
                ],
                "select": {
                  "exist": [
                    "owner",
                    "page",
                    "page_size",
                    "query",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "audit_log",
            ],
          ],
        },
      },
      "repository_ecdsa_key": {
        "fields": [
          {
            "active": True,
            "name": "active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "default",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "fingerprint",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "fingerprint_short",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "public_key",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "ssh_fingerprint",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
        ],
        "name": "repository_ecdsa_key",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/ecdsa/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "ecdsa",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/ecdsa/regenerate/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "ecdsa",
                  "regenerate",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/ecdsa/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "ecdsa",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "repository_geo_ip_rule": {
        "fields": [
          {
            "active": True,
            "name": "cidr",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "country_code",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
        ],
        "name": "repository_geo_ip_rule",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/geoip",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "geoip",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/geoip",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "geoip",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/geoip",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "geoip",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "repository_geo_ip_status": {
        "fields": [
          {
            "active": True,
            "name": "geoip_enabled",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
        ],
        "name": "repository_geo_ip_status",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/geoip/status/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "geoip",
                  "status",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "repository_geo_ip_test_address": {
        "fields": [],
        "name": "repository_geo_ip_test_address",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/geoip/test/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "geoip",
                  "test",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "repository_gpg_key": {
        "fields": [
          {
            "active": True,
            "name": "active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "comment",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "default",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "fingerprint",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "fingerprint_short",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "public_key",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
        ],
        "name": "repository_gpg_key",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/gpg/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "gpg",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/gpg/regenerate/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "gpg",
                  "regenerate",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/gpg/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "gpg",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "repository_privilege_input": {
        "fields": [
          {
            "active": True,
            "name": "privilege",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "service",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "team",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "user",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "repository_privilege_input",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/privileges",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "privileges",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "repository_retention_rule": {
        "fields": [
          {
            "active": True,
            "name": "retention_count_limit",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "retention_days_limit",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "retention_enabled",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "retention_group_by_format",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "retention_group_by_name",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "retention_group_by_package_type",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "retention_package_query_string",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "retention_size_limit",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 7,
          },
        ],
        "name": "repository_retention_rule",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{repo}/retention/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{repo}",
                  "retention",
                ],
                "select": {
                  "exist": [
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{repo}/retention/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{repo}",
                  "retention",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "repository_rsa_key": {
        "fields": [
          {
            "active": True,
            "name": "active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "default",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "fingerprint",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "fingerprint_short",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "public_key",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "ssh_fingerprint",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
        ],
        "name": "repository_rsa_key",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/rsa/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "rsa",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/rsa/regenerate/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "rsa",
                  "regenerate",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/rsa/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "rsa",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "repository_token": {
        "fields": [
          {
            "active": True,
            "name": "client",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "created_by",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_by_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "default",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "disable_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "download",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "enable_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "eula_accepted",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "eula_accepted_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "eula_accepted_from",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "eula_required",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "has_limit",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "identifier",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "is_limited",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "limit_bandwidth",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "limit_bandwidth_unit",
            "req": False,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "limit_date_range_from",
            "req": False,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "limit_date_range_to",
            "req": False,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "limit_num_client",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "limit_num_download",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "limit_package_query",
            "req": False,
            "type": "`$STRING`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "limit_path_query",
            "req": False,
            "type": "`$STRING`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "metadata",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "refresh_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "reset_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "scheduled_reset_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 28,
          },
          {
            "active": True,
            "name": "scheduled_reset_period",
            "req": False,
            "type": "`$STRING`",
            "index$": 29,
          },
          {
            "active": True,
            "name": "self_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 30,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 31,
          },
          {
            "active": True,
            "name": "token",
            "req": False,
            "type": "`$STRING`",
            "index$": 32,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 33,
          },
          {
            "active": True,
            "name": "updated_by",
            "req": False,
            "type": "`$STRING`",
            "index$": 34,
          },
          {
            "active": True,
            "name": "updated_by_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 35,
          },
          {
            "active": True,
            "name": "usage",
            "req": False,
            "type": "`$STRING`",
            "index$": 36,
          },
          {
            "active": True,
            "name": "user",
            "req": False,
            "type": "`$STRING`",
            "index$": 37,
          },
          {
            "active": True,
            "name": "user_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 38,
          },
        ],
        "name": "repository_token",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "show_token",
                      "orig": "show_token",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/entitlements/{owner}/{repo}/",
                "parts": [
                  "entitlements",
                  "{owner}",
                  "{repo}",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                    "show_token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "active",
                      "orig": "active",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "show_token",
                      "orig": "show_token",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/entitlements/{owner}/{repo}/",
                "parts": [
                  "entitlements",
                  "{owner}",
                  "{repo}",
                ],
                "select": {
                  "exist": [
                    "active",
                    "owner",
                    "page",
                    "page_size",
                    "query",
                    "repo",
                    "show_token",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "fuzzy",
                      "orig": "fuzzy",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "show_token",
                      "orig": "show_token",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/entitlements/{owner}/{repo}/{identifier}/",
                "parts": [
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                ],
                "select": {
                  "exist": [
                    "fuzzy",
                    "identifier",
                    "owner",
                    "repo",
                    "show_token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "show_token",
                      "orig": "show_token",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/entitlements/{owner}/{repo}/{identifier}/",
                "parts": [
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                    "show_token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "entitlement",
            ],
          ],
        },
      },
      "repository_token_refresh": {
        "fields": [
          {
            "active": True,
            "name": "client",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "created_by",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_by_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "default",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "disable_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "download",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "enable_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "eula_accepted",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "eula_accepted_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "eula_accepted_from",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "eula_required",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "has_limit",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "identifier",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "is_limited",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "limit_bandwidth",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "limit_bandwidth_unit",
            "req": False,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "limit_date_range_from",
            "req": False,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "limit_date_range_to",
            "req": False,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "limit_num_client",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "limit_num_download",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "limit_package_query",
            "req": False,
            "type": "`$STRING`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "limit_path_query",
            "req": False,
            "type": "`$STRING`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "metadata",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "refresh_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "reset_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "scheduled_reset_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 28,
          },
          {
            "active": True,
            "name": "scheduled_reset_period",
            "req": False,
            "type": "`$STRING`",
            "index$": 29,
          },
          {
            "active": True,
            "name": "self_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 30,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 31,
          },
          {
            "active": True,
            "name": "token",
            "req": False,
            "type": "`$STRING`",
            "index$": 32,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 33,
          },
          {
            "active": True,
            "name": "updated_by",
            "req": False,
            "type": "`$STRING`",
            "index$": 34,
          },
          {
            "active": True,
            "name": "updated_by_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 35,
          },
          {
            "active": True,
            "name": "usage",
            "req": False,
            "type": "`$STRING`",
            "index$": 36,
          },
          {
            "active": True,
            "name": "user",
            "req": False,
            "type": "`$STRING`",
            "index$": 37,
          },
          {
            "active": True,
            "name": "user_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 38,
          },
        ],
        "name": "repository_token_refresh",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "show_token",
                      "orig": "show_token",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/entitlements/{owner}/{repo}/{identifier}/refresh/",
                "parts": [
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "refresh",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                    "show_token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "entitlement",
            ],
          ],
        },
      },
      "repository_token_sync": {
        "fields": [
          {
            "active": True,
            "name": "token",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "repository_token_sync",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "show_token",
                      "orig": "show_token",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/entitlements/{owner}/{repo}/sync/",
                "parts": [
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "sync",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                    "show_token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "entitlement",
            ],
          ],
        },
      },
      "repository_webhook": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_by",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "created_by_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason_str",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "event",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "identifier",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "is_last_response_bad",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "last_response_status",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "last_response_status_str",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "num_sent",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "package_query",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "request_body_format",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "request_body_format_str",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "request_body_template_format",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "request_body_template_format_str",
            "req": False,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "request_content_type",
            "req": False,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "secret_header",
            "req": False,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "self_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "target_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "template",
            "op": {
              "list": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "updated_by",
            "req": False,
            "type": "`$STRING`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "updated_by_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 26,
          },
        ],
        "name": "repository_webhook",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/webhooks/{owner}/{repo}/",
                "parts": [
                  "webhooks",
                  "{owner}",
                  "{repo}",
                ],
                "select": {
                  "exist": [
                    "data",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/webhooks/{owner}/{repo}/",
                "parts": [
                  "webhooks",
                  "{owner}",
                  "{repo}",
                ],
                "select": {
                  "exist": [
                    "owner",
                    "page",
                    "page_size",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/webhooks/{owner}/{repo}/{identifier}/",
                "parts": [
                  "webhooks",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/webhooks/{owner}/{repo}/{identifier}/",
                "parts": [
                  "webhooks",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "webhook",
            ],
          ],
        },
      },
      "repository_x509_ecdsa_certificate": {
        "fields": [
          {
            "active": True,
            "name": "active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "certificate",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "certificate_chain",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "certificate_chain_fingerprint",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "certificate_chain_fingerprint_short",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "certificate_fingerprint",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "certificate_fingerprint_short",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "default",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "issuing_status",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "repository_x509_ecdsa_certificate",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/x509-ecdsa/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "x509-ecdsa",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "repository_x509_rsa_certificate": {
        "fields": [
          {
            "active": True,
            "name": "active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "certificate",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "certificate_chain",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "certificate_chain_fingerprint",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "certificate_chain_fingerprint_short",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "certificate_fingerprint",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "certificate_fingerprint_short",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "default",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "issuing_status",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "repository_x509_rsa_certificate",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/x509-rsa/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "x509-rsa",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "reset": {
        "fields": [],
        "name": "reset",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "entitlement",
            ],
          ],
        },
      },
      "resources_rate_check": {
        "fields": [
          {
            "active": True,
            "name": "resource",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
        ],
        "name": "resources_rate_check",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/rates/limits/",
                "parts": [
                  "rates",
                  "limits",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "resync": {
        "fields": [],
        "name": "resync",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "retention": {
        "fields": [],
        "name": "retention",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "rpm": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "distro_version",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "gpg_key_inline",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "gpg_key_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "gpg_verification",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "include_source",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "verification_status",
            "req": False,
            "type": "`$STRING`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 23,
          },
        ],
        "name": "rpm",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/rpm/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "rpm",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/rpm/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "rpm",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "rpm",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "rpm",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "rpm",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "rsa": {
        "fields": [],
        "name": "rsa",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "ruby": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "ruby",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/ruby/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "ruby",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/ruby/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "ruby",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "ruby",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "ruby",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "ruby",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "saml_group_sync": {
        "fields": [],
        "name": "saml_group_sync",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "org",
            ],
          ],
        },
      },
      "scan": {
        "fields": [],
        "name": "scan",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "self": {
        "fields": [],
        "name": "self",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "service": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_by",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "created_by_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "key",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "key_expires_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "role",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "slug",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "team",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 9,
          },
        ],
        "name": "service",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/services/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "services",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "service",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/orgs/{org}/services/{service}/refresh/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "services",
                  "{id}",
                  "refresh",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "service": "id",
                  },
                },
                "select": {
                  "$action": "refresh",
                  "exist": [
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/services/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "services",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                  },
                },
                "select": {
                  "exist": [
                    "org_id",
                    "page",
                    "page_size",
                    "query",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "service",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/orgs/{org}/services/{service}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "services",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "service": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "service",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "org_id",
                      "orig": "org",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/orgs/{org}/services/{service}/",
                "parts": [
                  "orgs",
                  "{org_id}",
                  "services",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "org": "org_id",
                    "service": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "org_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "org",
            ],
          ],
        },
      },
      "status": {
        "fields": [],
        "name": "status",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "org",
            ],
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "status_basic": {
        "fields": [
          {
            "active": True,
            "name": "detail",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "version",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "status_basic",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/status/check/basic/",
                "parts": [
                  "status",
                  "check",
                  "basic",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "storage_region": {
        "fields": [
          {
            "active": True,
            "name": "label",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "slug",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "storage_region",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/storage-regions/",
                "parts": [
                  "storage-regions",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/storage-regions/{slug}/",
                "parts": [
                  "storage-regions",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "swift": {
        "fields": [
          {
            "active": True,
            "name": "auth_mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auth_secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auth_username",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disable_reason",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "extra_header_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "extra_header_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "extra_value_1",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "extra_value_2",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "pending_validation",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "priority",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "upstream_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "verify_ssl",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
        ],
        "name": "swift",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/repos/{owner}/{identifier}/upstream/swift/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "swift",
                ],
                "select": {
                  "exist": [
                    "data",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/swift/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "swift",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/repos/{owner}/{identifier}/upstream/swift/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "swift",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "patch": {
            "input": "data",
            "name": "patch",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PATCH",
                "orig": "/repos/{owner}/{identifier}/upstream/swift/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "swift",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "patch",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/repos/{owner}/{identifier}/upstream/swift/{slug_perm}/",
                "parts": [
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "swift",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug_perm": "id",
                  },
                },
                "select": {
                  "exist": [
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "package",
            ],
            [
              "repo",
            ],
          ],
        },
      },
      "sync": {
        "fields": [],
        "name": "sync",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "entitlement",
            ],
          ],
        },
      },
      "tag": {
        "fields": [],
        "name": "tag",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "team": {
        "fields": [],
        "name": "team",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "org",
            ],
          ],
        },
      },
      "terraform": {
        "fields": [],
        "name": "terraform",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "test": {
        "fields": [],
        "name": "test",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "token": {
        "fields": [],
        "name": "token",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "token",
            ],
          ],
        },
      },
      "transfer_region": {
        "fields": [],
        "name": "transfer_region",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "user": {
        "fields": [
          {
            "active": True,
            "name": "created",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "key",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "user",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/user/tokens/",
                "parts": [
                  "user",
                  "tokens",
                ],
                "select": {
                  "$action": "token",
                  "exist": [
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "user_auth_token": {
        "fields": [],
        "name": "user_auth_token",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "POST",
                "orig": "/user/token/",
                "parts": [
                  "user",
                  "token",
                ],
                "select": {
                  "exist": [
                    "data",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "user_authentication_token": {
        "fields": [
          {
            "active": True,
            "name": "created",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "key",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "user_authentication_token",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/user/tokens/",
                "parts": [
                  "user",
                  "tokens",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "slug_perm",
                      "orig": "slug_perm",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/user/tokens/{slug_perm}/refresh/",
                "parts": [
                  "user",
                  "tokens",
                  "{slug_perm}",
                  "refresh",
                ],
                "select": {
                  "exist": [
                    "slug_perm",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "token",
            ],
          ],
        },
      },
      "user_brief": {
        "fields": [
          {
            "active": True,
            "name": "authenticated",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "email",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "profile_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "self_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "slug",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
        ],
        "name": "user_brief",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/user/self/",
                "parts": [
                  "user",
                  "self",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "user_profile": {
        "fields": [
          {
            "active": True,
            "name": "company",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "first_name",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "job_title",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "joined_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "last_name",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "slug",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "slug_perm",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "tagline",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "url",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "user_profile",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/users/profile/{slug}/",
                "parts": [
                  "users",
                  "profile",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "vagrant": {
        "fields": [],
        "name": "vagrant",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "package",
            ],
          ],
        },
      },
      "validate": {
        "fields": [],
        "name": "validate",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "file",
            ],
          ],
        },
      },
      "version": {
        "fields": [],
        "name": "version",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "version",
            ],
          ],
        },
      },
      "vulnerability": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "has_vulnerability",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "identifier",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "max_severity",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "num_vulnerability",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "package",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "result",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "scan_id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "target",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "type",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "vulnerability",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "package",
                      "orig": "package",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/vulnerabilities/{owner}/{repo}/{package}/",
                "parts": [
                  "vulnerabilities",
                  "{owner}",
                  "{repo}",
                  "{package}",
                ],
                "select": {
                  "exist": [
                    "owner",
                    "package",
                    "page",
                    "page_size",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "package",
                      "orig": "package",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 3,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/vulnerabilities/{owner}/{repo}/{package}/{identifier}/",
                "parts": [
                  "vulnerabilities",
                  "{owner}",
                  "{repo}",
                  "{package}",
                  "{identifier}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "package",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/vulnerabilities/{owner}/{repo}/",
                "parts": [
                  "vulnerabilities",
                  "{owner}",
                  "{repo}",
                ],
                "select": {
                  "exist": [
                    "owner",
                    "page",
                    "page_size",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/vulnerabilities/{owner}/",
                "parts": [
                  "vulnerabilities",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "owner": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "vulnerability",
            ],
          ],
        },
      },
      "vulnerability_policy": {
        "fields": [],
        "name": "vulnerability_policy",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "org",
            ],
            [
              "org",
              "vulnerability_policy",
            ],
          ],
        },
      },
      "webhook": {
        "fields": [],
        "name": "webhook",
        "op": {
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 1,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$ANY`",
                      "index$": 2,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/webhooks/{owner}/{repo}/{identifier}/",
                "parts": [
                  "webhooks",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                ],
                "select": {
                  "exist": [
                    "identifier",
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [
            [
              "webhook",
            ],
          ],
        },
      },
      "x509_ecdsa": {
        "fields": [],
        "name": "x509_ecdsa",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
      "x509_rsa": {
        "fields": [],
        "name": "x509_rsa",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
    },
    }
