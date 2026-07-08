
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
  AuditLog,
} from '../CloudsmithTypes'

// TODO: needs Entity superclass
class AuditLogEntity extends CloudsmithEntityBase<AuditLog> {

  constructor(client: CloudsmithSDK, entopts: any) {
    super(client, entopts)
    this.name = 'audit_log'
    this.name_ = 'audit_log'
    this.Name = 'AuditLog'
  }


  make(this: AuditLogEntity) {
    return new AuditLogEntity(this._client, this.entopts())
  }







}


export {
  AuditLogEntity
}
