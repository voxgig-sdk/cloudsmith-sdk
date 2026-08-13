import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Version } from '../CloudsmithTypes';
declare class VersionEntity extends CloudsmithEntityBase<Version> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: VersionEntity): VersionEntity;
}
export { VersionEntity };
