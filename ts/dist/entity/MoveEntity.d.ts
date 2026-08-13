import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Move } from '../CloudsmithTypes';
declare class MoveEntity extends CloudsmithEntityBase<Move> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: MoveEntity): MoveEntity;
}
export { MoveEntity };
