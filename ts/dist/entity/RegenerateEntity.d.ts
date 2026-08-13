import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Regenerate } from '../CloudsmithTypes';
declare class RegenerateEntity extends CloudsmithEntityBase<Regenerate> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RegenerateEntity): RegenerateEntity;
}
export { RegenerateEntity };
