"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuarockEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class LuarockEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'luarock';
        this.name_ = 'luarock';
        this.Name = 'Luarock';
    }
    make() {
        return new LuarockEntity(this._client, this.entopts());
    }
}
exports.LuarockEntity = LuarockEntity;
//# sourceMappingURL=LuarockEntity.js.map