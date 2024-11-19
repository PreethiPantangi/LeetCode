class Solution:
    def reverse(self, x: int) -> int:
        sign = 1
        if x < 0:
            sign = -1
        else:
            sign = 1
        
        rev_num = 0
        x = abs(x)
        while x:
            rev_num = (rev_num * 10) + (x % 10)
            x = x // 10
        return 0 if (rev_num >= pow(2,31) - 1 or rev_num <= -pow(2,31)) else rev_num * sign