import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryWebhook, RepositoryWebhookLoadMatch, RepositoryWebhookListMatch, RepositoryWebhookCreateData, RepositoryWebhookUpdateData } from '../CloudsmithTypes';
declare class RepositoryWebhookEntity extends CloudsmithEntityBase<RepositoryWebhook> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryWebhookEntity): RepositoryWebhookEntity;
    load(this: any, reqmatch?: RepositoryWebhookLoadMatch, ctrl?: Control): Promise<RepositoryWebhookEntity>;
    list(this: any, reqmatch?: RepositoryWebhookListMatch, ctrl?: Control): Promise<RepositoryWebhookEntity[]>;
    create(this: any, reqdata?: RepositoryWebhookCreateData, ctrl?: Control): Promise<RepositoryWebhookEntity>;
    update(this: any, reqdata?: RepositoryWebhookUpdateData, ctrl?: Control): Promise<RepositoryWebhookEntity>;
}
export { RepositoryWebhookEntity };
