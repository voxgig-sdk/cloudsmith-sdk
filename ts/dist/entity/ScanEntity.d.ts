import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Scan } from '../CloudsmithTypes';
declare class ScanEntity extends CloudsmithEntityBase<Scan> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: ScanEntity): ScanEntity;
}
export { ScanEntity };
