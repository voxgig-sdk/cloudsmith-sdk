
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class LimitEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'limit'
    this.name_ = 'limit'
    this.Name = 'Limit'
  }


  make() {
    return new LimitEntity(this._client, this.entopts())
  }







}


module.exports = {
  LimitEntity
}
