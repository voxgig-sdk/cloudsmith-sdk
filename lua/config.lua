-- Cloudsmith SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Cloudsmith",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api.cloudsmith.io",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["abort"] = {},
        ["alpine"] = {},
        ["audit_log"] = {},
        ["basic"] = {},
        ["cargo"] = {},
        ["cocoapod"] = {},
        ["complete"] = {},
        ["composer"] = {},
        ["conan"] = {},
        ["conda"] = {},
        ["copy"] = {},
        ["cran"] = {},
        ["dart"] = {},
        ["deb"] = {},
        ["deny_policy"] = {},
        ["dependency"] = {},
        ["disable"] = {},
        ["distribution_full"] = {},
        ["distro"] = {},
        ["docker"] = {},
        ["dynamic_mapping"] = {},
        ["ecdsa"] = {},
        ["enable"] = {},
        ["entitlement"] = {},
        ["evaluation"] = {},
        ["file"] = {},
        ["format"] = {},
        ["geoip"] = {},
        ["gon"] = {},
        ["gpg"] = {},
        ["group"] = {},
        ["helm"] = {},
        ["hex"] = {},
        ["history"] = {},
        ["huggingface"] = {},
        ["info"] = {},
        ["invite"] = {},
        ["license_policy"] = {},
        ["limit"] = {},
        ["luarock"] = {},
        ["maven"] = {},
        ["member"] = {},
        ["move"] = {},
        ["namespace"] = {},
        ["namespace_audit_log"] = {},
        ["npm"] = {},
        ["nuget"] = {},
        ["openid_connect"] = {},
        ["org"] = {},
        ["organization_group_sync"] = {},
        ["organization_group_sync_status"] = {},
        ["organization_invite"] = {},
        ["organization_invite_extend"] = {},
        ["organization_membership"] = {},
        ["organization_membership_role_update"] = {},
        ["organization_membership_visibility_update"] = {},
        ["organization_package_license_policy"] = {},
        ["organization_package_vulnerability_policy"] = {},
        ["organization_saml_auth"] = {},
        ["organization_team"] = {},
        ["organization_team_member"] = {},
        ["oss"] = {},
        ["p2n"] = {},
        ["package"] = {},
        ["package_deny_policy"] = {},
        ["package_file_parts_upload"] = {},
        ["package_file_upload"] = {},
        ["package_license_policy_evaluation"] = {},
        ["package_version_badge"] = {},
        ["package_vulnerability_policy_evaluation"] = {},
        ["privilege"] = {},
        ["profile"] = {},
        ["provider_setting"] = {},
        ["provider_settings_write"] = {},
        ["python"] = {},
        ["quarantine"] = {},
        ["quota"] = {},
        ["raw"] = {},
        ["refresh"] = {},
        ["regenerate"] = {},
        ["repo"] = {},
        ["repository_audit_log"] = {},
        ["repository_ecdsa_key"] = {},
        ["repository_geo_ip_rule"] = {},
        ["repository_geo_ip_status"] = {},
        ["repository_geo_ip_test_address"] = {},
        ["repository_gpg_key"] = {},
        ["repository_privilege_input"] = {},
        ["repository_retention_rule"] = {},
        ["repository_rsa_key"] = {},
        ["repository_token"] = {},
        ["repository_token_refresh"] = {},
        ["repository_token_sync"] = {},
        ["repository_webhook"] = {},
        ["repository_x509_ecdsa_certificate"] = {},
        ["repository_x509_rsa_certificate"] = {},
        ["reset"] = {},
        ["resources_rate_check"] = {},
        ["resync"] = {},
        ["retention"] = {},
        ["rpm"] = {},
        ["rsa"] = {},
        ["ruby"] = {},
        ["saml_group_sync"] = {},
        ["scan"] = {},
        ["self"] = {},
        ["service"] = {},
        ["status"] = {},
        ["status_basic"] = {},
        ["storage_region"] = {},
        ["swift"] = {},
        ["sync"] = {},
        ["tag"] = {},
        ["team"] = {},
        ["terraform"] = {},
        ["test"] = {},
        ["token"] = {},
        ["transfer_region"] = {},
        ["user"] = {},
        ["user_auth_token"] = {},
        ["user_authentication_token"] = {},
        ["user_brief"] = {},
        ["user_profile"] = {},
        ["vagrant"] = {},
        ["validate"] = {},
        ["version"] = {},
        ["vulnerability"] = {},
        ["vulnerability_policy"] = {},
        ["webhook"] = {},
        ["x509_ecdsa"] = {},
        ["x509_rsa"] = {},
      },
    },
    entity = {
      ["abort"] = {
        ["fields"] = {},
        ["name"] = "abort",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "file",
            },
          },
        },
      },
      ["alpine"] = {
        ["fields"] = {},
        ["name"] = "alpine",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["audit_log"] = {
        ["fields"] = {},
        ["name"] = "audit_log",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "audit_log",
            },
          },
        },
      },
      ["basic"] = {
        ["fields"] = {},
        ["name"] = "basic",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["cargo"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "cargo",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/cargo/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cargo",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/cargo/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cargo",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cargo",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cargo",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cargo",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["cocoapod"] = {
        ["fields"] = {},
        ["name"] = "cocoapod",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["complete"] = {
        ["fields"] = {},
        ["name"] = "complete",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "file",
            },
          },
        },
      },
      ["composer"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "composer",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/composer/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "composer",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/composer/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "composer",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/composer/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "composer",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/composer/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "composer",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/composer/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "composer",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["conan"] = {
        ["fields"] = {},
        ["name"] = "conan",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["conda"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "conda",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/conda/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "conda",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/conda/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "conda",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/conda/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "conda",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/conda/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "conda",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/conda/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "conda",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["copy"] = {
        ["fields"] = {},
        ["name"] = "copy",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["cran"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "cran",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/cran/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cran",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/cran/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cran",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/cran/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cran",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/cran/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cran",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/cran/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cran",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["dart"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "dart",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/dart/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "dart",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/dart/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "dart",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/dart/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "dart",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/dart/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "dart",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/dart/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "dart",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["deb"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "component",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "distro_versions",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gpg_key_inline",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gpg_key_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gpg_verification",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "include_sources",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_distribution",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verification_status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "deb",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/deb/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "deb",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/deb/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "deb",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/deb/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "deb",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/deb/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "deb",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/deb/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "deb",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["deny_policy"] = {
        ["fields"] = {},
        ["name"] = "deny_policy",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
          },
        },
      },
      ["dependency"] = {
        ["fields"] = {},
        ["name"] = "dependency",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["disable"] = {
        ["fields"] = {},
        ["name"] = "disable",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "entitlement",
            },
            {
              "org",
            },
            {
              "repo",
            },
          },
        },
      },
      ["distribution_full"] = {
        ["fields"] = {
          {
            ["name"] = "format",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "format_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "self_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "variants",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "versions",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "distribution_full",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/distros/",
                ["parts"] = {
                  "distros",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "slug",
                      ["orig"] = "slug",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/distros/{slug}/",
                ["parts"] = {
                  "distros",
                  "{slug}",
                },
                ["select"] = {
                  ["exist"] = {
                    "slug",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "distro",
            },
          },
        },
      },
      ["distro"] = {
        ["fields"] = {},
        ["name"] = "distro",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["docker"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "docker",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/docker/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "docker",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/docker/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "docker",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/docker/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "docker",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/docker/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "docker",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/docker/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "docker",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["dynamic_mapping"] = {
        ["fields"] = {
          {
            ["name"] = "claim_value",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "service_account",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "dynamic_mapping",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "provider_setting",
                      ["orig"] = "provider_setting",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "openid-connect",
                  "{provider_setting}",
                  "dynamic-mappings",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                    "page",
                    "page_size",
                    "provider_setting",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "claim_value",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "openid_connect_id",
                      ["orig"] = "provider_setting",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/{claim_value}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "openid-connect",
                  "{openid_connect_id}",
                  "dynamic-mappings",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["claim_value"] = "id",
                    ["org"] = "org_id",
                    ["provider_setting"] = "openid_connect_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "openid_connect_id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
              "openid_connect",
            },
          },
        },
      },
      ["ecdsa"] = {
        ["fields"] = {},
        ["name"] = "ecdsa",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["enable"] = {
        ["fields"] = {},
        ["name"] = "enable",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "entitlement",
            },
            {
              "org",
            },
            {
              "repo",
            },
          },
        },
      },
      ["entitlement"] = {
        ["fields"] = {
          {
            ["name"] = "active",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "bandwidth",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "downloads",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "inactive",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "total",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "entitlement",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "show_token",
                      ["orig"] = "show_token",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/entitlements/{owner}/{repo}/{identifier}/reset/",
                ["parts"] = {
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "reset",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "repo",
                    "show_token",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/entitlements/{owner}/{repo}/{identifier}/disable/",
                ["parts"] = {
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "disable",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/entitlements/{owner}/{repo}/{identifier}/enable/",
                ["parts"] = {
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "enable",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "finish",
                      ["orig"] = "finish",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "start",
                      ["orig"] = "start",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "token",
                      ["orig"] = "token",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/metrics/entitlements/{owner}/{repo}/",
                ["parts"] = {
                  "metrics",
                  "entitlements",
                  "{owner}",
                  "{repo}",
                },
                ["select"] = {
                  ["exist"] = {
                    "finish",
                    "owner",
                    "page",
                    "page_size",
                    "repo",
                    "start",
                    "token",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.tokens`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "finish",
                      ["orig"] = "finish",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "start",
                      ["orig"] = "start",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "token",
                      ["orig"] = "token",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/metrics/entitlements/{owner}/",
                ["parts"] = {
                  "metrics",
                  "entitlements",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["owner"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "finish",
                    "id",
                    "page",
                    "page_size",
                    "start",
                    "token",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.tokens`",
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/entitlements/{owner}/{repo}/{identifier}/",
                ["parts"] = {
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "entitlement",
            },
          },
        },
      },
      ["evaluation"] = {
        ["fields"] = {},
        ["name"] = "evaluation",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
              "license_policy",
            },
            {
              "org",
              "vulnerability_policy",
            },
          },
        },
      },
      ["file"] = {
        ["fields"] = {},
        ["name"] = "file",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/files/{owner}/{repo}/{identifier}/abort/",
                ["parts"] = {
                  "files",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "abort",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/files/{owner}/{repo}/",
                ["parts"] = {
                  "files",
                  "{owner}",
                  "{repo}",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/files/{owner}/{repo}/validate/",
                ["parts"] = {
                  "files",
                  "{owner}",
                  "{repo}",
                  "validate",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "file",
            },
          },
        },
      },
      ["format"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "distributions",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "extensions",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "premium",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "premium_plan_id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "premium_plan_name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "supports",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "format",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/formats/",
                ["parts"] = {
                  "formats",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/formats/{slug}/",
                ["parts"] = {
                  "formats",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["geoip"] = {
        ["fields"] = {},
        ["name"] = "geoip",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["gon"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "gon",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/go/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "go",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/go/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "go",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/go/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "go",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/go/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "go",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/go/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "go",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
            {
              "repo",
              "go",
            },
          },
        },
      },
      ["gpg"] = {
        ["fields"] = {},
        ["name"] = "gpg",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["group"] = {
        ["fields"] = {},
        ["name"] = "group",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["helm"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "helm",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/helm/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "helm",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/helm/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "helm",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/helm/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "helm",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/helm/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "helm",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/helm/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "helm",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["hex"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "hex",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/hex/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "hex",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/hex/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "hex",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/hex/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "hex",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/hex/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "hex",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/hex/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "hex",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["history"] = {
        ["fields"] = {},
        ["name"] = "history",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["huggingface"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "huggingface",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/huggingface/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "huggingface",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/huggingface/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "huggingface",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "huggingface",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "huggingface",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "huggingface",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["info"] = {
        ["fields"] = {},
        ["name"] = "info",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "file",
            },
          },
        },
      },
      ["invite"] = {
        ["fields"] = {},
        ["name"] = "invite",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
            {
              "org",
              "invite",
            },
          },
        },
      },
      ["license_policy"] = {
        ["fields"] = {},
        ["name"] = "license_policy",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
            {
              "org",
              "license_policy",
            },
          },
        },
      },
      ["limit"] = {
        ["fields"] = {},
        ["name"] = "limit",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["luarock"] = {
        ["fields"] = {},
        ["name"] = "luarock",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["maven"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gpg_key_inline",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gpg_key_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gpg_verification",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verification_status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "maven",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/maven/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "maven",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/maven/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "maven",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/maven/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "maven",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/maven/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "maven",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/maven/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "maven",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["member"] = {
        ["fields"] = {},
        ["name"] = "member",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
          },
        },
      },
      ["move"] = {
        ["fields"] = {},
        ["name"] = "move",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["namespace"] = {
        ["fields"] = {
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type_name",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "namespace",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/namespaces/",
                ["parts"] = {
                  "namespaces",
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/namespaces/{slug}/",
                ["parts"] = {
                  "namespaces",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["namespace_audit_log"] = {
        ["fields"] = {
          {
            ["name"] = "actor",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "actor_ip_address",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "actor_kind",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "actor_location",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "actor_slug_perm",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "actor_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "context",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "event",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "event_at",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "object",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "object_kind",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "object_slug_perm",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "target",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "target_kind",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "target_slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "uuid",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "namespace_audit_log",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/audit-log/{owner}/",
                ["parts"] = {
                  "audit-log",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["owner"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "page",
                    "page_size",
                    "query",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["npm"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "npm",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/npm/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "npm",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/npm/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "npm",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/npm/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "npm",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/npm/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "npm",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/npm/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "npm",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["nuget"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "nuget",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/nuget/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "nuget",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/nuget/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "nuget",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "nuget",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "nuget",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "nuget",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["openid_connect"] = {
        ["fields"] = {},
        ["name"] = "openid_connect",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
            {
              "org",
              "openid_connect",
            },
          },
        },
      },
      ["org"] = {
        ["fields"] = {
          {
            ["name"] = "country",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "event_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "location",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "package",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "policy",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "reasons",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "slug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tagline",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "vulnerability_scan_results",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "org",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "member_id",
                      ["orig"] = "member",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/members/{member}/refresh/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "members",
                  "{member_id}",
                  "refresh",
                },
                ["rename"] = {
                  ["param"] = {
                    ["member"] = "member_id",
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/saml-group-sync/disable/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "saml-group-sync",
                  "disable",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/saml-group-sync/enable/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "saml-group-sync",
                  "enable",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "cursor",
                      ["orig"] = "cursor",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/license-policy-violation/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "license-policy-violation",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["$action"] = "license_policy_violation",
                  ["exist"] = {
                    "cursor",
                    "id",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "cursor",
                      ["orig"] = "cursor",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/vulnerability-policy-violation/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "vulnerability-policy-violation",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["$action"] = "vulnerability_policy_violation",
                  ["exist"] = {
                    "cursor",
                    "id",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/",
                ["parts"] = {
                  "orgs",
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "member_id",
                      ["orig"] = "member",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/members/{member}/remove/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "members",
                  "{member_id}",
                  "remove",
                },
                ["rename"] = {
                  ["param"] = {
                    ["member"] = "member_id",
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/orgs/{org}/members/{member}/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "members",
                  "{member}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "member",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "service",
                      ["orig"] = "service",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/orgs/{org}/services/{service}/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "services",
                  "{service}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "service",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/orgs/{org}/deny-policy/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "deny-policy",
                  "{slug_perm}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/orgs/{org}/invites/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "invites",
                  "{slug_perm}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/orgs/{org}/license-policy/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "license-policy",
                  "{slug_perm}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/orgs/{org}/openid-connect/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "openid-connect",
                  "{slug_perm}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/orgs/{org}/saml-group-sync/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "saml-group-sync",
                  "{slug_perm}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/orgs/{org}/vulnerability-policy/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "vulnerability-policy",
                  "{slug_perm}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "team",
                      ["orig"] = "team",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/orgs/{org}/teams/{team}/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "teams",
                  "{team}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "team",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/orgs/{org}/",
                ["parts"] = {
                  "orgs",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "team_id",
                      ["orig"] = "team",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/orgs/{org}/teams/{team}/members",
                ["parts"] = {
                  "orgs",
                  "{id}",
                  "teams",
                  "{team_id}",
                  "members",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "id",
                    ["team"] = "team_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "team_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "deny_policy",
            },
            {
              "invite",
            },
            {
              "license_policy",
            },
            {
              "member",
            },
            {
              "openid_connect",
            },
            {
              "saml_group_sync",
            },
            {
              "service",
            },
            {
              "team",
            },
            {
              "vulnerability_policy",
            },
          },
        },
      },
      ["organization_group_sync"] = {
        ["fields"] = {
          {
            ["name"] = "idp_key",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idp_value",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "role",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "team",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "organization_group_sync",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/saml-group-sync/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "saml-group-sync",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/saml-group-sync/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "saml-group-sync",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
          },
        },
      },
      ["organization_group_sync_status"] = {
        ["fields"] = {
          {
            ["name"] = "saml_group_sync_status",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "organization_group_sync_status",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/saml-group-sync/status/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "saml-group-sync",
                  "status",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
          },
        },
      },
      ["organization_invite"] = {
        ["fields"] = {
          {
            ["name"] = "email",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "expires_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "inviter",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "inviter_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "org",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "role",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "teams",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "user",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user_url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "organization_invite",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/invites/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "invites",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/invites/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "invites",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/orgs/{org}/invites/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "invites",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
          },
        },
      },
      ["organization_invite_extend"] = {
        ["fields"] = {
          {
            ["name"] = "email",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "expires_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "inviter",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "inviter_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "org",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "role",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "teams",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "user",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user_url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "organization_invite_extend",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/invites/{slug_perm}/extend/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "invites",
                  "{slug_perm}",
                  "extend",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/invites/{slug_perm}/resend/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "invites",
                  "{slug_perm}",
                  "resend",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
              "invite",
            },
          },
        },
      },
      ["organization_membership"] = {
        ["fields"] = {
          {
            ["name"] = "email",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "has_two_factor",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "joined_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "last_login_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "last_login_method",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "role",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user_id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user_name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "visibility",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "organization_membership",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "is_active",
                      ["orig"] = "is_active",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/members/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "members",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "is_active",
                    "org_id",
                    "page",
                    "page_size",
                    "query",
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/members/{member}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "members",
                  "{member}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "member",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/orgs/{org}/members/{member}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "members",
                  "{member}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "member",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
            {
              "org",
              "member",
            },
          },
        },
      },
      ["organization_membership_role_update"] = {
        ["fields"] = {
          {
            ["name"] = "email",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "has_two_factor",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "joined_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "last_login_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "last_login_method",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "role",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user_id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user_name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "visibility",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "organization_membership_role_update",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "member_id",
                      ["orig"] = "member",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/orgs/{org}/members/{member}/update-role/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "members",
                  "{member_id}",
                  "update-role",
                },
                ["rename"] = {
                  ["param"] = {
                    ["member"] = "member_id",
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "member_id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
              "member",
            },
          },
        },
      },
      ["organization_membership_visibility_update"] = {
        ["fields"] = {
          {
            ["name"] = "email",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "has_two_factor",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "joined_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "last_login_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "last_login_method",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "role",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user_id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user_name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "visibility",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "organization_membership_visibility_update",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "member_id",
                      ["orig"] = "member",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/orgs/{org}/members/{member}/update-visibility/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "members",
                  "{member_id}",
                  "update-visibility",
                },
                ["rename"] = {
                  ["param"] = {
                    ["member"] = "member_id",
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "member_id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
              "member",
            },
          },
        },
      },
      ["organization_package_license_policy"] = {
        ["fields"] = {
          {
            ["name"] = "allow_unknown_licenses",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "on_violation_quarantine",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "package_query_string",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "spdx_identifiers",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "organization_package_license_policy",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/license-policy/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "license-policy",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/license-policy/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "license-policy",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/license-policy/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "license-policy",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/orgs/{org}/license-policy/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "license-policy",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/orgs/{org}/license-policy/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "license-policy",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
          },
        },
      },
      ["organization_package_vulnerability_policy"] = {
        ["fields"] = {
          {
            ["name"] = "allow_unknown_severity",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "min_severity",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "on_violation_quarantine",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "package_query_string",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "organization_package_vulnerability_policy",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/vulnerability-policy/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/vulnerability-policy/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/vulnerability-policy/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/orgs/{org}/vulnerability-policy/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/orgs/{org}/vulnerability-policy/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
          },
        },
      },
      ["organization_saml_auth"] = {
        ["fields"] = {
          {
            ["name"] = "saml_auth_enabled",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "saml_auth_enforced",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "saml_metadata_inline",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "saml_metadata_url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "organization_saml_auth",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/saml-authentication",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "saml-authentication",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/orgs/{org}/saml-authentication",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "saml-authentication",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
          },
        },
      },
      ["organization_team"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "visibility",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "organization_team",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/teams/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "teams",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "for_user",
                      ["orig"] = "for_user",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/teams/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "teams",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "for_user",
                    "org_id",
                    "page",
                    "page_size",
                    "query",
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "team",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/teams/{team}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "teams",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["team"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "team",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/orgs/{org}/teams/{team}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "teams",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["team"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
          },
        },
      },
      ["organization_team_member"] = {
        ["fields"] = {
          {
            ["name"] = "role",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "organization_team_member",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "team_id",
                      ["orig"] = "team",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/teams/{team}/members",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "teams",
                  "{team_id}",
                  "members",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["team"] = "team_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "org_id",
                    "team_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "team_id",
                      ["orig"] = "team",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/teams/{team}/members",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "teams",
                  "{team_id}",
                  "members",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["team"] = "team_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                    "team_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.members`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
              "team",
            },
          },
        },
      },
      ["oss"] = {
        ["fields"] = {},
        ["name"] = "oss",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["p2n"] = {
        ["fields"] = {},
        ["name"] = "p2n",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["package"] = {
        ["fields"] = {
          {
            ["name"] = "active",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "architectures",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "backend_kind",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "bandwidth",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "cdn_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "checksum_md5",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "checksum_sha1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "checksum_sha256",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "checksum_sha512",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "count",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "dep_type",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dependencies_checksum_md5",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dependencies_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "display_name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "distro",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "distro_version",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "downloads",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$INTEGER`",
              },
              ["list"] = {
                ["type"] = "`$INTEGER`",
              },
            },
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "epoch",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "extension",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "filename",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "files",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "format",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "format_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "freeable_storage",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "fully_qualified_name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "identifier_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "identifiers",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "inactive",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "indexed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_cancellable",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_copyable",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_deleteable",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_downloadable",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_moveable",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_quarantinable",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_quarantined",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_resyncable",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_security_scannable",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_sync_awaiting",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_sync_completed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_sync_failed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_sync_in_flight",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_sync_in_progress",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "last_push",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "license",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "namespace",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "namespace_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "num_downloads",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "num_files",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "operator",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "origin_repository",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "origin_repository_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "package_type",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "policy_violated",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "release",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "repository",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "repository_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "security_scan_completed_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "security_scan_started_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "security_scan_status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "security_scan_status_updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "self_html_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "self_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "signature_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "size",
            ["op"] = {
              ["list"] = {
                ["req"] = true,
                ["type"] = "`$INTEGER`",
              },
            },
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stage",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "stage_str",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stage_updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "status_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status_str",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status_updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "subtype",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "summary",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sync_finished_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sync_progress",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "tags",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "tags_immutable",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "total",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "type_display",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "uploaded_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "uploader",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "uploader_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "version",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "version_orig",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "vulnerability_scan_results_url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "package",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/{identifier}/copy/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "copy",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/{identifier}/move/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "move",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/{identifier}/quarantine/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "quarantine",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/{identifier}/tag/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "tag",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/alpine/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "alpine",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/cargo/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "cargo",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/cocoapods/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "cocoapods",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/composer/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "composer",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/conan/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "conan",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/conda/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "conda",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/cran/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "cran",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/dart/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "dart",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/deb/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "deb",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/docker/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "docker",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/go/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "go",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/helm/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "helm",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/hex/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "hex",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/huggingface/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "huggingface",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/luarocks/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "luarocks",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/maven/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "maven",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/npm/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "npm",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/nuget/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "nuget",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/p2/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "p2",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/python/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "python",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/raw/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "raw",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/rpm/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "rpm",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/ruby/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "ruby",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/swift/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "swift",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/terraform/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "terraform",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/upload/vagrant/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "upload",
                  "vagrant",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/alpine/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "alpine",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/cargo/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "cargo",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/cocoapods/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "cocoapods",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/composer/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "composer",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/conan/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "conan",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/conda/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "conda",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/cran/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "cran",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/dart/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "dart",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/deb/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "deb",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/docker/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "docker",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/go/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "go",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/helm/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "helm",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/hex/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "hex",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/huggingface/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "huggingface",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/luarocks/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "luarocks",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/maven/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "maven",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/npm/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "npm",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/nuget/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "nuget",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/p2/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "p2",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/python/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "python",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/raw/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "raw",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/rpm/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "rpm",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/ruby/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "ruby",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/swift/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "swift",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/terraform/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "terraform",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/validate-upload/vagrant/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "validate-upload",
                  "vagrant",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/{identifier}/resync/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "resync",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/packages/{owner}/{repo}/{identifier}/scan/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "scan",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "group_by",
                      ["orig"] = "group_by",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/packages/{owner}/{repo}/groups/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "groups",
                },
                ["select"] = {
                  ["exist"] = {
                    "group_by",
                    "owner",
                    "page",
                    "page_size",
                    "query",
                    "repo",
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/packages/{owner}/{repo}/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                },
                ["select"] = {
                  ["exist"] = {
                    "owner",
                    "page",
                    "page_size",
                    "query",
                    "repo",
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/packages/{owner}/{repo}/{identifier}/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/packages/{owner}/{repo}/{identifier}/dependencies/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "dependencies",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.dependencies`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "finish",
                      ["orig"] = "finish",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "package",
                      ["orig"] = "package",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "start",
                      ["orig"] = "start",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/metrics/packages/{owner}/{repo}/",
                ["parts"] = {
                  "metrics",
                  "packages",
                  "{owner}",
                  "{repo}",
                },
                ["select"] = {
                  ["exist"] = {
                    "finish",
                    "owner",
                    "package",
                    "page",
                    "page_size",
                    "repo",
                    "start",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.packages`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/packages/{owner}/{repo}/{identifier}/status/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "status",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/packages/{owner}/{repo}/{identifier}/",
                ["parts"] = {
                  "packages",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["package_deny_policy"] = {
        ["fields"] = {
          {
            ["name"] = "action",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "enabled",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "package_query_string",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "package_deny_policy",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/deny-policy/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "deny-policy",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/deny-policy/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "deny-policy",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/deny-policy/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "deny-policy",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/orgs/{org}/deny-policy/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "deny-policy",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/orgs/{org}/deny-policy/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "deny-policy",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
          },
        },
      },
      ["package_file_parts_upload"] = {
        ["fields"] = {
          {
            ["name"] = "identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upload_querystring",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upload_url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "package_file_parts_upload",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "filename",
                      ["orig"] = "filename",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "part_number",
                      ["orig"] = "part_number",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/files/{owner}/{repo}/{identifier}/info/",
                ["parts"] = {
                  "files",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "info",
                },
                ["select"] = {
                  ["exist"] = {
                    "filename",
                    "identifier",
                    "owner",
                    "part_number",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "file",
            },
          },
        },
      },
      ["package_file_upload"] = {
        ["fields"] = {},
        ["name"] = "package_file_upload",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/files/{owner}/{repo}/{identifier}/complete/",
                ["parts"] = {
                  "files",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "complete",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "file",
            },
          },
        },
      },
      ["package_license_policy_evaluation"] = {
        ["fields"] = {
          {
            ["name"] = "allow_unknown_licenses",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "evaluation_count",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "on_violation_quarantine",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "package_query_string",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "policy",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "spdx_identifiers",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "violation_count",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "package_license_policy_evaluation",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "policy_slug_perm",
                      ["orig"] = "policy_slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "license-policy",
                  "{policy_slug_perm}",
                  "evaluation",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "org_id",
                    "policy_slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.policy`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "policy_slug_perm",
                      ["orig"] = "policy_slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "license-policy",
                  "{policy_slug_perm}",
                  "evaluation",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                    "page",
                    "page_size",
                    "policy_slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "license_policy_id",
                      ["orig"] = "policy_slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "license-policy",
                  "{license_policy_id}",
                  "evaluation",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["policy_slug_perm"] = "license_policy_id",
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "license_policy_id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.policy`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
              "license_policy",
            },
          },
        },
      },
      ["package_version_badge"] = {
        ["fields"] = {},
        ["name"] = "package_version_badge",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "package_format",
                      ["orig"] = "package_format",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "package_identifier",
                      ["orig"] = "package_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "package_name",
                      ["orig"] = "package_name",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "package_version",
                      ["orig"] = "package_version",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "badge_token",
                      ["orig"] = "badge_token",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "cache_second",
                      ["orig"] = "cache_second",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "color",
                      ["orig"] = "color",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "label",
                      ["orig"] = "label",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "label_color",
                      ["orig"] = "label_color",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "logo_color",
                      ["orig"] = "logo_color",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "logo_width",
                      ["orig"] = "logo_width",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "render",
                      ["orig"] = "render",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "shield",
                      ["orig"] = "shield",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "show_latest",
                      ["orig"] = "show_latest",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "style",
                      ["orig"] = "style",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/badges/version/{owner}/{repo}/{package_format}/{package_name}/{package_version}/{package_identifiers}/",
                ["parts"] = {
                  "badges",
                  "version",
                  "{owner}",
                  "{repo}",
                  "{package_format}",
                  "{package_name}",
                  "{package_version}",
                  "{package_identifier}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["package_identifiers"] = "package_identifier",
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "version",
            },
          },
        },
      },
      ["package_vulnerability_policy_evaluation"] = {
        ["fields"] = {
          {
            ["name"] = "allow_unknown_severity",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "evaluation_count",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "min_severity",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "on_violation_quarantine",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "package_query_string",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "policy",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "violation_count",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "package_vulnerability_policy_evaluation",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "policy_slug_perm",
                      ["orig"] = "policy_slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/vulnerability-policy/{policy_slug_perm}/evaluation/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                  "{policy_slug_perm}",
                  "evaluation",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "org_id",
                    "policy_slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.policy`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "policy_slug_perm",
                      ["orig"] = "policy_slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/vulnerability-policy/{policy_slug_perm}/evaluation/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                  "{policy_slug_perm}",
                  "evaluation",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                    "page",
                    "page_size",
                    "policy_slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "vulnerability_policy_id",
                      ["orig"] = "policy_slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/vulnerability-policy/{policy_slug_perm}/evaluation/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "vulnerability-policy",
                  "{vulnerability_policy_id}",
                  "evaluation",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["policy_slug_perm"] = "vulnerability_policy_id",
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "org_id",
                    "vulnerability_policy_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.policy`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
              "vulnerability_policy",
            },
          },
        },
      },
      ["privilege"] = {
        ["fields"] = {},
        ["name"] = "privilege",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["profile"] = {
        ["fields"] = {},
        ["name"] = "profile",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["provider_setting"] = {
        ["fields"] = {
          {
            ["name"] = "claims",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "enabled",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mapping_claim",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "provider_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "service_accounts",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "slug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "provider_setting",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/openid-connect/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "openid-connect",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                    "page",
                    "page_size",
                    "query",
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/openid-connect/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "openid-connect",
                  "{slug_perm}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
            {
              "org",
              "openid_connect",
            },
          },
        },
      },
      ["provider_settings_write"] = {
        ["fields"] = {
          {
            ["name"] = "claims",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "dynamic_mappings",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "enabled",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mapping_claim",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "provider_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "service_accounts",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "slug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "provider_settings_write",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/openid-connect/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "openid-connect",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/orgs/{org}/openid-connect/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "openid-connect",
                  "{slug_perm}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "org_id",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/orgs/{org}/openid-connect/{slug_perm}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "openid-connect",
                  "{slug_perm}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "org_id",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
            {
              "org",
              "openid_connect",
            },
          },
        },
      },
      ["python"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "python",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/python/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "python",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/python/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "python",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/python/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "python",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/python/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "python",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/python/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "python",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["quarantine"] = {
        ["fields"] = {},
        ["name"] = "quarantine",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["quota"] = {
        ["fields"] = {
          {
            ["name"] = "display",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "history",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "raw",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "quota",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/quota/{owner}/",
                ["parts"] = {
                  "quota",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["owner"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.usage`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/quota/history/{owner}/",
                ["parts"] = {
                  "quota",
                  "history",
                  "{owner}",
                },
                ["select"] = {
                  ["exist"] = {
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/quota/oss/history/{owner}/",
                ["parts"] = {
                  "quota",
                  "oss",
                  "history",
                  "{owner}",
                },
                ["select"] = {
                  ["exist"] = {
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/quota/oss/{owner}/",
                ["parts"] = {
                  "quota",
                  "oss",
                  "{owner}",
                },
                ["select"] = {
                  ["exist"] = {
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.usage`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "history",
            },
            {
              "oss",
            },
          },
        },
      },
      ["raw"] = {
        ["fields"] = {},
        ["name"] = "raw",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["refresh"] = {
        ["fields"] = {},
        ["name"] = "refresh",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "entitlement",
            },
          },
        },
      },
      ["regenerate"] = {
        ["fields"] = {},
        ["name"] = "regenerate",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["repo"] = {
        ["fields"] = {
          {
            ["name"] = "cdn_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "content_kind",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "contextual_auth_realm",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "copy_own",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "copy_packages",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cosign_signing_enabled",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "default_privilege",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "delete_own",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "delete_packages",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "deleted_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "distributes",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "docker_refresh_tokens_enabled",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "ecdsa_keys",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "enforce_eula",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "gpg_keys",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "index_files",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_open_source",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_private",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_public",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "manage_entitlements_privilege",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "move_own",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "move_packages",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "namespace",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "namespace_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nuget_native_signing_enabled",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "num_downloads",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "num_policy_violated_packages",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "num_quarantined_packages",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "open_source_license",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "open_source_project_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "package_count",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "package_group_count",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "proxy_npmjs",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "proxy_pypi",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "raw_package_index_enabled",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "raw_package_index_signatures_enabled",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "replace_packages",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "replace_packages_by_default",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "repository_type",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "repository_type_str",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "resync_own",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "resync_packages",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "scan_own",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "scan_packages",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "self_html_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "self_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "show_setup_all",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "size",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "size_str",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "storage_region",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "strict_npm_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "tag_pre_releases_as_latest",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "use_debian_labels",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "use_default_cargo_upstream",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "use_entitlements_privilege",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "use_noarch_packages",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "use_source_packages",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "use_vulnerability_scanning",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "user_entitlements_enabled",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "view_statistics",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "repo",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/geoip/disable/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "geoip",
                  "disable",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/geoip/enable/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "geoip",
                  "enable",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{repo}/transfer-region/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{repo}",
                  "transfer-region",
                },
                ["select"] = {
                  ["$action"] = "transfer_region",
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/",
                ["parts"] = {
                  "repos",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["owner"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/",
                ["parts"] = {
                  "repos",
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/",
                ["parts"] = {
                  "repos",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["owner"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/privileges",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "privileges",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cargo",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/composer/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "composer",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/conda/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "conda",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/cran/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "cran",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/dart/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "dart",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/deb/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "deb",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/docker/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "docker",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/go/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "go",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/helm/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "helm",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/hex/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "hex",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "huggingface",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/maven/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "maven",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/npm/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "npm",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "nuget",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/python/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "python",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "rpm",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "ruby",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/swift/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "swift",
                  "{slug_perm}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{identifier}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/privileges",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "privileges",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
            {
              "repo",
              "cargo",
            },
            {
              "repo",
              "composer",
            },
            {
              "repo",
              "conda",
            },
            {
              "repo",
              "cran",
            },
            {
              "repo",
              "dart",
            },
            {
              "repo",
              "deb",
            },
            {
              "repo",
              "docker",
            },
            {
              "repo",
              "go",
            },
            {
              "repo",
              "helm",
            },
            {
              "repo",
              "hex",
            },
            {
              "repo",
              "huggingface",
            },
            {
              "repo",
              "maven",
            },
            {
              "repo",
              "npm",
            },
            {
              "repo",
              "nuget",
            },
            {
              "repo",
              "python",
            },
            {
              "repo",
              "rpm",
            },
            {
              "repo",
              "ruby",
            },
            {
              "repo",
              "swift",
            },
          },
        },
      },
      ["repository_audit_log"] = {
        ["fields"] = {
          {
            ["name"] = "actor",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "actor_ip_address",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "actor_kind",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "actor_location",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "actor_slug_perm",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "actor_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "context",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "event",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "event_at",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "object",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "object_kind",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "object_slug_perm",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "uuid",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "repository_audit_log",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/audit-log/{owner}/{repo}/",
                ["parts"] = {
                  "audit-log",
                  "{owner}",
                  "{repo}",
                },
                ["select"] = {
                  ["exist"] = {
                    "owner",
                    "page",
                    "page_size",
                    "query",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "audit_log",
            },
          },
        },
      },
      ["repository_ecdsa_key"] = {
        ["fields"] = {
          {
            ["name"] = "active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "default",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "fingerprint",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "fingerprint_short",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "public_key",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ssh_fingerprint",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "repository_ecdsa_key",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/ecdsa/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "ecdsa",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/ecdsa/regenerate/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "ecdsa",
                  "regenerate",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/ecdsa/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "ecdsa",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["repository_geo_ip_rule"] = {
        ["fields"] = {
          {
            ["name"] = "cidr",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "country_code",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "repository_geo_ip_rule",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/geoip",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "geoip",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/geoip",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "geoip",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/geoip",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "geoip",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["repository_geo_ip_status"] = {
        ["fields"] = {
          {
            ["name"] = "geoip_enabled",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "repository_geo_ip_status",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/geoip/status/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "geoip",
                  "status",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["repository_geo_ip_test_address"] = {
        ["fields"] = {},
        ["name"] = "repository_geo_ip_test_address",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/geoip/test/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "geoip",
                  "test",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["repository_gpg_key"] = {
        ["fields"] = {
          {
            ["name"] = "active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "comment",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "default",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "fingerprint",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "fingerprint_short",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "public_key",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "repository_gpg_key",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/gpg/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "gpg",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/gpg/regenerate/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "gpg",
                  "regenerate",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/gpg/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "gpg",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["repository_privilege_input"] = {
        ["fields"] = {
          {
            ["name"] = "privilege",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "service",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "team",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "repository_privilege_input",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/privileges",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "privileges",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.privileges`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["repository_retention_rule"] = {
        ["fields"] = {
          {
            ["name"] = "retention_count_limit",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "retention_days_limit",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "retention_enabled",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "retention_group_by_format",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "retention_group_by_name",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "retention_group_by_package_type",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "retention_package_query_string",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "retention_size_limit",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "repository_retention_rule",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{repo}/retention/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{repo}",
                  "retention",
                },
                ["select"] = {
                  ["exist"] = {
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{repo}/retention/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{repo}",
                  "retention",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["repository_rsa_key"] = {
        ["fields"] = {
          {
            ["name"] = "active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "default",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "fingerprint",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "fingerprint_short",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "public_key",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ssh_fingerprint",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "repository_rsa_key",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/rsa/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "rsa",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/rsa/regenerate/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "rsa",
                  "regenerate",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/rsa/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "rsa",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["repository_token"] = {
        ["fields"] = {
          {
            ["name"] = "clients",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_by",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_by_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "default",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "disable_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "downloads",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "enable_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "eula_accepted",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "eula_accepted_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "eula_accepted_from",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "eula_required",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "has_limits",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "identifier",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_limited",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "limit_bandwidth",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "limit_bandwidth_unit",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "limit_date_range_from",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "limit_date_range_to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "limit_num_clients",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "limit_num_downloads",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "limit_package_query",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "limit_path_query",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "metadata",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "refresh_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "reset_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "scheduled_reset_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "scheduled_reset_period",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "self_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "token",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_by",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_by_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "usage",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user_url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "repository_token",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "show_token",
                      ["orig"] = "show_token",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/entitlements/{owner}/{repo}/",
                ["parts"] = {
                  "entitlements",
                  "{owner}",
                  "{repo}",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                    "show_token",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "active",
                      ["orig"] = "active",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "show_token",
                      ["orig"] = "show_token",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/entitlements/{owner}/{repo}/",
                ["parts"] = {
                  "entitlements",
                  "{owner}",
                  "{repo}",
                },
                ["select"] = {
                  ["exist"] = {
                    "active",
                    "owner",
                    "page",
                    "page_size",
                    "query",
                    "repo",
                    "show_token",
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "fuzzy",
                      ["orig"] = "fuzzy",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "show_token",
                      ["orig"] = "show_token",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/entitlements/{owner}/{repo}/{identifier}/",
                ["parts"] = {
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                },
                ["select"] = {
                  ["exist"] = {
                    "fuzzy",
                    "identifier",
                    "owner",
                    "repo",
                    "show_token",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "show_token",
                      ["orig"] = "show_token",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/entitlements/{owner}/{repo}/{identifier}/",
                ["parts"] = {
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                    "show_token",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "entitlement",
            },
          },
        },
      },
      ["repository_token_refresh"] = {
        ["fields"] = {
          {
            ["name"] = "clients",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_by",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_by_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "default",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "disable_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "downloads",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "enable_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "eula_accepted",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "eula_accepted_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "eula_accepted_from",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "eula_required",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "has_limits",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "identifier",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_limited",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "limit_bandwidth",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "limit_bandwidth_unit",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "limit_date_range_from",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "limit_date_range_to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "limit_num_clients",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "limit_num_downloads",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "limit_package_query",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "limit_path_query",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "metadata",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "refresh_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "reset_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "scheduled_reset_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "scheduled_reset_period",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "self_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "token",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_by",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_by_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "usage",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "user_url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "repository_token_refresh",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "show_token",
                      ["orig"] = "show_token",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/entitlements/{owner}/{repo}/{identifier}/refresh/",
                ["parts"] = {
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                  "refresh",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                    "show_token",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "entitlement",
            },
          },
        },
      },
      ["repository_token_sync"] = {
        ["fields"] = {
          {
            ["name"] = "tokens",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "repository_token_sync",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "show_token",
                      ["orig"] = "show_token",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/entitlements/{owner}/{repo}/sync/",
                ["parts"] = {
                  "entitlements",
                  "{owner}",
                  "{repo}",
                  "sync",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                    "show_token",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "entitlement",
            },
          },
        },
      },
      ["repository_webhook"] = {
        ["fields"] = {
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_by",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_by_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "disable_reason_str",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "event",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "events",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "identifier",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_last_response_bad",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "last_response_status",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "last_response_status_str",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "num_sent",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "package_query",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "request_body_format",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "request_body_format_str",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "request_body_template_format",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "request_body_template_format_str",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "request_content_type",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "secret_header",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "self_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "target_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "template",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "templates",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_by",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_by_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "repository_webhook",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/webhooks/{owner}/{repo}/",
                ["parts"] = {
                  "webhooks",
                  "{owner}",
                  "{repo}",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks/{owner}/{repo}/",
                ["parts"] = {
                  "webhooks",
                  "{owner}",
                  "{repo}",
                },
                ["select"] = {
                  ["exist"] = {
                    "owner",
                    "page",
                    "page_size",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks/{owner}/{repo}/{identifier}/",
                ["parts"] = {
                  "webhooks",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/webhooks/{owner}/{repo}/{identifier}/",
                ["parts"] = {
                  "webhooks",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "webhook",
            },
          },
        },
      },
      ["repository_x509_ecdsa_certificate"] = {
        ["fields"] = {
          {
            ["name"] = "active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "certificate",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "certificate_chain",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "certificate_chain_fingerprint",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "certificate_chain_fingerprint_short",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "certificate_fingerprint",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "certificate_fingerprint_short",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "default",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "issuing_status",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "repository_x509_ecdsa_certificate",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/x509-ecdsa/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "x509-ecdsa",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["repository_x509_rsa_certificate"] = {
        ["fields"] = {
          {
            ["name"] = "active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "certificate",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "certificate_chain",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "certificate_chain_fingerprint",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "certificate_chain_fingerprint_short",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "certificate_fingerprint",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "certificate_fingerprint_short",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "default",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "issuing_status",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "repository_x509_rsa_certificate",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/x509-rsa/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "x509-rsa",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["reset"] = {
        ["fields"] = {},
        ["name"] = "reset",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "entitlement",
            },
          },
        },
      },
      ["resources_rate_check"] = {
        ["fields"] = {
          {
            ["name"] = "interval",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "limit",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "remaining",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "reset",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "reset_iso_8601",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "throttled",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "resources_rate_check",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/rates/limits/",
                ["parts"] = {
                  "rates",
                  "limits",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.resources`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["resync"] = {
        ["fields"] = {},
        ["name"] = "resync",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["retention"] = {
        ["fields"] = {},
        ["name"] = "retention",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["rpm"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "distro_version",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gpg_key_inline",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gpg_key_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gpg_verification",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "include_sources",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verification_status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "rpm",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/rpm/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "rpm",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/rpm/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "rpm",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "rpm",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "rpm",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "rpm",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["rsa"] = {
        ["fields"] = {},
        ["name"] = "rsa",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["ruby"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "ruby",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/ruby/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "ruby",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/ruby/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "ruby",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "ruby",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "ruby",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "ruby",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["saml_group_sync"] = {
        ["fields"] = {},
        ["name"] = "saml_group_sync",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
          },
        },
      },
      ["scan"] = {
        ["fields"] = {},
        ["name"] = "scan",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["self"] = {
        ["fields"] = {},
        ["name"] = "self",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["service"] = {
        ["fields"] = {
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_by",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_by_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "key",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "key_expires_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "role",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "teams",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "service",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/services/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "services",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "service",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orgs/{org}/services/{service}/refresh/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "services",
                  "{id}",
                  "refresh",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["service"] = "id",
                  },
                },
                ["select"] = {
                  ["$action"] = "refresh",
                  ["exist"] = {
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/services/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "services",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "org_id",
                    "page",
                    "page_size",
                    "query",
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "service",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orgs/{org}/services/{service}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "services",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["service"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "service",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "org_id",
                      ["orig"] = "org",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/orgs/{org}/services/{service}/",
                ["parts"] = {
                  "orgs",
                  "{org_id}",
                  "services",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["org"] = "org_id",
                    ["service"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "org_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
          },
        },
      },
      ["status"] = {
        ["fields"] = {},
        ["name"] = "status",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["status_basic"] = {
        ["fields"] = {
          {
            ["name"] = "detail",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "version",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "status_basic",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/status/check/basic/",
                ["parts"] = {
                  "status",
                  "check",
                  "basic",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["storage_region"] = {
        ["fields"] = {
          {
            ["name"] = "label",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "storage_region",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/storage-regions/",
                ["parts"] = {
                  "storage-regions",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/storage-regions/{slug}/",
                ["parts"] = {
                  "storage-regions",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["swift"] = {
        ["fields"] = {
          {
            ["name"] = "auth_mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_secret",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auth_username",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disable_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_header_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_1",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "extra_value_2",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pending_validation",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "priority",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "upstream_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "verify_ssl",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "swift",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/swift/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "swift",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/swift/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "swift",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/swift/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "swift",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/swift/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "swift",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/repos/{owner}/{identifier}/upstream/swift/{slug_perm}/",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{identifier}",
                  "upstream",
                  "swift",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug_perm"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "id",
                    "identifier",
                    "owner",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
            {
              "repo",
            },
          },
        },
      },
      ["sync"] = {
        ["fields"] = {},
        ["name"] = "sync",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "entitlement",
            },
          },
        },
      },
      ["tag"] = {
        ["fields"] = {},
        ["name"] = "tag",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["team"] = {
        ["fields"] = {},
        ["name"] = "team",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
          },
        },
      },
      ["terraform"] = {
        ["fields"] = {},
        ["name"] = "terraform",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["test"] = {
        ["fields"] = {},
        ["name"] = "test",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["token"] = {
        ["fields"] = {},
        ["name"] = "token",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "token",
            },
          },
        },
      },
      ["transfer_region"] = {
        ["fields"] = {},
        ["name"] = "transfer_region",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["user"] = {
        ["fields"] = {
          {
            ["name"] = "created",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "key",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "user",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/user/tokens/",
                ["parts"] = {
                  "user",
                  "tokens",
                },
                ["select"] = {
                  ["$action"] = "token",
                  ["exist"] = {
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["user_auth_token"] = {
        ["fields"] = {},
        ["name"] = "user_auth_token",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["type"] = "`$OBJECT`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/user/token/",
                ["parts"] = {
                  "user",
                  "token",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["user_authentication_token"] = {
        ["fields"] = {
          {
            ["name"] = "created",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "key",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "user_authentication_token",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/user/tokens/",
                ["parts"] = {
                  "user",
                  "tokens",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "slug_perm",
                      ["orig"] = "slug_perm",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/user/tokens/{slug_perm}/refresh/",
                ["parts"] = {
                  "user",
                  "tokens",
                  "{slug_perm}",
                  "refresh",
                },
                ["select"] = {
                  ["exist"] = {
                    "slug_perm",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "token",
            },
          },
        },
      },
      ["user_brief"] = {
        ["fields"] = {
          {
            ["name"] = "authenticated",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "email",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "profile_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "self_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "user_brief",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/user/self/",
                ["parts"] = {
                  "user",
                  "self",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["user_profile"] = {
        ["fields"] = {
          {
            ["name"] = "company",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "first_name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "job_title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "joined_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "last_name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug_perm",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tagline",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "user_profile",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "slug",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/users/profile/{slug}/",
                ["parts"] = {
                  "users",
                  "profile",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["vagrant"] = {
        ["fields"] = {},
        ["name"] = "vagrant",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "package",
            },
          },
        },
      },
      ["validate"] = {
        ["fields"] = {},
        ["name"] = "validate",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "file",
            },
          },
        },
      },
      ["version"] = {
        ["fields"] = {},
        ["name"] = "version",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "version",
            },
          },
        },
      },
      ["vulnerability"] = {
        ["fields"] = {
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "has_vulnerabilities",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "identifier",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "max_severity",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "num_vulnerabilities",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "package",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "results",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "scan_id",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "target",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "vulnerability",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "package",
                      ["orig"] = "package",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/vulnerabilities/{owner}/{repo}/{package}/",
                ["parts"] = {
                  "vulnerabilities",
                  "{owner}",
                  "{repo}",
                  "{package}",
                },
                ["select"] = {
                  ["exist"] = {
                    "owner",
                    "package",
                    "page",
                    "page_size",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "package",
                      ["orig"] = "package",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/vulnerabilities/{owner}/{repo}/{package}/{identifier}/",
                ["parts"] = {
                  "vulnerabilities",
                  "{owner}",
                  "{repo}",
                  "{package}",
                  "{identifier}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "package",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/vulnerabilities/{owner}/{repo}/",
                ["parts"] = {
                  "vulnerabilities",
                  "{owner}",
                  "{repo}",
                },
                ["select"] = {
                  ["exist"] = {
                    "owner",
                    "page",
                    "page_size",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/vulnerabilities/{owner}/",
                ["parts"] = {
                  "vulnerabilities",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["owner"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "page",
                    "page_size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "vulnerability",
            },
          },
        },
      },
      ["vulnerability_policy"] = {
        ["fields"] = {},
        ["name"] = "vulnerability_policy",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "org",
            },
            {
              "org",
              "vulnerability_policy",
            },
          },
        },
      },
      ["webhook"] = {
        ["fields"] = {},
        ["name"] = "webhook",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "identifier",
                      ["orig"] = "identifier",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/webhooks/{owner}/{repo}/{identifier}/",
                ["parts"] = {
                  "webhooks",
                  "{owner}",
                  "{repo}",
                  "{identifier}",
                },
                ["select"] = {
                  ["exist"] = {
                    "identifier",
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "webhook",
            },
          },
        },
      },
      ["x509_ecdsa"] = {
        ["fields"] = {},
        ["name"] = "x509_ecdsa",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
      ["x509_rsa"] = {
        ["fields"] = {},
        ["name"] = "x509_rsa",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
