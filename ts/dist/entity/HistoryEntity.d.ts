import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { History } from '../CloudsmithTypes';
declare class HistoryEntity extends CloudsmithEntityBase<History> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: HistoryEntity): HistoryEntity;
}
export { HistoryEntity };
