
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class GpgEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'gpg'
    this.name_ = 'gpg'
    this.Name = 'Gpg'
  }


  make() {
    return new GpgEntity(this._client, this.entopts())
  }







}


module.exports = {
  GpgEntity
}
