/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let max = -1; 
    for(let i = 0; i < nums.length; i++) {
        if(nums.indexOf(-1 * nums[i]) !== -1) {
            if(nums[i] > max) {
                max = nums[i];
            }
        }
    }
    return max;
};