# Cloudsmith SDK utility: make_context
require_relative '../core/context'
module CloudsmithUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloudsmithContext.new(ctxmap, basectx)
  }
end
