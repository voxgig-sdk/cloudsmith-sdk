

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


describe('NamespaceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Namespace()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'namespace.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"name":{"a":true,"h":"Name","n":"name","r":false,"ro":true,"t":"`$STRING`","key$":"name","index$":1},"slug":{"a":true,"fo":"slug","h":"Slug","n":"slug","r":false,"ro":true,"t":"`$STRING`","key$":"slug","index$":2},"slug_perm":{"a":true,"fo":"slug","h":"Slug Perm","n":"slug_perm","r":false,"ro":true,"t":"`$STRING`","key$":"slug_perm","index$":3},"type_name":{"a":true,"h":"Type Name","n":"type_name","r":false,"ro":true,"t":"`$STRING`","key$":"type_name","index$":4}},"id":{"field":"id","name":"id"},"name":"namespace","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /namespaces/","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/namespaces/","q":{"exist":["page","page_size"]},"r":{},"s":[{"lit":"namespaces"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /namespaces/{slug}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"slug","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/namespaces/{slug}/","q":{"exist":["id"]},"r":{"param":{"slug":"id"}},"s":[{"lit":"namespaces"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"namespace","name__orig":"namespace","Name":"Namespace","name_":"namespace","name-":"namespace","NAME":"NAMESPACE","index$":17}, {"active":true,"entity":"namespace","key$":"BasicNamespaceFlow","kind":"basic","name":"BasicNamespaceFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"namespace_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"namespace_ref01","srcdatavar":"namespace_ref01_data","suffix":"_dt0"},"m":{"id":"namespace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-namespace_ref01"}}],"index$":1}]}, 'Namespace', {"GET /namespaces/":{"protocol":"http","parameters":[{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":0},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":1}]},"GET /namespaces/{slug}/":{"protocol":"http","parameters":[{"name":"slug","in":"path","required":true,"type":"string","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let namespace_ref01_data = Object.values(setup.data.existing.namespace)[0] as any

    // LIST
    const namespace_ref01_ent = client.Namespace()
    const namespace_ref01_match: any = {}

    const namespace_ref01_list = (await namespace_ref01_ent.list(namespace_ref01_match)).map((e: any) => e.data())


    // LOAD
    const namespace_ref01_match_dt0: any = {}
    namespace_ref01_match_dt0.id = namespace_ref01_data.id
    const namespace_ref01_data_dt0 = (await namespace_ref01_ent.load(namespace_ref01_match_dt0)).data()
    assert(namespace_ref01_data_dt0.id === namespace_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/namespace/NamespaceTestData.json')

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
    ['namespace01','namespace02','namespace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_NAMESPACE_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_NAMESPACE_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_NAMESPACE_ENTID']
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
  
