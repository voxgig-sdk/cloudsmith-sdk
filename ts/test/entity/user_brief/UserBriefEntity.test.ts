

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"authenticated","readOnly":true,"req":false,"short":"If true then you're logged in as a user.","type":"`$BOOLEAN`","index$":0},{"active":true,"format":"email","name":"email","req":false,"short":"Your email address that we use to contact you.","type":"`$STRING`","index$":1},{"active":true,"name":"name","readOnly":true,"req":false,"short":"The full name of the user (if any).","type":"`$STRING`","index$":2},{"active":true,"format":"uri","name":"profile_url","readOnly":true,"req":false,"short":"The URL for the full profile of the user.","type":"`$STRING`","index$":3},{"active":true,"name":"self_url","readOnly":true,"req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"slug","readOnly":true,"req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"slug_perm","readOnly":true,"req":false,"type":"`$STRING`","index$":6}],"name":"user_brief","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /user/self/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"user_self\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved brief for the current user\",\"schema\":{\"properties\":{\"authenticated\":{\"description\":\"If true then you're logged in as a user.\",\"readOnly\":true,\"title\":\"Authenticated\",\"type\":\"boolean\"},\"email\":{\"description\":\"Your email address that we use to contact you. This is only visible to you.\",\"format\":\"email\",\"maxLength\":254,\"minLength\":1,\"title\":\"Email address\",\"type\":\"string\"},\"name\":{\"description\":\"The full name of the user (if any).\",\"minLength\":1,\"readOnly\":true,\"title\":\"Name\",\"type\":\"string\"},\"profile_url\":{\"description\":\"The URL for the full profile of the user.\",\"format\":\"uri\",\"readOnly\":true,\"title\":\"Profile url\",\"type\":\"string\"},\"self_url\":{\"readOnly\":true,\"title\":\"Self url\",\"type\":\"string\"},\"slug\":{\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"},\"slug_perm\":{\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/user/self/","segments":[{"lit":"user"},{"lit":"self"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"user_brief","name__orig":"user_brief","Name":"UserBrief","name_":"user_brief","name-":"user-brief","NAME":"USER_BRIEF","index$":121}, {"active":true,"entity":"user_brief","key$":"BasicUserBriefFlow","kind":"basic","name":"BasicUserBriefFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"user_brief_ref01","srcdatavar":"user_brief_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-user_brief_ref01"}}],"index$":0}]}, 'UserBrief')
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
  
