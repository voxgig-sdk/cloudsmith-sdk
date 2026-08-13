
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class ResetEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'reset'
    this.name_ = 'reset'
    this.Name = 'Reset'
  }


  make() {
    return new ResetEntity(this._client, this.entopts())
  }







}


module.exports = {
  ResetEntity
}
