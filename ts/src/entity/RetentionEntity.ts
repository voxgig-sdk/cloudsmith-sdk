
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
  Retention,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class RetentionEntity extends CloudsmithEntityBase<Retention> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'retention'
    this.name_ = 'retention'
    this.Name = 'Retention'
  }


  make(this: RetentionEntity) {
    return new RetentionEntity(this._client, this.entopts())
  }







}


export {
  RetentionEntity
}
