import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Package, PackageLoadMatch, PackageListMatch, PackageCreateData, PackageRemoveMatch } from '../CloudsmithTypes';
declare class PackageEntity extends CloudsmithEntityBase<Package> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: PackageEntity): PackageEntity;
    load(this: any, reqmatch?: PackageLoadMatch, ctrl?: Control): Promise<Package>;
    list(this: any, reqmatch?: PackageListMatch, ctrl?: Control): Promise<Package[]>;
    create(this: any, reqdata?: PackageCreateData, ctrl?: Control): Promise<Package>;
    remove(this: any, reqmatch?: PackageRemoveMatch, ctrl?: Control): Promise<Package>;
}
export { PackageEntity };
