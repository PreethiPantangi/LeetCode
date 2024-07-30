/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let xor = start ^ goal;
    let res = 0;
    while(xor > 0) {
        // Gives the LSB of the binary rep of the num
        res += (xor & 1);
        // Remove the LSB to get the next one
        xor >>= 1;
    }
    return res;
};