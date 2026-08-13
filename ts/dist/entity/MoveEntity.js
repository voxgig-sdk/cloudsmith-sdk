"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class MoveEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'move';
        this.name_ = 'move';
        this.Name = 'Move';
    }
    make() {
        return new MoveEntity(this._client, this.entopts());
    }
}
exports.MoveEntity = MoveEntity;
//# sourceMappingURL=MoveEntity.js.map