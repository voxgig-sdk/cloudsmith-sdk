import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Profile } from '../CloudsmithTypes';
declare class ProfileEntity extends CloudsmithEntityBase<Profile> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: ProfileEntity): ProfileEntity;
}
export { ProfileEntity };
