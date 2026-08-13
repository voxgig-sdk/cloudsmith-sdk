import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Retention } from '../CloudsmithTypes';
declare class RetentionEntity extends CloudsmithEntityBase<Retention> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RetentionEntity): RetentionEntity;
}
export { RetentionEntity };
