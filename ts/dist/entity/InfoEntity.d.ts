import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Info } from '../CloudsmithTypes';
declare class InfoEntity extends CloudsmithEntityBase<Info> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: InfoEntity): InfoEntity;
}
export { InfoEntity };
