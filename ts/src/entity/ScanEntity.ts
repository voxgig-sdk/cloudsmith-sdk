
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
  Scan,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class ScanEntity extends CloudsmithEntityBase<Scan> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'scan'
    this.name_ = 'scan'
    this.Name = 'Scan'
  }


  make(this: ScanEntity) {
    return new ScanEntity(this._client, this.entopts())
  }







}


export {
  ScanEntity
}
