

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


describe('OrganizationInviteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.OrganizationInvite()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization_invite.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"email":{"a":true,"fo":"email","h":"Email","n":"email","r":false,"sh":"The email of the user to be invited.","t":"`$STRING`","key$":"email","index$":0},"expires_at":{"a":true,"fo":"date-time","h":"Expires At","n":"expires_at","r":false,"ro":true,"t":"`$STRING`","key$":"expires_at","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"inviter":{"a":true,"h":"Inviter","n":"inviter","r":false,"ro":true,"t":"`$STRING`","key$":"inviter","index$":3},"inviter_url":{"a":true,"fo":"uri","h":"Inviter Url","n":"inviter_url","r":false,"ro":true,"t":"`$STRING`","key$":"inviter_url","index$":4},"org":{"a":true,"h":"Org","n":"org","r":false,"ro":true,"t":"`$STRING`","key$":"org","index$":5},"role":{"a":true,"h":"Role","n":"role","r":false,"sh":"The role to be assigned to the invited user.","t":"`$STRING`","key$":"role","index$":6},"slug_perm":{"a":true,"fo":"slug","h":"Slug Perm","n":"slug_perm","r":false,"ro":true,"t":"`$STRING`","key$":"slug_perm","index$":7},"teams":{"a":true,"h":"Teams","n":"teams","r":false,"t":"`$ARRAY`","key$":"teams","index$":8},"user":{"a":true,"h":"User","n":"user","r":false,"sh":"The slug of the user to be invited.","t":"`$STRING`","key$":"user","index$":9},"user_url":{"a":true,"fo":"uri","h":"User Url","n":"user_url","r":false,"ro":true,"t":"`$STRING`","key$":"user_url","index$":10}},"id":{"field":"id","name":"id"},"name":"organization_invite","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /orgs/{org}/invites/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/orgs/{org}/invites/","q":{"exist":["data","org_id"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"invites"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /orgs/{org}/invites/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/orgs/{org}/invites/","q":{"exist":["org_id","page","page_size"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"invites"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /orgs/{org}/invites/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"slug_perm","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PATCH","o":"/orgs/{org}/invites/{slug_perm}/","q":{"exist":["data","id","org_id"]},"r":{"param":{"org":"org_id","slug_perm":"id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"invites"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.org"]]},"key$":"organization_invite","name__orig":"organization_invite","Name":"OrganizationInvite","name_":"organization_invite","name-":"organization-invite","NAME":"ORGANIZATION_INVITE","index$":24}, {"active":true,"entity":"organization_invite","key$":"BasicOrganizationInviteFlow","kind":"basic","name":"BasicOrganizationInviteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"organization_invite_ref01"},"m":{"org_id":"org01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"org_id":"org01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"organization_invite_ref01"}}],"index$":1},{"a":true,"d":{"org_id":"org01"},"i":{"ref":"organization_invite_ref01","srcdatavar":"organization_invite_ref01_data","suffix":"_up0","textfield":"email"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_invite_ref01"}}],"v":[],"index$":2}]}, 'OrganizationInvite', {"POST /orgs/{org}/invites/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"data","in":"body","required":false,"schema":{"type":"object","properties":{"email":{"title":"Email","description":"The email of the user to be invited.","type":"string","format":"email","minLength":1},"role":{"title":"Role","description":"The role to be assigned to the invited user.","type":"string","enum":["Owner","Manager","Member","Collaborator"],"default":"Member"},"teams":{"type":"array","items":{"required":["team"],"type":"object","properties":{"role":{"title":"Role","description":"The role to be assigned to the invited user in the team.","type":"string","enum":["Manager","Member"],"default":"Member"},"team":{"title":"Team","description":"The team identifier (slug).","type":"string","format":"slug","pattern":"^[-a-zA-Z0-9_]+$","minLength":1}},"x-ref":"#/definitions/OrganizationTeamInvite"}},"user":{"title":"User","description":"The slug of the user to be invited.","type":"string","minLength":1}},"x-ref":"#/definitions/OrganizationInviteRequest"},"index$":1}]},"GET /orgs/{org}/invites/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":1},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":2}]},"PATCH /orgs/{org}/invites/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"type":"object","properties":{"role":{"title":"Role","description":"The role to be assigned to the invited user.","type":"string","enum":["Owner","Manager","Member","Collaborator"],"default":"Member"}},"x-ref":"#/definitions/OrganizationInviteUpdateRequestPatch"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const organization_invite_ref01_ent = client.OrganizationInvite()
    let organization_invite_ref01_data = setup.data.new.organization_invite['organization_invite_ref01']
    organization_invite_ref01_data['org_id'] = setup.idmap['org01']

    organization_invite_ref01_data = (await organization_invite_ref01_ent.create(organization_invite_ref01_data)).data()
    assert(null != organization_invite_ref01_data.id)


    // LIST
    const organization_invite_ref01_match: any = {}
    organization_invite_ref01_match['org_id'] = setup.idmap['org01']

    const organization_invite_ref01_list = (await organization_invite_ref01_ent.list(organization_invite_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(organization_invite_ref01_list, { id: organization_invite_ref01_data.id })))


    // UPDATE
    const organization_invite_ref01_data_up0: any = {}
    organization_invite_ref01_data_up0.id = organization_invite_ref01_data.id
    organization_invite_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const organization_invite_ref01_markdef_up0 = { name: 'email', value: 'Mark01-organization_invite_ref01_' + setup.now }
    ;(organization_invite_ref01_data_up0 as any)[organization_invite_ref01_markdef_up0.name] = organization_invite_ref01_markdef_up0.value

    const organization_invite_ref01_resdata_up0 = (await organization_invite_ref01_ent.update(organization_invite_ref01_data_up0)).data()
    assert(organization_invite_ref01_resdata_up0.id === organization_invite_ref01_data_up0.id)

    assert((organization_invite_ref01_resdata_up0 as any)[organization_invite_ref01_markdef_up0.name] === organization_invite_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization_invite/OrganizationInviteTestData.json')

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
    ['organization_invite01','organization_invite02','organization_invite03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_ORGANIZATION_INVITE_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_ORGANIZATION_INVITE_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_INVITE_ENTID']
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
  
