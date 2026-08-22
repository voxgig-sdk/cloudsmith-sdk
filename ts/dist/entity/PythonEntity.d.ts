import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Python, PythonLoadMatch, PythonListMatch, PythonCreateData, PythonUpdateData } from '../CloudsmithTypes';
declare class PythonEntity extends CloudsmithEntityBase<Python> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: PythonEntity): PythonEntity;
    load(this: any, reqmatch?: PythonLoadMatch, ctrl?: Control): Promise<PythonEntity>;
    list(this: any, reqmatch?: PythonListMatch, ctrl?: Control): Promise<PythonEntity[]>;
    create(this: any, reqdata?: PythonCreateData, ctrl?: Control): Promise<PythonEntity>;
    update(this: any, reqdata?: PythonUpdateData, ctrl?: Control): Promise<PythonEntity>;
}
export { PythonEntity };
