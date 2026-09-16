

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"company","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"first_name","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"job_title","req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"date-time","name":"joined_at","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"last_name","req":true,"type":"`$STRING`","index$":5},{"active":true,"name":"name","readOnly":true,"req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"slug","readOnly":true,"req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"slug_perm","readOnly":true,"req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"tagline","req":false,"short":"Your tagline is a sentence about you.","type":"`$STRING`","index$":9},{"active":true,"format":"uri","name":"url","readOnly":true,"req":false,"type":"`$STRING`","index$":10}],"id":{"field":"id","name":"id"},"name":"user_profile","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"slug","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /users/profile/{slug}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"users_profile_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved details for the specified user (or current user, if none was specified)\",\"schema\":{\"properties\":{\"company\":{\"maxLength\":64,\"title\":\"Company\",\"type\":\"string\"},\"first_name\":{\"maxLength\":120,\"minLength\":1,\"title\":\"First name\",\"type\":\"string\"},\"job_title\":{\"maxLength\":64,\"title\":\"Job title\",\"type\":\"string\"},\"joined_at\":{\"format\":\"date-time\",\"title\":\"Joined at\",\"type\":\"string\"},\"last_name\":{\"maxLength\":120,\"minLength\":1,\"title\":\"Last name\",\"type\":\"string\"},\"name\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Name\",\"type\":\"string\"},\"slug\":{\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"},\"slug_perm\":{\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"tagline\":{\"description\":\"Your tagline is a sentence about you. Make it funny. Make it professional. Either way, it's public and it represents who you are.\",\"maxLength\":1024,\"title\":\"Tagline\",\"type\":\"string\"},\"url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Url\",\"type\":\"string\"}},\"required\":[\"first_name\",\"last_name\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/users/profile/{slug}/","rename":{"param":{"slug":"id"}},"segments":[{"lit":"users"},{"lit":"profile"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"user_profile","name__orig":"user_profile","Name":"UserProfile","name_":"user_profile","name-":"user-profile","NAME":"USER_PROFILE","index$":122}, {"active":true,"entity":"user_profile","key$":"BasicUserProfileFlow","kind":"basic","name":"BasicUserProfileFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"user_profile_ref01","srcdatavar":"user_profile_ref01_data","suffix":"_dt0"},"match":{"id":"user_profile01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-user_profile_ref01"}}],"index$":0}]}, 'UserProfile')
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
  
