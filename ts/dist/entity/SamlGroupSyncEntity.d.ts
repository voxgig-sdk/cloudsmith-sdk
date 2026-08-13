import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { SamlGroupSync } from '../CloudsmithTypes';
declare class SamlGroupSyncEntity extends CloudsmithEntityBase<SamlGroupSync> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: SamlGroupSyncEntity): SamlGroupSyncEntity;
}
export { SamlGroupSyncEntity };
