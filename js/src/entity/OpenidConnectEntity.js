
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class OpenidConnectEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'openid_connect'
    this.name_ = 'openid_connect'
    this.Name = 'OpenidConnect'
  }


  make() {
    return new OpenidConnectEntity(this._client, this.entopts())
  }







}


module.exports = {
  OpenidConnectEntity
}
