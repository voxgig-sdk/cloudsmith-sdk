"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicensePolicyEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class LicensePolicyEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'license_policy';
        this.name_ = 'license_policy';
        this.Name = 'LicensePolicy';
    }
    make() {
        return new LicensePolicyEntity(this._client, this.entopts());
    }
}
exports.LicensePolicyEntity = LicensePolicyEntity;
//# sourceMappingURL=LicensePolicyEntity.js.map