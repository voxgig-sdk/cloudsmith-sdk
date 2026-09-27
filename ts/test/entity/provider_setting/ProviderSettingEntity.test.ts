

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


describe('ProviderSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.ProviderSetting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'provider_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"claims":{"a":true,"h":"Claims","n":"claims","r":true,"sh":"The set of claims that any received tokens from the provider must contain to authenticate as the configured service account.","t":"`$OBJECT`","key$":"claims","index$":0},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":true,"sh":"Whether the provider settings should be used for incoming OIDC requests.","t":"`$BOOLEAN`","key$":"enabled","index$":1},"mapping_claim":{"a":true,"h":"Mapping Claim","n":"mapping_claim","r":false,"sh":"The OIDC claim to use for mapping to service accounts in dynamic_mappings.","t":"`$STRING`","key$":"mapping_claim","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the provider settings are being configured for","t":"`$STRING`","key$":"name","index$":3},"provider_url":{"a":true,"fo":"uri","h":"Provider Url","n":"provider_url","r":true,"sh":"The URL from the provider that serves as the base for the OpenID configuration.","t":"`$STRING`","key$":"provider_url","index$":4},"service_accounts":{"a":true,"h":"Service Accounts","n":"service_accounts","r":false,"sh":"The service accounts associated with these provider settings.","t":"`$ARRAY`","key$":"service_accounts","index$":5},"slug":{"a":true,"fo":"slug","h":"Slug","n":"slug","r":false,"ro":true,"sh":"The slug of the provider settings","t":"`$STRING`","key$":"slug","index$":6},"slug_perm":{"a":true,"fo":"slug","h":"Slug Perm","n":"slug_perm","r":false,"ro":true,"sh":"The unique, immutable identifier of the provider settings.","t":"`$STRING`","key$":"slug_perm","index$":7}},"name":"provider_setting","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /orgs/{org}/openid-connect/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ANY`","index$":3}]},"k":"http","m":"GET","o":"/orgs/{org}/openid-connect/","q":{"exist":["org_id","page","page_size","query","sort"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"openid-connect"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /orgs/{org}/openid-connect/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"slug_perm","or":"slug_perm","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/orgs/{org}/openid-connect/{slug_perm}/","q":{"exist":["org_id","slug_perm"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"openid-connect"},{"var":"slug_perm"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.org"],["$.main.kit.entity.org"]]},"key$":"provider_setting","name__orig":"provider_setting","Name":"ProviderSetting","name_":"provider_setting","name-":"provider-setting","NAME":"PROVIDER_SETTING","index$":41}, {"active":true,"entity":"provider_setting","key$":"BasicProviderSettingFlow","kind":"basic","name":"BasicProviderSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"org_id":"org01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"provider_setting_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"provider_setting_ref01","srcdatavar":"provider_setting_ref01_data","suffix":"_dt0"},"m":{"id":"provider_setting01","org_id":"org01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-provider_setting_ref01"}}],"index$":1}]}, 'ProviderSetting', {"GET /orgs/{org}/openid-connect/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":1},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":2},{"name":"query","in":"query","description":"A search term for querying of OpenID Connect (OIDC) provider settings.Available options are: name, provider_url, service_account","required":false,"type":"string","default":"","index$":3},{"name":"sort","in":"query","description":"A field for sorting objects in ascending or descending order. Use `-` prefix for descending order (e.g., `-name`). Available options: name.","required":false,"type":"string","default":"name","index$":4}]},"GET /orgs/{org}/openid-connect/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let provider_setting_ref01_data = Object.values(setup.data.existing.provider_setting)[0] as any

    // LIST
    const provider_setting_ref01_ent = client.ProviderSetting()
    const provider_setting_ref01_match: any = {}
    provider_setting_ref01_match['org_id'] = setup.idmap['org01']

    const provider_setting_ref01_list = (await provider_setting_ref01_ent.list(provider_setting_ref01_match)).map((e: any) => e.data())



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/provider_setting/ProviderSettingTestData.json')

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
    ['provider_setting01','provider_setting02','provider_setting03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_PROVIDER_SETTING_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_PROVIDER_SETTING_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_PROVIDER_SETTING_ENTID']
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
  
