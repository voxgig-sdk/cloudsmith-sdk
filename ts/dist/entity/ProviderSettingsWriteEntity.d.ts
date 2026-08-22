import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { ProviderSettingsWrite, ProviderSettingsWriteCreateData, ProviderSettingsWriteUpdateData } from '../CloudsmithTypes';
declare class ProviderSettingsWriteEntity extends CloudsmithEntityBase<ProviderSettingsWrite> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: ProviderSettingsWriteEntity): ProviderSettingsWriteEntity;
    create(this: any, reqdata?: ProviderSettingsWriteCreateData, ctrl?: Control): Promise<ProviderSettingsWriteEntity>;
    update(this: any, reqdata?: ProviderSettingsWriteUpdateData, ctrl?: Control): Promise<ProviderSettingsWriteEntity>;
}
export { ProviderSettingsWriteEntity };
