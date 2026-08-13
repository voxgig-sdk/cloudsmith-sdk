
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


describe('UserAuthenticationTokenEntity', async () => {

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.UserAuthenticationToken()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const user_authentication_token_ref01_ent = client.UserAuthenticationToken()
    let user_authentication_token_ref01_data = setup.data.new.user_authentication_token['user_authentication_token_ref01']

    user_authentication_token_ref01_data = await user_authentication_token_ref01_ent.create(user_authentication_token_ref01_data)
    assert(null != user_authentication_token_ref01_data)


    // UPDATE
    const user_authentication_token_ref01_data_up0 = {}

    const user_authentication_token_ref01_markdef_up0 = { name: 'created', value: 'Mark01-user_authentication_token_ref01_' + setup.now }
    user_authentication_token_ref01_data_up0 [user_authentication_token_ref01_markdef_up0.name] = user_authentication_token_ref01_markdef_up0.value

    const user_authentication_token_ref01_resdata_up0 = await user_authentication_token_ref01_ent.update(user_authentication_token_ref01_data_up0)
    assert(null != user_authentication_token_ref01_resdata_up0)

    assert(user_authentication_token_ref01_resdata_up0[user_authentication_token_ref01_markdef_up0.name] === user_authentication_token_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/user_authentication_token/UserAuthenticationTokenTestData.json')

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
    ['user_authentication_token01','user_authentication_token02','user_authentication_token03','token01','token02','token03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_USER_AUTHENTICATION_TOKEN_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_USER_AUTHENTICATION_TOKEN_ENTID']

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
  
