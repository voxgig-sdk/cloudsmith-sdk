"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerraformEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class TerraformEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'terraform';
        this.name_ = 'terraform';
        this.Name = 'Terraform';
    }
    make() {
        return new TerraformEntity(this._client, this.entopts());
    }
}
exports.TerraformEntity = TerraformEntity;
//# sourceMappingURL=TerraformEntity.js.map