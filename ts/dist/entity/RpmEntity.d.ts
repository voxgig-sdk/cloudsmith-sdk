import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Rpm, RpmLoadMatch, RpmListMatch, RpmCreateData, RpmUpdateData } from '../CloudsmithTypes';
declare class RpmEntity extends CloudsmithEntityBase<Rpm> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RpmEntity): RpmEntity;
    load(this: any, reqmatch?: RpmLoadMatch, ctrl?: Control): Promise<Rpm>;
    list(this: any, reqmatch?: RpmListMatch, ctrl?: Control): Promise<Rpm[]>;
    create(this: any, reqdata?: RpmCreateData, ctrl?: Control): Promise<Rpm>;
    update(this: any, reqdata?: RpmUpdateData, ctrl?: Control): Promise<Rpm>;
}
export { RpmEntity };
