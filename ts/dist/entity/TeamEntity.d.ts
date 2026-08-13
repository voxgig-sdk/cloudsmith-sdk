import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Team } from '../CloudsmithTypes';
declare class TeamEntity extends CloudsmithEntityBase<Team> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: TeamEntity): TeamEntity;
}
export { TeamEntity };
