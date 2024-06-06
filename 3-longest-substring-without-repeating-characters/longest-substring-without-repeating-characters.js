/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let i = j = 0;
    let strSet = new Set();
    while(j < s.length) {
        if(!strSet.has(s[j])) {
            strSet.add(s[j]);
            j += 1;
            maxLen = Math.max(maxLen, j - i);
        } else {
            strSet.delete(s[i]);
            i += 1;
        }
    }
    return maxLen;
};