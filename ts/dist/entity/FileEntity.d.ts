import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { File, FileCreateData } from '../CloudsmithTypes';
declare class FileEntity extends CloudsmithEntityBase<File> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: FileEntity): FileEntity;
    create(this: any, reqdata?: FileCreateData, ctrl?: Control): Promise<FileEntity>;
}
export { FileEntity };
