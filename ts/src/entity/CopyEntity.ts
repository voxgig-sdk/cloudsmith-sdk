
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
  Copy,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class CopyEntity extends CloudsmithEntityBase<Copy> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'copy'
    this.name_ = 'copy'
    this.Name = 'Copy'
  }


  make(this: CopyEntity) {
    return new CopyEntity(this._client, this.entopts())
  }







}


export {
  CopyEntity
}
