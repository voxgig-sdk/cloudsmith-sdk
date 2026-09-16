"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('OrganizationPackageLicensePolicyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.OrganizationPackageLicensePolicy();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'organization_package_license_policy.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "allow_unknown_licenses", "req": false, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "format": "date-time", "name": "created_at", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "description", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "name", "req": true, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "on_violation_quarantine", "req": false, "type": "`$BOOLEAN`", "index$": 5 }, { "active": true, "name": "package_query_string", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "format": "slug", "name": "slug_perm", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "spdx_identifiers", "req": true, "type": "`$ARRAY`", "index$": 8 }, { "active": true, "format": "date-time", "name": "updated_at", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "organization_package_license_policy", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "org_id", "orig": "org", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "data", "orig": "data", "reqd": false, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /orgs/{org}/license-policy/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_license-policy_create\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"allow_unknown_licenses\":{\"title\":\"Allow unknown licenses\",\"type\":\"boolean\"},\"description\":{\"maxLength\":250,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"maxLength\":100,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"on_violation_quarantine\":{\"title\":\"On violation quarantine\",\"type\":\"boolean\"},\"package_query_string\":{\"minLength\":1,\"title\":\"Package query string\",\"type\":\"string\"},\"spdx_identifiers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"name\",\"spdx_identifiers\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Created\",\"schema\":{\"properties\":{\"allow_unknown_licenses\":{\"title\":\"Allow unknown licenses\",\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"description\":{\"maxLength\":250,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"maxLength\":100,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"on_violation_quarantine\":{\"title\":\"On violation quarantine\",\"type\":\"boolean\"},\"package_query_string\":{\"minLength\":1,\"title\":\"Package query string\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"spdx_identifiers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"updated_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Updated at\",\"type\":\"string\"}},\"required\":[\"name\",\"spdx_identifiers\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/orgs/{org}/license-policy/", "rename": { "param": { "org": "org_id" } }, "segments": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "license-policy" }], "select": { "exist": ["data", "org_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "org_id", "orig": "org", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "kind": "query", "name": "page_size", "orig": "page_size", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /orgs/{org}/license-policy/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_license-policy_list\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"description\":\"A page number within the paginated result set.\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Number of results to return per page.\",\"in\":\"query\",\"name\":\"page_size\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"items\":{\"properties\":{\"allow_unknown_licenses\":{\"title\":\"Allow unknown licenses\",\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"description\":{\"maxLength\":250,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"maxLength\":100,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"on_violation_quarantine\":{\"title\":\"On violation quarantine\",\"type\":\"boolean\"},\"package_query_string\":{\"minLength\":1,\"title\":\"Package query string\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"spdx_identifiers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"updated_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Updated at\",\"type\":\"string\"}},\"required\":[\"name\",\"spdx_identifiers\"],\"type\":\"object\"},\"type\":\"array\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/orgs/{org}/license-policy/", "rename": { "param": { "org": "org_id" } }, "segments": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "license-policy" }], "select": { "exist": ["org_id", "page", "page_size"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "slug_perm", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "org_id", "orig": "org", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /orgs/{org}/license-policy/{slug_perm}/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_license-policy_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"slug_perm\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"allow_unknown_licenses\":{\"title\":\"Allow unknown licenses\",\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"description\":{\"maxLength\":250,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"maxLength\":100,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"on_violation_quarantine\":{\"title\":\"On violation quarantine\",\"type\":\"boolean\"},\"package_query_string\":{\"minLength\":1,\"title\":\"Package query string\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"spdx_identifiers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"updated_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Updated at\",\"type\":\"string\"}},\"required\":[\"name\",\"spdx_identifiers\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/orgs/{org}/license-policy/{slug_perm}/", "rename": { "param": { "org": "org_id", "slug_perm": "id" } }, "segments": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "license-policy" }, { "var": "id" }], "select": { "exist": ["id", "org_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "patch": { "input": "data", "name": "patch", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "slug_perm", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "param", "name": "org_id", "orig": "org", "reqd": true, "type": "`$STRING`" }], "query": [{ "active": true, "kind": "query", "name": "data", "orig": "data", "reqd": false, "type": "`$OBJECT`" }] }, "contract": { "id": "PATCH /orgs/{org}/license-policy/{slug_perm}/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_license-policy_partial_update\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"slug_perm\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"allow_unknown_licenses\":{\"title\":\"Allow unknown licenses\",\"type\":\"boolean\"},\"description\":{\"maxLength\":250,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"maxLength\":100,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"on_violation_quarantine\":{\"title\":\"On violation quarantine\",\"type\":\"boolean\"},\"package_query_string\":{\"minLength\":1,\"title\":\"Package query string\",\"type\":\"string\"},\"spdx_identifiers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"allow_unknown_licenses\":{\"title\":\"Allow unknown licenses\",\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"description\":{\"maxLength\":250,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"maxLength\":100,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"on_violation_quarantine\":{\"title\":\"On violation quarantine\",\"type\":\"boolean\"},\"package_query_string\":{\"minLength\":1,\"title\":\"Package query string\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"spdx_identifiers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"updated_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Updated at\",\"type\":\"string\"}},\"required\":[\"name\",\"spdx_identifiers\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PATCH", "orig": "/orgs/{org}/license-policy/{slug_perm}/", "rename": { "param": { "org": "org_id", "slug_perm": "id" } }, "segments": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "license-policy" }, { "var": "id" }], "select": { "exist": ["data", "id", "org_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "patch" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "slug_perm", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "org_id", "orig": "org", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "data", "orig": "data", "reqd": false, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PUT /orgs/{org}/license-policy/{slug_perm}/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_license-policy_update\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"slug_perm\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"allow_unknown_licenses\":{\"title\":\"Allow unknown licenses\",\"type\":\"boolean\"},\"description\":{\"maxLength\":250,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"maxLength\":100,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"on_violation_quarantine\":{\"title\":\"On violation quarantine\",\"type\":\"boolean\"},\"package_query_string\":{\"minLength\":1,\"title\":\"Package query string\",\"type\":\"string\"},\"spdx_identifiers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"name\",\"spdx_identifiers\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"allow_unknown_licenses\":{\"title\":\"Allow unknown licenses\",\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"description\":{\"maxLength\":250,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"maxLength\":100,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"on_violation_quarantine\":{\"title\":\"On violation quarantine\",\"type\":\"boolean\"},\"package_query_string\":{\"minLength\":1,\"title\":\"Package query string\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"spdx_identifiers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"updated_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Updated at\",\"type\":\"string\"}},\"required\":[\"name\",\"spdx_identifiers\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/orgs/{org}/license-policy/{slug_perm}/", "rename": { "param": { "org": "org_id", "slug_perm": "id" } }, "segments": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "license-policy" }, { "var": "id" }], "select": { "exist": ["data", "id", "org_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["org"]] }, "key$": "organization_package_license_policy", "name__orig": "organization_package_license_policy", "Name": "OrganizationPackageLicensePolicy", "name_": "organization_package_license_policy", "name-": "organization-package-license-policy", "NAME": "ORGANIZATION_PACKAGE_LICENSE_POLICY", "index$": 56 }, { "active": true, "entity": "organization_package_license_policy", "key$": "BasicOrganizationPackageLicensePolicyFlow", "kind": "basic", "name": "BasicOrganizationPackageLicensePolicyFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "organization_package_license_policy_ref01" }, "match": { "org_id": "org01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": { "org_id": "org01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "organization_package_license_policy_ref01" } }], "index$": 1 }, { "active": true, "data": { "org_id": "org01" }, "input": { "ref": "organization_package_license_policy_ref01", "srcdatavar": "organization_package_license_policy_ref01_data", "suffix": "_up0", "textfield": "description" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-organization_package_license_policy_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "organization_package_license_policy_ref01", "srcdatavar": "organization_package_license_policy_ref01_data", "suffix": "_dt0" }, "match": { "id": "organization_package_license_policy01", "org_id": "org01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-organization_package_license_policy_ref01" } }], "index$": 3 }] }, 'OrganizationPackageLicensePolicy');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const organization_package_license_policy_ref01_ent = client.OrganizationPackageLicensePolicy();
        let organization_package_license_policy_ref01_data = setup.data.new.organization_package_license_policy['organization_package_license_policy_ref01'];
        organization_package_license_policy_ref01_data['org_id'] = setup.idmap['org01'];
        organization_package_license_policy_ref01_data = (await organization_package_license_policy_ref01_ent.create(organization_package_license_policy_ref01_data)).data();
        (0, node_assert_1.default)(null != organization_package_license_policy_ref01_data.id);
        // LIST
        const organization_package_license_policy_ref01_match = {};
        organization_package_license_policy_ref01_match['org_id'] = setup.idmap['org01'];
        const organization_package_license_policy_ref01_list = (await organization_package_license_policy_ref01_ent.list(organization_package_license_policy_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(organization_package_license_policy_ref01_list, { id: organization_package_license_policy_ref01_data.id })));
        // UPDATE
        const organization_package_license_policy_ref01_data_up0 = {};
        organization_package_license_policy_ref01_data_up0.id = organization_package_license_policy_ref01_data.id;
        organization_package_license_policy_ref01_data_up0['org_id'] = setup.idmap['org_id'];
        const organization_package_license_policy_ref01_markdef_up0 = { name: 'description', value: 'Mark01-organization_package_license_policy_ref01_' + setup.now };
        organization_package_license_policy_ref01_data_up0[organization_package_license_policy_ref01_markdef_up0.name] = organization_package_license_policy_ref01_markdef_up0.value;
        const organization_package_license_policy_ref01_resdata_up0 = (await organization_package_license_policy_ref01_ent.update(organization_package_license_policy_ref01_data_up0)).data();
        (0, node_assert_1.default)(organization_package_license_policy_ref01_resdata_up0.id === organization_package_license_policy_ref01_data_up0.id);
        (0, node_assert_1.default)(organization_package_license_policy_ref01_resdata_up0[organization_package_license_policy_ref01_markdef_up0.name] === organization_package_license_policy_ref01_markdef_up0.value);
        // LOAD
        const organization_package_license_policy_ref01_match_dt0 = {};
        organization_package_license_policy_ref01_match_dt0.id = organization_package_license_policy_ref01_data.id;
        const organization_package_license_policy_ref01_data_dt0 = (await organization_package_license_policy_ref01_ent.load(organization_package_license_policy_ref01_match_dt0)).data();
        (0, node_assert_1.default)(organization_package_license_policy_ref01_data_dt0.id === organization_package_license_policy_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/organization_package_license_policy/OrganizationPackageLicensePolicyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['organization_package_license_policy01', 'organization_package_license_policy02', 'organization_package_license_policy03', 'org01', 'org02', 'org03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_ORGANIZATION_PACKAGE_LICENSE_POLICY_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_ORGANIZATION_PACKAGE_LICENSE_POLICY_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_PACKAGE_LICENSE_POLICY_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudsmithSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CLOUDSMITH_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CLOUDSMITH_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=OrganizationPackageLicensePolicyEntity.test.js.map