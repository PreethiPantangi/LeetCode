class Solution:
    def reverseNum(self, num):
        rev_num = 0
        while num:
            rev_num = (rev_num * 10) + num % 10
            num //=10
        return rev_num
    def countDistinctIntegers(self, nums: List[int]) -> int:
        unique_nums = set(nums)
        for num in nums:
            unique_nums.add(self.reverseNum(num))
        return len(unique_nums)