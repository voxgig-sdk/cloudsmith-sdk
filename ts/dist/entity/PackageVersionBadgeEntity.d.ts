import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { PackageVersionBadge, PackageVersionBadgeLoadMatch } from '../CloudsmithTypes';
declare class PackageVersionBadgeEntity extends CloudsmithEntityBase<PackageVersionBadge> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: PackageVersionBadgeEntity): PackageVersionBadgeEntity;
    load(this: any, reqmatch?: PackageVersionBadgeLoadMatch, ctrl?: Control): Promise<PackageVersionBadgeEntity>;
}
export { PackageVersionBadgeEntity };
