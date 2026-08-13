import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Gpg } from '../CloudsmithTypes';
declare class GpgEntity extends CloudsmithEntityBase<Gpg> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: GpgEntity): GpgEntity;
}
export { GpgEntity };
