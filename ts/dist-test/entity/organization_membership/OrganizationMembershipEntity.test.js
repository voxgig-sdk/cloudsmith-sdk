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
(0, node_test_1.describe)('OrganizationMembershipEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.OrganizationMembership();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'organization_membership.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "email": { "a": true, "h": "Email", "n": "email", "r": false, "ro": true, "t": "`$STRING`", "key$": "email", "index$": 0 }, "has_two_factor": { "a": true, "h": "Has Two Factor", "n": "has_two_factor", "r": false, "ro": true, "t": "`$BOOLEAN`", "key$": "has_two_factor", "index$": 1 }, "is_active": { "a": true, "h": "Is Active", "n": "is_active", "r": false, "ro": true, "t": "`$BOOLEAN`", "key$": "is_active", "index$": 2 }, "joined_at": { "a": true, "fo": "date-time", "h": "Joined At", "n": "joined_at", "r": false, "ro": true, "t": "`$STRING`", "key$": "joined_at", "index$": 3 }, "last_login_at": { "a": true, "fo": "date-time", "h": "Last Login At", "n": "last_login_at", "r": false, "ro": true, "t": "`$STRING`", "key$": "last_login_at", "index$": 4 }, "last_login_method": { "a": true, "h": "Last Login Method", "n": "last_login_method", "r": false, "ro": true, "t": "`$STRING`", "key$": "last_login_method", "index$": 5 }, "role": { "a": true, "h": "Role", "n": "role", "r": false, "ro": true, "t": "`$STRING`", "key$": "role", "index$": 6 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "ro": true, "t": "`$STRING`", "key$": "user", "index$": 7 }, "user_id": { "a": true, "h": "User Id", "n": "user_id", "r": false, "ro": true, "t": "`$STRING`", "key$": "user_id", "index$": 8 }, "user_name": { "a": true, "h": "User Name", "n": "user_name", "r": false, "ro": true, "t": "`$STRING`", "key$": "user_name", "index$": 9 }, "user_url": { "a": true, "fo": "uri", "h": "User Url", "n": "user_url", "r": false, "ro": true, "t": "`$STRING`", "key$": "user_url", "index$": 10 }, "visibility": { "a": true, "h": "Visibility", "n": "visibility", "r": false, "ro": true, "t": "`$STRING`", "key$": "visibility", "index$": 11 } }, "name": "organization_membership", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /orgs/{org}/members/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "org_id", "or": "org", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "is_active", "or": "is_active", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "query", "or": "query", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ANY`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/orgs/{org}/members/", "q": { "exist": ["is_active", "org_id", "page", "page_size", "query", "sort"] }, "r": { "param": { "org": "org_id" } }, "s": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "members" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /orgs/{org}/members/{member}/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "member", "or": "member", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "org_id", "or": "org", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/orgs/{org}/members/{member}/", "q": { "exist": ["member", "org_id"] }, "r": { "param": { "org": "org_id" } }, "s": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "members" }, { "var": "member" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /orgs/{org}/members/{member}/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "member", "or": "member", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "org_id", "or": "org", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "data", "or": "data", "r": false, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/orgs/{org}/members/{member}/", "q": { "exist": ["data", "member", "org_id"] }, "r": { "param": { "org": "org_id" } }, "s": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "members" }, { "var": "member" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.org"], ["$.main.kit.entity.org"]] }, "key$": "organization_membership", "name__orig": "organization_membership", "Name": "OrganizationMembership", "name_": "organization_membership", "name-": "organization-membership", "NAME": "ORGANIZATION_MEMBERSHIP", "index$": 26 }, { "active": true, "entity": "organization_membership", "key$": "BasicOrganizationMembershipFlow", "kind": "basic", "name": "BasicOrganizationMembershipFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "org_id": "org01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "organization_membership_ref01" } }], "index$": 0 }, { "a": true, "d": { "org_id": "org01" }, "i": { "ref": "organization_membership_ref01", "srcdatavar": "organization_membership_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-organization_membership_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "organization_membership_ref01", "srcdatavar": "organization_membership_ref01_data", "suffix": "_dt0" }, "m": { "id": "organization_membership01", "org_id": "org01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-organization_membership_ref01" } }], "index$": 2 }] }, 'OrganizationMembership', { "GET /orgs/{org}/members/": { "protocol": "http", "parameters": [{ "name": "org", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "page", "in": "query", "description": "A page number within the paginated result set.", "required": false, "type": "integer", "index$": 1 }, { "name": "page_size", "in": "query", "description": "Number of results to return per page.", "required": false, "type": "integer", "index$": 2 }, { "name": "is_active", "in": "query", "description": "Filter for active/inactive users.", "required": false, "type": "boolean", "default": false, "index$": 3 }, { "name": "query", "in": "query", "description": "A search term for querying of members within an Organization.Available options are: email, org, user, userslug, inactive, user_name, role", "required": false, "type": "string", "default": "", "index$": 4 }, { "name": "sort", "in": "query", "description": "A field for sorting objects in ascending or descending order. Use `-` prefix for descending order (e.g., `-user_name`). Available options: user_name, role.", "required": false, "type": "string", "default": "user_name", "index$": 5 }] }, "GET /orgs/{org}/members/{member}/": { "protocol": "http", "parameters": [{ "name": "org", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "member", "in": "path", "required": true, "type": "string", "index$": 1 }] }, "PATCH /orgs/{org}/members/{member}/": { "protocol": "http", "parameters": [{ "name": "org", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "member", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "data", "in": "body", "required": false, "schema": { "type": "object", "properties": {}, "x-ref": "#/definitions/OrganizationMembershipRequestPatch" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let organization_membership_ref01_data = Object.values(setup.data.existing.organization_membership)[0];
        // LIST
        const organization_membership_ref01_ent = client.OrganizationMembership();
        const organization_membership_ref01_match = {};
        organization_membership_ref01_match['org_id'] = setup.idmap['org01'];
        const organization_membership_ref01_list = (await organization_membership_ref01_ent.list(organization_membership_ref01_match)).map((e) => e.data());
        // UPDATE
        const organization_membership_ref01_data_up0 = {};
        organization_membership_ref01_data_up0['org_id'] = setup.idmap['org_id'];
        const organization_membership_ref01_resdata_up0 = (await organization_membership_ref01_ent.update(organization_membership_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != organization_membership_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/organization_membership/OrganizationMembershipTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['organization_membership01', 'organization_membership02', 'organization_membership03', 'org01', 'org02', 'org03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ENTID'];
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
//# sourceMappingURL=OrganizationMembershipEntity.test.js.map