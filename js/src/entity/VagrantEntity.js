
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class VagrantEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'vagrant'
    this.name_ = 'vagrant'
    this.Name = 'Vagrant'
  }


  make() {
    return new VagrantEntity(this._client, this.entopts())
  }







}


module.exports = {
  VagrantEntity
}
