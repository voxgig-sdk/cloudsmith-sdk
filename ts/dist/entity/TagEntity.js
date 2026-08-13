"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class TagEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'tag';
        this.name_ = 'tag';
        this.Name = 'Tag';
    }
    make() {
        return new TagEntity(this._client, this.entopts());
    }
}
exports.TagEntity = TagEntity;
//# sourceMappingURL=TagEntity.js.map