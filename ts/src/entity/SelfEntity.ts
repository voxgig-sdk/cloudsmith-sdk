
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
  Self,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class SelfEntity extends CloudsmithEntityBase<Self> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'self'
    this.name_ = 'self'
    this.Name = 'Self'
  }


  make(this: SelfEntity) {
    return new SelfEntity(this._client, this.entopts())
  }







}


export {
  SelfEntity
}
