import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Cocoapod } from '../CloudsmithTypes';
declare class CocoapodEntity extends CloudsmithEntityBase<Cocoapod> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: CocoapodEntity): CocoapodEntity;
}
export { CocoapodEntity };
