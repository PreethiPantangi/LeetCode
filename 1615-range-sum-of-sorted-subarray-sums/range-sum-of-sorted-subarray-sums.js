/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    let values = [];
    for (let start = 0; start < n; start++) {
        for (let end = start; end < n; end++) {
            let sum = 0;
            values.push((nums.slice(start, end + 1)).reduce((curr, acc) => curr + acc, sum));
        }
    }
    values.sort((a,b) => a - b);
    let res = 0;
    for(let i = left-1; i < right; i++) {
        res += values[i];
    }
    return res % ((10 ** 9) + 7);
};