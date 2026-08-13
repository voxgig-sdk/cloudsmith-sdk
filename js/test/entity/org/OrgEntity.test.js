
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { CloudsmithSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('OrgEntity', async () => {

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Org()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
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
    const org_ref01_match = {}

    const org_ref01_list = await org_ref01_ent.list(org_ref01_match)


    // UPDATE
    const org_ref01_data_up0 = {}

    const org_ref01_markdef_up0 = { name: 'country', value: 'Mark01-org_ref01_' + setup.now }
    org_ref01_data_up0 [org_ref01_markdef_up0.name] = org_ref01_markdef_up0.value

    const org_ref01_resdata_up0 = await org_ref01_ent.update(org_ref01_data_up0)
    assert(null != org_ref01_resdata_up0)

    assert(org_ref01_resdata_up0[org_ref01_markdef_up0.name] === org_ref01_markdef_up0.value)


    // LOAD
    const org_ref01_match_dt0 = {}
    const org_ref01_data_dt0 = await org_ref01_ent.load(org_ref01_match_dt0)
    assert(null != org_ref01_data_dt0)



    // LIST
    const org_ref01_match_rt0 = {}

    const org_ref01_list_rt0 = await org_ref01_ent.list(org_ref01_match_rt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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

  const env = envOverride({
    'CLOUDSMITH_TEST_ORG_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_ORG_ENTID']

  if ('TRUE' === env.CLOUDSMITH_TEST_LIVE) {
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
    now: Date.now(),
  }

  return setup
}
  
