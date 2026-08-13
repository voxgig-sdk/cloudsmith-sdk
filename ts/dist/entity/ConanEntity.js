"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConanEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class ConanEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'conan';
        this.name_ = 'conan';
        this.Name = 'Conan';
    }
    make() {
        return new ConanEntity(this._client, this.entopts());
    }
}
exports.ConanEntity = ConanEntity;
//# sourceMappingURL=ConanEntity.js.map