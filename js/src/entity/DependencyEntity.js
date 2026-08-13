
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class DependencyEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'dependency'
    this.name_ = 'dependency'
    this.Name = 'Dependency'
  }


  make() {
    return new DependencyEntity(this._client, this.entopts())
  }







}


module.exports = {
  DependencyEntity
}
