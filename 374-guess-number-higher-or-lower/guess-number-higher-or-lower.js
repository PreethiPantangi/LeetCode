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
    var binarySearch = (start, end) => {
        let mid = Math.floor((start + end)/2);
        let pick = guess(mid);
        if(pick === 0) {
            return mid;
        } else if (pick === 1) {
            return binarySearch(mid + 1, end);
        } else {
            return binarySearch(start, mid - 1);
        }
    }
    return binarySearch(1, n);
};