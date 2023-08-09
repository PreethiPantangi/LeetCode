/**
 * @param {number[]} nums
 * @return {number}
 */
var search = function(nums, target) {
    let pivotIndex = getMinElePos(nums);
    if (target >= nums[0] && target <= nums[pivotIndex-1]) {
        start = 0;
        end = pivotIndex - 1;
    } else {
        start = pivotIndex;
        end = nums.length - 1;
    }
    while (start <= end) {
        mid = parseInt(start + (end - start)/2);    
        if (nums[mid] === target) {
            return mid;
        } else {
            if (nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var getMinElePos = function(nums) {
    let start = 0; 
    let end = nums.length - 1;
    while (start < end) {
        mid = parseInt(start + (end - start)/2);
        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
};
