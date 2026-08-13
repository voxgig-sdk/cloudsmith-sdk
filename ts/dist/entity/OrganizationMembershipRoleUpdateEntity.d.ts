import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { OrganizationMembershipRoleUpdate, OrganizationMembershipRoleUpdateUpdateData } from '../CloudsmithTypes';
declare class OrganizationMembershipRoleUpdateEntity extends CloudsmithEntityBase<OrganizationMembershipRoleUpdate> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: OrganizationMembershipRoleUpdateEntity): OrganizationMembershipRoleUpdateEntity;
    update(this: any, reqdata?: OrganizationMembershipRoleUpdateUpdateData, ctrl?: Control): Promise<OrganizationMembershipRoleUpdate>;
}
export { OrganizationMembershipRoleUpdateEntity };
