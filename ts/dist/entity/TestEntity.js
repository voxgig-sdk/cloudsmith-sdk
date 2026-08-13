"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestEntity = void 0;
const CloudsmithEntityBase_1 = require("../CloudsmithEntityBase");
// TODO: needs Entity superclass
class TestEntity extends CloudsmithEntityBase_1.CloudsmithEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'test';
        this.name_ = 'test';
        this.Name = 'Test';
    }
    make() {
        return new TestEntity(this._client, this.entopts());
    }
}
exports.TestEntity = TestEntity;
//# sourceMappingURL=TestEntity.js.map