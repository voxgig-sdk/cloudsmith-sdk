# Cloudsmith SDK feature factory

from cloudsmith_sdk.feature.base_feature import CloudsmithBaseFeature
from cloudsmith_sdk.feature.debug_feature import CloudsmithDebugFeature
from cloudsmith_sdk.feature.idempotency_feature import CloudsmithIdempotencyFeature
from cloudsmith_sdk.feature.metrics_feature import CloudsmithMetricsFeature
from cloudsmith_sdk.feature.paging_feature import CloudsmithPagingFeature
from cloudsmith_sdk.feature.ratelimit_feature import CloudsmithRatelimitFeature
from cloudsmith_sdk.feature.retry_feature import CloudsmithRetryFeature
from cloudsmith_sdk.feature.test_feature import CloudsmithTestFeature
from cloudsmith_sdk.feature.timeout_feature import CloudsmithTimeoutFeature


_FEATURES = {
    "base": lambda: CloudsmithBaseFeature(),
    "debug": lambda: CloudsmithDebugFeature(),
    "idempotency": lambda: CloudsmithIdempotencyFeature(),
    "metrics": lambda: CloudsmithMetricsFeature(),
    "paging": lambda: CloudsmithPagingFeature(),
    "ratelimit": lambda: CloudsmithRatelimitFeature(),
    "retry": lambda: CloudsmithRetryFeature(),
    "test": lambda: CloudsmithTestFeature(),
    "timeout": lambda: CloudsmithTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
