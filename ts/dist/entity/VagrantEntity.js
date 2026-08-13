"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VagrantEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class VagrantEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'vagrant';
        this.name_ = 'vagrant';
        this.Name = 'Vagrant';
    }
    make() {
        return new VagrantEntity(this._client, this.entopts());
    }
}
exports.VagrantEntity = VagrantEntity;
//# sourceMappingURL=VagrantEntity.js.map