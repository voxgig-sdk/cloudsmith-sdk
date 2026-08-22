import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Composer, ComposerLoadMatch, ComposerListMatch, ComposerCreateData, ComposerUpdateData } from '../CloudsmithTypes';
declare class ComposerEntity extends CloudsmithEntityBase<Composer> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: ComposerEntity): ComposerEntity;
    load(this: any, reqmatch?: ComposerLoadMatch, ctrl?: Control): Promise<ComposerEntity>;
    list(this: any, reqmatch?: ComposerListMatch, ctrl?: Control): Promise<ComposerEntity[]>;
    create(this: any, reqdata?: ComposerCreateData, ctrl?: Control): Promise<ComposerEntity>;
    update(this: any, reqdata?: ComposerUpdateData, ctrl?: Control): Promise<ComposerEntity>;
}
export { ComposerEntity };
