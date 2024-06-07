/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

const checkPalindrome = (start, end) => {
    let i = start;
    let j = end - 1;
    while(i < j) {
        if(s[i] !== s[j]) {
            return false;
        }
        i += 1;
        j -= 1;
    }
    return true;
}

    for(let i = s.length; i > 0; i--) {
        for(let j = 0; j <= s.length-i; j++) {
            if(checkPalindrome(j, j+i)) {
                return s.substring(j, j+i);
            }
        }
    }
    return "";
};