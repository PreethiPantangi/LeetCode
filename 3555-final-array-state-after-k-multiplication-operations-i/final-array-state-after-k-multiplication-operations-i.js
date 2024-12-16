/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    let n = nums.length;
    let count = 0;
    while(count !== k) {
        let min_num = Math.min(...nums);
        let index = nums.findIndex(elem => elem == min_num);
        nums[index] = min_num * multiplier;
        count += 1;
    }
    return nums;
};