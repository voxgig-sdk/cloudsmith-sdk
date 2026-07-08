
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { CloudsmithSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('PackageDenyPolicyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.PackageDenyPolicy()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'package_deny_policy.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_PACKAGE_DENY_POLICY_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const package_deny_policy_ref01_ent = client.PackageDenyPolicy()
    let package_deny_policy_ref01_data = setup.data.new.package_deny_policy['package_deny_policy_ref01']
    package_deny_policy_ref01_data['org_id'] = setup.idmap['org01']

    package_deny_policy_ref01_data = await package_deny_policy_ref01_ent.create(package_deny_policy_ref01_data)
    assert(null != package_deny_policy_ref01_data)


    // LIST
    const package_deny_policy_ref01_match: any = {}
    package_deny_policy_ref01_match['org_id'] = setup.idmap['org01']

    const package_deny_policy_ref01_list = await package_deny_policy_ref01_ent.list(package_deny_policy_ref01_match)

    assert(!isempty(select(package_deny_policy_ref01_list, { id: package_deny_policy_ref01_data.id })))


    // UPDATE
    const package_deny_policy_ref01_data_up0: any = {}
    package_deny_policy_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const package_deny_policy_ref01_markdef_up0 = { name: 'action', value: 'Mark01-package_deny_policy_ref01_' + setup.now }
    ;(package_deny_policy_ref01_data_up0 as any)[package_deny_policy_ref01_markdef_up0.name] = package_deny_policy_ref01_markdef_up0.value

    const package_deny_policy_ref01_resdata_up0 = await package_deny_policy_ref01_ent.update(package_deny_policy_ref01_data_up0)
    assert(null != package_deny_policy_ref01_resdata_up0)

    assert((package_deny_policy_ref01_resdata_up0 as any)[package_deny_policy_ref01_markdef_up0.name] === package_deny_policy_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/package_deny_policy/PackageDenyPolicyTestData.json')

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
    ['package_deny_policy01','package_deny_policy02','package_deny_policy03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['CLOUDSMITH_TEST_PACKAGE_DENY_POLICY_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'CLOUDSMITH_TEST_PACKAGE_DENY_POLICY_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_PACKAGE_DENY_POLICY_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  if (live) {
    client = new CloudsmithSDK(merge([
      {
        apikey: env.CLOUDSMITH_APIKEY,
      },
      extra
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
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
