import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryGeoIpStatus, RepositoryGeoIpStatusLoadMatch } from '../CloudsmithTypes';
declare class RepositoryGeoIpStatusEntity extends CloudsmithEntityBase<RepositoryGeoIpStatus> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryGeoIpStatusEntity): RepositoryGeoIpStatusEntity;
    load(this: any, reqmatch?: RepositoryGeoIpStatusLoadMatch, ctrl?: Control): Promise<RepositoryGeoIpStatusEntity>;
}
export { RepositoryGeoIpStatusEntity };
