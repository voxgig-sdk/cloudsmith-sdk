
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class RawEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'raw'
    this.name_ = 'raw'
    this.Name = 'Raw'
  }


  make() {
    return new RawEntity(this._client, this.entopts())
  }







}


module.exports = {
  RawEntity
}
