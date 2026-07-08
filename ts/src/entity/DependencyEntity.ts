
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
  Dependency,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class DependencyEntity extends CloudsmithEntityBase<Dependency> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'dependency'
    this.name_ = 'dependency'
    this.Name = 'Dependency'
  }


  make(this: DependencyEntity) {
    return new DependencyEntity(this._client, this.entopts())
  }







}


export {
  DependencyEntity
}
