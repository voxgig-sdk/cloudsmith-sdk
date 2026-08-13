import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Gon, GonLoadMatch, GonListMatch, GonCreateData, GonUpdateData } from '../CloudsmithTypes';
declare class GonEntity extends CloudsmithEntityBase<Gon> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: GonEntity): GonEntity;
    load(this: any, reqmatch?: GonLoadMatch, ctrl?: Control): Promise<Gon>;
    list(this: any, reqmatch?: GonListMatch, ctrl?: Control): Promise<Gon[]>;
    create(this: any, reqdata?: GonCreateData, ctrl?: Control): Promise<Gon>;
    update(this: any, reqdata?: GonUpdateData, ctrl?: Control): Promise<Gon>;
}
export { GonEntity };
