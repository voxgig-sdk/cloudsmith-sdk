
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class VersionEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'version'
    this.name_ = 'version'
    this.Name = 'Version'
  }


  make() {
    return new VersionEntity(this._client, this.entopts())
  }







}


module.exports = {
  VersionEntity
}
