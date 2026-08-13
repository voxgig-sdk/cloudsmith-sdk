import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Status } from '../CloudsmithTypes';
declare class StatusEntity extends CloudsmithEntityBase<Status> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: StatusEntity): StatusEntity;
}
export { StatusEntity };
