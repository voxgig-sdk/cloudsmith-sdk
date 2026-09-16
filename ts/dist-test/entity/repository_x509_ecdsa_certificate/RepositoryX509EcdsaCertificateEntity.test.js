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
(0, node_test_1.describe)('RepositoryX509EcdsaCertificateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.RepositoryX509EcdsaCertificate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'repository_x509_ecdsa_certificate.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "active", "readOnly": true, "req": false, "short": "If selected this is the active key for this repository.", "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "name": "certificate", "readOnly": true, "req": false, "short": "The issued certificate.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "certificate_chain", "readOnly": true, "req": false, "short": "Base64 encoded CA certificate chain.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "certificate_chain_fingerprint", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "certificate_chain_fingerprint_short", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "certificate_fingerprint", "readOnly": true, "req": false, "short": "The SHA-256 long identifier used", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "certificate_fingerprint_short", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "format": "date-time", "name": "created_at", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "default", "readOnly": true, "req": false, "short": "If selected this is the default key for this repository.", "type": "`$BOOLEAN`", "index$": 8 }, { "active": true, "name": "issuing_status", "req": false, "type": "`$STRING`", "index$": 9 }], "name": "repository_x509_ecdsa_certificate", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "identifier", "orig": "identifier", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "param", "name": "owner", "orig": "owner", "reqd": true, "type": "`$ANY`", "index$": 1 }] }, "contract": { "id": "GET /repos/{owner}/{identifier}/x509-ecdsa/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"repos_x509_ecdsa_list\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"identifier\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved the active X.509 ECDSA Certificate.\",\"schema\":{\"properties\":{\"active\":{\"description\":\"If selected this is the active key for this repository.\",\"readOnly\":true,\"title\":\"Active\",\"type\":\"boolean\"},\"certificate\":{\"description\":\"The issued certificate.\",\"readOnly\":true,\"title\":\"Certificate\",\"type\":\"string\"},\"certificate_chain\":{\"description\":\"Base64 encoded CA certificate chain.\",\"readOnly\":true,\"title\":\"Certificate chain\",\"type\":\"string\"},\"certificate_chain_fingerprint\":{\"readOnly\":true,\"title\":\"Certificate chain fingerprint\",\"type\":\"string\"},\"certificate_chain_fingerprint_short\":{\"readOnly\":true,\"title\":\"Certificate chain fingerprint short\",\"type\":\"string\"},\"certificate_fingerprint\":{\"description\":\"The SHA-256 long identifier used\",\"readOnly\":true,\"title\":\"Certificate fingerprint\",\"type\":\"string\"},\"certificate_fingerprint_short\":{\"readOnly\":true,\"title\":\"Certificate fingerprint short\",\"type\":\"string\"},\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"default\":{\"description\":\"If selected this is the default key for this repository.\",\"readOnly\":true,\"title\":\"Default\",\"type\":\"boolean\"},\"issuing_status\":{\"default\":\"Certificate is pending to be issued\",\"enum\":[\"Certificate is pending to be issued\",\"Certificate successfully issued\",\"Error issuing certificate\"],\"title\":\"Issuing status\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/repos/{owner}/{identifier}/x509-ecdsa/", "segments": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "x509-ecdsa" }], "select": { "exist": ["identifier", "owner"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["repo"]] }, "key$": "repository_x509_ecdsa_certificate", "name__orig": "repository_x509_ecdsa_certificate", "Name": "RepositoryX509EcdsaCertificate", "name_": "repository_x509_ecdsa_certificate", "name-": "repository-x509-ecdsa-certificate", "NAME": "REPOSITORY_X509_ECDSA_CERTIFICATE", "index$": 94 }, { "active": true, "entity": "repository_x509_ecdsa_certificate", "key$": "BasicRepositoryX509EcdsaCertificateFlow", "kind": "basic", "name": "BasicRepositoryX509EcdsaCertificateFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "repository_x509_ecdsa_certificate_ref01", "srcdatavar": "repository_x509_ecdsa_certificate_ref01_data", "suffix": "_dt0" }, "match": { "id": "repository_x509_ecdsa_certificate01", "owner": "owner01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-repository_x509_ecdsa_certificate_ref01" } }], "index$": 0 }] }, 'RepositoryX509EcdsaCertificate');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let repository_x509_ecdsa_certificate_ref01_data = Object.values(setup.data.existing.repository_x509_ecdsa_certificate)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const repository_x509_ecdsa_certificate_ref01_ent = client.RepositoryX509EcdsaCertificate();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/repository_x509_ecdsa_certificate/RepositoryX509EcdsaCertificateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['repository_x509_ecdsa_certificate01', 'repository_x509_ecdsa_certificate02', 'repository_x509_ecdsa_certificate03', 'repo01', 'repo02', 'repo03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_REPOSITORY_X509_ECDSA_CERTIFICATE_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_REPOSITORY_X509_ECDSA_CERTIFICATE_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_X509_ECDSA_CERTIFICATE_ENTID'];
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
//# sourceMappingURL=RepositoryX509EcdsaCertificateEntity.test.js.map