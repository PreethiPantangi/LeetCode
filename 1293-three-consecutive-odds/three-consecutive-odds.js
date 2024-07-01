/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let oddCounter = 0;
    let i = 0;
    while(i < arr.length) {
        oddCounter = (arr[i] % 2 !== 0) ? oddCounter + 1 : 0;
        if(oddCounter === 3) return true;
        i += 1;
    }
    return false;
};