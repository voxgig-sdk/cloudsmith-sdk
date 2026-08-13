"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class ScanEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'scan';
        this.name_ = 'scan';
        this.Name = 'Scan';
    }
    make() {
        return new ScanEntity(this._client, this.entopts());
    }
}
exports.ScanEntity = ScanEntity;
//# sourceMappingURL=ScanEntity.js.map