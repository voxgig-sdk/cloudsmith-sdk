

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


describe('OrganizationMembershipVisibilityUpdateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.OrganizationMembershipVisibilityUpdate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization_membership_visibility_update.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"email":{"a":true,"h":"Email","n":"email","r":false,"ro":true,"t":"`$STRING`","key$":"email","index$":0},"has_two_factor":{"a":true,"h":"Has Two Factor","n":"has_two_factor","r":false,"ro":true,"t":"`$BOOLEAN`","key$":"has_two_factor","index$":1},"joined_at":{"a":true,"fo":"date-time","h":"Joined At","n":"joined_at","r":false,"ro":true,"t":"`$STRING`","key$":"joined_at","index$":2},"last_login_at":{"a":true,"fo":"date-time","h":"Last Login At","n":"last_login_at","r":false,"ro":true,"t":"`$STRING`","key$":"last_login_at","index$":3},"last_login_method":{"a":true,"h":"Last Login Method","n":"last_login_method","r":false,"ro":true,"t":"`$STRING`","key$":"last_login_method","index$":4},"role":{"a":true,"h":"Role","n":"role","r":false,"ro":true,"t":"`$STRING`","key$":"role","index$":5},"user":{"a":true,"h":"User","n":"user","r":false,"ro":true,"t":"`$STRING`","key$":"user","index$":6},"user_id":{"a":true,"h":"User Id","n":"user_id","r":false,"ro":true,"t":"`$STRING`","key$":"user_id","index$":7},"user_name":{"a":true,"h":"User Name","n":"user_name","r":false,"ro":true,"t":"`$STRING`","key$":"user_name","index$":8},"user_url":{"a":true,"fo":"uri","h":"User Url","n":"user_url","r":false,"ro":true,"t":"`$STRING`","key$":"user_url","index$":9},"visibility":{"a":true,"h":"Visibility","n":"visibility","r":false,"t":"`$STRING`","key$":"visibility","index$":10}},"name":"organization_membership_visibility_update","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /orgs/{org}/members/{member}/update-visibility/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"member_id","or":"member","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PATCH","o":"/orgs/{org}/members/{member}/update-visibility/","q":{"exist":["data","member_id","org_id"]},"r":{"param":{"member":"member_id","org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"members"},{"var":"member_id"},{"lit":"update-visibility"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.org"]]},"key$":"organization_membership_visibility_update","name__orig":"organization_membership_visibility_update","Name":"OrganizationMembershipVisibilityUpdate","name_":"organization_membership_visibility_update","name-":"organization-membership-visibility-update","NAME":"ORGANIZATION_MEMBERSHIP_VISIBILITY_UPDATE","index$":28}, {"active":true,"entity":"organization_membership_visibility_update","key$":"BasicOrganizationMembershipVisibilityUpdateFlow","kind":"basic","name":"BasicOrganizationMembershipVisibilityUpdateFlow","param":{},"step":[{"a":true,"d":{"org_id":"org01"},"i":{"ref":"organization_membership_visibility_update_ref01","srcdatavar":"organization_membership_visibility_update_ref01_data","suffix":"_up0","textfield":"visibility"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_membership_visibility_update_ref01"}}],"v":[],"index$":0}]}, 'OrganizationMembershipVisibilityUpdate', {"PATCH /orgs/{org}/members/{member}/update-visibility/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"member","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"type":"object","properties":{"visibility":{"title":"Visibility","type":"string","enum":["Public","Private"],"default":"Public"}},"x-ref":"#/definitions/OrganizationMembershipVisibilityUpdateRequestPatch"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let organization_membership_visibility_update_ref01_data = Object.values(setup.data.existing.organization_membership_visibility_update)[0] as any

    // UPDATE
    const organization_membership_visibility_update_ref01_ent = client.OrganizationMembershipVisibilityUpdate()
    const organization_membership_visibility_update_ref01_data_up0: any = {}
    organization_membership_visibility_update_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const organization_membership_visibility_update_ref01_markdef_up0 = { name: 'visibility', value: 'Mark01-organization_membership_visibility_update_ref01_' + setup.now }
    ;(organization_membership_visibility_update_ref01_data_up0 as any)[organization_membership_visibility_update_ref01_markdef_up0.name] = organization_membership_visibility_update_ref01_markdef_up0.value

    const organization_membership_visibility_update_ref01_resdata_up0 = (await organization_membership_visibility_update_ref01_ent.update(organization_membership_visibility_update_ref01_data_up0)).data()
    assert(null != organization_membership_visibility_update_ref01_resdata_up0)

    assert((organization_membership_visibility_update_ref01_resdata_up0 as any)[organization_membership_visibility_update_ref01_markdef_up0.name] === organization_membership_visibility_update_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization_membership_visibility_update/OrganizationMembershipVisibilityUpdateTestData.json')

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
    ['organization_membership_visibility_update01','organization_membership_visibility_update02','organization_membership_visibility_update03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_VISIBILITY_UPDATE_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_VISIBILITY_UPDATE_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_VISIBILITY_UPDATE_ENTID']
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
  
