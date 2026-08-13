"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class TeamEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'team';
        this.name_ = 'team';
        this.Name = 'Team';
    }
    make() {
        return new TeamEntity(this._client, this.entopts());
    }
}
exports.TeamEntity = TeamEntity;
//# sourceMappingURL=TeamEntity.js.map