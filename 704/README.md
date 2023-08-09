### Problem Statement

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 

If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

### Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

### Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 
### Constraints:
1. 1 <= nums.length <= 104
2. -104 < nums[i], target < 104
3. All the integers in nums are unique.
4. nums is sorted in ascending order.

### Logic
1. Check if mid element is equal to target then return mid 
2. If mid element > target then move end to mid - 1
3. Else move start to mid + 1
4. Repeat this until start <= end 
5. If not found return -1