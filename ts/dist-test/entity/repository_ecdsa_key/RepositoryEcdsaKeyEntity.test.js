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
(0, node_test_1.describe)('RepositoryEcdsaKeyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.RepositoryEcdsaKey();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'repository_ecdsa_key.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "active", "readOnly": true, "req": false, "short": "If selected this is the active key for this repository.", "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "format": "date-time", "name": "created_at", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "default", "readOnly": true, "req": false, "short": "If selected this is the default key for this repository.", "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "name": "fingerprint", "readOnly": true, "req": false, "short": "The long identifier used by ECDSA for this key.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "fingerprint_short", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "public_key", "readOnly": true, "req": false, "short": "The public key given to repository users.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "ssh_fingerprint", "readOnly": true, "req": false, "short": "The SSH fingerprint used by ECDSA for this key.", "type": "`$STRING`", "index$": 6 }], "name": "repository_ecdsa_key", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "identifier", "orig": "identifier", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "param", "name": "owner", "orig": "owner", "reqd": true, "type": "`$ANY`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "data", "orig": "data", "reqd": false, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /repos/{owner}/{identifier}/ecdsa/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"repos_ecdsa_create\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"identifier\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"ecdsa_passphrase\":{\"description\":\"The ECDSA passphrase used for signing.\",\"minLength\":1,\"title\":\"Ecdsa passphrase\",\"type\":\"string\"},\"ecdsa_private_key\":{\"description\":\"The ECDSA private key.\",\"minLength\":1,\"title\":\"Ecdsa private key\",\"type\":\"string\"}},\"required\":[\"ecdsa_private_key\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"The provided ECDSA key is the same as the current ECDSA key.\",\"schema\":{\"properties\":{\"active\":{\"description\":\"If selected this is the active key for this repository.\",\"readOnly\":true,\"title\":\"Active\",\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"default\":{\"description\":\"If selected this is the default key for this repository.\",\"readOnly\":true,\"title\":\"Default\",\"type\":\"boolean\"},\"fingerprint\":{\"description\":\"The long identifier used by ECDSA for this key.\",\"minLength\":1,\"readOnly\":true,\"title\":\"Fingerprint\",\"type\":\"string\"},\"fingerprint_short\":{\"readOnly\":true,\"title\":\"Fingerprint short\",\"type\":\"string\"},\"public_key\":{\"description\":\"The public key given to repository users.\",\"minLength\":1,\"readOnly\":true,\"title\":\"Public key\",\"type\":\"string\"},\"ssh_fingerprint\":{\"description\":\"The SSH fingerprint used by ECDSA for this key.\",\"readOnly\":true,\"title\":\"Ssh fingerprint\",\"type\":\"string\"}},\"type\":\"object\"}},\"201\":{\"description\":\"The provided ECDSA key was assigned to the Repository.\",\"schema\":{\"properties\":{\"active\":{\"description\":\"If selected this is the active key for this repository.\",\"readOnly\":true,\"title\":\"Active\",\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"default\":{\"description\":\"If selected this is the default key for this repository.\",\"readOnly\":true,\"title\":\"Default\",\"type\":\"boolean\"},\"fingerprint\":{\"description\":\"The long identifier used by ECDSA for this key.\",\"minLength\":1,\"readOnly\":true,\"title\":\"Fingerprint\",\"type\":\"string\"},\"fingerprint_short\":{\"readOnly\":true,\"title\":\"Fingerprint short\",\"type\":\"string\"},\"public_key\":{\"description\":\"The public key given to repository users.\",\"minLength\":1,\"readOnly\":true,\"title\":\"Public key\",\"type\":\"string\"},\"ssh_fingerprint\":{\"description\":\"The SSH fingerprint used by ECDSA for this key.\",\"readOnly\":true,\"title\":\"Ssh fingerprint\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"The provided ECDSA key is not valid\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"402\":{\"description\":\"Custom ECDSA keys are not active; upgrade your account!\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Organization/Repository does not exist, or you do not have permissions.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/repos/{owner}/{identifier}/ecdsa/", "segments": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "ecdsa" }], "select": { "exist": ["data", "identifier", "owner"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "identifier", "orig": "identifier", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "param", "name": "owner", "orig": "owner", "reqd": true, "type": "`$ANY`", "index$": 1 }] }, "contract": { "id": "POST /repos/{owner}/{identifier}/ecdsa/regenerate/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"repos_ecdsa_regenerate\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"identifier\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"An ECDSA key was generated for the Repository.\",\"schema\":{\"properties\":{\"active\":{\"description\":\"If selected this is the active key for this repository.\",\"readOnly\":true,\"title\":\"Active\",\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"default\":{\"description\":\"If selected this is the default key for this repository.\",\"readOnly\":true,\"title\":\"Default\",\"type\":\"boolean\"},\"fingerprint\":{\"description\":\"The long identifier used by ECDSA for this key.\",\"minLength\":1,\"readOnly\":true,\"title\":\"Fingerprint\",\"type\":\"string\"},\"fingerprint_short\":{\"readOnly\":true,\"title\":\"Fingerprint short\",\"type\":\"string\"},\"public_key\":{\"description\":\"The public key given to repository users.\",\"minLength\":1,\"readOnly\":true,\"title\":\"Public key\",\"type\":\"string\"},\"ssh_fingerprint\":{\"description\":\"The SSH fingerprint used by ECDSA for this key.\",\"readOnly\":true,\"title\":\"Ssh fingerprint\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/repos/{owner}/{identifier}/ecdsa/regenerate/", "segments": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "ecdsa" }, { "lit": "regenerate" }], "select": { "exist": ["identifier", "owner"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "identifier", "orig": "identifier", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "param", "name": "owner", "orig": "owner", "reqd": true, "type": "`$ANY`", "index$": 1 }] }, "contract": { "id": "GET /repos/{owner}/{identifier}/ecdsa/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"repos_ecdsa_list\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"identifier\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved the active ECDSA key.\",\"schema\":{\"properties\":{\"active\":{\"description\":\"If selected this is the active key for this repository.\",\"readOnly\":true,\"title\":\"Active\",\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"default\":{\"description\":\"If selected this is the default key for this repository.\",\"readOnly\":true,\"title\":\"Default\",\"type\":\"boolean\"},\"fingerprint\":{\"description\":\"The long identifier used by ECDSA for this key.\",\"minLength\":1,\"readOnly\":true,\"title\":\"Fingerprint\",\"type\":\"string\"},\"fingerprint_short\":{\"readOnly\":true,\"title\":\"Fingerprint short\",\"type\":\"string\"},\"public_key\":{\"description\":\"The public key given to repository users.\",\"minLength\":1,\"readOnly\":true,\"title\":\"Public key\",\"type\":\"string\"},\"ssh_fingerprint\":{\"description\":\"The SSH fingerprint used by ECDSA for this key.\",\"readOnly\":true,\"title\":\"Ssh fingerprint\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/repos/{owner}/{identifier}/ecdsa/", "segments": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "ecdsa" }], "select": { "exist": ["identifier", "owner"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["repo"]] }, "key$": "repository_ecdsa_key", "name__orig": "repository_ecdsa_key", "Name": "RepositoryEcdsaKey", "name_": "repository_ecdsa_key", "name-": "repository-ecdsa-key", "NAME": "REPOSITORY_ECDSA_KEY", "index$": 82 }, { "active": true, "entity": "repository_ecdsa_key", "key$": "BasicRepositoryEcdsaKeyFlow", "kind": "basic", "name": "BasicRepositoryEcdsaKeyFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "repository_ecdsa_key_ref01" }, "match": { "identifier": "identifier01", "owner": "owner01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "repository_ecdsa_key_ref01", "srcdatavar": "repository_ecdsa_key_ref01_data", "suffix": "_dt0" }, "match": { "id": "repository_ecdsa_key01", "owner": "owner01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-repository_ecdsa_key_ref01" } }], "index$": 1 }] }, 'RepositoryEcdsaKey');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const repository_ecdsa_key_ref01_ent = client.RepositoryEcdsaKey();
        let repository_ecdsa_key_ref01_data = setup.data.new.repository_ecdsa_key['repository_ecdsa_key_ref01'];
        repository_ecdsa_key_ref01_data['identifier'] = setup.idmap['identifier01'];
        repository_ecdsa_key_ref01_data['owner'] = setup.idmap['owner01'];
        repository_ecdsa_key_ref01_data = (await repository_ecdsa_key_ref01_ent.create(repository_ecdsa_key_ref01_data)).data();
        (0, node_assert_1.default)(null != repository_ecdsa_key_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/repository_ecdsa_key/RepositoryEcdsaKeyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['repository_ecdsa_key01', 'repository_ecdsa_key02', 'repository_ecdsa_key03', 'repo01', 'repo02', 'repo03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_REPOSITORY_ECDSA_KEY_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_REPOSITORY_ECDSA_KEY_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_ECDSA_KEY_ENTID'];
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
//# sourceMappingURL=RepositoryEcdsaKeyEntity.test.js.map