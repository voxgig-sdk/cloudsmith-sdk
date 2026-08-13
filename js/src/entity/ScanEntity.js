
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class ScanEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'scan'
    this.name_ = 'scan'
    this.Name = 'Scan'
  }


  make() {
    return new ScanEntity(this._client, this.entopts())
  }







}


module.exports = {
  ScanEntity
}
