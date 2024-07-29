/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aLen = a.length;
    let bLen = b.length; 
    let maxLen = Math.max(aLen, bLen);
    if(aLen < bLen) {
        a = a.padStart(maxLen, "0");
    } else {
        b = b.padStart(maxLen, "0");
    }
    let carry = 0;
    let res = '';
    for(let i = maxLen-1; i >= 0; i--) {
        let num1 = parseInt(a[i]);
        let num2 = parseInt(b[i]);
        let sum = num1 + num2 + carry;
        if(sum === 2) {
            res += '0';
            carry = 1;
        } else if (sum === 3) {
            res += '1';
            carry = 1;
        } else {
            res += (sum).toString();
            carry = 0;
        }
    }
    if(carry !== 0) res += carry.toString();
    return res.split('').reverse().join('');
};