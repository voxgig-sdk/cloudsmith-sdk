import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Hex, HexLoadMatch, HexListMatch, HexCreateData, HexUpdateData } from '../CloudsmithTypes';
declare class HexEntity extends CloudsmithEntityBase<Hex> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: HexEntity): HexEntity;
    load(this: any, reqmatch?: HexLoadMatch, ctrl?: Control): Promise<HexEntity>;
    list(this: any, reqmatch?: HexListMatch, ctrl?: Control): Promise<HexEntity[]>;
    create(this: any, reqdata?: HexCreateData, ctrl?: Control): Promise<HexEntity>;
    update(this: any, reqdata?: HexUpdateData, ctrl?: Control): Promise<HexEntity>;
}
export { HexEntity };
