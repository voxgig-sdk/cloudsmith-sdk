
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
  Team,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class TeamEntity extends CloudsmithEntityBase<Team> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'team'
    this.name_ = 'team'
    this.Name = 'Team'
  }


  make(this: TeamEntity) {
    return new TeamEntity(this._client, this.entopts())
  }







}


export {
  TeamEntity
}
