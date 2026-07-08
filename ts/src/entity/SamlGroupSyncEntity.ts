
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
  SamlGroupSync,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class SamlGroupSyncEntity extends CloudsmithEntityBase<SamlGroupSync> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'saml_group_sync'
    this.name_ = 'saml_group_sync'
    this.Name = 'SamlGroupSync'
  }


  make(this: SamlGroupSyncEntity) {
    return new SamlGroupSyncEntity(this._client, this.entopts())
  }







}


export {
  SamlGroupSyncEntity
}
