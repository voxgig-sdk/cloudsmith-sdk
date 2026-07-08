
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
  Status,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class StatusEntity extends CloudsmithEntityBase<Status> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'status'
    this.name_ = 'status'
    this.Name = 'Status'
  }


  make(this: StatusEntity) {
    return new StatusEntity(this._client, this.entopts())
  }







}


export {
  StatusEntity
}
