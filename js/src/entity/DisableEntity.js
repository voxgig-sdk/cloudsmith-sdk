
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class DisableEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'disable'
    this.name_ = 'disable'
    this.Name = 'Disable'
  }


  make() {
    return new DisableEntity(this._client, this.entopts())
  }







}


module.exports = {
  DisableEntity
}
