/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let currSum = 0;
    let choosenNumbers = new Set();
    for(let i = 1; i <= n; i++) {
        if(!banned.includes(i) && !choosenNumbers.has(i) && currSum + i <= maxSum) {
            currSum += i;
            choosenNumbers.add(i);
        }
    }
    return choosenNumbers.size;
};