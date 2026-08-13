"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class AuditLogEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'audit_log';
        this.name_ = 'audit_log';
        this.Name = 'AuditLog';
    }
    make() {
        return new AuditLogEntity(this._client, this.entopts());
    }
}
exports.AuditLogEntity = AuditLogEntity;
//# sourceMappingURL=AuditLogEntity.js.map