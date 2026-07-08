
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
  P2n2,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class P2n2Entity extends CloudsmithEntityBase<P2n2> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'p2n2'
    this.name_ = 'p2n2'
    this.Name = 'P2n2'
  }


  make(this: P2n2Entity) {
    return new P2n2Entity(this._client, this.entopts())
  }







}


export {
  P2n2Entity
}
