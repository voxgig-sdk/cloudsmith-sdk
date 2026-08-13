"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuarantineEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class QuarantineEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'quarantine';
        this.name_ = 'quarantine';
        this.Name = 'Quarantine';
    }
    make() {
        return new QuarantineEntity(this._client, this.entopts());
    }
}
exports.QuarantineEntity = QuarantineEntity;
//# sourceMappingURL=QuarantineEntity.js.map