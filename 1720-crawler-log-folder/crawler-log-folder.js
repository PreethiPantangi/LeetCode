/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let res = 0;
    for(let i = 0;i < logs.length; i++) {
        if(logs[i] === '../') {
            if(res > 0) {
                res -= 1;
            }
        } else {
            if(logs[i] !== './') {
                res += 1;
            }
        }
    }
    return res;
};