
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


describe('DynamicMappingEntity', async () => {

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.DynamicMapping()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dynamic_mapping_ref01_data = Object.values(setup.data.existing.dynamic_mapping)[0]

    // LIST
    const dynamic_mapping_ref01_ent = client.DynamicMapping()
    const dynamic_mapping_ref01_match = {}
    dynamic_mapping_ref01_match['org_id'] = setup.idmap['org01']
    dynamic_mapping_ref01_match['provider_setting'] = setup.idmap['provider_setting01']

    const dynamic_mapping_ref01_list = await dynamic_mapping_ref01_ent.list(dynamic_mapping_ref01_match)


    // LOAD
    const dynamic_mapping_ref01_match_dt0 = {}
    const dynamic_mapping_ref01_data_dt0 = await dynamic_mapping_ref01_ent.load(dynamic_mapping_ref01_match_dt0)
    assert(null != dynamic_mapping_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_DYNAMIC_MAPPING_ENTID']

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
  
