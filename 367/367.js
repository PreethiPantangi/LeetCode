/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let start = 1;
    let end = num;
    while (start <= end) {
        mid = parseInt(start + (end - start)/2);
        let square = mid * mid;
        if(square === num) {
            return true;
        }
        if (square > num) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
};
