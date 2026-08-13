"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OssEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class OssEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'oss';
        this.name_ = 'oss';
        this.Name = 'Oss';
    }
    make() {
        return new OssEntity(this._client, this.entopts());
    }
}
exports.OssEntity = OssEntity;
//# sourceMappingURL=OssEntity.js.map