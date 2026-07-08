
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
  Move,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class MoveEntity extends CloudsmithEntityBase<Move> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'move'
    this.name_ = 'move'
    this.Name = 'Move'
  }


  make(this: MoveEntity) {
    return new MoveEntity(this._client, this.entopts())
  }







}


export {
  MoveEntity
}
