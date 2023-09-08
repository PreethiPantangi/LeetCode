/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let len1 = word1.length;
    let len2 = word2.length;
    let res = '';
    let p1 = p2 = 0;
    while (p1 < len1 || p2 < len2) {
        if(word1[p1]) {
            res += word1[p1];
            word1.replace(word1, '');
        }
        if(word2[p2]) {
            res += word2[p2];
            word2.replace(word2, '');
        }
        p1 += 1;
        p2 += 1;
    }
    return res;
};


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = '';
    let p1 = 0;
    while (p1 < word1.length && p1 < word2.length) {
        res += word1[p1];
        res += word2[p1];
        p1 += 1;
    }
    if (word1.length > p1) {
        res += word1.slice(p1);
    }
    if (word2.length > p1) {
        res += word2.slice(p1);
    }
    return res;
};

console.log(mergeAlternately("abc", "pqr"));