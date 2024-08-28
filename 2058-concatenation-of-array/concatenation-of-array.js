/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [];
    let n = nums.length;
    for(let i = 0; i < nums.length; i++) {
        [ans[i], ans[i+n]] = [nums[i], nums[i]];
    }
    return ans;
};