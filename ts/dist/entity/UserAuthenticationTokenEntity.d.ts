import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { UserAuthenticationToken, UserAuthenticationTokenCreateData, UserAuthenticationTokenUpdateData } from '../CloudsmithTypes';
declare class UserAuthenticationTokenEntity extends CloudsmithEntityBase<UserAuthenticationToken> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: UserAuthenticationTokenEntity): UserAuthenticationTokenEntity;
    create(this: any, reqdata?: UserAuthenticationTokenCreateData, ctrl?: Control): Promise<UserAuthenticationToken>;
    update(this: any, reqdata?: UserAuthenticationTokenUpdateData, ctrl?: Control): Promise<UserAuthenticationToken>;
}
export { UserAuthenticationTokenEntity };
