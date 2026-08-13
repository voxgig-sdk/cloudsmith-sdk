"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class InviteEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'invite';
        this.name_ = 'invite';
        this.Name = 'Invite';
    }
    make() {
        return new InviteEntity(this._client, this.entopts());
    }
}
exports.InviteEntity = InviteEntity;
//# sourceMappingURL=InviteEntity.js.map