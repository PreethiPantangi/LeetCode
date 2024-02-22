/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(/\s+/).filter(word => /\w+/.test(word));
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i += 1;
        j -= 1;
    }
    return s.join(" ");
};