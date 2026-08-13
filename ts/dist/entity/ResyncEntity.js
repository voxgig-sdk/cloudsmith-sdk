"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResyncEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class ResyncEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'resync';
        this.name_ = 'resync';
        this.Name = 'Resync';
    }
    make() {
        return new ResyncEntity(this._client, this.entopts());
    }
}
exports.ResyncEntity = ResyncEntity;
//# sourceMappingURL=ResyncEntity.js.map