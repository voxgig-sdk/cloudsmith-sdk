

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"actor","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"actor_ip_address","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"actor_kind","readOnly":true,"req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"actor_location","req":true,"type":"`$OBJECT`","index$":3},{"active":true,"name":"actor_slug_perm","req":true,"type":"`$STRING`","index$":4},{"active":true,"format":"uri","name":"actor_url","readOnly":true,"req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"context","req":true,"type":"`$STRING`","index$":6},{"active":true,"name":"event","req":true,"type":"`$STRING`","index$":7},{"active":true,"format":"date-time","name":"event_at","req":true,"type":"`$STRING`","index$":8},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"object","req":true,"type":"`$STRING`","index$":10},{"active":true,"name":"object_kind","req":true,"type":"`$STRING`","index$":11},{"active":true,"name":"object_slug_perm","req":true,"type":"`$STRING`","index$":12},{"active":true,"name":"target","req":true,"type":"`$STRING`","index$":13},{"active":true,"name":"target_kind","req":true,"type":"`$STRING`","index$":14},{"active":true,"format":"slug","name":"target_slug_perm","req":false,"type":"`$STRING`","index$":15},{"active":true,"format":"uuid","name":"uuid","readOnly":true,"req":false,"type":"`$STRING`","index$":16}],"id":{"field":"id","name":"id"},"name":"namespace_audit_log","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"owner","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"query","orig":"query","reqd":false,"type":"`$ANY`","index$":2}]},"contract":{"id":"GET /audit-log/{owner}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"audit_log_namespace_list\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"description\":\"A page number within the paginated result set.\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Number of results to return per page.\",\"in\":\"query\",\"name\":\"page_size\",\"required\":false,\"type\":\"integer\"},{\"description\":\"A search term for querying events, actors, or timestamps of log records.\",\"in\":\"query\",\"name\":\"query\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved the list of audit log entries\",\"schema\":{\"items\":{\"properties\":{\"actor\":{\"minLength\":1,\"title\":\"Actor\",\"type\":\"string\"},\"actor_ip_address\":{\"minLength\":1,\"title\":\"Actor ip address\",\"type\":\"string\"},\"actor_kind\":{\"readOnly\":true,\"title\":\"Actor kind\",\"type\":\"string\"},\"actor_location\":{\"properties\":{\"city\":{\"minLength\":1,\"title\":\"City\",\"type\":\"string\"},\"continent\":{\"minLength\":1,\"title\":\"Continent\",\"type\":\"string\"},\"country\":{\"minLength\":1,\"title\":\"Country\",\"type\":\"string\"},\"country_code\":{\"readOnly\":true,\"title\":\"Country code\",\"type\":\"string\"},\"latitude\":{\"format\":\"decimal\",\"title\":\"Latitude\",\"type\":\"string\"},\"longitude\":{\"format\":\"decimal\",\"title\":\"Longitude\",\"type\":\"string\"},\"postal_code\":{\"minLength\":1,\"title\":\"Postal code\",\"type\":\"string\"}},\"required\":[\"city\",\"continent\",\"country\",\"postal_code\"],\"type\":\"object\"},\"actor_slug_perm\":{\"minLength\":1,\"title\":\"Actor slug perm\",\"type\":\"string\"},\"actor_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Actor url\",\"type\":\"string\"},\"context\":{\"minLength\":1,\"title\":\"Context\",\"type\":\"string\"},\"event\":{\"minLength\":1,\"title\":\"Event\",\"type\":\"string\"},\"event_at\":{\"format\":\"date-time\",\"title\":\"Event at\",\"type\":\"string\"},\"object\":{\"minLength\":1,\"title\":\"Object\",\"type\":\"string\"},\"object_kind\":{\"minLength\":1,\"title\":\"Object kind\",\"type\":\"string\"},\"object_slug_perm\":{\"minLength\":1,\"title\":\"Object slug perm\",\"type\":\"string\"},\"target\":{\"minLength\":1,\"title\":\"Target\",\"type\":\"string\"},\"target_kind\":{\"minLength\":1,\"title\":\"Target kind\",\"type\":\"string\"},\"target_slug_perm\":{\"format\":\"slug\",\"maxLength\":24,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Target slug perm\",\"type\":\"string\"},\"uuid\":{\"format\":\"uuid\",\"readOnly\":true,\"title\":\"Uuid\",\"type\":\"string\"}},\"required\":[\"actor\",\"actor_ip_address\",\"actor_location\",\"actor_slug_perm\",\"context\",\"event\",\"event_at\",\"object\",\"object_kind\",\"object_slug_perm\",\"target\",\"target_kind\"],\"type\":\"object\"},\"type\":\"array\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"402\":{\"description\":\"Audit logs are not active; upgrade your account!\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/audit-log/{owner}/","rename":{"param":{"owner":"id"}},"segments":[{"lit":"audit-log"},{"var":"id"}],"select":{"exist":["id","page","page_size","query"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"namespace_audit_log","name__orig":"namespace_audit_log","Name":"NamespaceAuditLog","name_":"namespace_audit_log","name-":"namespace-audit-log","NAME":"NAMESPACE_AUDIT_LOG","index$":44}, {"active":true,"entity":"namespace_audit_log","key$":"BasicNamespaceAuditLogFlow","kind":"basic","name":"BasicNamespaceAuditLogFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"namespace_audit_log_ref01","srcdatavar":"namespace_audit_log_ref01_data","suffix":"_dt0"},"match":{"id":"namespace_audit_log01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-namespace_audit_log_ref01"}}],"index$":0}]}, 'NamespaceAuditLog')
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
  
