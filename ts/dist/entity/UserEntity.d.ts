import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { User, UserListMatch } from '../CloudsmithTypes';
declare class UserEntity extends CloudsmithEntityBase<User> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: UserEntity): UserEntity;
    list(this: any, reqmatch?: UserListMatch, ctrl?: Control): Promise<User[]>;
}
export { UserEntity };
