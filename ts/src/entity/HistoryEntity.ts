
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
  History,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class HistoryEntity extends CloudsmithEntityBase<History> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'history'
    this.name_ = 'history'
    this.Name = 'History'
  }


  make(this: HistoryEntity) {
    return new HistoryEntity(this._client, this.entopts())
  }







}


export {
  HistoryEntity
}
