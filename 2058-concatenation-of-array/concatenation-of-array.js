/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let n = nums.length;
    let res = new Array(n * 2).fill(0);
    for(let i = 0; i < n; i++) {
        res[i] = nums[i];
        res[i+n] = nums[i];
    }
    return res;
};