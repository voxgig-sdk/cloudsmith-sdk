"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GpgEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class GpgEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'gpg';
        this.name_ = 'gpg';
        this.Name = 'Gpg';
    }
    make() {
        return new GpgEntity(this._client, this.entopts());
    }
}
exports.GpgEntity = GpgEntity;
//# sourceMappingURL=GpgEntity.js.map