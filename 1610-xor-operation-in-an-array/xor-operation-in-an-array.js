/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let i = 1;
    let res = start;
    while(n > 1) {
        res ^= (start + (2 * i));
        n -= 1;
        i += 1;
    }
    return res;
};