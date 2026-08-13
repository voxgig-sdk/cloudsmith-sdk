
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class SelfEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'self'
    this.name_ = 'self'
    this.Name = 'Self'
  }


  make() {
    return new SelfEntity(this._client, this.entopts())
  }







}


module.exports = {
  SelfEntity
}
