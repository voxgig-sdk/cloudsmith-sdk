# Cloudsmith SDK feature factory

from feature.base_feature import CloudsmithBaseFeature
from feature.test_feature import CloudsmithTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CloudsmithBaseFeature(),
        "test": lambda: CloudsmithTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
