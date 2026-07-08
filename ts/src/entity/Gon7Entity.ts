
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
  Gon7,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class Gon7Entity extends CloudsmithEntityBase<Gon7> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'gon7'
    this.name_ = 'gon7'
    this.Name = 'Gon7'
  }


  make(this: Gon7Entity) {
    return new Gon7Entity(this._client, this.entopts())
  }







}


export {
  Gon7Entity
}
