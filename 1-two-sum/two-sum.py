class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        _map = {}
        for i in range(len(nums)):
            if target - nums[i] in _map:
                return [i, _map[target - nums[i]]]
            else:
                _map[nums[i]] = i
            