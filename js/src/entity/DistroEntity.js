
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class DistroEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'distro'
    this.name_ = 'distro'
    this.Name = 'Distro'
  }


  make() {
    return new DistroEntity(this._client, this.entopts())
  }







}


module.exports = {
  DistroEntity
}
