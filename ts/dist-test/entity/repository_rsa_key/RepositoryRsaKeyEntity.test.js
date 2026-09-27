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
(0, node_test_1.describe)('RepositoryRsaKeyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.RepositoryRsaKey();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'repository_rsa_key.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "active": { "a": true, "h": "Active", "n": "active", "r": false, "ro": true, "sh": "If selected this is the active key for this repository.", "t": "`$BOOLEAN`", "key$": "active", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "ro": true, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "default": { "a": true, "h": "Default", "n": "default", "r": false, "ro": true, "sh": "If selected this is the default key for this repository.", "t": "`$BOOLEAN`", "key$": "default", "index$": 2 }, "fingerprint": { "a": true, "h": "Fingerprint", "n": "fingerprint", "r": false, "ro": true, "sh": "The long identifier used by RSA for this key.", "t": "`$STRING`", "key$": "fingerprint", "index$": 3 }, "fingerprint_short": { "a": true, "h": "Fingerprint Short", "n": "fingerprint_short", "r": false, "ro": true, "t": "`$STRING`", "key$": "fingerprint_short", "index$": 4 }, "public_key": { "a": true, "h": "Public Key", "n": "public_key", "r": false, "ro": true, "sh": "The public key given to repository users.", "t": "`$STRING`", "key$": "public_key", "index$": 5 }, "ssh_fingerprint": { "a": true, "h": "Ssh Fingerprint", "n": "ssh_fingerprint", "r": false, "ro": true, "sh": "The SSH fingerprint used by RSA for this key.", "t": "`$STRING`", "key$": "ssh_fingerprint", "index$": 6 } }, "name": "repository_rsa_key", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /repos/{owner}/{identifier}/rsa/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "identifier", "or": "identifier", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "data", "or": "data", "r": false, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/repos/{owner}/{identifier}/rsa/", "q": { "exist": ["data", "identifier", "owner"] }, "r": {}, "s": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "rsa" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /repos/{owner}/{identifier}/rsa/regenerate/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "identifier", "or": "identifier", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/repos/{owner}/{identifier}/rsa/regenerate/", "q": { "exist": ["identifier", "owner"] }, "r": {}, "s": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "rsa" }, { "lit": "regenerate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /repos/{owner}/{identifier}/rsa/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "identifier", "or": "identifier", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/repos/{owner}/{identifier}/rsa/", "q": { "exist": ["identifier", "owner"] }, "r": {}, "s": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "rsa" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.repo"]] }, "key$": "repository_rsa_key", "name__orig": "repository_rsa_key", "Name": "RepositoryRsaKey", "name_": "repository_rsa_key", "name-": "repository-rsa-key", "NAME": "REPOSITORY_RSA_KEY", "index$": 54 }, { "active": true, "entity": "repository_rsa_key", "key$": "BasicRepositoryRsaKeyFlow", "kind": "basic", "name": "BasicRepositoryRsaKeyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "repository_rsa_key_ref01" }, "m": { "identifier": "identifier01", "owner": "owner01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "repository_rsa_key_ref01", "srcdatavar": "repository_rsa_key_ref01_data", "suffix": "_dt0" }, "m": { "id": "repository_rsa_key01", "owner": "owner01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-repository_rsa_key_ref01" } }], "index$": 1 }] }, 'RepositoryRsaKey', { "POST /repos/{owner}/{identifier}/rsa/": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "identifier", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "data", "in": "body", "required": false, "schema": { "required": ["rsa_private_key"], "type": "object", "properties": { "rsa_passphrase": { "title": "Rsa passphrase", "description": "The RSA passphrase used for signing.", "type": "string", "minLength": 1 }, "rsa_private_key": { "title": "Rsa private key", "description": "The RSA private key.", "type": "string", "minLength": 1 } }, "x-ref": "#/definitions/RepositoryRsaKeyCreate" }, "index$": 2 }] }, "POST /repos/{owner}/{identifier}/rsa/regenerate/": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "identifier", "in": "path", "required": true, "type": "string", "index$": 1 }] }, "GET /repos/{owner}/{identifier}/rsa/": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "identifier", "in": "path", "required": true, "type": "string", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const repository_rsa_key_ref01_ent = client.RepositoryRsaKey();
        let repository_rsa_key_ref01_data = setup.data.new.repository_rsa_key['repository_rsa_key_ref01'];
        repository_rsa_key_ref01_data['identifier'] = setup.idmap['identifier01'];
        repository_rsa_key_ref01_data['owner'] = setup.idmap['owner01'];
        repository_rsa_key_ref01_data = (await repository_rsa_key_ref01_ent.create(repository_rsa_key_ref01_data)).data();
        (0, node_assert_1.default)(null != repository_rsa_key_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/repository_rsa_key/RepositoryRsaKeyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['repository_rsa_key01', 'repository_rsa_key02', 'repository_rsa_key03', 'repo01', 'repo02', 'repo03', 'identifier01', 'owner01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_REPOSITORY_RSA_KEY_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_REPOSITORY_RSA_KEY_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_RSA_KEY_ENTID'];
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
//# sourceMappingURL=RepositoryRsaKeyEntity.test.js.map