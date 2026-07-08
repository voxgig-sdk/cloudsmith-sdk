
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
  Info,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class InfoEntity extends CloudsmithEntityBase<Info> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'info'
    this.name_ = 'info'
    this.Name = 'Info'
  }


  make(this: InfoEntity) {
    return new InfoEntity(this._client, this.entopts())
  }







}


export {
  InfoEntity
}
