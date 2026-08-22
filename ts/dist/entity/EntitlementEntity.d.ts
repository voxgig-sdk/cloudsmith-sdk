import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Entitlement, EntitlementLoadMatch, EntitlementCreateData, EntitlementRemoveMatch } from '../CloudsmithTypes';
declare class EntitlementEntity extends CloudsmithEntityBase<Entitlement> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: EntitlementEntity): EntitlementEntity;
    load(this: any, reqmatch?: EntitlementLoadMatch, ctrl?: Control): Promise<EntitlementEntity>;
    create(this: any, reqdata?: EntitlementCreateData, ctrl?: Control): Promise<EntitlementEntity>;
    remove(this: any, reqmatch?: EntitlementRemoveMatch, ctrl?: Control): Promise<EntitlementEntity>;
}
export { EntitlementEntity };
