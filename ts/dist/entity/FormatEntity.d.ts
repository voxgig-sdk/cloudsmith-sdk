import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { Format, FormatLoadMatch, FormatListMatch } from '../CloudsmithTypes';
declare class FormatEntity extends CloudsmithEntityBase<Format> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: FormatEntity): FormatEntity;
    load(this: any, reqmatch?: FormatLoadMatch, ctrl?: Control): Promise<Format>;
    list(this: any, reqmatch?: FormatListMatch, ctrl?: Control): Promise<Format[]>;
}
export { FormatEntity };
