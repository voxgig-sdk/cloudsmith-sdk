
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class RefreshEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'refresh'
    this.name_ = 'refresh'
    this.Name = 'Refresh'
  }


  make() {
    return new RefreshEntity(this._client, this.entopts())
  }







}


module.exports = {
  RefreshEntity
}
