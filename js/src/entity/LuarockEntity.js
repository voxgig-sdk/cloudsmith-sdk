
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class LuarockEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'luarock'
    this.name_ = 'luarock'
    this.Name = 'Luarock'
  }


  make() {
    return new LuarockEntity(this._client, this.entopts())
  }







}


module.exports = {
  LuarockEntity
}
