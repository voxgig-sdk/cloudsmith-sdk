
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
  Validate,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class ValidateEntity extends CloudsmithEntityBase<Validate> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'validate'
    this.name_ = 'validate'
    this.Name = 'Validate'
  }


  make(this: ValidateEntity) {
    return new ValidateEntity(this._client, this.entopts())
  }







}


export {
  ValidateEntity
}
