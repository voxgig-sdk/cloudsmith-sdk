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
(0, node_test_1.describe)('PackageFileUploadEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.PackageFileUpload();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'package_file_upload.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "package_file_upload", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "identifier", "orig": "identifier", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "param", "name": "owner", "orig": "owner", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "param", "name": "repo", "orig": "repo", "reqd": true, "type": "`$ANY`", "index$": 2 }], "query": [{ "active": true, "kind": "query", "name": "data", "orig": "data", "reqd": false, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /files/{owner}/{repo}/{identifier}/complete/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"files_complete\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"repo\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"identifier\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"filename\":{\"description\":\"Filename for the package file upload.\",\"minLength\":1,\"title\":\"Filename\",\"type\":\"string\"},\"md5_checksum\":{\"description\":\"MD5 checksum for a POST-based package file upload.\",\"maxLength\":32,\"minLength\":32,\"title\":\"Md5 checksum\",\"type\":\"string\"},\"method\":{\"default\":\"post\",\"description\":\"The method to use for package file upload.\",\"enum\":[\"put_parts\",\"put\",\"post\",\"presigned\",\"unsigned_put\"],\"title\":\"Method\",\"type\":\"string\"},\"sha256_checksum\":{\"description\":\"SHA256 checksum for a PUT-based package file upload.\",\"maxLength\":64,\"minLength\":64,\"title\":\"Sha256 checksum\",\"type\":\"string\"}},\"required\":[\"filename\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"The multipart upload was completed successfully.\",\"schema\":{\"properties\":{\"identifier\":{\"description\":\"The identifier for the file to use when creating packages\",\"format\":\"uri\",\"minLength\":1,\"readOnly\":true,\"title\":\"Identifier\",\"type\":\"string\"},\"upload_fields\":{\"description\":\"The dictionary of fields that must be sent with POST uploads\",\"readOnly\":true,\"title\":\"Upload fields\",\"type\":\"object\"},\"upload_headers\":{\"description\":\"The dictionary of headers that must be sent with uploads\",\"readOnly\":true,\"title\":\"Upload headers\",\"type\":\"object\"},\"upload_querystring\":{\"description\":\"The querystring to use for the next-step POST or PUT upload\",\"minLength\":1,\"readOnly\":true,\"title\":\"Upload querystring\",\"type\":\"string\"},\"upload_url\":{\"description\":\"The URL to use for the next-step POST or PUT upload\",\"format\":\"uri\",\"minLength\":1,\"readOnly\":true,\"title\":\"Upload url\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"The multipart upload could not be completed.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Namespace (owner), repository or upload file not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/files/{owner}/{repo}/{identifier}/complete/", "segments": [{ "lit": "files" }, { "var": "owner" }, { "var": "repo" }, { "var": "identifier" }, { "lit": "complete" }], "select": { "exist": ["data", "identifier", "owner", "repo"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["file"]] }, "key$": "package_file_upload", "name__orig": "package_file_upload", "Name": "PackageFileUpload", "name_": "package_file_upload", "name-": "package-file-upload", "NAME": "PACKAGE_FILE_UPLOAD", "index$": 66 }, { "active": true, "entity": "package_file_upload", "key$": "BasicPackageFileUploadFlow", "kind": "basic", "name": "BasicPackageFileUploadFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "package_file_upload_ref01" }, "match": { "identifier": "identifier01", "owner": "owner01", "repo": "repo01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'PackageFileUpload');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const package_file_upload_ref01_ent = client.PackageFileUpload();
        let package_file_upload_ref01_data = setup.data.new.package_file_upload['package_file_upload_ref01'];
        package_file_upload_ref01_data['identifier'] = setup.idmap['identifier01'];
        package_file_upload_ref01_data['owner'] = setup.idmap['owner01'];
        package_file_upload_ref01_data['repo'] = setup.idmap['repo01'];
        package_file_upload_ref01_data = (await package_file_upload_ref01_ent.create(package_file_upload_ref01_data)).data();
        (0, node_assert_1.default)(null != package_file_upload_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/package_file_upload/PackageFileUploadTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['package_file_upload01', 'package_file_upload02', 'package_file_upload03', 'file01', 'file02', 'file03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_PACKAGE_FILE_UPLOAD_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_PACKAGE_FILE_UPLOAD_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_PACKAGE_FILE_UPLOAD_ENTID'];
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
//# sourceMappingURL=PackageFileUploadEntity.test.js.map