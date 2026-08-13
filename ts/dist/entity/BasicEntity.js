"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class BasicEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'basic';
        this.name_ = 'basic';
        this.Name = 'Basic';
    }
    make() {
        return new BasicEntity(this._client, this.entopts());
    }
}
exports.BasicEntity = BasicEntity;
//# sourceMappingURL=BasicEntity.js.map