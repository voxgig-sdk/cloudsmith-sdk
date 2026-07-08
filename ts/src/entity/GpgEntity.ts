
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
  Gpg,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class GpgEntity extends CloudsmithEntityBase<Gpg> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'gpg'
    this.name_ = 'gpg'
    this.Name = 'Gpg'
  }


  make(this: GpgEntity) {
    return new GpgEntity(this._client, this.entopts())
  }







}


export {
  GpgEntity
}
