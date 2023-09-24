/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = [];
    for(let i = 0; i <= n; i++) {
        if(i === 0) {
            res.push(0)
        } else {
            let count = 0;
            let num = i;
            while (num > 0) {
                if(num % 2 === 1) {
                    count += 1;
                }
                num = Math.floor(num/2);
            }
            res.push(count)
        }
    }
    return res;
};