/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let strLen = s.length;
    let spacesLen = spaces.length;
    let prevIndex = 0;
    let result = "";
    for(let i = 0; i < spacesLen; i++) {
        result += s.slice(prevIndex, spaces[i]);
        result += " ";
        prevIndex = spaces[i];
    }
    result += s.slice(prevIndex);
    return result;
};