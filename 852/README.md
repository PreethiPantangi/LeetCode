### Problem Statement
An array arr is a mountain if the following properties hold:
arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

You must solve it in O(log(arr.length)) time complexity.

### Example 1:
Input: arr = [0,1,0]
Output: 1

### Example 2:
Input: arr = [0,2,1,0]
Output: 1

### Example 3:
Input: arr = [0,10,5,2]
Output: 1
 
### Constraints:
1. 3 <= arr.length <= 105
2. 0 <= arr[i] <= 106
3. arr is guaranteed to be a mountain array.

### Logic 
1. If our mid element is less than mid+1 element we move start to mid + 1
2. Else move end to mid 
3. Repeat this until start < end 
4. Return the start index which is the peak element