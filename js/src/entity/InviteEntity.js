
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class InviteEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'invite'
    this.name_ = 'invite'
    this.Name = 'Invite'
  }


  make() {
    return new InviteEntity(this._client, this.entopts())
  }







}


module.exports = {
  InviteEntity
}
