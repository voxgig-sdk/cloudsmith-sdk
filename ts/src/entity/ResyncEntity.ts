
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
  Resync,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class ResyncEntity extends CloudsmithEntityBase<Resync> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'resync'
    this.name_ = 'resync'
    this.Name = 'Resync'
  }


  make(this: ResyncEntity) {
    return new ResyncEntity(this._client, this.entopts())
  }







}


export {
  ResyncEntity
}
