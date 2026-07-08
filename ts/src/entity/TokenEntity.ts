
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
  Token,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class TokenEntity extends CloudsmithEntityBase<Token> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'token'
    this.name_ = 'token'
    this.Name = 'Token'
  }


  make(this: TokenEntity) {
    return new TokenEntity(this._client, this.entopts())
  }







}


export {
  TokenEntity
}
