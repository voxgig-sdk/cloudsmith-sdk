import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryGeoIpRule, RepositoryGeoIpRuleLoadMatch, RepositoryGeoIpRuleUpdateData } from '../CloudsmithTypes';
declare class RepositoryGeoIpRuleEntity extends CloudsmithEntityBase<RepositoryGeoIpRule> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryGeoIpRuleEntity): RepositoryGeoIpRuleEntity;
    load(this: any, reqmatch?: RepositoryGeoIpRuleLoadMatch, ctrl?: Control): Promise<RepositoryGeoIpRuleEntity>;
    update(this: any, reqdata?: RepositoryGeoIpRuleUpdateData, ctrl?: Control): Promise<RepositoryGeoIpRuleEntity>;
}
export { RepositoryGeoIpRuleEntity };
