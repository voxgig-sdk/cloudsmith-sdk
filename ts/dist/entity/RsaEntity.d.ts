import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Rsa } from '../CloudsmithTypes';
declare class RsaEntity extends CloudsmithEntityBase<Rsa> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RsaEntity): RsaEntity;
}
export { RsaEntity };
