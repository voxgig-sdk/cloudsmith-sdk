
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
  Cocoapod,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class CocoapodEntity extends CloudsmithEntityBase<Cocoapod> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'cocoapod'
    this.name_ = 'cocoapod'
    this.Name = 'Cocoapod'
  }


  make(this: CocoapodEntity) {
    return new CocoapodEntity(this._client, this.entopts())
  }







}


export {
  CocoapodEntity
}
