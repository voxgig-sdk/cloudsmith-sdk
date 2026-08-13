
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class RsaEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'rsa'
    this.name_ = 'rsa'
    this.Name = 'Rsa'
  }


  make() {
    return new RsaEntity(this._client, this.entopts())
  }







}


module.exports = {
  RsaEntity
}
