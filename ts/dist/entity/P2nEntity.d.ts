import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { P2n } from '../CloudsmithTypes';
declare class P2nEntity extends CloudsmithEntityBase<P2n> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: P2nEntity): P2nEntity;
}
export { P2nEntity };
