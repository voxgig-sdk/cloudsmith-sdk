import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Ruby, RubyLoadMatch, RubyListMatch, RubyCreateData, RubyUpdateData } from '../CloudsmithTypes';
declare class RubyEntity extends CloudsmithEntityBase<Ruby> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RubyEntity): RubyEntity;
    load(this: any, reqmatch?: RubyLoadMatch, ctrl?: Control): Promise<Ruby>;
    list(this: any, reqmatch?: RubyListMatch, ctrl?: Control): Promise<Ruby[]>;
    create(this: any, reqdata?: RubyCreateData, ctrl?: Control): Promise<Ruby>;
    update(this: any, reqdata?: RubyUpdateData, ctrl?: Control): Promise<Ruby>;
}
export { RubyEntity };
