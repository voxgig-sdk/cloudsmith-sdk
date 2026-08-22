import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Cargo, CargoLoadMatch, CargoListMatch, CargoCreateData, CargoUpdateData } from '../CloudsmithTypes';
declare class CargoEntity extends CloudsmithEntityBase<Cargo> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: CargoEntity): CargoEntity;
    load(this: any, reqmatch?: CargoLoadMatch, ctrl?: Control): Promise<CargoEntity>;
    list(this: any, reqmatch?: CargoListMatch, ctrl?: Control): Promise<CargoEntity[]>;
    create(this: any, reqdata?: CargoCreateData, ctrl?: Control): Promise<CargoEntity>;
    update(this: any, reqdata?: CargoUpdateData, ctrl?: Control): Promise<CargoEntity>;
}
export { CargoEntity };
