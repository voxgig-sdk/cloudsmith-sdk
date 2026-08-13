
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class QuarantineEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'quarantine'
    this.name_ = 'quarantine'
    this.Name = 'Quarantine'
  }


  make() {
    return new QuarantineEntity(this._client, this.entopts())
  }







}


module.exports = {
  QuarantineEntity
}
