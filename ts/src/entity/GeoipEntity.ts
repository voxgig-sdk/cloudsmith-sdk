
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
  Geoip,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class GeoipEntity extends CloudsmithEntityBase<Geoip> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'geoip'
    this.name_ = 'geoip'
    this.Name = 'Geoip'
  }


  make(this: GeoipEntity) {
    return new GeoipEntity(this._client, this.entopts())
  }







}


export {
  GeoipEntity
}
