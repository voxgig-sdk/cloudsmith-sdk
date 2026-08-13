"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class EnableEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'enable';
        this.name_ = 'enable';
        this.Name = 'Enable';
    }
    make() {
        return new EnableEntity(this._client, this.entopts());
    }
}
exports.EnableEntity = EnableEntity;
//# sourceMappingURL=EnableEntity.js.map