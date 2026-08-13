import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Huggingface, HuggingfaceLoadMatch, HuggingfaceListMatch, HuggingfaceCreateData, HuggingfaceUpdateData } from '../CloudsmithTypes';
declare class HuggingfaceEntity extends CloudsmithEntityBase<Huggingface> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: HuggingfaceEntity): HuggingfaceEntity;
    load(this: any, reqmatch?: HuggingfaceLoadMatch, ctrl?: Control): Promise<Huggingface>;
    list(this: any, reqmatch?: HuggingfaceListMatch, ctrl?: Control): Promise<Huggingface[]>;
    create(this: any, reqdata?: HuggingfaceCreateData, ctrl?: Control): Promise<Huggingface>;
    update(this: any, reqdata?: HuggingfaceUpdateData, ctrl?: Control): Promise<Huggingface>;
}
export { HuggingfaceEntity };
