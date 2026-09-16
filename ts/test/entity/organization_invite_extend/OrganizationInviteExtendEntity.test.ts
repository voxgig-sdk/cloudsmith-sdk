

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudsmithSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('OrganizationInviteExtendEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.OrganizationInviteExtend()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization_invite_extend.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"email","name":"email","req":false,"short":"The email of the user to be invited.","type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"expires_at","readOnly":true,"req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"inviter","readOnly":true,"req":false,"type":"`$STRING`","index$":2},{"active":true,"format":"uri","name":"inviter_url","readOnly":true,"req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"org","readOnly":true,"req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"role","req":false,"short":"The role to be assigned to the invited user.","type":"`$STRING`","index$":5},{"active":true,"format":"slug","name":"slug_perm","readOnly":true,"req":false,"short":"The slug_perm of the invite to be extended.","type":"`$STRING`","index$":6},{"active":true,"name":"teams","req":false,"type":"`$ARRAY`","index$":7},{"active":true,"name":"user","req":false,"short":"The slug of the user to be invited.","type":"`$STRING`","index$":8},{"active":true,"format":"uri","name":"user_url","readOnly":true,"req":false,"type":"`$STRING`","index$":9}],"name":"organization_invite_extend","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"slug_perm","orig":"slug_perm","reqd":true,"type":"`$ANY`","index$":1}]},"contract":{"id":"POST /orgs/{org}/invites/{slug_perm}/extend/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_invites_extend\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"slug_perm\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"The invite has been extended\",\"schema\":{\"properties\":{\"email\":{\"description\":\"The email of the user to be invited.\",\"format\":\"email\",\"minLength\":1,\"title\":\"Email\",\"type\":\"string\"},\"expires_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Expires at\",\"type\":\"string\"},\"inviter\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Inviter\",\"type\":\"string\"},\"inviter_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Inviter url\",\"type\":\"string\"},\"org\":{\"readOnly\":true,\"title\":\"Org\",\"type\":\"string\"},\"role\":{\"default\":\"Member\",\"description\":\"The role to be assigned to the invited user.\",\"enum\":[\"Owner\",\"Manager\",\"Member\",\"Collaborator\"],\"title\":\"Role\",\"type\":\"string\"},\"slug_perm\":{\"description\":\"The slug_perm of the invite to be extended.\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"teams\":{\"items\":{\"properties\":{\"role\":{\"default\":\"Member\",\"description\":\"The role to be assigned to the invited user in the team.\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"team\":{\"description\":\"The team identifier (slug).\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Team\",\"type\":\"string\"}},\"required\":[\"team\"],\"type\":\"object\"},\"type\":\"array\"},\"user\":{\"description\":\"The slug of the user to be invited.\",\"minLength\":1,\"title\":\"User\",\"type\":\"string\"},\"user_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"User url\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Invite not found.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/orgs/{org}/invites/{slug_perm}/extend/","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"invites"},{"var":"slug_perm"},{"lit":"extend"}],"select":{"exist":["org_id","slug_perm"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"slug_perm","orig":"slug_perm","reqd":true,"type":"`$ANY`","index$":1}]},"contract":{"id":"POST /orgs/{org}/invites/{slug_perm}/resend/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_invites_resend\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"slug_perm\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"The invite has been resent\",\"schema\":{\"properties\":{\"email\":{\"description\":\"The email of the user to be invited.\",\"format\":\"email\",\"minLength\":1,\"title\":\"Email\",\"type\":\"string\"},\"expires_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Expires at\",\"type\":\"string\"},\"inviter\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Inviter\",\"type\":\"string\"},\"inviter_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Inviter url\",\"type\":\"string\"},\"org\":{\"readOnly\":true,\"title\":\"Org\",\"type\":\"string\"},\"role\":{\"default\":\"Member\",\"description\":\"The role to be assigned to the invited user.\",\"enum\":[\"Owner\",\"Manager\",\"Member\",\"Collaborator\"],\"title\":\"Role\",\"type\":\"string\"},\"slug_perm\":{\"description\":\"The slug_perm of the invite to be extended.\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"teams\":{\"items\":{\"properties\":{\"role\":{\"default\":\"Member\",\"description\":\"The role to be assigned to the invited user in the team.\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"team\":{\"description\":\"The team identifier (slug).\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Team\",\"type\":\"string\"}},\"required\":[\"team\"],\"type\":\"object\"},\"type\":\"array\"},\"user\":{\"description\":\"The slug of the user to be invited.\",\"minLength\":1,\"title\":\"User\",\"type\":\"string\"},\"user_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"User url\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Invite not found.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/orgs/{org}/invites/{slug_perm}/resend/","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"invites"},{"var":"slug_perm"},{"lit":"resend"}],"select":{"exist":["org_id","slug_perm"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["org","invite"]]},"key$":"organization_invite_extend","name__orig":"organization_invite_extend","Name":"OrganizationInviteExtend","name_":"organization_invite_extend","name-":"organization-invite-extend","NAME":"ORGANIZATION_INVITE_EXTEND","index$":52}, {"active":true,"entity":"organization_invite_extend","key$":"BasicOrganizationInviteExtendFlow","kind":"basic","name":"BasicOrganizationInviteExtendFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"organization_invite_extend_ref01"},"match":{"org_id":"org01","slug_perm":"slug_perm01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'OrganizationInviteExtend')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const organization_invite_extend_ref01_ent = client.OrganizationInviteExtend()
    let organization_invite_extend_ref01_data = setup.data.new.organization_invite_extend['organization_invite_extend_ref01']
    organization_invite_extend_ref01_data['org_id'] = setup.idmap['org01']
    organization_invite_extend_ref01_data['slug_perm'] = setup.idmap['slug_perm01']

    organization_invite_extend_ref01_data = (await organization_invite_extend_ref01_ent.create(organization_invite_extend_ref01_data)).data()
    assert(null != organization_invite_extend_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization_invite_extend/OrganizationInviteExtendTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudsmithSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['organization_invite_extend01','organization_invite_extend02','organization_invite_extend03','org01','org02','org03','invite01','invite02','invite03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_ORGANIZATION_INVITE_EXTEND_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_ORGANIZATION_INVITE_EXTEND_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_INVITE_EXTEND_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudsmithSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
