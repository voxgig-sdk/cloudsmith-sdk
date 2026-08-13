import { CloudsmithEntityBase } from '../CloudsmithEntityBase';
import type { CloudsmithSDK } from '../CloudsmithSDK';
import type { Geoip } from '../CloudsmithTypes';
declare class GeoipEntity extends CloudsmithEntityBase<Geoip> {
    constructor(client: CloudsmithSDK, entopts: any);
    make(this: GeoipEntity): GeoipEntity;
}
export { GeoipEntity };
