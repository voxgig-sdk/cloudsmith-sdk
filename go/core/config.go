package core

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
				"gon2": map[string]any{},
				"gon3": map[string]any{},
				"gon4": map[string]any{},
				"gon5": map[string]any{},
				"gon6": map[string]any{},
				"gon7": map[string]any{},
				"gon8": map[string]any{},
				"gon9": map[string]any{},
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
				"p2n2": map[string]any{},
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "cargo",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "composer",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "conda",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "cran",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "dart",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "component",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "distro_version",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "gpg_key_inline",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "gpg_key_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "gpg_verification",
						"req": false,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "include_source",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "upstream_distribution",
						"req": false,
						"type": "`$STRING`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "verification_status",
						"req": false,
						"type": "`$STRING`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 25,
					},
				},
				"name": "deb",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "format",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "format_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "self_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "variant",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "version",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 6,
					},
				},
				"name": "distribution_full",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "docker",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "claim_value",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "service_account",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
				},
				"name": "dynamic_mapping",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "provider_setting",
											"orig": "provider_setting",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "claim_value",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "openid_connect_id",
											"orig": "provider_setting",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "token",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
				},
				"name": "entitlement",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "show_token",
											"orig": "show_token",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 2,
							},
						},
						"key$": "create",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "finish",
											"orig": "finish",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "finish",
											"orig": "finish",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 1,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "remove",
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
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 2,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "description",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "distribution",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "extension",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "premium",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "premium_plan_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "premium_plan_name",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "support",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 8,
					},
				},
				"name": "format",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
				"fields": []any{},
				"name": "gon",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"gon2": map[string]any{
				"fields": []any{},
				"name": "gon2",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"package",
						},
					},
				},
			},
			"gon3": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "gon3",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
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
			"gon4": map[string]any{
				"fields": []any{},
				"name": "gon4",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
			"gon5": map[string]any{
				"fields": []any{},
				"name": "gon5",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
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
			"gon6": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "gon6",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
							"go",
						},
					},
				},
			},
			"gon7": map[string]any{
				"fields": []any{},
				"name": "gon7",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
							"go",
						},
					},
				},
			},
			"gon8": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "gon8",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
							"go",
						},
					},
				},
			},
			"gon9": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "gon9",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "helm",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "hex",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "huggingface",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "gpg_key_inline",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "gpg_key_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "gpg_verification",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "verification_status",
						"req": false,
						"type": "`$STRING`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 21,
					},
				},
				"name": "maven",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "type_name",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
				},
				"name": "namespace",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"namespace_audit_log": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "actor",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "actor_ip_address",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "actor_kind",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "actor_location",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "actor_slug_perm",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "actor_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "context",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "event",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "event_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "object_kind",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "object_slug_perm",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "target",
						"req": true,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "target_kind",
						"req": true,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "target_slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "uuid",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
				},
				"name": "namespace_audit_log",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"npm": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "npm",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "nuget",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "country",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "event_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "location",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "package",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "policy",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "reason",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "tagline",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "vulnerability_scan_result",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 11,
					},
				},
				"name": "org",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "member_id",
											"orig": "member",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 2,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 2,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "member_id",
											"orig": "member",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 1,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "member",
											"orig": "member",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "service",
											"orig": "service",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 2,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 3,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 4,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 5,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 6,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 7,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "team",
											"orig": "team",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 8,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 9,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "team_id",
											"orig": "team",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "idp_key",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "idp_value",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "role",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "team",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
				},
				"name": "organization_group_sync",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "saml_group_sync_status",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 0,
					},
				},
				"name": "organization_group_sync_status",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "email",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "expires_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "inviter",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "inviter_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "org",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "role",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "team",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "user",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "user_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
				},
				"name": "organization_invite",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "email",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "expires_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "inviter",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "inviter_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "org",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "role",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "team",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "user",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "user_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
				},
				"name": "organization_invite_extend",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 1,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "email",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "has_two_factor",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "joined_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "last_login_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "last_login_method",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "role",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "user",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "user_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "user_name",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "user_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "visibility",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
				},
				"name": "organization_membership",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "is_active",
											"orig": "is_active",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "member",
											"orig": "member",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "member",
											"orig": "member",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "email",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "has_two_factor",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "joined_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "last_login_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "last_login_method",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "role",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "user",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "user_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "user_name",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "user_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "visibility",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
				},
				"name": "organization_membership_role_update",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "member_id",
											"orig": "member",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "email",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "has_two_factor",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "joined_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "last_login_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "last_login_method",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "role",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "user",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "user_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "user_name",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "user_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "visibility",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
				},
				"name": "organization_membership_visibility_update",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "member_id",
											"orig": "member",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "allow_unknown_license",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "on_violation_quarantine",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "package_query_string",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "spdx_identifier",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
				},
				"name": "organization_package_license_policy",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "allow_unknown_severity",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "min_severity",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "on_violation_quarantine",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "package_query_string",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
				},
				"name": "organization_package_vulnerability_policy",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "saml_auth_enabled",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "saml_auth_enforced",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "saml_metadata_inline",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "saml_metadata_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
				},
				"name": "organization_saml_auth",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "visibility",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
				},
				"name": "organization_team",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "for_user",
											"orig": "for_user",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "team",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "team",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "role",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "user",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
				},
				"name": "organization_team_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "team_id",
											"orig": "team",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "team_id",
											"orig": "team",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
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
			"p2n2": map[string]any{
				"fields": []any{},
				"name": "p2n2",
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
						"active": true,
						"name": "architecture",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "backend_kind",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "cdn_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "checksum_md5",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "checksum_sha1",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "checksum_sha256",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "checksum_sha512",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "count",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "dep_type",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "dependencies_checksum_md5",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "dependencies_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "display_name",
						"req": false,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "distro",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "distro_version",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "download",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "epoch",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "extension",
						"req": false,
						"type": "`$STRING`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "file",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "filename",
						"req": false,
						"type": "`$STRING`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "format",
						"req": false,
						"type": "`$STRING`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "format_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "freeable_storage",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "fully_qualified_name",
						"req": false,
						"type": "`$STRING`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "identifier",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "identifier_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "indexed",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "is_cancellable",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "is_copyable",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "is_deleteable",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "is_downloadable",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "is_moveable",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "is_quarantinable",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "is_quarantined",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 33,
					},
					map[string]any{
						"active": true,
						"name": "is_resyncable",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 34,
					},
					map[string]any{
						"active": true,
						"name": "is_security_scannable",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 35,
					},
					map[string]any{
						"active": true,
						"name": "is_sync_awaiting",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 36,
					},
					map[string]any{
						"active": true,
						"name": "is_sync_completed",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 37,
					},
					map[string]any{
						"active": true,
						"name": "is_sync_failed",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 38,
					},
					map[string]any{
						"active": true,
						"name": "is_sync_in_flight",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 39,
					},
					map[string]any{
						"active": true,
						"name": "is_sync_in_progress",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 40,
					},
					map[string]any{
						"active": true,
						"name": "last_push",
						"req": true,
						"type": "`$STRING`",
						"index$": 41,
					},
					map[string]any{
						"active": true,
						"name": "license",
						"req": false,
						"type": "`$STRING`",
						"index$": 42,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 43,
					},
					map[string]any{
						"active": true,
						"name": "namespace",
						"req": false,
						"type": "`$STRING`",
						"index$": 44,
					},
					map[string]any{
						"active": true,
						"name": "namespace_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 45,
					},
					map[string]any{
						"active": true,
						"name": "num_download",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 46,
					},
					map[string]any{
						"active": true,
						"name": "num_file",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 47,
					},
					map[string]any{
						"active": true,
						"name": "operator",
						"req": false,
						"type": "`$STRING`",
						"index$": 48,
					},
					map[string]any{
						"active": true,
						"name": "origin_repository",
						"req": false,
						"type": "`$STRING`",
						"index$": 49,
					},
					map[string]any{
						"active": true,
						"name": "origin_repository_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 50,
					},
					map[string]any{
						"active": true,
						"name": "package",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 51,
					},
					map[string]any{
						"active": true,
						"name": "package_type",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 52,
					},
					map[string]any{
						"active": true,
						"name": "policy_violated",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 53,
					},
					map[string]any{
						"active": true,
						"name": "release",
						"req": false,
						"type": "`$STRING`",
						"index$": 54,
					},
					map[string]any{
						"active": true,
						"name": "repository",
						"req": false,
						"type": "`$STRING`",
						"index$": 55,
					},
					map[string]any{
						"active": true,
						"name": "repository_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 56,
					},
					map[string]any{
						"active": true,
						"name": "security_scan_completed_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 57,
					},
					map[string]any{
						"active": true,
						"name": "security_scan_started_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 58,
					},
					map[string]any{
						"active": true,
						"name": "security_scan_status",
						"req": false,
						"type": "`$STRING`",
						"index$": 59,
					},
					map[string]any{
						"active": true,
						"name": "security_scan_status_updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 60,
					},
					map[string]any{
						"active": true,
						"name": "self_html_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 61,
					},
					map[string]any{
						"active": true,
						"name": "self_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 62,
					},
					map[string]any{
						"active": true,
						"name": "signature_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 63,
					},
					map[string]any{
						"active": true,
						"name": "size",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$INTEGER`",
							},
						},
						"req": false,
						"type": "`$INTEGER`",
						"index$": 64,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": false,
						"type": "`$STRING`",
						"index$": 65,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 66,
					},
					map[string]any{
						"active": true,
						"name": "stage",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 67,
					},
					map[string]any{
						"active": true,
						"name": "stage_str",
						"req": false,
						"type": "`$STRING`",
						"index$": 68,
					},
					map[string]any{
						"active": true,
						"name": "stage_updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 69,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 70,
					},
					map[string]any{
						"active": true,
						"name": "status_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 71,
					},
					map[string]any{
						"active": true,
						"name": "status_str",
						"req": false,
						"type": "`$STRING`",
						"index$": 72,
					},
					map[string]any{
						"active": true,
						"name": "status_updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 73,
					},
					map[string]any{
						"active": true,
						"name": "status_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 74,
					},
					map[string]any{
						"active": true,
						"name": "subtype",
						"req": false,
						"type": "`$STRING`",
						"index$": 75,
					},
					map[string]any{
						"active": true,
						"name": "summary",
						"req": false,
						"type": "`$STRING`",
						"index$": 76,
					},
					map[string]any{
						"active": true,
						"name": "sync_finished_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 77,
					},
					map[string]any{
						"active": true,
						"name": "sync_progress",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 78,
					},
					map[string]any{
						"active": true,
						"name": "tag",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 79,
					},
					map[string]any{
						"active": true,
						"name": "tags_immutable",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 80,
					},
					map[string]any{
						"active": true,
						"name": "type_display",
						"req": false,
						"type": "`$STRING`",
						"index$": 81,
					},
					map[string]any{
						"active": true,
						"name": "uploaded_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 82,
					},
					map[string]any{
						"active": true,
						"name": "uploader",
						"req": false,
						"type": "`$STRING`",
						"index$": 83,
					},
					map[string]any{
						"active": true,
						"name": "uploader_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 84,
					},
					map[string]any{
						"active": true,
						"name": "version",
						"req": false,
						"type": "`$STRING`",
						"index$": 85,
					},
					map[string]any{
						"active": true,
						"name": "version_orig",
						"req": false,
						"type": "`$STRING`",
						"index$": 86,
					},
					map[string]any{
						"active": true,
						"name": "vulnerability_scan_results_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 87,
					},
				},
				"name": "package",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 2,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 3,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 4,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 5,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 6,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 7,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 8,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 9,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 10,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 11,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 12,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 13,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 14,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 15,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 16,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 17,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 18,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 19,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 20,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 21,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 22,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 23,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 24,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 25,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 26,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 27,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 28,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 29,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 30,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 31,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 32,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 33,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 34,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 35,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 36,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 37,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 38,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 39,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 40,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 41,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 42,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 43,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 44,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 45,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 46,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 47,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 48,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 49,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 50,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 51,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 52,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 53,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 54,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 55,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 56,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 57,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "group_by",
											"orig": "group_by",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 2,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 3,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "finish",
											"orig": "finish",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "package",
											"orig": "package",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 1,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "remove",
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
						"active": true,
						"name": "action",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "enabled",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "package_query_string",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
				},
				"name": "package_deny_policy",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "identifier",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "upload_querystring",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "upload_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
				},
				"name": "package_file_parts_upload",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "filename",
											"orig": "filename",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "part_number",
											"orig": "part_number",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "evaluation_count",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "policy",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "violation_count",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 6,
					},
				},
				"name": "package_license_policy_evaluation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "policy_slug_perm",
											"orig": "policy_slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "policy_slug_perm",
											"orig": "policy_slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "license_policy_id",
											"orig": "policy_slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 2,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
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
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "package_format",
											"orig": "package_format",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "package_identifier",
											"orig": "package_identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "package_name",
											"orig": "package_name",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 3,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "package_version",
											"orig": "package_version",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 4,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 5,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "badge_token",
											"orig": "badge_token",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "cache_second",
											"orig": "cache_second",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "color",
											"orig": "color",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "label",
											"orig": "label",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "label_color",
											"orig": "label_color",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "logo_color",
											"orig": "logo_color",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "logo_width",
											"orig": "logo_width",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "render",
											"orig": "render",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "shield",
											"orig": "shield",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "show_latest",
											"orig": "show_latest",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "style",
											"orig": "style",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "evaluation_count",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "policy",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "violation_count",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 6,
					},
				},
				"name": "package_vulnerability_policy_evaluation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "policy_slug_perm",
											"orig": "policy_slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "policy_slug_perm",
											"orig": "policy_slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "vulnerability_policy_id",
											"orig": "policy_slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 2,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "claim",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "enabled",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "mapping_claim",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "provider_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "service_account",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
				},
				"name": "provider_setting",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "claim",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "dynamic_mapping",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "enabled",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "mapping_claim",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "provider_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "service_account",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
				},
				"name": "provider_settings_write",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "python",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "history",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "usage",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 1,
					},
				},
				"name": "quota",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
									},
								},
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
									},
								},
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
								"index$": 2,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 3,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "cdn_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "content_kind",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "contextual_auth_realm",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "copy_own",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "copy_package",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "cosign_signing_enabled",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "default_privilege",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "delete_own",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "delete_package",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "deleted_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "distribute",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "docker_refresh_tokens_enabled",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "ecdsa_key",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "enforce_eula",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "gpg_key",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "index_file",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "is_open_source",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "is_private",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "is_public",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "manage_entitlements_privilege",
						"req": false,
						"type": "`$STRING`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "move_own",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "move_package",
						"req": false,
						"type": "`$STRING`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "namespace",
						"req": false,
						"type": "`$STRING`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "namespace_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "nuget_native_signing_enabled",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "num_download",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "num_policy_violated_package",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "num_quarantined_package",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "open_source_license",
						"req": false,
						"type": "`$STRING`",
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "open_source_project_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "package_count",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 33,
					},
					map[string]any{
						"active": true,
						"name": "package_group_count",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 34,
					},
					map[string]any{
						"active": true,
						"name": "proxy_npmj",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 35,
					},
					map[string]any{
						"active": true,
						"name": "proxy_pypi",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 36,
					},
					map[string]any{
						"active": true,
						"name": "raw_package_index_enabled",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 37,
					},
					map[string]any{
						"active": true,
						"name": "raw_package_index_signatures_enabled",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 38,
					},
					map[string]any{
						"active": true,
						"name": "replace_package",
						"req": false,
						"type": "`$STRING`",
						"index$": 39,
					},
					map[string]any{
						"active": true,
						"name": "replace_packages_by_default",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 40,
					},
					map[string]any{
						"active": true,
						"name": "repository_type",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 41,
					},
					map[string]any{
						"active": true,
						"name": "repository_type_str",
						"req": false,
						"type": "`$STRING`",
						"index$": 42,
					},
					map[string]any{
						"active": true,
						"name": "resync_own",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 43,
					},
					map[string]any{
						"active": true,
						"name": "resync_package",
						"req": false,
						"type": "`$STRING`",
						"index$": 44,
					},
					map[string]any{
						"active": true,
						"name": "scan_own",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 45,
					},
					map[string]any{
						"active": true,
						"name": "scan_package",
						"req": false,
						"type": "`$STRING`",
						"index$": 46,
					},
					map[string]any{
						"active": true,
						"name": "self_html_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 47,
					},
					map[string]any{
						"active": true,
						"name": "self_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 48,
					},
					map[string]any{
						"active": true,
						"name": "show_setup_all",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 49,
					},
					map[string]any{
						"active": true,
						"name": "size",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 50,
					},
					map[string]any{
						"active": true,
						"name": "size_str",
						"req": false,
						"type": "`$STRING`",
						"index$": 51,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": false,
						"type": "`$STRING`",
						"index$": 52,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 53,
					},
					map[string]any{
						"active": true,
						"name": "storage_region",
						"req": false,
						"type": "`$STRING`",
						"index$": 54,
					},
					map[string]any{
						"active": true,
						"name": "strict_npm_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 55,
					},
					map[string]any{
						"active": true,
						"name": "tag_pre_releases_as_latest",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 56,
					},
					map[string]any{
						"active": true,
						"name": "use_debian_label",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 57,
					},
					map[string]any{
						"active": true,
						"name": "use_default_cargo_upstream",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 58,
					},
					map[string]any{
						"active": true,
						"name": "use_entitlements_privilege",
						"req": false,
						"type": "`$STRING`",
						"index$": 59,
					},
					map[string]any{
						"active": true,
						"name": "use_noarch_package",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 60,
					},
					map[string]any{
						"active": true,
						"name": "use_source_package",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 61,
					},
					map[string]any{
						"active": true,
						"name": "use_vulnerability_scanning",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 62,
					},
					map[string]any{
						"active": true,
						"name": "user_entitlements_enabled",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 63,
					},
					map[string]any{
						"active": true,
						"name": "view_statistic",
						"req": false,
						"type": "`$STRING`",
						"index$": 64,
					},
				},
				"name": "repo",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 2,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 3,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 1,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 1,
							},
						},
						"key$": "patch",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 2,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 3,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 4,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 5,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 6,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 7,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 8,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 9,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 10,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 11,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 12,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 13,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 14,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 15,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 16,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 17,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 18,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "actor",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "actor_ip_address",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "actor_kind",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "actor_location",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "actor_slug_perm",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "actor_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "context",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "event",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "event_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "object_kind",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "object_slug_perm",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "uuid",
						"req": false,
						"type": "`$STRING`",
						"index$": 12,
					},
				},
				"name": "repository_audit_log",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "default",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "fingerprint",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "fingerprint_short",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "public_key",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "ssh_fingerprint",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
				},
				"name": "repository_ecdsa_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 1,
							},
						},
						"key$": "create",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "cidr",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "country_code",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 1,
					},
				},
				"name": "repository_geo_ip_rule",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "geoip_enabled",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 0,
					},
				},
				"name": "repository_geo_ip_status",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "comment",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "default",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "fingerprint",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "fingerprint_short",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "public_key",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
				},
				"name": "repository_gpg_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 1,
							},
						},
						"key$": "create",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "privilege",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "service",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "team",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "user",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
				},
				"name": "repository_privilege_input",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "retention_count_limit",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "retention_days_limit",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "retention_enabled",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "retention_group_by_format",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "retention_group_by_name",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "retention_group_by_package_type",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "retention_package_query_string",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "retention_size_limit",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 7,
					},
				},
				"name": "repository_retention_rule",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "default",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "fingerprint",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "fingerprint_short",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "public_key",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "ssh_fingerprint",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
				},
				"name": "repository_rsa_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 1,
							},
						},
						"key$": "create",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "client",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "created_by",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_by_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "default",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "disable_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "download",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "enable_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "eula_accepted",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "eula_accepted_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "eula_accepted_from",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "eula_required",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "has_limit",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "identifier",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "is_limited",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "limit_bandwidth",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "limit_bandwidth_unit",
						"req": false,
						"type": "`$STRING`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "limit_date_range_from",
						"req": false,
						"type": "`$STRING`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "limit_date_range_to",
						"req": false,
						"type": "`$STRING`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "limit_num_client",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "limit_num_download",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "limit_package_query",
						"req": false,
						"type": "`$STRING`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "limit_path_query",
						"req": false,
						"type": "`$STRING`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "metadata",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "refresh_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "reset_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "scheduled_reset_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "scheduled_reset_period",
						"req": false,
						"type": "`$STRING`",
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "self_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "token",
						"req": false,
						"type": "`$STRING`",
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 33,
					},
					map[string]any{
						"active": true,
						"name": "updated_by",
						"req": false,
						"type": "`$STRING`",
						"index$": 34,
					},
					map[string]any{
						"active": true,
						"name": "updated_by_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 35,
					},
					map[string]any{
						"active": true,
						"name": "usage",
						"req": false,
						"type": "`$STRING`",
						"index$": 36,
					},
					map[string]any{
						"active": true,
						"name": "user",
						"req": false,
						"type": "`$STRING`",
						"index$": 37,
					},
					map[string]any{
						"active": true,
						"name": "user_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 38,
					},
				},
				"name": "repository_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "show_token",
											"orig": "show_token",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "active",
											"orig": "active",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "show_token",
											"orig": "show_token",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "fuzzy",
											"orig": "fuzzy",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "show_token",
											"orig": "show_token",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "show_token",
											"orig": "show_token",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "client",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "created_by",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_by_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "default",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "disable_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "download",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "enable_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "eula_accepted",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "eula_accepted_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "eula_accepted_from",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "eula_required",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "has_limit",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "identifier",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "is_limited",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "limit_bandwidth",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "limit_bandwidth_unit",
						"req": false,
						"type": "`$STRING`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "limit_date_range_from",
						"req": false,
						"type": "`$STRING`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "limit_date_range_to",
						"req": false,
						"type": "`$STRING`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "limit_num_client",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "limit_num_download",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "limit_package_query",
						"req": false,
						"type": "`$STRING`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "limit_path_query",
						"req": false,
						"type": "`$STRING`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "metadata",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "refresh_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "reset_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "scheduled_reset_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "scheduled_reset_period",
						"req": false,
						"type": "`$STRING`",
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "self_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "token",
						"req": false,
						"type": "`$STRING`",
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 33,
					},
					map[string]any{
						"active": true,
						"name": "updated_by",
						"req": false,
						"type": "`$STRING`",
						"index$": 34,
					},
					map[string]any{
						"active": true,
						"name": "updated_by_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 35,
					},
					map[string]any{
						"active": true,
						"name": "usage",
						"req": false,
						"type": "`$STRING`",
						"index$": 36,
					},
					map[string]any{
						"active": true,
						"name": "user",
						"req": false,
						"type": "`$STRING`",
						"index$": 37,
					},
					map[string]any{
						"active": true,
						"name": "user_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 38,
					},
				},
				"name": "repository_token_refresh",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "show_token",
											"orig": "show_token",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "token",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
				},
				"name": "repository_token_sync",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "show_token",
											"orig": "show_token",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_by",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "created_by_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason_str",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "event",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "identifier",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "is_last_response_bad",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "last_response_status",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "last_response_status_str",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "num_sent",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "package_query",
						"req": false,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "request_body_format",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "request_body_format_str",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "request_body_template_format",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "request_body_template_format_str",
						"req": false,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "request_content_type",
						"req": false,
						"type": "`$STRING`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "secret_header",
						"req": false,
						"type": "`$STRING`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "self_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "target_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "template",
						"op": map[string]any{
							"list": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "updated_by",
						"req": false,
						"type": "`$STRING`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "updated_by_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 26,
					},
				},
				"name": "repository_webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 1,
							},
						},
						"key$": "list",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "certificate",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "certificate_chain",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "certificate_chain_fingerprint",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "certificate_chain_fingerprint_short",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "certificate_fingerprint",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "certificate_fingerprint_short",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "default",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "issuing_status",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
				},
				"name": "repository_x509_ecdsa_certificate",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "certificate",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "certificate_chain",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "certificate_chain_fingerprint",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "certificate_chain_fingerprint_short",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "certificate_fingerprint",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "certificate_fingerprint_short",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "default",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "issuing_status",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
				},
				"name": "repository_x509_rsa_certificate",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "resource",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 0,
					},
				},
				"name": "resources_rate_check",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
								"method": "GET",
								"orig": "/rates/limits/",
								"parts": []any{
									"rates",
									"limits",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "distro_version",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "gpg_key_inline",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "gpg_key_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "gpg_verification",
						"req": false,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "include_source",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "verification_status",
						"req": false,
						"type": "`$STRING`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 23,
					},
				},
				"name": "rpm",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "ruby",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_by",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "created_by_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "key",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "key_expires_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "role",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "team",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 9,
					},
				},
				"name": "service",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "service",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 1,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"reqd": false,
											"type": "`$ANY`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "service",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "service",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "org_id",
											"orig": "org",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "detail",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "version",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
				},
				"name": "status_basic",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"storage_region": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "label",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
				},
				"name": "storage_region",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"swift": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "auth_mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "auth_secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "auth_username",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "disable_reason",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "extra_header_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_1",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "extra_value_2",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "is_active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mode",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "pending_validation",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "priority",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "upstream_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "verify_ssl",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
				},
				"name": "swift",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "patch",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "created",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "key",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
				},
				"name": "user",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
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
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": false,
											"type": "`$OBJECT`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_authentication_token": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "created",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "key",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
				},
				"name": "user_authentication_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "slug_perm",
											"orig": "slug_perm",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "authenticated",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "email",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "profile_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "self_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
				},
				"name": "user_brief",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_profile": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "company",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "first_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "job_title",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "joined_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "last_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "slug_perm",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "tagline",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "url",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
				},
				"name": "user_profile",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "has_vulnerability",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "identifier",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "max_severity",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "num_vulnerability",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "package",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "result",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "scan_id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "target",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
				},
				"name": "vulnerability",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "package",
											"orig": "package",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "package",
											"orig": "package",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 3,
										},
									},
								},
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 2,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "identifier",
											"orig": "identifier",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 1,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$ANY`",
											"index$": 2,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "remove",
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
