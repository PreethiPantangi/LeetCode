/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let binary = '';
    let res = 0;
    const returnSetBits = (n) => {
        if(n === 0) {
            return res;
        }
        res += (n % 2 === 1 ? 1 : 0);
        return returnSetBits(Math.floor(n / 2));
    };
    return returnSetBits(n);
};