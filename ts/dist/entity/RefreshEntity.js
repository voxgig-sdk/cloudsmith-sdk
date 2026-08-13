"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class RefreshEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'refresh';
        this.name_ = 'refresh';
        this.Name = 'Refresh';
    }
    make() {
        return new RefreshEntity(this._client, this.entopts());
    }
}
exports.RefreshEntity = RefreshEntity;
//# sourceMappingURL=RefreshEntity.js.map