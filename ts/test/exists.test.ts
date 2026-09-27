
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudsmithSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloudsmithSDK.test()
    equal(testsdk instanceof CloudsmithSDK, true,
      'CloudsmithSDK.test() must return a client synchronously')
  })

})
