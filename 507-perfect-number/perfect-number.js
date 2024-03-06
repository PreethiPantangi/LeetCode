/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let res= 0;
    for(let i = 1; i*i <= num; i++) {
        if(num % i === 0 && i !== num) {
            res += i;
            if(Math.floor(num/i) !== num) {
                res += Math.floor(num/i);
            }
        }
    }
    return res === num;
};