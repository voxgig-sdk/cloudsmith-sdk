
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
  Alpine,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class AlpineEntity extends CloudsmithEntityBase<Alpine> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'alpine'
    this.name_ = 'alpine'
    this.Name = 'Alpine'
  }


  make(this: AlpineEntity) {
    return new AlpineEntity(this._client, this.entopts())
  }







}


export {
  AlpineEntity
}
