import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryEcdsaKey, RepositoryEcdsaKeyLoadMatch, RepositoryEcdsaKeyCreateData } from '../CloudsmithTypes';
declare class RepositoryEcdsaKeyEntity extends CloudsmithEntityBase<RepositoryEcdsaKey> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryEcdsaKeyEntity): RepositoryEcdsaKeyEntity;
    load(this: any, reqmatch?: RepositoryEcdsaKeyLoadMatch, ctrl?: Control): Promise<RepositoryEcdsaKey>;
    create(this: any, reqdata?: RepositoryEcdsaKeyCreateData, ctrl?: Control): Promise<RepositoryEcdsaKey>;
}
export { RepositoryEcdsaKeyEntity };
