import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryGeoIpTestAddress, RepositoryGeoIpTestAddressCreateData } from '../CloudsmithTypes';
declare class RepositoryGeoIpTestAddressEntity extends CloudsmithEntityBase<RepositoryGeoIpTestAddress> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryGeoIpTestAddressEntity): RepositoryGeoIpTestAddressEntity;
    create(this: any, reqdata?: RepositoryGeoIpTestAddressCreateData, ctrl?: Control): Promise<RepositoryGeoIpTestAddress>;
}
export { RepositoryGeoIpTestAddressEntity };
