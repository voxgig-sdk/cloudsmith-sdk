
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class TerraformEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'terraform'
    this.name_ = 'terraform'
    this.Name = 'Terraform'
  }


  make() {
    return new TerraformEntity(this._client, this.entopts())
  }







}


module.exports = {
  TerraformEntity
}
