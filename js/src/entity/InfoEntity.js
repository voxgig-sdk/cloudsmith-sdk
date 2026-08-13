
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class InfoEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'info'
    this.name_ = 'info'
    this.Name = 'Info'
  }


  make() {
    return new InfoEntity(this._client, this.entopts())
  }







}


module.exports = {
  InfoEntity
}
