import { Context } from './Context';
declare class CloudsmithError extends Error {
    isCloudsmithError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CloudsmithError };
