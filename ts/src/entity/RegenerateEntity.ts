
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
  Regenerate,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class RegenerateEntity extends CloudsmithEntityBase<Regenerate> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'regenerate'
    this.name_ = 'regenerate'
    this.Name = 'Regenerate'
  }


  make(this: RegenerateEntity) {
    return new RegenerateEntity(this._client, this.entopts())
  }







}


export {
  RegenerateEntity
}
