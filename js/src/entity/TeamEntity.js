
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class TeamEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'team'
    this.name_ = 'team'
    this.Name = 'Team'
  }


  make() {
    return new TeamEntity(this._client, this.entopts())
  }







}


module.exports = {
  TeamEntity
}
