
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
  Group,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class GroupEntity extends CloudsmithEntityBase<Group> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'group'
    this.name_ = 'group'
    this.Name = 'Group'
  }


  make(this: GroupEntity) {
    return new GroupEntity(this._client, this.entopts())
  }







}


export {
  GroupEntity
}
