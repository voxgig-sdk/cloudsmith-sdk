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
(0, node_test_1.describe)('OrganizationTeamMemberEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.OrganizationTeamMember();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'organization_team_member.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "role": { "a": true, "h": "Role", "n": "role", "r": true, "t": "`$STRING`", "key$": "role", "index$": 0 }, "user": { "a": true, "h": "User", "n": "user", "r": true, "t": "`$STRING`", "key$": "user", "index$": 1 } }, "name": "organization_team_member", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /orgs/{org}/teams/{team}/members", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "org_id", "or": "org", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "team_id", "or": "team", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "data", "or": "data", "r": false, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/orgs/{org}/teams/{team}/members", "q": { "exist": ["data", "org_id", "team_id"] }, "r": { "param": { "org": "org_id", "team": "team_id" } }, "s": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "teams" }, { "var": "team_id" }, { "lit": "members" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /orgs/{org}/teams/{team}/members", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "org_id", "or": "org", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "team_id", "or": "team", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/orgs/{org}/teams/{team}/members", "q": { "exist": ["org_id", "team_id"] }, "r": { "param": { "org": "org_id", "team": "team_id" } }, "s": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "teams" }, { "var": "team_id" }, { "lit": "members" }], "t": { "req": "`reqdata`", "res": "`body.members`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.org"]] }, "key$": "organization_team_member", "name__orig": "organization_team_member", "Name": "OrganizationTeamMember", "name_": "organization_team_member", "name-": "organization-team-member", "NAME": "ORGANIZATION_TEAM_MEMBER", "index$": 33 }, { "active": true, "entity": "organization_team_member", "key$": "BasicOrganizationTeamMemberFlow", "kind": "basic", "name": "BasicOrganizationTeamMemberFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "organization_team_member_ref01" }, "m": { "org_id": "org01", "team_id": "team01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "org_id": "org01", "team_id": "team01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "organization_team_member_ref01" } }], "index$": 1 }] }, 'OrganizationTeamMember', { "POST /orgs/{org}/teams/{team}/members": { "protocol": "http", "parameters": [{ "name": "org", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "team", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "data", "in": "body", "required": false, "schema": { "required": ["members"], "type": "object", "properties": { "members": { "description": "The team members", "items": { "description": "The team members", "properties": { "role": { "enum": ["Manager", "Member"], "title": "Role", "type": "string", "key$": "role" }, "user": { "minLength": 1, "title": "User", "type": "string", "key$": "user" } }, "required": ["role", "user"], "type": "object", "x-ref": "#/definitions/OrganizationTeamMembership", "index$": 0 }, "key$": "members", "type": "array" } }, "x-ref": "#/definitions/OrganizationTeamMembers" }, "index$": 2 }] }, "GET /orgs/{org}/teams/{team}/members": { "protocol": "http", "parameters": [{ "name": "org", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "team", "in": "path", "required": true, "type": "string", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const organization_team_member_ref01_ent = client.OrganizationTeamMember();
        let organization_team_member_ref01_data = setup.data.new.organization_team_member['organization_team_member_ref01'];
        organization_team_member_ref01_data['org_id'] = setup.idmap['org01'];
        organization_team_member_ref01_data['team_id'] = setup.idmap['team01'];
        organization_team_member_ref01_data = (await organization_team_member_ref01_ent.create(organization_team_member_ref01_data)).data();
        (0, node_assert_1.default)(null != organization_team_member_ref01_data);
        // LIST
        const organization_team_member_ref01_match = {};
        organization_team_member_ref01_match['org_id'] = setup.idmap['org01'];
        organization_team_member_ref01_match['team_id'] = setup.idmap['team01'];
        const organization_team_member_ref01_list = (await organization_team_member_ref01_ent.list(organization_team_member_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/organization_team_member/OrganizationTeamMemberTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['organization_team_member01', 'organization_team_member02', 'organization_team_member03', 'org01', 'org02', 'org03', 'team01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_ORGANIZATION_TEAM_MEMBER_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_ORGANIZATION_TEAM_MEMBER_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_TEAM_MEMBER_ENTID'];
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
//# sourceMappingURL=OrganizationTeamMemberEntity.test.js.map