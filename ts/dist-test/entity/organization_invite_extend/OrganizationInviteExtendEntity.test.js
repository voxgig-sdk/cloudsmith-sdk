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
(0, node_test_1.describe)('OrganizationInviteExtendEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.OrganizationInviteExtend();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'organization_invite_extend.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "email": { "a": true, "fo": "email", "h": "Email", "n": "email", "r": false, "sh": "The email of the user to be invited.", "t": "`$STRING`", "key$": "email", "index$": 0 }, "expires_at": { "a": true, "fo": "date-time", "h": "Expires At", "n": "expires_at", "r": false, "ro": true, "t": "`$STRING`", "key$": "expires_at", "index$": 1 }, "inviter": { "a": true, "h": "Inviter", "n": "inviter", "r": false, "ro": true, "t": "`$STRING`", "key$": "inviter", "index$": 2 }, "inviter_url": { "a": true, "fo": "uri", "h": "Inviter Url", "n": "inviter_url", "r": false, "ro": true, "t": "`$STRING`", "key$": "inviter_url", "index$": 3 }, "org": { "a": true, "h": "Org", "n": "org", "r": false, "ro": true, "t": "`$STRING`", "key$": "org", "index$": 4 }, "role": { "a": true, "h": "Role", "n": "role", "r": false, "sh": "The role to be assigned to the invited user.", "t": "`$STRING`", "key$": "role", "index$": 5 }, "slug_perm": { "a": true, "fo": "slug", "h": "Slug Perm", "n": "slug_perm", "r": false, "ro": true, "sh": "The slug_perm of the invite to be extended.", "t": "`$STRING`", "key$": "slug_perm", "index$": 6 }, "teams": { "a": true, "h": "Teams", "n": "teams", "r": false, "t": "`$ARRAY`", "key$": "teams", "index$": 7 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "sh": "The slug of the user to be invited.", "t": "`$STRING`", "key$": "user", "index$": 8 }, "user_url": { "a": true, "fo": "uri", "h": "User Url", "n": "user_url", "r": false, "ro": true, "t": "`$STRING`", "key$": "user_url", "index$": 9 } }, "name": "organization_invite_extend", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /orgs/{org}/invites/{slug_perm}/extend/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "org_id", "or": "org", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "slug_perm", "or": "slug_perm", "r": true, "t": "`$ANY`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/orgs/{org}/invites/{slug_perm}/extend/", "q": { "exist": ["org_id", "slug_perm"] }, "r": { "param": { "org": "org_id" } }, "s": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "invites" }, { "var": "slug_perm" }, { "lit": "extend" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /orgs/{org}/invites/{slug_perm}/resend/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "org_id", "or": "org", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "slug_perm", "or": "slug_perm", "r": true, "t": "`$ANY`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/orgs/{org}/invites/{slug_perm}/resend/", "q": { "exist": ["org_id", "slug_perm"] }, "r": { "param": { "org": "org_id" } }, "s": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "invites" }, { "var": "slug_perm" }, { "lit": "resend" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.org"]] }, "key$": "organization_invite_extend", "name__orig": "organization_invite_extend", "Name": "OrganizationInviteExtend", "name_": "organization_invite_extend", "name-": "organization-invite-extend", "NAME": "ORGANIZATION_INVITE_EXTEND", "index$": 25 }, { "active": true, "entity": "organization_invite_extend", "key$": "BasicOrganizationInviteExtendFlow", "kind": "basic", "name": "BasicOrganizationInviteExtendFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "organization_invite_extend_ref01" }, "m": { "org_id": "org01", "slug_perm": "slug_perm01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'OrganizationInviteExtend', { "POST /orgs/{org}/invites/{slug_perm}/extend/": { "protocol": "http", "parameters": [{ "name": "org", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "slug_perm", "in": "path", "required": true, "type": "string", "index$": 1 }] }, "POST /orgs/{org}/invites/{slug_perm}/resend/": { "protocol": "http", "parameters": [{ "name": "org", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "slug_perm", "in": "path", "required": true, "type": "string", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const organization_invite_extend_ref01_ent = client.OrganizationInviteExtend();
        let organization_invite_extend_ref01_data = setup.data.new.organization_invite_extend['organization_invite_extend_ref01'];
        organization_invite_extend_ref01_data['org_id'] = setup.idmap['org01'];
        organization_invite_extend_ref01_data['slug_perm'] = setup.idmap['slug_perm01'];
        organization_invite_extend_ref01_data = (await organization_invite_extend_ref01_ent.create(organization_invite_extend_ref01_data)).data();
        (0, node_assert_1.default)(null != organization_invite_extend_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/organization_invite_extend/OrganizationInviteExtendTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['organization_invite_extend01', 'organization_invite_extend02', 'organization_invite_extend03', 'org01', 'org02', 'org03', 'slug_perm01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_ORGANIZATION_INVITE_EXTEND_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_ORGANIZATION_INVITE_EXTEND_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_INVITE_EXTEND_ENTID'];
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
//# sourceMappingURL=OrganizationInviteExtendEntity.test.js.map