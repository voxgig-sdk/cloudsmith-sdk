
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
  Limit,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class LimitEntity extends CloudsmithEntityBase<Limit> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'limit'
    this.name_ = 'limit'
    this.Name = 'Limit'
  }


  make(this: LimitEntity) {
    return new LimitEntity(this._client, this.entopts())
  }







}


export {
  LimitEntity
}
