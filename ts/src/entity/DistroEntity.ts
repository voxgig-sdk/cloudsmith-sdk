
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
  Distro,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class DistroEntity extends CloudsmithEntityBase<Distro> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'distro'
    this.name_ = 'distro'
    this.Name = 'Distro'
  }


  make(this: DistroEntity) {
    return new DistroEntity(this._client, this.entopts())
  }







}


export {
  DistroEntity
}
