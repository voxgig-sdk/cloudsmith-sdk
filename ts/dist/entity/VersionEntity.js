"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class VersionEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'version';
        this.name_ = 'version';
        this.Name = 'Version';
    }
    make() {
        return new VersionEntity(this._client, this.entopts());
    }
}
exports.VersionEntity = VersionEntity;
//# sourceMappingURL=VersionEntity.js.map