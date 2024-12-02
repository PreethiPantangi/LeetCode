/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        let value = arr[i] * 2;
        if(arr.includes(value) && i != arr.indexOf(value)) {
            return true;
        }
    }
    return false;
};