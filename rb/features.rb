# Cloudsmith SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloudsmithFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudsmithBaseFeature.new
    when "test"
      CloudsmithTestFeature.new
    else
      CloudsmithBaseFeature.new
    end
  end
end
