/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let j = 0;
    while(j < nums.length) {
        if(nums[j] !== 0) {
            [nums[j], nums[i]] = [nums[i], nums[j]];
            i += 1;
        }
        j += 1;
    }
    return nums;
};