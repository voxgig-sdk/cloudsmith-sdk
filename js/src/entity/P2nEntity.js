
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class P2nEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'p2n'
    this.name_ = 'p2n'
    this.Name = 'P2n'
  }


  make() {
    return new P2nEntity(this._client, this.entopts())
  }







}


module.exports = {
  P2nEntity
}
