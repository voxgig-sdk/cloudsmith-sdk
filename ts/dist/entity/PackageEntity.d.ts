import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Package, PackageLoadMatch, PackageListMatch, PackageCreateData, PackageRemoveMatch } from '../CloudsmithTypes';
declare class PackageEntity extends CloudsmithEntityBase<Package> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: PackageEntity): PackageEntity;
    load(this: any, reqmatch?: PackageLoadMatch, ctrl?: Control): Promise<PackageEntity>;
    list(this: any, reqmatch?: PackageListMatch, ctrl?: Control): Promise<PackageEntity[]>;
    create(this: any, reqdata?: PackageCreateData, ctrl?: Control): Promise<PackageEntity>;
    remove(this: any, reqmatch?: PackageRemoveMatch, ctrl?: Control): Promise<PackageEntity>;
}
export { PackageEntity };
