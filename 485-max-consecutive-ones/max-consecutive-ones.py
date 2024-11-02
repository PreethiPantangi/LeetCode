class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        maxVal = 0
        index = 0
        count = 0
        while index < len(nums):
            if nums[index] == 0:
                maxVal = max(count, maxVal)
                count = 0
            else:
                count += 1
            index += 1
        maxVal = max(count, maxVal)
        return maxVal
