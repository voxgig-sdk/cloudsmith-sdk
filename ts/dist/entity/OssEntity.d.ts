import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Oss } from '../CloudsmithTypes';
declare class OssEntity extends CloudsmithEntityBase<Oss> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: OssEntity): OssEntity;
}
export { OssEntity };
