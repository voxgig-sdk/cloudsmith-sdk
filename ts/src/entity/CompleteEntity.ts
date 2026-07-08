
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
  Complete,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class CompleteEntity extends CloudsmithEntityBase<Complete> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'complete'
    this.name_ = 'complete'
    this.Name = 'Complete'
  }


  make(this: CompleteEntity) {
    return new CompleteEntity(this._client, this.entopts())
  }







}


export {
  CompleteEntity
}
