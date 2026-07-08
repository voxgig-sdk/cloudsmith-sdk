
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
  X509Ecdsa,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class X509EcdsaEntity extends CloudsmithEntityBase<X509Ecdsa> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'x509_ecdsa'
    this.name_ = 'x509_ecdsa'
    this.Name = 'X509Ecdsa'
  }


  make(this: X509EcdsaEntity) {
    return new X509EcdsaEntity(this._client, this.entopts())
  }







}


export {
  X509EcdsaEntity
}
