"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegenerateEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class RegenerateEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'regenerate';
        this.name_ = 'regenerate';
        this.Name = 'Regenerate';
    }
    make() {
        return new RegenerateEntity(this._client, this.entopts());
    }
}
exports.RegenerateEntity = RegenerateEntity;
//# sourceMappingURL=RegenerateEntity.js.map