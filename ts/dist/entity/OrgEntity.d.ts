import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Org, OrgLoadMatch, OrgListMatch, OrgCreateData, OrgUpdateData, OrgRemoveMatch } from '../CloudsmithTypes';
declare class OrgEntity extends CloudsmithEntityBase<Org> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: OrgEntity): OrgEntity;
    load(this: any, reqmatch?: OrgLoadMatch, ctrl?: Control): Promise<OrgEntity>;
    list(this: any, reqmatch?: OrgListMatch, ctrl?: Control): Promise<OrgEntity[]>;
    create(this: any, reqdata?: OrgCreateData, ctrl?: Control): Promise<OrgEntity>;
    update(this: any, reqdata?: OrgUpdateData, ctrl?: Control): Promise<OrgEntity>;
    remove(this: any, reqmatch?: OrgRemoveMatch, ctrl?: Control): Promise<OrgEntity>;
}
export { OrgEntity };
