"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudsmithError = void 0;
class CloudsmithError extends Error {
    isCloudsmithError = true;
    sdk = 'Cloudsmith';
    code;
    ctx;
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CloudsmithError = CloudsmithError;
//# sourceMappingURL=CloudsmithError.js.map