"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class EvaluationEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'evaluation';
        this.name_ = 'evaluation';
        this.Name = 'Evaluation';
    }
    make() {
        return new EvaluationEntity(this._client, this.entopts());
    }
}
exports.EvaluationEntity = EvaluationEntity;
//# sourceMappingURL=EvaluationEntity.js.map