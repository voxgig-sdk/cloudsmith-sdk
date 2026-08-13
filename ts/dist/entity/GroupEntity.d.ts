import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Group } from '../CloudsmithTypes';
declare class GroupEntity extends CloudsmithEntityBase<Group> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: GroupEntity): GroupEntity;
}
export { GroupEntity };
