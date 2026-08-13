import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Member } from '../CloudsmithTypes';
declare class MemberEntity extends CloudsmithEntityBase<Member> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: MemberEntity): MemberEntity;
}
export { MemberEntity };
