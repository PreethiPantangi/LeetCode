/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if (s.length === 1) return s;
    s = s.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let i = 0;
    let j = s.length - 1;
    while(i < j) {
        const isVowelOne = vowels.includes(s[i].toLowerCase());
        const isVowelTwo = vowels.includes(s[j].toLowerCase());
        if(!isVowelOne) i += 1;
        if(!isVowelTwo) j -= 1;
        if(isVowelOne && isVowelTwo) {
            [s[i], s[j]] = [s[j], s[i]];
            i += 1;
            j -= 1;
        }
    }
    return s.join("");
};