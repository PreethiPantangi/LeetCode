/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    ans = 0;
    isSeqBuilt = false;
    sequence = '';
    if (n <= 9) {
        return n;
    } else {
        let start = 1;
        let end = calculateDigits(n);
        while (start <= end) {
            mid = parseInt(start + (end - start)/2);
            console.log(mid);
            if (mid === n) {
                console.log();
                return mid;
            }
            if (mid < n) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
};

var calculateDigits = (n) => {
    return 9 + (((n - 10) + 1) * 2);
}

// console.log(findNthDigit(3));
// console.log(findNthDigit(11));
console.log(findNthDigit(44));
// console.log(findNthDigit(23));
// console.log(findNthDigit(22));
// console.log(findNthDigit(111));
// console.log(findNthDigit(1000000));