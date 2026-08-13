
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class X509RsaEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'x509_rsa'
    this.name_ = 'x509_rsa'
    this.Name = 'X509Rsa'
  }


  make() {
    return new X509RsaEntity(this._client, this.entopts())
  }







}


module.exports = {
  X509RsaEntity
}
