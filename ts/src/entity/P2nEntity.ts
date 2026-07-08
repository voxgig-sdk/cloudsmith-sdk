
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
  P2n,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class P2nEntity extends CloudsmithEntityBase<P2n> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'p2n'
    this.name_ = 'p2n'
    this.Name = 'P2n'
  }


  make(this: P2nEntity) {
    return new P2nEntity(this._client, this.entopts())
  }







}


export {
  P2nEntity
}
