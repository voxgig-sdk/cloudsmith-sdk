
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
  Disable,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class DisableEntity extends CloudsmithEntityBase<Disable> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'disable'
    this.name_ = 'disable'
    this.Name = 'Disable'
  }


  make(this: DisableEntity) {
    return new DisableEntity(this._client, this.entopts())
  }







}


export {
  DisableEntity
}
