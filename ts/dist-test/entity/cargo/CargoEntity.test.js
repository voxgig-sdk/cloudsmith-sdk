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
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CargoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.Cargo();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'cargo.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "auth_mode": { "a": true, "h": "Auth Mode", "n": "auth_mode", "r": false, "sh": "The authentication mode to use when accessing this upstream.", "t": "`$STRING`", "key$": "auth_mode", "index$": 0 }, "auth_secret": { "a": true, "h": "Auth Secret", "n": "auth_secret", "r": false, "sh": "Secret to provide with requests to upstream.", "t": "`$STRING`", "key$": "auth_secret", "index$": 1 }, "auth_username": { "a": true, "h": "Auth Username", "n": "auth_username", "r": false, "sh": "Username to provide with requests to upstream.", "t": "`$STRING`", "key$": "auth_username", "index$": 2 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "ro": true, "sh": "The datetime the upstream source was created.", "t": "`$STRING`", "key$": "created_at", "index$": 3 }, "disable_reason": { "a": true, "h": "Disable Reason", "n": "disable_reason", "r": false, "ro": true, "t": "`$STRING`", "key$": "disable_reason", "index$": 4 }, "extra_header_1": { "a": true, "h": "Extra Header 1", "n": "extra_header_1", "r": false, "sh": "The key for extra header #1 to send to upstream.", "t": "`$STRING`", "key$": "extra_header_1", "index$": 5 }, "extra_header_2": { "a": true, "h": "Extra Header 2", "n": "extra_header_2", "r": false, "sh": "The key for extra header #2 to send to upstream.", "t": "`$STRING`", "key$": "extra_header_2", "index$": 6 }, "extra_value_1": { "a": true, "h": "Extra Value 1", "n": "extra_value_1", "r": false, "sh": "The value for extra header #1 to send to upstream.", "t": "`$STRING`", "key$": "extra_value_1", "index$": 7 }, "extra_value_2": { "a": true, "h": "Extra Value 2", "n": "extra_value_2", "r": false, "sh": "The value for extra header #2 to send to upstream.", "t": "`$STRING`", "key$": "extra_value_2", "index$": 8 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 9 }, "is_active": { "a": true, "h": "Is Active", "n": "is_active", "r": false, "sh": "Whether or not this upstream is active and ready for requests.", "t": "`$BOOLEAN`", "key$": "is_active", "index$": 10 }, "mode": { "a": true, "h": "Mode", "n": "mode", "r": false, "sh": "The mode that this upstream should operate in.", "t": "`$STRING`", "key$": "mode", "index$": 11 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "A descriptive name for this upstream source.", "t": "`$STRING`", "key$": "name", "index$": 12 }, "pending_validation": { "a": true, "h": "Pending Validation", "n": "pending_validation", "r": false, "ro": true, "sh": "When true, this upstream source is pending validation.", "t": "`$BOOLEAN`", "key$": "pending_validation", "index$": 13 }, "priority": { "a": true, "h": "Priority", "n": "priority", "r": false, "sh": "Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date.", "t": "`$INTEGER`", "key$": "priority", "index$": 14 }, "slug_perm": { "a": true, "fo": "slug", "h": "Slug Perm", "n": "slug_perm", "r": false, "ro": true, "t": "`$STRING`", "key$": "slug_perm", "index$": 15 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "ro": true, "t": "`$STRING`", "key$": "updated_at", "index$": 16 }, "upstream_url": { "a": true, "fo": "uri", "h": "Upstream Url", "n": "upstream_url", "r": true, "sh": "The URL for this upstream source.", "t": "`$STRING`", "key$": "upstream_url", "index$": 17 }, "verify_ssl": { "a": true, "h": "Verify Ssl", "n": "verify_ssl", "r": false, "sh": "If enabled, SSL certificates are verified when requests are made to this upstream.", "t": "`$BOOLEAN`", "key$": "verify_ssl", "index$": 18 } }, "id": { "field": "id", "name": "id" }, "name": "cargo", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /repos/{owner}/{identifier}/upstream/cargo/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "identifier", "or": "identifier", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "data", "or": "data", "r": false, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/repos/{owner}/{identifier}/upstream/cargo/", "q": { "exist": ["data", "identifier", "owner"] }, "r": {}, "s": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "upstream" }, { "lit": "cargo" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /repos/{owner}/{identifier}/upstream/cargo/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "identifier", "or": "identifier", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/repos/{owner}/{identifier}/upstream/cargo/", "q": { "exist": ["identifier", "owner", "page", "page_size"] }, "r": {}, "s": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "upstream" }, { "lit": "cargo" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "slug_perm", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "identifier", "or": "identifier", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/", "q": { "exist": ["id", "identifier", "owner"] }, "r": { "param": { "slug_perm": "id" } }, "s": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "upstream" }, { "lit": "cargo" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "patch": { "input": "data", "name": "patch", "points": [{ "a": true, "co": { "id": "PATCH /repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "slug_perm", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "identifier", "or": "identifier", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "data", "or": "data", "r": false, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/", "q": { "exist": ["data", "id", "identifier", "owner"] }, "r": { "param": { "slug_perm": "id" } }, "s": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "upstream" }, { "lit": "cargo" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "patch" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "slug_perm", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "identifier", "or": "identifier", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "data", "or": "data", "r": false, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/", "q": { "exist": ["data", "id", "identifier", "owner"] }, "r": { "param": { "slug_perm": "id" } }, "s": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "upstream" }, { "lit": "cargo" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.repo"]] }, "key$": "cargo", "name__orig": "cargo", "Name": "Cargo", "name_": "cargo", "name-": "cargo", "NAME": "CARGO", "index$": 0 }, { "active": true, "entity": "cargo", "key$": "BasicCargoFlow", "kind": "basic", "name": "BasicCargoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "cargo_ref01" }, "m": { "identifier": "identifier01", "owner": "owner01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "identifier": "identifier01", "owner": "owner01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "cargo_ref01" } }], "index$": 1 }, { "a": true, "d": { "identifier": "identifier01", "owner": "owner01" }, "i": { "ref": "cargo_ref01", "srcdatavar": "cargo_ref01_data", "suffix": "_up0", "textfield": "auth_mode" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-cargo_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "cargo_ref01", "srcdatavar": "cargo_ref01_data", "suffix": "_dt0" }, "m": { "id": "cargo01", "identifier": "identifier01", "owner": "owner01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-cargo_ref01" } }], "index$": 3 }] }, 'Cargo', { "POST /repos/{owner}/{identifier}/upstream/cargo/": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "identifier", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "data", "in": "body", "required": false, "schema": { "required": ["name", "upstream_url"], "type": "object", "properties": { "auth_mode": { "title": "Auth mode", "description": "The authentication mode to use when accessing this upstream. ", "type": "string", "enum": ["None", "Username and Password"], "default": "None" }, "auth_secret": { "title": "Secret", "description": "Secret to provide with requests to upstream.", "type": "string", "maxLength": 4096, "x-nullable": true }, "auth_username": { "title": "Username", "description": "Username to provide with requests to upstream.", "type": "string", "maxLength": 64, "x-nullable": true }, "extra_header_1": { "title": "Header #1", "description": "The key for extra header #1 to send to upstream.", "type": "string", "pattern": "^[-\\w]+$", "maxLength": 64, "x-nullable": true }, "extra_header_2": { "title": "Header #2", "description": "The key for extra header #2 to send to upstream.", "type": "string", "pattern": "^[-\\w]+$", "maxLength": 64, "x-nullable": true }, "extra_value_1": { "title": "Value #1", "description": "The value for extra header #1 to send to upstream. This is stored as plaintext, and is NOT encrypted.", "type": "string", "pattern": "^[^\\n\\r]+$", "maxLength": 128, "x-nullable": true }, "extra_value_2": { "title": "Value #2", "description": "The value for extra header #2 to send to upstream. This is stored as plaintext, and is NOT encrypted.", "type": "string", "pattern": "^[^\\n\\r]+$", "maxLength": 128, "x-nullable": true }, "is_active": { "title": "Is active", "description": "Whether or not this upstream is active and ready for requests.", "type": "boolean" }, "mode": { "title": "Mode", "description": "The mode that this upstream should operate in. Upstream sources can be used to proxy resolved packages, as well as operate in a proxy/cache or cache only mode.", "type": "string", "enum": ["Proxy Only", "Cache and Proxy"], "default": "Proxy Only" }, "name": { "title": "Name", "description": "A descriptive name for this upstream source. A shortened version of this name will be used for tagging cached packages retrieved from this upstream.", "type": "string", "pattern": "^\\w[\\w \\-'\\.\\/()]+$", "maxLength": 64, "minLength": 1 }, "priority": { "title": "Priority", "description": "Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date.", "type": "integer", "maximum": 32767, "minimum": 1 }, "upstream_url": { "title": "Upstream URL", "description": "The URL for this upstream source. This must be a fully qualified URL including any path elements required to reach the root of the repository. ", "type": "string", "format": "uri", "maxLength": 200, "minLength": 1 }, "verify_ssl": { "title": "Verify SSL Certificates", "description": "If enabled, SSL certificates are verified when requests are made to this upstream. It's recommended to leave this enabled for all public sources to help mitigate Man-In-The-Middle (MITM) attacks. Please note this only applies to HTTPS upstreams.", "type": "boolean" } }, "x-ref": "#/definitions/CargoUpstreamRequest" }, "index$": 2 }] }, "GET /repos/{owner}/{identifier}/upstream/cargo/": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "identifier", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "page", "in": "query", "description": "A page number within the paginated result set.", "required": false, "type": "integer", "index$": 2 }, { "name": "page_size", "in": "query", "description": "Number of results to return per page.", "required": false, "type": "integer", "index$": 3 }] }, "GET /repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "identifier", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "slug_perm", "in": "path", "required": true, "type": "string", "index$": 2 }] }, "PATCH /repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "identifier", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "slug_perm", "in": "path", "required": true, "type": "string", "index$": 2 }, { "name": "data", "in": "body", "required": false, "schema": { "type": "object", "properties": { "auth_mode": { "title": "Auth mode", "description": "The authentication mode to use when accessing this upstream. ", "type": "string", "enum": ["None", "Username and Password"], "default": "None" }, "auth_secret": { "title": "Secret", "description": "Secret to provide with requests to upstream.", "type": "string", "maxLength": 4096, "x-nullable": true }, "auth_username": { "title": "Username", "description": "Username to provide with requests to upstream.", "type": "string", "maxLength": 64, "x-nullable": true }, "extra_header_1": { "title": "Header #1", "description": "The key for extra header #1 to send to upstream.", "type": "string", "pattern": "^[-\\w]+$", "maxLength": 64, "x-nullable": true }, "extra_header_2": { "title": "Header #2", "description": "The key for extra header #2 to send to upstream.", "type": "string", "pattern": "^[-\\w]+$", "maxLength": 64, "x-nullable": true }, "extra_value_1": { "title": "Value #1", "description": "The value for extra header #1 to send to upstream. This is stored as plaintext, and is NOT encrypted.", "type": "string", "pattern": "^[^\\n\\r]+$", "maxLength": 128, "x-nullable": true }, "extra_value_2": { "title": "Value #2", "description": "The value for extra header #2 to send to upstream. This is stored as plaintext, and is NOT encrypted.", "type": "string", "pattern": "^[^\\n\\r]+$", "maxLength": 128, "x-nullable": true }, "is_active": { "title": "Is active", "description": "Whether or not this upstream is active and ready for requests.", "type": "boolean" }, "mode": { "title": "Mode", "description": "The mode that this upstream should operate in. Upstream sources can be used to proxy resolved packages, as well as operate in a proxy/cache or cache only mode.", "type": "string", "enum": ["Proxy Only", "Cache and Proxy"], "default": "Proxy Only" }, "name": { "title": "Name", "description": "A descriptive name for this upstream source. A shortened version of this name will be used for tagging cached packages retrieved from this upstream.", "type": "string", "pattern": "^\\w[\\w \\-'\\.\\/()]+$", "maxLength": 64, "minLength": 1 }, "priority": { "title": "Priority", "description": "Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date.", "type": "integer", "maximum": 32767, "minimum": 1 }, "upstream_url": { "title": "Upstream URL", "description": "The URL for this upstream source. This must be a fully qualified URL including any path elements required to reach the root of the repository. ", "type": "string", "format": "uri", "maxLength": 200, "minLength": 1 }, "verify_ssl": { "title": "Verify SSL Certificates", "description": "If enabled, SSL certificates are verified when requests are made to this upstream. It's recommended to leave this enabled for all public sources to help mitigate Man-In-The-Middle (MITM) attacks. Please note this only applies to HTTPS upstreams.", "type": "boolean" } }, "x-ref": "#/definitions/CargoUpstreamRequestPatch" }, "index$": 3 }] }, "PUT /repos/{owner}/{identifier}/upstream/cargo/{slug_perm}/": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "identifier", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "slug_perm", "in": "path", "required": true, "type": "string", "index$": 2 }, { "name": "data", "in": "body", "required": false, "schema": { "required": ["name", "upstream_url"], "type": "object", "properties": { "auth_mode": { "title": "Auth mode", "description": "The authentication mode to use when accessing this upstream. ", "type": "string", "enum": ["None", "Username and Password"], "default": "None" }, "auth_secret": { "title": "Secret", "description": "Secret to provide with requests to upstream.", "type": "string", "maxLength": 4096, "x-nullable": true }, "auth_username": { "title": "Username", "description": "Username to provide with requests to upstream.", "type": "string", "maxLength": 64, "x-nullable": true }, "extra_header_1": { "title": "Header #1", "description": "The key for extra header #1 to send to upstream.", "type": "string", "pattern": "^[-\\w]+$", "maxLength": 64, "x-nullable": true }, "extra_header_2": { "title": "Header #2", "description": "The key for extra header #2 to send to upstream.", "type": "string", "pattern": "^[-\\w]+$", "maxLength": 64, "x-nullable": true }, "extra_value_1": { "title": "Value #1", "description": "The value for extra header #1 to send to upstream. This is stored as plaintext, and is NOT encrypted.", "type": "string", "pattern": "^[^\\n\\r]+$", "maxLength": 128, "x-nullable": true }, "extra_value_2": { "title": "Value #2", "description": "The value for extra header #2 to send to upstream. This is stored as plaintext, and is NOT encrypted.", "type": "string", "pattern": "^[^\\n\\r]+$", "maxLength": 128, "x-nullable": true }, "is_active": { "title": "Is active", "description": "Whether or not this upstream is active and ready for requests.", "type": "boolean" }, "mode": { "title": "Mode", "description": "The mode that this upstream should operate in. Upstream sources can be used to proxy resolved packages, as well as operate in a proxy/cache or cache only mode.", "type": "string", "enum": ["Proxy Only", "Cache and Proxy"], "default": "Proxy Only" }, "name": { "title": "Name", "description": "A descriptive name for this upstream source. A shortened version of this name will be used for tagging cached packages retrieved from this upstream.", "type": "string", "pattern": "^\\w[\\w \\-'\\.\\/()]+$", "maxLength": 64, "minLength": 1 }, "priority": { "title": "Priority", "description": "Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date.", "type": "integer", "maximum": 32767, "minimum": 1 }, "upstream_url": { "title": "Upstream URL", "description": "The URL for this upstream source. This must be a fully qualified URL including any path elements required to reach the root of the repository. ", "type": "string", "format": "uri", "maxLength": 200, "minLength": 1 }, "verify_ssl": { "title": "Verify SSL Certificates", "description": "If enabled, SSL certificates are verified when requests are made to this upstream. It's recommended to leave this enabled for all public sources to help mitigate Man-In-The-Middle (MITM) attacks. Please note this only applies to HTTPS upstreams.", "type": "boolean" } }, "x-ref": "#/definitions/CargoUpstreamRequest" }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const cargo_ref01_ent = client.Cargo();
        let cargo_ref01_data = setup.data.new.cargo['cargo_ref01'];
        cargo_ref01_data['identifier'] = setup.idmap['identifier01'];
        cargo_ref01_data['owner'] = setup.idmap['owner01'];
        cargo_ref01_data = (await cargo_ref01_ent.create(cargo_ref01_data)).data();
        (0, node_assert_1.default)(null != cargo_ref01_data.id);
        // LIST
        const cargo_ref01_match = {};
        cargo_ref01_match['identifier'] = setup.idmap['identifier01'];
        cargo_ref01_match['owner'] = setup.idmap['owner01'];
        const cargo_ref01_list = (await cargo_ref01_ent.list(cargo_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(cargo_ref01_list, { id: cargo_ref01_data.id })));
        // UPDATE
        const cargo_ref01_data_up0 = {};
        cargo_ref01_data_up0.id = cargo_ref01_data.id;
        cargo_ref01_data_up0['identifier'] = setup.idmap['identifier'];
        cargo_ref01_data_up0['owner'] = setup.idmap['owner'];
        const cargo_ref01_markdef_up0 = { name: 'auth_mode', value: 'Mark01-cargo_ref01_' + setup.now };
        cargo_ref01_data_up0[cargo_ref01_markdef_up0.name] = cargo_ref01_markdef_up0.value;
        const cargo_ref01_resdata_up0 = (await cargo_ref01_ent.update(cargo_ref01_data_up0)).data();
        (0, node_assert_1.default)(cargo_ref01_resdata_up0.id === cargo_ref01_data_up0.id);
        (0, node_assert_1.default)(cargo_ref01_resdata_up0[cargo_ref01_markdef_up0.name] === cargo_ref01_markdef_up0.value);
        // LOAD
        const cargo_ref01_match_dt0 = {};
        cargo_ref01_match_dt0.id = cargo_ref01_data.id;
        const cargo_ref01_data_dt0 = (await cargo_ref01_ent.load(cargo_ref01_match_dt0)).data();
        (0, node_assert_1.default)(cargo_ref01_data_dt0.id === cargo_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/cargo/CargoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['cargo01', 'cargo02', 'cargo03', 'repo01', 'repo02', 'repo03', 'identifier01', 'owner01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_CARGO_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_CARGO_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_CARGO_ENTID'];
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
//# sourceMappingURL=CargoEntity.test.js.map