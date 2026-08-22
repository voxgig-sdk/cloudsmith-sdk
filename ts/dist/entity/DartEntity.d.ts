import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Dart, DartLoadMatch, DartListMatch, DartCreateData, DartUpdateData } from '../CloudsmithTypes';
declare class DartEntity extends CloudsmithEntityBase<Dart> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: DartEntity): DartEntity;
    load(this: any, reqmatch?: DartLoadMatch, ctrl?: Control): Promise<DartEntity>;
    list(this: any, reqmatch?: DartListMatch, ctrl?: Control): Promise<DartEntity[]>;
    create(this: any, reqdata?: DartCreateData, ctrl?: Control): Promise<DartEntity>;
    update(this: any, reqdata?: DartUpdateData, ctrl?: Control): Promise<DartEntity>;
}
export { DartEntity };
