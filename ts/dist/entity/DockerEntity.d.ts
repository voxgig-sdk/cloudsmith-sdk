import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Docker, DockerLoadMatch, DockerListMatch, DockerCreateData, DockerUpdateData } from '../CloudsmithTypes';
declare class DockerEntity extends CloudsmithEntityBase<Docker> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: DockerEntity): DockerEntity;
    load(this: any, reqmatch?: DockerLoadMatch, ctrl?: Control): Promise<DockerEntity>;
    list(this: any, reqmatch?: DockerListMatch, ctrl?: Control): Promise<DockerEntity[]>;
    create(this: any, reqdata?: DockerCreateData, ctrl?: Control): Promise<DockerEntity>;
    update(this: any, reqdata?: DockerUpdateData, ctrl?: Control): Promise<DockerEntity>;
}
export { DockerEntity };
