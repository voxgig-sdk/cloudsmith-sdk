
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
  Quarantine,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class QuarantineEntity extends CloudsmithEntityBase<Quarantine> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'quarantine'
    this.name_ = 'quarantine'
    this.Name = 'Quarantine'
  }


  make(this: QuarantineEntity) {
    return new QuarantineEntity(this._client, this.entopts())
  }







}


export {
  QuarantineEntity
}
