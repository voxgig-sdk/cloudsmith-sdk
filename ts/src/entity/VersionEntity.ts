
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
  Version,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class VersionEntity extends CloudsmithEntityBase<Version> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'version'
    this.name_ = 'version'
    this.Name = 'Version'
  }


  make(this: VersionEntity) {
    return new VersionEntity(this._client, this.entopts())
  }







}


export {
  VersionEntity
}
