import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { OrganizationSamlAuth, OrganizationSamlAuthLoadMatch, OrganizationSamlAuthUpdateData } from '../CloudsmithTypes';
declare class OrganizationSamlAuthEntity extends CloudsmithEntityBase<OrganizationSamlAuth> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: OrganizationSamlAuthEntity): OrganizationSamlAuthEntity;
    load(this: any, reqmatch?: OrganizationSamlAuthLoadMatch, ctrl?: Control): Promise<OrganizationSamlAuthEntity>;
    update(this: any, reqdata?: OrganizationSamlAuthUpdateData, ctrl?: Control): Promise<OrganizationSamlAuthEntity>;
}
export { OrganizationSamlAuthEntity };
