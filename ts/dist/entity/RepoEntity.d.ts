import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Repo, RepoLoadMatch, RepoListMatch, RepoCreateData, RepoUpdateData, RepoRemoveMatch } from '../CloudsmithTypes';
declare class RepoEntity extends CloudsmithEntityBase<Repo> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepoEntity): RepoEntity;
    load(this: any, reqmatch?: RepoLoadMatch, ctrl?: Control): Promise<Repo>;
    list(this: any, reqmatch?: RepoListMatch, ctrl?: Control): Promise<Repo[]>;
    create(this: any, reqdata?: RepoCreateData, ctrl?: Control): Promise<Repo>;
    update(this: any, reqdata?: RepoUpdateData, ctrl?: Control): Promise<Repo>;
    remove(this: any, reqmatch?: RepoRemoveMatch, ctrl?: Control): Promise<Repo>;
}
export { RepoEntity };
