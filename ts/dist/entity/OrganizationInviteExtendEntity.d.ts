import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { OrganizationInviteExtend, OrganizationInviteExtendCreateData } from '../CloudsmithTypes';
declare class OrganizationInviteExtendEntity extends CloudsmithEntityBase<OrganizationInviteExtend> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: OrganizationInviteExtendEntity): OrganizationInviteExtendEntity;
    create(this: any, reqdata?: OrganizationInviteExtendCreateData, ctrl?: Control): Promise<OrganizationInviteExtend>;
}
export { OrganizationInviteExtendEntity };
