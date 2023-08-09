/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 1;
    let end = x;
    ans = 0;
    while (start <= end) {
        mid = parseInt(start + (end - start)/2);
        if (mid*mid === x) {
            return mid;
        } else {
            if (mid*mid > x) {
                end = mid - 1;
            } else {
                ans = mid;
                start = mid + 1;
            }
        }
    }
    return ans;
};
