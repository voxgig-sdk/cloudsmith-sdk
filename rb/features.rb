# Cloudsmith SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/debug_feature'
require_relative 'feature/idempotency_feature'
require_relative 'feature/metrics_feature'
require_relative 'feature/paging_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CloudsmithFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudsmithBaseFeature.new
    when "debug"
      CloudsmithDebugFeature.new
    when "idempotency"
      CloudsmithIdempotencyFeature.new
    when "metrics"
      CloudsmithMetricsFeature.new
    when "paging"
      CloudsmithPagingFeature.new
    when "ratelimit"
      CloudsmithRatelimitFeature.new
    when "retry"
      CloudsmithRetryFeature.new
    when "test"
      CloudsmithTestFeature.new
    when "timeout"
      CloudsmithTimeoutFeature.new
    else
      CloudsmithBaseFeature.new
    end
  end
end
