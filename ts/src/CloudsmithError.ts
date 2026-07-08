
import { Context } from './Context'


class CloudsmithError extends Error {

  isCloudsmithError = true

  sdk = 'Cloudsmith'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  CloudsmithError
}

