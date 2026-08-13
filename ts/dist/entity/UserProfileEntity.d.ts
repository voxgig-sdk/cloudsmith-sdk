import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { UserProfile, UserProfileLoadMatch } from '../CloudsmithTypes';
declare class UserProfileEntity extends CloudsmithEntityBase<UserProfile> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: UserProfileEntity): UserProfileEntity;
    load(this: any, reqmatch?: UserProfileLoadMatch, ctrl?: Control): Promise<UserProfile>;
}
export { UserProfileEntity };
