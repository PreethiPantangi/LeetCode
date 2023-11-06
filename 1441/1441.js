/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let stack = [];
    let stackElements = [];
    for(let i = 1; i <= n; i++) {
        stack.push("Push");
        stackElements.push(i);
        if(!target.includes(i)) {
            stack.push("Pop");
            stackElements.pop();
        }
        if(JSON.stringify(stackElements) === JSON.stringify(target)) {
            break;
        }
    }
    return stack;
};