/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let stack = [];
    for (let i = 0; i < logs.length; i++) {
        logs[i] = logs[i].replace('/', '');
        if(logs[i] === '..') {
            stack.pop();
        } else if (logs[i] != '.') {
            stack.push(logs[i])
        } 
    }
    return stack.length;
};
