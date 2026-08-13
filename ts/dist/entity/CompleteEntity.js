"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompleteEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class CompleteEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'complete';
        this.name_ = 'complete';
        this.Name = 'Complete';
    }
    make() {
        return new CompleteEntity(this._client, this.entopts());
    }
}
exports.CompleteEntity = CompleteEntity;
//# sourceMappingURL=CompleteEntity.js.map