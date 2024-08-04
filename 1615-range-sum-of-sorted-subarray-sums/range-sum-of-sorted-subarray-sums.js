/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    let prefixSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    let values = [];
    for (let start = 0; start < n; start++) {
        for (let end = start; end < n; end++) {
            values.push(prefixSum[end + 1] - prefixSum[start]);
        }
    }

    values.sort((a, b) => a - b);
    
    let res = 0;
    for (let i = left - 1; i < right; i++) {
        res += values[i];
        res %= (10 ** 9 + 7);
    }

    return res;
};