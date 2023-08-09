### Problem Statement 
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

### Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

### Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

### Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
 

### Constraints:
1. 0 <= nums.length <= 105
2. -109 <= nums[i] <= 109
3. nums is a non-decreasing array.
4. -109 <= target <= 109

### Logic
1. If our mid element is equal to target then store the position and if the occurance we are looking for is first move end to mid - 1, if occurance is last then move start to mid + 1
2. If mid element value is greater than target then move end to mid - 1 
3. Else move start to mid + 1
4. Return the position