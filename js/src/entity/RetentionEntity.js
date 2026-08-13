
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class RetentionEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'retention'
    this.name_ = 'retention'
    this.Name = 'Retention'
  }


  make() {
    return new RetentionEntity(this._client, this.entopts())
  }







}


module.exports = {
  RetentionEntity
}
