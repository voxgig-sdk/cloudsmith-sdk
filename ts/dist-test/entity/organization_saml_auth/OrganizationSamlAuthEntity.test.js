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
(0, node_test_1.describe)('OrganizationSamlAuthEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.OrganizationSamlAuth();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'organization_saml_auth.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "saml_auth_enabled", "req": true, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "name": "saml_auth_enforced", "req": true, "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "name": "saml_metadata_inline", "req": false, "short": "If configured, SAML metadata will be used as entered instead of retrieved from a remote URL.", "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "uri", "name": "saml_metadata_url", "req": false, "short": "If configured, SAML metadata be retrieved from a remote URL.", "type": "`$STRING`", "index$": 3 }], "name": "organization_saml_auth", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "org_id", "orig": "org", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /orgs/{org}/saml-authentication", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_saml-authentication_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved the SAML Authentication settings.\",\"schema\":{\"properties\":{\"saml_auth_enabled\":{\"title\":\"Saml auth enabled\",\"type\":\"boolean\"},\"saml_auth_enforced\":{\"title\":\"Saml auth enforced\",\"type\":\"boolean\"},\"saml_metadata_inline\":{\"description\":\"If configured, SAML metadata will be used as entered instead of retrieved from a remote URL.\",\"maxLength\":32000,\"title\":\"Inline SAML metadata\",\"type\":\"string\"},\"saml_metadata_url\":{\"description\":\"If configured, SAML metadata be retrieved from a remote URL.\",\"format\":\"uri\",\"maxLength\":254,\"title\":\"Saml metadata url\",\"type\":\"string\"}},\"required\":[\"saml_auth_enabled\",\"saml_auth_enforced\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"402\":{\"description\":\"SAML Authentication is not available; please upgrade your account!\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Organization not found.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/orgs/{org}/saml-authentication", "rename": { "param": { "org": "org_id" } }, "segments": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "saml-authentication" }], "select": { "exist": ["org_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "org_id", "orig": "org", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "data", "orig": "data", "reqd": false, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PATCH /orgs/{org}/saml-authentication", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_saml-authentication_partial_update\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"saml_auth_enabled\":{\"title\":\"Saml auth enabled\",\"type\":\"boolean\"},\"saml_auth_enforced\":{\"title\":\"Saml auth enforced\",\"type\":\"boolean\"},\"saml_metadata_inline\":{\"description\":\"If configured, SAML metadata will be used as entered instead of retrieved from a remote URL.\",\"maxLength\":32000,\"title\":\"Inline SAML metadata\",\"type\":\"string\"},\"saml_metadata_url\":{\"description\":\"If configured, SAML metadata be retrieved from a remote URL.\",\"format\":\"uri\",\"maxLength\":254,\"title\":\"Saml metadata url\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Updated the SAML Authentication settings.\",\"schema\":{\"properties\":{\"saml_auth_enabled\":{\"title\":\"Saml auth enabled\",\"type\":\"boolean\"},\"saml_auth_enforced\":{\"title\":\"Saml auth enforced\",\"type\":\"boolean\"},\"saml_metadata_inline\":{\"description\":\"If configured, SAML metadata will be used as entered instead of retrieved from a remote URL.\",\"maxLength\":32000,\"title\":\"Inline SAML metadata\",\"type\":\"string\"},\"saml_metadata_url\":{\"description\":\"If configured, SAML metadata be retrieved from a remote URL.\",\"format\":\"uri\",\"maxLength\":254,\"title\":\"Saml metadata url\",\"type\":\"string\"}},\"required\":[\"saml_auth_enabled\",\"saml_auth_enforced\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"402\":{\"description\":\"SAML Authentication is not available; please upgrade your account!\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Organization not found.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PATCH", "orig": "/orgs/{org}/saml-authentication", "rename": { "param": { "org": "org_id" } }, "segments": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "saml-authentication" }], "select": { "exist": ["data", "org_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["org"]] }, "key$": "organization_saml_auth", "name__orig": "organization_saml_auth", "Name": "OrganizationSamlAuth", "name_": "organization_saml_auth", "name-": "organization-saml-auth", "NAME": "ORGANIZATION_SAML_AUTH", "index$": 58 }, { "active": true, "entity": "organization_saml_auth", "key$": "BasicOrganizationSamlAuthFlow", "kind": "basic", "name": "BasicOrganizationSamlAuthFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "organization_saml_auth_ref01", "srcdatavar": "organization_saml_auth_ref01_data", "suffix": "_up0", "textfield": "saml_metadata_inline" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-organization_saml_auth_ref01" } }], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "organization_saml_auth_ref01", "srcdatavar": "organization_saml_auth_ref01_data", "suffix": "_dt0" }, "match": { "id": "organization_saml_auth01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-organization_saml_auth_ref01" } }], "index$": 1 }] }, 'OrganizationSamlAuth');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let organization_saml_auth_ref01_data = Object.values(setup.data.existing.organization_saml_auth)[0];
        // UPDATE
        const organization_saml_auth_ref01_ent = client.OrganizationSamlAuth();
        const organization_saml_auth_ref01_data_up0 = {};
        const organization_saml_auth_ref01_markdef_up0 = { name: 'saml_metadata_inline', value: 'Mark01-organization_saml_auth_ref01_' + setup.now };
        organization_saml_auth_ref01_data_up0[organization_saml_auth_ref01_markdef_up0.name] = organization_saml_auth_ref01_markdef_up0.value;
        const organization_saml_auth_ref01_resdata_up0 = (await organization_saml_auth_ref01_ent.update(organization_saml_auth_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != organization_saml_auth_ref01_resdata_up0);
        (0, node_assert_1.default)(organization_saml_auth_ref01_resdata_up0[organization_saml_auth_ref01_markdef_up0.name] === organization_saml_auth_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/organization_saml_auth/OrganizationSamlAuthTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['organization_saml_auth01', 'organization_saml_auth02', 'organization_saml_auth03', 'org01', 'org02', 'org03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_ORGANIZATION_SAML_AUTH_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_ORGANIZATION_SAML_AUTH_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_SAML_AUTH_ENTID'];
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
//# sourceMappingURL=OrganizationSamlAuthEntity.test.js.map