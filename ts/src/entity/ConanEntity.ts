
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
  Conan,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class ConanEntity extends CloudsmithEntityBase<Conan> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'conan'
    this.name_ = 'conan'
    this.Name = 'Conan'
  }


  make(this: ConanEntity) {
    return new ConanEntity(this._client, this.entopts())
  }







}


export {
  ConanEntity
}
