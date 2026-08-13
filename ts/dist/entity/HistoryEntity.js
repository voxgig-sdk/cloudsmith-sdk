"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class HistoryEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'history';
        this.name_ = 'history';
        this.Name = 'History';
    }
    make() {
        return new HistoryEntity(this._client, this.entopts());
    }
}
exports.HistoryEntity = HistoryEntity;
//# sourceMappingURL=HistoryEntity.js.map