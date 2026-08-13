import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Dart, DartLoadMatch, DartListMatch, DartCreateData, DartUpdateData } from '../CloudsmithTypes';
declare class DartEntity extends CloudsmithEntityBase<Dart> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: DartEntity): DartEntity;
    load(this: any, reqmatch?: DartLoadMatch, ctrl?: Control): Promise<Dart>;
    list(this: any, reqmatch?: DartListMatch, ctrl?: Control): Promise<Dart[]>;
    create(this: any, reqdata?: DartCreateData, ctrl?: Control): Promise<Dart>;
    update(this: any, reqdata?: DartUpdateData, ctrl?: Control): Promise<Dart>;
}
export { DartEntity };
