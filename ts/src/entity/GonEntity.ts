
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
  Gon,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class GonEntity extends CloudsmithEntityBase<Gon> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'gon'
    this.name_ = 'gon'
    this.Name = 'Gon'
  }


  make(this: GonEntity) {
    return new GonEntity(this._client, this.entopts())
  }







}


export {
  GonEntity
}
