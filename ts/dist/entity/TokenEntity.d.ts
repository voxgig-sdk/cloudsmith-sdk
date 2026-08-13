import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Token } from '../CloudsmithTypes';
declare class TokenEntity extends CloudsmithEntityBase<Token> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: TokenEntity): TokenEntity;
}
export { TokenEntity };
