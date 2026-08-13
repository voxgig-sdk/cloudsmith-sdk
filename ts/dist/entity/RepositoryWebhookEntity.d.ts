import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryWebhook, RepositoryWebhookListMatch, RepositoryWebhookCreateData, RepositoryWebhookUpdateData } from '../CloudsmithTypes';
declare class RepositoryWebhookEntity extends CloudsmithEntityBase<RepositoryWebhook> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryWebhookEntity): RepositoryWebhookEntity;
    list(this: any, reqmatch?: RepositoryWebhookListMatch, ctrl?: Control): Promise<RepositoryWebhook[]>;
    create(this: any, reqdata?: RepositoryWebhookCreateData, ctrl?: Control): Promise<RepositoryWebhook>;
    update(this: any, reqdata?: RepositoryWebhookUpdateData, ctrl?: Control): Promise<RepositoryWebhook>;
}
export { RepositoryWebhookEntity };
