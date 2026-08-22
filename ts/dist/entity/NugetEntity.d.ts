import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Nuget, NugetLoadMatch, NugetListMatch, NugetCreateData, NugetUpdateData } from '../CloudsmithTypes';
declare class NugetEntity extends CloudsmithEntityBase<Nuget> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: NugetEntity): NugetEntity;
    load(this: any, reqmatch?: NugetLoadMatch, ctrl?: Control): Promise<NugetEntity>;
    list(this: any, reqmatch?: NugetListMatch, ctrl?: Control): Promise<NugetEntity[]>;
    create(this: any, reqdata?: NugetCreateData, ctrl?: Control): Promise<NugetEntity>;
    update(this: any, reqdata?: NugetUpdateData, ctrl?: Control): Promise<NugetEntity>;
}
export { NugetEntity };
