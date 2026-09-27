

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


describe('UserAuthenticationTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.UserAuthenticationToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'user_authentication_token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"date-time","h":"Created","n":"created","r":false,"ro":true,"sh":"The time at which the API key was created.","t":"`$STRING`","key$":"created","index$":0},"key":{"a":true,"h":"Key","n":"key","r":false,"ro":true,"sh":"The unique API key used for authentication.","t":"`$STRING`","key$":"key","index$":1},"slug_perm":{"a":true,"h":"Slug Perm","n":"slug_perm","r":false,"ro":true,"sh":"The slug_perm for token.","t":"`$STRING`","key$":"slug_perm","index$":2}},"name":"user_authentication_token","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /user/tokens/","source":"swagger2","version":2},"g":{},"k":"http","m":"POST","o":"/user/tokens/","q":{},"r":{},"s":[{"lit":"user"},{"lit":"tokens"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /user/tokens/{slug_perm}/refresh/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"slug_perm","or":"slug_perm","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"PUT","o":"/user/tokens/{slug_perm}/refresh/","q":{"exist":["slug_perm"]},"r":{},"s":[{"lit":"user"},{"lit":"tokens"},{"var":"slug_perm"},{"lit":"refresh"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"user_authentication_token","name__orig":"user_authentication_token","Name":"UserAuthenticationToken","name_":"user_authentication_token","name-":"user-authentication-token","NAME":"USER_AUTHENTICATION_TOKEN","index$":70}, {"active":true,"entity":"user_authentication_token","key$":"BasicUserAuthenticationTokenFlow","kind":"basic","name":"BasicUserAuthenticationTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"user_authentication_token_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"user_authentication_token_ref01","srcdatavar":"user_authentication_token_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-user_authentication_token_ref01"}}],"v":[],"index$":1}]}, 'UserAuthenticationToken', {"POST /user/tokens/":{"protocol":"http","parameters":[]},"PUT /user/tokens/{slug_perm}/refresh/":{"protocol":"http","parameters":[{"name":"slug_perm","in":"path","required":true,"type":"string","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const user_authentication_token_ref01_ent = client.UserAuthenticationToken()
    let user_authentication_token_ref01_data = setup.data.new.user_authentication_token['user_authentication_token_ref01']

    user_authentication_token_ref01_data = (await user_authentication_token_ref01_ent.create(user_authentication_token_ref01_data)).data()
    assert(null != user_authentication_token_ref01_data)


    // UPDATE
    const user_authentication_token_ref01_data_up0: any = {}

    const user_authentication_token_ref01_resdata_up0 = (await user_authentication_token_ref01_ent.update(user_authentication_token_ref01_data_up0)).data()
    assert(null != user_authentication_token_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/user_authentication_token/UserAuthenticationTokenTestData.json')

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
    ['user_authentication_token01','user_authentication_token02','user_authentication_token03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_USER_AUTHENTICATION_TOKEN_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_USER_AUTHENTICATION_TOKEN_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_USER_AUTHENTICATION_TOKEN_ENTID']
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
  
