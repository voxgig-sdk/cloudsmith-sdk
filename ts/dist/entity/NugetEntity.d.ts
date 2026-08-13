import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Nuget, NugetLoadMatch, NugetListMatch, NugetCreateData, NugetUpdateData } from '../CloudsmithTypes';
declare class NugetEntity extends CloudsmithEntityBase<Nuget> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: NugetEntity): NugetEntity;
    load(this: any, reqmatch?: NugetLoadMatch, ctrl?: Control): Promise<Nuget>;
    list(this: any, reqmatch?: NugetListMatch, ctrl?: Control): Promise<Nuget[]>;
    create(this: any, reqdata?: NugetCreateData, ctrl?: Control): Promise<Nuget>;
    update(this: any, reqdata?: NugetUpdateData, ctrl?: Control): Promise<Nuget>;
}
export { NugetEntity };
