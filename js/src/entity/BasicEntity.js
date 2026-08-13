
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class BasicEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'basic'
    this.name_ = 'basic'
    this.Name = 'Basic'
  }


  make() {
    return new BasicEntity(this._client, this.entopts())
  }







}


module.exports = {
  BasicEntity
}
