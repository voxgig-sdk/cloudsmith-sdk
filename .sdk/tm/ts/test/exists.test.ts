
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudsmithSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CloudsmithSDK.test()
    equal(null !== testsdk, true)
  })

})
