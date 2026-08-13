
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class PrivilegeEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'privilege'
    this.name_ = 'privilege'
    this.Name = 'Privilege'
  }


  make() {
    return new PrivilegeEntity(this._client, this.entopts())
  }







}


module.exports = {
  PrivilegeEntity
}
