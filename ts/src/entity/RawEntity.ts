
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
  Raw,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class RawEntity extends CloudsmithEntityBase<Raw> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'raw'
    this.name_ = 'raw'
    this.Name = 'Raw'
  }


  make(this: RawEntity) {
    return new RawEntity(this._client, this.entopts())
  }







}


export {
  RawEntity
}
