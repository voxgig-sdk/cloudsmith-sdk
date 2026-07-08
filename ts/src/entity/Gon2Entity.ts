
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
  Gon2,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class Gon2Entity extends CloudsmithEntityBase<Gon2> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'gon2'
    this.name_ = 'gon2'
    this.Name = 'Gon2'
  }


  make(this: Gon2Entity) {
    return new Gon2Entity(this._client, this.entopts())
  }







}


export {
  Gon2Entity
}
