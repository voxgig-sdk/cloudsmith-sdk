import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Quarantine } from '../CloudsmithTypes';
declare class QuarantineEntity extends CloudsmithEntityBase<Quarantine> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: QuarantineEntity): QuarantineEntity;
}
export { QuarantineEntity };
