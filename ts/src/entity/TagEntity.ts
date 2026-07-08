
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
  Tag,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class TagEntity extends CloudsmithEntityBase<Tag> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'tag'
    this.name_ = 'tag'
    this.Name = 'Tag'
  }


  make(this: TagEntity) {
    return new TagEntity(this._client, this.entopts())
  }







}


export {
  TagEntity
}
