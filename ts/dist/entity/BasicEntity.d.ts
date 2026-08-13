import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Basic } from '../CloudsmithTypes';
declare class BasicEntity extends CloudsmithEntityBase<Basic> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: BasicEntity): BasicEntity;
}
export { BasicEntity };
