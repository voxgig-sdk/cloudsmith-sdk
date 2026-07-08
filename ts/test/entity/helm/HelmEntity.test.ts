
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


describe('HelmEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Helm()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'helm.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_HELM_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const helm_ref01_ent = client.Helm()
    let helm_ref01_data = setup.data.new.helm['helm_ref01']
    helm_ref01_data['identifier'] = setup.idmap['identifier01']
    helm_ref01_data['owner'] = setup.idmap['owner01']

    helm_ref01_data = await helm_ref01_ent.create(helm_ref01_data)
    assert(null != helm_ref01_data)


    // LIST
    const helm_ref01_match: any = {}
    helm_ref01_match['identifier'] = setup.idmap['identifier01']
    helm_ref01_match['owner'] = setup.idmap['owner01']

    const helm_ref01_list = await helm_ref01_ent.list(helm_ref01_match)

    assert(!isempty(select(helm_ref01_list, { id: helm_ref01_data.id })))


    // UPDATE
    const helm_ref01_data_up0: any = {}
    helm_ref01_data_up0 ['identifier'] = setup.idmap['identifier']
    helm_ref01_data_up0 ['owner'] = setup.idmap['owner']

    const helm_ref01_markdef_up0 = { name: 'auth_mode', value: 'Mark01-helm_ref01_' + setup.now }
    ;(helm_ref01_data_up0 as any)[helm_ref01_markdef_up0.name] = helm_ref01_markdef_up0.value

    const helm_ref01_resdata_up0 = await helm_ref01_ent.update(helm_ref01_data_up0)
    assert(null != helm_ref01_resdata_up0)

    assert((helm_ref01_resdata_up0 as any)[helm_ref01_markdef_up0.name] === helm_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/helm/HelmTestData.json')

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
    ['helm01','helm02','helm03','package01','package02','package03','repo01','repo02','repo03'],
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
  const idmapEnvVal = process.env['CLOUDSMITH_TEST_HELM_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'CLOUDSMITH_TEST_HELM_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_HELM_ENTID']

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
  
