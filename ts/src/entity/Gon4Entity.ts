
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
  Gon4,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class Gon4Entity extends CloudsmithEntityBase<Gon4> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'gon4'
    this.name_ = 'gon4'
    this.Name = 'Gon4'
  }


  make(this: Gon4Entity) {
    return new Gon4Entity(this._client, this.entopts())
  }







}


export {
  Gon4Entity
}
