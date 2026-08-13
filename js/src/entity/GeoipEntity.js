
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class GeoipEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'geoip'
    this.name_ = 'geoip'
    this.Name = 'Geoip'
  }


  make() {
    return new GeoipEntity(this._client, this.entopts())
  }







}


module.exports = {
  GeoipEntity
}
