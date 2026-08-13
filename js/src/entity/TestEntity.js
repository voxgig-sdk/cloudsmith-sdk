
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class TestEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'test'
    this.name_ = 'test'
    this.Name = 'Test'
  }


  make() {
    return new TestEntity(this._client, this.entopts())
  }







}


module.exports = {
  TestEntity
}
