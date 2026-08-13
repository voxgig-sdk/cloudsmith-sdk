
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class CocoapodEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'cocoapod'
    this.name_ = 'cocoapod'
    this.Name = 'Cocoapod'
  }


  make() {
    return new CocoapodEntity(this._client, this.entopts())
  }







}


module.exports = {
  CocoapodEntity
}
