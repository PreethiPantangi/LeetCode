class Solution:
    def reverse(self, x: int) -> int:
        sign = 1
        if x < 0:
            sign = -1
        else:
            sign = 1
        
        x = abs(x)
        rev_num = 0
        while x:
            rev_num = (rev_num * 10) + x % 10
            x = x // 10

        MAX = pow(2,31) - 1
        MIN  = -pow(2,31)
        return 0 if rev_num >= MAX or rev_num <= MIN else rev_num * sign