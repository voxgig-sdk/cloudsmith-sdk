"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class LimitEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'limit';
        this.name_ = 'limit';
        this.Name = 'Limit';
    }
    make() {
        return new LimitEntity(this._client, this.entopts());
    }
}
exports.LimitEntity = LimitEntity;
//# sourceMappingURL=LimitEntity.js.map