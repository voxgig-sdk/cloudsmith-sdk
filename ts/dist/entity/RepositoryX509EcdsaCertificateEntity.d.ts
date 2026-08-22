import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { RepositoryX509EcdsaCertificate, RepositoryX509EcdsaCertificateLoadMatch } from '../CloudsmithTypes';
declare class RepositoryX509EcdsaCertificateEntity extends CloudsmithEntityBase<RepositoryX509EcdsaCertificate> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: RepositoryX509EcdsaCertificateEntity): RepositoryX509EcdsaCertificateEntity;
    load(this: any, reqmatch?: RepositoryX509EcdsaCertificateLoadMatch, ctrl?: Control): Promise<RepositoryX509EcdsaCertificateEntity>;
}
export { RepositoryX509EcdsaCertificateEntity };
