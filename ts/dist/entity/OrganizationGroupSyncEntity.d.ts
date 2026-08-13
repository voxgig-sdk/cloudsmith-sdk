import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { OrganizationGroupSync, OrganizationGroupSyncListMatch, OrganizationGroupSyncCreateData } from '../CloudsmithTypes';
declare class OrganizationGroupSyncEntity extends CloudsmithEntityBase<OrganizationGroupSync> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: OrganizationGroupSyncEntity): OrganizationGroupSyncEntity;
    list(this: any, reqmatch?: OrganizationGroupSyncListMatch, ctrl?: Control): Promise<OrganizationGroupSync[]>;
    create(this: any, reqdata?: OrganizationGroupSyncCreateData, ctrl?: Control): Promise<OrganizationGroupSync>;
}
export { OrganizationGroupSyncEntity };
