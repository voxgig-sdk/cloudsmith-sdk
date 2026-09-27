import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryPrivilegeDict, RepositoryPrivilegeDictListMatch } from '../CloudsmithTypes';
declare class RepositoryPrivilegeDictEntity extends CloudsmithEntityBase<RepositoryPrivilegeDict> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryPrivilegeDictEntity): RepositoryPrivilegeDictEntity;
    list(this: any, reqmatch?: RepositoryPrivilegeDictListMatch, ctrl?: Control): Promise<RepositoryPrivilegeDictEntity[]>;
}
export { RepositoryPrivilegeDictEntity };
