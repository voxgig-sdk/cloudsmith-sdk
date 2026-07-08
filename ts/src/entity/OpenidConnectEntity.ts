
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
  OpenidConnect,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class OpenidConnectEntity extends CloudsmithEntityBase<OpenidConnect> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'openid_connect'
    this.name_ = 'openid_connect'
    this.Name = 'OpenidConnect'
  }


  make(this: OpenidConnectEntity) {
    return new OpenidConnectEntity(this._client, this.entopts())
  }







}


export {
  OpenidConnectEntity
}
