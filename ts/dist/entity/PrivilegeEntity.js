"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivilegeEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class PrivilegeEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'privilege';
        this.name_ = 'privilege';
        this.Name = 'Privilege';
    }
    make() {
        return new PrivilegeEntity(this._client, this.entopts());
    }
}
exports.PrivilegeEntity = PrivilegeEntity;
//# sourceMappingURL=PrivilegeEntity.js.map