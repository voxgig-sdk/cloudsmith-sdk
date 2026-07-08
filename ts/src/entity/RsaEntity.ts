
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
  Rsa,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class RsaEntity extends CloudsmithEntityBase<Rsa> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'rsa'
    this.name_ = 'rsa'
    this.Name = 'Rsa'
  }


  make(this: RsaEntity) {
    return new RsaEntity(this._client, this.entopts())
  }







}


export {
  RsaEntity
}
