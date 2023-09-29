/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let isIncreasing, isDecreasing, equal;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < nums[i+1]) {
            isIncreasing = true;
        } else if (nums[i] > nums[i+1]) {
            isDecreasing = true;
        } else {
            equal = true;
        }
    }
    if(isIncreasing && isDecreasing) {
        return false;
    } else if (equal)  {
        return equal;
    } else {
        return isIncreasing ? isIncreasing : isDecreasing;
    }
};