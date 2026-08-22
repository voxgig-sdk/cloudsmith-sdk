import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Service, ServiceLoadMatch, ServiceListMatch, ServiceCreateData, ServiceUpdateData } from '../CloudsmithTypes';
declare class ServiceEntity extends CloudsmithEntityBase<Service> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: ServiceEntity): ServiceEntity;
    load(this: any, reqmatch?: ServiceLoadMatch, ctrl?: Control): Promise<ServiceEntity>;
    list(this: any, reqmatch?: ServiceListMatch, ctrl?: Control): Promise<ServiceEntity[]>;
    create(this: any, reqdata?: ServiceCreateData, ctrl?: Control): Promise<ServiceEntity>;
    update(this: any, reqdata?: ServiceUpdateData, ctrl?: Control): Promise<ServiceEntity>;
}
export { ServiceEntity };
