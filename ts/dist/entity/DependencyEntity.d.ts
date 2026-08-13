import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Dependency } from '../CloudsmithTypes';
declare class DependencyEntity extends CloudsmithEntityBase<Dependency> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: DependencyEntity): DependencyEntity;
}
export { DependencyEntity };
