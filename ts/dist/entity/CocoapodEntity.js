"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CocoapodEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class CocoapodEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'cocoapod';
        this.name_ = 'cocoapod';
        this.Name = 'Cocoapod';
    }
    make() {
        return new CocoapodEntity(this._client, this.entopts());
    }
}
exports.CocoapodEntity = CocoapodEntity;
//# sourceMappingURL=CocoapodEntity.js.map