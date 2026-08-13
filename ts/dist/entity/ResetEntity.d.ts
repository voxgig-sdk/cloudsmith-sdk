import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Reset } from '../CloudsmithTypes';
declare class ResetEntity extends CloudsmithEntityBase<Reset> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: ResetEntity): ResetEntity;
}
export { ResetEntity };
