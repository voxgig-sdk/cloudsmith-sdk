import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryTokenSync, RepositoryTokenSyncCreateData } from '../CloudsmithTypes';
declare class RepositoryTokenSyncEntity extends CloudsmithEntityBase<RepositoryTokenSync> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryTokenSyncEntity): RepositoryTokenSyncEntity;
    create(this: any, reqdata?: RepositoryTokenSyncCreateData, ctrl?: Control): Promise<RepositoryTokenSyncEntity>;
}
export { RepositoryTokenSyncEntity };
