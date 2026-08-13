"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenyPolicyEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class DenyPolicyEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'deny_policy';
        this.name_ = 'deny_policy';
        this.Name = 'DenyPolicy';
    }
    make() {
        return new DenyPolicyEntity(this._client, this.entopts());
    }
}
exports.DenyPolicyEntity = DenyPolicyEntity;
//# sourceMappingURL=DenyPolicyEntity.js.map