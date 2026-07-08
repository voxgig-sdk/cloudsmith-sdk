
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
  Reset,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class ResetEntity extends CloudsmithEntityBase<Reset> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'reset'
    this.name_ = 'reset'
    this.Name = 'Reset'
  }


  make(this: ResetEntity) {
    return new ResetEntity(this._client, this.entopts())
  }







}


export {
  ResetEntity
}
