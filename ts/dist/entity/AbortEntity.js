"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbortEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class AbortEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'abort';
        this.name_ = 'abort';
        this.Name = 'Abort';
    }
    make() {
        return new AbortEntity(this._client, this.entopts());
    }
}
exports.AbortEntity = AbortEntity;
//# sourceMappingURL=AbortEntity.js.map