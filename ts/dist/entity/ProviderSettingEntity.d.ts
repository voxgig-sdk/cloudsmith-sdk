import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { ProviderSetting, ProviderSettingLoadMatch, ProviderSettingListMatch } from '../CloudsmithTypes';
declare class ProviderSettingEntity extends CloudsmithEntityBase<ProviderSetting> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: ProviderSettingEntity): ProviderSettingEntity;
    load(this: any, reqmatch?: ProviderSettingLoadMatch, ctrl?: Control): Promise<ProviderSetting>;
    list(this: any, reqmatch?: ProviderSettingListMatch, ctrl?: Control): Promise<ProviderSetting[]>;
}
export { ProviderSettingEntity };
