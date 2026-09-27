

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"retention_count_limit":{"a":true,"h":"Retention Count Limit","n":"retention_count_limit","r":false,"sh":"The maximum X number of packages to retain.","t":"`$INTEGER`","key$":"retention_count_limit","index$":0},"retention_days_limit":{"a":true,"h":"Retention Days Limit","n":"retention_days_limit","r":false,"sh":"The X number of days of packages to retain.","t":"`$INTEGER`","key$":"retention_days_limit","index$":1},"retention_enabled":{"a":true,"h":"Retention Enabled","n":"retention_enabled","r":false,"sh":"If checked, the retention lifecycle rules will be activated for the repository.","t":"`$BOOLEAN`","key$":"retention_enabled","index$":2},"retention_group_by_format":{"a":true,"h":"Retention Group By Format","n":"retention_group_by_format","r":false,"sh":"If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are diffe…","t":"`$BOOLEAN`","key$":"retention_group_by_format","index$":3},"retention_group_by_name":{"a":true,"h":"Retention Group By Name","n":"retention_group_by_name","r":false,"sh":"If checked, retention will apply to groups of packages by name rather than all packages.<br>For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgB…","t":"`$BOOLEAN`","key$":"retention_group_by_name","index$":4},"retention_group_by_package_type":{"a":true,"h":"Retention Group By Package Type","n":"retention_group_by_package_type","r":false,"sh":"If checked, retention will apply to packages by package type (e.g.","t":"`$BOOLEAN`","key$":"retention_group_by_package_type","index$":5},"retention_package_query_string":{"a":true,"h":"Retention Package Query String","n":"retention_package_query_string","r":false,"sh":"A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will pre…","t":"`$STRING`","key$":"retention_package_query_string","index$":6},"retention_size_limit":{"a":true,"h":"Retention Size Limit","n":"retention_size_limit","r":false,"sh":"The maximum X total size (in bytes) of packages to retain.","t":"`$INTEGER`","key$":"retention_size_limit","index$":7}},"name":"repository_retention_rule","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repos/{owner}/{repo}/retention/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/repos/{owner}/{repo}/retention/","q":{"exist":["owner","repo"]},"r":{},"s":[{"lit":"repos"},{"var":"owner"},{"var":"repo"},{"lit":"retention"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /repos/{owner}/{repo}/retention/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PATCH","o":"/repos/{owner}/{repo}/retention/","q":{"exist":["data","owner","repo"]},"r":{},"s":[{"lit":"repos"},{"var":"owner"},{"var":"repo"},{"lit":"retention"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.repo"]]},"key$":"repository_retention_rule","name__orig":"repository_retention_rule","Name":"RepositoryRetentionRule","name_":"repository_retention_rule","name-":"repository-retention-rule","NAME":"REPOSITORY_RETENTION_RULE","index$":53}, {"active":true,"entity":"repository_retention_rule","key$":"BasicRepositoryRetentionRuleFlow","kind":"basic","name":"BasicRepositoryRetentionRuleFlow","param":{},"step":[{"a":true,"d":{"owner":"owner01"},"i":{"ref":"repository_retention_rule_ref01","srcdatavar":"repository_retention_rule_ref01_data","suffix":"_up0","textfield":"retention_package_query_string"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_retention_rule_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"repository_retention_rule_ref01","srcdatavar":"repository_retention_rule_ref01_data","suffix":"_dt0"},"m":{"id":"repository_retention_rule01","owner":"owner01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_retention_rule_ref01"}}],"index$":1}]}, 'RepositoryRetentionRule', {"GET /repos/{owner}/{repo}/retention/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1}]},"PATCH /repos/{owner}/{repo}/retention/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"type":"object","properties":{"retention_count_limit":{"title":"Retention count limit","description":"The maximum X number of packages to retain.","type":"integer","maximum":10000,"minimum":0},"retention_days_limit":{"title":"Retention days limit","description":"The X number of days of packages to retain.","type":"integer","maximum":180,"minimum":0},"retention_enabled":{"title":"Retention Enabled?","description":"If checked, the retention lifecycle rules will be activated for the repository. Any packages that don't match will be deleted automatically, and the rest are retained.","type":"boolean"},"retention_group_by_format":{"title":"Retention group by format","description":"If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are different formats.","type":"boolean"},"retention_group_by_name":{"title":"Retention Group By Name?","description":"If checked, retention will apply to groups of packages by name rather than all packages.<br>For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgBs and one (1) PkgA.","type":"boolean"},"retention_group_by_package_type":{"title":"Retention Group By Package Type?","description":"If checked, retention will apply to packages by package type (e.g. by binary, by source, etc.), rather than across all package types for one or more formats. <br>For example, when retaining by a limit of 1 and you upload DebPackage 1.0 and DebSourcePackage 1.0, no packages are deleted because they are different package types, binary and source respectively.","type":"boolean"},"retention_package_query_string":{"title":"Retention package query string","description":"A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will prevent any packages tagged 'latest' from being deleted.<br>Refer to the Cloudsmith documentation for package query syntax.","type":"string","x-nullable":true},"retention_size_limit":{"title":"Retention size limit","description":"The maximum X total size (in bytes) of packages to retain.","type":"integer","maximum":21474836480,"minimum":0}},"x-ref":"#/definitions/RepositoryRetentionRulesRequestPatch"},"index$":2}]}})
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
    ['repository_retention_rule01','repository_retention_rule02','repository_retention_rule03','repo01','repo02','repo03','owner01'],
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
  
