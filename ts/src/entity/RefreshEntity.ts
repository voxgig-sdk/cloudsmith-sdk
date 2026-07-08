
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
  Refresh,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class RefreshEntity extends CloudsmithEntityBase<Refresh> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'refresh'
    this.name_ = 'refresh'
    this.Name = 'Refresh'
  }


  make(this: RefreshEntity) {
    return new RefreshEntity(this._client, this.entopts())
  }







}


export {
  RefreshEntity
}
