-- Cloudsmith SDK error

local CloudsmithError = {}
CloudsmithError.__index = CloudsmithError


function CloudsmithError.new(code, msg, ctx)
  local self = setmetatable({}, CloudsmithError)
  self.is_sdk_error = true
  self.sdk = "Cloudsmith"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloudsmithError:error()
  return self.msg
end


function CloudsmithError:__tostring()
  return self.msg
end


return CloudsmithError
