"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlpineEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class AlpineEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'alpine';
        this.name_ = 'alpine';
        this.Name = 'Alpine';
    }
    make() {
        return new AlpineEntity(this._client, this.entopts());
    }
}
exports.AlpineEntity = AlpineEntity;
//# sourceMappingURL=AlpineEntity.js.map