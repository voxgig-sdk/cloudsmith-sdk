import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Privilege } from '../CloudsmithTypes';
declare class PrivilegeEntity extends CloudsmithEntityBase<Privilege> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: PrivilegeEntity): PrivilegeEntity;
}
export { PrivilegeEntity };
