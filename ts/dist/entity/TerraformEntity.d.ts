import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Terraform } from '../CloudsmithTypes';
declare class TerraformEntity extends CloudsmithEntityBase<Terraform> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: TerraformEntity): TerraformEntity;
}
export { TerraformEntity };
