"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class TokenEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'token';
        this.name_ = 'token';
        this.Name = 'Token';
    }
    make() {
        return new TokenEntity(this._client, this.entopts());
    }
}
exports.TokenEntity = TokenEntity;
//# sourceMappingURL=TokenEntity.js.map