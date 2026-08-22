import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { OrganizationTeam, OrganizationTeamLoadMatch, OrganizationTeamListMatch, OrganizationTeamCreateData, OrganizationTeamUpdateData } from '../CloudsmithTypes';
declare class OrganizationTeamEntity extends CloudsmithEntityBase<OrganizationTeam> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: OrganizationTeamEntity): OrganizationTeamEntity;
    load(this: any, reqmatch?: OrganizationTeamLoadMatch, ctrl?: Control): Promise<OrganizationTeamEntity>;
    list(this: any, reqmatch?: OrganizationTeamListMatch, ctrl?: Control): Promise<OrganizationTeamEntity[]>;
    create(this: any, reqdata?: OrganizationTeamCreateData, ctrl?: Control): Promise<OrganizationTeamEntity>;
    update(this: any, reqdata?: OrganizationTeamUpdateData, ctrl?: Control): Promise<OrganizationTeamEntity>;
}
export { OrganizationTeamEntity };
