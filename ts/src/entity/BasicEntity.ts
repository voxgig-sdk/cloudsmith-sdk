
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
  Basic,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class BasicEntity extends CloudsmithEntityBase<Basic> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'basic'
    this.name_ = 'basic'
    this.Name = 'Basic'
  }


  make(this: BasicEntity) {
    return new BasicEntity(this._client, this.entopts())
  }







}


export {
  BasicEntity
}
