
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class EcdsaEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'ecdsa'
    this.name_ = 'ecdsa'
    this.Name = 'Ecdsa'
  }


  make() {
    return new EcdsaEntity(this._client, this.entopts())
  }







}


module.exports = {
  EcdsaEntity
}
