
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
  TransferRegion,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class TransferRegionEntity extends CloudsmithEntityBase<TransferRegion> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'transfer_region'
    this.name_ = 'transfer_region'
    this.Name = 'TransferRegion'
  }


  make(this: TransferRegionEntity) {
    return new TransferRegionEntity(this._client, this.entopts())
  }







}


export {
  TransferRegionEntity
}
