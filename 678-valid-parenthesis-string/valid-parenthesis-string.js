/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let starCount = 0;
    let paranthesisStack = [];
    let starStack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            paranthesisStack.push(i);
        } else if (s[i] === ')') {
            if(paranthesisStack.length > 0) {
                paranthesisStack.pop();
            } else if (starStack.length > 0) {
                starStack.pop();
            } else {
                return false;
            }
        } else {
            starStack.push(i);
        }
    }
    while(paranthesisStack.length > 0 && starStack.length > 0) {
        if (paranthesisStack.pop() > starStack.pop()) {
            return false; 
        }
    }
    return paranthesisStack.length === 0;
};