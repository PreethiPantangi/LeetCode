/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var res = [];
var flat = function (arr, n) {
    if(n === 0 || arr.every((ele) => !Array.isArray(ele))) {
        return arr;
    } else {
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
                res.push(...arr[i]);
            } else {
                res.push(arr[i]);
            }
        }
        return flat(res, n-1);
    }
};
