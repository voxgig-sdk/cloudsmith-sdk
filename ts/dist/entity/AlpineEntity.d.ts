import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Alpine } from '../CloudsmithTypes';
declare class AlpineEntity extends CloudsmithEntityBase<Alpine> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: AlpineEntity): AlpineEntity;
}
export { AlpineEntity };
