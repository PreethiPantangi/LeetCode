/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    result = 0;
    words.forEach((word) => {
        tempStr = chars;
        count = 0;
        if(word.length < tempStr.length) {
            for(let i = 0; i < word.length; i++) {
                if(tempStr.includes(word[i])) {
                    tempStr = tempStr.replace(word[i], '');
                    count += 1;
                }
            }
            if(count === word.length) {
                result += count;
            }
        }
    })
    return result;
};