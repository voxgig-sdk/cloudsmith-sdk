

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


describe('EntitlementEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Entitlement()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'entitlement.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"sh":"Number of packages with at least 1 download","t":"`$INTEGER`","key$":"active","index$":0},"bandwidth":{"a":true,"h":"Bandwidth","n":"bandwidth","r":true,"t":"`$OBJECT`","key$":"bandwidth","index$":1},"downloads":{"a":true,"h":"Downloads","n":"downloads","r":true,"t":"`$OBJECT`","key$":"downloads","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"inactive":{"a":true,"h":"Inactive","n":"inactive","r":false,"sh":"Packages with zero downloads","t":"`$INTEGER`","key$":"inactive","index$":4},"total":{"a":true,"h":"Total","n":"total","r":false,"sh":"Total number of packages in repo","t":"`$INTEGER`","key$":"total","index$":5}},"id":{"field":"id","name":"id","parts":["owner","repo","identifier"],"sep":"/"},"name":"entitlement","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /entitlements/{owner}/{repo}/{identifier}/reset/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":2}],"query":[{"a":true,"k":"query","n":"show_token","or":"show_token","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"POST","o":"/entitlements/{owner}/{repo}/{identifier}/reset/","q":{"exist":["identifier","owner","repo","show_token"]},"r":{},"s":[{"lit":"entitlements"},{"var":"owner"},{"var":"repo"},{"var":"identifier"},{"lit":"reset"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /entitlements/{owner}/{repo}/{identifier}/disable/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":2}]},"k":"http","m":"POST","o":"/entitlements/{owner}/{repo}/{identifier}/disable/","q":{"exist":["identifier","owner","repo"]},"r":{},"s":[{"lit":"entitlements"},{"var":"owner"},{"var":"repo"},{"var":"identifier"},{"lit":"disable"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /entitlements/{owner}/{repo}/{identifier}/enable/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":2}]},"k":"http","m":"POST","o":"/entitlements/{owner}/{repo}/{identifier}/enable/","q":{"exist":["identifier","owner","repo"]},"r":{},"s":[{"lit":"entitlements"},{"var":"owner"},{"var":"repo"},{"var":"identifier"},{"lit":"enable"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /metrics/entitlements/{owner}/{repo}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"finish","or":"finish","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"start","or":"start","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"token","or":"token","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/metrics/entitlements/{owner}/{repo}/","q":{"exist":["finish","owner","page","page_size","repo","start","token"]},"r":{},"s":[{"lit":"metrics"},{"lit":"entitlements"},{"var":"owner"},{"var":"repo"}],"t":{"req":"`reqdata`","res":"`body.tokens`"},"index$":0},{"a":true,"co":{"id":"GET /metrics/entitlements/{owner}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"owner","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"finish","or":"finish","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"start","or":"start","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"token","or":"token","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/metrics/entitlements/{owner}/","q":{"exist":["finish","id","page","page_size","start","token"]},"r":{"param":{"owner":"id"}},"s":[{"lit":"metrics"},{"lit":"entitlements"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.tokens`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /entitlements/{owner}/{repo}/{identifier}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":2}]},"k":"http","m":"DELETE","o":"/entitlements/{owner}/{repo}/{identifier}/","q":{"exist":["identifier","owner","repo"]},"r":{},"s":[{"lit":"entitlements"},{"var":"owner"},{"var":"repo"},{"var":"identifier"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"entitlement","name__orig":"entitlement","Name":"Entitlement","name_":"entitlement","name-":"entitlement","NAME":"ENTITLEMENT","index$":9}, {"active":true,"entity":"entitlement","key$":"BasicEntitlementFlow","kind":"basic","name":"BasicEntitlementFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"entitlement_ref01"},"m":{"identifier":"identifier01","owner":"owner01","repo":"repo01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"entitlement_ref01","srcdatavar":"entitlement_ref01_data","suffix":"_dt0"},"m":{"id":"entitlement01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-entitlement_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"entitlement_ref01","suffix":"_rm0"},"m":{"id":"entitlement01","owner":"owner01","repo":"repo01"},"o":"remove","s":[],"v":[],"index$":2}]}, 'Entitlement', {"POST /entitlements/{owner}/{repo}/{identifier}/reset/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1},{"name":"identifier","in":"path","required":true,"type":"string","index$":2},{"name":"show_tokens","in":"query","description":"Show entitlement token strings in results","required":false,"type":"boolean","default":false,"index$":3}]},"POST /entitlements/{owner}/{repo}/{identifier}/disable/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1},{"name":"identifier","in":"path","required":true,"type":"string","index$":2}]},"POST /entitlements/{owner}/{repo}/{identifier}/enable/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1},{"name":"identifier","in":"path","required":true,"type":"string","index$":2}]},"GET /metrics/entitlements/{owner}/{repo}/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1},{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":2},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":3},{"name":"finish","in":"query","description":"Include metrics upto and including this UTC date or UTC datetime. For example '2020-12-31' or '2021-12-13T00:00:00Z'.","required":false,"type":"string","index$":4},{"name":"start","in":"query","description":"Include metrics from and including this UTC date or UTC datetime. For example '2020-12-31' or '2021-12-13T00:00:00Z'.","required":false,"type":"string","index$":5},{"name":"tokens","in":"query","description":"A comma seperated list of tokens (slug perm) to include in the results.","required":false,"type":"string","index$":6}]},"GET /metrics/entitlements/{owner}/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":1},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":2},{"name":"finish","in":"query","description":"Include metrics upto and including this UTC date or UTC datetime. For example '2020-12-31' or '2021-12-13T00:00:00Z'.","required":false,"type":"string","index$":3},{"name":"start","in":"query","description":"Include metrics from and including this UTC date or UTC datetime. For example '2020-12-31' or '2021-12-13T00:00:00Z'.","required":false,"type":"string","index$":4},{"name":"tokens","in":"query","description":"A comma seperated list of tokens (slug perm) to include in the results.","required":false,"type":"string","index$":5}]},"DELETE /entitlements/{owner}/{repo}/{identifier}/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1},{"name":"identifier","in":"path","required":true,"type":"string","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const entitlement_ref01_ent = client.Entitlement()
    let entitlement_ref01_data = setup.data.new.entitlement['entitlement_ref01']
    entitlement_ref01_data['identifier'] = setup.idmap['identifier01']
    entitlement_ref01_data['owner'] = setup.idmap['owner01']
    entitlement_ref01_data['repo'] = setup.idmap['repo01']

    entitlement_ref01_data = (await entitlement_ref01_ent.create(entitlement_ref01_data)).data()
    assert(null != entitlement_ref01_data.id)


    // LOAD
    const entitlement_ref01_match_dt0: any = {}
    entitlement_ref01_match_dt0.id = entitlement_ref01_data.id
    const entitlement_ref01_data_dt0 = (await entitlement_ref01_ent.load(entitlement_ref01_match_dt0)).data()
    assert(entitlement_ref01_data_dt0.id === entitlement_ref01_data.id)


    // REMOVE
    const entitlement_ref01_match_rm0: any = { id: entitlement_ref01_data.id }
    await entitlement_ref01_ent.remove(entitlement_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/entitlement/EntitlementTestData.json')

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
    ['entitlement01','entitlement02','entitlement03','identifier01','owner01','repo01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_ENTITLEMENT_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_ENTITLEMENT_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_ENTITLEMENT_ENTID']
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
  
