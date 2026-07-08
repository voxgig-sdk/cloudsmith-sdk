
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
  Sync,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class SyncEntity extends CloudsmithEntityBase<Sync> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'sync'
    this.name_ = 'sync'
    this.Name = 'Sync'
  }


  make(this: SyncEntity) {
    return new SyncEntity(this._client, this.entopts())
  }







}


export {
  SyncEntity
}
