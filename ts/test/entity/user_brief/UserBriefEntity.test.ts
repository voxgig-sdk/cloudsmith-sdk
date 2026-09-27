

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


describe('UserBriefEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.UserBrief()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'user_brief.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"authenticated":{"a":true,"h":"Authenticated","n":"authenticated","r":false,"ro":true,"sh":"If true then you're logged in as a user.","t":"`$BOOLEAN`","key$":"authenticated","index$":0},"email":{"a":true,"fo":"email","h":"Email","n":"email","r":false,"sh":"Your email address that we use to contact you.","t":"`$STRING`","key$":"email","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"ro":true,"sh":"The full name of the user (if any).","t":"`$STRING`","key$":"name","index$":2},"profile_url":{"a":true,"fo":"uri","h":"Profile Url","n":"profile_url","r":false,"ro":true,"sh":"The URL for the full profile of the user.","t":"`$STRING`","key$":"profile_url","index$":3},"self_url":{"a":true,"h":"Self Url","n":"self_url","r":false,"ro":true,"t":"`$STRING`","key$":"self_url","index$":4},"slug":{"a":true,"h":"Slug","n":"slug","r":false,"ro":true,"t":"`$STRING`","key$":"slug","index$":5},"slug_perm":{"a":true,"h":"Slug Perm","n":"slug_perm","r":false,"ro":true,"t":"`$STRING`","key$":"slug_perm","index$":6}},"name":"user_brief","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /user/self/","source":"swagger2","version":2},"g":{},"k":"http","m":"GET","o":"/user/self/","q":{},"r":{},"s":[{"lit":"user"},{"lit":"self"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"user_brief","name__orig":"user_brief","Name":"UserBrief","name_":"user_brief","name-":"user-brief","NAME":"USER_BRIEF","index$":71}, {"active":true,"entity":"user_brief","key$":"BasicUserBriefFlow","kind":"basic","name":"BasicUserBriefFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"user_brief_ref01","srcdatavar":"user_brief_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-user_brief_ref01"}}],"index$":0}]}, 'UserBrief', {"GET /user/self/":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_brief_ref01_data = Object.values(setup.data.existing.user_brief)[0] as any

    // LOAD
    const user_brief_ref01_ent = client.UserBrief()
    const user_brief_ref01_match_dt0: any = {}
    const user_brief_ref01_data_dt0 = (await user_brief_ref01_ent.load(user_brief_ref01_match_dt0)).data()
    assert(null != user_brief_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/user_brief/UserBriefTestData.json')

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
    ['user_brief01','user_brief02','user_brief03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_USER_BRIEF_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_USER_BRIEF_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_USER_BRIEF_ENTID']
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
  
