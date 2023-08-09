### Problem Statement
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

### Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

### Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

### Example 3:
Input: nums = [1], target = 0
Output: -1
 

### Constraints:
1. 1 <= nums.length <= 5000
2. -104 <= nums[i] <= 104
3. All values of nums are unique.
4. nums is an ascending array that is possibly rotated.
5. -104 <= target <= 104

### Logic 
### Approach 1
This uses the built in indexOf function to get the index of target. If target is present then the index is returned else -1 is returned.

### Approach 2
We know that the array is sorted and roated.
1. We find the min element in the array 
2. This will give us two sorted sub arrays 
3. Check in which sub array does our target value exists and initalize the start and end values 
4. Apply binary search on the desired sub-array and return the index if present else -1