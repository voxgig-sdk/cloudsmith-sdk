
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
  DenyPolicy,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class DenyPolicyEntity extends CloudsmithEntityBase<DenyPolicy> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'deny_policy'
    this.name_ = 'deny_policy'
    this.Name = 'DenyPolicy'
  }


  make(this: DenyPolicyEntity) {
    return new DenyPolicyEntity(this._client, this.entopts())
  }







}


export {
  DenyPolicyEntity
}
