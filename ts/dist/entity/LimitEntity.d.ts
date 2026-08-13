import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Limit } from '../CloudsmithTypes';
declare class LimitEntity extends CloudsmithEntityBase<Limit> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: LimitEntity): LimitEntity;
}
export { LimitEntity };
