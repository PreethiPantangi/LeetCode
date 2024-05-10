/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let fractionsArr = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            let frac = arr[i]/arr[j];
            if(frac !== 1) {
                fractionsArr.push([frac, arr[i], arr[j]]);
            }
        }   
    }
    fractionsArr.sort((a,b) => a[0] - b[0]);
    return [fractionsArr[k - 1][1], fractionsArr[k - 1][2]];
};