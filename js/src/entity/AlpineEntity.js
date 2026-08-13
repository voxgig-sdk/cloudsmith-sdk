
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class AlpineEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'alpine'
    this.name_ = 'alpine'
    this.Name = 'Alpine'
  }


  make() {
    return new AlpineEntity(this._client, this.entopts())
  }







}


module.exports = {
  AlpineEntity
}
