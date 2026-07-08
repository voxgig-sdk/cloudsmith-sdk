# Cloudsmith SDK utility: feature_add
module CloudsmithUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
