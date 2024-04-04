/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    if(!s.includes("(")) {
        return 0;
    } else {
        let res = -1;
        let depth = 0;
        let stack = [];
        for(let i = 0; i < s.length; i++) {
            if(s[i] === '(') {
                stack.push('(');
                depth += 1;
            } else if (s[i] === ')' && stack[stack.length-1] === '(') {
                res = Math.max(res, depth);
                depth -= 1;
                stack.pop();
            }
        }
        return res;
    }
};