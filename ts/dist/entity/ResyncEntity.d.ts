import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Resync } from '../CloudsmithTypes';
declare class ResyncEntity extends CloudsmithEntityBase<Resync> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: ResyncEntity): ResyncEntity;
}
export { ResyncEntity };
