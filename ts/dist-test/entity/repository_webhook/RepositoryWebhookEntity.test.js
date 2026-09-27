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
(0, node_test_1.describe)('RepositoryWebhookEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.RepositoryWebhook();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'repository_webhook.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "ro": true, "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "created_by": { "a": true, "h": "Created By", "n": "created_by", "r": false, "ro": true, "t": "`$STRING`", "key$": "created_by", "index$": 1 }, "created_by_url": { "a": true, "fo": "uri", "h": "Created By Url", "n": "created_by_url", "r": false, "ro": true, "t": "`$STRING`", "key$": "created_by_url", "index$": 2 }, "disable_reason": { "a": true, "h": "Disable Reason", "n": "disable_reason", "r": false, "ro": true, "t": "`$INTEGER`", "key$": "disable_reason", "index$": 3 }, "disable_reason_str": { "a": true, "h": "Disable Reason Str", "n": "disable_reason_str", "r": false, "ro": true, "t": "`$STRING`", "key$": "disable_reason_str", "index$": 4 }, "events": { "a": true, "h": "Events", "n": "events", "r": true, "t": "`$ARRAY`", "key$": "events", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 6 }, "identifier": { "a": true, "h": "Identifier", "n": "identifier", "r": false, "ro": true, "sh": "Deprecated (23-05-15): Please use 'slug_perm' instead.", "t": "`$INTEGER`", "key$": "identifier", "index$": 7 }, "is_active": { "a": true, "h": "Is Active", "n": "is_active", "r": false, "sh": "If enabled, the webhook will trigger on subscribed events and send payloads to the configured target URL.", "t": "`$BOOLEAN`", "key$": "is_active", "index$": 8 }, "is_last_response_bad": { "a": true, "h": "Is Last Response Bad", "n": "is_last_response_bad", "r": false, "ro": true, "t": "`$BOOLEAN`", "key$": "is_last_response_bad", "index$": 9 }, "last_response_status": { "a": true, "h": "Last Response Status", "n": "last_response_status", "r": false, "ro": true, "t": "`$INTEGER`", "key$": "last_response_status", "index$": 10 }, "last_response_status_str": { "a": true, "h": "Last Response Status Str", "n": "last_response_status_str", "r": false, "ro": true, "t": "`$STRING`", "key$": "last_response_status_str", "index$": 11 }, "num_sent": { "a": true, "h": "Num Sent", "n": "num_sent", "r": false, "ro": true, "t": "`$INTEGER`", "key$": "num_sent", "index$": 12 }, "package_query": { "a": true, "h": "Package Query", "n": "package_query", "r": false, "sh": "The package-based search query for webhooks to fire.", "t": "`$STRING`", "key$": "package_query", "index$": 13 }, "request_body_format": { "a": true, "h": "Request Body Format", "n": "request_body_format", "r": false, "sh": "The format of the payloads for webhook requests.", "t": "`$INTEGER`", "key$": "request_body_format", "index$": 14 }, "request_body_format_str": { "a": true, "h": "Request Body Format Str", "n": "request_body_format_str", "r": false, "ro": true, "t": "`$STRING`", "key$": "request_body_format_str", "index$": 15 }, "request_body_template_format": { "a": true, "h": "Request Body Template Format", "n": "request_body_template_format", "r": false, "sh": "The format of the payloads for webhook requests.", "t": "`$INTEGER`", "key$": "request_body_template_format", "index$": 16 }, "request_body_template_format_str": { "a": true, "h": "Request Body Template Format Str", "n": "request_body_template_format_str", "r": false, "ro": true, "t": "`$STRING`", "key$": "request_body_template_format_str", "index$": 17 }, "request_content_type": { "a": true, "h": "Request Content Type", "n": "request_content_type", "r": false, "sh": "The value that will be sent for the 'Content Type' header.", "t": "`$STRING`", "key$": "request_content_type", "index$": 18 }, "secret_header": { "a": true, "h": "Secret Header", "n": "secret_header", "r": false, "sh": "The header to send the predefined secret in.", "t": "`$STRING`", "key$": "secret_header", "index$": 19 }, "self_url": { "a": true, "fo": "uri", "h": "Self Url", "n": "self_url", "r": false, "ro": true, "t": "`$STRING`", "key$": "self_url", "index$": 20 }, "slug_perm": { "a": true, "fo": "slug", "h": "Slug Perm", "n": "slug_perm", "r": false, "ro": true, "t": "`$STRING`", "key$": "slug_perm", "index$": 21 }, "target_url": { "a": true, "fo": "uri", "h": "Target Url", "n": "target_url", "r": true, "sh": "The destination URL that webhook payloads will be POST'ed to.", "t": "`$STRING`", "key$": "target_url", "index$": 22 }, "templates": { "a": true, "h": "Templates", "n": "templates", "r": true, "t": "`$ARRAY`", "key$": "templates", "index$": 23 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "ro": true, "t": "`$STRING`", "key$": "updated_at", "index$": 24 }, "updated_by": { "a": true, "h": "Updated By", "n": "updated_by", "r": false, "ro": true, "t": "`$STRING`", "key$": "updated_by", "index$": 25 }, "updated_by_url": { "a": true, "fo": "uri", "h": "Updated By Url", "n": "updated_by_url", "r": false, "ro": true, "t": "`$STRING`", "key$": "updated_by_url", "index$": 26 }, "verify_ssl": { "a": true, "h": "Verify Ssl", "n": "verify_ssl", "r": false, "sh": "If enabled, SSL certificates is verified when webhooks are sent.", "t": "`$BOOLEAN`", "key$": "verify_ssl", "index$": 27 } }, "id": { "field": "id", "from": { "identifier": "identifier" }, "name": "id", "parts": ["owner", "repo", "identifier"], "sep": "/" }, "name": "repository_webhook", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /webhooks/{owner}/{repo}/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "repo", "or": "repo", "r": true, "t": "`$ANY`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "data", "or": "data", "r": false, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/webhooks/{owner}/{repo}/", "q": { "exist": ["data", "owner", "repo"] }, "r": {}, "s": [{ "lit": "webhooks" }, { "var": "owner" }, { "var": "repo" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /webhooks/{owner}/{repo}/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "repo", "or": "repo", "r": true, "t": "`$ANY`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/webhooks/{owner}/{repo}/", "q": { "exist": ["owner", "page", "page_size", "repo"] }, "r": {}, "s": [{ "lit": "webhooks" }, { "var": "owner" }, { "var": "repo" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /webhooks/{owner}/{repo}/{identifier}/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "identifier", "or": "identifier", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "param", "n": "repo", "or": "repo", "r": true, "t": "`$ANY`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/webhooks/{owner}/{repo}/{identifier}/", "q": { "exist": ["identifier", "owner", "repo"] }, "r": {}, "s": [{ "lit": "webhooks" }, { "var": "owner" }, { "var": "repo" }, { "var": "identifier" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /webhooks/{owner}/{repo}/{identifier}/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "identifier", "or": "identifier", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "param", "n": "repo", "or": "repo", "r": true, "t": "`$ANY`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "data", "or": "data", "r": false, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/webhooks/{owner}/{repo}/{identifier}/", "q": { "exist": ["data", "identifier", "owner", "repo"] }, "r": {}, "s": [{ "lit": "webhooks" }, { "var": "owner" }, { "var": "repo" }, { "var": "identifier" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.webhook"]] }, "key$": "repository_webhook", "name__orig": "repository_webhook", "Name": "RepositoryWebhook", "name_": "repository_webhook", "name-": "repository-webhook", "NAME": "REPOSITORY_WEBHOOK", "index$": 58 }, { "active": true, "entity": "repository_webhook", "key$": "BasicRepositoryWebhookFlow", "kind": "basic", "name": "BasicRepositoryWebhookFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "repository_webhook_ref01" }, "m": { "owner": "owner01", "repo": "repo01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "owner": "owner01", "repo": "repo01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "repository_webhook_ref01" } }], "index$": 1 }, { "a": true, "d": { "owner": "owner01", "repo": "repo01" }, "i": { "ref": "repository_webhook_ref01", "srcdatavar": "repository_webhook_ref01_data", "suffix": "_up0", "textfield": "package_query" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-repository_webhook_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "repository_webhook_ref01", "srcdatavar": "repository_webhook_ref01_data", "suffix": "_dt0" }, "m": { "id": "repository_webhook01", "owner": "owner01", "repo": "repo01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-repository_webhook_ref01" } }], "index$": 3 }] }, 'RepositoryWebhook', { "POST /webhooks/{owner}/{repo}/": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "repo", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "data", "in": "body", "required": false, "schema": { "required": ["events", "target_url", "templates"], "type": "object", "properties": { "events": { "type": "array", "items": { "type": "string", "enum": ["*", "package.created", "package.deleted", "package.downloaded", "package.failed", "package.quarantined", "package.released", "package.restored", "package.security_scanned", "package.synced", "package.syncing", "package.tags_updated"] }, "x-nullable": true }, "is_active": { "title": "Webhook Active", "description": "If enabled, the webhook will trigger on subscribed events and send payloads to the configured target URL.", "type": "boolean" }, "package_query": { "title": "Package query", "description": "The package-based search query for webhooks to fire. This uses the same syntax as the standard search used for repositories, and also supports boolean logic operators such as OR/AND/NOT and parentheses for grouping. If a package does not match, the webhook will not fire.", "type": "string", "maxLength": 1024, "x-nullable": true }, "request_body_format": { "title": "Payload Format", "description": "The format of the payloads for webhook requests. Valid options are: (0) JSON, (1) JSON array, (2) form encoded JSON and (3) Handlebars template.", "type": "integer", "enum": [0, 1, 2, 3] }, "request_body_template_format": { "title": "Payload Template Format", "description": "The format of the payloads for webhook requests. Valid options are: (0) Generic/user defined, (1) JSON and (2) XML.", "type": "integer", "enum": [0, 1, 2] }, "request_content_type": { "title": "Content Type Header Value", "description": "The value that will be sent for the 'Content Type' header. ", "type": "string", "maxLength": 128, "x-nullable": true }, "secret_header": { "title": "Secret Header", "description": "The header to send the predefined secret in. This must be unique from existing headers or it won't be sent. You can use this as a form of authentication on the endpoint side.", "type": "string", "pattern": "^[-\\w]+$", "maxLength": 64, "x-nullable": true }, "secret_value": { "title": "Secret Value", "description": "The value for the predefined secret (note: this is treated as a passphrase and is encrypted when we store it). You can use this as a form of authentication on the endpoint side.", "type": "string", "pattern": "^[^\\n\\r]+$", "maxLength": 512, "x-nullable": true }, "signature_key": { "title": "HMAC Signature Key", "description": "The value for the signature key - This is used to generate an HMAC-based hex digest of the request body, which we send as the X-Cloudsmith-Signature header so that you can ensure that the request wasn't modified by a malicious party (note: this is treated as a passphrase and is encrypted when we store it).", "type": "string", "maxLength": 512, "minLength": 1 }, "target_url": { "title": "Payload URL", "description": "The destination URL that webhook payloads will be POST'ed to.", "type": "string", "format": "uri", "maxLength": 255, "minLength": 1 }, "templates": { "type": "array", "items": { "required": ["event"], "type": "object", "properties": { "event": { "title": "Event", "type": "string", "maxLength": 128, "minLength": 1 }, "template": { "title": "Template", "type": "string", "maxLength": 4096, "x-nullable": true } }, "x-nullable": true, "x-ref": "#/definitions/WebhookTemplate" }, "x-nullable": true }, "verify_ssl": { "title": "Verify SSL Certificates", "description": "If enabled, SSL certificates is verified when webhooks are sent. It's recommended to leave this enabled as not verifying the integrity of SSL certificates leaves you susceptible to Man-in-the-Middle (MITM) attacks.", "type": "boolean" } }, "x-ref": "#/definitions/RepositoryWebhookRequest" }, "index$": 2 }] }, "GET /webhooks/{owner}/{repo}/": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "repo", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "page", "in": "query", "description": "A page number within the paginated result set.", "required": false, "type": "integer", "index$": 2 }, { "name": "page_size", "in": "query", "description": "Number of results to return per page.", "required": false, "type": "integer", "index$": 3 }] }, "GET /webhooks/{owner}/{repo}/{identifier}/": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "repo", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "identifier", "in": "path", "required": true, "type": "string", "index$": 2 }] }, "PATCH /webhooks/{owner}/{repo}/{identifier}/": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "repo", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "identifier", "in": "path", "required": true, "type": "string", "index$": 2 }, { "name": "data", "in": "body", "required": false, "schema": { "type": "object", "properties": { "events": { "type": "array", "items": { "type": "string", "enum": ["*", "package.created", "package.deleted", "package.downloaded", "package.failed", "package.quarantined", "package.released", "package.restored", "package.security_scanned", "package.synced", "package.syncing", "package.tags_updated"] }, "x-nullable": true }, "is_active": { "title": "Webhook Active", "description": "If enabled, the webhook will trigger on subscribed events and send payloads to the configured target URL.", "type": "boolean" }, "package_query": { "title": "Package query", "description": "The package-based search query for webhooks to fire. This uses the same syntax as the standard search used for repositories, and also supports boolean logic operators such as OR/AND/NOT and parentheses for grouping. If a package does not match, the webhook will not fire.", "type": "string", "maxLength": 1024, "x-nullable": true }, "request_body_format": { "title": "Payload Format", "description": "The format of the payloads for webhook requests. Valid options are: (0) JSON, (1) JSON array, (2) form encoded JSON and (3) Handlebars template.", "type": "integer", "enum": [0, 1, 2, 3] }, "request_body_template_format": { "title": "Payload Template Format", "description": "The format of the payloads for webhook requests. Valid options are: (0) Generic/user defined, (1) JSON and (2) XML.", "type": "integer", "enum": [0, 1, 2] }, "request_content_type": { "title": "Content Type Header Value", "description": "The value that will be sent for the 'Content Type' header. ", "type": "string", "maxLength": 128, "x-nullable": true }, "secret_header": { "title": "Secret Header", "description": "The header to send the predefined secret in. This must be unique from existing headers or it won't be sent. You can use this as a form of authentication on the endpoint side.", "type": "string", "pattern": "^[-\\w]+$", "maxLength": 64, "x-nullable": true }, "secret_value": { "title": "Secret Value", "description": "The value for the predefined secret (note: this is treated as a passphrase and is encrypted when we store it). You can use this as a form of authentication on the endpoint side.", "type": "string", "pattern": "^[^\\n\\r]+$", "maxLength": 512, "x-nullable": true }, "signature_key": { "title": "HMAC Signature Key", "description": "The value for the signature key - This is used to generate an HMAC-based hex digest of the request body, which we send as the X-Cloudsmith-Signature header so that you can ensure that the request wasn't modified by a malicious party (note: this is treated as a passphrase and is encrypted when we store it).", "type": "string", "maxLength": 512, "minLength": 1 }, "target_url": { "title": "Payload URL", "description": "The destination URL that webhook payloads will be POST'ed to.", "type": "string", "format": "uri", "maxLength": 255, "minLength": 1 }, "templates": { "type": "array", "items": { "required": ["event"], "type": "object", "properties": { "event": { "title": "Event", "type": "string", "maxLength": 128, "minLength": 1 }, "template": { "title": "Template", "type": "string", "maxLength": 4096, "x-nullable": true } }, "x-nullable": true, "x-ref": "#/definitions/WebhookTemplate" }, "x-nullable": true }, "verify_ssl": { "title": "Verify SSL Certificates", "description": "If enabled, SSL certificates is verified when webhooks are sent. It's recommended to leave this enabled as not verifying the integrity of SSL certificates leaves you susceptible to Man-in-the-Middle (MITM) attacks.", "type": "boolean" } }, "x-ref": "#/definitions/RepositoryWebhookRequestPatch" }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const repository_webhook_ref01_ent = client.RepositoryWebhook();
        let repository_webhook_ref01_data = setup.data.new.repository_webhook['repository_webhook_ref01'];
        repository_webhook_ref01_data['owner'] = setup.idmap['owner01'];
        repository_webhook_ref01_data['repo'] = setup.idmap['repo01'];
        repository_webhook_ref01_data = (await repository_webhook_ref01_ent.create(repository_webhook_ref01_data)).data();
        (0, node_assert_1.default)(null != repository_webhook_ref01_data.id);
        // LIST
        const repository_webhook_ref01_match = {};
        repository_webhook_ref01_match['owner'] = setup.idmap['owner01'];
        repository_webhook_ref01_match['repo'] = setup.idmap['repo01'];
        const repository_webhook_ref01_list = (await repository_webhook_ref01_ent.list(repository_webhook_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(repository_webhook_ref01_list, { id: repository_webhook_ref01_data.id })));
        // UPDATE
        const repository_webhook_ref01_data_up0 = {};
        repository_webhook_ref01_data_up0.id = repository_webhook_ref01_data.id;
        repository_webhook_ref01_data_up0['owner'] = setup.idmap['owner'];
        repository_webhook_ref01_data_up0['repo'] = setup.idmap['repo'];
        const repository_webhook_ref01_markdef_up0 = { name: 'package_query', value: 'Mark01-repository_webhook_ref01_' + setup.now };
        repository_webhook_ref01_data_up0[repository_webhook_ref01_markdef_up0.name] = repository_webhook_ref01_markdef_up0.value;
        const repository_webhook_ref01_resdata_up0 = (await repository_webhook_ref01_ent.update(repository_webhook_ref01_data_up0)).data();
        (0, node_assert_1.default)(repository_webhook_ref01_resdata_up0.id === repository_webhook_ref01_data_up0.id);
        (0, node_assert_1.default)(repository_webhook_ref01_resdata_up0[repository_webhook_ref01_markdef_up0.name] === repository_webhook_ref01_markdef_up0.value);
        // LOAD
        const repository_webhook_ref01_match_dt0 = {};
        repository_webhook_ref01_match_dt0.id = repository_webhook_ref01_data.id;
        const repository_webhook_ref01_data_dt0 = (await repository_webhook_ref01_ent.load(repository_webhook_ref01_match_dt0)).data();
        (0, node_assert_1.default)(repository_webhook_ref01_data_dt0.id === repository_webhook_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/repository_webhook/RepositoryWebhookTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['repository_webhook01', 'repository_webhook02', 'repository_webhook03', 'webhook01', 'webhook02', 'webhook03', 'owner01', 'repo01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID'];
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
//# sourceMappingURL=RepositoryWebhookEntity.test.js.map