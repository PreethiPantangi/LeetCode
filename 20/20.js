/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 1) {
        return false; 
    } else {
        let stack = [];
        for (let i = 0; i < s.length; i++) {
            if (['(', '{', '['].includes(s[i])) {
                stack.push(s[i]);
            } else {
                let bracket = stack.pop();
                if(
                    (s[i] === ')' && bracket !== '(') || 
                    (s[i] === ']' && bracket !== '[') ||
                    (s[i] === '}' && bracket !== '{')
                ) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
};

console.log(isValid('()[]{}(([}]))'));