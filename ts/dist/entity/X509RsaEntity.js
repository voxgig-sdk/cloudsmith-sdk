"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.X509RsaEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class X509RsaEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'x509_rsa';
        this.name_ = 'x509_rsa';
        this.Name = 'X509Rsa';
    }
    make() {
        return new X509RsaEntity(this._client, this.entopts());
    }
}
exports.X509RsaEntity = X509RsaEntity;
//# sourceMappingURL=X509RsaEntity.js.map