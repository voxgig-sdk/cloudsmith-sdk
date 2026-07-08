
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
  X509Rsa,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class X509RsaEntity extends CloudsmithEntityBase<X509Rsa> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'x509_rsa'
    this.name_ = 'x509_rsa'
    this.Name = 'X509Rsa'
  }


  make(this: X509RsaEntity) {
    return new X509RsaEntity(this._client, this.entopts())
  }







}


export {
  X509RsaEntity
}
