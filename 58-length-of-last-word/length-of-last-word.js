/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.split(" ");
    s = s.filter((word) => word !== "");
    s = s.reverse();
    return s[0].length;
};