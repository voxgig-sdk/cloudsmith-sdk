

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


describe('RepositoryAuditLogEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.RepositoryAuditLog()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'repository_audit_log.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"actor":{"a":true,"h":"Actor","n":"actor","r":true,"t":"`$STRING`","key$":"actor","index$":0},"actor_ip_address":{"a":true,"h":"Actor Ip Address","n":"actor_ip_address","r":true,"t":"`$STRING`","key$":"actor_ip_address","index$":1},"actor_kind":{"a":true,"h":"Actor Kind","n":"actor_kind","r":false,"ro":true,"t":"`$STRING`","key$":"actor_kind","index$":2},"actor_location":{"a":true,"h":"Actor Location","n":"actor_location","r":true,"t":"`$OBJECT`","key$":"actor_location","index$":3},"actor_slug_perm":{"a":true,"h":"Actor Slug Perm","n":"actor_slug_perm","r":true,"t":"`$STRING`","key$":"actor_slug_perm","index$":4},"actor_url":{"a":true,"fo":"uri","h":"Actor Url","n":"actor_url","r":false,"ro":true,"t":"`$STRING`","key$":"actor_url","index$":5},"context":{"a":true,"h":"Context","n":"context","r":true,"t":"`$STRING`","key$":"context","index$":6},"event":{"a":true,"h":"Event","n":"event","r":true,"t":"`$STRING`","key$":"event","index$":7},"event_at":{"a":true,"fo":"date-time","h":"Event At","n":"event_at","r":true,"t":"`$STRING`","key$":"event_at","index$":8},"object":{"a":true,"h":"Object","n":"object","r":true,"t":"`$STRING`","key$":"object","index$":9},"object_kind":{"a":true,"h":"Object Kind","n":"object_kind","r":true,"t":"`$STRING`","key$":"object_kind","index$":10},"object_slug_perm":{"a":true,"h":"Object Slug Perm","n":"object_slug_perm","r":true,"t":"`$STRING`","key$":"object_slug_perm","index$":11},"uuid":{"a":true,"fo":"uuid","h":"Uuid","n":"uuid","r":false,"ro":true,"t":"`$STRING`","key$":"uuid","index$":12}},"name":"repository_audit_log","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /audit-log/{owner}/{repo}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/audit-log/{owner}/{repo}/","q":{"exist":["owner","page","page_size","query","repo"]},"r":{},"s":[{"lit":"audit-log"},{"var":"owner"},{"var":"repo"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"repository_audit_log","name__orig":"repository_audit_log","Name":"RepositoryAuditLog","name_":"repository_audit_log","name-":"repository-audit-log","NAME":"REPOSITORY_AUDIT_LOG","index$":46}, {"active":true,"entity":"repository_audit_log","key$":"BasicRepositoryAuditLogFlow","kind":"basic","name":"BasicRepositoryAuditLogFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"owner":"owner01","repo":"repo01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"repository_audit_log_ref01"}}],"index$":0}]}, 'RepositoryAuditLog', {"GET /audit-log/{owner}/{repo}/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1},{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":2},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":3},{"name":"query","in":"query","description":"A search term for querying events, actors, or timestamps of log records.","required":false,"type":"string","index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let repository_audit_log_ref01_data = Object.values(setup.data.existing.repository_audit_log)[0] as any

    // LIST
    const repository_audit_log_ref01_ent = client.RepositoryAuditLog()
    const repository_audit_log_ref01_match: any = {}
    repository_audit_log_ref01_match['owner'] = setup.idmap['owner01']
    repository_audit_log_ref01_match['repo'] = setup.idmap['repo01']

    const repository_audit_log_ref01_list = (await repository_audit_log_ref01_ent.list(repository_audit_log_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/repository_audit_log/RepositoryAuditLogTestData.json')

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
    ['repository_audit_log01','repository_audit_log02','repository_audit_log03','owner01','repo01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_REPOSITORY_AUDIT_LOG_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_REPOSITORY_AUDIT_LOG_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_AUDIT_LOG_ENTID']
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
  
