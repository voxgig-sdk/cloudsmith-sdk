
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class TokenEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'token'
    this.name_ = 'token'
    this.Name = 'Token'
  }


  make() {
    return new TokenEntity(this._client, this.entopts())
  }







}


module.exports = {
  TokenEntity
}
