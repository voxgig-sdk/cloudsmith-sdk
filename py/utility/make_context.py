# Cloudsmith SDK utility: make_context

from core.context import CloudsmithContext


def make_context_util(ctxmap, basectx):
    return CloudsmithContext(ctxmap, basectx)
