/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let len = s.length;
    let start = 0;
    let end = len - 1;
    while (start !== end && start < len && end > 0) {
        if (s[start] !== s[end]) {
            return false;
        }
        start += 1;
        end -= 1;
    }
    return true;
};
