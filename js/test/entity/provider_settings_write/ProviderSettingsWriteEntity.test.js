
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


describe('ProviderSettingsWriteEntity', async () => {

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.ProviderSettingsWrite()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const provider_settings_write_ref01_ent = client.ProviderSettingsWrite()
    let provider_settings_write_ref01_data = setup.data.new.provider_settings_write['provider_settings_write_ref01']
    provider_settings_write_ref01_data['org_id'] = setup.idmap['org01']

    provider_settings_write_ref01_data = await provider_settings_write_ref01_ent.create(provider_settings_write_ref01_data)
    assert(null != provider_settings_write_ref01_data)


    // UPDATE
    const provider_settings_write_ref01_data_up0 = {}
    provider_settings_write_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const provider_settings_write_ref01_markdef_up0 = { name: 'mapping_claim', value: 'Mark01-provider_settings_write_ref01_' + setup.now }
    provider_settings_write_ref01_data_up0 [provider_settings_write_ref01_markdef_up0.name] = provider_settings_write_ref01_markdef_up0.value

    const provider_settings_write_ref01_resdata_up0 = await provider_settings_write_ref01_ent.update(provider_settings_write_ref01_data_up0)
    assert(null != provider_settings_write_ref01_resdata_up0)

    assert(provider_settings_write_ref01_resdata_up0[provider_settings_write_ref01_markdef_up0.name] === provider_settings_write_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/provider_settings_write/ProviderSettingsWriteTestData.json')

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
    ['provider_settings_write01','provider_settings_write02','provider_settings_write03','org01','org02','org03','org01','org02','org03','openid_connect01','openid_connect02','openid_connect03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID']

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
  
