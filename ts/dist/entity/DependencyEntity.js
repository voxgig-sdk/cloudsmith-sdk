"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class DependencyEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'dependency';
        this.name_ = 'dependency';
        this.Name = 'Dependency';
    }
    make() {
        return new DependencyEntity(this._client, this.entopts());
    }
}
exports.DependencyEntity = DependencyEntity;
//# sourceMappingURL=DependencyEntity.js.map