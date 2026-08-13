"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsaEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class RsaEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'rsa';
        this.name_ = 'rsa';
        this.Name = 'Rsa';
    }
    make() {
        return new RsaEntity(this._client, this.entopts());
    }
}
exports.RsaEntity = RsaEntity;
//# sourceMappingURL=RsaEntity.js.map