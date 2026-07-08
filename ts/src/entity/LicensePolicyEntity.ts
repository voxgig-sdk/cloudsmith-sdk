
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
  LicensePolicy,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class LicensePolicyEntity extends CloudsmithEntityBase<LicensePolicy> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'license_policy'
    this.name_ = 'license_policy'
    this.Name = 'LicensePolicy'
  }


  make(this: LicensePolicyEntity) {
    return new LicensePolicyEntity(this._client, this.entopts())
  }







}


export {
  LicensePolicyEntity
}
