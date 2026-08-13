import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { OpenidConnect } from '../CloudsmithTypes';
declare class OpenidConnectEntity extends CloudsmithEntityBase<OpenidConnect> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: OpenidConnectEntity): OpenidConnectEntity;
}
export { OpenidConnectEntity };
