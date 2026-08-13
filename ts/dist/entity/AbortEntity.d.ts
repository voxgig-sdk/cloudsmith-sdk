import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Abort } from '../CloudsmithTypes';
declare class AbortEntity extends CloudsmithEntityBase<Abort> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: AbortEntity): AbortEntity;
}
export { AbortEntity };
