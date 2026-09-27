

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"email":{"a":true,"fo":"email","h":"Email","n":"email","r":false,"sh":"The email of the user to be invited.","t":"`$STRING`","key$":"email","index$":0},"expires_at":{"a":true,"fo":"date-time","h":"Expires At","n":"expires_at","r":false,"ro":true,"t":"`$STRING`","key$":"expires_at","index$":1},"inviter":{"a":true,"h":"Inviter","n":"inviter","r":false,"ro":true,"t":"`$STRING`","key$":"inviter","index$":2},"inviter_url":{"a":true,"fo":"uri","h":"Inviter Url","n":"inviter_url","r":false,"ro":true,"t":"`$STRING`","key$":"inviter_url","index$":3},"org":{"a":true,"h":"Org","n":"org","r":false,"ro":true,"t":"`$STRING`","key$":"org","index$":4},"role":{"a":true,"h":"Role","n":"role","r":false,"sh":"The role to be assigned to the invited user.","t":"`$STRING`","key$":"role","index$":5},"slug_perm":{"a":true,"fo":"slug","h":"Slug Perm","n":"slug_perm","r":false,"ro":true,"sh":"The slug_perm of the invite to be extended.","t":"`$STRING`","key$":"slug_perm","index$":6},"teams":{"a":true,"h":"Teams","n":"teams","r":false,"t":"`$ARRAY`","key$":"teams","index$":7},"user":{"a":true,"h":"User","n":"user","r":false,"sh":"The slug of the user to be invited.","t":"`$STRING`","key$":"user","index$":8},"user_url":{"a":true,"fo":"uri","h":"User Url","n":"user_url","r":false,"ro":true,"t":"`$STRING`","key$":"user_url","index$":9}},"name":"organization_invite_extend","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /orgs/{org}/invites/{slug_perm}/extend/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"slug_perm","or":"slug_perm","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"POST","o":"/orgs/{org}/invites/{slug_perm}/extend/","q":{"exist":["org_id","slug_perm"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"invites"},{"var":"slug_perm"},{"lit":"extend"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /orgs/{org}/invites/{slug_perm}/resend/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"slug_perm","or":"slug_perm","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"POST","o":"/orgs/{org}/invites/{slug_perm}/resend/","q":{"exist":["org_id","slug_perm"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"invites"},{"var":"slug_perm"},{"lit":"resend"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.org"]]},"key$":"organization_invite_extend","name__orig":"organization_invite_extend","Name":"OrganizationInviteExtend","name_":"organization_invite_extend","name-":"organization-invite-extend","NAME":"ORGANIZATION_INVITE_EXTEND","index$":25}, {"active":true,"entity":"organization_invite_extend","key$":"BasicOrganizationInviteExtendFlow","kind":"basic","name":"BasicOrganizationInviteExtendFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"organization_invite_extend_ref01"},"m":{"org_id":"org01","slug_perm":"slug_perm01"},"o":"create","s":[],"v":[],"index$":0}]}, 'OrganizationInviteExtend', {"POST /orgs/{org}/invites/{slug_perm}/extend/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1}]},"POST /orgs/{org}/invites/{slug_perm}/resend/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1}]}})
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
    ['organization_invite_extend01','organization_invite_extend02','organization_invite_extend03','org01','org02','org03','slug_perm01'],
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
  
