"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class ValidateEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'validate';
        this.name_ = 'validate';
        this.Name = 'Validate';
    }
    make() {
        return new ValidateEntity(this._client, this.entopts());
    }
}
exports.ValidateEntity = ValidateEntity;
//# sourceMappingURL=ValidateEntity.js.map