
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
  Enable,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class EnableEntity extends CloudsmithEntityBase<Enable> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'enable'
    this.name_ = 'enable'
    this.Name = 'Enable'
  }


  make(this: EnableEntity) {
    return new EnableEntity(this._client, this.entopts())
  }







}


export {
  EnableEntity
}
