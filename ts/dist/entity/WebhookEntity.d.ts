import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Webhook, WebhookRemoveMatch } from '../CloudsmithTypes';
declare class WebhookEntity extends CloudsmithEntityBase<Webhook> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: WebhookEntity): WebhookEntity;
    remove(this: any, reqmatch?: WebhookRemoveMatch, ctrl?: Control): Promise<WebhookEntity>;
}
export { WebhookEntity };
