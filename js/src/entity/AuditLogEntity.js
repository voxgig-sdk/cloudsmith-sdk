
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class AuditLogEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'audit_log'
    this.name_ = 'audit_log'
    this.Name = 'AuditLog'
  }


  make() {
    return new AuditLogEntity(this._client, this.entopts())
  }







}


module.exports = {
  AuditLogEntity
}
