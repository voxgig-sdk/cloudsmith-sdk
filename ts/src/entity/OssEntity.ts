
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
  Oss,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class OssEntity extends CloudsmithEntityBase<Oss> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'oss'
    this.name_ = 'oss'
    this.Name = 'Oss'
  }


  make(this: OssEntity) {
    return new OssEntity(this._client, this.entopts())
  }







}


export {
  OssEntity
}
