import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Test } from '../CloudsmithTypes';
declare class TestEntity extends CloudsmithEntityBase<Test> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: TestEntity): TestEntity;
}
export { TestEntity };
