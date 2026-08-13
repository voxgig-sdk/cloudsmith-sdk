
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


describe('RepositoryWebhookEntity', async () => {

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.RepositoryWebhook()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const repository_webhook_ref01_ent = client.RepositoryWebhook()
    let repository_webhook_ref01_data = setup.data.new.repository_webhook['repository_webhook_ref01']
    repository_webhook_ref01_data['identifier'] = setup.idmap['identifier01']
    repository_webhook_ref01_data['owner'] = setup.idmap['owner01']
    repository_webhook_ref01_data['repo'] = setup.idmap['repo01']

    repository_webhook_ref01_data = await repository_webhook_ref01_ent.create(repository_webhook_ref01_data)
    assert(null != repository_webhook_ref01_data)


    // LIST
    const repository_webhook_ref01_match = {}
    repository_webhook_ref01_match['identifier'] = setup.idmap['identifier01']
    repository_webhook_ref01_match['owner'] = setup.idmap['owner01']
    repository_webhook_ref01_match['repo'] = setup.idmap['repo01']

    const repository_webhook_ref01_list = await repository_webhook_ref01_ent.list(repository_webhook_ref01_match)


    // UPDATE
    const repository_webhook_ref01_data_up0 = {}
    repository_webhook_ref01_data_up0 ['owner'] = setup.idmap['owner']
    repository_webhook_ref01_data_up0 ['repo'] = setup.idmap['repo']

    const repository_webhook_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-repository_webhook_ref01_' + setup.now }
    repository_webhook_ref01_data_up0 [repository_webhook_ref01_markdef_up0.name] = repository_webhook_ref01_markdef_up0.value

    const repository_webhook_ref01_resdata_up0 = await repository_webhook_ref01_ent.update(repository_webhook_ref01_data_up0)
    assert(null != repository_webhook_ref01_resdata_up0)

    assert(repository_webhook_ref01_resdata_up0[repository_webhook_ref01_markdef_up0.name] === repository_webhook_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/repository_webhook/RepositoryWebhookTestData.json')

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
    ['repository_webhook01','repository_webhook02','repository_webhook03','webhook01','webhook02','webhook03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID']

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
  
