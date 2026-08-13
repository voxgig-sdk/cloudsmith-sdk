import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Tag } from '../CloudsmithTypes';
declare class TagEntity extends CloudsmithEntityBase<Tag> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: TagEntity): TagEntity;
}
export { TagEntity };
