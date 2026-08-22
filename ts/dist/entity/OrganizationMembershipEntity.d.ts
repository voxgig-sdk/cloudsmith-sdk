import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { OrganizationMembership, OrganizationMembershipLoadMatch, OrganizationMembershipListMatch, OrganizationMembershipUpdateData } from '../CloudsmithTypes';
declare class OrganizationMembershipEntity extends CloudsmithEntityBase<OrganizationMembership> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: OrganizationMembershipEntity): OrganizationMembershipEntity;
    load(this: any, reqmatch?: OrganizationMembershipLoadMatch, ctrl?: Control): Promise<OrganizationMembershipEntity>;
    list(this: any, reqmatch?: OrganizationMembershipListMatch, ctrl?: Control): Promise<OrganizationMembershipEntity[]>;
    update(this: any, reqdata?: OrganizationMembershipUpdateData, ctrl?: Control): Promise<OrganizationMembershipEntity>;
}
export { OrganizationMembershipEntity };
