import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Npm, NpmLoadMatch, NpmListMatch, NpmCreateData, NpmUpdateData } from '../CloudsmithTypes';
declare class NpmEntity extends CloudsmithEntityBase<Npm> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: NpmEntity): NpmEntity;
    load(this: any, reqmatch?: NpmLoadMatch, ctrl?: Control): Promise<NpmEntity>;
    list(this: any, reqmatch?: NpmListMatch, ctrl?: Control): Promise<NpmEntity[]>;
    create(this: any, reqdata?: NpmCreateData, ctrl?: Control): Promise<NpmEntity>;
    update(this: any, reqdata?: NpmUpdateData, ctrl?: Control): Promise<NpmEntity>;
}
export { NpmEntity };
