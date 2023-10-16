/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    let i = 0;
    let res = [0, 0];
    while (n !== 0) {
        if(n % 2 === 1) {
            if(i % 2 === 0 ) {
                res[0] += 1;
            } else {
                res[1] += 1;
            }
        }
        n = parseInt(n/2); 
        i += 1;
    }
    return res;
};
