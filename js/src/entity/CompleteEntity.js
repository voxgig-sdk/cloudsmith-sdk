
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class CompleteEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'complete'
    this.name_ = 'complete'
    this.Name = 'Complete'
  }


  make() {
    return new CompleteEntity(this._client, this.entopts())
  }







}


module.exports = {
  CompleteEntity
}
