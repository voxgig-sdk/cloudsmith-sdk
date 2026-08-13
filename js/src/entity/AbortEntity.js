
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class AbortEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'abort'
    this.name_ = 'abort'
    this.Name = 'Abort'
  }


  make() {
    return new AbortEntity(this._client, this.entopts())
  }







}


module.exports = {
  AbortEntity
}
