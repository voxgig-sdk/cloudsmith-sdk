import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryRetentionRule, RepositoryRetentionRuleLoadMatch, RepositoryRetentionRuleUpdateData } from '../CloudsmithTypes';
declare class RepositoryRetentionRuleEntity extends CloudsmithEntityBase<RepositoryRetentionRule> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryRetentionRuleEntity): RepositoryRetentionRuleEntity;
    load(this: any, reqmatch?: RepositoryRetentionRuleLoadMatch, ctrl?: Control): Promise<RepositoryRetentionRuleEntity>;
    update(this: any, reqdata?: RepositoryRetentionRuleUpdateData, ctrl?: Control): Promise<RepositoryRetentionRuleEntity>;
}
export { RepositoryRetentionRuleEntity };
