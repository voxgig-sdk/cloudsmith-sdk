
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
  Vagrant,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class VagrantEntity extends CloudsmithEntityBase<Vagrant> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'vagrant'
    this.name_ = 'vagrant'
    this.Name = 'Vagrant'
  }


  make(this: VagrantEntity) {
    return new VagrantEntity(this._client, this.entopts())
  }







}


export {
  VagrantEntity
}
