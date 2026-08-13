import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryAuditLog, RepositoryAuditLogListMatch } from '../CloudsmithTypes';
declare class RepositoryAuditLogEntity extends CloudsmithEntityBase<RepositoryAuditLog> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryAuditLogEntity): RepositoryAuditLogEntity;
    list(this: any, reqmatch?: RepositoryAuditLogListMatch, ctrl?: Control): Promise<RepositoryAuditLog[]>;
}
export { RepositoryAuditLogEntity };
