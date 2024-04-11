/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = [];
    for (let digit of num) {
        while (stack.length > 0 && k > 0 && digit < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        if(stack.length === 0 && digit === "0") {
            continue;
        }
        stack.push(digit);
    }
    while (k > 0 && stack.length > 0) {
        stack.pop();
        k--;
    }
    return stack.length === 0 ? "0" : stack.join('');
};