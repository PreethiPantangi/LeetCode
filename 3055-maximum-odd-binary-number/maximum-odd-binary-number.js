/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let ones = 0;
    let zeros = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "1") {
            ones += 1;
        } else if (s[i] === "0") {
            zeros += 1;
        }
    }
    if(ones.length === 1) {
        return "0".repeat(zeros) + "1"
    } else {
        return "1".repeat(ones-1) + "0".repeat(zeros) + "1"
    }
};