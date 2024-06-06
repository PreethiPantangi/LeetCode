/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let map = new Array(26).fill(0);
    let len = word1.length;
    for(let i = 0; i < len; i++) {
        map[word1.charCodeAt(i)-97] += 1;
        map[word2.charCodeAt(i)-97] -= 1;
    }
    for(let i = 0; i < 26; i++) {
        if(Math.abs(map[i]) > 3)
            return false;
    }
    return true;
};