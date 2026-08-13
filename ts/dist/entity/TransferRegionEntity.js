"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferRegionEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class TransferRegionEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'transfer_region';
        this.name_ = 'transfer_region';
        this.Name = 'TransferRegion';
    }
    make() {
        return new TransferRegionEntity(this._client, this.entopts());
    }
}
exports.TransferRegionEntity = TransferRegionEntity;
//# sourceMappingURL=TransferRegionEntity.js.map