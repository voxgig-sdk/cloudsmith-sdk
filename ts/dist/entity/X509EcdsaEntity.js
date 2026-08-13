"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.X509EcdsaEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class X509EcdsaEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'x509_ecdsa';
        this.name_ = 'x509_ecdsa';
        this.Name = 'X509Ecdsa';
    }
    make() {
        return new X509EcdsaEntity(this._client, this.entopts());
    }
}
exports.X509EcdsaEntity = X509EcdsaEntity;
//# sourceMappingURL=X509EcdsaEntity.js.map