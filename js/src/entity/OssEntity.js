
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class OssEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'oss'
    this.name_ = 'oss'
    this.Name = 'Oss'
  }


  make() {
    return new OssEntity(this._client, this.entopts())
  }







}


module.exports = {
  OssEntity
}
