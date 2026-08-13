import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Ecdsa } from '../CloudsmithTypes';
declare class EcdsaEntity extends CloudsmithEntityBase<Ecdsa> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: EcdsaEntity): EcdsaEntity;
}
export { EcdsaEntity };
