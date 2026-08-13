import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Luarock } from '../CloudsmithTypes';
declare class LuarockEntity extends CloudsmithEntityBase<Luarock> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: LuarockEntity): LuarockEntity;
}
export { LuarockEntity };
