import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Cran, CranLoadMatch, CranListMatch, CranCreateData, CranUpdateData } from '../CloudsmithTypes';
declare class CranEntity extends CloudsmithEntityBase<Cran> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: CranEntity): CranEntity;
    load(this: any, reqmatch?: CranLoadMatch, ctrl?: Control): Promise<CranEntity>;
    list(this: any, reqmatch?: CranListMatch, ctrl?: Control): Promise<CranEntity[]>;
    create(this: any, reqdata?: CranCreateData, ctrl?: Control): Promise<CranEntity>;
    update(this: any, reqdata?: CranUpdateData, ctrl?: Control): Promise<CranEntity>;
}
export { CranEntity };
