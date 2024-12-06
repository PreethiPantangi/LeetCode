/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let currSum = 0;
    let choosenNumbers = new Set();
    let count = 0;
    for(let i = 1; i <= n; i++) {
        if(!banned.includes(i) && !choosenNumbers.has(i)) {
            if(currSum + i <= maxSum) {
                currSum += i;
                count += 1;
                choosenNumbers.add(i);
            } 
        }
    }
    return count;
};