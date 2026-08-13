import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Refresh } from '../CloudsmithTypes';
declare class RefreshEntity extends CloudsmithEntityBase<Refresh> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RefreshEntity): RefreshEntity;
}
export { RefreshEntity };
