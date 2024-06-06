/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let left = {}, right = {}, count = {};
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if(left[num] === undefined) {
            left[num] = i;
        }
        right[num] = i;
        count[num] = (count[num] || 0) + 1;
    }
    let res = nums.length;
    let degree = Math.max(...Object.values(count));
    for(let key in count) {
        if(count[key] === degree) {
            res = Math.min(res, right[key] - left[key] + 1);
        }
    }
    return res;
};