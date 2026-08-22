import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Ruby, RubyLoadMatch, RubyListMatch, RubyCreateData, RubyUpdateData } from '../CloudsmithTypes';
declare class RubyEntity extends CloudsmithEntityBase<Ruby> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RubyEntity): RubyEntity;
    load(this: any, reqmatch?: RubyLoadMatch, ctrl?: Control): Promise<RubyEntity>;
    list(this: any, reqmatch?: RubyListMatch, ctrl?: Control): Promise<RubyEntity[]>;
    create(this: any, reqdata?: RubyCreateData, ctrl?: Control): Promise<RubyEntity>;
    update(this: any, reqdata?: RubyUpdateData, ctrl?: Control): Promise<RubyEntity>;
}
export { RubyEntity };
