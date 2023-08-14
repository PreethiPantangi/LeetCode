/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length;) {
        subArr = [];
        count = 1;
        while(count <= size && i < arr.length) {
            subArr.push(arr[i])
            count += 1
            i += 1
        }
        result.push(subArr)
        subArr = [];
        count = 1;
    }
    return result
};