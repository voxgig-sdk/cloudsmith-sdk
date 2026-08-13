
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class StatusEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'status'
    this.name_ = 'status'
    this.Name = 'Status'
  }


  make() {
    return new StatusEntity(this._client, this.entopts())
  }







}


module.exports = {
  StatusEntity
}
