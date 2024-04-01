/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.split(" ");
    for(let i = s.length-1; i >= 0; i--) {
        if(s[i] !== "") {
            return s[i].length;
        }
    }
};