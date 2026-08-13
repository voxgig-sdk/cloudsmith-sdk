import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Sync } from '../CloudsmithTypes';
declare class SyncEntity extends CloudsmithEntityBase<Sync> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: SyncEntity): SyncEntity;
}
export { SyncEntity };
