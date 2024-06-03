/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let i = 0; 
    let prefix_len = 0;
    while (i < s.length && prefix_len < t.length) {
        if(s[i] == t[prefix_len]) {
            prefix_len += 1;
        }
        i += 1;
    }
    return t.length - prefix_len;
};