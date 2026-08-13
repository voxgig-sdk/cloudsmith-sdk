"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class RawEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'raw';
        this.name_ = 'raw';
        this.Name = 'Raw';
    }
    make() {
        return new RawEntity(this._client, this.entopts());
    }
}
exports.RawEntity = RawEntity;
//# sourceMappingURL=RawEntity.js.map