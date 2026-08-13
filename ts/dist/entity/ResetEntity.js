"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class ResetEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'reset';
        this.name_ = 'reset';
        this.Name = 'Reset';
    }
    make() {
        return new ResetEntity(this._client, this.entopts());
    }
}
exports.ResetEntity = ResetEntity;
//# sourceMappingURL=ResetEntity.js.map