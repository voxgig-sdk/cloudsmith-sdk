import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { DynamicMapping, DynamicMappingLoadMatch, DynamicMappingListMatch } from '../CloudsmithTypes';
declare class DynamicMappingEntity extends CloudsmithEntityBase<DynamicMapping> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: DynamicMappingEntity): DynamicMappingEntity;
    load(this: any, reqmatch?: DynamicMappingLoadMatch, ctrl?: Control): Promise<DynamicMappingEntity>;
    list(this: any, reqmatch?: DynamicMappingListMatch, ctrl?: Control): Promise<DynamicMappingEntity[]>;
}
export { DynamicMappingEntity };
