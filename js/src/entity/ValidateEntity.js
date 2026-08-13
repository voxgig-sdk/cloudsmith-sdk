
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class ValidateEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'validate'
    this.name_ = 'validate'
    this.Name = 'Validate'
  }


  make() {
    return new ValidateEntity(this._client, this.entopts())
  }







}


module.exports = {
  ValidateEntity
}
