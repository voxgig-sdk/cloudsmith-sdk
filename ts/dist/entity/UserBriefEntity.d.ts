import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { UserBrief, UserBriefLoadMatch } from '../CloudsmithTypes';
declare class UserBriefEntity extends CloudsmithEntityBase<UserBrief> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: UserBriefEntity): UserBriefEntity;
    load(this: any, reqmatch?: UserBriefLoadMatch, ctrl?: Control): Promise<UserBrief>;
}
export { UserBriefEntity };
