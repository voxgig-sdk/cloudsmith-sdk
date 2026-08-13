import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Entitlement, EntitlementLoadMatch, EntitlementCreateData, EntitlementRemoveMatch } from '../CloudsmithTypes';
declare class EntitlementEntity extends CloudsmithEntityBase<Entitlement> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: EntitlementEntity): EntitlementEntity;
    load(this: any, reqmatch?: EntitlementLoadMatch, ctrl?: Control): Promise<Entitlement>;
    create(this: any, reqdata?: EntitlementCreateData, ctrl?: Control): Promise<Entitlement>;
    remove(this: any, reqmatch?: EntitlementRemoveMatch, ctrl?: Control): Promise<Entitlement>;
}
export { EntitlementEntity };
