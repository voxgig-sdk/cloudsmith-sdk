"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistroEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class DistroEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'distro';
        this.name_ = 'distro';
        this.Name = 'Distro';
    }
    make() {
        return new DistroEntity(this._client, this.entopts());
    }
}
exports.DistroEntity = DistroEntity;
//# sourceMappingURL=DistroEntity.js.map