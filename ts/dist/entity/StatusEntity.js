"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class StatusEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'status';
        this.name_ = 'status';
        this.Name = 'Status';
    }
    make() {
        return new StatusEntity(this._client, this.entopts());
    }
}
exports.StatusEntity = StatusEntity;
//# sourceMappingURL=StatusEntity.js.map