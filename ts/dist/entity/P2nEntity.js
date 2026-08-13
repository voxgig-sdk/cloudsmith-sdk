"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P2nEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class P2nEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'p2n';
        this.name_ = 'p2n';
        this.Name = 'P2n';
    }
    make() {
        return new P2nEntity(this._client, this.entopts());
    }
}
exports.P2nEntity = P2nEntity;
//# sourceMappingURL=P2nEntity.js.map