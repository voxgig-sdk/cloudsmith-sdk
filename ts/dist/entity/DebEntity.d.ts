import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Deb, DebLoadMatch, DebListMatch, DebCreateData, DebUpdateData } from '../CloudsmithTypes';
declare class DebEntity extends CloudsmithEntityBase<Deb> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: DebEntity): DebEntity;
    load(this: any, reqmatch?: DebLoadMatch, ctrl?: Control): Promise<Deb>;
    list(this: any, reqmatch?: DebListMatch, ctrl?: Control): Promise<Deb[]>;
    create(this: any, reqdata?: DebCreateData, ctrl?: Control): Promise<Deb>;
    update(this: any, reqdata?: DebUpdateData, ctrl?: Control): Promise<Deb>;
}
export { DebEntity };
