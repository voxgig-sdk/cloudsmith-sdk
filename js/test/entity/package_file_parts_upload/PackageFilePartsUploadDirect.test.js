
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { CloudsmithSDK } = require('../../..')

const {
  envOverride,
} = require('../../utility')


describe('PackageFilePartsUploadDirect', async () => {

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


  test('direct-load-package_file_parts_upload', async () => {
    const setup = directSetup({ id: 'direct01' })
    const { client, calls } = setup

    const params = {}
    if (!setup.live) {
      params.identifier = 'direct01'
      params.owner = 'direct02'
      params.repo = 'direct03'
    }

    const result = await client.direct({
      path: 'files/{owner}/{repo}/{identifier}/info',
      method: 'GET',
      params,
    })

    assert(result.ok === true)
    assert(result.status === 200)
    assert(null != result.data)

    if (!setup.live) {
      assert(result.data.id === 'direct01')
      assert(calls.length === 1)
      assert(calls[0].init.method === 'GET')
      assert(calls[0].url.includes('direct01'))
      assert(calls[0].url.includes('direct02'))
      assert(calls[0].url.includes('direct03'))
    }
  })

})



function directSetup(mockres) {
  const calls = []

  const env = envOverride({
    'CLOUDSMITH_TEST_PACKAGE_FILE_PARTS_UPLOAD_ENTID': {},
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  if (live) {
    const client = new CloudsmithSDK({
      apikey: env.CLOUDSMITH_APIKEY,
    })

    let idmap = env['CLOUDSMITH_TEST_PACKAGE_FILE_PARTS_UPLOAD_ENTID']
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
  
