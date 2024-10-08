/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let paranthesisMapping = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            if(stack.length === 0) return false;
            let top = stack.pop();
            if(paranthesisMapping[top] !== s[i]) return false;
        }
    }
    return stack.length === 0;
};