
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class GroupEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'group'
    this.name_ = 'group'
    this.Name = 'Group'
  }


  make() {
    return new GroupEntity(this._client, this.entopts())
  }







}


module.exports = {
  GroupEntity
}
