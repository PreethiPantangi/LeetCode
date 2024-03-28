/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let wAvg = 0;
    let mAvg = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < k; i++) {
        wAvg += nums[i];
    }
    mAvg = Math.max(wAvg/k, mAvg);
    for(let i = k; i < nums.length; i++) {
        wAvg = wAvg - nums[i - k] + nums[i];
        mAvg = Math.max(wAvg/k, mAvg);
    }
    return mAvg;
};