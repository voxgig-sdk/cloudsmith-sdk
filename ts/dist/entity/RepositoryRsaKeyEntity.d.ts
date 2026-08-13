import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryRsaKey, RepositoryRsaKeyLoadMatch, RepositoryRsaKeyCreateData } from '../CloudsmithTypes';
declare class RepositoryRsaKeyEntity extends CloudsmithEntityBase<RepositoryRsaKey> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryRsaKeyEntity): RepositoryRsaKeyEntity;
    load(this: any, reqmatch?: RepositoryRsaKeyLoadMatch, ctrl?: Control): Promise<RepositoryRsaKey>;
    create(this: any, reqdata?: RepositoryRsaKeyCreateData, ctrl?: Control): Promise<RepositoryRsaKey>;
}
export { RepositoryRsaKeyEntity };
