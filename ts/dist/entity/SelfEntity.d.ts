import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Self } from '../CloudsmithTypes';
declare class SelfEntity extends CloudsmithEntityBase<Self> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: SelfEntity): SelfEntity;
}
export { SelfEntity };
