### Problem Statement
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 
### Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

### Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

### Constraints:
1. 0 <= x <= 231 - 1

### Logic
We know that our answer will lie between 1 and the number (x)
1. If mid*mid === x then we will return mid 
2. If mid*mid > x then we move end to mid - 1
3. If mid*mid < x then we save mid to ans(This will be the nearest value of the square root of it doesn't have an exact one) and move start to mid + 1
4. Return answer
