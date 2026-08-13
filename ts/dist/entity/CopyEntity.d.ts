import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Copy } from '../CloudsmithTypes';
declare class CopyEntity extends CloudsmithEntityBase<Copy> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: CopyEntity): CopyEntity;
}
export { CopyEntity };
