import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryToken, RepositoryTokenLoadMatch, RepositoryTokenListMatch, RepositoryTokenCreateData, RepositoryTokenUpdateData } from '../CloudsmithTypes';
declare class RepositoryTokenEntity extends CloudsmithEntityBase<RepositoryToken> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryTokenEntity): RepositoryTokenEntity;
    load(this: any, reqmatch?: RepositoryTokenLoadMatch, ctrl?: Control): Promise<RepositoryToken>;
    list(this: any, reqmatch?: RepositoryTokenListMatch, ctrl?: Control): Promise<RepositoryToken[]>;
    create(this: any, reqdata?: RepositoryTokenCreateData, ctrl?: Control): Promise<RepositoryToken>;
    update(this: any, reqdata?: RepositoryTokenUpdateData, ctrl?: Control): Promise<RepositoryToken>;
}
export { RepositoryTokenEntity };
