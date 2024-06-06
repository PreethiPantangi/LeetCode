/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    let len = palindrome.length;
    if(len === 1)
        return "";
    for(let i = 0; i < Math.floor(len/2); i++) {
        if(palindrome[i] != 'a') {
            palindromeArray = palindrome.split('');
            palindromeArray[i] = 'a';
            return palindromeArray.join('');
        }
    }
    palindromeArray = palindrome.split('');
    palindromeArray[len-1] = 'b';
    return palindromeArray.join('');
};