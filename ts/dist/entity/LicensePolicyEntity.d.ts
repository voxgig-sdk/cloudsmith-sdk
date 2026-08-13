import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { LicensePolicy } from '../CloudsmithTypes';
declare class LicensePolicyEntity extends CloudsmithEntityBase<LicensePolicy> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: LicensePolicyEntity): LicensePolicyEntity;
}
export { LicensePolicyEntity };
