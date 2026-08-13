import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Enable } from '../CloudsmithTypes';
declare class EnableEntity extends CloudsmithEntityBase<Enable> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: EnableEntity): EnableEntity;
}
export { EnableEntity };
