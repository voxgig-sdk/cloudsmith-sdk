"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class MemberEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'member';
        this.name_ = 'member';
        this.Name = 'Member';
    }
    make() {
        return new MemberEntity(this._client, this.entopts());
    }
}
exports.MemberEntity = MemberEntity;
//# sourceMappingURL=MemberEntity.js.map