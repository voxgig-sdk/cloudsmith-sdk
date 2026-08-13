import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { StatusBasic, StatusBasicLoadMatch } from '../CloudsmithTypes';
declare class StatusBasicEntity extends CloudsmithEntityBase<StatusBasic> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: StatusBasicEntity): StatusBasicEntity;
    load(this: any, reqmatch?: StatusBasicLoadMatch, ctrl?: Control): Promise<StatusBasic>;
}
export { StatusBasicEntity };
