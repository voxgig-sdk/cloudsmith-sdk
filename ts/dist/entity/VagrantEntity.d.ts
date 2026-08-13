import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Vagrant } from '../CloudsmithTypes';
declare class VagrantEntity extends CloudsmithEntityBase<Vagrant> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: VagrantEntity): VagrantEntity;
}
export { VagrantEntity };
