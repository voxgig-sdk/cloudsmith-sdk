
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class DenyPolicyEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'deny_policy'
    this.name_ = 'deny_policy'
    this.Name = 'DenyPolicy'
  }


  make() {
    return new DenyPolicyEntity(this._client, this.entopts())
  }







}


module.exports = {
  DenyPolicyEntity
}
