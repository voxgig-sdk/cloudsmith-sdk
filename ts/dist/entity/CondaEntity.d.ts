import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Conda, CondaLoadMatch, CondaListMatch, CondaCreateData, CondaUpdateData } from '../CloudsmithTypes';
declare class CondaEntity extends CloudsmithEntityBase<Conda> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: CondaEntity): CondaEntity;
    load(this: any, reqmatch?: CondaLoadMatch, ctrl?: Control): Promise<Conda>;
    list(this: any, reqmatch?: CondaListMatch, ctrl?: Control): Promise<Conda[]>;
    create(this: any, reqdata?: CondaCreateData, ctrl?: Control): Promise<Conda>;
    update(this: any, reqdata?: CondaUpdateData, ctrl?: Control): Promise<Conda>;
}
export { CondaEntity };
