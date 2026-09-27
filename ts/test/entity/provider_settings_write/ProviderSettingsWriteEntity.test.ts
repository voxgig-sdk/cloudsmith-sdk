

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


describe('ProviderSettingsWriteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.ProviderSettingsWrite()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'provider_settings_write.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"claims":{"a":true,"h":"Claims","n":"claims","r":true,"sh":"The set of claims that any received tokens from the provider must contain to authenticate as the configured service account.","t":"`$OBJECT`","key$":"claims","index$":0},"dynamic_mappings":{"a":true,"h":"Dynamic Mappings","n":"dynamic_mappings","r":false,"sh":"The dynamic mappings of `mapping_claim` values to service accounts.","t":"`$ARRAY`","key$":"dynamic_mappings","index$":1},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":true,"sh":"Whether the provider settings should be used for incoming OIDC requests.","t":"`$BOOLEAN`","key$":"enabled","index$":2},"mapping_claim":{"a":true,"h":"Mapping Claim","n":"mapping_claim","r":false,"sh":"The OIDC claim to use for mapping to service accounts in dynamic_mappings.","t":"`$STRING`","key$":"mapping_claim","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the provider settings are being configured for","t":"`$STRING`","key$":"name","index$":4},"provider_url":{"a":true,"fo":"uri","h":"Provider Url","n":"provider_url","r":true,"sh":"The URL from the provider that serves as the base for the OpenID configuration.","t":"`$STRING`","key$":"provider_url","index$":5},"service_accounts":{"a":true,"h":"Service Accounts","n":"service_accounts","r":false,"sh":"The service accounts associated with these provider settings.","t":"`$ARRAY`","key$":"service_accounts","index$":6},"slug":{"a":true,"fo":"slug","h":"Slug","n":"slug","r":false,"ro":true,"sh":"The slug of the provider settings","t":"`$STRING`","key$":"slug","index$":7},"slug_perm":{"a":true,"fo":"slug","h":"Slug Perm","n":"slug_perm","r":false,"ro":true,"sh":"The unique, immutable identifier of the provider settings.","t":"`$STRING`","key$":"slug_perm","index$":8}},"name":"provider_settings_write","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /orgs/{org}/openid-connect/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/orgs/{org}/openid-connect/","q":{"exist":["data","org_id"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"openid-connect"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /orgs/{org}/openid-connect/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"slug_perm","or":"slug_perm","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PATCH","o":"/orgs/{org}/openid-connect/{slug_perm}/","q":{"exist":["data","org_id","slug_perm"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"openid-connect"},{"var":"slug_perm"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /orgs/{org}/openid-connect/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"slug_perm","or":"slug_perm","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/orgs/{org}/openid-connect/{slug_perm}/","q":{"exist":["data","org_id","slug_perm"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"openid-connect"},{"var":"slug_perm"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.org"],["$.main.kit.entity.org"]]},"key$":"provider_settings_write","name__orig":"provider_settings_write","Name":"ProviderSettingsWrite","name_":"provider_settings_write","name-":"provider-settings-write","NAME":"PROVIDER_SETTINGS_WRITE","index$":42}, {"active":true,"entity":"provider_settings_write","key$":"BasicProviderSettingsWriteFlow","kind":"basic","name":"BasicProviderSettingsWriteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"provider_settings_write_ref01"},"m":{"org_id":"org01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"org_id":"org01"},"i":{"ref":"provider_settings_write_ref01","srcdatavar":"provider_settings_write_ref01_data","suffix":"_up0","textfield":"mapping_claim"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-provider_settings_write_ref01"}}],"v":[],"index$":1}]}, 'ProviderSettingsWrite', {"POST /orgs/{org}/openid-connect/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"data","in":"body","required":false,"schema":{"required":["claims","enabled","name","provider_url"],"type":"object","properties":{"claims":{"title":"Claims","description":"The set of claims that any received tokens from the provider must contain to authenticate as the configured service account.","type":"object"},"dynamic_mappings":{"description":"The dynamic mappings of `mapping_claim` values to service accounts. Cannot be provided if `service_accounts` is also set.\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","type":"array","items":{"description":"The dynamic mappings of `mapping_claim` values to service accounts. Cannot be provided if `service_accounts` is also set.\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","required":["claim_value","service_account"],"type":"object","properties":{"claim_value":{"title":"Claim value","description":"The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`.\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","type":"string","minLength":1,"key$":"claim_value"},"service_account":{"title":"Service account","description":"The service account associated with the provider setting and `claim_value`\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","type":"string","minLength":1,"key$":"service_account"}},"x-ref":"#/definitions/DynamicMapping"}},"enabled":{"title":"Enabled","description":"Whether the provider settings should be used for incoming OIDC requests.","type":"boolean"},"mapping_claim":{"title":"Mapping claim","description":"The OIDC claim to use for mapping to service accounts in dynamic_mappings. Cannot be provided if `service_accounts` is also set.\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","type":"string","minLength":1,"x-nullable":true},"name":{"title":"Name","description":"The name of the provider settings are being configured for","type":"string","minLength":1},"provider_url":{"title":"Provider url","description":"The URL from the provider that serves as the base for the OpenID configuration.\nFor example, if the OpenID configuration is available at https://token.actions.githubusercontent.com/.well-known/openid-configuration, the provider URL would be https://token.actions.githubusercontent.com/","type":"string","format":"uri","minLength":1},"service_accounts":{"description":"The service accounts associated with these provider settings. Cannot be provided if `mapping_claim` or `dynamic_mappings` are specified.","type":"array","items":{"description":"The service accounts associated with these provider settings. Cannot be provided if `mapping_claim` or `dynamic_mappings` are specified.","type":"string"},"uniqueItems":true}},"x-ref":"#/definitions/ProviderSettingsWriteRequest"},"index$":1}]},"PATCH /orgs/{org}/openid-connect/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"type":"object","properties":{"claims":{"title":"Claims","description":"The set of claims that any received tokens from the provider must contain to authenticate as the configured service account.","type":"object"},"dynamic_mappings":{"description":"The dynamic mappings of `mapping_claim` values to service accounts. Cannot be provided if `service_accounts` is also set.\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","type":"array","items":{"description":"The dynamic mappings of `mapping_claim` values to service accounts. Cannot be provided if `service_accounts` is also set.\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","required":["claim_value","service_account"],"type":"object","properties":{"claim_value":{"title":"Claim value","description":"The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`.\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","type":"string","minLength":1,"key$":"claim_value"},"service_account":{"title":"Service account","description":"The service account associated with the provider setting and `claim_value`\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","type":"string","minLength":1,"key$":"service_account"}},"x-ref":"#/definitions/DynamicMapping"}},"enabled":{"title":"Enabled","description":"Whether the provider settings should be used for incoming OIDC requests.","type":"boolean"},"mapping_claim":{"title":"Mapping claim","description":"The OIDC claim to use for mapping to service accounts in dynamic_mappings. Cannot be provided if `service_accounts` is also set.\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","type":"string","minLength":1,"x-nullable":true},"name":{"title":"Name","description":"The name of the provider settings are being configured for","type":"string","minLength":1},"provider_url":{"title":"Provider url","description":"The URL from the provider that serves as the base for the OpenID configuration.\nFor example, if the OpenID configuration is available at https://token.actions.githubusercontent.com/.well-known/openid-configuration, the provider URL would be https://token.actions.githubusercontent.com/","type":"string","format":"uri","minLength":1},"service_accounts":{"description":"The service accounts associated with these provider settings. Cannot be provided if `mapping_claim` or `dynamic_mappings` are specified.","type":"array","items":{"description":"The service accounts associated with these provider settings. Cannot be provided if `mapping_claim` or `dynamic_mappings` are specified.","type":"string"},"uniqueItems":true}},"x-ref":"#/definitions/ProviderSettingsWriteRequestPatch"},"index$":2}]},"PUT /orgs/{org}/openid-connect/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"required":["claims","enabled","name","provider_url"],"type":"object","properties":{"claims":{"title":"Claims","description":"The set of claims that any received tokens from the provider must contain to authenticate as the configured service account.","type":"object"},"dynamic_mappings":{"description":"The dynamic mappings of `mapping_claim` values to service accounts. Cannot be provided if `service_accounts` is also set.\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","type":"array","items":{"description":"The dynamic mappings of `mapping_claim` values to service accounts. Cannot be provided if `service_accounts` is also set.\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","required":["claim_value","service_account"],"type":"object","properties":{"claim_value":{"title":"Claim value","description":"The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`.\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","type":"string","minLength":1,"key$":"claim_value"},"service_account":{"title":"Service account","description":"The service account associated with the provider setting and `claim_value`\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","type":"string","minLength":1,"key$":"service_account"}},"x-ref":"#/definitions/DynamicMapping"}},"enabled":{"title":"Enabled","description":"Whether the provider settings should be used for incoming OIDC requests.","type":"boolean"},"mapping_claim":{"title":"Mapping claim","description":"The OIDC claim to use for mapping to service accounts in dynamic_mappings. Cannot be provided if `service_accounts` is also set.\n\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.","type":"string","minLength":1,"x-nullable":true},"name":{"title":"Name","description":"The name of the provider settings are being configured for","type":"string","minLength":1},"provider_url":{"title":"Provider url","description":"The URL from the provider that serves as the base for the OpenID configuration.\nFor example, if the OpenID configuration is available at https://token.actions.githubusercontent.com/.well-known/openid-configuration, the provider URL would be https://token.actions.githubusercontent.com/","type":"string","format":"uri","minLength":1},"service_accounts":{"description":"The service accounts associated with these provider settings. Cannot be provided if `mapping_claim` or `dynamic_mappings` are specified.","type":"array","items":{"description":"The service accounts associated with these provider settings. Cannot be provided if `mapping_claim` or `dynamic_mappings` are specified.","type":"string"},"uniqueItems":true}},"x-ref":"#/definitions/ProviderSettingsWriteRequest"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const provider_settings_write_ref01_ent = client.ProviderSettingsWrite()
    let provider_settings_write_ref01_data = setup.data.new.provider_settings_write['provider_settings_write_ref01']
    provider_settings_write_ref01_data['org_id'] = setup.idmap['org01']

    provider_settings_write_ref01_data = (await provider_settings_write_ref01_ent.create(provider_settings_write_ref01_data)).data()
    assert(null != provider_settings_write_ref01_data)


    // UPDATE
    const provider_settings_write_ref01_data_up0: any = {}
    provider_settings_write_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const provider_settings_write_ref01_markdef_up0 = { name: 'mapping_claim', value: 'Mark01-provider_settings_write_ref01_' + setup.now }
    ;(provider_settings_write_ref01_data_up0 as any)[provider_settings_write_ref01_markdef_up0.name] = provider_settings_write_ref01_markdef_up0.value

    const provider_settings_write_ref01_resdata_up0 = (await provider_settings_write_ref01_ent.update(provider_settings_write_ref01_data_up0)).data()
    assert(null != provider_settings_write_ref01_resdata_up0)

    assert((provider_settings_write_ref01_resdata_up0 as any)[provider_settings_write_ref01_markdef_up0.name] === provider_settings_write_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/provider_settings_write/ProviderSettingsWriteTestData.json')

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
    ['provider_settings_write01','provider_settings_write02','provider_settings_write03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID']
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
  
