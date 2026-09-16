

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


describe('RepositoryRetentionRuleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.RepositoryRetentionRule()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'repository_retention_rule.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"retention_count_limit","req":false,"short":"The maximum X number of packages to retain.","type":"`$INTEGER`","index$":0},{"active":true,"name":"retention_days_limit","req":false,"short":"The X number of days of packages to retain.","type":"`$INTEGER`","index$":1},{"active":true,"name":"retention_enabled","req":false,"short":"If checked, the retention lifecycle rules will be activated for the repository.","type":"`$BOOLEAN`","index$":2},{"active":true,"name":"retention_group_by_format","req":false,"short":"If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are diffe…","type":"`$BOOLEAN`","index$":3},{"active":true,"name":"retention_group_by_name","req":false,"short":"If checked, retention will apply to groups of packages by name rather than all packages.<br>For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgB…","type":"`$BOOLEAN`","index$":4},{"active":true,"name":"retention_group_by_package_type","req":false,"short":"If checked, retention will apply to packages by package type (e.g.","type":"`$BOOLEAN`","index$":5},{"active":true,"name":"retention_package_query_string","req":false,"short":"A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will pre…","type":"`$STRING`","index$":6},{"active":true,"name":"retention_size_limit","req":false,"short":"The maximum X total size (in bytes) of packages to retain.","type":"`$INTEGER`","index$":7}],"name":"repository_retention_rule","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"owner","orig":"owner","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"param","name":"repo","orig":"repo","reqd":true,"type":"`$ANY`","index$":1}]},"contract":{"id":"GET /repos/{owner}/{repo}/retention/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"repo_retention_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"repo\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved the retention rules for the repository.\",\"schema\":{\"properties\":{\"retention_count_limit\":{\"description\":\"The maximum X number of packages to retain.\",\"maximum\":10000,\"minimum\":0,\"title\":\"Retention count limit\",\"type\":\"integer\"},\"retention_days_limit\":{\"description\":\"The X number of days of packages to retain.\",\"maximum\":180,\"minimum\":0,\"title\":\"Retention days limit\",\"type\":\"integer\"},\"retention_enabled\":{\"description\":\"If checked, the retention lifecycle rules will be activated for the repository. Any packages that don't match will be deleted automatically, and the rest are retained.\",\"title\":\"Retention Enabled?\",\"type\":\"boolean\"},\"retention_group_by_format\":{\"description\":\"If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are different formats.\",\"title\":\"Retention group by format\",\"type\":\"boolean\"},\"retention_group_by_name\":{\"description\":\"If checked, retention will apply to groups of packages by name rather than all packages.<br>For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgBs and one (1) PkgA.\",\"title\":\"Retention Group By Name?\",\"type\":\"boolean\"},\"retention_group_by_package_type\":{\"description\":\"If checked, retention will apply to packages by package type (e.g. by binary, by source, etc.), rather than across all package types for one or more formats. <br>For example, when retaining by a limit of 1 and you upload DebPackage 1.0 and DebSourcePackage 1.0, no packages are deleted because they are different package types, binary and source respectively.\",\"title\":\"Retention Group By Package Type?\",\"type\":\"boolean\"},\"retention_package_query_string\":{\"description\":\"A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will prevent any packages tagged 'latest' from being deleted.<br>Refer to the Cloudsmith documentation for package query syntax.\",\"title\":\"Retention package query string\",\"type\":\"string\"},\"retention_size_limit\":{\"description\":\"The maximum X total size (in bytes) of packages to retain.\",\"maximum\":21474836480,\"minimum\":0,\"title\":\"Retention size limit\",\"type\":\"integer\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Owner namespace or repository not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/repos/{owner}/{repo}/retention/","segments":[{"lit":"repos"},{"var":"owner"},{"var":"repo"},{"lit":"retention"}],"select":{"exist":["owner","repo"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"owner","orig":"owner","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"param","name":"repo","orig":"repo","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"kind":"query","name":"data","orig":"data","reqd":false,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PATCH /repos/{owner}/{repo}/retention/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"repo_retention_partial_update\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"repo\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"retention_count_limit\":{\"description\":\"The maximum X number of packages to retain.\",\"maximum\":10000,\"minimum\":0,\"title\":\"Retention count limit\",\"type\":\"integer\"},\"retention_days_limit\":{\"description\":\"The X number of days of packages to retain.\",\"maximum\":180,\"minimum\":0,\"title\":\"Retention days limit\",\"type\":\"integer\"},\"retention_enabled\":{\"description\":\"If checked, the retention lifecycle rules will be activated for the repository. Any packages that don't match will be deleted automatically, and the rest are retained.\",\"title\":\"Retention Enabled?\",\"type\":\"boolean\"},\"retention_group_by_format\":{\"description\":\"If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are different formats.\",\"title\":\"Retention group by format\",\"type\":\"boolean\"},\"retention_group_by_name\":{\"description\":\"If checked, retention will apply to groups of packages by name rather than all packages.<br>For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgBs and one (1) PkgA.\",\"title\":\"Retention Group By Name?\",\"type\":\"boolean\"},\"retention_group_by_package_type\":{\"description\":\"If checked, retention will apply to packages by package type (e.g. by binary, by source, etc.), rather than across all package types for one or more formats. <br>For example, when retaining by a limit of 1 and you upload DebPackage 1.0 and DebSourcePackage 1.0, no packages are deleted because they are different package types, binary and source respectively.\",\"title\":\"Retention Group By Package Type?\",\"type\":\"boolean\"},\"retention_package_query_string\":{\"description\":\"A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will prevent any packages tagged 'latest' from being deleted.<br>Refer to the Cloudsmith documentation for package query syntax.\",\"title\":\"Retention package query string\",\"type\":\"string\"},\"retention_size_limit\":{\"description\":\"The maximum X total size (in bytes) of packages to retain.\",\"maximum\":21474836480,\"minimum\":0,\"title\":\"Retention size limit\",\"type\":\"integer\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Updated the retention rules for the repository.\",\"schema\":{\"properties\":{\"retention_count_limit\":{\"description\":\"The maximum X number of packages to retain.\",\"maximum\":10000,\"minimum\":0,\"title\":\"Retention count limit\",\"type\":\"integer\"},\"retention_days_limit\":{\"description\":\"The X number of days of packages to retain.\",\"maximum\":180,\"minimum\":0,\"title\":\"Retention days limit\",\"type\":\"integer\"},\"retention_enabled\":{\"description\":\"If checked, the retention lifecycle rules will be activated for the repository. Any packages that don't match will be deleted automatically, and the rest are retained.\",\"title\":\"Retention Enabled?\",\"type\":\"boolean\"},\"retention_group_by_format\":{\"description\":\"If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are different formats.\",\"title\":\"Retention group by format\",\"type\":\"boolean\"},\"retention_group_by_name\":{\"description\":\"If checked, retention will apply to groups of packages by name rather than all packages.<br>For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgBs and one (1) PkgA.\",\"title\":\"Retention Group By Name?\",\"type\":\"boolean\"},\"retention_group_by_package_type\":{\"description\":\"If checked, retention will apply to packages by package type (e.g. by binary, by source, etc.), rather than across all package types for one or more formats. <br>For example, when retaining by a limit of 1 and you upload DebPackage 1.0 and DebSourcePackage 1.0, no packages are deleted because they are different package types, binary and source respectively.\",\"title\":\"Retention Group By Package Type?\",\"type\":\"boolean\"},\"retention_package_query_string\":{\"description\":\"A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will prevent any packages tagged 'latest' from being deleted.<br>Refer to the Cloudsmith documentation for package query syntax.\",\"title\":\"Retention package query string\",\"type\":\"string\"},\"retention_size_limit\":{\"description\":\"The maximum X total size (in bytes) of packages to retain.\",\"maximum\":21474836480,\"minimum\":0,\"title\":\"Retention size limit\",\"type\":\"integer\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Owner namespace or repository not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"PATCH","orig":"/repos/{owner}/{repo}/retention/","segments":[{"lit":"repos"},{"var":"owner"},{"var":"repo"},{"lit":"retention"}],"select":{"exist":["data","owner","repo"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["repo"]]},"key$":"repository_retention_rule","name__orig":"repository_retention_rule","Name":"RepositoryRetentionRule","name_":"repository_retention_rule","name-":"repository-retention-rule","NAME":"REPOSITORY_RETENTION_RULE","index$":88}, {"active":true,"entity":"repository_retention_rule","key$":"BasicRepositoryRetentionRuleFlow","kind":"basic","name":"BasicRepositoryRetentionRuleFlow","param":{},"step":[{"active":true,"data":{"owner":"owner01"},"input":{"ref":"repository_retention_rule_ref01","srcdatavar":"repository_retention_rule_ref01_data","suffix":"_up0","textfield":"retention_package_query_string"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_retention_rule_ref01"}}],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"repository_retention_rule_ref01","srcdatavar":"repository_retention_rule_ref01_data","suffix":"_dt0"},"match":{"id":"repository_retention_rule01","owner":"owner01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_retention_rule_ref01"}}],"index$":1}]}, 'RepositoryRetentionRule')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let repository_retention_rule_ref01_data = Object.values(setup.data.existing.repository_retention_rule)[0] as any

    // UPDATE
    const repository_retention_rule_ref01_ent = client.RepositoryRetentionRule()
    const repository_retention_rule_ref01_data_up0: any = {}
    repository_retention_rule_ref01_data_up0 ['owner'] = setup.idmap['owner']

    const repository_retention_rule_ref01_markdef_up0 = { name: 'retention_package_query_string', value: 'Mark01-repository_retention_rule_ref01_' + setup.now }
    ;(repository_retention_rule_ref01_data_up0 as any)[repository_retention_rule_ref01_markdef_up0.name] = repository_retention_rule_ref01_markdef_up0.value

    const repository_retention_rule_ref01_resdata_up0 = (await repository_retention_rule_ref01_ent.update(repository_retention_rule_ref01_data_up0)).data()
    assert(null != repository_retention_rule_ref01_resdata_up0)

    assert((repository_retention_rule_ref01_resdata_up0 as any)[repository_retention_rule_ref01_markdef_up0.name] === repository_retention_rule_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/repository_retention_rule/RepositoryRetentionRuleTestData.json')

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
    ['repository_retention_rule01','repository_retention_rule02','repository_retention_rule03','repo01','repo02','repo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_REPOSITORY_RETENTION_RULE_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_REPOSITORY_RETENTION_RULE_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_RETENTION_RULE_ENTID']
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
  
