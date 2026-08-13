"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class CopyEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'copy';
        this.name_ = 'copy';
        this.Name = 'Copy';
    }
    make() {
        return new CopyEntity(this._client, this.entopts());
    }
}
exports.CopyEntity = CopyEntity;
//# sourceMappingURL=CopyEntity.js.map