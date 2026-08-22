import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Control } from '../types';
import type { PackageLicensePolicyEvaluation, PackageLicensePolicyEvaluationLoadMatch, PackageLicensePolicyEvaluationListMatch, PackageLicensePolicyEvaluationCreateData } from '../CloudsmithTypes';
declare class PackageLicensePolicyEvaluationEntity extends CloudsmithEntityBase<PackageLicensePolicyEvaluation> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: PackageLicensePolicyEvaluationEntity): PackageLicensePolicyEvaluationEntity;
    load(this: any, reqmatch?: PackageLicensePolicyEvaluationLoadMatch, ctrl?: Control): Promise<PackageLicensePolicyEvaluationEntity>;
    list(this: any, reqmatch?: PackageLicensePolicyEvaluationListMatch, ctrl?: Control): Promise<PackageLicensePolicyEvaluationEntity[]>;
    create(this: any, reqdata?: PackageLicensePolicyEvaluationCreateData, ctrl?: Control): Promise<PackageLicensePolicyEvaluationEntity>;
}
export { PackageLicensePolicyEvaluationEntity };
