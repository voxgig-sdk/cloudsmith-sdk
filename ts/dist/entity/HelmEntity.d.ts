import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Helm, HelmLoadMatch, HelmListMatch, HelmCreateData, HelmUpdateData } from '../CloudsmithTypes';
declare class HelmEntity extends CloudsmithEntityBase<Helm> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: HelmEntity): HelmEntity;
    load(this: any, reqmatch?: HelmLoadMatch, ctrl?: Control): Promise<HelmEntity>;
    list(this: any, reqmatch?: HelmListMatch, ctrl?: Control): Promise<HelmEntity[]>;
    create(this: any, reqdata?: HelmCreateData, ctrl?: Control): Promise<HelmEntity>;
    update(this: any, reqdata?: HelmUpdateData, ctrl?: Control): Promise<HelmEntity>;
}
export { HelmEntity };
