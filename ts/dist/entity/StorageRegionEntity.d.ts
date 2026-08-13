import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { StorageRegion, StorageRegionLoadMatch, StorageRegionListMatch } from '../CloudsmithTypes';
declare class StorageRegionEntity extends CloudsmithEntityBase<StorageRegion> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: StorageRegionEntity): StorageRegionEntity;
    load(this: any, reqmatch?: StorageRegionLoadMatch, ctrl?: Control): Promise<StorageRegion>;
    list(this: any, reqmatch?: StorageRegionListMatch, ctrl?: Control): Promise<StorageRegion[]>;
}
export { StorageRegionEntity };
