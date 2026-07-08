
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
  Profile,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class ProfileEntity extends CloudsmithEntityBase<Profile> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'profile'
    this.name_ = 'profile'
    this.Name = 'Profile'
  }


  make(this: ProfileEntity) {
    return new ProfileEntity(this._client, this.entopts())
  }







}


export {
  ProfileEntity
}
