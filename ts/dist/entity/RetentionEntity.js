"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class RetentionEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'retention';
        this.name_ = 'retention';
        this.Name = 'Retention';
    }
    make() {
        return new RetentionEntity(this._client, this.entopts());
    }
}
exports.RetentionEntity = RetentionEntity;
//# sourceMappingURL=RetentionEntity.js.map