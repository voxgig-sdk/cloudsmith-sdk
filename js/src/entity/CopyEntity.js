
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class CopyEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'copy'
    this.name_ = 'copy'
    this.Name = 'Copy'
  }


  make() {
    return new CopyEntity(this._client, this.entopts())
  }







}


module.exports = {
  CopyEntity
}
