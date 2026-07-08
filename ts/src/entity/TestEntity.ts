
import { inspect } from 'node:util'

import { CloudsmithEntityBase } from '../CloudsmithEntityBase'

import type {
  CloudsmithSDK,
} from '../CloudsmithSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'

import type {
  Test,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class TestEntity extends CloudsmithEntityBase<Test> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'test'
    this.name_ = 'test'
    this.Name = 'Test'
  }


  make(this: TestEntity) {
    return new TestEntity(this._client, this.entopts())
  }







}


export {
  TestEntity
}
