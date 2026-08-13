
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class SamlGroupSyncEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'saml_group_sync'
    this.name_ = 'saml_group_sync'
    this.Name = 'SamlGroupSync'
  }


  make() {
    return new SamlGroupSyncEntity(this._client, this.entopts())
  }







}


module.exports = {
  SamlGroupSyncEntity
}
