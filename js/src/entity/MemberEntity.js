
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class MemberEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'member'
    this.name_ = 'member'
    this.Name = 'Member'
  }


  make() {
    return new MemberEntity(this._client, this.entopts())
  }







}


module.exports = {
  MemberEntity
}
