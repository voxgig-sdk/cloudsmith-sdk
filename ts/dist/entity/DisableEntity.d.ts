import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Disable } from '../CloudsmithTypes';
declare class DisableEntity extends CloudsmithEntityBase<Disable> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: DisableEntity): DisableEntity;
}
export { DisableEntity };
