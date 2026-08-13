import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Distro } from '../CloudsmithTypes';
declare class DistroEntity extends CloudsmithEntityBase<Distro> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: DistroEntity): DistroEntity;
}
export { DistroEntity };
