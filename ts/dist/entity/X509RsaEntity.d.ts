import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { X509Rsa } from '../CloudsmithTypes';
declare class X509RsaEntity extends CloudsmithEntityBase<X509Rsa> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: X509RsaEntity): X509RsaEntity;
}
export { X509RsaEntity };
