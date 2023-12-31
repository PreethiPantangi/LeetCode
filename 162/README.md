### Problem Statement
A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.
 

### Example 1:
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

### Example 2:
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 

### Constraints:
1. 1 <= nums.length <= 1000
2. -231 <= nums[i] <= 231 - 1
3. nums[i] != nums[i + 1] for all valid i.

### Logic 
1. If our mid element is less than mid+1 element we move start to mid + 1
2. Else move end to mid 
3. Repeat this until start < end 
4. Return the start index which is the peak element