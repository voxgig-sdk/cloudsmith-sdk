
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { CloudsmithSDK } = require('../../..')

const {
  envOverride,
} = require('../../utility')


describe('OrganizationGroupSyncDirect', async () => {

  test('direct-exists', async () => {
    const sdk = new CloudsmithSDK({
      // Concrete base: a live construction must satisfy any server
      // variables a templated base URL declares; overriding base with a
      // literal (as the direct flow tests do) sidesteps the requirement.
      base: 'http://localhost:8080',
      system: { fetch: async () => ({}) }
    })
    assert('function' === typeof sdk.direct)
    assert('function' === typeof sdk.prepare)
  })


  test('direct-list-organization_group_sync', async () => {
    const setup = directSetup([{ id: 'direct01' }, { id: 'direct02' }])
    const { client, calls } = setup

    const params = {}
    if (setup.live) {
      params.org_id = setup.idmap['org01']
    } else {
      params.org_id = 'direct01'
    }

    const result = await client.direct({
      path: 'orgs/{org_id}/saml-group-sync',
      method: 'GET',
      params,
    })

    assert(result.ok === true)
    assert(result.status === 200)
    assert(Array.isArray(result.data))

    if (!setup.live) {
      assert(result.data.length === 2)
      assert(calls.length === 1)
      assert(calls[0].init.method === 'GET')
      assert(calls[0].url.includes('direct01'))
    }
  })

})



function directSetup(mockres) {
  const calls = []

  const env = envOverride({
    'CLOUDSMITH_TEST_ORGANIZATION_GROUP_SYNC_ENTID': {},
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  if (live) {
    const client = new CloudsmithSDK({
      apikey: env.CLOUDSMITH_APIKEY,
    })

    let idmap = env['CLOUDSMITH_TEST_ORGANIZATION_GROUP_SYNC_ENTID']
    if ('string' === typeof idmap && idmap.startsWith('{')) {
      idmap = JSON.parse(idmap)
    }

    return { client, calls, live, idmap }
  }

  const mockFetch = async (url, init) => {
    calls.push({ url, init })
    return {
      status: 200,
      statusText: 'OK',
      headers: {},
      json: async () => (null != mockres ? mockres : { id: 'direct01' }),
    }
  }

  const client = new CloudsmithSDK({
    base: 'http://localhost:8080',
    system: { fetch: mockFetch },
  })

  return { client, calls, live, idmap: {} }
}
  
