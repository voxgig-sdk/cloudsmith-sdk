import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { OrganizationMembershipVisibilityUpdate, OrganizationMembershipVisibilityUpdateUpdateData } from '../CloudsmithTypes';
declare class OrganizationMembershipVisibilityUpdateEntity extends CloudsmithEntityBase<OrganizationMembershipVisibilityUpdate> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: OrganizationMembershipVisibilityUpdateEntity): OrganizationMembershipVisibilityUpdateEntity;
    update(this: any, reqdata?: OrganizationMembershipVisibilityUpdateUpdateData, ctrl?: Control): Promise<OrganizationMembershipVisibilityUpdateEntity>;
}
export { OrganizationMembershipVisibilityUpdateEntity };
