import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryTokenRefresh, RepositoryTokenRefreshCreateData } from '../CloudsmithTypes';
declare class RepositoryTokenRefreshEntity extends CloudsmithEntityBase<RepositoryTokenRefresh> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryTokenRefreshEntity): RepositoryTokenRefreshEntity;
    create(this: any, reqdata?: RepositoryTokenRefreshCreateData, ctrl?: Control): Promise<RepositoryTokenRefresh>;
}
export { RepositoryTokenRefreshEntity };
