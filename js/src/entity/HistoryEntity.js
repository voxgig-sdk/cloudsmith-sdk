
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class HistoryEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'history'
    this.name_ = 'history'
    this.Name = 'History'
  }


  make() {
    return new HistoryEntity(this._client, this.entopts())
  }







}


module.exports = {
  HistoryEntity
}
