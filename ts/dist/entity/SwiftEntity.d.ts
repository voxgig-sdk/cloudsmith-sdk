import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Swift, SwiftLoadMatch, SwiftListMatch, SwiftCreateData, SwiftUpdateData } from '../CloudsmithTypes';
declare class SwiftEntity extends CloudsmithEntityBase<Swift> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: SwiftEntity): SwiftEntity;
    load(this: any, reqmatch?: SwiftLoadMatch, ctrl?: Control): Promise<SwiftEntity>;
    list(this: any, reqmatch?: SwiftListMatch, ctrl?: Control): Promise<SwiftEntity[]>;
    create(this: any, reqdata?: SwiftCreateData, ctrl?: Control): Promise<SwiftEntity>;
    update(this: any, reqdata?: SwiftUpdateData, ctrl?: Control): Promise<SwiftEntity>;
}
export { SwiftEntity };
