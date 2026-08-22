import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { OrganizationTeamMember, OrganizationTeamMemberListMatch, OrganizationTeamMemberCreateData } from '../CloudsmithTypes';
declare class OrganizationTeamMemberEntity extends CloudsmithEntityBase<OrganizationTeamMember> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: OrganizationTeamMemberEntity): OrganizationTeamMemberEntity;
    list(this: any, reqmatch?: OrganizationTeamMemberListMatch, ctrl?: Control): Promise<OrganizationTeamMemberEntity[]>;
    create(this: any, reqdata?: OrganizationTeamMemberCreateData, ctrl?: Control): Promise<OrganizationTeamMemberEntity>;
}
export { OrganizationTeamMemberEntity };
