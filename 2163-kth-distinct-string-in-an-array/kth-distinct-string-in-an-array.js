/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let map = new Map();
    let res = '';
    for(let i = 0; i < arr.length; i++) {
        map.set(arr[i], ((map.get(arr[i]) + 1) || 1));
    }
    for(let [key, value] of map) {
        if(value === 1) {
            res = key;
            k -= 1;
            if(k === 0) {
                return res;
            }
        }
    }
    return k !== 0 ? '' : res;
};