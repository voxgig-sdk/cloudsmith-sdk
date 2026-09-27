

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


describe('NamespaceAuditLogEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.NamespaceAuditLog()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'namespace_audit_log.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"actor":{"a":true,"h":"Actor","n":"actor","r":true,"t":"`$STRING`","key$":"actor","index$":0},"actor_ip_address":{"a":true,"h":"Actor Ip Address","n":"actor_ip_address","r":true,"t":"`$STRING`","key$":"actor_ip_address","index$":1},"actor_kind":{"a":true,"h":"Actor Kind","n":"actor_kind","r":false,"ro":true,"t":"`$STRING`","key$":"actor_kind","index$":2},"actor_location":{"a":true,"h":"Actor Location","n":"actor_location","r":true,"t":"`$OBJECT`","key$":"actor_location","index$":3},"actor_slug_perm":{"a":true,"h":"Actor Slug Perm","n":"actor_slug_perm","r":true,"t":"`$STRING`","key$":"actor_slug_perm","index$":4},"actor_url":{"a":true,"fo":"uri","h":"Actor Url","n":"actor_url","r":false,"ro":true,"t":"`$STRING`","key$":"actor_url","index$":5},"context":{"a":true,"h":"Context","n":"context","r":true,"t":"`$STRING`","key$":"context","index$":6},"event":{"a":true,"h":"Event","n":"event","r":true,"t":"`$STRING`","key$":"event","index$":7},"event_at":{"a":true,"fo":"date-time","h":"Event At","n":"event_at","r":true,"t":"`$STRING`","key$":"event_at","index$":8},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":9},"object":{"a":true,"h":"Object","n":"object","r":true,"t":"`$STRING`","key$":"object","index$":10},"object_kind":{"a":true,"h":"Object Kind","n":"object_kind","r":true,"t":"`$STRING`","key$":"object_kind","index$":11},"object_slug_perm":{"a":true,"h":"Object Slug Perm","n":"object_slug_perm","r":true,"t":"`$STRING`","key$":"object_slug_perm","index$":12},"target":{"a":true,"h":"Target","n":"target","r":true,"t":"`$STRING`","key$":"target","index$":13},"target_kind":{"a":true,"h":"Target Kind","n":"target_kind","r":true,"t":"`$STRING`","key$":"target_kind","index$":14},"target_slug_perm":{"a":true,"fo":"slug","h":"Target Slug Perm","n":"target_slug_perm","r":false,"t":"`$STRING`","key$":"target_slug_perm","index$":15},"uuid":{"a":true,"fo":"uuid","h":"Uuid","n":"uuid","r":false,"ro":true,"t":"`$STRING`","key$":"uuid","index$":16}},"id":{"field":"id","name":"id"},"name":"namespace_audit_log","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /audit-log/{owner}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"owner","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/audit-log/{owner}/","q":{"exist":["id","page","page_size","query"]},"r":{"param":{"owner":"id"}},"s":[{"lit":"audit-log"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"namespace_audit_log","name__orig":"namespace_audit_log","Name":"NamespaceAuditLog","name_":"namespace_audit_log","name-":"namespace-audit-log","NAME":"NAMESPACE_AUDIT_LOG","index$":18}, {"active":true,"entity":"namespace_audit_log","key$":"BasicNamespaceAuditLogFlow","kind":"basic","name":"BasicNamespaceAuditLogFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"namespace_audit_log_ref01","srcdatavar":"namespace_audit_log_ref01_data","suffix":"_dt0"},"m":{"id":"namespace_audit_log01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-namespace_audit_log_ref01"}}],"index$":0}]}, 'NamespaceAuditLog', {"GET /audit-log/{owner}/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":1},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":2},{"name":"query","in":"query","description":"A search term for querying events, actors, or timestamps of log records.","required":false,"type":"string","index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let namespace_audit_log_ref01_data = Object.values(setup.data.existing.namespace_audit_log)[0] as any

    // LOAD
    const namespace_audit_log_ref01_ent = client.NamespaceAuditLog()
    const namespace_audit_log_ref01_match_dt0: any = {}
    namespace_audit_log_ref01_match_dt0.id = namespace_audit_log_ref01_data.id
    const namespace_audit_log_ref01_data_dt0 = (await namespace_audit_log_ref01_ent.load(namespace_audit_log_ref01_match_dt0)).data()
    assert(namespace_audit_log_ref01_data_dt0.id === namespace_audit_log_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/namespace_audit_log/NamespaceAuditLogTestData.json')

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
    ['namespace_audit_log01','namespace_audit_log02','namespace_audit_log03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_NAMESPACE_AUDIT_LOG_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_NAMESPACE_AUDIT_LOG_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_NAMESPACE_AUDIT_LOG_ENTID']
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
  
