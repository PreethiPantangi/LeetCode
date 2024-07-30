/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let bin1 = start.toString(2);
    let bin2 = goal.toString(2);
    let maxLen = Math.max(bin1.length, bin2.length);
    bin1 = bin1.padStart(maxLen, '0');
    bin2 = bin2.padStart(maxLen, '0');
    let res = 0;
    for(let i = maxLen - 1; i >= 0 ; i--) {
        console.log(bin1[i], bin2[i]);
        if(bin1[i] !== bin2[i]) {
            res += 1;
        }
    }
    return res;
};