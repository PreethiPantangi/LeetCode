/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let res = 0;
    while(k > 0) {
        res += 1;
        if(!arr.includes(res)) {
            k -= 1;
        }
    }
    return res;
};