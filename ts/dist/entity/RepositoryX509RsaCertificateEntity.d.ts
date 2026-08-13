import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryX509RsaCertificate, RepositoryX509RsaCertificateLoadMatch } from '../CloudsmithTypes';
declare class RepositoryX509RsaCertificateEntity extends CloudsmithEntityBase<RepositoryX509RsaCertificate> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryX509RsaCertificateEntity): RepositoryX509RsaCertificateEntity;
    load(this: any, reqmatch?: RepositoryX509RsaCertificateLoadMatch, ctrl?: Control): Promise<RepositoryX509RsaCertificate>;
}
export { RepositoryX509RsaCertificateEntity };
