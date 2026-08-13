import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Complete } from '../CloudsmithTypes';
declare class CompleteEntity extends CloudsmithEntityBase<Complete> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: CompleteEntity): CompleteEntity;
}
export { CompleteEntity };
