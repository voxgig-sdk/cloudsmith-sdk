"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class SelfEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'self';
        this.name_ = 'self';
        this.Name = 'Self';
    }
    make() {
        return new SelfEntity(this._client, this.entopts());
    }
}
exports.SelfEntity = SelfEntity;
//# sourceMappingURL=SelfEntity.js.map