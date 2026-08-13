import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { TransferRegion } from '../CloudsmithTypes';
declare class TransferRegionEntity extends CloudsmithEntityBase<TransferRegion> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: TransferRegionEntity): TransferRegionEntity;
}
export { TransferRegionEntity };
