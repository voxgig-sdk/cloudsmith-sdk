import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Conan } from '../CloudsmithTypes';
declare class ConanEntity extends CloudsmithEntityBase<Conan> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: ConanEntity): ConanEntity;
}
export { ConanEntity };
