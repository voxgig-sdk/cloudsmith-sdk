"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class SyncEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'sync';
        this.name_ = 'sync';
        this.Name = 'Sync';
    }
    make() {
        return new SyncEntity(this._client, this.entopts());
    }
}
exports.SyncEntity = SyncEntity;
//# sourceMappingURL=SyncEntity.js.map