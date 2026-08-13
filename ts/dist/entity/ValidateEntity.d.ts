import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Validate } from '../CloudsmithTypes';
declare class ValidateEntity extends CloudsmithEntityBase<Validate> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: ValidateEntity): ValidateEntity;
}
export { ValidateEntity };
