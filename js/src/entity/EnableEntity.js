
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class EnableEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'enable'
    this.name_ = 'enable'
    this.Name = 'Enable'
  }


  make() {
    return new EnableEntity(this._client, this.entopts())
  }







}


module.exports = {
  EnableEntity
}
