/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start = 0; 
    let end = n-1;
    let status;
    while(start <= end) {
        mid = parseInt(start + (end - start)/2);
        status = guess(mid+1);
        if(status === 0) {
            return mid+1;
        }else if (status === -1) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
};