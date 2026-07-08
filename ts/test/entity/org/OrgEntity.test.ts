
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


describe('OrgEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Org()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'org.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_ORG_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const org_ref01_ent = client.Org()
    let org_ref01_data = setup.data.new.org['org_ref01']
    org_ref01_data['org'] = setup.idmap['org01']

    org_ref01_data = await org_ref01_ent.create(org_ref01_data)
    assert(null != org_ref01_data)


    // LIST
    const org_ref01_match: any = {}

    const org_ref01_list = await org_ref01_ent.list(org_ref01_match)

    assert(!isempty(select(org_ref01_list, { id: org_ref01_data.id })))


    // UPDATE
    const org_ref01_data_up0: any = {}

    const org_ref01_markdef_up0 = { name: 'country', value: 'Mark01-org_ref01_' + setup.now }
    ;(org_ref01_data_up0 as any)[org_ref01_markdef_up0.name] = org_ref01_markdef_up0.value

    const org_ref01_resdata_up0 = await org_ref01_ent.update(org_ref01_data_up0)
    assert(null != org_ref01_resdata_up0)

    assert((org_ref01_resdata_up0 as any)[org_ref01_markdef_up0.name] === org_ref01_markdef_up0.value)



    // REMOVE
    const org_ref01_match_rm0: any = { id: org_ref01_data.id }
    await org_ref01_ent.remove(org_ref01_match_rm0)
  

    // LIST
    const org_ref01_match_rt0: any = {}

    const org_ref01_list_rt0 = await org_ref01_ent.list(org_ref01_match_rt0)

    assert(isempty(select(org_ref01_list_rt0, { id: org_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/org/OrgTestData.json')

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
    ['org01','org02','org03','deny_policy01','deny_policy02','deny_policy03','invite01','invite02','invite03','license_policy01','license_policy02','license_policy03','member01','member02','member03','openid_connect01','openid_connect02','openid_connect03','saml_group_sync01','saml_group_sync02','saml_group_sync03','service01','service02','service03','team01','team02','team03','vulnerability_policy01','vulnerability_policy02','vulnerability_policy03'],
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
  const idmapEnvVal = process.env['CLOUDSMITH_TEST_ORG_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'CLOUDSMITH_TEST_ORG_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_ORG_ENTID']

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
  
