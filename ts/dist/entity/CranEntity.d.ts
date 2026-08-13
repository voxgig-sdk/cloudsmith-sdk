import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Cran, CranLoadMatch, CranListMatch, CranCreateData, CranUpdateData } from '../CloudsmithTypes';
declare class CranEntity extends CloudsmithEntityBase<Cran> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: CranEntity): CranEntity;
    load(this: any, reqmatch?: CranLoadMatch, ctrl?: Control): Promise<Cran>;
    list(this: any, reqmatch?: CranListMatch, ctrl?: Control): Promise<Cran[]>;
    create(this: any, reqdata?: CranCreateData, ctrl?: Control): Promise<Cran>;
    update(this: any, reqdata?: CranUpdateData, ctrl?: Control): Promise<Cran>;
}
export { CranEntity };
