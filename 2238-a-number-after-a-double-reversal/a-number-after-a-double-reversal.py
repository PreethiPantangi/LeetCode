class Solution:
    def reverseNum(self, num):
        rev_num = 0
        while num:
            rev_num = (rev_num * 10) + num % 10
            num = num // 10
        return rev_num
    def isSameAfterReversals(self, num: int) -> bool:
        return num == self.reverseNum(self.reverseNum(num))