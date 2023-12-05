/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let initialValue = ''
    let str1 = word1.reduce((accumlator, currentValue) => accumlator + currentValue, initialValue)
    let str2 = word2.reduce((accumlator, currentValue) => accumlator + currentValue, initialValue)
    return str1 === str2
};