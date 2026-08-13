import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { DenyPolicy } from '../CloudsmithTypes';
declare class DenyPolicyEntity extends CloudsmithEntityBase<DenyPolicy> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: DenyPolicyEntity): DenyPolicyEntity;
}
export { DenyPolicyEntity };
