
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
  Luarock,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class LuarockEntity extends CloudsmithEntityBase<Luarock> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'luarock'
    this.name_ = 'luarock'
    this.Name = 'Luarock'
  }


  make(this: LuarockEntity) {
    return new LuarockEntity(this._client, this.entopts())
  }







}


export {
  LuarockEntity
}
