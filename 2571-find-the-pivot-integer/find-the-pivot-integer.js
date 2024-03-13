/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let secondSum = 0;
    while (n !== 0) {
        secondSum += n;
        if (((n * (n + 1))/2) === secondSum) {
            return n;
        }
        n -= 1;
    }
    return -1;
};
