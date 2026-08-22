import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Gon, GonLoadMatch, GonListMatch, GonCreateData, GonUpdateData } from '../CloudsmithTypes';
declare class GonEntity extends CloudsmithEntityBase<Gon> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: GonEntity): GonEntity;
    load(this: any, reqmatch?: GonLoadMatch, ctrl?: Control): Promise<GonEntity>;
    list(this: any, reqmatch?: GonListMatch, ctrl?: Control): Promise<GonEntity[]>;
    create(this: any, reqdata?: GonCreateData, ctrl?: Control): Promise<GonEntity>;
    update(this: any, reqdata?: GonUpdateData, ctrl?: Control): Promise<GonEntity>;
}
export { GonEntity };
