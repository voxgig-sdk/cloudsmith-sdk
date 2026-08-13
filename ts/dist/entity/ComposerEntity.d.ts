import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Composer, ComposerLoadMatch, ComposerListMatch, ComposerCreateData, ComposerUpdateData } from '../CloudsmithTypes';
declare class ComposerEntity extends CloudsmithEntityBase<Composer> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: ComposerEntity): ComposerEntity;
    load(this: any, reqmatch?: ComposerLoadMatch, ctrl?: Control): Promise<Composer>;
    list(this: any, reqmatch?: ComposerListMatch, ctrl?: Control): Promise<Composer[]>;
    create(this: any, reqdata?: ComposerCreateData, ctrl?: Control): Promise<Composer>;
    update(this: any, reqdata?: ComposerUpdateData, ctrl?: Control): Promise<Composer>;
}
export { ComposerEntity };
