import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { PackageFilePartsUpload, PackageFilePartsUploadLoadMatch } from '../CloudsmithTypes';
declare class PackageFilePartsUploadEntity extends CloudsmithEntityBase<PackageFilePartsUpload> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: PackageFilePartsUploadEntity): PackageFilePartsUploadEntity;
    load(this: any, reqmatch?: PackageFilePartsUploadLoadMatch, ctrl?: Control): Promise<PackageFilePartsUpload>;
}
export { PackageFilePartsUploadEntity };
