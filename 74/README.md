### Problem Statement

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

### Example 1:
![image](https://assets.leetcode.com/uploads/2020/10/05/mat.jpg)

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

### Example 2:
![image](https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg)

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

### Constraints:
1. m == matrix.length
2. n == matrix[i].length
3. 1 <= m, n <= 100
4. -104 <= matrix[i][j], target <= 104

### Logic
1. For each array check if the last element in the array is >= target 
2. On the desired array run binary search 
3. Return index if element is found else  return -1