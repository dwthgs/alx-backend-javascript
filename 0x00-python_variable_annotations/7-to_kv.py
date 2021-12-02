#!/usr/bin/env python3
"""  """
from typing import List, Union, Tuple


def to_kv(k: str, v: List[Union[int, float]]) -> Tuple[str, float]:
    """  """
    return (k, v ** 2)
