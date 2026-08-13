import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { OrganizationPackageLicensePolicy, OrganizationPackageLicensePolicyLoadMatch, OrganizationPackageLicensePolicyListMatch, OrganizationPackageLicensePolicyCreateData, OrganizationPackageLicensePolicyUpdateData } from '../CloudsmithTypes';
declare class OrganizationPackageLicensePolicyEntity extends CloudsmithEntityBase<OrganizationPackageLicensePolicy> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: OrganizationPackageLicensePolicyEntity): OrganizationPackageLicensePolicyEntity;
    load(this: any, reqmatch?: OrganizationPackageLicensePolicyLoadMatch, ctrl?: Control): Promise<OrganizationPackageLicensePolicy>;
    list(this: any, reqmatch?: OrganizationPackageLicensePolicyListMatch, ctrl?: Control): Promise<OrganizationPackageLicensePolicy[]>;
    create(this: any, reqdata?: OrganizationPackageLicensePolicyCreateData, ctrl?: Control): Promise<OrganizationPackageLicensePolicy>;
    update(this: any, reqdata?: OrganizationPackageLicensePolicyUpdateData, ctrl?: Control): Promise<OrganizationPackageLicensePolicy>;
}
export { OrganizationPackageLicensePolicyEntity };
