import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { OrganizationGroupSyncStatus, OrganizationGroupSyncStatusLoadMatch } from '../CloudsmithTypes';
declare class OrganizationGroupSyncStatusEntity extends CloudsmithEntityBase<OrganizationGroupSyncStatus> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: OrganizationGroupSyncStatusEntity): OrganizationGroupSyncStatusEntity;
    load(this: any, reqmatch?: OrganizationGroupSyncStatusLoadMatch, ctrl?: Control): Promise<OrganizationGroupSyncStatusEntity>;
}
export { OrganizationGroupSyncStatusEntity };
