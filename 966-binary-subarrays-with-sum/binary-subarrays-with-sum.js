/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let count = 0;
    let prefixSumCounts = new Map();
    let sum = 0;

    for (const num of nums) {
        sum += num;
        if (sum === goal) {
            count += 1;
        }
        if (prefixSumCounts.has(sum - goal)) {
            count += prefixSumCounts.get(sum - goal);
        }
        prefixSumCounts.set(sum, (prefixSumCounts.get(sum) || 0) + 1);
    }
    return count;
};