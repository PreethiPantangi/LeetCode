/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let num = BigInt('0b' + s);
    let step = 0;
    while(num !== 1n) {
        if(num % 2n == 0) {
            num /= 2n;
        } else {
            num += 1n;
        }
        step += 1;
    }
    return step;
};
