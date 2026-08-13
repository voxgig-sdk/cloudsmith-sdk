# Cloudsmith SDK feature factory

from cloudsmith_sdk.feature.base_feature import CloudsmithBaseFeature
from cloudsmith_sdk.feature.test_feature import CloudsmithTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CloudsmithBaseFeature(),
        "test": lambda: CloudsmithTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
