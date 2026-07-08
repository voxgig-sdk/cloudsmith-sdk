
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
  Member,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class MemberEntity extends CloudsmithEntityBase<Member> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'member'
    this.name_ = 'member'
    this.Name = 'Member'
  }


  make(this: MemberEntity) {
    return new MemberEntity(this._client, this.entopts())
  }







}


export {
  MemberEntity
}
