import { Context } from './Context';
declare class CloudsmithError extends Error {
    isCloudsmithError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    constructor(code: string, msg: string, ctx: Context);
}
export { CloudsmithError };
