import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { X509Ecdsa } from '../CloudsmithTypes';
declare class X509EcdsaEntity extends CloudsmithEntityBase<X509Ecdsa> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: X509EcdsaEntity): X509EcdsaEntity;
}
export { X509EcdsaEntity };
