
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class ResyncEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'resync'
    this.name_ = 'resync'
    this.Name = 'Resync'
  }


  make() {
    return new ResyncEntity(this._client, this.entopts())
  }







}


module.exports = {
  ResyncEntity
}
