
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


describe('RpmEntity', async () => {

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Rpm()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const rpm_ref01_ent = client.Rpm()
    let rpm_ref01_data = setup.data.new.rpm['rpm_ref01']
    rpm_ref01_data['identifier'] = setup.idmap['identifier01']
    rpm_ref01_data['owner'] = setup.idmap['owner01']

    rpm_ref01_data = await rpm_ref01_ent.create(rpm_ref01_data)
    assert(null != rpm_ref01_data)


    // LIST
    const rpm_ref01_match = {}
    rpm_ref01_match['identifier'] = setup.idmap['identifier01']
    rpm_ref01_match['owner'] = setup.idmap['owner01']

    const rpm_ref01_list = await rpm_ref01_ent.list(rpm_ref01_match)


    // UPDATE
    const rpm_ref01_data_up0 = {}
    rpm_ref01_data_up0 ['identifier'] = setup.idmap['identifier']
    rpm_ref01_data_up0 ['owner'] = setup.idmap['owner']

    const rpm_ref01_markdef_up0 = { name: 'auth_mode', value: 'Mark01-rpm_ref01_' + setup.now }
    rpm_ref01_data_up0 [rpm_ref01_markdef_up0.name] = rpm_ref01_markdef_up0.value

    const rpm_ref01_resdata_up0 = await rpm_ref01_ent.update(rpm_ref01_data_up0)
    assert(null != rpm_ref01_resdata_up0)

    assert(rpm_ref01_resdata_up0[rpm_ref01_markdef_up0.name] === rpm_ref01_markdef_up0.value)


    // LOAD
    const rpm_ref01_match_dt0 = {}
    const rpm_ref01_data_dt0 = await rpm_ref01_ent.load(rpm_ref01_match_dt0)
    assert(null != rpm_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/rpm/RpmTestData.json')

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
    ['rpm01','rpm02','rpm03','package01','package02','package03','repo01','repo02','repo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_RPM_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_RPM_ENTID']

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
  
