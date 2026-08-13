

class CloudsmithError extends Error {

  isCloudsmithError = true

  sdk = 'Cloudsmith'

  constructor(code, msg, ctx) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

module.exports = {
  CloudsmithError
}

