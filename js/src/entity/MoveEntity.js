
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class MoveEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'move'
    this.name_ = 'move'
    this.Name = 'Move'
  }


  make() {
    return new MoveEntity(this._client, this.entopts())
  }







}


module.exports = {
  MoveEntity
}
