import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { PackageDenyPolicy, PackageDenyPolicyLoadMatch, PackageDenyPolicyListMatch, PackageDenyPolicyCreateData, PackageDenyPolicyUpdateData } from '../CloudsmithTypes';
declare class PackageDenyPolicyEntity extends CloudsmithEntityBase<PackageDenyPolicy> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: PackageDenyPolicyEntity): PackageDenyPolicyEntity;
    load(this: any, reqmatch?: PackageDenyPolicyLoadMatch, ctrl?: Control): Promise<PackageDenyPolicyEntity>;
    list(this: any, reqmatch?: PackageDenyPolicyListMatch, ctrl?: Control): Promise<PackageDenyPolicyEntity[]>;
    create(this: any, reqdata?: PackageDenyPolicyCreateData, ctrl?: Control): Promise<PackageDenyPolicyEntity>;
    update(this: any, reqdata?: PackageDenyPolicyUpdateData, ctrl?: Control): Promise<PackageDenyPolicyEntity>;
}
export { PackageDenyPolicyEntity };
