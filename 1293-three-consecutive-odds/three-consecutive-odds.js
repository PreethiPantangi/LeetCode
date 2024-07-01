/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let i = 0, j = i + 1, k = j + 1;
    while(k < arr.length) {
        if((arr[i] % 2 !== 0) && (arr[j] % 2 !== 0) && (arr[k] % 2 !== 0)) {
            return true;
        }
        i += 1;
        j += 1;
        k += 1;
    }
    return false;
};