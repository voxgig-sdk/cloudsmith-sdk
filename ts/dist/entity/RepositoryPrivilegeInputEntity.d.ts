import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryPrivilegeInput, RepositoryPrivilegeInputListMatch } from '../CloudsmithTypes';
declare class RepositoryPrivilegeInputEntity extends CloudsmithEntityBase<RepositoryPrivilegeInput> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryPrivilegeInputEntity): RepositoryPrivilegeInputEntity;
    list(this: any, reqmatch?: RepositoryPrivilegeInputListMatch, ctrl?: Control): Promise<RepositoryPrivilegeInput[]>;
}
export { RepositoryPrivilegeInputEntity };
