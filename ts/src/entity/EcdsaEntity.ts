
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
  Ecdsa,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class EcdsaEntity extends CloudsmithEntityBase<Ecdsa> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'ecdsa'
    this.name_ = 'ecdsa'
    this.Name = 'Ecdsa'
  }


  make(this: EcdsaEntity) {
    return new EcdsaEntity(this._client, this.entopts())
  }







}


export {
  EcdsaEntity
}
