
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class TransferRegionEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'transfer_region'
    this.name_ = 'transfer_region'
    this.Name = 'TransferRegion'
  }


  make() {
    return new TransferRegionEntity(this._client, this.entopts())
  }







}


module.exports = {
  TransferRegionEntity
}
