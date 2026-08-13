import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { AuditLog } from '../CloudsmithTypes';
declare class AuditLogEntity extends CloudsmithEntityBase<AuditLog> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: AuditLogEntity): AuditLogEntity;
}
export { AuditLogEntity };
