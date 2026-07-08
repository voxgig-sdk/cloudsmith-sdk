
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
  Terraform,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class TerraformEntity extends CloudsmithEntityBase<Terraform> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'terraform'
    this.name_ = 'terraform'
    this.Name = 'Terraform'
  }


  make(this: TerraformEntity) {
    return new TerraformEntity(this._client, this.entopts())
  }







}


export {
  TerraformEntity
}
