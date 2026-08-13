
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class ProfileEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'profile'
    this.name_ = 'profile'
    this.Name = 'Profile'
  }


  make() {
    return new ProfileEntity(this._client, this.entopts())
  }







}


module.exports = {
  ProfileEntity
}
