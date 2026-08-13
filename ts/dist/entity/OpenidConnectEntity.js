"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenidConnectEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class OpenidConnectEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'openid_connect';
        this.name_ = 'openid_connect';
        this.Name = 'OpenidConnect';
    }
    make() {
        return new OpenidConnectEntity(this._client, this.entopts());
    }
}
exports.OpenidConnectEntity = OpenidConnectEntity;
//# sourceMappingURL=OpenidConnectEntity.js.map