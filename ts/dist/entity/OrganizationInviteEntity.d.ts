import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { OrganizationInvite, OrganizationInviteListMatch, OrganizationInviteCreateData, OrganizationInviteUpdateData } from '../CloudsmithTypes';
declare class OrganizationInviteEntity extends CloudsmithEntityBase<OrganizationInvite> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: OrganizationInviteEntity): OrganizationInviteEntity;
    list(this: any, reqmatch?: OrganizationInviteListMatch, ctrl?: Control): Promise<OrganizationInviteEntity[]>;
    create(this: any, reqdata?: OrganizationInviteCreateData, ctrl?: Control): Promise<OrganizationInviteEntity>;
    update(this: any, reqdata?: OrganizationInviteUpdateData, ctrl?: Control): Promise<OrganizationInviteEntity>;
}
export { OrganizationInviteEntity };
