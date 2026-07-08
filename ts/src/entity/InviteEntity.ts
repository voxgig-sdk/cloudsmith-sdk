
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
  Invite,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class InviteEntity extends CloudsmithEntityBase<Invite> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'invite'
    this.name_ = 'invite'
    this.Name = 'Invite'
  }


  make(this: InviteEntity) {
    return new InviteEntity(this._client, this.entopts())
  }







}


export {
  InviteEntity
}
