
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class ConanEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'conan'
    this.name_ = 'conan'
    this.Name = 'Conan'
  }


  make() {
    return new ConanEntity(this._client, this.entopts())
  }







}


module.exports = {
  ConanEntity
}
