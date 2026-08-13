import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Evaluation } from '../CloudsmithTypes';
declare class EvaluationEntity extends CloudsmithEntityBase<Evaluation> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: EvaluationEntity): EvaluationEntity;
}
export { EvaluationEntity };
