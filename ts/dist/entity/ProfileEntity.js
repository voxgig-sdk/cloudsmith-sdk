"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class ProfileEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'profile';
        this.name_ = 'profile';
        this.Name = 'Profile';
    }
    make() {
        return new ProfileEntity(this._client, this.entopts());
    }
}
exports.ProfileEntity = ProfileEntity;
//# sourceMappingURL=ProfileEntity.js.map