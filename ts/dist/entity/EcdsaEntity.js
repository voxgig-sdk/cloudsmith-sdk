"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcdsaEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class EcdsaEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'ecdsa';
        this.name_ = 'ecdsa';
        this.Name = 'Ecdsa';
    }
    make() {
        return new EcdsaEntity(this._client, this.entopts());
    }
}
exports.EcdsaEntity = EcdsaEntity;
//# sourceMappingURL=EcdsaEntity.js.map