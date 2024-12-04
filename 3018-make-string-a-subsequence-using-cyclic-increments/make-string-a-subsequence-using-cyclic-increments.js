/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    let j = 0;
    for(let i = 0; i < str1.length; i++) {
        if(j < str2.length && (
            str1[i] == str2[j] || 
            str1[i].charCodeAt(0) + 1 == str2[j].charCodeAt(0) ||
            str1[i].charCodeAt(0) -25 == str2[j].charCodeAt(0)
        )) {
            j += 1;
        }
    }
    return j == str2.length;
};