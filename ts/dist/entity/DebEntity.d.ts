import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Deb, DebLoadMatch, DebListMatch, DebCreateData, DebUpdateData } from '../CloudsmithTypes';
declare class DebEntity extends CloudsmithEntityBase<Deb> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: DebEntity): DebEntity;
    load(this: any, reqmatch?: DebLoadMatch, ctrl?: Control): Promise<DebEntity>;
    list(this: any, reqmatch?: DebListMatch, ctrl?: Control): Promise<DebEntity[]>;
    create(this: any, reqdata?: DebCreateData, ctrl?: Control): Promise<DebEntity>;
    update(this: any, reqdata?: DebUpdateData, ctrl?: Control): Promise<DebEntity>;
}
export { DebEntity };
