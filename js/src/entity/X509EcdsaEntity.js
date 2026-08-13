
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class X509EcdsaEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'x509_ecdsa'
    this.name_ = 'x509_ecdsa'
    this.Name = 'X509Ecdsa'
  }


  make() {
    return new X509EcdsaEntity(this._client, this.entopts())
  }







}


module.exports = {
  X509EcdsaEntity
}
