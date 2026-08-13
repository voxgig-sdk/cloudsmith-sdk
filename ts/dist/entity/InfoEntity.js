"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class InfoEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'info';
        this.name_ = 'info';
        this.Name = 'Info';
    }
    make() {
        return new InfoEntity(this._client, this.entopts());
    }
}
exports.InfoEntity = InfoEntity;
//# sourceMappingURL=InfoEntity.js.map