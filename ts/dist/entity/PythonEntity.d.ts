import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Python, PythonLoadMatch, PythonListMatch, PythonCreateData, PythonUpdateData } from '../CloudsmithTypes';
declare class PythonEntity extends CloudsmithEntityBase<Python> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: PythonEntity): PythonEntity;
    load(this: any, reqmatch?: PythonLoadMatch, ctrl?: Control): Promise<Python>;
    list(this: any, reqmatch?: PythonListMatch, ctrl?: Control): Promise<Python[]>;
    create(this: any, reqdata?: PythonCreateData, ctrl?: Control): Promise<Python>;
    update(this: any, reqdata?: PythonUpdateData, ctrl?: Control): Promise<Python>;
}
export { PythonEntity };
