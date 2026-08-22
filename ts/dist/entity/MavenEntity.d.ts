import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Maven, MavenLoadMatch, MavenListMatch, MavenCreateData, MavenUpdateData } from '../CloudsmithTypes';
declare class MavenEntity extends CloudsmithEntityBase<Maven> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: MavenEntity): MavenEntity;
    load(this: any, reqmatch?: MavenLoadMatch, ctrl?: Control): Promise<MavenEntity>;
    list(this: any, reqmatch?: MavenListMatch, ctrl?: Control): Promise<MavenEntity[]>;
    create(this: any, reqdata?: MavenCreateData, ctrl?: Control): Promise<MavenEntity>;
    update(this: any, reqdata?: MavenUpdateData, ctrl?: Control): Promise<MavenEntity>;
}
export { MavenEntity };
