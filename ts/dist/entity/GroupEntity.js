"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class GroupEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'group';
        this.name_ = 'group';
        this.Name = 'Group';
    }
    make() {
        return new GroupEntity(this._client, this.entopts());
    }
}
exports.GroupEntity = GroupEntity;
//# sourceMappingURL=GroupEntity.js.map