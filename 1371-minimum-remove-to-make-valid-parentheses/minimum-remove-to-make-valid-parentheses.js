/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];
    let indexesToRemove = new Set();
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                indexesToRemove.add(i);
            } else {
                stack.pop();
            }
        }
    }
    
    stack.forEach(index => indexesToRemove.add(index));
    
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!indexesToRemove.has(i)) {
            result += s[i];
        }
    }
    
    return result;
};