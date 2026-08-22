import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { PackageFileUpload, PackageFileUploadCreateData } from '../CloudsmithTypes';
declare class PackageFileUploadEntity extends CloudsmithEntityBase<PackageFileUpload> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: PackageFileUploadEntity): PackageFileUploadEntity;
    create(this: any, reqdata?: PackageFileUploadCreateData, ctrl?: Control): Promise<PackageFileUploadEntity>;
}
export { PackageFileUploadEntity };
