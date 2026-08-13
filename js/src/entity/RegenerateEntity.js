
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class RegenerateEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'regenerate'
    this.name_ = 'regenerate'
    this.Name = 'Regenerate'
  }


  make() {
    return new RegenerateEntity(this._client, this.entopts())
  }







}


module.exports = {
  RegenerateEntity
}
