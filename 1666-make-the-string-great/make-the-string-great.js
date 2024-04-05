/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let i = 0;
    let stack = [];
    while(i < s.length) {
        if(stack.length === 0) {
            stack.push(s[i]);
        } else {
            if (stack[stack.length-1].toLowerCase() === s[i].toLowerCase() && stack[stack.length-1] !== s[i]) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
        i += 1;
    }
    return stack.join("");
};