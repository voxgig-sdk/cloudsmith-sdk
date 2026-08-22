import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { UserAuthToken, UserAuthTokenCreateData } from '../CloudsmithTypes';
declare class UserAuthTokenEntity extends CloudsmithEntityBase<UserAuthToken> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: UserAuthTokenEntity): UserAuthTokenEntity;
    create(this: any, reqdata?: UserAuthTokenCreateData, ctrl?: Control): Promise<UserAuthTokenEntity>;
}
export { UserAuthTokenEntity };
