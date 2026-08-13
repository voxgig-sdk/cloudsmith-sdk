
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class LicensePolicyEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'license_policy'
    this.name_ = 'license_policy'
    this.Name = 'LicensePolicy'
  }


  make() {
    return new LicensePolicyEntity(this._client, this.entopts())
  }







}


module.exports = {
  LicensePolicyEntity
}
