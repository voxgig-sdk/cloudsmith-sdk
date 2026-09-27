

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


describe('OrganizationTeamMemberEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.OrganizationTeamMember()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization_team_member.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"role":{"a":true,"h":"Role","n":"role","r":true,"t":"`$STRING`","key$":"role","index$":0},"user":{"a":true,"h":"User","n":"user","r":true,"t":"`$STRING`","key$":"user","index$":1}},"name":"organization_team_member","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /orgs/{org}/teams/{team}/members","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"team_id","or":"team","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/orgs/{org}/teams/{team}/members","q":{"exist":["data","org_id","team_id"]},"r":{"param":{"org":"org_id","team":"team_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"teams"},{"var":"team_id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /orgs/{org}/teams/{team}/members","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"team_id","or":"team","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/orgs/{org}/teams/{team}/members","q":{"exist":["org_id","team_id"]},"r":{"param":{"org":"org_id","team":"team_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"teams"},{"var":"team_id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body.members`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.org"]]},"key$":"organization_team_member","name__orig":"organization_team_member","Name":"OrganizationTeamMember","name_":"organization_team_member","name-":"organization-team-member","NAME":"ORGANIZATION_TEAM_MEMBER","index$":33}, {"active":true,"entity":"organization_team_member","key$":"BasicOrganizationTeamMemberFlow","kind":"basic","name":"BasicOrganizationTeamMemberFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"organization_team_member_ref01"},"m":{"org_id":"org01","team_id":"team01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"org_id":"org01","team_id":"team01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"organization_team_member_ref01"}}],"index$":1}]}, 'OrganizationTeamMember', {"POST /orgs/{org}/teams/{team}/members":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"team","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"required":["members"],"type":"object","properties":{"members":{"description":"The team members","items":{"description":"The team members","properties":{"role":{"enum":["Manager","Member"],"title":"Role","type":"string","key$":"role"},"user":{"minLength":1,"title":"User","type":"string","key$":"user"}},"required":["role","user"],"type":"object","x-ref":"#/definitions/OrganizationTeamMembership","index$":0},"key$":"members","type":"array"}},"x-ref":"#/definitions/OrganizationTeamMembers"},"index$":2}]},"GET /orgs/{org}/teams/{team}/members":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"team","in":"path","required":true,"type":"string","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const organization_team_member_ref01_ent = client.OrganizationTeamMember()
    let organization_team_member_ref01_data = setup.data.new.organization_team_member['organization_team_member_ref01']
    organization_team_member_ref01_data['org_id'] = setup.idmap['org01']
    organization_team_member_ref01_data['team_id'] = setup.idmap['team01']

    organization_team_member_ref01_data = (await organization_team_member_ref01_ent.create(organization_team_member_ref01_data)).data()
    assert(null != organization_team_member_ref01_data)


    // LIST
    const organization_team_member_ref01_match: any = {}
    organization_team_member_ref01_match['org_id'] = setup.idmap['org01']
    organization_team_member_ref01_match['team_id'] = setup.idmap['team01']

    const organization_team_member_ref01_list = (await organization_team_member_ref01_ent.list(organization_team_member_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization_team_member/OrganizationTeamMemberTestData.json')

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
    ['organization_team_member01','organization_team_member02','organization_team_member03','org01','org02','org03','team01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_ORGANIZATION_TEAM_MEMBER_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_ORGANIZATION_TEAM_MEMBER_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_TEAM_MEMBER_ENTID']
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
  
