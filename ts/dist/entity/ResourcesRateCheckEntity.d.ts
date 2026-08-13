import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { ResourcesRateCheck, ResourcesRateCheckLoadMatch } from '../CloudsmithTypes';
declare class ResourcesRateCheckEntity extends CloudsmithEntityBase<ResourcesRateCheck> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: ResourcesRateCheckEntity): ResourcesRateCheckEntity;
    load(this: any, reqmatch?: ResourcesRateCheckLoadMatch, ctrl?: Control): Promise<ResourcesRateCheck>;
}
export { ResourcesRateCheckEntity };
