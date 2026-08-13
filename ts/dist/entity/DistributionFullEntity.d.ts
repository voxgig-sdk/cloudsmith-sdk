import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { DistributionFull, DistributionFullLoadMatch, DistributionFullListMatch } from '../CloudsmithTypes';
declare class DistributionFullEntity extends CloudsmithEntityBase<DistributionFull> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: DistributionFullEntity): DistributionFullEntity;
    load(this: any, reqmatch?: DistributionFullLoadMatch, ctrl?: Control): Promise<DistributionFull>;
    list(this: any, reqmatch?: DistributionFullListMatch, ctrl?: Control): Promise<DistributionFull[]>;
}
export { DistributionFullEntity };
