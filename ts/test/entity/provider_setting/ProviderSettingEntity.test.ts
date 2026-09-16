

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"claims","req":true,"short":"The set of claims that any received tokens from the provider must contain to authenticate as the configured service account.","type":"`$OBJECT`","index$":0},{"active":true,"name":"enabled","req":true,"short":"Whether the provider settings should be used for incoming OIDC requests.","type":"`$BOOLEAN`","index$":1},{"active":true,"name":"mapping_claim","req":false,"short":"The OIDC claim to use for mapping to service accounts in dynamic_mappings.","type":"`$STRING`","index$":2},{"active":true,"name":"name","req":true,"short":"The name of the provider settings are being configured for","type":"`$STRING`","index$":3},{"active":true,"format":"uri","name":"provider_url","req":true,"short":"The URL from the provider that serves as the base for the OpenID configuration.","type":"`$STRING`","index$":4},{"active":true,"name":"service_accounts","req":false,"short":"The service accounts associated with these provider settings.","type":"`$ARRAY`","index$":5},{"active":true,"format":"slug","name":"slug","readOnly":true,"req":false,"short":"The slug of the provider settings","type":"`$STRING`","index$":6},{"active":true,"format":"slug","name":"slug_perm","readOnly":true,"req":false,"short":"The unique, immutable identifier of the provider settings.","type":"`$STRING`","index$":7}],"name":"provider_setting","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"query","orig":"query","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ANY`","index$":3}]},"contract":{"id":"GET /orgs/{org}/openid-connect/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_openid-connect_list\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"description\":\"A page number within the paginated result set.\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Number of results to return per page.\",\"in\":\"query\",\"name\":\"page_size\",\"required\":false,\"type\":\"integer\"},{\"default\":\"\",\"description\":\"A search term for querying of OpenID Connect (OIDC) provider settings.Available options are: name, provider_url, service_account\",\"in\":\"query\",\"name\":\"query\",\"required\":false,\"type\":\"string\"},{\"default\":\"name\",\"description\":\"A field for sorting objects in ascending or descending order. Use `-` prefix for descending order (e.g., `-name`). Available options: name.\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved the list of OpenID Connect provider settings for the org\",\"schema\":{\"items\":{\"properties\":{\"claims\":{\"description\":\"The set of claims that any received tokens from the provider must contain to authenticate as the configured service account.\",\"title\":\"Claims\",\"type\":\"object\"},\"enabled\":{\"description\":\"Whether the provider settings should be used for incoming OIDC requests.\",\"title\":\"Enabled\",\"type\":\"boolean\"},\"mapping_claim\":{\"description\":\"The OIDC claim to use for mapping to service accounts in dynamic_mappings.\\n\\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.\",\"minLength\":1,\"title\":\"Mapping claim\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the provider settings are being configured for\",\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"provider_url\":{\"description\":\"The URL from the provider that serves as the base for the OpenID configuration.\\nFor example, if the OpenID configuration is available at https://token.actions.githubusercontent.com/.well-known/openid-configuration, the provider URL would be https://token.actions.githubusercontent.com/\",\"format\":\"uri\",\"minLength\":1,\"title\":\"Provider url\",\"type\":\"string\"},\"service_accounts\":{\"description\":\"The service accounts associated with these provider settings.\",\"items\":{\"description\":\"The service accounts associated with these provider settings.\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"slug\":{\"description\":\"The slug of the provider settings\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"},\"slug_perm\":{\"description\":\"The unique, immutable identifier of the provider settings.\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"}},\"required\":[\"claims\",\"enabled\",\"name\",\"provider_url\"],\"type\":\"object\"},\"type\":\"array\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Organization not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/orgs/{org}/openid-connect/","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"openid-connect"}],"select":{"exist":["org_id","page","page_size","query","sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"slug_perm","orig":"slug_perm","reqd":true,"type":"`$ANY`","index$":1}]},"contract":{"id":"GET /orgs/{org}/openid-connect/{slug_perm}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_openid-connect_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"slug_perm\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"claims\":{\"description\":\"The set of claims that any received tokens from the provider must contain to authenticate as the configured service account.\",\"title\":\"Claims\",\"type\":\"object\"},\"enabled\":{\"description\":\"Whether the provider settings should be used for incoming OIDC requests.\",\"title\":\"Enabled\",\"type\":\"boolean\"},\"mapping_claim\":{\"description\":\"The OIDC claim to use for mapping to service accounts in dynamic_mappings.\\n\\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.\",\"minLength\":1,\"title\":\"Mapping claim\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the provider settings are being configured for\",\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"provider_url\":{\"description\":\"The URL from the provider that serves as the base for the OpenID configuration.\\nFor example, if the OpenID configuration is available at https://token.actions.githubusercontent.com/.well-known/openid-configuration, the provider URL would be https://token.actions.githubusercontent.com/\",\"format\":\"uri\",\"minLength\":1,\"title\":\"Provider url\",\"type\":\"string\"},\"service_accounts\":{\"description\":\"The service accounts associated with these provider settings.\",\"items\":{\"description\":\"The service accounts associated with these provider settings.\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"slug\":{\"description\":\"The slug of the provider settings\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"},\"slug_perm\":{\"description\":\"The unique, immutable identifier of the provider settings.\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"}},\"required\":[\"claims\",\"enabled\",\"name\",\"provider_url\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/orgs/{org}/openid-connect/{slug_perm}/","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"openid-connect"},{"var":"slug_perm"}],"select":{"exist":["org_id","slug_perm"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["org"],["org","openid_connect"]]},"key$":"provider_setting","name__orig":"provider_setting","Name":"ProviderSetting","name_":"provider_setting","name-":"provider-setting","NAME":"PROVIDER_SETTING","index$":72}, {"active":true,"entity":"provider_setting","key$":"BasicProviderSettingFlow","kind":"basic","name":"BasicProviderSettingFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"org_id":"org01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"provider_setting_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"provider_setting_ref01","srcdatavar":"provider_setting_ref01_data","suffix":"_dt0"},"match":{"id":"provider_setting01","org_id":"org01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-provider_setting_ref01"}}],"index$":1}]}, 'ProviderSetting')
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
    ['provider_setting01','provider_setting02','provider_setting03','org01','org02','org03','org01','org02','org03','openid_connect01','openid_connect02','openid_connect03'],
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
  
