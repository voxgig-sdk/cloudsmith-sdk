
const { inspect } = require('node:util')

const { CloudsmithEntityBase } = require('../CloudsmithEntityBase')


// TODO: needs Entity superclass
class EvaluationEntity extends CloudsmithEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'evaluation'
    this.name_ = 'evaluation'
    this.Name = 'Evaluation'
  }


  make() {
    return new EvaluationEntity(this._client, this.entopts())
  }







}


module.exports = {
  EvaluationEntity
}
