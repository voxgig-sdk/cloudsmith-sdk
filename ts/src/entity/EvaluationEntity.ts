
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
  Evaluation,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class EvaluationEntity extends CloudsmithEntityBase<Evaluation> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'evaluation'
    this.name_ = 'evaluation'
    this.Name = 'Evaluation'
  }


  make(this: EvaluationEntity) {
    return new EvaluationEntity(this._client, this.entopts())
  }







}


export {
  EvaluationEntity
}
