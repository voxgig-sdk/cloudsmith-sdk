import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryGpgKey, RepositoryGpgKeyLoadMatch, RepositoryGpgKeyCreateData } from '../CloudsmithTypes';
declare class RepositoryGpgKeyEntity extends CloudsmithEntityBase<RepositoryGpgKey> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryGpgKeyEntity): RepositoryGpgKeyEntity;
    load(this: any, reqmatch?: RepositoryGpgKeyLoadMatch, ctrl?: Control): Promise<RepositoryGpgKey>;
    create(this: any, reqdata?: RepositoryGpgKeyCreateData, ctrl?: Control): Promise<RepositoryGpgKey>;
}
export { RepositoryGpgKeyEntity };
