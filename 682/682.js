/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];
    for (let i = 0; i < operations.length; i++) {
        let operation = operations[i];
        if(!isNaN(+operation)) {
            stack.push(parseInt(operation))
        } else {
            if(operation == 'C') {
                stack.pop()
            } else if (operation === 'D') {
                stack.push(stack[stack.length - 1] * 2);
            } else if (operation === '+') {
                if(stack.length > 1) {
                    stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                } else {
                    if(stack.length === 0) {
                        stack.push(0);
                    } else {
                        stack.push(stack[stack.length - 1]);
                    }
                }
            }
        }
    }
    return stack.length === 0 ? 0 : stack.reduce((res, currentNumber) => res + currentNumber);
};
