/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let dict = {};
    let res = 0;
    let isOddFreqExists = false;
    for(let i = 0; i < s.length; i++) {
        if(dict[s[i]]) {
            dict[s[i]] += 1;
        } else {
            dict[s[i]] = 1;
        }
    };
    for(key in dict) {
        if(dict[key] % 2 === 0) {
            res += dict[key];
        } else {
            res += dict[key] - 1;
            isOddFreqExists = true;
        }
    }
    return isOddFreqExists ? res + 1 : res;
};