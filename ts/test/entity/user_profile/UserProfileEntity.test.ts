

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


describe('UserProfileEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.UserProfile()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'user_profile.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"company":{"a":true,"h":"Company","n":"company","r":false,"t":"`$STRING`","key$":"company","index$":0},"first_name":{"a":true,"h":"First Name","n":"first_name","r":true,"t":"`$STRING`","key$":"first_name","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"job_title":{"a":true,"h":"Job Title","n":"job_title","r":false,"t":"`$STRING`","key$":"job_title","index$":3},"joined_at":{"a":true,"fo":"date-time","h":"Joined At","n":"joined_at","r":false,"t":"`$STRING`","key$":"joined_at","index$":4},"last_name":{"a":true,"h":"Last Name","n":"last_name","r":true,"t":"`$STRING`","key$":"last_name","index$":5},"name":{"a":true,"h":"Name","n":"name","r":false,"ro":true,"t":"`$STRING`","key$":"name","index$":6},"slug":{"a":true,"h":"Slug","n":"slug","r":false,"ro":true,"t":"`$STRING`","key$":"slug","index$":7},"slug_perm":{"a":true,"h":"Slug Perm","n":"slug_perm","r":false,"ro":true,"t":"`$STRING`","key$":"slug_perm","index$":8},"tagline":{"a":true,"h":"Tagline","n":"tagline","r":false,"sh":"Your tagline is a sentence about you.","t":"`$STRING`","key$":"tagline","index$":9},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":false,"ro":true,"t":"`$STRING`","key$":"url","index$":10}},"id":{"field":"id","name":"id"},"name":"user_profile","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /users/profile/{slug}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"slug","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/users/profile/{slug}/","q":{"exist":["id"]},"r":{"param":{"slug":"id"}},"s":[{"lit":"users"},{"lit":"profile"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"user_profile","name__orig":"user_profile","Name":"UserProfile","name_":"user_profile","name-":"user-profile","NAME":"USER_PROFILE","index$":72}, {"active":true,"entity":"user_profile","key$":"BasicUserProfileFlow","kind":"basic","name":"BasicUserProfileFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"user_profile_ref01","srcdatavar":"user_profile_ref01_data","suffix":"_dt0"},"m":{"id":"user_profile01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-user_profile_ref01"}}],"index$":0}]}, 'UserProfile', {"GET /users/profile/{slug}/":{"protocol":"http","parameters":[{"name":"slug","in":"path","required":true,"type":"string","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_profile_ref01_data = Object.values(setup.data.existing.user_profile)[0] as any

    // LOAD
    const user_profile_ref01_ent = client.UserProfile()
    const user_profile_ref01_match_dt0: any = {}
    user_profile_ref01_match_dt0.id = user_profile_ref01_data.id
    const user_profile_ref01_data_dt0 = (await user_profile_ref01_ent.load(user_profile_ref01_match_dt0)).data()
    assert(user_profile_ref01_data_dt0.id === user_profile_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/user_profile/UserProfileTestData.json')

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
    ['user_profile01','user_profile02','user_profile03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_USER_PROFILE_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_USER_PROFILE_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_USER_PROFILE_ENTID']
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
  
