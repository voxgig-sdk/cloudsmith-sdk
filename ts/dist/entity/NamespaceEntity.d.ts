import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Namespace, NamespaceLoadMatch, NamespaceListMatch } from '../CloudsmithTypes';
declare class NamespaceEntity extends CloudsmithEntityBase<Namespace> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: NamespaceEntity): NamespaceEntity;
    load(this: any, reqmatch?: NamespaceLoadMatch, ctrl?: Control): Promise<Namespace>;
    list(this: any, reqmatch?: NamespaceListMatch, ctrl?: Control): Promise<Namespace[]>;
}
export { NamespaceEntity };
