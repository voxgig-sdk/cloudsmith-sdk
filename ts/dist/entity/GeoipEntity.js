"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoipEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class GeoipEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'geoip';
        this.name_ = 'geoip';
        this.Name = 'Geoip';
    }
    make() {
        return new GeoipEntity(this._client, this.entopts());
    }
}
exports.GeoipEntity = GeoipEntity;
//# sourceMappingURL=GeoipEntity.js.map