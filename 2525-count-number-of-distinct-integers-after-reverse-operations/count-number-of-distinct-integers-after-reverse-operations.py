class Solution:
    def reverseNum(self, num):
        rev_num = 0
        while num:
            rev_num = (rev_num * 10) + num % 10
            num //=10
        return rev_num
    def countDistinctIntegers(self, nums: List[int]) -> int:
        initial_len = len(nums)
        count = 0
        for num in nums:
            nums.append(self.reverseNum(num))
            count += 1
            if count == initial_len:
                break
        return len(set(nums))