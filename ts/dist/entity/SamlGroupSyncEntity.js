"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamlGroupSyncEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class SamlGroupSyncEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'saml_group_sync';
        this.name_ = 'saml_group_sync';
        this.Name = 'SamlGroupSync';
    }
    make() {
        return new SamlGroupSyncEntity(this._client, this.entopts());
    }
}
exports.SamlGroupSyncEntity = SamlGroupSyncEntity;
//# sourceMappingURL=SamlGroupSyncEntity.js.map