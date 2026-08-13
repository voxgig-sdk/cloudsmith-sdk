import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Quota, QuotaLoadMatch } from '../CloudsmithTypes';
declare class QuotaEntity extends CloudsmithEntityBase<Quota> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: QuotaEntity): QuotaEntity;
    load(this: any, reqmatch?: QuotaLoadMatch, ctrl?: Control): Promise<Quota>;
}
export { QuotaEntity };
