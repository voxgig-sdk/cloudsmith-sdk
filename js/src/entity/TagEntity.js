
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class TagEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'tag'
    this.name_ = 'tag'
    this.Name = 'Tag'
  }


  make() {
    return new TagEntity(this._client, this.entopts())
  }







}


module.exports = {
  TagEntity
}
