

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


describe('OrganizationPackageLicensePolicyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.OrganizationPackageLicensePolicy()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization_package_license_policy.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allow_unknown_licenses":{"a":true,"h":"Allow Unknown Licenses","n":"allow_unknown_licenses","r":false,"t":"`$BOOLEAN`","key$":"allow_unknown_licenses","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"ro":true,"t":"`$STRING`","key$":"created_at","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":4},"on_violation_quarantine":{"a":true,"h":"On Violation Quarantine","n":"on_violation_quarantine","r":false,"t":"`$BOOLEAN`","key$":"on_violation_quarantine","index$":5},"package_query_string":{"a":true,"h":"Package Query String","n":"package_query_string","r":false,"t":"`$STRING`","key$":"package_query_string","index$":6},"slug_perm":{"a":true,"fo":"slug","h":"Slug Perm","n":"slug_perm","r":false,"ro":true,"t":"`$STRING`","key$":"slug_perm","index$":7},"spdx_identifiers":{"a":true,"h":"Spdx Identifiers","n":"spdx_identifiers","r":true,"t":"`$ARRAY`","key$":"spdx_identifiers","index$":8},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"ro":true,"t":"`$STRING`","key$":"updated_at","index$":9}},"id":{"field":"id","name":"id"},"name":"organization_package_license_policy","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /orgs/{org}/license-policy/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/orgs/{org}/license-policy/","q":{"exist":["data","org_id"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"license-policy"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /orgs/{org}/license-policy/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/orgs/{org}/license-policy/","q":{"exist":["org_id","page","page_size"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"license-policy"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /orgs/{org}/license-policy/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"slug_perm","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/orgs/{org}/license-policy/{slug_perm}/","q":{"exist":["id","org_id"]},"r":{"param":{"org":"org_id","slug_perm":"id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"license-policy"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /orgs/{org}/license-policy/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"slug_perm","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PATCH","o":"/orgs/{org}/license-policy/{slug_perm}/","q":{"exist":["data","id","org_id"]},"r":{"param":{"org":"org_id","slug_perm":"id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"license-policy"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /orgs/{org}/license-policy/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"slug_perm","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/orgs/{org}/license-policy/{slug_perm}/","q":{"exist":["data","id","org_id"]},"r":{"param":{"org":"org_id","slug_perm":"id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"license-policy"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.org"]]},"key$":"organization_package_license_policy","name__orig":"organization_package_license_policy","Name":"OrganizationPackageLicensePolicy","name_":"organization_package_license_policy","name-":"organization-package-license-policy","NAME":"ORGANIZATION_PACKAGE_LICENSE_POLICY","index$":29}, {"active":true,"entity":"organization_package_license_policy","key$":"BasicOrganizationPackageLicensePolicyFlow","kind":"basic","name":"BasicOrganizationPackageLicensePolicyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"organization_package_license_policy_ref01"},"m":{"org_id":"org01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"org_id":"org01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"organization_package_license_policy_ref01"}}],"index$":1},{"a":true,"d":{"org_id":"org01"},"i":{"ref":"organization_package_license_policy_ref01","srcdatavar":"organization_package_license_policy_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_package_license_policy_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"organization_package_license_policy_ref01","srcdatavar":"organization_package_license_policy_ref01_data","suffix":"_dt0"},"m":{"id":"organization_package_license_policy01","org_id":"org01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_package_license_policy_ref01"}}],"index$":3}]}, 'OrganizationPackageLicensePolicy', {"POST /orgs/{org}/license-policy/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"data","in":"body","required":false,"schema":{"required":["name","spdx_identifiers"],"type":"object","properties":{"allow_unknown_licenses":{"title":"Allow unknown licenses","type":"boolean"},"description":{"title":"Description","type":"string","maxLength":250,"minLength":1,"x-nullable":true},"name":{"title":"Name","type":"string","maxLength":100,"minLength":1},"on_violation_quarantine":{"title":"On violation quarantine","type":"boolean"},"package_query_string":{"title":"Package query string","type":"string","minLength":1,"x-nullable":true},"spdx_identifiers":{"type":"array","items":{"type":"string"},"uniqueItems":true}},"x-ref":"#/definitions/OrganizationPackageLicensePolicyRequest"},"index$":1}]},"GET /orgs/{org}/license-policy/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":1},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":2}]},"GET /orgs/{org}/license-policy/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1}]},"PATCH /orgs/{org}/license-policy/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"type":"object","properties":{"allow_unknown_licenses":{"title":"Allow unknown licenses","type":"boolean"},"description":{"title":"Description","type":"string","maxLength":250,"minLength":1,"x-nullable":true},"name":{"title":"Name","type":"string","maxLength":100,"minLength":1},"on_violation_quarantine":{"title":"On violation quarantine","type":"boolean"},"package_query_string":{"title":"Package query string","type":"string","minLength":1,"x-nullable":true},"spdx_identifiers":{"type":"array","items":{"type":"string"},"uniqueItems":true}},"x-ref":"#/definitions/OrganizationPackageLicensePolicyRequestPatch"},"index$":2}]},"PUT /orgs/{org}/license-policy/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"required":["name","spdx_identifiers"],"type":"object","properties":{"allow_unknown_licenses":{"title":"Allow unknown licenses","type":"boolean"},"description":{"title":"Description","type":"string","maxLength":250,"minLength":1,"x-nullable":true},"name":{"title":"Name","type":"string","maxLength":100,"minLength":1},"on_violation_quarantine":{"title":"On violation quarantine","type":"boolean"},"package_query_string":{"title":"Package query string","type":"string","minLength":1,"x-nullable":true},"spdx_identifiers":{"type":"array","items":{"type":"string"},"uniqueItems":true}},"x-ref":"#/definitions/OrganizationPackageLicensePolicyRequest"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const organization_package_license_policy_ref01_ent = client.OrganizationPackageLicensePolicy()
    let organization_package_license_policy_ref01_data = setup.data.new.organization_package_license_policy['organization_package_license_policy_ref01']
    organization_package_license_policy_ref01_data['org_id'] = setup.idmap['org01']

    organization_package_license_policy_ref01_data = (await organization_package_license_policy_ref01_ent.create(organization_package_license_policy_ref01_data)).data()
    assert(null != organization_package_license_policy_ref01_data.id)


    // LIST
    const organization_package_license_policy_ref01_match: any = {}
    organization_package_license_policy_ref01_match['org_id'] = setup.idmap['org01']

    const organization_package_license_policy_ref01_list = (await organization_package_license_policy_ref01_ent.list(organization_package_license_policy_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(organization_package_license_policy_ref01_list, { id: organization_package_license_policy_ref01_data.id })))


    // UPDATE
    const organization_package_license_policy_ref01_data_up0: any = {}
    organization_package_license_policy_ref01_data_up0.id = organization_package_license_policy_ref01_data.id
    organization_package_license_policy_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const organization_package_license_policy_ref01_markdef_up0 = { name: 'description', value: 'Mark01-organization_package_license_policy_ref01_' + setup.now }
    ;(organization_package_license_policy_ref01_data_up0 as any)[organization_package_license_policy_ref01_markdef_up0.name] = organization_package_license_policy_ref01_markdef_up0.value

    const organization_package_license_policy_ref01_resdata_up0 = (await organization_package_license_policy_ref01_ent.update(organization_package_license_policy_ref01_data_up0)).data()
    assert(organization_package_license_policy_ref01_resdata_up0.id === organization_package_license_policy_ref01_data_up0.id)

    assert((organization_package_license_policy_ref01_resdata_up0 as any)[organization_package_license_policy_ref01_markdef_up0.name] === organization_package_license_policy_ref01_markdef_up0.value)


    // LOAD
    const organization_package_license_policy_ref01_match_dt0: any = {}
    organization_package_license_policy_ref01_match_dt0.id = organization_package_license_policy_ref01_data.id
    const organization_package_license_policy_ref01_data_dt0 = (await organization_package_license_policy_ref01_ent.load(organization_package_license_policy_ref01_match_dt0)).data()
    assert(organization_package_license_policy_ref01_data_dt0.id === organization_package_license_policy_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization_package_license_policy/OrganizationPackageLicensePolicyTestData.json')

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
    ['organization_package_license_policy01','organization_package_license_policy02','organization_package_license_policy03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_ORGANIZATION_PACKAGE_LICENSE_POLICY_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_ORGANIZATION_PACKAGE_LICENSE_POLICY_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_PACKAGE_LICENSE_POLICY_ENTID']
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
  
