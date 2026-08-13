import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { NamespaceAuditLog, NamespaceAuditLogLoadMatch } from '../CloudsmithTypes';
declare class NamespaceAuditLogEntity extends CloudsmithEntityBase<NamespaceAuditLog> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: NamespaceAuditLogEntity): NamespaceAuditLogEntity;
    load(this: any, reqmatch?: NamespaceAuditLogLoadMatch, ctrl?: Control): Promise<NamespaceAuditLog>;
}
export { NamespaceAuditLogEntity };
