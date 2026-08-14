package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Cloudsmith",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api.cloudsmith.io",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"abort": map[string]any{},
				"alpine": map[string]any{},
				"audit_log": map[string]any{},
				"basic": map[string]any{},
				"cargo": map[string]any{},
				"cocoapod": map[string]any{},
				"complete": map[string]any{},
				"composer": map[string]any{},
				"conan": map[string]any{},
				"conda": map[string]any{},
				"copy": map[string]any{},
				"cran": map[string]any{},
				"dart": map[string]any{},
				"deb": map[string]any{},
				"deny_policy": map[string]any{},
				"dependency": map[string]any{},
				"disable": map[string]any{},
				"distribution_full": map[string]any{},
				"distro": map[string]any{},
				"docker": map[string]any{},
				"dynamic_mapping": map[string]any{},
				"ecdsa": map[string]any{},
				"enable": map[string]any{},
				"entitlement": map[string]any{},
				"evaluation": map[string]any{},
				"file": map[string]any{},
				"format": map[string]any{},
				"geoip": map[string]any{},
				"gon": map[string]any{},
				"gpg": map[string]any{},
				"group": map[string]any{},
				"helm": map[string]any{},
				"hex": map[string]any{},
				"history": map[string]any{},
				"huggingface": map[string]any{},
				"info": map[string]any{},
				"invite": map[string]any{},
				"license_policy": map[string]any{},
				"limit": map[string]any{},
				"luarock": map[string]any{},
				"maven": map[string]any{},
				"member": map[string]any{},
				"move": map[string]any{},
				"namespace": map[string]any{},
				"namespace_audit_log": map[string]any{},
				"npm": map[string]any{},
				"nuget": map[string]any{},
				"openid_connect": map[string]any{},
				"org": map[string]any{},
				"organization_group_sync": map[string]any{},
				"organization_group_sync_status": map[string]any{},
				"organization_invite": map[string]any{},
				"organization_invite_extend": map[string]any{},
				"organization_membership": map[string]any{},
				"organization_membership_role_update": map[string]any{},
				"organization_membership_visibility_update": map[string]any{},
				"organization_package_license_policy": map[string]any{},
				"organization_package_vulnerability_policy": map[string]any{},
				"organization_saml_auth": map[string]any{},
				"organization_team": map[string]any{},
				"organization_team_member": map[string]any{},
				"oss": map[string]any{},
				"p2n": map[string]any{},
				"package": map[string]any{},
				"package_deny_policy": map[string]any{},
				"package_file_parts_upload": map[string]any{},
				"package_file_upload": map[string]any{},
				"package_license_policy_evaluation": map[string]any{},
				"package_version_badge": map[string]any{},
				"package_vulnerability_policy_evaluation": map[string]any{},
				"privilege": map[string]any{},
				"profile": map[string]any{},
				"provider_setting": map[string]any{},
				"provider_settings_write": map[string]any{},
				"python": map[string]any{},
				"quarantine": map[string]any{},
				"quota": map[string]any{},
				"raw": map[string]any{},
				"refresh": map[string]any{},
				"regenerate": map[string]any{},
				"repo": map[string]any{},
				"repository_audit_log": map[string]any{},
				"repository_ecdsa_key": map[string]any{},
				"repository_geo_ip_rule": map[string]any{},
				"repository_geo_ip_status": map[string]any{},
				"repository_geo_ip_test_address": map[string]any{},
				"repository_gpg_key": map[string]any{},
				"repository_privilege_input": map[string]any{},
				"repository_retention_rule": map[string]any{},
				"repository_rsa_key": map[string]any{},
				"repository_token": map[string]any{},
				"repository_token_refresh": map[string]any{},
				"repository_token_sync": map[string]any{},
				"repository_webhook": map[string]any{},
				"repository_x509_ecdsa_certificate": map[string]any{},
				"repository_x509_rsa_certificate": map[string]any{},
				"reset": map[string]any{},
				"resources_rate_check": map[string]any{},
				"resync": map[string]any{},
				"retention": map[string]any{},
				"rpm": map[string]any{},
				"rsa": map[string]any{},
				"ruby": map[string]any{},
				"saml_group_sync": map[string]any{},
				"scan": map[string]any{},
				"self": map[string]any{},
				"service": map[string]any{},
				"status": map[string]any{},
				"status_basic": map[string]any{},
				"storage_region": map[string]any{},
				"swift": map[string]any{},
				"sync": map[string]any{},
				"tag": map[string]any{},
				"team": map[string]any{},
				"terraform": map[string]any{},
				"test": map[string]any{},
				"token": map[string]any{},
				"transfer_region": map[string]any{},
				"user": map[string]any{},
				"user_auth_token": map[string]any{},
				"user_authentication_token": map[string]any{},
				"user_brief": map[string]any{},
				"user_profile": map[string]any{},
				"vagrant": map[string]any{},
				"validate": map[string]any{},
				"version": map[string]any{},
				"vulnerability": map[string]any{},
				"vulnerability_policy": map[string]any{},
				"webhook": map[string]any{},
				"x509_ecdsa": map[string]any{},
				"x509_rsa": map[string]any{},
			},
		},
		"entity": map[string]any{
			"abort": map[string]any{
				"fields": []any{},
				"name": "abort",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"file",
						},
					},
				},
			},
			"alpine": map[string]any{
				"fields": []any{},
				"name": "alpine",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"audit_log": map[string]any{
				"fields": []any{},
				"name": "audit_log",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"audit_log",
						},
					},
				},
			},
			"basic": map[string]any{
				"fields": []any{},
				"name": "basic",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cargo": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "cargo",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/cargo/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"cargo",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/cargo/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"cargo",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"cargo",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"cargo",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"cargo",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"cocoapod": map[string]any{
				"fields": []any{},
				"name": "cocoapod",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"complete": map[string]any{
				"fields": []any{},
				"name": "complete",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"file",
						},
					},
				},
			},
			"composer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "composer",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/composer/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"composer",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/composer/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"composer",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/composer/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"composer",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/composer/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"composer",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/composer/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"composer",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"conan": map[string]any{
				"fields": []any{},
				"name": "conan",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"conda": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "conda",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/conda/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"conda",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/conda/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"conda",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/conda/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"conda",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/conda/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"conda",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/conda/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"conda",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"copy": map[string]any{
				"fields": []any{},
				"name": "copy",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"cran": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "cran",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/cran/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"cran",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/cran/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"cran",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/cran/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"cran",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/cran/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"cran",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/cran/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"cran",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"dart": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "dart",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/dart/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"dart",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/dart/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"dart",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/dart/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"dart",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/dart/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"dart",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/dart/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"dart",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"deb": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "component",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "distro_versions",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gpg_key_inline",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gpg_key_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gpg_verification",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "include_sources",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_distribution",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verification_status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "deb",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/deb/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"deb",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/deb/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"deb",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/deb/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"deb",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/deb/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"deb",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/deb/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"deb",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"deny_policy": map[string]any{
				"fields": []any{},
				"name": "deny_policy",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
					},
				},
			},
			"dependency": map[string]any{
				"fields": []any{},
				"name": "dependency",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"disable": map[string]any{
				"fields": []any{},
				"name": "disable",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"entitlement",
						},
						[]any{
							"org",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"distribution_full": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "format_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "self_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "variants",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "versions",
						"type": "`$ARRAY`",
					},
				},
				"name": "distribution_full",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/distros/",
								"parts": []any{
									"distros",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/distros/{slug}/",
								"parts": []any{
									"distros",
									"{slug}",
								},
								"select": map[string]any{
									"exist": []any{
										"slug",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"distro",
						},
					},
				},
			},
			"distro": map[string]any{
				"fields": []any{},
				"name": "distro",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"docker": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "docker",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/docker/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"docker",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/docker/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"docker",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/docker/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"docker",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/docker/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"docker",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/docker/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"docker",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"dynamic_mapping": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "claim_value",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service_account",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "dynamic_mapping",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "provider_setting",
											"orig": "provider_setting",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"openid-connect",
									"{provider_setting}",
									"dynamic-mappings",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
										"page",
										"page_size",
										"provider_setting",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "claim_value",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "openid_connect_id",
											"orig": "provider_setting",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/{claim_value}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"openid-connect",
									"{openid_connect_id}",
									"dynamic-mappings",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"claim_value": "id",
										"org": "org_id",
										"provider_setting": "openid_connect_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"openid_connect_id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
							"openid_connect",
						},
					},
				},
			},
			"ecdsa": map[string]any{
				"fields": []any{},
				"name": "ecdsa",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"enable": map[string]any{
				"fields": []any{},
				"name": "enable",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"entitlement",
						},
						[]any{
							"org",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"entitlement": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "bandwidth",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "downloads",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "inactive",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total",
						"type": "`$INTEGER`",
					},
				},
				"name": "entitlement",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "show_token",
											"orig": "show_token",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/entitlements/{owner}/{repo}/{identifier}/reset/",
								"parts": []any{
									"entitlements",
									"{owner}",
									"{repo}",
									"{identifier}",
									"reset",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"repo",
										"show_token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/entitlements/{owner}/{repo}/{identifier}/disable/",
								"parts": []any{
									"entitlements",
									"{owner}",
									"{repo}",
									"{identifier}",
									"disable",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/entitlements/{owner}/{repo}/{identifier}/enable/",
								"parts": []any{
									"entitlements",
									"{owner}",
									"{repo}",
									"{identifier}",
									"enable",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "finish",
											"orig": "finish",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/metrics/entitlements/{owner}/{repo}/",
								"parts": []any{
									"metrics",
									"entitlements",
									"{owner}",
									"{repo}",
								},
								"select": map[string]any{
									"exist": []any{
										"finish",
										"owner",
										"page",
										"page_size",
										"repo",
										"start",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.tokens`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "finish",
											"orig": "finish",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/metrics/entitlements/{owner}/",
								"parts": []any{
									"metrics",
									"entitlements",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"owner": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"finish",
										"id",
										"page",
										"page_size",
										"start",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.tokens`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/entitlements/{owner}/{repo}/{identifier}/",
								"parts": []any{
									"entitlements",
									"{owner}",
									"{repo}",
									"{identifier}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"entitlement",
						},
					},
				},
			},
			"evaluation": map[string]any{
				"fields": []any{},
				"name": "evaluation",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
							"license_policy",
						},
						[]any{
							"org",
							"vulnerability_policy",
						},
					},
				},
			},
			"file": map[string]any{
				"fields": []any{},
				"name": "file",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/files/{owner}/{repo}/{identifier}/abort/",
								"parts": []any{
									"files",
									"{owner}",
									"{repo}",
									"{identifier}",
									"abort",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/files/{owner}/{repo}/",
								"parts": []any{
									"files",
									"{owner}",
									"{repo}",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/files/{owner}/{repo}/validate/",
								"parts": []any{
									"files",
									"{owner}",
									"{repo}",
									"validate",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"file",
						},
					},
				},
			},
			"format": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "distributions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "extensions",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "premium",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "premium_plan_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "premium_plan_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "supports",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "format",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/formats/",
								"parts": []any{
									"formats",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/formats/{slug}/",
								"parts": []any{
									"formats",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"geoip": map[string]any{
				"fields": []any{},
				"name": "geoip",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"gon": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "gon",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/go/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"go",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/go/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"go",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/go/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"go",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/go/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"go",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/go/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"go",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
						[]any{
							"repo",
							"go",
						},
					},
				},
			},
			"gpg": map[string]any{
				"fields": []any{},
				"name": "gpg",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"group": map[string]any{
				"fields": []any{},
				"name": "group",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"helm": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "helm",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/helm/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"helm",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/helm/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"helm",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/helm/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"helm",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/helm/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"helm",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/helm/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"helm",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"hex": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "hex",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/hex/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"hex",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/hex/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"hex",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/hex/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"hex",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/hex/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"hex",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/hex/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"hex",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"history": map[string]any{
				"fields": []any{},
				"name": "history",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"huggingface": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "huggingface",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/huggingface/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"huggingface",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/huggingface/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"huggingface",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"huggingface",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"huggingface",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"huggingface",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"info": map[string]any{
				"fields": []any{},
				"name": "info",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"file",
						},
					},
				},
			},
			"invite": map[string]any{
				"fields": []any{},
				"name": "invite",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
						[]any{
							"org",
							"invite",
						},
					},
				},
			},
			"license_policy": map[string]any{
				"fields": []any{},
				"name": "license_policy",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
						[]any{
							"org",
							"license_policy",
						},
					},
				},
			},
			"limit": map[string]any{
				"fields": []any{},
				"name": "limit",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"luarock": map[string]any{
				"fields": []any{},
				"name": "luarock",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"maven": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gpg_key_inline",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gpg_key_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gpg_verification",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verification_status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "maven",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/maven/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"maven",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/maven/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"maven",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/maven/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"maven",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/maven/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"maven",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/maven/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"maven",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"member": map[string]any{
				"fields": []any{},
				"name": "member",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
					},
				},
			},
			"move": map[string]any{
				"fields": []any{},
				"name": "move",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"namespace": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type_name",
						"type": "`$STRING`",
					},
				},
				"name": "namespace",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/namespaces/",
								"parts": []any{
									"namespaces",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/namespaces/{slug}/",
								"parts": []any{
									"namespaces",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"namespace_audit_log": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actor",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "actor_ip_address",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "actor_kind",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "actor_location",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "actor_slug_perm",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "actor_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "context",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "event",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "event_at",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_kind",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_slug_perm",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "target",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "target_kind",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "target_slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uuid",
						"type": "`$STRING`",
					},
				},
				"name": "namespace_audit_log",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/audit-log/{owner}/",
								"parts": []any{
									"audit-log",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"owner": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"page",
										"page_size",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"npm": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "npm",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/npm/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"npm",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/npm/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"npm",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/npm/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"npm",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/npm/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"npm",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/npm/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"npm",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"nuget": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "nuget",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/nuget/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"nuget",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/nuget/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"nuget",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"nuget",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"nuget",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"nuget",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"openid_connect": map[string]any{
				"fields": []any{},
				"name": "openid_connect",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
						[]any{
							"org",
							"openid_connect",
						},
					},
				},
			},
			"org": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "country",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "event_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "package",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "policy",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "reasons",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tagline",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "vulnerability_scan_results",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "org",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "member",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/members/{member}/refresh/",
								"parts": []any{
									"orgs",
									"{id}",
									"members",
									"{member_id}",
									"refresh",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"member": "member_id",
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/saml-group-sync/disable/",
								"parts": []any{
									"orgs",
									"{id}",
									"saml-group-sync",
									"disable",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/saml-group-sync/enable/",
								"parts": []any{
									"orgs",
									"{id}",
									"saml-group-sync",
									"enable",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/license-policy-violation/",
								"parts": []any{
									"orgs",
									"{id}",
									"license-policy-violation",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"$action": "license_policy_violation",
									"exist": []any{
										"cursor",
										"id",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/vulnerability-policy-violation/",
								"parts": []any{
									"orgs",
									"{id}",
									"vulnerability-policy-violation",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"$action": "vulnerability_policy_violation",
									"exist": []any{
										"cursor",
										"id",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/",
								"parts": []any{
									"orgs",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "member",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/members/{member}/remove/",
								"parts": []any{
									"orgs",
									"{id}",
									"members",
									"{member_id}",
									"remove",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"member": "member_id",
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/",
								"parts": []any{
									"orgs",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "member",
											"orig": "member",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/orgs/{org}/members/{member}/",
								"parts": []any{
									"orgs",
									"{id}",
									"members",
									"{member}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "service",
											"orig": "service",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/orgs/{org}/services/{service}/",
								"parts": []any{
									"orgs",
									"{id}",
									"services",
									"{service}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"service",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/orgs/{org}/deny-policy/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{id}",
									"deny-policy",
									"{slug_perm}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/orgs/{org}/invites/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{id}",
									"invites",
									"{slug_perm}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/orgs/{org}/license-policy/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{id}",
									"license-policy",
									"{slug_perm}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/orgs/{org}/openid-connect/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{id}",
									"openid-connect",
									"{slug_perm}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/orgs/{org}/saml-group-sync/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{id}",
									"saml-group-sync",
									"{slug_perm}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/orgs/{org}/vulnerability-policy/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{id}",
									"vulnerability-policy",
									"{slug_perm}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "team",
											"orig": "team",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/orgs/{org}/teams/{team}/",
								"parts": []any{
									"orgs",
									"{id}",
									"teams",
									"{team}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"team",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/orgs/{org}/",
								"parts": []any{
									"orgs",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "team_id",
											"orig": "team",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/orgs/{org}/teams/{team}/members",
								"parts": []any{
									"orgs",
									"{id}",
									"teams",
									"{team_id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "id",
										"team": "team_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"deny_policy",
						},
						[]any{
							"invite",
						},
						[]any{
							"license_policy",
						},
						[]any{
							"member",
						},
						[]any{
							"openid_connect",
						},
						[]any{
							"saml_group_sync",
						},
						[]any{
							"service",
						},
						[]any{
							"team",
						},
						[]any{
							"vulnerability_policy",
						},
					},
				},
			},
			"organization_group_sync": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "idp_key",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idp_value",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "team",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "organization_group_sync",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/saml-group-sync/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"saml-group-sync",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/saml-group-sync/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"saml-group-sync",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
					},
				},
			},
			"organization_group_sync_status": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "saml_group_sync_status",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "organization_group_sync_status",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/saml-group-sync/status/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"saml-group-sync",
									"status",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
					},
				},
			},
			"organization_invite": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expires_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inviter",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inviter_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "org",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "teams",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_url",
						"type": "`$STRING`",
					},
				},
				"name": "organization_invite",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/invites/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"invites",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/invites/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"invites",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/orgs/{org}/invites/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"invites",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
					},
				},
			},
			"organization_invite_extend": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expires_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inviter",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inviter_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "org",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "teams",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_url",
						"type": "`$STRING`",
					},
				},
				"name": "organization_invite_extend",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/invites/{slug_perm}/extend/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"invites",
									"{slug_perm}",
									"extend",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/invites/{slug_perm}/resend/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"invites",
									"{slug_perm}",
									"resend",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
							"invite",
						},
					},
				},
			},
			"organization_membership": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "has_two_factor",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "joined_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_login_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_login_method",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibility",
						"type": "`$STRING`",
					},
				},
				"name": "organization_membership",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "is_active",
											"orig": "is_active",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/members/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"is_active",
										"org_id",
										"page",
										"page_size",
										"query",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "member",
											"orig": "member",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/members/{member}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"members",
									"{member}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "member",
											"orig": "member",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/orgs/{org}/members/{member}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"members",
									"{member}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"member",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
						[]any{
							"org",
							"member",
						},
					},
				},
			},
			"organization_membership_role_update": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "has_two_factor",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "joined_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_login_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_login_method",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibility",
						"type": "`$STRING`",
					},
				},
				"name": "organization_membership_role_update",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "member",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/orgs/{org}/members/{member}/update-role/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"members",
									"{member_id}",
									"update-role",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"member": "member_id",
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"member_id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
							"member",
						},
					},
				},
			},
			"organization_membership_visibility_update": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "has_two_factor",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "joined_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_login_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_login_method",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibility",
						"type": "`$STRING`",
					},
				},
				"name": "organization_membership_visibility_update",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "member",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/orgs/{org}/members/{member}/update-visibility/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"members",
									"{member_id}",
									"update-visibility",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"member": "member_id",
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"member_id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
							"member",
						},
					},
				},
			},
			"organization_package_license_policy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_unknown_licenses",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "on_violation_quarantine",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "package_query_string",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "spdx_identifiers",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
				},
				"name": "organization_package_license_policy",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/license-policy/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"license-policy",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/license-policy/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"license-policy",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/license-policy/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"license-policy",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/orgs/{org}/license-policy/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"license-policy",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/orgs/{org}/license-policy/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"license-policy",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
					},
				},
			},
			"organization_package_vulnerability_policy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_unknown_severity",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "min_severity",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "on_violation_quarantine",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "package_query_string",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
				},
				"name": "organization_package_vulnerability_policy",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/vulnerability-policy/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"vulnerability-policy",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/vulnerability-policy/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"vulnerability-policy",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/vulnerability-policy/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"vulnerability-policy",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/orgs/{org}/vulnerability-policy/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"vulnerability-policy",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/orgs/{org}/vulnerability-policy/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"vulnerability-policy",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
					},
				},
			},
			"organization_saml_auth": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "saml_auth_enabled",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "saml_auth_enforced",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "saml_metadata_inline",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "saml_metadata_url",
						"type": "`$STRING`",
					},
				},
				"name": "organization_saml_auth",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/saml-authentication",
								"parts": []any{
									"orgs",
									"{org_id}",
									"saml-authentication",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/orgs/{org}/saml-authentication",
								"parts": []any{
									"orgs",
									"{org_id}",
									"saml-authentication",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
					},
				},
			},
			"organization_team": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibility",
						"type": "`$STRING`",
					},
				},
				"name": "organization_team",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/teams/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"teams",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "for_user",
											"orig": "for_user",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/teams/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"teams",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"for_user",
										"org_id",
										"page",
										"page_size",
										"query",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "team",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/teams/{team}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"teams",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"team": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "team",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/orgs/{org}/teams/{team}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"teams",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"team": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
					},
				},
			},
			"organization_team_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "role",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "organization_team_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "team_id",
											"orig": "team",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/teams/{team}/members",
								"parts": []any{
									"orgs",
									"{org_id}",
									"teams",
									"{team_id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"team": "team_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"org_id",
										"team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "team_id",
											"orig": "team",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/teams/{team}/members",
								"parts": []any{
									"orgs",
									"{org_id}",
									"teams",
									"{team_id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"team": "team_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
										"team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.members`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
							"team",
						},
					},
				},
			},
			"oss": map[string]any{
				"fields": []any{},
				"name": "oss",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"p2n": map[string]any{
				"fields": []any{},
				"name": "p2n",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"package": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "architectures",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "backend_kind",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "bandwidth",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "cdn_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "checksum_md5",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "checksum_sha1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "checksum_sha256",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "checksum_sha512",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "count",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "dep_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dependencies_checksum_md5",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dependencies_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "display_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "distro",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "distro_version",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "downloads",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$INTEGER`",
							},
							"list": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "epoch",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "extension",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "filename",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "files",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "format_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "freeable_storage",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "fully_qualified_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "identifier_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "identifiers",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "inactive",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "indexed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_cancellable",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_copyable",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_deleteable",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_downloadable",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_moveable",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_quarantinable",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_quarantined",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_resyncable",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_security_scannable",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_sync_awaiting",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_sync_completed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_sync_failed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_sync_in_flight",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_sync_in_progress",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "last_push",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "license",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "namespace",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "namespace_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "num_downloads",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_files",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "operator",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "origin_repository",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "origin_repository_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "package_type",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "policy_violated",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "release",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "repository",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "repository_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "security_scan_completed_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "security_scan_started_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "security_scan_status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "security_scan_status_updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "self_html_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "self_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "signature_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "size",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$INTEGER`",
							},
						},
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stage",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "stage_str",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stage_updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "status_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status_str",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status_updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subtype",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "summary",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sync_finished_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sync_progress",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tags",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tags_immutable",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type_display",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uploaded_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uploader",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uploader_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "version",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "version_orig",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "vulnerability_scan_results_url",
						"type": "`$STRING`",
					},
				},
				"name": "package",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/{identifier}/copy/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"{identifier}",
									"copy",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/{identifier}/move/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"{identifier}",
									"move",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/{identifier}/quarantine/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"{identifier}",
									"quarantine",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/{identifier}/tag/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"{identifier}",
									"tag",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/alpine/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"alpine",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/cargo/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"cargo",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/cocoapods/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"cocoapods",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/composer/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"composer",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/conan/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"conan",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/conda/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"conda",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/cran/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"cran",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/dart/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"dart",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/deb/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"deb",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/docker/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"docker",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/go/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"go",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/helm/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"helm",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/hex/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"hex",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/huggingface/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"huggingface",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/luarocks/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"luarocks",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/maven/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"maven",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/npm/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"npm",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/nuget/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"nuget",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/p2/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"p2",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/python/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"python",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/raw/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"raw",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/rpm/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"rpm",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/ruby/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"ruby",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/swift/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"swift",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/terraform/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"terraform",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/upload/vagrant/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"upload",
									"vagrant",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/alpine/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"alpine",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/cargo/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"cargo",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/cocoapods/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"cocoapods",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/composer/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"composer",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/conan/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"conan",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/conda/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"conda",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/cran/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"cran",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/dart/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"dart",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/deb/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"deb",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/docker/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"docker",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/go/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"go",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/helm/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"helm",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/hex/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"hex",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/huggingface/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"huggingface",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/luarocks/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"luarocks",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/maven/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"maven",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/npm/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"npm",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/nuget/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"nuget",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/p2/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"p2",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/python/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"python",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/raw/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"raw",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/rpm/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"rpm",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/ruby/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"ruby",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/swift/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"swift",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/terraform/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"terraform",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/validate-upload/vagrant/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"validate-upload",
									"vagrant",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/{identifier}/resync/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"{identifier}",
									"resync",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/packages/{owner}/{repo}/{identifier}/scan/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"{identifier}",
									"scan",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "group_by",
											"orig": "group_by",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/packages/{owner}/{repo}/groups/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"groups",
								},
								"select": map[string]any{
									"exist": []any{
										"group_by",
										"owner",
										"page",
										"page_size",
										"query",
										"repo",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/packages/{owner}/{repo}/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
								},
								"select": map[string]any{
									"exist": []any{
										"owner",
										"page",
										"page_size",
										"query",
										"repo",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/packages/{owner}/{repo}/{identifier}/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"{identifier}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/packages/{owner}/{repo}/{identifier}/dependencies/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"{identifier}",
									"dependencies",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.dependencies`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "finish",
											"orig": "finish",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "package",
											"orig": "package",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/metrics/packages/{owner}/{repo}/",
								"parts": []any{
									"metrics",
									"packages",
									"{owner}",
									"{repo}",
								},
								"select": map[string]any{
									"exist": []any{
										"finish",
										"owner",
										"package",
										"page",
										"page_size",
										"repo",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.packages`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/packages/{owner}/{repo}/{identifier}/status/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"{identifier}",
									"status",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/packages/{owner}/{repo}/{identifier}/",
								"parts": []any{
									"packages",
									"{owner}",
									"{repo}",
									"{identifier}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"package_deny_policy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "package_query_string",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
				},
				"name": "package_deny_policy",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/deny-policy/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"deny-policy",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/deny-policy/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"deny-policy",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/deny-policy/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"deny-policy",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/orgs/{org}/deny-policy/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"deny-policy",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/orgs/{org}/deny-policy/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"deny-policy",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
					},
				},
			},
			"package_file_parts_upload": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upload_querystring",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upload_url",
						"type": "`$STRING`",
					},
				},
				"name": "package_file_parts_upload",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filename",
											"orig": "filename",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "part_number",
											"orig": "part_number",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/files/{owner}/{repo}/{identifier}/info/",
								"parts": []any{
									"files",
									"{owner}",
									"{repo}",
									"{identifier}",
									"info",
								},
								"select": map[string]any{
									"exist": []any{
										"filename",
										"identifier",
										"owner",
										"part_number",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"file",
						},
					},
				},
			},
			"package_file_upload": map[string]any{
				"fields": []any{},
				"name": "package_file_upload",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/files/{owner}/{repo}/{identifier}/complete/",
								"parts": []any{
									"files",
									"{owner}",
									"{repo}",
									"{identifier}",
									"complete",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"file",
						},
					},
				},
			},
			"package_license_policy_evaluation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_unknown_licenses",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "evaluation_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "on_violation_quarantine",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "package_query_string",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "policy",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "spdx_identifiers",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "violation_count",
						"type": "`$INTEGER`",
					},
				},
				"name": "package_license_policy_evaluation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "policy_slug_perm",
											"orig": "policy_slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"license-policy",
									"{policy_slug_perm}",
									"evaluation",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"org_id",
										"policy_slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.policy`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "policy_slug_perm",
											"orig": "policy_slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"license-policy",
									"{policy_slug_perm}",
									"evaluation",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
										"page",
										"page_size",
										"policy_slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "license_policy_id",
											"orig": "policy_slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"license-policy",
									"{license_policy_id}",
									"evaluation",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"policy_slug_perm": "license_policy_id",
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"license_policy_id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.policy`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
							"license_policy",
						},
					},
				},
			},
			"package_version_badge": map[string]any{
				"fields": []any{},
				"name": "package_version_badge",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "package_format",
											"orig": "package_format",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "package_identifier",
											"orig": "package_identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "package_name",
											"orig": "package_name",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "package_version",
											"orig": "package_version",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "badge_token",
											"orig": "badge_token",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "cache_second",
											"orig": "cache_second",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "color",
											"orig": "color",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "label",
											"orig": "label",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "label_color",
											"orig": "label_color",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "logo_color",
											"orig": "logo_color",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "logo_width",
											"orig": "logo_width",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "render",
											"orig": "render",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "shield",
											"orig": "shield",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "show_latest",
											"orig": "show_latest",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "style",
											"orig": "style",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/badges/version/{owner}/{repo}/{package_format}/{package_name}/{package_version}/{package_identifiers}/",
								"parts": []any{
									"badges",
									"version",
									"{owner}",
									"{repo}",
									"{package_format}",
									"{package_name}",
									"{package_version}",
									"{package_identifier}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"package_identifiers": "package_identifier",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"version",
						},
					},
				},
			},
			"package_vulnerability_policy_evaluation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_unknown_severity",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "evaluation_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "min_severity",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "on_violation_quarantine",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "package_query_string",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "policy",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "violation_count",
						"type": "`$INTEGER`",
					},
				},
				"name": "package_vulnerability_policy_evaluation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "policy_slug_perm",
											"orig": "policy_slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/vulnerability-policy/{policy_slug_perm}/evaluation/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"vulnerability-policy",
									"{policy_slug_perm}",
									"evaluation",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"org_id",
										"policy_slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.policy`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "policy_slug_perm",
											"orig": "policy_slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/vulnerability-policy/{policy_slug_perm}/evaluation/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"vulnerability-policy",
									"{policy_slug_perm}",
									"evaluation",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
										"page",
										"page_size",
										"policy_slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "vulnerability_policy_id",
											"orig": "policy_slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/vulnerability-policy/{policy_slug_perm}/evaluation/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"vulnerability-policy",
									"{vulnerability_policy_id}",
									"evaluation",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"policy_slug_perm": "vulnerability_policy_id",
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"org_id",
										"vulnerability_policy_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.policy`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
							"vulnerability_policy",
						},
					},
				},
			},
			"privilege": map[string]any{
				"fields": []any{},
				"name": "privilege",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"profile": map[string]any{
				"fields": []any{},
				"name": "profile",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"provider_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "claims",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "enabled",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mapping_claim",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service_accounts",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
				},
				"name": "provider_setting",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/openid-connect/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"openid-connect",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
										"page",
										"page_size",
										"query",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/openid-connect/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"openid-connect",
									"{slug_perm}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
						[]any{
							"org",
							"openid_connect",
						},
					},
				},
			},
			"provider_settings_write": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "claims",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "dynamic_mappings",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "enabled",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mapping_claim",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service_accounts",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
				},
				"name": "provider_settings_write",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/openid-connect/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"openid-connect",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/orgs/{org}/openid-connect/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"openid-connect",
									"{slug_perm}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"org_id",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/orgs/{org}/openid-connect/{slug_perm}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"openid-connect",
									"{slug_perm}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"org_id",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
						[]any{
							"org",
							"openid_connect",
						},
					},
				},
			},
			"python": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "python",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/python/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"python",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/python/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"python",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/python/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"python",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/python/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"python",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/python/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"python",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"quarantine": map[string]any{
				"fields": []any{},
				"name": "quarantine",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"quota": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "display",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "history",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "raw",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "quota",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/quota/{owner}/",
								"parts": []any{
									"quota",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"owner": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.usage`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/quota/history/{owner}/",
								"parts": []any{
									"quota",
									"history",
									"{owner}",
								},
								"select": map[string]any{
									"exist": []any{
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/quota/oss/history/{owner}/",
								"parts": []any{
									"quota",
									"oss",
									"history",
									"{owner}",
								},
								"select": map[string]any{
									"exist": []any{
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/quota/oss/{owner}/",
								"parts": []any{
									"quota",
									"oss",
									"{owner}",
								},
								"select": map[string]any{
									"exist": []any{
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.usage`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"history",
						},
						[]any{
							"oss",
						},
					},
				},
			},
			"raw": map[string]any{
				"fields": []any{},
				"name": "raw",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"refresh": map[string]any{
				"fields": []any{},
				"name": "refresh",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"entitlement",
						},
					},
				},
			},
			"regenerate": map[string]any{
				"fields": []any{},
				"name": "regenerate",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"repo": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cdn_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content_kind",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contextual_auth_realm",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "copy_own",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "copy_packages",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cosign_signing_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "default_privilege",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "delete_own",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "delete_packages",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deleted_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "distributes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "docker_refresh_tokens_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ecdsa_keys",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "enforce_eula",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "gpg_keys",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "index_files",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_open_source",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_private",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_public",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "manage_entitlements_privilege",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "move_own",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "move_packages",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "namespace",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "namespace_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nuget_native_signing_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "num_downloads",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_policy_violated_packages",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_quarantined_packages",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "open_source_license",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "open_source_project_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "package_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "package_group_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "proxy_npmjs",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "proxy_pypi",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "raw_package_index_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "raw_package_index_signatures_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "replace_packages",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "replace_packages_by_default",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "repository_type",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "repository_type_str",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "resync_own",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "resync_packages",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "scan_own",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "scan_packages",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "self_html_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "self_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "show_setup_all",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "size",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "size_str",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "storage_region",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "strict_npm_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "tag_pre_releases_as_latest",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "use_debian_labels",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "use_default_cargo_upstream",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "use_entitlements_privilege",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "use_noarch_packages",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "use_source_packages",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "use_vulnerability_scanning",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "user_entitlements_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "view_statistics",
						"type": "`$STRING`",
					},
				},
				"name": "repo",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/geoip/disable/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"geoip",
									"disable",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/geoip/enable/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"geoip",
									"enable",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{repo}/transfer-region/",
								"parts": []any{
									"repos",
									"{owner}",
									"{repo}",
									"transfer-region",
								},
								"select": map[string]any{
									"$action": "transfer_region",
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/",
								"parts": []any{
									"repos",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"owner": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/",
								"parts": []any{
									"repos",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/",
								"parts": []any{
									"repos",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"owner": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/privileges",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"privileges",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"cargo",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/composer/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"composer",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/conda/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"conda",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/cran/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"cran",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/dart/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"dart",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/deb/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"deb",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/docker/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"docker",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/go/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"go",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/helm/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"helm",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/hex/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"hex",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/huggingface/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"huggingface",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/maven/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"maven",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/npm/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"npm",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/nuget/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"nuget",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/python/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"python",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"rpm",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"ruby",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/upstream/swift/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"swift",
									"{slug_perm}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{identifier}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/privileges",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"privileges",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
						[]any{
							"repo",
							"cargo",
						},
						[]any{
							"repo",
							"composer",
						},
						[]any{
							"repo",
							"conda",
						},
						[]any{
							"repo",
							"cran",
						},
						[]any{
							"repo",
							"dart",
						},
						[]any{
							"repo",
							"deb",
						},
						[]any{
							"repo",
							"docker",
						},
						[]any{
							"repo",
							"go",
						},
						[]any{
							"repo",
							"helm",
						},
						[]any{
							"repo",
							"hex",
						},
						[]any{
							"repo",
							"huggingface",
						},
						[]any{
							"repo",
							"maven",
						},
						[]any{
							"repo",
							"npm",
						},
						[]any{
							"repo",
							"nuget",
						},
						[]any{
							"repo",
							"python",
						},
						[]any{
							"repo",
							"rpm",
						},
						[]any{
							"repo",
							"ruby",
						},
						[]any{
							"repo",
							"swift",
						},
					},
				},
			},
			"repository_audit_log": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actor",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "actor_ip_address",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "actor_kind",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "actor_location",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "actor_slug_perm",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "actor_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "context",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "event",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "event_at",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_kind",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_slug_perm",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uuid",
						"type": "`$STRING`",
					},
				},
				"name": "repository_audit_log",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/audit-log/{owner}/{repo}/",
								"parts": []any{
									"audit-log",
									"{owner}",
									"{repo}",
								},
								"select": map[string]any{
									"exist": []any{
										"owner",
										"page",
										"page_size",
										"query",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"audit_log",
						},
					},
				},
			},
			"repository_ecdsa_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "default",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "fingerprint",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fingerprint_short",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "public_key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ssh_fingerprint",
						"type": "`$STRING`",
					},
				},
				"name": "repository_ecdsa_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/ecdsa/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"ecdsa",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/ecdsa/regenerate/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"ecdsa",
									"regenerate",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/ecdsa/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"ecdsa",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"repository_geo_ip_rule": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cidr",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "country_code",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "repository_geo_ip_rule",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/geoip",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"geoip",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/geoip",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"geoip",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/geoip",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"geoip",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"repository_geo_ip_status": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "geoip_enabled",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "repository_geo_ip_status",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/geoip/status/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"geoip",
									"status",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"repository_geo_ip_test_address": map[string]any{
				"fields": []any{},
				"name": "repository_geo_ip_test_address",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/geoip/test/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"geoip",
									"test",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"repository_gpg_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "comment",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "default",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "fingerprint",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fingerprint_short",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "public_key",
						"type": "`$STRING`",
					},
				},
				"name": "repository_gpg_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/gpg/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"gpg",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/gpg/regenerate/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"gpg",
									"regenerate",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/gpg/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"gpg",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"repository_privilege_input": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "privilege",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "team",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user",
						"type": "`$STRING`",
					},
				},
				"name": "repository_privilege_input",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/privileges",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"privileges",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.privileges`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"repository_retention_rule": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "retention_count_limit",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "retention_days_limit",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "retention_enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "retention_group_by_format",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "retention_group_by_name",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "retention_group_by_package_type",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "retention_package_query_string",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "retention_size_limit",
						"type": "`$INTEGER`",
					},
				},
				"name": "repository_retention_rule",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{repo}/retention/",
								"parts": []any{
									"repos",
									"{owner}",
									"{repo}",
									"retention",
								},
								"select": map[string]any{
									"exist": []any{
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{repo}/retention/",
								"parts": []any{
									"repos",
									"{owner}",
									"{repo}",
									"retention",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"repository_rsa_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "default",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "fingerprint",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fingerprint_short",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "public_key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ssh_fingerprint",
						"type": "`$STRING`",
					},
				},
				"name": "repository_rsa_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/rsa/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"rsa",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/rsa/regenerate/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"rsa",
									"regenerate",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/rsa/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"rsa",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"repository_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "clients",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_by",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_by_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "default",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "disable_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "downloads",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "enable_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eula_accepted",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "eula_accepted_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eula_accepted_from",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eula_required",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "has_limits",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "identifier",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_limited",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "limit_bandwidth",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "limit_bandwidth_unit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit_date_range_from",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit_date_range_to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit_num_clients",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "limit_num_downloads",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "limit_package_query",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit_path_query",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "refresh_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reset_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "scheduled_reset_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "scheduled_reset_period",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "self_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "token",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_by",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_by_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "usage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_url",
						"type": "`$STRING`",
					},
				},
				"name": "repository_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
										map[string]any{
											"kind": "query",
											"name": "show_token",
											"orig": "show_token",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/entitlements/{owner}/{repo}/",
								"parts": []any{
									"entitlements",
									"{owner}",
									"{repo}",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
										"show_token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "active",
											"orig": "active",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "show_token",
											"orig": "show_token",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/entitlements/{owner}/{repo}/",
								"parts": []any{
									"entitlements",
									"{owner}",
									"{repo}",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "fuzzy",
											"orig": "fuzzy",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "show_token",
											"orig": "show_token",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/entitlements/{owner}/{repo}/{identifier}/",
								"parts": []any{
									"entitlements",
									"{owner}",
									"{repo}",
									"{identifier}",
								},
								"select": map[string]any{
									"exist": []any{
										"fuzzy",
										"identifier",
										"owner",
										"repo",
										"show_token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
										map[string]any{
											"kind": "query",
											"name": "show_token",
											"orig": "show_token",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/entitlements/{owner}/{repo}/{identifier}/",
								"parts": []any{
									"entitlements",
									"{owner}",
									"{repo}",
									"{identifier}",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
										"repo",
										"show_token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"entitlement",
						},
					},
				},
			},
			"repository_token_refresh": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "clients",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_by",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_by_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "default",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "disable_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "downloads",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "enable_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eula_accepted",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "eula_accepted_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eula_accepted_from",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eula_required",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "has_limits",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "identifier",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_limited",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "limit_bandwidth",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "limit_bandwidth_unit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit_date_range_from",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit_date_range_to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit_num_clients",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "limit_num_downloads",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "limit_package_query",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit_path_query",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "refresh_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reset_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "scheduled_reset_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "scheduled_reset_period",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "self_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "token",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_by",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_by_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "usage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_url",
						"type": "`$STRING`",
					},
				},
				"name": "repository_token_refresh",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
										map[string]any{
											"kind": "query",
											"name": "show_token",
											"orig": "show_token",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/entitlements/{owner}/{repo}/{identifier}/refresh/",
								"parts": []any{
									"entitlements",
									"{owner}",
									"{repo}",
									"{identifier}",
									"refresh",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
										"repo",
										"show_token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"entitlement",
						},
					},
				},
			},
			"repository_token_sync": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "tokens",
						"type": "`$ARRAY`",
					},
				},
				"name": "repository_token_sync",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
										map[string]any{
											"kind": "query",
											"name": "show_token",
											"orig": "show_token",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/entitlements/{owner}/{repo}/sync/",
								"parts": []any{
									"entitlements",
									"{owner}",
									"{repo}",
									"sync",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
										"show_token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"entitlement",
						},
					},
				},
			},
			"repository_webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_by",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_by_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "disable_reason_str",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "event",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "events",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "identifier",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_last_response_bad",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "last_response_status",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "last_response_status_str",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "num_sent",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "package_query",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "request_body_format",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "request_body_format_str",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "request_body_template_format",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "request_body_template_format_str",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "request_content_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "secret_header",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "self_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "target_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "template",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "templates",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_by",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_by_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "repository_webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks/{owner}/{repo}/",
								"parts": []any{
									"webhooks",
									"{owner}",
									"{repo}",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks/{owner}/{repo}/",
								"parts": []any{
									"webhooks",
									"{owner}",
									"{repo}",
								},
								"select": map[string]any{
									"exist": []any{
										"owner",
										"page",
										"page_size",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks/{owner}/{repo}/{identifier}/",
								"parts": []any{
									"webhooks",
									"{owner}",
									"{repo}",
									"{identifier}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/webhooks/{owner}/{repo}/{identifier}/",
								"parts": []any{
									"webhooks",
									"{owner}",
									"{repo}",
									"{identifier}",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"webhook",
						},
					},
				},
			},
			"repository_x509_ecdsa_certificate": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "certificate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "certificate_chain",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "certificate_chain_fingerprint",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "certificate_chain_fingerprint_short",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "certificate_fingerprint",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "certificate_fingerprint_short",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "default",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "issuing_status",
						"type": "`$STRING`",
					},
				},
				"name": "repository_x509_ecdsa_certificate",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/x509-ecdsa/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"x509-ecdsa",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"repository_x509_rsa_certificate": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "certificate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "certificate_chain",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "certificate_chain_fingerprint",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "certificate_chain_fingerprint_short",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "certificate_fingerprint",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "certificate_fingerprint_short",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "default",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "issuing_status",
						"type": "`$STRING`",
					},
				},
				"name": "repository_x509_rsa_certificate",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/x509-rsa/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"x509-rsa",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"reset": map[string]any{
				"fields": []any{},
				"name": "reset",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"entitlement",
						},
					},
				},
			},
			"resources_rate_check": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "interval",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "limit",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "remaining",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "reset",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "reset_iso_8601",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "throttled",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "resources_rate_check",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/rates/limits/",
								"parts": []any{
									"rates",
									"limits",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.resources`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"resync": map[string]any{
				"fields": []any{},
				"name": "resync",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"retention": map[string]any{
				"fields": []any{},
				"name": "retention",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"rpm": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "distro_version",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gpg_key_inline",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gpg_key_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gpg_verification",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "include_sources",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verification_status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "rpm",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/rpm/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"rpm",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/rpm/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"rpm",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"rpm",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"rpm",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/rpm/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"rpm",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"rsa": map[string]any{
				"fields": []any{},
				"name": "rsa",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"ruby": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "ruby",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/ruby/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"ruby",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/ruby/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"ruby",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"ruby",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"ruby",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/ruby/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"ruby",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"saml_group_sync": map[string]any{
				"fields": []any{},
				"name": "saml_group_sync",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
					},
				},
			},
			"scan": map[string]any{
				"fields": []any{},
				"name": "scan",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"self": map[string]any{
				"fields": []any{},
				"name": "self",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"service": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_by",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_by_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key_expires_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "teams",
						"type": "`$ARRAY`",
					},
				},
				"name": "service",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/services/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"services",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "service",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orgs/{org}/services/{service}/refresh/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"services",
									"{id}",
									"refresh",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"service": "id",
									},
								},
								"select": map[string]any{
									"$action": "refresh",
									"exist": []any{
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/services/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"services",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
										"page",
										"page_size",
										"query",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "service",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orgs/{org}/services/{service}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"services",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"service": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "service",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/orgs/{org}/services/{service}/",
								"parts": []any{
									"orgs",
									"{org_id}",
									"services",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org": "org_id",
										"service": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"org_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
					},
				},
			},
			"status": map[string]any{
				"fields": []any{},
				"name": "status",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"status_basic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "detail",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "version",
						"type": "`$STRING`",
					},
				},
				"name": "status_basic",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/status/check/basic/",
								"parts": []any{
									"status",
									"check",
									"basic",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"storage_region": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "label",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "storage_region",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/storage-regions/",
								"parts": []any{
									"storage-regions",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/storage-regions/{slug}/",
								"parts": []any{
									"storage-regions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"swift": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_header_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_1",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extra_value_2",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_validation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verify_ssl",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "swift",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/repos/{owner}/{identifier}/upstream/swift/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"swift",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/swift/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"swift",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{identifier}/upstream/swift/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"swift",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{identifier}/upstream/swift/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"swift",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/repos/{owner}/{identifier}/upstream/swift/{slug_perm}/",
								"parts": []any{
									"repos",
									"{owner}",
									"{identifier}",
									"upstream",
									"swift",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug_perm": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"id",
										"identifier",
										"owner",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
						[]any{
							"repo",
						},
					},
				},
			},
			"sync": map[string]any{
				"fields": []any{},
				"name": "sync",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"entitlement",
						},
					},
				},
			},
			"tag": map[string]any{
				"fields": []any{},
				"name": "tag",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"team": map[string]any{
				"fields": []any{},
				"name": "team",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
					},
				},
			},
			"terraform": map[string]any{
				"fields": []any{},
				"name": "terraform",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"test": map[string]any{
				"fields": []any{},
				"name": "test",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"token": map[string]any{
				"fields": []any{},
				"name": "token",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"token",
						},
					},
				},
			},
			"transfer_region": map[string]any{
				"fields": []any{},
				"name": "transfer_region",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"user": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
				},
				"name": "user",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/user/tokens/",
								"parts": []any{
									"user",
									"tokens",
								},
								"select": map[string]any{
									"$action": "token",
									"exist": []any{
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_auth_token": map[string]any{
				"fields": []any{},
				"name": "user_auth_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data",
											"orig": "data",
											"type": "`$OBJECT`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/user/token/",
								"parts": []any{
									"user",
									"token",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_authentication_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
				},
				"name": "user_authentication_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/user/tokens/",
								"parts": []any{
									"user",
									"tokens",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/user/tokens/{slug_perm}/refresh/",
								"parts": []any{
									"user",
									"tokens",
									"{slug_perm}",
									"refresh",
								},
								"select": map[string]any{
									"exist": []any{
										"slug_perm",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"token",
						},
					},
				},
			},
			"user_brief": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "authenticated",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "email",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "profile_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "self_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
				},
				"name": "user_brief",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/user/self/",
								"parts": []any{
									"user",
									"self",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_profile": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "company",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "first_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "job_title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "joined_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug_perm",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tagline",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
				},
				"name": "user_profile",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/profile/{slug}/",
								"parts": []any{
									"users",
									"profile",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"vagrant": map[string]any{
				"fields": []any{},
				"name": "vagrant",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"validate": map[string]any{
				"fields": []any{},
				"name": "validate",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"file",
						},
					},
				},
			},
			"version": map[string]any{
				"fields": []any{},
				"name": "version",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"version",
						},
					},
				},
			},
			"vulnerability": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "has_vulnerabilities",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "identifier",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "max_severity",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "num_vulnerabilities",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "package",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "scan_id",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "target",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "vulnerability",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "package",
											"orig": "package",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/vulnerabilities/{owner}/{repo}/{package}/",
								"parts": []any{
									"vulnerabilities",
									"{owner}",
									"{repo}",
									"{package}",
								},
								"select": map[string]any{
									"exist": []any{
										"owner",
										"package",
										"page",
										"page_size",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "package",
											"orig": "package",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/vulnerabilities/{owner}/{repo}/{package}/{identifier}/",
								"parts": []any{
									"vulnerabilities",
									"{owner}",
									"{repo}",
									"{package}",
									"{identifier}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"package",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/vulnerabilities/{owner}/{repo}/",
								"parts": []any{
									"vulnerabilities",
									"{owner}",
									"{repo}",
								},
								"select": map[string]any{
									"exist": []any{
										"owner",
										"page",
										"page_size",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/vulnerabilities/{owner}/",
								"parts": []any{
									"vulnerabilities",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"owner": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"vulnerability",
						},
					},
				},
			},
			"vulnerability_policy": map[string]any{
				"fields": []any{},
				"name": "vulnerability_policy",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"org",
						},
						[]any{
							"org",
							"vulnerability_policy",
						},
					},
				},
			},
			"webhook": map[string]any{
				"fields": []any{},
				"name": "webhook",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/webhooks/{owner}/{repo}/{identifier}/",
								"parts": []any{
									"webhooks",
									"{owner}",
									"{repo}",
									"{identifier}",
								},
								"select": map[string]any{
									"exist": []any{
										"identifier",
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"webhook",
						},
					},
				},
			},
			"x509_ecdsa": map[string]any{
				"fields": []any{},
				"name": "x509_ecdsa",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"x509_rsa": map[string]any{
				"fields": []any{},
				"name": "x509_rsa",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
