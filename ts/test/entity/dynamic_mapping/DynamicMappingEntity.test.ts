

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


describe('DynamicMappingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.DynamicMapping()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dynamic_mapping.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"claim_value","req":true,"short":"The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`.","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"service_account","req":true,"short":"The service account associated with the provider setting and `claim_value` Note: This field and the dynamic mappings feature are still in early access.","type":"`$STRING`","index$":2}],"id":{"field":"id","name":"id"},"name":"dynamic_mapping","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"provider_setting","orig":"provider_setting","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_openid-connect_dynamic-mappings_list\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"provider_setting\",\"required\":true,\"type\":\"string\"},{\"description\":\"A page number within the paginated result set.\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Number of results to return per page.\",\"in\":\"query\",\"name\":\"page_size\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved the list of OpenID Connect dynamic mappings for the selected provider setting\",\"schema\":{\"items\":{\"description\":\"The dynamic mappings of `mapping_claim` values to service accounts. Cannot be provided if `service_accounts` is also set.\\n\\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.\",\"properties\":{\"claim_value\":{\"description\":\"The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`.\\n\\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.\",\"minLength\":1,\"title\":\"Claim value\",\"type\":\"string\"},\"service_account\":{\"description\":\"The service account associated with the provider setting and `claim_value`\\n\\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.\",\"minLength\":1,\"title\":\"Service account\",\"type\":\"string\"}},\"required\":[\"claim_value\",\"service_account\"],\"type\":\"object\"},\"type\":\"array\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Organization or Provider Setting not found (see detail)\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"openid-connect"},{"var":"provider_setting"},{"lit":"dynamic-mappings"}],"select":{"exist":["org_id","page","page_size","provider_setting"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"claim_value","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"openid_connect_id","orig":"provider_setting","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/{claim_value}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_openid-connect_dynamic-mappings_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"provider_setting\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"claim_value\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved the specified OpenID Connect dynamic mapping\",\"schema\":{\"description\":\"The dynamic mappings of `mapping_claim` values to service accounts. Cannot be provided if `service_accounts` is also set.\\n\\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.\",\"properties\":{\"claim_value\":{\"description\":\"The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`.\\n\\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.\",\"minLength\":1,\"title\":\"Claim value\",\"type\":\"string\"},\"service_account\":{\"description\":\"The service account associated with the provider setting and `claim_value`\\n\\nNote: This field and the dynamic mappings feature are still in early access. Breaking changes are possible as we receive feedback on this feature.\",\"minLength\":1,\"title\":\"Service account\",\"type\":\"string\"}},\"required\":[\"claim_value\",\"service_account\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Organization, Provider Setting or Dynamic Mapping with claim not found (see detail)\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/{claim_value}/","rename":{"param":{"claim_value":"id","org":"org_id","provider_setting":"openid_connect_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"openid-connect"},{"var":"openid_connect_id"},{"lit":"dynamic-mappings"},{"var":"id"}],"select":{"exist":["id","openid_connect_id","org_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["org","openid_connect"]]},"key$":"dynamic_mapping","name__orig":"dynamic_mapping","Name":"DynamicMapping","name_":"dynamic_mapping","name-":"dynamic-mapping","NAME":"DYNAMIC_MAPPING","index$":20}, {"active":true,"entity":"dynamic_mapping","key$":"BasicDynamicMappingFlow","kind":"basic","name":"BasicDynamicMappingFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"org_id":"org01","provider_setting":"provider_setting01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"dynamic_mapping_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"dynamic_mapping_ref01","srcdatavar":"dynamic_mapping_ref01_data","suffix":"_dt0"},"match":{"id":"dynamic_mapping01","openid_connect_id":"openid_connect01","org_id":"org01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dynamic_mapping_ref01"}}],"index$":1}]}, 'DynamicMapping')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dynamic_mapping_ref01_data = Object.values(setup.data.existing.dynamic_mapping)[0] as any

    // LIST
    const dynamic_mapping_ref01_ent = client.DynamicMapping()
    const dynamic_mapping_ref01_match: any = {}
    dynamic_mapping_ref01_match['org_id'] = setup.idmap['org01']
    dynamic_mapping_ref01_match['provider_setting'] = setup.idmap['provider_setting01']

    const dynamic_mapping_ref01_list = (await dynamic_mapping_ref01_ent.list(dynamic_mapping_ref01_match)).map((e: any) => e.data())


    // LOAD
    const dynamic_mapping_ref01_match_dt0: any = {}
    dynamic_mapping_ref01_match_dt0.id = dynamic_mapping_ref01_data.id
    const dynamic_mapping_ref01_data_dt0 = (await dynamic_mapping_ref01_ent.load(dynamic_mapping_ref01_match_dt0)).data()
    assert(dynamic_mapping_ref01_data_dt0.id === dynamic_mapping_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dynamic_mapping/DynamicMappingTestData.json')

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
    ['dynamic_mapping01','dynamic_mapping02','dynamic_mapping03','org01','org02','org03','openid_connect01','openid_connect02','openid_connect03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_DYNAMIC_MAPPING_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_DYNAMIC_MAPPING_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_DYNAMIC_MAPPING_ENTID']
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
  
