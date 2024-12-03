/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let strLen = s.length;
    let spacesLen = spaces.length;
    let result = "";
    for(let i = 0; i < spacesLen; i++) {
        if(i - 1 >= 0) {
            result += s.substr(spaces[i-1], spaces[i]-spaces[i-1]);
        } else  {
            result += s.substr(0, spaces[i]);
        }
        if(spacesLen !== i) {
            result += " ";
        }
    }
    result += s.substr(spaces[spacesLen-1], strLen-spaces[spacesLen-1]);
    return result;
};