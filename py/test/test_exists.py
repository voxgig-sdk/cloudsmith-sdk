# ProjectName SDK exists test

import pytest
from cloudsmith_sdk import CloudsmithSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloudsmithSDK.test(None, None)
        assert testsdk is not None
