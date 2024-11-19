class Solution:
    def reverseNum(self, num):
        rev_num = 0
        while num:
            rev_num = (rev_num * 10) + (num % 10)
            num //= 10
        return rev_num
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        return x == self.reverseNum(x)