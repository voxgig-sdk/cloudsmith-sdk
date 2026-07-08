
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
  Privilege,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class PrivilegeEntity extends CloudsmithEntityBase<Privilege> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'privilege'
    this.name_ = 'privilege'
    this.Name = 'Privilege'
  }


  make(this: PrivilegeEntity) {
    return new PrivilegeEntity(this._client, this.entopts())
  }







}


export {
  PrivilegeEntity
}
