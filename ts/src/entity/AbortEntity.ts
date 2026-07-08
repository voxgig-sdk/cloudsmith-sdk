
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
  Abort,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class AbortEntity extends CloudsmithEntityBase<Abort> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'abort'
    this.name_ = 'abort'
    this.Name = 'Abort'
  }


  make(this: AbortEntity) {
    return new AbortEntity(this._client, this.entopts())
  }







}


export {
  AbortEntity
}
