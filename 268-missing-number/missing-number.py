import math
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        return math.floor((n * ((n + 1)/2)) - sum(nums))