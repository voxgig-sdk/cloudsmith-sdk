import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Cargo, CargoLoadMatch, CargoListMatch, CargoCreateData, CargoUpdateData } from '../CloudsmithTypes';
declare class CargoEntity extends CloudsmithEntityBase<Cargo> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: CargoEntity): CargoEntity;
    load(this: any, reqmatch?: CargoLoadMatch, ctrl?: Control): Promise<Cargo>;
    list(this: any, reqmatch?: CargoListMatch, ctrl?: Control): Promise<Cargo[]>;
    create(this: any, reqdata?: CargoCreateData, ctrl?: Control): Promise<Cargo>;
    update(this: any, reqdata?: CargoUpdateData, ctrl?: Control): Promise<Cargo>;
}
export { CargoEntity };
