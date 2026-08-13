import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Invite } from '../CloudsmithTypes';
declare class InviteEntity extends CloudsmithEntityBase<Invite> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: InviteEntity): InviteEntity;
}
export { InviteEntity };
