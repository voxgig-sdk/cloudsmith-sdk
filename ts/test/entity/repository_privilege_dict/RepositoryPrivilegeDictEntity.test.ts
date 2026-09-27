

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


describe('RepositoryPrivilegeDictEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.RepositoryPrivilegeDict()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'repository_privilege_dict.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"privilege":{"a":true,"h":"Privilege","n":"privilege","r":true,"sh":"The level of privilege that the user or team should be granted to the specified repository.","t":"`$STRING`","key$":"privilege","index$":0},"service":{"a":true,"fo":"slug","h":"Service","n":"service","r":false,"sh":"The service identifier (slug).","t":"`$STRING`","key$":"service","index$":1},"team":{"a":true,"fo":"slug","h":"Team","n":"team","r":false,"sh":"The team identifier (slug).","t":"`$STRING`","key$":"team","index$":2},"user":{"a":true,"fo":"slug","h":"User","n":"user","r":false,"sh":"The user identifier (slug).","t":"`$STRING`","key$":"user","index$":3}},"name":"repository_privilege_dict","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /repos/{owner}/{identifier}/privileges","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/repos/{owner}/{identifier}/privileges","q":{"exist":["identifier","owner","page","page_size"]},"r":{},"s":[{"lit":"repos"},{"var":"owner"},{"var":"identifier"},{"lit":"privileges"}],"t":{"req":"`reqdata`","res":"`body.privileges`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.repo"]]},"key$":"repository_privilege_dict","name__orig":"repository_privilege_dict","Name":"RepositoryPrivilegeDict","name_":"repository_privilege_dict","name-":"repository-privilege-dict","NAME":"REPOSITORY_PRIVILEGE_DICT","index$":52}, {"active":true,"entity":"repository_privilege_dict","key$":"BasicRepositoryPrivilegeDictFlow","kind":"basic","name":"BasicRepositoryPrivilegeDictFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"identifier":"identifier01","owner":"owner01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"repository_privilege_dict_ref01"}}],"index$":0}]}, 'RepositoryPrivilegeDict', {"GET /repos/{owner}/{identifier}/privileges":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"identifier","in":"path","required":true,"type":"string","index$":1},{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":2},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let repository_privilege_dict_ref01_data = Object.values(setup.data.existing.repository_privilege_dict)[0] as any

    // LIST
    const repository_privilege_dict_ref01_ent = client.RepositoryPrivilegeDict()
    const repository_privilege_dict_ref01_match: any = {}
    repository_privilege_dict_ref01_match['identifier'] = setup.idmap['identifier01']
    repository_privilege_dict_ref01_match['owner'] = setup.idmap['owner01']

    const repository_privilege_dict_ref01_list = (await repository_privilege_dict_ref01_ent.list(repository_privilege_dict_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/repository_privilege_dict/RepositoryPrivilegeDictTestData.json')

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
    ['repository_privilege_dict01','repository_privilege_dict02','repository_privilege_dict03','repo01','repo02','repo03','identifier01','owner01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_REPOSITORY_PRIVILEGE_DICT_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_REPOSITORY_PRIVILEGE_DICT_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_PRIVILEGE_DICT_ENTID']
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
  
