"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class DisableEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'disable';
        this.name_ = 'disable';
        this.Name = 'Disable';
    }
    make() {
        return new DisableEntity(this._client, this.entopts());
    }
}
exports.DisableEntity = DisableEntity;
//# sourceMappingURL=DisableEntity.js.map